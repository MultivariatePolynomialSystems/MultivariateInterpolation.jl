var documenterSearchIndex = {"docs":
[{"location":"on_varieties/interpolation/#Interpolation","page":"Interpolation","title":"Interpolation","text":"","category":"section"},{"location":"on_varieties/sampling/#Sampling","page":"Sampling","title":"Sampling","text":"","category":"section"},{"location":"on_varieties/sampling/","page":"Sampling","title":"Sampling","text":"In this Julia package we partially deal with polynomial and rational function defined on algebraic varieties. These varieties are defined by multivariate polynomial systems. We use HomotopyContinuation.jl to sample these algebraic varieties. The samples are later used for the interpolation. ","category":"page"},{"location":"on_varieties/sampling/","page":"Sampling","title":"Sampling","text":"An alternative would be that a user provides a method that will generate samples without using HomotopyContinuation. In practice it is usually possible to provide such a method, since we very often deal with structured polynomial systems.","category":"page"},{"location":"on_varieties/sampling/","page":"Sampling","title":"Sampling","text":"possible_to_sample\nsample\nsample!","category":"page"},{"location":"on_varieties/sampling/#MultivariateInterpolation.possible_to_sample","page":"Sampling","title":"MultivariateInterpolation.possible_to_sample","text":"possible_to_sample(X::AbstractDifferentiatedVariety, vars::FixedFreeVariables; kwargs...)\n\nReturns false if there exists a free variable in vars that is determined in  finite many ways by all fixed variables in vars. \n\nThrows a WARNING (for keyword argument logging=true) if there are  no constraints in free variables after fixing all the fixed ones.\n\nKeyword arguments:\n\n\ntols::Tolerances=Tolerances(): tolerances structure used for computations. Tolerances used \n\nin this method: same as in image_dimension.\n\nlogging::Bool=true\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/sampling/#MultivariateInterpolation.sample","page":"Sampling","title":"MultivariateInterpolation.sample","text":"sample(F::Union{SampledSystem, MapGraph}, vars::FixedFreeVariables; kwargs...)\n\nReturns samples for the given polynomial system F and variables vars. The return type is FixedFreeSamples.\n\nKeyword arguments:\n\nnsamples::Integer=1: defines number of samples to compute\nstart_point::Union{AbstractVector, Nothing}=nothing: specifies the starting point of the variety defined by F from which to start collecting other samples.\ntols::Tolerances=Tolerances(): tolerances structure used for computations. Tolerances used  in this method: rank_atol, \nrand_method::Symbol=:rand_unit: method for generating random samples.\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/sampling/#MultivariateInterpolation.sample!","page":"Sampling","title":"MultivariateInterpolation.sample!","text":"sample!(F::Union{SampledSystem, MapGraph}, vars::FixedFreeVariables; kwargs...)\n\nGenerates samples using sample method and updates F. The computed samples can be then obtained by running samples(F, vars).\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/varieties/#Algebraic-varieties","page":"Algebraic varieties","title":"Algebraic varieties","text":"","category":"section"},{"location":"on_varieties/varieties/#Abstract-algebraic-varieties","page":"Algebraic varieties","title":"Abstract algebraic varieties","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"AbstractAlgebraicVariety\nAbstractDifferentiatedVariety\nAbstractSampledVariety","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.AbstractAlgebraicVariety","page":"Algebraic varieties","title":"MultivariateInterpolation.AbstractAlgebraicVariety","text":"AbstractAlgebraicVariety\n\nInterface:\n\nvariables(X::AbstractAlgebraicVariety) -> AbstractVector{Variable}\n\nnvariables(X::AbstractAlgebraicVariety) -> Integer\n\nexpressions(X::AbstractAlgebraicVariety) -> AbstractVector{Expression}\n\nnexpressions(X::AbstractAlgebraicVariety) -> Integer\n\ngenerate_sample(X::AbstractAlgebraicVariety) -> AbstractVector{ComplexF64}\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#MultivariateInterpolation.AbstractDifferentiatedVariety","page":"Algebraic varieties","title":"MultivariateInterpolation.AbstractDifferentiatedVariety","text":"AbstractDifferentiatedVariety <: AbstractAlgebraicVariety\n\nInterface:\n\nfull_jacobian(X::AbstractDifferentiatedVariety) -> AbstractMatrix{Expression}\n\nfull_jacobian(\n    X::AbstractDifferentiatedVariety,\n    x::AbstractVector{ComplexF64}\n) -> AbstractMatrix{ComplexF64}\n\ntangent_space(\n    X::AbstractDifferentiatedVariety,\n    x::AbstractVector{ComplexF64}\n) -> AbstractMatrix{ComplexF64}\n\ndimension(X::AbstractDifferentiatedVariety) -> Integer\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#MultivariateInterpolation.AbstractSampledVariety","page":"Algebraic varieties","title":"MultivariateInterpolation.AbstractSampledVariety","text":"AbstractSampledVariety <: AbstractDifferentiatedVariety\n\nInterface:\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"1+1","category":"page"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"1+1","category":"page"},{"location":"on_varieties/varieties/#AffineSpace","page":"Algebraic varieties","title":"AffineSpace","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"AffineSpace","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.AffineSpace","page":"Algebraic varieties","title":"MultivariateInterpolation.AffineSpace","text":"AffineSpace <: AbstractAlgebraicVariety\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#AlgebraicVariety","page":"Algebraic varieties","title":"AlgebraicVariety","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"AlgebraicVariety","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.AlgebraicVariety","page":"Algebraic varieties","title":"MultivariateInterpolation.AlgebraicVariety","text":"AlgebraicVariety <: AbstractAlgebraicVariety\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#DifferentiatedVariety","page":"Algebraic varieties","title":"DifferentiatedVariety","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"DifferentiatedVariety","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.DifferentiatedVariety","page":"Algebraic varieties","title":"MultivariateInterpolation.DifferentiatedVariety","text":"DifferentiatedVariety <: AbstractDifferentiatedVariety\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#SampledVariety","page":"Algebraic varieties","title":"SampledVariety","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"SampledVariety","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.SampledVariety","page":"Algebraic varieties","title":"MultivariateInterpolation.SampledVariety","text":"SampledVariety <: AbstractSampledVariety\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/varieties/#MapGraph","page":"Algebraic varieties","title":"MapGraph","text":"","category":"section"},{"location":"on_varieties/varieties/","page":"Algebraic varieties","title":"Algebraic varieties","text":"MapGraph","category":"page"},{"location":"on_varieties/varieties/#MultivariateInterpolation.MapGraph","page":"Algebraic varieties","title":"MultivariateInterpolation.MapGraph","text":"MapGraph{T<:ExpressionMap} <: AbstractSampledVariety\n\n\n\n\n\n","category":"type"},{"location":"fixed_free/#Fixed-free-interpolation","page":"Fixed-free interpolation","title":"Fixed-free interpolation","text":"","category":"section"},{"location":"fixed_free/#FixedFreeVariables","page":"Fixed-free interpolation","title":"FixedFreeVariables","text":"","category":"section"},{"location":"fixed_free/","page":"Fixed-free interpolation","title":"Fixed-free interpolation","text":"FixedFreeVariables","category":"page"},{"location":"fixed_free/#MultivariateInterpolation.FixedFreeVariables","page":"Fixed-free interpolation","title":"MultivariateInterpolation.FixedFreeVariables","text":"FixedFreeVariables\n\n\n\n\n\n","category":"type"},{"location":"fixed_free/#FixedFreeSamples","page":"Fixed-free interpolation","title":"FixedFreeSamples","text":"","category":"section"},{"location":"fixed_free/","page":"Fixed-free interpolation","title":"Fixed-free interpolation","text":"FixedFreeSamples","category":"page"},{"location":"fixed_free/#MultivariateInterpolation.FixedFreeSamples","page":"Fixed-free interpolation","title":"MultivariateInterpolation.FixedFreeSamples","text":"FixedFreeSamples\n\n\n\n\n\n","category":"type"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"MultivariateInterpolation.jl is a Julia package that provides methods for interpolating sparse and dense multivariate polynomial and rational functions from samples taken either from an algebraic variety or an affine space.","category":"page"},{"location":"#Quick-start","page":"Introduction","title":"Quick start","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"using MultivariateInterpolation\n@var R[1:3,1:3] t[1:3] E[1:3,1:3]","category":"page"},{"location":"#Contents","page":"Introduction","title":"Contents","text":"","category":"section"},{"location":"inter_basis/#Interpolation-basis","page":"Interpolation basis","title":"Interpolation basis","text":"","category":"section"},{"location":"inter_basis/#Abstract-interpolation-bases","page":"Interpolation basis","title":"Abstract interpolation bases","text":"","category":"section"},{"location":"inter_basis/","page":"Interpolation basis","title":"Interpolation basis","text":"AbstractInterpolationBasis\nAbstractMonomialVector","category":"page"},{"location":"inter_basis/#MultivariateInterpolation.AbstractInterpolationBasis","page":"Interpolation basis","title":"MultivariateInterpolation.AbstractInterpolationBasis","text":"AbstractInterpolationBasis\n\nInterface:\n\n\n\n\n\n","category":"type"},{"location":"inter_basis/#MultivariateInterpolation.AbstractMonomialVector","page":"Interpolation basis","title":"MultivariateInterpolation.AbstractMonomialVector","text":"AbstractMonomialVector <: AbstractInterpolationBasis\n\nInterface:\n\n\n\n\n\n","category":"type"},{"location":"inter_basis/#MonomialVector","page":"Interpolation basis","title":"MonomialVector","text":"","category":"section"},{"location":"inter_basis/","page":"Interpolation basis","title":"Interpolation basis","text":"MonomialVector","category":"page"},{"location":"inter_basis/#MultivariateInterpolation.MonomialVector","page":"Interpolation basis","title":"MultivariateInterpolation.MonomialVector","text":"MonomialVector{Tv<:Integer,Ti<:Integer} <: AbstractMonomialVector\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/maps/#ExpressionMap","page":"ExpressionMap","title":"ExpressionMap","text":"","category":"section"},{"location":"on_varieties/maps/","page":"ExpressionMap","title":"ExpressionMap","text":"ExpressionMap\ndomain_dimension\nimage_dimension\nis_dominant","category":"page"},{"location":"on_varieties/maps/#MultivariateInterpolation.ExpressionMap","page":"ExpressionMap","title":"MultivariateInterpolation.ExpressionMap","text":"ExpressionMap{T <: AbstractAlgebraicVariety}\n\n\n\n\n\n","category":"type"},{"location":"on_varieties/maps/#MultivariateInterpolation.domain_dimension","page":"ExpressionMap","title":"MultivariateInterpolation.domain_dimension","text":"domain_dimension(φ::ExpressionMap; kwargs...)\n\nComputes the dimension of the domain of varphi.\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/maps/#MultivariateInterpolation.image_dimension","page":"ExpressionMap","title":"MultivariateInterpolation.image_dimension","text":"image_dimension(φ::ExpressionMap; kwargs...)\n\nComputes the dimension of the image of varphi.\n\n\n\n\n\n","category":"function"},{"location":"on_varieties/maps/#MultivariateInterpolation.is_dominant","page":"ExpressionMap","title":"MultivariateInterpolation.is_dominant","text":"is_dominant(φ::ExpressionMap; kwargs...)\n\nReturns true if varphi colon X dashrightarrow mathbbC^m is dominant, i.e. if\n\nmathrmdim(mathrmim(varphi)) = m\n\n\n\n\n\n","category":"function"}]
}
