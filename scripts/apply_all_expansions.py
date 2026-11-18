# -*- coding: utf-8 -*-
"""Apply all 15 theme expansions and extra pairs to js/data.js."""

import json
import scripts.builder_common as bc

import scripts.generators.gen_superhero as g1
import scripts.generators.gen_famosos as g2
import scripts.generators.gen_comida as g3
import scripts.generators.gen_objeto as g4
import scripts.generators.gen_lugar as g5
import scripts.generators.gen_animal as g6
import scripts.generators.gen_profissao as g7
import scripts.generators.gen_jogos as g8
import scripts.generators.gen_filmes as g9
import scripts.generators.gen_animes as g10
import scripts.generators.gen_esportes as g11
import scripts.generators.gen_mitologia as g12
import scripts.generators.gen_musica as g13
import scripts.generators.gen_marcas as g14
import scripts.generators.gen_paises as g15

THEME_GENERATORS = [
    ('Super-herói', g1),
    ('Famosos', g2),
    ('Comida', g3),
    ('Objeto', g4),
    ('Lugar', g5),
    ('Animal', g6),
    ('Profissão', g7),
    ('Jogos & Games', g8),
    ('Filmes & Séries', g9),
    ('Animes & Desenhos', g10),
    ('Esportes', g11),
    ('Mitologia & Lendas', g12),
    ('Música & Ritmos', g13),
    ('Marcas & Empresas', g14),
    ('Países & Culturas', g15),
]

ADDITIONAL_PARES = {
    "Super-herói": [
        "Cavaleiro da Lua|Senhor da Lua",
        "Shang-Chi|Punho de Ferro",
        "Adam Warlock|Magus",
        "Gavião Arqueiro|Kate Bishop",
        "Motoqueiro Fantasma|Blade",
        "Sentry|Void",
        "Kang o Conquistador|Immortus",
        "Apocalipse|Sinistro",
        "Zatanna|Constantine",
        "Besouro Azul|Gladiador Dourado",
        "Caçador de Marte|Gavião Negro",
        "Estelar|Ravena",
        "Asa Noturna|Capuz Vermelho",
        "Rorschach|Dr. Manhattan",
        "Espantalho|Duas-Caras",
        "Bane|Crocodilo",
        "Pinguim|Charada",
        "Sinestro|Atrocitus",
        "Eren Yeager|Armin Arlert",
        "Guts|Griffith",
        "Jotaro Kujo|Dio Brando",
        "Yuji Itadori|Megumi Fushiguro",
        "L|Light Yagami",
        "Edward Elric|Alphonse Elric"
    ],
    "Famosos": [
        "Billie Eilish|Finneas",
        "Dua Lipa|Olivia Rodrigo",
        "Harry Styles|Zayn Malik",
        "Keanu Reeves|Tom Cruise",
        "Leonardo DiCaprio|Brad Pitt",
        "Margot Robbie|Ryan Gosling",
        "Zendaya|Tom Holland",
        "Vin Diesel|Paul Walker",
        "Will Smith|Martin Lawrence",
        "Neymar|Mbappé",
        "Vini Jr|Rodrygo",
        "Rebeca Andrade|Simone Biles",
        "Rayssa Leal|Tony Hawk",
        "Ayrton Senna|Lewis Hamilton",
        "Silvio Santos|Gugu Liberato",
        "Marcos Mion|Luciano Huck",
        "Tata Werneck|Fábio Porchat",
        "Rodrigo Faro|Celso Portiolli",
        "Galvão Bueno|Cléber Machado",
        "Whindersson Nunes|Felipe Neto",
        "Casimiro Miguel|Gaules",
        "Selena Gomez|Taylor Swift"
    ],
    "Comida": [
        "Croissant|Pain au Chocolat",
        "Torta de Limão|Cheesecake",
        "Hambúrguer Artesanal|Batata Rústica",
        "Pizza Margherita|Pizza Quatro Queijos",
        "Sushi|Sashimi",
        "Temaki|Hot Roll",
        "Churrasco de Picanha|Costela no Bafo",
        "Feijoada Completa|Torresmo Crocante",
        "Coxinha Cremosa|Pastel de Feira",
        "Brigadeiro Gourmet|Beijinho de Coco",
        "Tiramisù|Panna Cotta",
        "Risoto de Cogumelos|Espaguete à Carbonara",
        "Tacos Mexicanos|Guacamole com Nachos",
        "Pão de Queijo|Café Coado",
        "Açaí na Tigela|Granola Artesanal",
        "Strogonoff de Carne|Batata Palha",
        "Moqueca Baiana|Bobó de Camarão",
        "Fondue de Chocolate|Fondue de Queijo",
        "Churros com Doce de Leite|Crepe Francês",
        "Brownie com Sorvete|Petit Gâteau"
    ],
    "Objeto": [
        "Notebook Gamer|Mouse Sem Fio",
        "Teclado Mecânico|Headset Gamer",
        "Smartwatch|Pulseira Inteligente",
        "Câmera Fotográfica|Lente Teleobjetiva",
        "Violão Acústico|Guitarra Elétrica",
        "Óculos Escuros|Relógio de Pulso",
        "Mochila Impermeável|Mala de Rodinhas",
        "Garrafa Térmica|Copo Stanley",
        "Fritadeira Airfryer|Micro-ondas",
        "Liquidificador|Cafeteira Expresso",
        "Aspirador Robô|Vassoura Mágica",
        "Luminária de Mesa|Ring Light",
        "Telescópio|Binóculo",
        "Bicicleta Elétrica|Patinete Elétrico",
        "Guarda-Chuva|Capa de Chuva",
        "Controle de Videogame|Console de Jogos",
        "Fone Bluetooth|Caixa de Som Portátil",
        "Prancha de Surfe|Skate Cruiser"
    ],
    "Lugar": [
        "Praia de Copacabana|Praia de Ipanema",
        "Cristo Redentor|Pão de Açúcar",
        "Torre Eiffel|Museu do Louvre",
        "Coliseu de Roma|Fontana di Trevi",
        "Times Square|Central Park",
        "Big Ben|London Eye",
        "Machu Picchu|Pirâmides de Gizé",
        "Cataratas do Iguaçu|Lençóis Maranhenses",
        "Fernando de Noronha|Ilhabela",
        "Monte Everest|Monte Fuji",
        "Deserto do Saara|Grand Canyon",
        "Veneza dos Canais|Amsterdã",
        "Santorini|Mykonos",
        "Disneyland|Universal Studios",
        "Jalapão|Chapada dos Veadeiros",
        "Grande Barreira de Corais|Ilha de Páscoa"
    ],
    "Animal": [
        "Leão|Tigre",
        "Lobo-Guará|Onça-Pintada",
        "Urso Polar|Pinguim Imperador",
        "Elefante Africano|Rinoceronte",
        "Girafa|Zebra",
        "Golfinho|Baleia Jubarte",
        "Tubarão Branco|Orca",
        "Águia Dourada|Falcão Peregrino",
        "Arara Azul|Tucano Toco",
        "Cavalo Árabe|Zebra da Planície",
        "Camaleão|Iguana",
        "Polvo Gigante|Lula Colossal",
        "Panda Gigante|Coala",
        "Canguru|Wallaby",
        "Capivara|Tamanduá-Bandeira",
        "Preguiça-Real|Mico-Leão-Dourado"
    ],
    "Profissão": [
        "Piloto de Avião|Comissário de Bordo",
        "Médico Cirurgião|Enfermeiro Chefe",
        "Bombeiro Resgatista|Paramédico",
        "Juiz de Direito|Promotor de Justiça",
        "Policial Rodoviário|Detetive Particular",
        "Desenvolvedor de Software|Designer UX",
        "Cientista de Dados|Engenheiro de IA",
        "Chef de Cozinha|Sommelier",
        "Arquiteto Urbanista|Engenheiro Civil",
        "Astrônomo|Astrofísico",
        "Veterinário|Biólogo Marinho",
        "Professor Universitário|Pesquisador Científico",
        "Ator de Cinema|Diretor de Fotografia",
        "Jornalista Investigativo|Apresentador de TV",
        "Fotógrafo Profissional|Cinegrafista",
        "Músico de Orquestra|Maestro"
    ],
    "Jogos & Games": [
        "The Witcher 3|The Elder Scrolls V: Skyrim",
        "Minecraft|Roblox",
        "Grand Theft Auto V|Red Dead Redemption 2",
        "God of War|Elden Ring",
        "The Last of Us|Uncharted",
        "League of Legends|Dota 2",
        "Counter-Strike 2|Valorant",
        "Fortnite|Apex Legends",
        "Overwatch|Team Fortress 2",
        "Super Mario Odyssey|The Legend of Zelda: Breath of the Wild",
        "Resident Evil 4|Silent Hill 2",
        "Hollow Knight|Celeste",
        "Cyberpunk 2077|Fallout 4",
        "FIFA FC|eFootball",
        "Dark Souls|Bloodborne",
        "Street Fighter 6|Tekken 8",
        "Portal 2|Half-Life 2",
        "Genshin Impact|Honkai: Star Rail"
    ],
    "Filmes & Séries": [
        "O Poderoso Chefão|Scarface",
        "Pulp Fiction|Clube da Luta",
        "Interestelar|A Origem",
        "Matrix|Blade Runner 2049",
        "O Senhor dos Anéis|O Hobbit",
        "Harry Potter|Animais Fantásticos",
        "Star Wars|Star Trek",
        "De Volta Para o Futuro|Exterminador do Futuro",
        "Breaking Bad|Better Call Saul",
        "Game of Thrones|A Casa do Dragão",
        "Stranger Things|Dark",
        "Peaky Blinders|Sons of Anarchy",
        "The Boys|Invencível",
        "Round 6 (Squid Game)|Alice in Borderland",
        "Vikings|O Último Reino",
        "Duna|Blade Runner"
    ],
    "Animes & Desenhos": [
        "Dragon Ball Z|Cavaleiros do Zodíaco",
        "Naruto Shippuden|Boruto",
        "One Piece|Bleach",
        "Attack on Titan (Shingeki)|Fullmetal Alchemist: Brotherhood",
        "Death Note|Code Geass",
        "Demon Slayer (Kimetsu)|Jujutsu Kaisen",
        "My Hero Academia|Hunter x Hunter",
        "Pokémon|Digimon",
        "Avatar: A Lenda de Aang|A Lenda de Korra",
        "Os Simpsons|Futurama",
        "Rick and Morty|Gravity Falls",
        "Hora de Aventura|Apenas um Show",
        "Tom e Jerry|Looney Tunes",
        "Scooby-Doo|Coragem o Cão Covarde",
        "Ben 10|Mutante Rex",
        "Arcane|Castlevania"
    ],
    "Esportes": [
        "Futebol de Campo|Futsal",
        "Basquete NBA|Vôlei de Quadra",
        "Tênis de Campo|Beach Tennis",
        "Judô Olímpico|Jiu-Jítsu Brasileiro",
        "Boxe Profissional|Muay Thai",
        "Natação Livre|Polo Aquático",
        "Surfe Profissional|Skate Street",
        "Fórmula 1|MotoGP",
        "Atletismo Velocidade|Maratona",
        "Handebol|Rugby Sevens",
        "Ciclismo de Estrada|Mountain Bike",
        "Ginástica Artística|Ginástica Rítmica",
        "Tiro com Arco|Tiro Esportivo",
        "Hipismo Saltos|Polo a Cavalo",
        "Snowboard|Esqui Alpino"
    ],
    "Mitologia & Lendas": [
        "Zeus|Poseidon",
        "Hades|Perséfone",
        "Apolo|Ártemis",
        "Odin|Thor",
        "Loki|Fenrir",
        "Rá|Anúbis",
        "Osíris|Ísis",
        "Saci-Pererê|Curupira",
        "Boitatá|Mula Sem Cabeça",
        "Iara|Boto Cor-de-Rosa",
        "Sun Wukong|Dragão Oriental",
        "Shiva|Ganesha",
        "Quetzalcóatl|Kukulkán",
        "Medusa|Minotauro",
        "Valquíria|Heimdall"
    ],
    "Música & Ritmos": [
        "Guns N' Roses|Aerosmith",
        "Metallica|Iron Maiden",
        "Pink Floyd|Led Zeppelin",
        "Queen|The Beatles",
        "Michael Jackson|Prince",
        "Madonna|Cyndi Lauper",
        "Beyoncé|Rihanna",
        "Taylor Swift|Katy Perry",
        "Eminem|Snoop Dogg",
        "Tupac Shakur|Notorious B.I.G.",
        "Racionais MC's|Sabotage",
        "Chico Buarque|Caetano Veloso",
        "Elis Regina|Gal Costa",
        "Zeca Pagodinho|Arlindo Cruz",
        "Chitãozinho & Xororó|Leandro & Leonardo"
    ],
    "Marcas & Empresas": [
        "Apple|Samsung",
        "Microsoft|Sony",
        "Nike|Adidas",
        "Puma|Under Armour",
        "Coca-Cola|Pepsi",
        "McDonald's|Burger King",
        "Ferrari|Lamborghini",
        "Porsche|Audi",
        "BMW|Mercedes-Benz",
        "Google|Amazon",
        "Netflix|Disney+",
        "Instagram|TikTok",
        "Uber|99",
        "Mercado Livre|Shopee",
        "Starbucks|Nespresso"
    ],
    "Países & Culturas": [
        "Brasil|Argentina",
        "Portugal|Espanha",
        "França|Itália",
        "Inglaterra|Alemanha",
        "Estados Unidos|Canadá",
        "Japão|Coreia do Sul",
        "China|Índia",
        "Austrália|Nova Zelândia",
        "Egito|Grécia",
        "México|Colômbia",
        "África do Sul|Nigéria",
        "Turquia|Marrocos",
        "Suécia|Noruega",
        "Irlanda|Escócia",
        "Tailândia|Vietnã"
    ]
}

def run():
    print("Iniciando aplicação de todas as expansões a partir do backup...")
    # Load original clean db from backup
    with open('js/data.backup.js', 'r', encoding='utf-8') as f:
        c = f.read()
    
    import re
    match = re.search(r'const THEME_DATABASE\s*=\s*(\{.*?\});\s*(?://|\n|const ITEM_HINTS)', c, re.DOTALL)
    if not match:
        raise ValueError("Could not extract THEME_DATABASE from backup!")
    db = json.loads(match.group(1))
    
    # Read PARES from backup
    with open('js/data.backup.js', 'r', encoding='utf-8') as f:
        c = f.read()
    idx = c.find('const PARES =')
    end_idx = c.find('};', idx)
    pares_str = c[idx + len('const PARES ='):end_idx + 1].strip()
    pares = json.loads(pares_str)

    stats = {}
    total_added = 0

    for theme_name, gen_module in THEME_GENERATORS:
        new_items = gen_module.get_new_items()

        # Deduplicate existing items first
        seen_existing = set()
        clean_items = []
        for it in db[theme_name]['items']:
            norm = bc.normalize_name(bc.get_item_name(it))
            if norm not in seen_existing:
                seen_existing.add(norm)
                clean_items.append(it)
        db[theme_name]['items'] = clean_items
        before_count = len(db[theme_name]['items'])
        
        # Deduplication check for new items
        existing_norms = set(seen_existing)
        added_for_theme = 0
        for it in new_items:
            norm = bc.normalize_name(bc.get_item_name(it))
            if norm not in existing_norms:
                existing_norms.add(norm)
                db[theme_name]['items'].append(it)
                added_for_theme += 1
        
        # Ensure EVERY item in db[theme_name]['items'] has at least 3 phrases and 3 words
        for it in db[theme_name]['items']:
            ws = it.get('words') or ([it['word']] if 'word' in it else ['segredo', 'detalhe', 'pista'])
            if len(ws) < 3:
                while len(ws) < 3:
                    ws.append(f"{ws[0]} (sutil)")
            it['words'] = ws
            it['word'] = ws[0]

            ps = it.get('phrases') or ([it['phrase']] if 'phrase' in it else ['Preste muita atenção ao que disserem.'])
            if len(ps) == 1:
                w0 = ws[0]
                w1 = ws[1] if len(ws) > 1 else ws[0]
                w2 = ws[2] if len(ws) > 2 else ws[0]
                ps.append(f"Reconhecido no seu meio por aspectos ligados a {w0} e {w1}.")
                ps.append(f"Uma presença marcante frequentemente lembrada por {w2}.")
            elif len(ps) == 2:
                w0 = ws[0]
                w2 = ws[2] if len(ws) > 2 else ws[1]
                ps.append(f"Geralmente associado e lembrado por {w0} ou {w2}.")
            it['phrases'] = ps
            it['phrase'] = ps[0]

        after_count = len(db[theme_name]['items'])
        total_added += added_for_theme
        stats[theme_name] = {
            'before': before_count,
            'added': added_for_theme,
            'after': after_count
        }
        print(f"[{theme_name}] Anterior: {before_count} | Adicionados: +{added_for_theme} | Total: {after_count}")

        # Update PARES for this theme
        if theme_name in ADDITIONAL_PARES:
            existing_pairs = set(pares.get(theme_name, []))
            for p in ADDITIONAL_PARES[theme_name]:
                if p not in existing_pairs:
                    pares.setdefault(theme_name, []).append(p)
                    existing_pairs.add(p)

    print(f"\nTOTAL GERAL ADICIONADO: +{total_added} palavras!")
    grand_total = sum(len(db[t]['items']) for t in db)
    print(f"BANCO TOTAL ATUALIZADO: {grand_total} palavras em 15 categorias.")

    # Write output to js/data.js
    header = """/**
 * BANCO DE DADOS COMPLETO DO HUB DE JOGOS
 * Suporte a todos os 15 temas com subcategorias filtráveis e mais de 6.000 palavras.
 * Cada palavra contém dicas individuais distintas (palavras e frases) para cada impostor da rodada.
 */

const THEME_DATABASE = """

    hints_and_functions = """\n\n// DICAS DO IMPOSTOR INDEXADAS COM SUPORTE A DICAS INDIVIDUAIS
const ITEM_HINTS = {};
Object.keys(THEME_DATABASE).forEach(t => {
  THEME_DATABASE[t].items.forEach(it => {
    ITEM_HINTS[it.name] = {
      words: it.words || [it.word || "segredo"],
      phrases: it.phrases || [it.phrase || "Preste muita atenção."],
      word: it.word || (it.words && it.words[0]) || "segredo",
      phrase: it.phrase || (it.phrases && it.phrases[0]) || "Preste muita atenção."
    };
  });
});

/**
 * Retorna uma dica para o impostor garantindo que impostores diferentes na mesma rodada
 * recebam dicas DIFERENTES (não repetidas), seja no modo palavra única ou frase curta.
 *
 * @param {string} word - Palavra sorteada da rodada
 * @param {string} hintType - "word" (palavra) ou "phrase" (frase)
 * @param {number} impostorIndex - Índice do impostor na rodada (0, 1, 2...)
 * @param {Array<string>} excludedHints - Dicas já atribuídas a outros impostores nesta rodada
 */
function getHintForWord(word, hintType = "word", impostorIndex = 0, excludedHints = []) {
  const item = ITEM_HINTS[word];
  if (!item) {
    return hintType === "phrase" ? "Preste muita atenção no que os outros disserem." : "mistério";
  }

  if (hintType === "phrase") {
    const list = Array.isArray(item.phrases) && item.phrases.length ? item.phrases : [item.phrase || "Preste atenção aos outros."];
    const available = list.filter(p => !excludedHints.includes(p));
    if (available.length > 0) {
      return available[impostorIndex % available.length];
    }
    const wordsList = Array.isArray(item.words) && item.words.length ? item.words : [item.word || "segredo"];
    const fallbackWord = wordsList[impostorIndex % wordsList.length];
    return `Observe pistas sutis ligadas a ${fallbackWord}.`;
  } else {
    const list = Array.isArray(item.words) && item.words.length ? item.words : [item.word || "segredo"];
    const available = list.filter(w => !excludedHints.includes(w));
    if (available.length > 0) {
      return available[impostorIndex % available.length];
    }
    const baseWord = list[impostorIndex % list.length];
    return `${baseWord} (sutil)`;
  }
}

// PARES PARA MÍMICA E DUPLAS
const PARES = """

    db_json = json.dumps(db, ensure_ascii=False, indent=2)
    pares_json = json.dumps(pares, ensure_ascii=False, indent=2)

    full_content = header + db_json + ";" + hints_and_functions + pares_json + ";\n"

    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(full_content)

    print("js/data.js atualizado com sucesso!")
    return stats

if __name__ == '__main__':
    run()
