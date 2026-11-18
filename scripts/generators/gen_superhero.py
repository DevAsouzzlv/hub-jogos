# -*- coding: utf-8 -*-
import scripts.builder_common as bc
import scripts.pool_group_a as pga
import scripts.vocab_part1 as vp1

def get_new_items():
    existing = bc.get_existing_names_for_theme('Super-herói')
    raw_items = pga.get_superhero_candidates() + vp1.get_superhero_items()
    unique_new = []
    seen = set()
    for x in raw_items:
        name = bc.get_item_name(x)
        norm = bc.normalize_name(name)
        if norm not in existing and norm not in seen:
            seen.add(norm)
            item = bc.make_item(name, x.get('sub', 'marvel_herois'), x.get('words', []), x.get('phrases', []))
            unique_new.append(item)
    return unique_new
