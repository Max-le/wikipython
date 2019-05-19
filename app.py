import sys, scan, request, iso639
language = 'de'
try: 
    word = sys.argv[1]
except: 
    print("Error : no word received.")
    sys.exit(0)

request.get_wiktionary_data(word)
scan.extract_defs_and_translations('word_data.txt', '')
