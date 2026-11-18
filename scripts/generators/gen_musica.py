# -*- coding: utf-8 -*-
"""
Generator for Música & Ritmos: 220 unique items
Subcategories: rock_metal, pop_funk, sertanejo_pagode, rap_trap_mpb
"""
import sys
sys.path.append('.')
import scripts.builder_common as bc
from scripts.create_musica_part1 import RAW_ROCK, RAW_POP
from scripts.create_musica_part2 import RAW_SERTANEJO, RAW_RAP

RAW_MUSICA = RAW_ROCK + RAW_POP + RAW_SERTANEJO + RAW_RAP

def get_items():
    return [bc.make_item(*x) for x in RAW_MUSICA]

def get_new_items():
    existing = bc.get_existing_names_for_theme('Música & Ritmos')
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
    print(f"gen_musica new items: {len(items)}")
