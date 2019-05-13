import wikipedia, requests
from bs4 import BeautifulSoup
from wiki import *

word_to_translate = 'Dog'

list_languages = wikipedia.languages()
target_language = 'fr'
result = wikipedia.search(word_to_translate)
print(result)
