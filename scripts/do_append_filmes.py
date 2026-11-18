# -*- coding: utf-8 -*-
import sys
sys.path.append('.')
import scripts.builder_common as bc
from scripts.append_filmes_extra import EXTRA_SERIES

existing = bc.get_existing_names_for_theme('Filmes & Séries')
seen = set()
valid_series = []
for item in EXTRA_SERIES:
    name = item[0]
    norm = bc.normalize_name(name)
    if norm not in existing and norm not in seen:
        seen.add(norm)
        valid_series.append(item)

print('Valid extra series count:', len(valid_series))

with open('scripts/generators/gen_filmes.py', 'r', encoding='utf-8') as f:
    text = f.read()

target = ']\n\ndef get_items():'
replacement = ''
for item in valid_series:
    replacement += f'    {repr(item)},\n'
replacement += ']\n\ndef get_items():'

new_text = text.replace(target, replacement, 1)
with open('scripts/generators/gen_filmes.py', 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Appended successfully to gen_filmes.py!')
