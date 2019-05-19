import os
from wiki import print_dict

# Get rid of unuseful markers ( prettifies )
def prettify(string):
    return string.replace('{','').replace('}', '').replace('trans-top|', '')
    
# Returns a dictionary contaning [ word =>  definition]
def extract_defs_and_translations(filename, target_lang):
    translations = {'': ''}
    if (os.path.isfile(filename) == False): raise Exception('Couldn\'t find '+filename)
    with open ( filename, ('rt')) as lines:
        current_definition = ''
        for line in lines:
            if line.find('trans-top') != -1:
                current_definition = prettify(line)
            if line.find('* '+target_lang) != -1:
                word = prettify(line)
                translations[word] = current_definition
    return translations

