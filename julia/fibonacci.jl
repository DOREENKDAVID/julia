function fibonacci_recursive(n)
  if n <= 1
     return n
  else
     return fibonacci_recursive[n -1] + fibonacci_recursive[n-2]
  
  end
end

sequnce = []
for i in 0:9
  push!(sequnce, fibonacci_recursive(i))
end
println(sequnce)
