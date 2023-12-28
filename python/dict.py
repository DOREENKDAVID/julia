def pathogen():
    
    pathogen_info = {"name":"Ecoli", "genus": "coli", "genome_size":"300bp"}
    for key in pathogen_info.keys():
        if key == "genome_size":
            print(pathogen_info[key])
pathogen()
