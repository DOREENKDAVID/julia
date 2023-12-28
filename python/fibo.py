def fibonacci(n):
    
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)


sequence = []

for i  in range(10):
    sequence.append(fibonacci(i))
print(sequence)
