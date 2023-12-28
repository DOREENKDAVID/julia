function fibonacci_recursive(n)
    fibonacci = []
    if n <= 1
        push!(fibonacci, n)
    else
        fib = fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
        push!(fibonacci, fib)
    end
    return fibonacci
end

result = fibonacci_recursive(20)
println(result)
