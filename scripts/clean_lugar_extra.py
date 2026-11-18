import ast
import re

with open('scripts/generators/gen_lugar_extra.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Pattern matching 4-tuple
pattern = re.compile(r'\([ \t\r\n]*["\'][^"\']+["\'][ \t\r\n]*,[ \t\r\n]*["\'][^"\']+["\'][ \t\r\n]*,[ \t\r\n]*\[[^\]]*\][ \t\r\n]*,[ \t\r\n]*\[[^\]]*\][ \t\r\n]*\)', re.DOTALL)
items = []
for m in pattern.finditer(text):
    raw_tuple_str = m.group(0)
    try:
        tup = ast.literal_eval(raw_tuple_str)
        items.append(tup)
    except Exception as e:
        print('Error parsing:', e)

print('Total parsed tuples:', len(items))

with open('scripts/generators/gen_lugar_extra.py', 'w', encoding='utf-8') as f:
    f.write('# -*- coding: utf-8 -*-\nimport scripts.builder_common as bc\n\nEXTRA_LUGAR_ITEMS = [\n')
    for it in items:
        f.write(f'    {repr(it)},\n')
    f.write(']\n\ndef get_extra_items():\n    return [bc.make_item(*x) for x in EXTRA_LUGAR_ITEMS]\n')

print('Cleaned gen_lugar_extra.py successfully!')
