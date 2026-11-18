# -*- coding: utf-8 -*-
"""
Generator for Mitologia & Lendas: 219 unique items
Subcategories: grega_romana, nordica, folclore_br, egipcia_oriental
"""
import sys
sys.path.append('.')
import scripts.builder_common as bc
from scripts.create_mitologia_part1 import RAW_GREGA, RAW_NORDICA
from scripts.create_mitologia_part2 import RAW_FOLCLORE, RAW_EGIPCIA

RAW_MITOLOGIA = RAW_GREGA + RAW_NORDICA + RAW_FOLCLORE + RAW_EGIPCIA

def get_items():
    return [bc.make_item(*x) for x in RAW_MITOLOGIA]

def get_new_items():
    existing = bc.get_existing_names_for_theme('Mitologia & Lendas')
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
    print(f"gen_mitologia new items: {len(items)}")
