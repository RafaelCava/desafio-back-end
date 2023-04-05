import requests
import csv

# Define a URL base da API
url_base = 'http://jurishand:3000/api'

# Faz uma requisição GET para listar todos os artigos jurídicos
response = requests.get(f'{url_base}/articles')
articles = response.json()

# Filtra os artigos por categoria e conta a quantidade de artigos por categoria
categories = {}
for article in articles:
    category = article['category']
    if category not in categories:
        categories[category] = 1
    else:
        categories[category] += 1

# Filtra os artigos por autor e conta a quantidade de artigos por autor
authors = {}
for article in articles:
    author = article['author']
    if author not in authors:
        authors[author] = 1
    else:
        authors[author] += 1

# Calcula a média de palavras por artigo
total_words = 0
for article in articles:
    content = article['content']
    words = content.split()
    total_words += len(words)

average_words = round(total_words / len(articles))

# Gera o relatório em formato CSV
with open('report.csv', 'w', newline='') as csvfile:
    fieldnames = ['category', 'quantity']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for category, quantity in categories.items():
        writer.writerow({'category': category, 'quantity': quantity})

    writer.writerow({})
    fieldnames = ['author', 'quantity']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for author, quantity in authors.items():
        writer.writerow({'author': author, 'quantity': quantity})

    writer.writerow({})
    fieldnames = ['average_words']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerow({'average_words': average_words})
