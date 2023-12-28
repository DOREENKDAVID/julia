#!usr/bin/julia

function proteins()
    protein = ["insulin", "haemoglobin", "collagen"]
    lengths = [51, 146, 300]
    println(protein[2], " ", lengths[2], " amino acids")
end

proteins() 
