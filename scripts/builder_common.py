# -*- coding: utf-8 -*-
"""
Helper comum para expansão em larga escala do banco de palavras do Hub de Jogos.
Garante estrutura consistente, pistas sutis e deduplicação automática.
"""
import json
import re
import os

def make_item(name, sub, words, phrases):
    w_list = [str(x).strip() for x in words if str(x).strip()]
    p_list = [str(x).strip() for x in phrases if str(x).strip()]
    if len(w_list) < 3:
        w_list.extend(["Elemento", "Detalhe", "Característica"][:3 - len(w_list)])
    if len(p_list) < 3:
        p_list.extend(["Possui características marcantes", "Fácil de reconhecer pelo contexto", "Muito lembrado no seu tema"][:3 - len(p_list)])
    return {
        "name": name.strip(),
        "sub": sub.strip(),
        "word": w_list[0],
        "phrase": p_list[0],
        "words": w_list,
        "phrases": p_list
    }

def get_item_name(item):
    if isinstance(item, dict):
        return item.get("name") or item.get("w") or ""
    return str(item).strip()

def normalize_name(s):
    return re.sub(r"[^\w\s]", "", str(s).lower()).strip()

def get_existing_database():
    target_file = "js/data.backup.js" if os.path.exists("js/data.backup.js") else "js/data.js"
    with open(target_file, "r", encoding="utf-8") as f:
        content = f.read()
    m = re.search(r"const THEME_DATABASE = ({.*?});\s*// DICAS DO IMPOSTOR", content, re.DOTALL)
    if not m:
        raise ValueError("THEME_DATABASE não encontrado em " + target_file)
    return json.loads(m.group(1))

def get_existing_names_for_theme(theme_key):
    db = get_existing_database()
    items = db.get(theme_key, {}).get("items", [])
    return {normalize_name(get_item_name(x)) for x in items}
