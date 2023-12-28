function is_valid_sequence(seq::String)
    valid_chars = Set(['A', 'T', 'C', 'G'])
    return all(c -> c in valid_chars, seq)
end

function reverse_complement(seq::String)
    if is_valid_sequence(seq)
        complement_dict = Dict('A' => 'T', 'T' => 'A', 'C' => 'G', 'G' => 'C')
	reversed_seq = reverse(seq)
	println("reverse sequence: $reversed_seq")
        complement_seq = [complement_dict[c] for c in reversed_seq]
        return join(complement_seq)
    else
        return "Invalid DNA sequence. Please use only 'A', 'T', 'C', and 'G' characters."
    end
end

# Example usage:
dna_sequence = "ATCGTACG"
reverse_comp = reverse_complement(dna_sequence)
println("Original sequence: $dna_sequence")
println("Reverse complement: $reverse_comp")

