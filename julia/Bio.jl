module Bio

export calculator

function add(x, y)
    return x + y
end

function sub(x, y)
    return x - y
end

function mul(x, y)
    return x * y
end

function div(x, y)
    if y == 0
        println("Error: Division by zero is not allowed")
        return NaN
    else
        return x / y
    end
end
function GC_content(seq::String)
     if isempty(seq) || count(uppercase(seq), "GC") == 0
        println("Invalid sequence!")
        return NaN
     else
        gc_count  = count(uppercase(seq), "GC")
        total = (gc_count / length(seq)) * 100    
        return total
end
end
function calculator()
    println("Choose operation:")
    println("1: add, 2: sub, 3: mul, 4: div, 5: GC_content")
    choice = parse(Int64, readline())

    if choice in (1, 2, 3, 4)
    println("Enter two numbers:")
    x = parse(Float64, readline())
    y = parse(Float64, readline())


    if choice == 1
        result = add(x, y)
        println("Result: ", result)
    elseif choice == 2
        result = sub(x, y)
        println("Result: ", result)
    elseif choice == 3
        result = mul(x, y)
        println("Result: ", result)
    elseif choice == 4
        result = div(x, y)
        println("Result: ", result)
    else
        println("Invalid choice!")
    end

    elseif choice == 5
        println("Input a valid sequence: ")
        seq = (readline())
        result = GC_content(seq)
        println("aresult: ",result)
    else
        println("Invalid choice!")
    end

end


calculator()
end
