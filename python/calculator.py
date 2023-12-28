def add(x,y):
    summ = x + y
    print(summ)

def sub(x,y):
    diff = x - y
    print(diff)

def mul(x,y):
    prod = x * y
    print(prod)

def div(x,y):
    if y == 0:
        return None
    else:
        divv = x / y
    print(divv)

def GC_content(seq):
        gc_count = seq.upper().count('CG')
        total = ((gc_count/ len(seq)) * 100)
        print(total)


def calculator():
    print("1: add, 2: sub, 3: mul, 4: div, 5: GC_content")
    choice = int(input("choose operation: "))
    if choice in (1, 2, 3, 4):
      x = float(input("Enter first numbers: "))
      y = float(input("Enter second numbers: "))
    

    if choice == 1:
        result = add(x, y)
        print("Result: ", result)
    elif choice == 2:
        result = sub(x, y)
        print("Result: ", result)
    elif choice == 3:
        result = mul(x, y)
        print("Result: ", result)
    elif choice == 4:
        result = div(x, y)
        print("Result: ", result)
    elif choice == 5:
        seq = input("Enter Valid seq: ")
        result = GC_content(seq)
        print("Result: ", result)
                               
    else:
        print("invalid choice")

calculator()
