from flask import Flask, request, render_template
from wiki import *
from bs4 import BeautifulSoup
import wikipedia
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
@app.route('/list')
def list():
    word_to_translate = request.args.get('word')
    print(word_to_translate)
    related_pages = get_related_wiki_pages(word_to_translate)
    wiki_page = wikipedia.page(related_pages[0])
    return render_template("base.html", data=related_pages)
@app.route("/translate")
def translate():
    word_to_translate = request.args.get('word')
    print(word_to_translate)
    related_pages = get_related_wiki_pages(word_to_translate)
    wiki_page = wikipedia.page(related_pages[0])
    list_links = scrap_all_languages_links(get_wiki_html_page(wiki_page.title, 'en'))
    link_target_language = retrieve_target_language_link(list_links,'fr')
    translated_word = title_wiki_page(link_target_language)
    
    return translated_word
