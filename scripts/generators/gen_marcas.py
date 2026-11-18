# -*- coding: utf-8 -*-
"""
Generator for Marcas & Empresas: 217 unique items
Subcategories: tecnologia_redes, alimentacao_bebidas, moda_esporte, automoveis_varejo
"""
import sys
sys.path.append('.')
import scripts.builder_common as bc
from scripts.create_marcas_part1 import RAW_TECH, RAW_ALIMENTOS
from scripts.create_marcas_part2 import RAW_MODA, RAW_AUTO

RAW_MARCAS = RAW_TECH + RAW_ALIMENTOS + RAW_MODA + RAW_AUTO

def get_items():
    return [bc.make_item(*x) for x in RAW_MARCAS]

def get_new_items():
    existing = bc.get_existing_names_for_theme('Marcas & Empresas')
    all_cand = get_items()
    seen = set()
    unique_new = []
    for x in all_cand:
        name = bc.get_item_name(x)
        norm = bc.normalize_name(name)
        if norm not in existing and norm not in seen:
            seen.add(norm)
            unique_new.append(x)
    return unique_new

if __name__ == '__main__':
    items = get_new_items()
    print(f"gen_marcas new items: {len(items)}")
