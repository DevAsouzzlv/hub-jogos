# -*- coding: utf-8 -*-
import json
import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extrair THEME_DATABASE
# O arquivo começa com const THEME_DATABASE = { ... };
start = text.find('const THEME_DATABASE = ') + len('const THEME_DATABASE = ')
end = text.find(';\n\n// DICAS DO IMPOSTOR INDEXADAS')
json_part = text[start:end].strip()

try:
    db = json.loads(json_part)
    print("Parsed JSON successfully!")
    for theme, data in db.items():
        print(f"{theme}: {len(data['items'])} items")
except Exception as e:
    print("Error parsing JSON:", e)
