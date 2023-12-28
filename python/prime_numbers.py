def prime_numbers(x):
    for i in range(2, int(x ** 0.5) + 1):
        if x % i == 0:
            return False
    return True

for n in range(100):
    if prime_numbers(n):
        print(n)
