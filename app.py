import sys, scan, request, wiki
language = 'de'
try: 
    word = sys.argv[1]
except: 
    print("Error : no word received.")
    sys.exit(0)
try: 
    language = sys.argv[2]
except: 
    print("Default language : "+language )
    
request.get_wiktionary_data(word)
dico = scan.extract_defs_and_translations('word_data.txt',wiki.convert_lang_code(language) )
wiki.print_dict(dico)