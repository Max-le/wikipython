import sys, scan, wiki,pycountry, fetcher
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
fetcher.get_wiktionary_data(word)
dico = scan.extract_defs_and_translations('word_data.txt',wiki.get_iso_name(language) )
wiki.print_dict(dico)