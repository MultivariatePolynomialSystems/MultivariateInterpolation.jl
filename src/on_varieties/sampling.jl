export reasonable_to_sample,
    possible_to_sample


struct VariableEvaluation
    eval::Dict{Variable, ComplexF64}
end

VariableEvaluation(
    vars::Vector{Variable}, 
    vals::Vector{ComplexF64}
) = VariableEvaluation(Dict(zip(vars, vals)))

Base.getindex(
    eval::VariableEvaluation,
    vars::Vector{Variable}
) = [eval.eval[v] for v in vars]

HC.subs(
    F::System,
    substitutions::Pair...
) = System(
        subs(HC.expressions(F), substitutions...);
        variables=setdiff(HC.variables(F), vcat(first.(substitutions)...))
    )

function generate_sample(F::System; kwargs...)
    pair = HC.find_start_pair(F; kwargs...)
    isnothing(pair) && error("Couldn't generate a random sample of the system")
    x, p = pair
    p = isnothing(p) ? ComplexF64[] : p
    return vcat(x, p)
end

function finite_dominant_projection(
    F::System;
    sample::Union{AbstractVector{<:Number}, Nothing}=nothing,
    tols::Tolerances=Tolerances()
)
    φ = finite_dominant_projection(AlgebraicVariety(F); sample=sample, tols=tols)
    params = image_vars(φ)
    unknws = setdiff(variables(F), params)
    return System(HC.expressions(F); variables=unknws, parameters=params)
end

# TODO: has to return false if possible_to_sample is false
"""
    reasonable_to_sample(X::AbstractAlgebraicVariety, vars::FixedFreeVariables; <keyword_arguments>)

Return `false` if there are no constraints in free variables 
after fixing all the fixed ones.
"""
function reasonable_to_sample(
    X::AbstractAlgebraicVariety,
    vars::FixedFreeVariables;
    sample::Union{AbstractVector{<:Number}, Nothing}=nothing,
    tols::Tolerances=Tolerances()
)
    dim_fixed = 0
    if !isempty(fixed(vars))
        φ = ExpressionMap(X; projection=fixed(vars))
        dim_fixed = image_dimension(φ; domain_sample=sample, tols=tols)
    end

    φ = ExpressionMap(X; projection=variables(vars))
    dim_all = image_dimension(φ; domain_sample=sample, tols=tols)
    return dim_all - dim_fixed ≠ nfree(vars)
end

"""
    possible_to_sample(X::AbstractAlgebraicVariety, vars::FixedFreeVariables; kwargs...)

Returns `false` if there exists a free variable in `vars` that is determined in 
finite many ways by all fixed variables in `vars`. Supposes that the projection to
each variable is dominant.

Throws a WARNING (for keyword argument `logging=true`) if there are 
no constraints in free variables after fixing all the fixed ones.

*Keyword arguments*:
* 
* `tols::Tolerances=Tolerances()`: tolerances structure used for computations. Tolerances used 
in this method: same as in [`image_dimension`](@ref).
* `logging::Bool=true`
"""
function possible_to_sample(
    X::AbstractAlgebraicVariety,
    vars::FixedFreeVariables;
    sample::Union{AbstractVector{<:Number}, Nothing}=nothing,
    tols::Tolerances=Tolerances(),
    logging::Bool=true
)
    @assert variables(vars) ⊆ variables(X)
    x = isnothing(sample) ? generate_sample(X) : sample

    dim_fixed = 0
    if !isempty(fixed(vars))
        φ = ExpressionMap(X; projection=fixed(vars))
        dim_fixed = image_dimension(φ; domain_sample=x, tols=tols)
    end

    if logging
        φ = ExpressionMap(X; projection=variables(vars))
        dim_all = image_dimension(φ; domain_sample=x, tols=tols)
        if dim_all - dim_fixed == nfree(vars)
            if isempty(fixed(vars))
                @warn "There are no constraints in $(join(free(vars), ", "))"
            else
                @warn "There are no constraints in $(join(free(vars), ", ")) after fixing $(join(fixed(vars), ", "))"
            end
        end
    end

    isempty(fixed(vars)) && return true

    for var in free(vars)
        φ = ExpressionMap(X; projection=vcat(fixed(vars), var))
        dim_var = image_dimension(φ; domain_sample=x, tols=tols)
        if dim_var == dim_fixed
            logging && @info "Variable $(var) is determined in finite many ways after fixing $(join(fixed(vars), ", "))"
            return false
        end
    end

    return true
end

# justified by the fact that the smallest degree is achieved in maximal fixed case
# follows from the fact that by fixing additional vars we don't increase the degree
function max_fixed_to_sample(
    F::AbstractAlgebraicVariety,
    vars::AbstractArray{Variable},
    x::Union{AbstractVector, Nothing}=nothing;
    tols::Tolerances=Tolerances()
)
    @assert !isempty(vars)
    @assert vars ⊆ variables(F)
    for var in vars

    end
end

# Supposes that each Result contains only 1 (if SUCCESS) or 0 (if FAIL) solutions
function extract_samples(
    results::Vector{Tuple{Result, Vector{ComplexF64}}},
    F::System;
    resample::Bool=false
)
    n_instances = length(results)
    samples = zeros(ComplexF64, nvariables(F), n_instances)
    k = 1
    for (res, p) in results
        sols = HC.solutions(res)
        if length(sols) == 1
            samples[1:nunknowns(F), k] = first(sols)
            samples[nunknowns(F)+1:end, k] = p
            k += 1
        elseif !resample
            error("Number of solutions in the $(k)-th result is $(length(sols)), expected $(n_tracked)")
        end
    end
    for i in k:n_instances
        while true
            instance_id = rand(1:i-1)  # TODO: what if i == 1?
            x₀ = samples[1:nunknowns(F), instance_id]
            p₀ = last(results[instance_id])
            p₁ = randn(ComplexF64, nparameters(F))
            res = HC.solve(
                F,
                x₀,
                start_parameters = p₀,
                target_parameters = p₁
            )
            sols = HC.solutions(res)
            if length(sols) == 1
                samples[1:nunknowns(F), i] = first(sols)
                samples[nunknowns(F)+1:end, i] = p₁
                break
            end
        end
    end
    return samples
end

# TODO: add keyword arg for same fixed values?
function sample(
    X::AlgebraicVariety,
    vars::FixedFreeVariables;
    nsamples::Integer=1,
    start_point::Union{AbstractVector, Nothing}=nothing,
    tols::Tolerances=Tolerances(),
    rand_method::Symbol=:rand_unit
)
    x = isnothing(start_point) ? generate_sample(X) : start_point
    if !possible_to_sample(X, vars; sample=start_point, tols=tols, logging=false)
        @warn "Impossible to sample"
    end
    if !reasonable_to_sample(X, vars; sample=start_point, tols=tols)
        @warn "Sampling is unnecessary"
    end

    if !isnothing(X.sample_generator)
        s = X.sample_generator(nsamples=nsamples, vars=vars) # TODO: add rand_method?
        !isnothing(s) && return s
    end

    x = VariableEvaluation(variables(X), x)
    x_fixed = x[fixed(vars)]
    G = subs(System(X), fixed(vars) => x_fixed)

    vars_not_fixed = setdiff(variables(X), fixed(vars)) # TODO: variables(G)?
    G = finite_dominant_projection(G; sample=x[vars_not_fixed], tols=tols)

    ps = [eval(rand_method)(ComplexF64, nparameters(G)) for _ in 1:nsamples]
    res = HC.solve(
        G,
        [x[unknowns(G)]],
        start_parameters = x[parameters(G)],
        target_parameters = ps
    )
    s = extract_samples(res, G; resample=true)

    ids_free = indexin(free(vars), variables(G)) # TODO: is there problem?
    free_samples = s[ids_free, :]
    return FixedFreeSamples(x_fixed, free_samples)
end
