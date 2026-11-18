# -*- coding: utf-8 -*-
"""Generator for Países & Culturas theme additions (+200 items)."""

import scripts.builder_common as bc
import scripts.create_paises_part1 as p1
import scripts.create_paises_part2 as p2
import scripts.create_paises_part3 as p3

THEME_NAME = 'Países & Culturas'

def get_new_items():
    existing_names = bc.get_existing_names_for_theme(THEME_NAME)
    all_raw = (p1.RAW_AMERICAS + p2.RAW_EUROPA +
               p3.RAW_ASIA_OCEANIA + p3.RAW_ASIA_EXTRA +
               p3.RAW_AFRICA_ORIENTE + p3.RAW_AFRICA_EXTRA)

    new_items = []
    seen = set()

    for item_tuple in all_raw:
        name, sub, words, phrases = item_tuple
        norm = bc.normalize_name(name)
        if norm in existing_names:
            continue
        if norm in seen:
            continue
        seen.add(norm)
        new_items.append(bc.make_item(name, sub, words, phrases))

    return new_items

if __name__ == '__main__':
    items = get_new_items()
    print(f"Países & Culturas generated items: {len(items)}")
    subs = {}
    for it in items:
        subs[it['sub']] = subs.get(it['sub'], 0) + 1
    print(f"Subcategory breakdown: {subs}")
