function pathogen()
    
    pathogen_info = Dict("name"=>"Ecoli", "genus"=> "coli", "genome_size" => "300bp")
    for key in keys(pathogen_info)
        if key == "genome_size"
            println(pathogen_info[key])
end
end
end
pathogen() 
