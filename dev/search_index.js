var documenterSearchIndex = {"docs":
[{"location":"on_varieties/interpolation/#Interpolation","page":"Interpolation","title":"Interpolation","text":"","category":"section"},{"location":"on_varieties/sampling/#Sampling","page":"Sampling","title":"Sampling","text":"","category":"section"},{"location":"on_varieties/sampling/","page":"Sampling","title":"Sampling","text":"In this Julia package we partially deal with polynomial and rational function defined on algebraic varieties. These varieties are defined by multivariate polynomial systems. We use HomotopyContinuation.jl to sample these algebraic varieties. The samples are later used for the interpolation. ","category":"page"},{"location":"on_varieties/sampling/","page":"Sampling","title":"Sampling","text":"An alternative would be that a user provides a method that will generate samples without using HomotopyContinuation. In practice it is usually possible to provide such a method, since we very often deal with structured polynomial systems.","category":"page"},{"location":"on_varieties/sampling/","page":"Sampling","title":"Sampling","text":"reasonable_to_sample\npossible_to_sample\nsample\nsample!\nsamples","category":"page"},{"location":"on_varieties/sampling/#MultivariateInterpolation.reasonable_to_sample","page":"Sampling","title":"MultivariateInterpolation.reasonable_to_sample","text":"reasonable_to_sample(X::AbstractAlgebraicVariety, vars::FixedFreeVariables; <keyword_arguments>)\n\nReturn false if there are no constraints in free variables  after fixing all the fixed ones.\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/sampling/#MultivariateInterpolation.possible_to_sample","page":"Sampling","title":"MultivariateInterpolation.possible_to_sample","text":"possible_to_sample(X::AbstractAlgebraicVariety, vars::FixedFreeVariables; kwargs...)\n\nReturns false if there exists a free variable in vars that is determined in  finite many ways by all fixed variables in vars. Supposes that the projection to each variable is dominant.\n\nThrows a WARNING (for keyword argument logging=true) if there are  no constraints in free variables after fixing all the fixed ones.\n\nKeyword arguments:\n\n\ntols::Tolerances=Tolerances(): tolerances structure used for computations. Tolerances used \n\nin this method: same as in image_dimension.\n\nlogging::Bool=true\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/sampling/#MultivariateInterpolation.sample","page":"Sampling","title":"MultivariateInterpolation.sample","text":"sample(X::AbstractAlgebraicVariety, vars::FixedFreeVariables; <keyword arguments>) -> FixedFreeSamples\n\nReturns the samples of X in the given vars.  Results in an error, if it is impossible or unreasonable to sample the given vars from X.\n\nKeyword arguments\n\nnsamples::Integer=1: number of samples.\nstart_point::Union{AbstractVector, Nothing}=nothing: starting point for homotopy continuation.\ntols::Tolerances=Tolerances(): tolerances for numerical computations.\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/sampling/#MultivariateInterpolation.sample!","page":"Sampling","title":"MultivariateInterpolation.sample!","text":"sample!(X::AbstractAlgebraicVariety, vars::FixedFreeSamples; <keyword arguments>) -> FixedFreeSamples\n\nSamples X in the given vars and updates X with these samples.\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/sampling/#MultivariateInterpolation.samples","page":"Sampling","title":"MultivariateInterpolation.samples","text":"samples(X::AbstractAlgebraicVariety, vars::FixedFreeVariables) -> FixedFreeSamples\n\nReturns the saved samples of X in the given vars.\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/varieties/#Algebraic-varieties","page":"Algebraic varieties","title":"Algebraic varieties","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"Abstract type for algebraic varieties is given by","category":"page"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"AbstractAlgebraicVariety","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.AbstractAlgebraicVariety","page":"Algebraic varieties","title":"MultivariateInterpolation.AbstractAlgebraicVariety","text":"abstract type AbstractAlgebraicVariety end\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#AffineSpace","page":"Algebraic varieties","title":"AffineSpace","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"AffineSpace","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.AffineSpace","page":"Algebraic varieties","title":"MultivariateInterpolation.AffineSpace","text":"AffineSpace <: AbstractAlgebraicVariety\n\nAn AbstractAlgebraicVariety that represents an affine space mathbbC^n.\n\nConstructors\n\nAffineSpace(vars::AbstractVector{Variable})\nAffineSpace(vars::AbstractArray)\n\nExamples\n\njulia> @var R[1:3,1:3] t[1:3]\n(Variable[R₁₋₁ R₁₋₂ R₁₋₃; R₂₋₁ R₂₋₂ R₂₋₃; R₃₋₁ R₃₋₂ R₃₋₃], Variable[t₁, t₂, t₃])\n\njulia> AffineSpace(t)\nAffineSpace of dimension 3\n variables: t₁, t₂, t₃\n\njulia> AffineSpace(R)\nAffineSpace of dimension 9\n variables: R₁₋₁, R₂₋₁, R₃₋₁, R₁₋₂, R₂₋₂, R₃₋₂, R₁₋₃, R₂₋₃, R₃₋₃\n\njulia> AffineSpace([R, t])\nAffineSpace of dimension 12\n variables: R₁₋₁, R₂₋₁, R₃₋₁, R₁₋₂, R₂₋₂, R₃₋₂, R₁₋₃, R₂₋₃, R₃₋₃, t₁, t₂, t₃\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#AlgebraicVariety","page":"Algebraic varieties","title":"AlgebraicVariety","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"AlgebraicVariety","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.AlgebraicVariety","page":"Algebraic varieties","title":"MultivariateInterpolation.AlgebraicVariety","text":"AlgebraicVariety <: AbstractAlgebraicVariety\n\nAn AbstractAlgebraicVariety that represents basic algebraic variety defined by polynomial equations.\n\nConstructors\n\nAlgebraicVariety(\n    exprs::AbstractVector{Expression},\n    sample_generator::Function;\n    variables::AbstractVector{Variable}\n)\nAlgebraicVariety(\n    exprs::AbstractVector{Expression};\n    variables::AbstractVector{Variable}\n)\nAlgebraicVariety(exprs::AbstractArray, sample_generator::Function; variables::AbstractArray)\nAlgebraicVariety(exprs::AbstractArray; variables::AbstractArray)\n\nExamples\n\njulia> @var R[1:2,1:2] t[1:2]\n(Variable[R₁₋₁ R₁₋₂; R₂₋₁ R₂₋₂], Variable[t₁, t₂])\n\njulia> AlgebraicVariety([R'*R-I, det(R)-1]; variables=[R, t])\nAlgebraicVariety X ⊂ ℂ⁶\n 6 variables: R₁₋₁, R₂₋₁, R₁₋₂, R₂₋₂, t₁, t₂\n 5 expressions: \n  -1 + R₁₋₁^2 + R₂₋₁^2\n  R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n  R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n  -1 + R₁₋₂^2 + R₂₋₂^2\n  -1 + R₁₋₁*R₂₋₂ - R₁₋₂*R₂₋₁\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#MapGraph","page":"Algebraic varieties","title":"MapGraph","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"MapGraph","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.MapGraph","page":"Algebraic varieties","title":"MultivariateInterpolation.MapGraph","text":"MapGraph{T<:ExpressionMap} <: AbstractAlgebraicVariety\n\nAn AbstractAlgebraicVariety that represents a graph  Gamma = (x varphi(x))  x in X of an  ExpressionMap varphi colon X dashrightarrow mathbbC^m.\n\nConstructor\n\nMapGraph(φ::ExpressionMap)\n\nExamples\n\njulia> @var R[1:2,1:2] t[1:2] s[1:2]\n(Variable[R₁₋₁ R₁₋₂; R₂₋₁ R₂₋₂], Variable[t₁, t₂], Variable[s₁, s₂])\n\njulia> X = AlgebraicVariety([R'*R-I, det(R)-1]; variables=[R, t]);\n\njulia> Γ = MapGraph(ExpressionMap(X, expressions=Pair(s, R*t)))\nMapGraph Γ ⊂ ℂ⁶ × ℂ²\n domain part:\n  AlgebraicVariety X ⊂ ℂ⁶\n   6 variables: R₁₋₁, R₂₋₁, R₁₋₂, R₂₋₂, t₁, t₂\n   5 expressions: \n    -1 + R₁₋₁^2 + R₂₋₁^2\n    R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n    R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n    -1 + R₁₋₂^2 + R₂₋₂^2\n    -1 + R₁₋₁*R₂₋₂ - R₁₋₂*R₂₋₁\n image part:\n  s₁ = t₁*R₁₋₁ + t₂*R₁₋₂\n  s₂ = t₁*R₂₋₁ + t₂*R₂₋₂\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#Methods","page":"Algebraic varieties","title":"Methods","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"We will show the basic functionality of AbstractAlgebraicVariety on 2 concrete examples defined in AlgebraicVariety and MapGraph.","category":"page"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"variables(::AbstractAlgebraicVariety)\nnvariables(::AbstractAlgebraicVariety)\nexpressions(::AbstractAlgebraicVariety)\nnexpressions\ngenerate_sample\njacobian\ntangent_space\ndimension\nfinite_dominant_projection","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.variables-Tuple{AbstractAlgebraicVariety}","page":"Algebraic varieties","title":"MultivariateInterpolation.variables","text":"variables(X::AbstractAlgebraicVariety) -> Vector{Variable}\n\nReturn the variables of X.\n\nExamples\n\njulia> variables(X)\n6-element Vector{Variable}:\n R₁₋₁\n R₂₋₁\n R₁₋₂\n R₂₋₂\n   t₁\n   t₂\n\njulia> variables(Γ)\n8-element Vector{Variable}:\n R₁₋₁\n R₂₋₁\n R₁₋₂\n R₂₋₂\n   t₁\n   t₂\n   s₁\n   s₂\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/varieties/#MultivariateInterpolation.nvariables-Tuple{AbstractAlgebraicVariety}","page":"Algebraic varieties","title":"MultivariateInterpolation.nvariables","text":"nvariables(X::AbstractAlgebraicVariety) -> Int\n\nReturn the number of variables of X.\n\nExamples\n\njulia> nvariables(X)\n6\n\njulia> nvariables(Γ)\n8\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/varieties/#MultivariateInterpolation.expressions-Tuple{AbstractAlgebraicVariety}","page":"Algebraic varieties","title":"MultivariateInterpolation.expressions","text":"expressions(X::AbstractAlgebraicVariety) -> Vector{Expression}\n\nReturn the expressions of X.\n\nExamples\n\njulia> expressions(X)\n5-element Vector{Expression}:\n       -1 + R₁₋₁^2 + R₂₋₁^2\n      R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n      R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n       -1 + R₁₋₂^2 + R₂₋₂^2\n -1 + R₁₋₁*R₂₋₂ - R₁₋₂*R₂₋₁\n\njulia> expressions(Γ)\n7-element Vector{Expression}:\n       -1 + R₁₋₁^2 + R₂₋₁^2\n      R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n      R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n       -1 + R₁₋₂^2 + R₂₋₂^2\n -1 + R₁₋₁*R₂₋₂ - R₁₋₂*R₂₋₁\n   s₁ - (t₁*R₁₋₁ + t₂*R₁₋₂)\n   s₂ - (t₁*R₂₋₁ + t₂*R₂₋₂)\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/varieties/#MultivariateInterpolation.nexpressions","page":"Algebraic varieties","title":"MultivariateInterpolation.nexpressions","text":"nexpressions(X::AbstractAlgebraicVariety) -> Int\n\nReturn the number of expressions of X.\n\nExamples\n\njulia> nexpressions(X)\n5\n\njulia> nexpressions(Γ)\n7\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/varieties/#MultivariateInterpolation.generate_sample","page":"Algebraic varieties","title":"MultivariateInterpolation.generate_sample","text":"generate_sample(X::AbstractAlgebraicVariety) -> Vector{ComplexF64}\n\nGenerate a sample from X.\n\nExamples\n\njulia> generate_sample(X)\n6-element Vector{ComplexF64}:\n -0.8044679533846167 - 0.37355606563379196im\n  0.7966605813908512 - 0.3772169611682977im\n -0.7966605813908512 + 0.3772169611682977im\n -0.8044679533846167 - 0.37355606563379196im\n -0.1653103992303188 - 0.014776408348405386im\n  0.4869739603874435 - 0.8113780972782965im\n\njulia> generate_sample(Γ)\n8-element Vector{ComplexF64}:\n  -0.9484588204432428 + 0.27190339385225026im\n  -0.5995036004937357 - 0.4301711816163053im\n   0.5995036004937357 + 0.43017118161630535im\n  -0.9484588204432428 + 0.27190339385225026im\n  -0.5638302344774876 - 0.3707771509690897im\n  0.38660464552523993 + 0.4470517026250209im\n   0.6750474426323179 + 0.6326747874590103im\n -0.30971285075613664 + 0.14593473983144623im\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/varieties/#MultivariateInterpolation.jacobian","page":"Algebraic varieties","title":"MultivariateInterpolation.jacobian","text":"jacobian(X::AbstractAlgebraicVariety) -> Matrix{Expression}\n\nReturn the symbolic jacobian of X.\n\nExamples\n\njulia> jacobian(X)\n5×6 Matrix{Expression}:\n 2*R₁₋₁  2*R₂₋₁       0       0  0  0\n   R₁₋₂    R₂₋₂    R₁₋₁    R₂₋₁  0  0\n   R₁₋₂    R₂₋₂    R₁₋₁    R₂₋₁  0  0\n      0       0  2*R₁₋₂  2*R₂₋₂  0  0\n   R₂₋₂   -R₁₋₂   -R₂₋₁    R₁₋₁  0  0\n\njulia> jacobian(Γ)\n7×8 Matrix{Expression}:\n 2*R₁₋₁  2*R₂₋₁       0       0      0      0  0  0\n   R₁₋₂    R₂₋₂    R₁₋₁    R₂₋₁      0      0  0  0\n   R₁₋₂    R₂₋₂    R₁₋₁    R₂₋₁      0      0  0  0\n      0       0  2*R₁₋₂  2*R₂₋₂      0      0  0  0\n   R₂₋₂   -R₁₋₂   -R₂₋₁    R₁₋₁      0      0  0  0\n    -t₁       0     -t₂       0  -R₁₋₁  -R₁₋₂  1  0\n      0     -t₁       0     -t₂  -R₂₋₁  -R₂₋₂  0  1\n\n\n\n\n\njacobian(X::AbstractAlgebraicVariety, x::AbstractVector{<:Number}) -> Matrix{<:Number}\n\nReturn the jacobian of X evaluated at x.\n\nExamples\n\njulia> x = generate_sample(X);\n\njulia> jacobian(X, x)\n5×6 Matrix{ComplexF64}:\n  -1.53374+0.72824im    -1.62756-0.686261im        0.0+0.0im             0.0+0.0im       0.0+0.0im  0.0+0.0im\n  0.813778+0.343131im  -0.766869+0.36412im   -0.766869+0.36412im   -0.813778-0.343131im  0.0+0.0im  0.0+0.0im\n  0.813778+0.343131im  -0.766869+0.36412im   -0.766869+0.36412im   -0.813778-0.343131im  0.0+0.0im  0.0+0.0im\n       0.0+0.0im             0.0+0.0im         1.62756+0.686261im   -1.53374+0.72824im   0.0+0.0im  0.0+0.0im\n -0.766869+0.36412im   -0.813778-0.343131im   0.813778+0.343131im  -0.766869+0.36412im   0.0+0.0im  0.0+0.0im\n\njulia> x = generate_sample(Γ);\n\njulia> jacobian(Γ, x)\n7×8 Matrix{ComplexF64}:\n   1.98004+0.441998im   1.01158-0.865159im        0.0+0.0im       …        0.0+0.0im             0.0+0.0im       0.0+0.0im  0.0+0.0im\n -0.505789+0.43258im   0.990022+0.220999im   0.990022+0.220999im           0.0+0.0im             0.0+0.0im       0.0+0.0im  0.0+0.0im\n -0.505789+0.43258im   0.990022+0.220999im   0.990022+0.220999im           0.0+0.0im             0.0+0.0im       0.0+0.0im  0.0+0.0im\n       0.0+0.0im            0.0+0.0im        -1.01158+0.865159im           0.0+0.0im             0.0+0.0im       0.0+0.0im  0.0+0.0im\n  0.990022+0.220999im  0.505789-0.43258im   -0.505789+0.43258im            0.0+0.0im             0.0+0.0im       0.0+0.0im  0.0+0.0im\n  -0.85827+0.362656im       0.0+0.0im       -0.625043-0.817264im  …  -0.990022-0.220999im   0.505789-0.43258im   1.0+0.0im  0.0+0.0im\n       0.0+0.0im       -0.85827+0.362656im        0.0+0.0im          -0.505789+0.43258im   -0.990022-0.220999im  0.0+0.0im  1.0+0.0im\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/varieties/#MultivariateInterpolation.tangent_space","page":"Algebraic varieties","title":"MultivariateInterpolation.tangent_space","text":"tangent_space(X::AbstractAlgebraicVariety, x::AbstractVector{<:Number}; <keyword arguments>) -> Matrix{<:Number}\n\nReturn the tangent space of X at x.\n\nKeyword arguments\n\ntols::Tolerances=Tolerances(): tolerances for numerical computations.\n\nExamples\n\njulia> x = generate_sample(X);\n\njulia> tangent_space(X, x)\n6×3 Matrix{ComplexF64}:\n  0.326172+0.12926im   0.0-0.0im  0.0-0.0im\n  0.597181-0.142401im  0.0-0.0im  0.0-0.0im\n -0.597181+0.142401im  0.0-0.0im  0.0-0.0im\n  0.326172+0.12926im   0.0-0.0im  0.0-0.0im\n      -0.0-0.0im       1.0-0.0im  0.0-0.0im\n       0.0-0.0im       0.0-0.0im  1.0-0.0im\n\njulia> x = generate_sample(Γ);\n\njulia> tangent_space(Γ, x)\n8×3 Matrix{ComplexF64}:\n 0.0363119-0.652215im         0.0-0.0im              0.0-0.0im\n -0.242325-0.120728im         0.0-0.0im              0.0-0.0im\n  0.242325+0.120728im         0.0-0.0im              0.0-0.0im\n 0.0363119-0.652215im         0.0-0.0im              0.0-0.0im\n      -0.0-0.0im              1.0-0.0im              0.0-0.0im\n       0.0-0.0im              0.0-0.0im              1.0-0.0im\n  0.421251+0.0796069im  -0.201566+0.390146im    -1.05694-0.0744038im\n  0.458737-0.15848im      1.05694+0.0744038im  -0.201566+0.390146im\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/varieties/#MultivariateInterpolation.dimension","page":"Algebraic varieties","title":"MultivariateInterpolation.dimension","text":"dimension(X::AbstractAlgebraicVariety; <keyword arguments>) -> Int\n\nComputes the dimension of X.\n\nKeyword arguments\n\nsample::Union{AbstractVector{<:Number}, Nothing}=nothing: point that belongs to X.\ntols::Tolerances=Tolerances(): tolerances for numerical computations.\n\nExamples\n\njulia> dimension(X)\n3\n\njulia> dimension(Γ)\n3\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/varieties/#MultivariateInterpolation.finite_dominant_projection","page":"Algebraic varieties","title":"MultivariateInterpolation.finite_dominant_projection","text":"finite_dominant_projection(X::AbstractAlgebraicVariety; <keyword arguments>) -> ExpressionMap\n\nReturns a finite dominant projection from X to an affine space.\n\nKeyword arguments\n\nsample::Union{AbstractVector{<:Number}, Nothing}=nothing: point that belongs to X.\ntols::Tolerances=Tolerances(): tolerances for numerical computations.\n\nExamples\n\njulia> finite_dominant_projection(X)\nExpressionMap: ℂ⁶ ⊇ X - - > ℂ³\n domain:\n  AlgebraicVariety X ⊂ ℂ⁶\n   6 variables: R₁₋₁, R₂₋₁, R₁₋₂, R₂₋₂, t₁, t₂\n   5 expressions: \n    -1 + R₁₋₁^2 + R₂₋₁^2\n    R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n    R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n    -1 + R₁₋₂^2 + R₂₋₂^2\n    -1 + R₁₋₁*R₂₋₂ - R₁₋₂*R₂₋₁\n action:\n  projection to R₁₋₁, t₁, t₂\n\njulia> finite_dominant_projection(Γ)\nExpressionMap: ℂ⁸ ⊇ X - - > ℂ³\n domain:\n  MapGraph Γ ⊂ ℂ⁶ × ℂ²\n   domain part:\n    AlgebraicVariety X ⊂ ℂ⁶\n     6 variables: R₁₋₁, R₂₋₁, R₁₋₂, R₂₋₂, t₁, t₂\n     5 expressions: \n      -1 + R₁₋₁^2 + R₂₋₁^2\n      R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n      R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n      -1 + R₁₋₂^2 + R₂₋₂^2\n      -1 + R₁₋₁*R₂₋₂ - R₁₋₂*R₂₋₁\n   image part:\n    s₁ = t₁*R₁₋₁ + t₂*R₁₋₂\n    s₂ = t₁*R₂₋₁ + t₂*R₂₋₂\n action:\n  projection to R₁₋₁, t₁, t₂\n\n\n\n\n\n","category":"function"},{"location":"fixed_free/#Fixed-free-interpolation","page":"Fixed-free interpolation","title":"Fixed-free interpolation","text":"","category":"section"},{"location":"fixed_free/","page":"Fixed-free interpolation","title":"Fixed-free interpolation","text":"The interpolation technique in this Julia package is based on the","category":"page"},{"location":"fixed_free/#FixedFreeVariables","page":"Fixed-free interpolation","title":"FixedFreeVariables","text":"","category":"section"},{"location":"fixed_free/","page":"Fixed-free interpolation","title":"Fixed-free interpolation","text":"FixedFreeVariables\nfixed(::FixedFreeVariables)\nnfixed(::FixedFreeVariables)\nfree(::FixedFreeVariables)\nnfree(::FixedFreeVariables)\nvariables(::FixedFreeVariables)\nnvariables(::FixedFreeVariables)","category":"page"},{"location":"fixed_free/#MultivariateInterpolation.FixedFreeVariables","page":"Fixed-free interpolation","title":"MultivariateInterpolation.FixedFreeVariables","text":"FixedFreeVariables\n\nData type for creating fixed and free variables used for interpolation.\n\nFixedFreeVariables(fixed::Vector{Variable}, free::Vector{Variable})\nFixedFreeVariables(\n    fixed::Union{Variable, AbstractArray},\n    free::Union{Variable, AbstractArray}\n)\nFixedFreeVariables(free::Union{Variable, AbstractArray})\n\nExamples\n\njulia> @var x y[1:2] z[1:2,1:3]\n(x, Variable[y₁, y₂], Variable[z₁₋₁ z₁₋₂ z₁₋₃; z₂₋₁ z₂₋₂ z₂₋₃])\n\njulia> FixedFreeVariables(x)\nFixedFreeVariables: 0 fixed, 1 free\n fixed: \n free: x\n\njulia> FixedFreeVariables([x, y])\nFixedFreeVariables: 0 fixed, 3 free\n fixed: \n free: x, y₁, y₂\n\njulia> FixedFreeVariables([x, y], z)\nFixedFreeVariables: 3 fixed, 6 free\n fixed: x, y₁, y₂\n free: z₁₋₁, z₂₋₁, z₁₋₂, z₂₋₂, z₁₋₃, z₂₋₃\n\njulia> FixedFreeVariables([x, y], [y, z])\nERROR: Nontrivial intersection of fixed and free variables\n[...]\n\njulia> FixedFreeVariables([x, y, z], [])\nERROR: Array of free variables must be nonempty\n[...]\n\n\n\n\n\n","category":"type"},{"location":"fixed_free/#MultivariateInterpolation.fixed-Tuple{FixedFreeVariables}","page":"Fixed-free interpolation","title":"MultivariateInterpolation.fixed","text":"fixed(vars::FixedFreeVariables) -> Vector{Variable}\n\nReturn the fixed variables in vars.\n\n\n\n\n\n","category":"method"},{"location":"fixed_free/#MultivariateInterpolation.nfixed-Tuple{FixedFreeVariables}","page":"Fixed-free interpolation","title":"MultivariateInterpolation.nfixed","text":"nfixed(vars::FixedFreeVariables) -> Int\n\nReturn the number of fixed variables in vars.\n\n\n\n\n\n","category":"method"},{"location":"fixed_free/#MultivariateInterpolation.free-Tuple{FixedFreeVariables}","page":"Fixed-free interpolation","title":"MultivariateInterpolation.free","text":"free(vars::FixedFreeVariables) -> Vector{Variable}\n\nReturn the free variables in vars.\n\n\n\n\n\n","category":"method"},{"location":"fixed_free/#MultivariateInterpolation.nfree-Tuple{FixedFreeVariables}","page":"Fixed-free interpolation","title":"MultivariateInterpolation.nfree","text":"nfree(vars::FixedFreeVariables) -> Int\n\nReturn the number of free variables in vars.\n\n\n\n\n\n","category":"method"},{"location":"fixed_free/#MultivariateInterpolation.variables-Tuple{FixedFreeVariables}","page":"Fixed-free interpolation","title":"MultivariateInterpolation.variables","text":"variables(vars::FixedFreeVariables) -> Vector{Variable}\n\nReturn the concatenated vector of fixed and free variables in vars.\n\n\n\n\n\n","category":"method"},{"location":"fixed_free/#MultivariateInterpolation.nvariables-Tuple{FixedFreeVariables}","page":"Fixed-free interpolation","title":"MultivariateInterpolation.nvariables","text":"nvariables(vars::FixedFreeVariables) -> Int\n\nReturn the number of all the variables in vars.\n\n\n\n\n\n","category":"method"},{"location":"fixed_free/#FixedFreeSamples","page":"Fixed-free interpolation","title":"FixedFreeSamples","text":"","category":"section"},{"location":"fixed_free/","page":"Fixed-free interpolation","title":"Fixed-free interpolation","text":"FixedFreeSamples\nfixed(::FixedFreeSamples)\nfree(::FixedFreeSamples)\nnsamples(::FixedFreeSamples)","category":"page"},{"location":"fixed_free/#MultivariateInterpolation.FixedFreeSamples","page":"Fixed-free interpolation","title":"MultivariateInterpolation.FixedFreeSamples","text":"FixedFreeSamples\n\nData type contains samples from a variety for some FixedFreeVariables.\n\nConstructor\n\nFixedFreeSamples(fixed::Vector{ComplexF64}, free::Matrix{ComplexF64})\n\nExamples\n\njulia> v = randn(ComplexF64, 2);\n\njulia> M = randn(ComplexF64, 3, 4);\n\njulia> s = FixedFreeSamples(v, M)\nFixedFreeSamples with 4 samples\n fixed:\n2-element Vector{ComplexF64}:\n  -0.7366318944925887 - 0.5245827233156782im\n -0.05897853939946192 + 0.4503548970705814im\n free:\n3×4 Matrix{ComplexF64}:\n 0.0193034-0.466551im   -0.277376+0.281461im  -0.0982807+1.60069im      1.0759+0.113134im\n -0.677777+0.110846im  -0.0734675-0.812262im   -0.802048+0.643131im  -0.322837+0.54686im\n -0.221659-0.897734im    -1.06199-0.43677im     0.669207+0.868208im   -0.02822-0.733581im\n\n\n\n\n\n","category":"type"},{"location":"fixed_free/#MultivariateInterpolation.fixed-Tuple{FixedFreeSamples}","page":"Fixed-free interpolation","title":"MultivariateInterpolation.fixed","text":"fixed(s::FixedFreeSamples) -> Vector{ComplexF64}\n\nReturn the fixed samples in s.\n\n\n\n\n\n","category":"method"},{"location":"fixed_free/#MultivariateInterpolation.free-Tuple{FixedFreeSamples}","page":"Fixed-free interpolation","title":"MultivariateInterpolation.free","text":"free(s::FixedFreeSamples) -> Matrix{ComplexF64}\n\nReturn the free samples in s.\n\n\n\n\n\n","category":"method"},{"location":"fixed_free/#MultivariateInterpolation.nsamples-Tuple{FixedFreeSamples}","page":"Fixed-free interpolation","title":"MultivariateInterpolation.nsamples","text":"nsamples(s::FixedFreeSamples) -> Int\n\nReturn the number of samples in s.\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/lie-symmetries/#Lie-symmetries","page":"Lie symmetries","title":"Lie symmetries","text":"","category":"section"},{"location":"on_varieties/lie-symmetries/#Scaling-symmetries","page":"Lie symmetries","title":"Scaling symmetries","text":"","category":"section"},{"location":"on_varieties/lie-symmetries/","page":"Lie symmetries","title":"Lie symmetries","text":"scaling_symmetries\nScalingGroup","category":"page"},{"location":"on_varieties/lie-symmetries/#MultivariateInterpolation.scaling_symmetries","page":"Lie symmetries","title":"MultivariateInterpolation.scaling_symmetries","text":"scaling_symmetries(X::AbstractAlgebraicVariety)\n\nGiven an AbstractAlgebraicVariety X returns the group of scaling symmetries  of X.\n\njulia> @var x y a b c;\n\njulia> X = AlgebraicVariety([x^4+a^2+1, y^2+b+c]; variables=[x,y,a,b,c]);\n\njulia> scaling_symmetries(X)\nScalingGroup isomorphic to ℂˣ × ℤ₄ × ℤ₂\n 1 Lie scaling:\n  y ↦ y*λ, b ↦ b*λ^2, c ↦ c*λ^2\n\n modular scalings:\n  1 of order 4:\n   x ↦ -im*x, y ↦ im*y, b ↦ -b, c ↦ -c\n  1 of order 2:\n   x ↦ -x, y ↦ -y, a ↦ -a\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/lie-symmetries/#MultivariateInterpolation.ScalingGroup","page":"Lie symmetries","title":"MultivariateInterpolation.ScalingGroup","text":"ScalingGroup\n\nA ScalingGroup is the result of the scaling_symmetries computation.\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/lie-symmetries/#Matrix-Lie-groups","page":"Lie symmetries","title":"Matrix Lie groups","text":"","category":"section"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"MultivariateInterpolation.jl is a Julia package that provides methods for interpolating sparse and dense multivariate polynomial and rational functions from samples taken either from an algebraic variety or an affine space.","category":"page"},{"location":"#Quick-start","page":"Introduction","title":"Quick start","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"using MultivariateInterpolation\n@var R[1:3,1:3] t[1:3] E[1:3,1:3]\nX = AlgebraicVariety([R'*R-I, det(R)-1]; variables=[R, t]);\ntₓ = [0 -t[3] t[2]; t[3] 0 -t[1]; -t[2] t[1] 0] # skew-symmetric matrix\nφ = ExpressionMap(X, expressions=Pair(E, tₓ*R)); # map to essential matrices\nimage_dimension(φ)\nΓ = MapGraph(φ)","category":"page"},{"location":"#Contents","page":"Introduction","title":"Contents","text":"","category":"section"},{"location":"inter_basis/#Interpolation-basis","page":"Interpolation basis","title":"Interpolation basis","text":"","category":"section"},{"location":"inter_basis/","page":"Interpolation basis","title":"Interpolation basis","text":"Abstract type for interpolation basis is given by","category":"page"},{"location":"inter_basis/","page":"Interpolation basis","title":"Interpolation basis","text":"AbstractInterpolationBasis","category":"page"},{"location":"inter_basis/#MultivariateInterpolation.AbstractInterpolationBasis","page":"Interpolation basis","title":"MultivariateInterpolation.AbstractInterpolationBasis","text":"abstract type AbstractInterpolationBasis end\n\n\n\n\n\n","category":"type"},{"location":"inter_basis/#Interface","page":"Interpolation basis","title":"Interface","text":"","category":"section"},{"location":"inter_basis/","page":"Interpolation basis","title":"Interpolation basis","text":"In order to achieve the functionalities of this package that work on general AbstractInterpolationBasis, one should implement the following interface:","category":"page"},{"location":"inter_basis/","page":"Interpolation basis","title":"Interpolation basis","text":"nelements\nto_expressions\nevaluate","category":"page"},{"location":"inter_basis/#MultivariateInterpolation.nelements","page":"Interpolation basis","title":"MultivariateInterpolation.nelements","text":"nelements(B::AbstractInterpolationBasis) -> Integer\n\nReturn the number of elements in B.\n\n\n\n\n\n","category":"function"},{"location":"inter_basis/#MultivariateInterpolation.to_expressions","page":"Interpolation basis","title":"MultivariateInterpolation.to_expressions","text":"to_expressions(B::AbstractInterpolationBasis) -> AbstractVector{Expression}\n\nReturn the elements of B converted to Expressions.\n\n\n\n\n\n","category":"function"},{"location":"inter_basis/#HomotopyContinuation.ModelKit.evaluate","page":"Interpolation basis","title":"HomotopyContinuation.ModelKit.evaluate","text":"HC.evaluate(B::AbstractInterpolationBasis, samples::AbstractMatrix{<:Number})\n\nTBW\n\n\n\n\n\n","category":"function"},{"location":"inter_basis/#MonomialBasis","page":"Interpolation basis","title":"MonomialBasis","text":"","category":"section"},{"location":"inter_basis/","page":"Interpolation basis","title":"Interpolation basis","text":"MonomialBasis","category":"page"},{"location":"inter_basis/#MultivariateInterpolation.MonomialBasis","page":"Interpolation basis","title":"MultivariateInterpolation.MonomialBasis","text":"struct MonomialBasis{Tv<:Integer,Ti<:Integer} <: AbstractInterpolationBasis\n    mexps::Vector{SparseVector{Tv,Ti}}\n    vars::Vector{Variable}\nend\n\nAn AbstractInterpolationBasis that consists of monomials. Parametric type Tv defines the type of exponents in multiexponents, Ti defines the type of non-zero exponent indicies. See also SparseVector.\n\nMonomialBasis{Tv<:Integer, Ti<:Integer}(; variables::Vector{Variable}, degree::Integer)\nmonomials(variables::Vector{Variable}, degree::Integer)\n\nExamples\n\njulia> @var x y z\n(x, y, z)\n\njulia> mons = MonomialBasis{Int8, Int16}(variables=[x,y,z], degree=2)\n10-element MonomialBasis{Int8, Int16}\n[1, x, y, z, x^2, y^2, z^2, x*y, x*z, y*z]\n\njulia> samples = randn(ComplexF64, 3, 2)\n3×2 Matrix{ComplexF64}:\n  0.299344-0.238374im  -0.527805-0.360128im\n -0.114638+1.89994im    0.127791-0.846475im\n  0.303708+1.24025im   0.0363844-0.264417im\n\njulia> evaluate(mons, samples)\n10×2 Matrix{ComplexF64}:\n       1.0+0.0im              1.0+0.0im\n  0.299344-0.238374im   -0.527805-0.360128im\n -0.114638+1.89994im     0.127791-0.846475im\n  0.303708+1.24025im    0.0363844-0.264417im\n 0.0327848-0.142712im    0.148886+0.380155im\n  -3.59664-0.43561im    -0.700189-0.216343im\n  -1.44598+0.753349im  -0.0685926-0.0192413im\n  0.418581+0.596063im   -0.372288+0.400752im\n  0.386557+0.298866im   -0.114428+0.126458im\n  -2.39122+0.434849im   -0.219173-0.0645886im\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/maps/#ExpressionMap","page":"ExpressionMap","title":"ExpressionMap","text":"","category":"section"},{"location":"on_varieties/maps/","page":"ExpressionMap","title":"ExpressionMap","text":"ExpressionMap\ndomain(::ExpressionMap)\ndomain_vars(::ExpressionMap)\nndomain_vars(::ExpressionMap)\nexpression_vars(::ExpressionMap)\nnexpression_vars(::ExpressionMap)\nprojection_vars(::ExpressionMap)\nnprojection_vars(::ExpressionMap)\nimage_vars(::ExpressionMap)\nnimage_vars(::ExpressionMap)\nvariables(::ExpressionMap)\nnvariables(::ExpressionMap)\nexpressions(::ExpressionMap)\ndomain_dimension\nimage_dimension\nis_dominant","category":"page"},{"location":"on_varieties/maps/#MultivariateInterpolation.ExpressionMap","page":"ExpressionMap","title":"MultivariateInterpolation.ExpressionMap","text":"ExpressionMap{T <: AbstractAlgebraicVariety}\n\nA data type that represents a rational map  varphi colon X dashrightarrow mathbbC^m.\n\nConstructor\n\nExpressionMap(\n    domain::AbstractAlgebraicVariety;\n    expressions::Pair{<:AbstractArray, <:AbstractArray}=Pair(Variable[], Expression[]),\n    projection::AbstractArray=Variable[]\n)\n\nExamples\n\njulia> @var R[1:2,1:2] t[1:2] s[1:2]\n(Variable[R₁₋₁ R₁₋₂; R₂₋₁ R₂₋₂], Variable[t₁, t₂], Variable[s₁, s₂])\n\njulia> X = AlgebraicVariety([R'*R-I, det(R)-1]; variables=[R, t]);\n\njulia> φ = ExpressionMap(X; expressions=Pair(s, R*t), projection=t)\nExpressionMap: ℂ⁶ ⊇ X - - > ℂ⁴\n domain:\n  AlgebraicVariety X ⊂ ℂ⁶\n   6 variables: R₁₋₁, R₂₋₁, R₁₋₂, R₂₋₂, t₁, t₂\n   5 expressions: \n    -1 + R₁₋₁^2 + R₂₋₁^2\n    R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n    R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n    -1 + R₁₋₂^2 + R₂₋₂^2\n    -1 + R₁₋₁*R₂₋₂ - R₁₋₂*R₂₋₁\n action:\n  s₁ = t₁*R₁₋₁ + t₂*R₁₋₂\n  s₂ = t₁*R₂₋₁ + t₂*R₂₋₂\n  projection to t₁, t₂\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/maps/#MultivariateInterpolation.domain-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.domain","text":"domain(φ::ExpressionMap{T<:AbstractAlgebraicVariety}) -> T\n\nReturn the domain of φ.\n\nExamples\n\njulia> domain(φ)\nAlgebraicVariety X ⊂ ℂ⁶\n 6 variables: R₁₋₁, R₂₋₁, R₁₋₂, R₂₋₂, t₁, t₂\n 5 expressions: \n  -1 + R₁₋₁^2 + R₂₋₁^2\n  R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n  R₁₋₁*R₁₋₂ + R₂₋₁*R₂₋₂\n  -1 + R₁₋₂^2 + R₂₋₂^2\n  -1 + R₁₋₁*R₂₋₂ - R₁₋₂*R₂₋₁\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.domain_vars-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.domain_vars","text":"domain_vars(φ::ExpressionMap) -> Vector{Variable}\n\nReturn the variables of the domain of φ.\n\nExamples\n\njulia> domain_vars(φ)\n6-element Vector{Variable}:\n R₁₋₁\n R₂₋₁\n R₁₋₂\n R₂₋₂\n   t₁\n   t₂\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.ndomain_vars-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.ndomain_vars","text":"ndomain_vars(φ::ExpressionMap) -> Int\n\nReturn the number of variables in the domain of φ.\n\nExamples\n\njulia> ndomain_vars(φ)\n6\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.expression_vars-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.expression_vars","text":"expression_vars(φ::ExpressionMap) -> Vector{Variable}\n\nReturn the expression variables of φ.\n\nExamples\n\njulia> expression_vars(φ)\n2-element Vector{Variable}:\n s₁\n s₂\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.nexpression_vars-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.nexpression_vars","text":"nexpression_vars(φ::ExpressionMap) -> Int\n\nReturn the number of expression variables of φ.\n\nExamples\n\njulia> nexpression_vars(φ)\n2\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.projection_vars-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.projection_vars","text":"projection_vars(φ::ExpressionMap) -> Vector{Variable}\n\nReturn the projection variables of φ.\n\nExamples\n\njulia> projection_vars(φ)\n2-element Vector{Variable}:\n t₁\n t₂\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.nprojection_vars-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.nprojection_vars","text":"nprojection_vars(φ::ExpressionMap) -> Int\n\nReturn the number of projection variables of φ.\n\nExamples\n\njulia> nprojection_vars(φ)\n2\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.image_vars-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.image_vars","text":"image_vars(φ::ExpressionMap) -> Vector{Variable}\n\nReturn the concatenated vector of expression and projection variables of φ.\n\nExamples\n\njulia> image_vars(φ)\n4-element Vector{Variable}:\n s₁\n s₂\n t₁\n t₂\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.nimage_vars-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.nimage_vars","text":"nimage_vars(φ::ExpressionMap) -> Int\n\nReturn the number of image variables of φ.\n\nExamples\n\njulia> nimage_vars(φ)\n4\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.variables-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.variables","text":"variables(φ::ExpressionMap) -> Vector{Variable}\n\nReturn the concatenated vector of domain and expression variables of φ.\n\nExamples\n\njulia> variables(φ)\n8-element Vector{Variable}:\n R₁₋₁\n R₂₋₁\n R₁₋₂\n R₂₋₂\n   t₁\n   t₂\n   s₁\n   s₂\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.nvariables-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.nvariables","text":"nvariables(φ::ExpressionMap) -> Int\n\nReturn the number of variables of φ.\n\nExamples\n\njulia> nvariables(φ)\n8\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.expressions-Tuple{ExpressionMap}","page":"ExpressionMap","title":"MultivariateInterpolation.expressions","text":"expressions(φ::ExpressionMap) -> Vector{Expression}\n\nReturn the expressions that define φ. Doesn't include the projection variables.\n\nExamples\n\njulia> expressions(φ)\n2-element Vector{Expression}:\n t₁*R₁₋₁ + t₂*R₁₋₂\n t₁*R₂₋₁ + t₂*R₂₋₂\n\n\n\n\n\n","category":"method"},{"location":"on_varieties/maps/#MultivariateInterpolation.domain_dimension","page":"ExpressionMap","title":"MultivariateInterpolation.domain_dimension","text":"domain_dimension(φ::ExpressionMap; <keyword_arguments>) -> Int\n\nCompute the dimension of the domain of varphi.\n\nExamples\n\njulia> domain_dimension(φ)\n3\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/maps/#MultivariateInterpolation.image_dimension","page":"ExpressionMap","title":"MultivariateInterpolation.image_dimension","text":"image_dimension(φ::ExpressionMap; <keyword_arguments>) -> Int\n\nCompute the dimension of the image of varphi.\n\nExamples\n\njulia> image_dimension(φ)\n3\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/maps/#MultivariateInterpolation.is_dominant","page":"ExpressionMap","title":"MultivariateInterpolation.is_dominant","text":"is_dominant(φ::ExpressionMap; <keyword_arguments>)\n\nReturn true if varphi colon X dashrightarrow mathbbC^m is dominant, i.e. if\n\nmathrmdim(mathrmim(varphi)) = m\n\nExamples\n\njulia> is_dominant(φ)\nfalse\n\n\n\n\n\n","category":"function"}]
}
