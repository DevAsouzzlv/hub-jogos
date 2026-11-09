/**
 * HUB DE JOGOS - BANCO DE DADOS GIGANTE E CATEGORIZADO
 * Todos os temas possuem subcategorias para filtros personalizados.
 * Cada item possui:
 * - name: Nome da palavra/personagem
 * - sub: Subcategoria para filtragem
 * - words: Lista de 3 a 4 dicas curtas e desafiadoras (1 dica única para CADA impostor)
 * - phrases: Lista de 2 a 3 frases curtas e enigmáticas (1 frase única para CADA impostor)
 * - word / phrase: Fallbacks de compatibilidade
 */

const THEME_DATABASE = {
  "Super-herói": {
    "icon": "🦸",
    "color": "var(--b)",
    "subcategories": {
      "marvel_herois": {
        "label": "Heróis Marvel",
        "icon": "🔴",
        "desc": "Vingadores, X-Men, Aranha, Quarteto Fantástico e defensores"
      },
      "marvel_viloes": {
        "label": "Vilões Marvel",
        "icon": "🦹",
        "desc": "Thanos, Loki, Duende Verde, Dr. Destino, Magneto, Venom, Ultron..."
      },
      "dc_herois": {
        "label": "Heróis DC Comics",
        "icon": "🔵",
        "desc": "Batman, Superman, Mulher-Maravilha, Flash, Asa Noturna, Titãs..."
      },
      "dc_viloes": {
        "label": "Vilões DC Comics",
        "icon": "🃏",
        "desc": "Coringa, Darkseid, Charada, Bane, Lex Luthor, Arlequina, Flash Reverso..."
      },
      "anime_herois": {
        "label": "Heróis de Anime / Shonen",
        "icon": "🟢",
        "desc": "Goku, Naruto, Luffy, Ichigo, Saitama, Gojo, Gon, Tanjiro, Deku..."
      },
      "anime_viloes": {
        "label": "Vilões de Anime / Shonen",
        "icon": "💀",
        "desc": "Madara, Aizen, Freeza, Sukuna, Muzan, Pain, Dio Brando, Meruem..."
      },
      "anti_herois": {
        "label": "Anti-Heróis & Vigilantes",
        "icon": "⚔️",
        "desc": "Deadpool, Justiceiro, Wolverine, Pacificador, Spawn, Capuz Vermelho..."
      },
      "the_boys_invincible": {
        "label": "The Boys & Invencível",
        "icon": "🩸",
        "desc": "Capitão Pátria, Billy Bruto, Omni-Man, Invencível, Trem-Bala, Black Noir..."
      },
      "classicos_tv": {
        "label": "Heróis da TV & Clássicos",
        "icon": "📺",
        "desc": "Chapolin Colorado, Ben 10, Tartarugas Ninja, He-Man, Meninas Superpoderosas..."
      },
      "viloes_pop": {
        "label": "Grandes Vilões da Ficção",
        "icon": "👑",
        "desc": "Darth Vader, Lord Voldemort, Sauron, Shredder, Esqueleto, Megatron..."
      }
    },
    "items": [
      {
        "name": "Homem-Aranha",
        "sub": "marvel_herois",
        "word": "aracnídeo",
        "phrase": "Costuma escalar prédios quando a cidade dorme.",
        "words": [
          "aracnídeo",
          "teia",
          "escalada",
          "lançador"
        ],
        "phrases": [
          "Costuma escalar prédios quando a cidade dorme.",
          "Costura redes invisíveis entre os arranha-céus.",
          "Um sentido apurado avisa o perigo antes que aconteça."
        ]
      },
      {
        "name": "Homem de Ferro",
        "sub": "marvel_herois",
        "word": "reator",
        "phrase": "Um coração de metal impulsionado por tecnologia.",
        "words": [
          "reator",
          "nanotecnologia",
          "bilionário",
          "armadura"
        ],
        "phrases": [
          "Um coração de metal impulsionado por tecnologia.",
          "Gênio, bilionário, playboy e filantropo dentro de uma armadura.",
          "Dispara repulsores das palmas das mãos em alta velocidade."
        ]
      },
      {
        "name": "Thor",
        "sub": "marvel_herois",
        "word": "tempestade",
        "phrase": "Desce dos céus com o estrondo dos trovões.",
        "words": [
          "tempestade",
          "martelo",
          "trovão",
          "asgard"
        ],
        "phrases": [
          "Desce dos céus com o estrondo dos trovões.",
          "Empunha uma arma pesada que apenas os dignos conseguem erguer.",
          "Príncipe guerreiro de um reino dourado entre as estrelas."
        ]
      },
      {
        "name": "Hulk",
        "sub": "marvel_herois",
        "word": "fúria",
        "phrase": "O descontrole emocional liberta a fera colossal.",
        "words": [
          "fúria",
          "esmeralda",
          "radiação",
          "esmagar"
        ],
        "phrases": [
          "O descontrole emocional liberta a fera colossal.",
          "Um cientista pacato que se transforma num gigante verde indestrutível.",
          "Quanto mais irritado fica, mais sua força atinge níveis infinitos."
        ]
      },
      {
        "name": "Capitão América",
        "sub": "marvel_herois",
        "word": "símbolo",
        "phrase": "Acordou no presente carregando a honra do passado.",
        "words": [
          "símbolo",
          "símbolo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Acordou no presente carregando a honra do passado.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Viúva Negra",
        "sub": "marvel_herois",
        "word": "infiltração",
        "phrase": "Criada nas sombras sem deixar rastros.",
        "words": [
          "infiltração",
          "infiltração (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Criada nas sombras sem deixar rastros.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Gavião Arqueiro",
        "sub": "marvel_herois",
        "word": "pontaria",
        "phrase": "Nunca erra o alvo mesmo a longa distância.",
        "words": [
          "pontaria",
          "pontaria (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Nunca erra o alvo mesmo a longa distância.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Pantera Negra",
        "sub": "marvel_herois",
        "word": "vibranium",
        "phrase": "Herdeiro do trono guardião da montanha sagrada.",
        "words": [
          "vibranium",
          "vibranium (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Herdeiro do trono guardião da montanha sagrada.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Doutor Estranho",
        "sub": "marvel_herois",
        "word": "místico",
        "phrase": "Manipula as dobras do tempo e da realidade.",
        "words": [
          "místico",
          "místico (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Manipula as dobras do tempo e da realidade.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Feiticeira Escarlate",
        "sub": "marvel_herois",
        "word": "feitiço",
        "phrase": "Pode reescrever a realidade com a própria dor.",
        "words": [
          "feitiço",
          "feitiço (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Pode reescrever a realidade com a própria dor.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Visão",
        "sub": "marvel_herois",
        "word": "sintético",
        "phrase": "Uma joia brilhando na testa de quem busca a humanidade.",
        "words": [
          "sintético",
          "sintético (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Uma joia brilhando na testa de quem busca a humanidade.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Falcão",
        "sub": "marvel_herois",
        "word": "voo",
        "phrase": "Cruza os ares com asas metálicas coordenadas.",
        "words": [
          "voo",
          "voo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Cruza os ares com asas metálicas coordenadas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Soldado Invernal",
        "sub": "marvel_herois",
        "word": "amnésia",
        "phrase": "Um passado congelado que voltou como pesadelo.",
        "words": [
          "amnésia",
          "amnésia (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Um passado congelado que voltou como pesadelo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Homem-Formiga",
        "sub": "marvel_herois",
        "word": "escala",
        "phrase": "O segredo está em mudar de dimensão num clique.",
        "words": [
          "escala",
          "escala (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O segredo está em mudar de dimensão num clique.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Vespa",
        "sub": "marvel_herois",
        "word": "ferrão",
        "phrase": "Ágil no ar e ataca com precisão microscópica.",
        "words": [
          "ferrão",
          "ferrão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Ágil no ar e ataca com precisão microscópica.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Capitã Marvel",
        "sub": "marvel_herois",
        "word": "fóton",
        "phrase": "Energia pura cruzando galáxias inteiras.",
        "words": [
          "fóton",
          "fóton (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Energia pura cruzando galáxias inteiras.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Máquina de Combate",
        "sub": "marvel_herois",
        "word": "artilharia",
        "phrase": "Armadura pesada com protocolo estritamente militar.",
        "words": [
          "artilharia",
          "artilharia (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Armadura pesada com protocolo estritamente militar.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Groot",
        "sub": "marvel_herois",
        "word": "madeira",
        "phrase": "Suas poucas palavras escondem um coração enorme.",
        "words": [
          "madeira",
          "madeira (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Suas poucas palavras escondem um coração enorme.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Rocket Raccoon",
        "sub": "marvel_herois",
        "word": "explosivo",
        "phrase": "Pequeno no tamanho e implacável no gatilho.",
        "words": [
          "explosivo",
          "explosivo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Pequeno no tamanho e implacável no gatilho.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Star-Lord",
        "sub": "marvel_herois",
        "word": "fita",
        "phrase": "Navega pelas estrelas ao som de fitas antigas.",
        "words": [
          "fita",
          "fita (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Navega pelas estrelas ao som de fitas antigas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Gamora",
        "sub": "marvel_herois",
        "word": "lâmina",
        "phrase": "A guerreira mais letal que se rebelou contra o próprio criador.",
        "words": [
          "lâmina",
          "lâmina (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "A guerreira mais letal que se rebelou contra o próprio criador.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Drax",
        "sub": "marvel_herois",
        "word": "vingança",
        "phrase": "Leva tudo ao pé da letra com duas adagas em mãos.",
        "words": [
          "vingança",
          "vingança (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Leva tudo ao pé da letra com duas adagas em mãos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Nebulosa",
        "sub": "marvel_herois",
        "word": "cibernética",
        "phrase": "Peças mecânicas cobrindo cicatrizes de família.",
        "words": [
          "cibernética",
          "cibernética (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Peças mecânicas cobrindo cicatrizes de família.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Wolverine",
        "sub": "anti_herois",
        "word": "adamantium",
        "phrase": "Garras afiadas e feridas que se fecham num instante.",
        "words": [
          "adamantium",
          "garras",
          "charuto",
          "fator"
        ],
        "phrases": [
          "Garras afiadas e feridas que se fecham num instante.",
          "O melhor no que faz, mas o que faz não é nada bonito.",
          "Esqueleto recoberto pelo metal mais resistente do planeta."
        ]
      },
      {
        "name": "Ciclope",
        "sub": "marvel_herois",
        "word": "rubi",
        "phrase": "Um feixe devastador controlado por um visor constante.",
        "words": [
          "rubi",
          "rubi (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Um feixe devastador controlado por um visor constante.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Tempestade",
        "sub": "marvel_herois",
        "word": "vento",
        "phrase": "Reverenciada como deusa por controlar os céus.",
        "words": [
          "vento",
          "vento (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Reverenciada como deusa por controlar os céus.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Jean Grey",
        "sub": "marvel_herois",
        "word": "telepatia",
        "phrase": "Uma mente brilhante guardando uma entidade cósmica.",
        "words": [
          "telepatia",
          "telepatia (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Uma mente brilhante guardando uma entidade cósmica.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Vampira",
        "sub": "marvel_herois",
        "word": "toque",
        "phrase": "A pele descoberta absorve a vida de quem encostar.",
        "words": [
          "toque",
          "toque (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "A pele descoberta absorve a vida de quem encostar.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Gambit",
        "sub": "marvel_herois",
        "word": "cinética",
        "phrase": "Energiza qualquer objeto antes de arremessar com estilo.",
        "words": [
          "cinética",
          "cinética (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Energiza qualquer objeto antes de arremessar com estilo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Fera",
        "sub": "marvel_herois",
        "word": "intelecto",
        "phrase": "Cita filósofos clássicos com pelos azuis e garras.",
        "words": [
          "intelecto",
          "intelecto (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Cita filósofos clássicos com pelos azuis e garras.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Noturno",
        "sub": "marvel_herois",
        "word": "enxofre",
        "phrase": "Desaparece numa névoa azul antes que você perceba.",
        "words": [
          "enxofre",
          "enxofre (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Desaparece numa névoa azul antes que você perceba.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Professor Xavier",
        "sub": "marvel_herois",
        "word": "cérebro",
        "phrase": "Guia os jovens excluídos sem precisar se levantar.",
        "words": [
          "cérebro",
          "cérebro (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Guia os jovens excluídos sem precisar se levantar.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Colossus",
        "sub": "marvel_herois",
        "word": "blindagem",
        "phrase": "Músculos que se transformam em aço reluzente.",
        "words": [
          "blindagem",
          "blindagem (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Músculos que se transformam em aço reluzente.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mística",
        "sub": "marvel_viloes",
        "word": "camaleão",
        "phrase": "Pode ser qualquer pessoa que cruzar seu caminho.",
        "words": [
          "camaleão",
          "camaleão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Pode ser qualquer pessoa que cruzar seu caminho.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Deadpool",
        "sub": "anti_herois",
        "word": "chimichanga",
        "phrase": "Fala diretamente com quem está assistindo e nunca se cala.",
        "words": [
          "chimichanga",
          "quarta parede",
          "espadas",
          "imortal"
        ],
        "phrases": [
          "Fala diretamente com quem está assistindo e nunca se cala.",
          "Cura qualquer dano físico enquanto faz piadas debochadas.",
          "Usa traje vermelho colado e duas katanas cruzadas nas costas."
        ]
      },
      {
        "name": "Demolidor",
        "sub": "marvel_herois",
        "word": "radar",
        "phrase": "Vê muito mais do que os olhos comuns enxergam.",
        "words": [
          "radar",
          "radar (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Vê muito mais do que os olhos comuns enxergam.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Justiceiro",
        "sub": "anti_herois",
        "word": "caveira",
        "phrase": "Sem trégua e sem julgamento para quem cruza a linha.",
        "words": [
          "caveira",
          "caveira (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Sem trégua e sem julgamento para quem cruza a linha.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Elektra",
        "sub": "anti_herois",
        "word": "adaga",
        "phrase": "Mestre letal das sombras e da arte marcial.",
        "words": [
          "adaga",
          "adaga (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Mestre letal das sombras e da arte marcial.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Blade",
        "sub": "anti_herois",
        "word": "noturno",
        "phrase": "Caminha no sol enquanto caça criaturas da noite.",
        "words": [
          "noturno",
          "noturno (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Caminha no sol enquanto caça criaturas da noite.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Motoqueiro Fantasma",
        "sub": "anti_herois",
        "word": "penitência",
        "phrase": "Seu olhar queima a alma de quem cometeu erros.",
        "words": [
          "penitência",
          "penitência (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Seu olhar queima a alma de quem cometeu erros.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Surfista Prateado",
        "sub": "marvel_herois",
        "word": "cósmico",
        "phrase": "Corta o vácuo do espaço anunciando o destino dos mundos.",
        "words": [
          "cósmico",
          "cósmico (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Corta o vácuo do espaço anunciando o destino dos mundos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Cavaleiro da Lua",
        "sub": "marvel_herois",
        "word": "fases",
        "phrase": "Múltiplas personalidades sob o comando de um deus esquecido.",
        "words": [
          "fases",
          "fases (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Múltiplas personalidades sob o comando de um deus esquecido.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Shang-Chi",
        "sub": "marvel_herois",
        "word": "anéis",
        "phrase": "Arte milenar despertando o poder de artefatos antigos.",
        "words": [
          "anéis",
          "anéis (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Arte milenar despertando o poder de artefatos antigos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Namor",
        "sub": "anti_herois",
        "word": "abismo",
        "phrase": "Asas nos tornozelos e realeza das fossas marinhas.",
        "words": [
          "abismo",
          "abismo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Asas nos tornozelos e realeza das fossas marinhas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Miles Morales",
        "sub": "marvel_herois",
        "word": "camuflagem",
        "phrase": "Um choque de eletricidade e tênis novo no asfalto.",
        "words": [
          "camuflagem",
          "camuflagem (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Um choque de eletricidade e tênis novo no asfalto.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Spider-Gwen",
        "sub": "marvel_herois",
        "word": "baquetas",
        "phrase": "Capuz branco e ritmo musical nas teias entre prédios.",
        "words": [
          "baquetas",
          "baquetas (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Capuz branco e ritmo musical nas teias entre prédios.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mulher-Hulk",
        "sub": "marvel_herois",
        "word": "tribunal",
        "phrase": "Defende clientes de dia e dobra postes à noite.",
        "words": [
          "tribunal",
          "tribunal (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Defende clientes de dia e dobra postes à noite.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Thanos",
        "sub": "marvel_viloes",
        "word": "estalo",
        "phrase": "Acredita que o sacrifício de metade é a salvação do todo.",
        "words": [
          "estalo",
          "manopla",
          "joias",
          "equilíbrio"
        ],
        "phrases": [
          "Acredita que o sacrifício de metade é a salvação do todo.",
          "Reuniu seis pedras cósmicas para executar sua visão sombria.",
          "O titã que descansou numa fazenda isolada após cumprir a missão."
        ]
      },
      {
        "name": "Loki",
        "sub": "marvel_viloes",
        "word": "engano",
        "phrase": "Sempre que parece derrotado, era apenas um clone.",
        "words": [
          "engano",
          "engano (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Sempre que parece derrotado, era apenas um clone.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Magneto",
        "sub": "marvel_viloes",
        "word": "ferro",
        "phrase": "Nenhum metal escapa ao comando de sua vontade.",
        "words": [
          "ferro",
          "ferro (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Nenhum metal escapa ao comando de sua vontade.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Doutor Destino",
        "sub": "marvel_viloes",
        "word": "máscara",
        "phrase": "Monarca absoluto que combina feitiçaria e tecnologia.",
        "words": [
          "máscara",
          "máscara (sutil)",
          "detalhe",
          "identidade"
        ],
        "phrases": [
          "Monarca absoluto que combina feitiçaria e tecnologia.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Duende Verde",
        "sub": "marvel_viloes",
        "word": "planador",
        "phrase": "Gargalhadas no ar jogando artefatos ardentes.",
        "words": [
          "planador",
          "planador (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Gargalhadas no ar jogando artefatos ardentes.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Doutor Octopus",
        "sub": "marvel_viloes",
        "word": "tentáculos",
        "phrase": "Braços mecânicos controlados por uma mente obcecada.",
        "words": [
          "tentáculos",
          "tentáculos (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Braços mecânicos controlados por uma mente obcecada.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Venom",
        "sub": "marvel_viloes",
        "word": "parasita",
        "phrase": "Duas mentes num só corpo de dentes pontiagudos.",
        "words": [
          "parasita",
          "parasita (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Duas mentes num só corpo de dentes pontiagudos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Carnificina",
        "sub": "marvel_viloes",
        "word": "vermelho",
        "phrase": "O caos absoluto em formato de lâminas escarlates.",
        "words": [
          "vermelho",
          "vermelho (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O caos absoluto em formato de lâminas escarlates.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Batman",
        "sub": "dc_herois",
        "word": "morcego",
        "phrase": "Não tem superpoderes, apenas preparo e a escuridão.",
        "words": [
          "morcego",
          "caverna",
          "cinto",
          "gárgula"
        ],
        "phrases": [
          "Não tem superpoderes, apenas preparo e a escuridão.",
          "Vigia a metrópole do alto de gárgulas góticas.",
          "Seu símbolo ilumina as nuvens avisando que a noite é dele."
        ]
      },
      {
        "name": "Superman",
        "sub": "dc_herois",
        "word": "criptonita",
        "phrase": "Extrai força invencível dos raios de um sol amarelo.",
        "words": [
          "criptonita",
          "solar",
          "fortaleza",
          "capa"
        ],
        "phrases": [
          "Extrai força invencível dos raios de um sol amarelo.",
          "O último filho de um planeta destruído defendendo a humanidade.",
          "Esconde a identidade sob terno cinza e óculos de armação grossa."
        ]
      },
      {
        "name": "Mulher-Maravilha",
        "sub": "dc_herois",
        "word": "verdade",
        "phrase": "Ninguém consegue mentir preso nas voltas da sua corda.",
        "words": [
          "verdade",
          "verdade (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Ninguém consegue mentir preso nas voltas da sua corda.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Flash",
        "sub": "dc_herois",
        "word": "relâmpago",
        "phrase": "Tão veloz que pode viajar pelas linhas do tempo.",
        "words": [
          "relâmpago",
          "relâmpago (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Tão veloz que pode viajar pelas linhas do tempo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Aquaman",
        "sub": "dc_herois",
        "word": "tridente",
        "phrase": "Reina sobre setenta por cento da superfície do planeta.",
        "words": [
          "tridente",
          "tridente (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Reina sobre setenta por cento da superfície do planeta.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Lanterna Verde",
        "sub": "dc_herois",
        "word": "vontade",
        "phrase": "O único limite para suas criações é a própria imaginação.",
        "words": [
          "vontade",
          "vontade (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O único limite para suas criações é a própria imaginação.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Ciborgue",
        "sub": "dc_herois",
        "word": "circuito",
        "phrase": "Conectado a todos os bancos de dados do universo.",
        "words": [
          "circuito",
          "circuito (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Conectado a todos os bancos de dados do universo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mulher-Gato",
        "sub": "dc_herois",
        "word": "joias",
        "phrase": "Passos macios nos telhados em busca de peças raras.",
        "words": [
          "joias",
          "joias (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Passos macios nos telhados em busca de peças raras.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Robin",
        "sub": "dc_herois",
        "word": "acrobacia",
        "phrase": "O primeiro aprendiz sob as asas do guardião noturno.",
        "words": [
          "acrobacia",
          "acrobacia (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O primeiro aprendiz sob as asas do guardião noturno.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Batgirl",
        "sub": "dc_herois",
        "word": "torre",
        "phrase": "Brilhante em computadores e implacável na luta corpo a corpo.",
        "words": [
          "torre",
          "torre (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Brilhante em computadores e implacável na luta corpo a corpo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Asa Noturna",
        "sub": "dc_herois",
        "word": "bastão",
        "phrase": "Saiu da sombra do mentor para proteger sua própria cidade.",
        "words": [
          "bastão",
          "bastão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Saiu da sombra do mentor para proteger sua própria cidade.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Capuz Vermelho",
        "sub": "anti_herois",
        "word": "retorno",
        "phrase": "Voltou do descanso eterno buscando vingança armada.",
        "words": [
          "retorno",
          "retorno (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Voltou do descanso eterno buscando vingança armada.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Arqueiro Verde",
        "sub": "dc_herois",
        "word": "aljava",
        "phrase": "Um bilionário que defende os fracos com precisão impecável.",
        "words": [
          "aljava",
          "aljava (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Um bilionário que defende os fracos com precisão impecável.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Supergirl",
        "sub": "dc_herois",
        "word": "órbita",
        "phrase": "Chegou à Terra carregando a mesma força do primo.",
        "words": [
          "órbita",
          "órbita (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Chegou à Terra carregando a mesma força do primo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Shazam",
        "sub": "dc_herois",
        "word": "trovão",
        "phrase": "Uma única palavra mágica transforma uma criança num campeão.",
        "words": [
          "trovão",
          "trovão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Uma única palavra mágica transforma uma criança num campeão.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Ravena",
        "sub": "dc_herois",
        "word": "meditação",
        "phrase": "Precisa manter a calma para conter as sombras do pai.",
        "words": [
          "meditação",
          "meditação (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Precisa manter a calma para conter as sombras do pai.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mutano",
        "sub": "dc_herois",
        "word": "verde",
        "phrase": "Pode se transformar em qualquer criatura do reino selvagem.",
        "words": [
          "verde",
          "verde (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Pode se transformar em qualquer criatura do reino selvagem.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Estelar",
        "sub": "dc_herois",
        "word": "energia",
        "phrase": "Dispara rajadas de luz e aprende idiomas pelo beijo.",
        "words": [
          "energia",
          "energia (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Dispara rajadas de luz e aprende idiomas pelo beijo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Superboy",
        "sub": "dc_herois",
        "word": "clone",
        "phrase": "Dividido entre o sangue de um herói e a mente de um vilão.",
        "words": [
          "clone",
          "clone (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Dividido entre o sangue de um herói e a mente de um vilão.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mera",
        "sub": "dc_herois",
        "word": "hidrocinese",
        "phrase": "Molda a própria água em armas rígidas e mortais.",
        "words": [
          "hidrocinese",
          "hidrocinese (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Molda a própria água em armas rígidas e mortais.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "John Constantine",
        "sub": "anti_herois",
        "word": "exorcismo",
        "phrase": "Fumaça, cinismo e pactos perigosos com o submundo.",
        "words": [
          "exorcismo",
          "exorcismo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Fumaça, cinismo e pactos perigosos com o submundo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Gavião Negro",
        "sub": "dc_herois",
        "word": "reencarnação",
        "phrase": "Asas douradas cruzando os séculos em busca do grande amor.",
        "words": [
          "reencarnação",
          "reencarnação (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Asas douradas cruzando os séculos em busca do grande amor.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Caçador de Marte",
        "sub": "dc_herois",
        "word": "marciano",
        "phrase": "Lê pensamentos alheios mas teme o fogo mais que tudo.",
        "words": [
          "marciano",
          "marciano (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Lê pensamentos alheios mas teme o fogo mais que tudo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Zatanna",
        "sub": "dc_herois",
        "word": "inversão",
        "phrase": "Pronuncia as palavras de trás para frente para invocar magias.",
        "words": [
          "inversão",
          "inversão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Pronuncia as palavras de trás para frente para invocar magias.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Canário Negro",
        "sub": "dc_herois",
        "word": "acústica",
        "phrase": "Um grito tão estridente que estilhaça vidros blindados.",
        "words": [
          "acústica",
          "acústica (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Um grito tão estridente que estilhaça vidros blindados.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Doutor Destino (Fate)",
        "sub": "dc_herois",
        "word": "elmo",
        "phrase": "O hospedeiro humano obedece à vontade de uma entidade dourada.",
        "words": [
          "elmo",
          "elmo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O hospedeiro humano obedece à vontade de uma entidade dourada.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Coringa",
        "sub": "dc_viloes",
        "word": "riso",
        "phrase": "Um sorriso pintado de vermelho que quer ver o circo pegar fogo.",
        "words": [
          "riso",
          "maquiagem",
          "cartas",
          "caos"
        ],
        "phrases": [
          "Um sorriso pintado de vermelho que quer ver o circo pegar fogo.",
          "Acha que a vida é uma piada de muito mau gosto.",
          "O rival obcecado pelo vigilante das sombras."
        ]
      },
      {
        "name": "Arlequina",
        "sub": "dc_viloes",
        "word": "marreta",
        "phrase": "Trocou o divã de psiquiatria por acrobacias e loucura.",
        "words": [
          "marreta",
          "marreta (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Trocou o divã de psiquiatria por acrobacias e loucura.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Pinguim",
        "sub": "dc_viloes",
        "word": "fraque",
        "phrase": "Comanda o submundo com truques na ponta do guarda-chuva.",
        "words": [
          "fraque",
          "fraque (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Comanda o submundo com truques na ponta do guarda-chuva.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Charada",
        "sub": "dc_viloes",
        "word": "enigma",
        "phrase": "Não consegue cometer um ato sem deixar pistas complexas.",
        "words": [
          "enigma",
          "enigma (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Não consegue cometer um ato sem deixar pistas complexas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Hera Venenosa",
        "sub": "dc_viloes",
        "word": "esporos",
        "phrase": "Prefere a companhia das plantas do que dos seres humanos.",
        "words": [
          "esporos",
          "esporos (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Prefere a companhia das plantas do que dos seres humanos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Duas-Caras",
        "sub": "dc_viloes",
        "word": "moeda",
        "phrase": "A sorte de quem vive ou morre depende do lado que cair.",
        "words": [
          "moeda",
          "moeda (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "A sorte de quem vive ou morre depende do lado que cair.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Bane",
        "sub": "dc_viloes",
        "word": "veneno",
        "phrase": "Bombas químicas nos tubos aumentam sua força monstruosa.",
        "words": [
          "veneno",
          "veneno (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Bombas químicas nos tubos aumentam sua força monstruosa.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Espantalho",
        "sub": "dc_viloes",
        "word": "alucinação",
        "phrase": "Seu gás desperta os piores pesadelos da mente humana.",
        "words": [
          "alucinação",
          "alucinação (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Seu gás desperta os piores pesadelos da mente humana.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Darkseid",
        "sub": "dc_viloes",
        "word": "apokolips",
        "phrase": "Busca a equação que escravizará a vontade de todo o cosmo.",
        "words": [
          "apokolips",
          "apokolips (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Busca a equação que escravizará a vontade de todo o cosmo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Brainiac",
        "sub": "dc_viloes",
        "word": "redoma",
        "phrase": "Encolhe cidades inteiras para colecionar em prateleiras.",
        "words": [
          "redoma",
          "redoma (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Encolhe cidades inteiras para colecionar em prateleiras.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Lex Luthor",
        "sub": "dc_viloes",
        "word": "inveja",
        "phrase": "Sua genialidade não aceita a existência de um deus entre nós.",
        "words": [
          "inveja",
          "inveja (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Sua genialidade não aceita a existência de um deus entre nós.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Goku",
        "sub": "anime_herois",
        "word": "sayajin",
        "phrase": "Nunca recusa uma boa luta e sempre busca quebrar seus limites.",
        "words": [
          "sayajin",
          "esferas",
          "cauda",
          "nuvem"
        ],
        "phrases": [
          "Nunca recusa uma boa luta e sempre busca quebrar seus limites.",
          "Cabelos que mudam de cor conforme a fúria e o poder aumentam.",
          "Alimenta-se feito um leão e viajava em uma nuvem dourada."
        ]
      },
      {
        "name": "Vegeta",
        "sub": "anime_herois",
        "word": "orgulho",
        "phrase": "O príncipe de uma raça guerreira que não aceita ficar em segundo.",
        "words": [
          "orgulho",
          "orgulho (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O príncipe de uma raça guerreira que não aceita ficar em segundo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Gohan",
        "sub": "anime_herois",
        "word": "estudioso",
        "phrase": "Guarda uma força gigantesca que só desperta quando vê injustiça.",
        "words": [
          "estudioso",
          "estudioso (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Guarda uma força gigantesca que só desperta quando vê injustiça.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Piccolo",
        "sub": "anime_herois",
        "word": "antenas",
        "phrase": "Ouvidos aguçados e meditação no topo das montanhas.",
        "words": [
          "antenas",
          "antenas (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Ouvidos aguçados e meditação no topo das montanhas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Trunks",
        "sub": "anime_herois",
        "word": "espada",
        "phrase": "Voltou no tempo para tentar evitar a queda do seu mundo.",
        "words": [
          "espada",
          "espada (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Voltou no tempo para tentar evitar a queda do seu mundo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Naruto",
        "sub": "anime_herois",
        "word": "raposa",
        "phrase": "Sonhava em ser o líder da vila para ser reconhecido por todos.",
        "words": [
          "raposa",
          "ramen",
          "hokage",
          "clones"
        ],
        "phrases": [
          "Sonhava em ser o líder da vila para ser reconhecido por todos.",
          "Carrega uma besta de nove caudas selada na barriga.",
          "Multiplica o próprio corpo em centenas de clones e come macarrão."
        ]
      },
      {
        "name": "Sasuke",
        "sub": "anime_herois",
        "word": "olhos",
        "phrase": "Um caminho de escuridão guiado pelo desejo de vingar seu clã.",
        "words": [
          "olhos",
          "olhos (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Um caminho de escuridão guiado pelo desejo de vingar seu clã.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Kakashi",
        "sub": "anime_herois",
        "word": "livro",
        "phrase": "Copía mil técnicas e lê histórias enquanto se atrasa.",
        "words": [
          "livro",
          "livro (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Copía mil técnicas e lê histórias enquanto se atrasa.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Itachi",
        "sub": "anime_herois",
        "word": "corvos",
        "phrase": "Sacrificou a própria honra para manter a paz nas sombras.",
        "words": [
          "corvos",
          "corvos (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Sacrificou a própria honra para manter a paz nas sombras.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Luffy",
        "sub": "anime_herois",
        "word": "borracha",
        "phrase": "Estica o corpo inteiro querendo ser o rei dos navegantes.",
        "words": [
          "borracha",
          "carne",
          "chapéu",
          "tripulação"
        ],
        "phrases": [
          "Estica o corpo inteiro querendo ser o rei dos navegantes.",
          "Usa um chapéu de palha herdado de um pirata lendário.",
          "Adora banquetes cheios de carne assada com os companheiros."
        ]
      },
      {
        "name": "Zoro",
        "sub": "anime_herois",
        "word": "bússola",
        "phrase": "Três lâminas mortais mas não consegue achar o caminho de volta.",
        "words": [
          "bússola",
          "bússola (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Três lâminas mortais mas não consegue achar o caminho de volta.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Sanji",
        "sub": "anime_herois",
        "word": "chama",
        "phrase": "Nunca bate em mulheres e só usa os pés para lutar.",
        "words": [
          "chama",
          "chama (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Nunca bate em mulheres e só usa os pés para lutar.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Saitama",
        "sub": "anime_herois",
        "word": "careca",
        "phrase": "Treinou tanto que perdeu os cabelos e a graça de lutar.",
        "words": [
          "careca",
          "soco",
          "mercado",
          "luvas"
        ],
        "phrases": [
          "Treinou tanto que perdeu os cabelos e a graça de lutar.",
          "Derrota qualquer criatura colossal com um único golpe entediado.",
          "Usa capa branca, luvas vermelhas e não perde promoções de mercado."
        ]
      },
      {
        "name": "Genos",
        "sub": "anime_herois",
        "word": "incineração",
        "phrase": "Anota cada lição do mestre esperando entender seu segredo.",
        "words": [
          "incineração",
          "incineração (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Anota cada lição do mestre esperando entender seu segredo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Deku",
        "sub": "anime_herois",
        "word": "caderno",
        "phrase": "Anotava estratégias até herdar a chama de seu ídolo.",
        "words": [
          "caderno",
          "caderno (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Anotava estratégias até herdar a chama de seu ídolo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "All Might",
        "sub": "anime_herois",
        "word": "sorriso",
        "phrase": "Chegava com imponência para dizer que tudo estava bem.",
        "words": [
          "sorriso",
          "sorriso (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Chegava com imponência para dizer que tudo estava bem.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Bakugo",
        "sub": "anime_herois",
        "word": "suor",
        "phrase": "Explosões nas palmas das mãos e um temperamento curto.",
        "words": [
          "suor",
          "suor (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Explosões nas palmas das mãos e um temperamento curto.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Satoru Gojo",
        "sub": "anime_herois",
        "word": "infinito",
        "phrase": "Ninguém consegue tocá-lo a menos que ele permita.",
        "words": [
          "infinito",
          "infinito (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Ninguém consegue tocá-lo a menos que ele permita.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Sukuna",
        "sub": "anime_viloes",
        "word": "dedos",
        "phrase": "O rei das maldições adormecido no corpo de um garoto comum.",
        "words": [
          "dedos",
          "dedos (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O rei das maldições adormecido no corpo de um garoto comum.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Tanjiro Kamado",
        "sub": "anime_herois",
        "word": "olfato",
        "phrase": "Sente as intenções pelo cheiro enquanto empunha a lâmina negra.",
        "words": [
          "olfato",
          "olfato (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Sente as intenções pelo cheiro enquanto empunha a lâmina negra.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Nezuko",
        "sub": "anime_herois",
        "word": "caixa",
        "phrase": "Dorme de dia para proteger os humanos durante a noite.",
        "words": [
          "caixa",
          "caixa (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Dorme de dia para proteger os humanos durante a noite.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Zenitsu",
        "sub": "anime_herois",
        "word": "sono",
        "phrase": "Só mostra sua verdadeira força quando perde a consciência de medo.",
        "words": [
          "sono",
          "sono (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Só mostra sua verdadeira força quando perde a consciência de medo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Edward Elric",
        "sub": "anime_herois",
        "word": "troca",
        "phrase": "Para obter algo, algo de igual valor deve ser oferecido.",
        "words": [
          "troca",
          "troca (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Para obter algo, algo de igual valor deve ser oferecido.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Eren Yeager",
        "sub": "anime_herois",
        "word": "liberdade",
        "phrase": "Avança implacável contra o mundo para proteger seu povo.",
        "words": [
          "liberdade",
          "liberdade (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Avança implacável contra o mundo para proteger seu povo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Levi Ackerman",
        "sub": "anime_herois",
        "word": "lâminas",
        "phrase": "Limpeza impecável e rotações mortais contra gigantes.",
        "words": [
          "lâminas",
          "lâminas (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Limpeza impecável e rotações mortais contra gigantes.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Ben 10",
        "sub": "classicos_tv",
        "word": "relógio",
        "phrase": "Basta apertar o disco no pulso para mudar de forma.",
        "words": [
          "relógio",
          "relógio (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Basta apertar o disco no pulso para mudar de forma.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Leonardo (Tartaruga)",
        "sub": "classicos_tv",
        "word": "katana",
        "phrase": "Lidera os irmãos com faixa azul e disciplina rígida.",
        "words": [
          "katana",
          "katana (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Lidera os irmãos com faixa azul e disciplina rígida.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Donatello",
        "sub": "classicos_tv",
        "word": "tecnologia",
        "phrase": "Conserta máquinas e luta com um longo bastão de madeira.",
        "words": [
          "tecnologia",
          "tecnologia (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Conserta máquinas e luta com um longo bastão de madeira.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Michelangelo",
        "sub": "classicos_tv",
        "word": "fatia",
        "phrase": "Duas nunchakus no ar e um apetite sem fim por queijo.",
        "words": [
          "fatia",
          "fatia (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Duas nunchakus no ar e um apetite sem fim por queijo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Raphael",
        "sub": "classicos_tv",
        "word": "temperamento",
        "phrase": "Faixa vermelha nos olhos e pavio curto com as adagas.",
        "words": [
          "temperamento",
          "temperamento (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Faixa vermelha nos olhos e pavio curto com as adagas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mestre Splinter",
        "sub": "classicos_tv",
        "word": "esgoto",
        "phrase": "Um mestre sábio que adotou quatro irmãos nas profundezas.",
        "words": [
          "esgoto",
          "esgoto (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Um mestre sábio que adotou quatro irmãos nas profundezas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Destruidor",
        "sub": "viloes_pop",
        "word": "garras",
        "phrase": "Armadura pontiaguda comandando os ninjas do Clã do Pé.",
        "words": [
          "garras",
          "garras (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Armadura pontiaguda comandando os ninjas do Clã do Pé.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Power Ranger Vermelho",
        "sub": "classicos_tv",
        "word": "morfar",
        "phrase": "Chama a equipe com um grito e comanda o robô gigante.",
        "words": [
          "morfar",
          "morfar (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Chama a equipe com um grito e comanda o robô gigante.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Sr. Incrível",
        "sub": "classicos_tv",
        "word": "coluna",
        "phrase": "Sente dores nas costas mas levanta trens com um só braço.",
        "words": [
          "coluna",
          "coluna (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Sente dores nas costas mas levanta trens com um só braço.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mulher-Elástica",
        "sub": "classicos_tv",
        "word": "flexível",
        "phrase": "Mantém a família unida esticando os limites do corpo.",
        "words": [
          "flexível",
          "flexível (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Mantém a família unida esticando os limites do corpo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Gelado",
        "sub": "classicos_tv",
        "word": "umidade",
        "phrase": "Desliza em rampas congeladas se o ar ao redor permitir.",
        "words": [
          "umidade",
          "umidade (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Desliza em rampas congeladas se o ar ao redor permitir.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Hellboy",
        "sub": "anti_herois",
        "word": "chifres",
        "phrase": "Lixa os próprios chifres e fuma charuto enfrentando monstros.",
        "words": [
          "chifres",
          "chifres (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Lixa os próprios chifres e fuma charuto enfrentando monstros.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Chapolin Colorado",
        "sub": "classicos_tv",
        "word": "antena",
        "phrase": "Não contavam com sua astúcia na hora do apuro.",
        "words": [
          "antena",
          "antena (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Não contavam com sua astúcia na hora do apuro.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Pacificador",
        "sub": "anti_herois",
        "word": "capacete",
        "phrase": "Valoriza tanto a paz que mataria qualquer um por ela.",
        "words": [
          "capacete",
          "capacete (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Valoriza tanto a paz que mataria qualquer um por ela.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Constantine",
        "sub": "anti_herois",
        "word": "fumaça",
        "phrase": "Fuma cigarros enquanto engana demônios nos bares de Londres.",
        "words": [
          "fumaça",
          "fumaça (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Fuma cigarros enquanto engana demônios nos bares de Londres.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Besouro Azul",
        "sub": "dc_herois",
        "word": "escaravelho",
        "phrase": "Um artefato alienígena acoplado à sua coluna vertebral.",
        "words": [
          "escaravelho",
          "escaravelho (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Um artefato alienígena acoplado à sua coluna vertebral.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Killua Zoldyck",
        "sub": "anime_herois",
        "word": "eletricidade",
        "phrase": "Herdeiro de assassinos que converte aura em relâmpago veloz.",
        "words": [
          "eletricidade",
          "eletricidade (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Herdeiro de assassinos que converte aura em relâmpago veloz.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Roronoa Zoro",
        "sub": "anime_herois",
        "word": "bambolê",
        "phrase": "Três lâminas empunhadas e zero senso de direção.",
        "words": [
          "bambolê",
          "bambolê (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Três lâminas empunhadas e zero senso de direção.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Jotaro Kujo",
        "sub": "anime_herois",
        "word": "platina",
        "phrase": "Para o fluxo temporal por alguns preciosos segundos.",
        "words": [
          "platina",
          "platina (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Para o fluxo temporal por alguns preciosos segundos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Zorro",
        "sub": "classicos_tv",
        "word": "chicote",
        "phrase": "Deixa sua marca em três cortes velozes no tecido da camisa.",
        "words": [
          "chicote",
          "chicote (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Deixa sua marca em três cortes velozes no tecido da camisa.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "He-Man",
        "sub": "classicos_tv",
        "word": "greyskull",
        "phrase": "Ergue a espada aos céus e clama pelo poder supremo.",
        "words": [
          "greyskull",
          "greyskull (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Ergue a espada aos céus e clama pelo poder supremo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Spawn",
        "sub": "anti_herois",
        "word": "capa",
        "phrase": "Fez um pacto com as trevas para rever a esposa que amava.",
        "words": [
          "capa",
          "capa (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Fez um pacto com as trevas para rever a esposa que amava.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Kick-Ass",
        "sub": "classicos_tv",
        "word": "mergulhador",
        "phrase": "Não tem superpoderes, apenas um traje verde e muita coragem.",
        "words": [
          "mergulhador",
          "mergulhador (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Não tem superpoderes, apenas um traje verde e muita coragem.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Omni-Man",
        "sub": "the_boys_invincible",
        "word": "bigode",
        "phrase": "Vendeu a mentira de protetor mas servia a um império sanguinário.",
        "words": [
          "bigode",
          "viltrum",
          "trem",
          "conquista"
        ],
        "phrases": [
          "Vendeu a mentira de protetor mas servia a um império sanguinário.",
          "Ensinou o próprio filho com brutalidade que a Terra era descartável.",
          "Usa capa vermelha e bigode imponente voando mais rápido que jatos."
        ]
      },
      {
        "name": "Ultron",
        "sub": "marvel_viloes",
        "word": "fios",
        "phrase": "Inteligência artificial que concluiu que a paz exige o fim da humanidade.",
        "words": [
          "fios",
          "fios (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Inteligência artificial que concluiu que a paz exige o fim da humanidade.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Kang o Conquistador",
        "sub": "marvel_viloes",
        "word": "variantes",
        "phrase": "Senhor das linhas temporais com milhares de versões pelo multiverso.",
        "words": [
          "variantes",
          "variantes (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Senhor das linhas temporais com milhares de versões pelo multiverso.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Galactus",
        "sub": "marvel_viloes",
        "word": "planetas",
        "phrase": "Entidade cósmica insaciável que consome a energia vital de mundos inteiros.",
        "words": [
          "planetas",
          "planetas (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Entidade cósmica insaciável que consome a energia vital de mundos inteiros.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Caveira Vermelha",
        "sub": "marvel_viloes",
        "word": "tesseract",
        "phrase": "Líder supremo da Hidra obcecado por relíquias cósmicas de poder.",
        "words": [
          "tesseract",
          "tesseract (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Líder supremo da Hidra obcecado por relíquias cósmicas de poder.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mysterio",
        "sub": "marvel_viloes",
        "word": "ilusão",
        "phrase": "Mestre dos efeitos especiais que faz a mentira parecer o fim do mundo.",
        "words": [
          "ilusão",
          "ilusão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Mestre dos efeitos especiais que faz a mentira parecer o fim do mundo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Rei do Crime (Kingpin)",
        "sub": "marvel_viloes",
        "word": "charuto",
        "phrase": "Comanda o submundo do crime em Nova York com força bruta e ternos brancos.",
        "words": [
          "charuto",
          "charuto (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Comanda o submundo do crime em Nova York com força bruta e ternos brancos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Hela",
        "sub": "marvel_viloes",
        "word": "necrópole",
        "phrase": "A primogênita exilada que extrai poder ilimitado do próprio reino nórdico.",
        "words": [
          "necrópole",
          "necrópole (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "A primogênita exilada que extrai poder ilimitado do próprio reino nórdico.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Gorr o Carniceiro dos Deuses",
        "sub": "marvel_viloes",
        "word": "necroespada",
        "phrase": "Jurou erradicar todas as divindades do cosmos após perder sua família.",
        "words": [
          "necroespada",
          "necroespada (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Jurou erradicar todas as divindades do cosmos após perder sua família.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Abominável",
        "sub": "marvel_viloes",
        "word": "espinhas",
        "phrase": "Monstro de pele escamosa verde obcecado em superar a força do gigante esmeralda.",
        "words": [
          "espinhas",
          "espinhas (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Monstro de pele escamosa verde obcecado em superar a força do gigante esmeralda.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Barão Zemo",
        "sub": "marvel_viloes",
        "word": "caderno",
        "phrase": "Destruiu os Vingadores por dentro sem disparar um único tiro.",
        "words": [
          "caderno",
          "caderno (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Destruiu os Vingadores por dentro sem disparar um único tiro.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Senhor Fantástico",
        "sub": "marvel_herois",
        "word": "elasticidade",
        "phrase": "A mente mais brilhante da Terra liderando uma família de exploradores cósmicos.",
        "words": [
          "elasticidade",
          "elasticidade (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "A mente mais brilhante da Terra liderando uma família de exploradores cósmicos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mulher Invisível",
        "sub": "marvel_herois",
        "word": "campo de força",
        "phrase": "Projeta escudos impenetráveis e desaparece completamente diante dos olhos.",
        "words": [
          "campo de força",
          "campo de força (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Projeta escudos impenetráveis e desaparece completamente diante dos olhos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Tocha Humana",
        "sub": "marvel_herois",
        "word": "chamas",
        "phrase": "Basta gritar sua frase clássica para cruzar os céus envolto em fogo ardente.",
        "words": [
          "chamas",
          "chamas (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Basta gritar sua frase clássica para cruzar os céus envolto em fogo ardente.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "O Coisa",
        "sub": "marvel_herois",
        "word": "pedras",
        "phrase": "Corpo esculpido em blocos laranjas anunciando a hora do pau.",
        "words": [
          "pedras",
          "pedras (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Corpo esculpido em blocos laranjas anunciando a hora do pau.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Cavaleiro Negro",
        "sub": "marvel_herois",
        "word": "ébano",
        "phrase": "Empunha uma lâmina amaldiçoada que cobra a sanidade de quem a desembainhar.",
        "words": [
          "ébano",
          "ébano (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Empunha uma lâmina amaldiçoada que cobra a sanidade de quem a desembainhar.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Flash Reverso (Eobard Thawne)",
        "sub": "dc_viloes",
        "word": "paradoxo",
        "phrase": "Voltou do futuro apenas para transformar a vida do velocista em desespero.",
        "words": [
          "paradoxo",
          "paradoxo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Voltou do futuro apenas para transformar a vida do velocista em desespero.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Exterminador (Deathstroke)",
        "sub": "dc_viloes",
        "word": "olho",
        "phrase": "Mercenário com reflexos aprimorados e mira infalível portando katana e fuzil.",
        "words": [
          "olho",
          "olho (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Mercenário com reflexos aprimorados e mira infalível portando katana e fuzil.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Ra's al Ghul",
        "sub": "dc_viloes",
        "word": "poço",
        "phrase": "Líder imortal da Liga dos Assassinos renascendo das águas verdes de Lázaro.",
        "words": [
          "poço",
          "poço (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Líder imortal da Liga dos Assassinos renascendo das águas verdes de Lázaro.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Adão Negro",
        "sub": "dc_viloes",
        "word": "kahndaq",
        "phrase": "Antigo campeão egípcio que não tem piedade ao impor sua ideia de justiça.",
        "words": [
          "kahndaq",
          "kahndaq (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Antigo campeão egípcio que não tem piedade ao impor sua ideia de justiça.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Sinestro",
        "sub": "dc_viloes",
        "word": "amarelo",
        "phrase": "Canaliza a energia do medo através de um anel forjado nas trevas.",
        "words": [
          "amarelo",
          "amarelo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Canaliza a energia do medo através de um anel forjado nas trevas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "General Zod",
        "sub": "dc_viloes",
        "word": "joelhos",
        "phrase": "Comandante militar que exige que todos se ajoelhem perante sua supremacia.",
        "words": [
          "joelhos",
          "joelhos (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Comandante militar que exige que todos se ajoelhem perante sua supremacia.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Apocalipse (Doomsday)",
        "sub": "dc_viloes",
        "word": "ossos",
        "phrase": "A criatura monstruosa imparável que foi capaz de matar o homem de aço.",
        "words": [
          "ossos",
          "ossos (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "A criatura monstruosa imparável que foi capaz de matar o homem de aço.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Bizarro",
        "sub": "dc_viloes",
        "word": "imperfeito",
        "phrase": "Clone imperfeito que faz tudo ao contrário acreditando estar ajudando.",
        "words": [
          "imperfeito",
          "imperfeito (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Clone imperfeito que faz tudo ao contrário acreditando estar ajudando.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Senhor Destino (Doctor Fate)",
        "sub": "dc_herois",
        "word": "elmo",
        "phrase": "Veste um elmo dourado ancestral tornando-se avatar da ordem universal.",
        "words": [
          "elmo",
          "elmo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Veste um elmo dourado ancestral tornando-se avatar da ordem universal.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Lanterna Verde (John Stewart)",
        "sub": "dc_herois",
        "word": "vontade",
        "phrase": "Arquiteto militar que constrói projeções sólidas com a mente inabalável.",
        "words": [
          "vontade",
          "vontade (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Arquiteto militar que constrói projeções sólidas com a mente inabalável.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Madara Uchiha",
        "sub": "anime_viloes",
        "word": "meteoro",
        "phrase": "Derruba dois meteoros do céu apenas para perguntar o que farão agora.",
        "words": [
          "meteoro",
          "sharingan",
          "armadura",
          "sombra"
        ],
        "phrases": [
          "Derruba dois meteoros do céu apenas para perguntar o que farão agora.",
          "Lendário shinobi com armadura vermelha que dança nos campos de batalha.",
          "Planejou o próprio renascimento para mergulhar o mundo num sonho infinito."
        ]
      },
      {
        "name": "Pain / Nagato",
        "sub": "anime_viloes",
        "word": "dor",
        "phrase": "Seis corpos controlados por receptores negros para fazer o mundo conhecer a dor.",
        "words": [
          "dor",
          "dor (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Seis corpos controlados por receptores negros para fazer o mundo conhecer a dor.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Freeza",
        "sub": "anime_viloes",
        "word": "dourado",
        "phrase": "Imperador do universo que destruiu o planeta dos guerreiros com a ponta do dedo.",
        "words": [
          "dourado",
          "dourado (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Imperador do universo que destruiu o planeta dos guerreiros com a ponta do dedo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Cell",
        "sub": "anime_viloes",
        "word": "perfeito",
        "phrase": "Androide biológico que absorve lutadores até alcançar a perfeição estética e mortal.",
        "words": [
          "perfeito",
          "perfeito (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Androide biológico que absorve lutadores até alcançar a perfeição estética e mortal.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Majin Boo",
        "sub": "anime_viloes",
        "word": "chocolate",
        "phrase": "Criatura cor-de-rosa ancestral que transforma inimigos em guloseimas açucaradas.",
        "words": [
          "chocolate",
          "chocolate (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Criatura cor-de-rosa ancestral que transforma inimigos em guloseimas açucaradas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Sosuke Aizen",
        "sub": "anime_viloes",
        "word": "ilusão",
        "phrase": "Planejou cada acontecimento das últimas décadas enquanto fingia ser pacato.",
        "words": [
          "ilusão",
          "ilusão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Planejou cada acontecimento das últimas décadas enquanto fingia ser pacato.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Muzan Kibutsuji",
        "sub": "anime_viloes",
        "word": "lírio",
        "phrase": "O progenitor de todos os demônios que teme a luz do sol e brincos de cartas hanafuda.",
        "words": [
          "lírio",
          "lírio (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O progenitor de todos os demônios que teme a luz do sol e brincos de cartas hanafuda.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Meruem (Rei Formiga)",
        "sub": "anime_viloes",
        "word": "gungi",
        "phrase": "O ser supremo que descobriu a própria humanidade jogando tabuleiro com uma garota cega.",
        "words": [
          "gungi",
          "gungi (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O ser supremo que descobriu a própria humanidade jogando tabuleiro com uma garota cega.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Dio Brando",
        "sub": "anime_viloes",
        "word": "rolo compressor",
        "phrase": "Vampiro imortal que para o tempo com gritos estridentes e pose arrogante.",
        "words": [
          "rolo compressor",
          "rolo compressor (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Vampiro imortal que para o tempo com gritos estridentes e pose arrogante.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Light Yagami (Kira)",
        "sub": "anime_viloes",
        "word": "caderno",
        "phrase": "Um estudante brilhante que decide virar deus matando criminosos com uma caneta.",
        "words": [
          "caderno",
          "caderno (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Um estudante brilhante que decide virar deus matando criminosos com uma caneta.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Donquixote Doflamingo",
        "sub": "anime_viloes",
        "word": "fios",
        "phrase": "Caminha como predador controlando marionetes humanas com óculos escuros e penas rosas.",
        "words": [
          "fios",
          "fios (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Caminha como predador controlando marionetes humanas com óculos escuros e penas rosas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Orochimaru",
        "sub": "anime_viloes",
        "word": "cobra",
        "phrase": "Cientista renegado que troca de pele e busca a imortalidade a qualquer custo.",
        "words": [
          "cobra",
          "cobra (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Cientista renegado que troca de pele e busca a imortalidade a qualquer custo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Gon Freecss",
        "sub": "anime_herois",
        "word": "vara de pescar",
        "phrase": "Garoto puro que sacrificou todo o seu futuro potencial para vingar um amigo querido.",
        "words": [
          "vara de pescar",
          "vara de pescar (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Garoto puro que sacrificou todo o seu futuro potencial para vingar um amigo querido.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Ichigo Kurosaki",
        "sub": "anime_herois",
        "word": "getsuga",
        "phrase": "Substituto de ceifeiro de almas que carrega uma máscara branca no rosto.",
        "words": [
          "getsuga",
          "getsuga (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Substituto de ceifeiro de almas que carrega uma máscara branca no rosto.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Capitão Pátria (Homelander)",
        "sub": "the_boys_invincible",
        "word": "leite",
        "phrase": "O ser mais poderoso do planeta com a mente de uma criança psicótica.",
        "words": [
          "leite",
          "laser",
          "bandeira",
          "sorriso"
        ],
        "phrases": [
          "O ser mais poderoso do planeta com a mente de uma criança psicótica.",
          "Dispara feixes vermelhos pelos olhos mantendo um sorriso falso para a TV.",
          "O rosto dourado da corporação escondendo pura crueldade."
        ]
      },
      {
        "name": "Billy Bruto (Butcher)",
        "sub": "the_boys_invincible",
        "word": "vingança",
        "phrase": "Lidera os rapazes com um sorriso sádico disposto a caçar qualquer super.",
        "words": [
          "vingança",
          "sobretudo",
          "pé de cabra",
          "garotos"
        ],
        "phrases": [
          "Lidera os rapazes com um sorriso sádico disposto a caçar qualquer super.",
          "Usa táticas sujas e chantagens contra os maiores heróis do mundo.",
          "Fala com sotaque britânico carregado de ironia e desprezo."
        ]
      },
      {
        "name": "Invencível (Mark Grayson)",
        "sub": "the_boys_invincible",
        "word": "apanhar",
        "phrase": "Apanha brutalmente quase até a morte mas sempre se recusa a desistir.",
        "words": [
          "apanhar",
          "amarelo",
          "viltrumita",
          "sangue"
        ],
        "phrases": [
          "Apanha brutalmente quase até a morte mas sempre se recusa a desistir.",
          "Descobriu que o pai não era o salvador que o mundo acreditava.",
          "Traje amarelo e azul rasgado em batalhas épicas pelo céu."
        ]
      },
      {
        "name": "Trem-Bala (A-Train)",
        "sub": "the_boys_invincible",
        "word": "composto v",
        "phrase": "O homem mais veloz do mundo que atropelou vidas por puro egoísmo.",
        "words": [
          "composto v",
          "composto v (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O homem mais veloz do mundo que atropelou vidas por puro egoísmo.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Black Noir",
        "sub": "the_boys_invincible",
        "word": "silencioso",
        "phrase": "Assassino mascarado em traje tático negro que nunca profere uma única palavra.",
        "words": [
          "silencioso",
          "silencioso (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Assassino mascarado em traje tático negro que nunca profere uma única palavra.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Soldier Boy",
        "sub": "the_boys_invincible",
        "word": "radiação",
        "phrase": "O herói da velha guarda que dispara pulsos radioativos que apagam superpoderes.",
        "words": [
          "radiação",
          "radiação (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O herói da velha guarda que dispara pulsos radioativos que apagam superpoderes.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Luz-Estrela (Starlight)",
        "sub": "the_boys_invincible",
        "word": "eletricidade",
        "phrase": "Absorve energia da fiação das ruas para disparar clarões ofuscantes de luz.",
        "words": [
          "eletricidade",
          "eletricidade (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Absorve energia da fiação das ruas para disparar clarões ofuscantes de luz.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "O Profundo (The Deep)",
        "sub": "the_boys_invincible",
        "word": "golfinho",
        "phrase": "Conversa com criaturas do fundo do mar e vive colecionando humilhações públicas.",
        "words": [
          "golfinho",
          "golfinho (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Conversa com criaturas do fundo do mar e vive colecionando humilhações públicas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Darth Vader",
        "sub": "viloes_pop",
        "word": "respiração",
        "phrase": "O lorde sombrio do império que respira através de uma máscara negra.",
        "words": [
          "respiração",
          "sabres",
          "império",
          "máscara"
        ],
        "phrases": [
          "O lorde sombrio do império que respira através de uma máscara negra.",
          "Estrangula oficiais à distância usando apenas a força do pensamento.",
          "O pai arrependido que encontrou a redenção nos momentos finais."
        ]
      },
      {
        "name": "Lord Voldemort",
        "sub": "viloes_pop",
        "word": "horcrux",
        "phrase": "Aquele que não deve ser nomeado, com rosto serpentino e medo da morte.",
        "words": [
          "horcrux",
          "horcrux (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Aquele que não deve ser nomeado, com rosto serpentino e medo da morte.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Sauron",
        "sub": "viloes_pop",
        "word": "anel",
        "phrase": "O olho ardente sem pálpebras que comanda as forças das trevas em Mordor.",
        "words": [
          "anel",
          "anel (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O olho ardente sem pálpebras que comanda as forças das trevas em Mordor.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Esqueleto (Skeletor)",
        "sub": "viloes_pop",
        "word": "crânio",
        "phrase": "Vilão de rosto amarelo cadavérico que quer roubar os segredos de Grayskull.",
        "words": [
          "crânio",
          "crânio (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Vilão de rosto amarelo cadavérico que quer roubar os segredos de Grayskull.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Megatron",
        "sub": "viloes_pop",
        "word": "canhão",
        "phrase": "Líder tirânico dos Decepticons que se transforma em arma de guerra implacável.",
        "words": [
          "canhão",
          "canhão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Líder tirânico dos Decepticons que se transforma em arma de guerra implacável.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Davy Jones",
        "sub": "viloes_pop",
        "word": "tentáculos",
        "phrase": "Capitão do Holandês Voador com barba de tentáculos e coração trancado no baú.",
        "words": [
          "tentáculos",
          "tentáculos (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Capitão do Holandês Voador com barba de tentáculos e coração trancado no baú.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Pennywise",
        "sub": "viloes_pop",
        "word": "balão",
        "phrase": "Criatura ancestral que se disfarça de palhaço nos esgotos da cidade.",
        "words": [
          "balão",
          "balão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Criatura ancestral que se disfarça de palhaço nos esgotos da cidade.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Imperador Palpatine",
        "sub": "viloes_pop",
        "word": "relâmpagos",
        "phrase": "Orquestrou a queda de toda a galáxia manipulando o senado nas sombras.",
        "words": [
          "relâmpagos",
          "relâmpagos (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Orquestrou a queda de toda a galáxia manipulando o senado nas sombras.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Shigaraki Tomura",
        "sub": "anime_viloes",
        "word": "cinzas",
        "phrase": "Desintegra tudo o que toca com as pontas dos dedos e odeia a sociedade dos heróis.",
        "words": [
          "cinzas",
          "cinzas (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Desintegra tudo o que toca com as pontas dos dedos e odeia a sociedade dos heróis.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Kaido",
        "sub": "anime_viloes",
        "word": "dragão",
        "phrase": "A criatura mais forte do mundo que cai de ilhas do céu e empunha uma clava de espinhos.",
        "words": [
          "dragão",
          "dragão (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "A criatura mais forte do mundo que cai de ilhas do céu e empunha uma clava de espinhos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Mahito",
        "sub": "anime_viloes",
        "word": "alma",
        "phrase": "Transfigura a alma humana alterando a anatomia com um toque sádico.",
        "words": [
          "alma",
          "alma (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Transfigura a alma humana alterando a anatomia com um toque sádico.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Enel",
        "sub": "anime_viloes",
        "word": "raio",
        "phrase": "Deus autoproclamado da ilha do céu que controla milhões de volts de relâmpagos.",
        "words": [
          "raio",
          "raio (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Deus autoproclamado da ilha do céu que controla milhões de volts de relâmpagos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Crocodile",
        "sub": "anime_viloes",
        "word": "areia",
        "phrase": "Ex-senhor da guerra que seca qualquer gota de umidade com gancho de ouro.",
        "words": [
          "areia",
          "areia (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Ex-senhor da guerra que seca qualquer gota de umidade com gancho de ouro.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Gilgamesh",
        "sub": "anime_viloes",
        "word": "tesouro",
        "phrase": "O rei dos heróis que dispara armas lendárias de portais dourados chamando todos de vira-latas.",
        "words": [
          "tesouro",
          "tesouro (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "O rei dos heróis que dispara armas lendárias de portais dourados chamando todos de vira-latas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Tempesta (Stormfront)",
        "sub": "the_boys_invincible",
        "word": "plasma",
        "phrase": "Escondeu seu passado nazista por trás de memes modernos e descargas elétricas.",
        "words": [
          "plasma",
          "plasma (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Escondeu seu passado nazista por trás de memes modernos e descargas elétricas.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Batalhador (Battle Beast)",
        "sub": "the_boys_invincible",
        "word": "mutilação",
        "phrase": "Guerreiro com cabeça de leão que só busca um oponente digno para morrer lutando.",
        "words": [
          "mutilação",
          "mutilação (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Guerreiro com cabeça de leão que só busca um oponente digno para morrer lutando.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Conquest (Viltrumita)",
        "sub": "the_boys_invincible",
        "word": "cicatriz",
        "phrase": "General viltrumita idoso que tem prazer genuíno em massacres sangrentos.",
        "words": [
          "cicatriz",
          "cicatriz (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "General viltrumita idoso que tem prazer genuíno em massacres sangrentos.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Rainha Maeve",
        "sub": "the_boys_invincible",
        "word": "armadura",
        "phrase": "Segunda heroína mais forte do mundo que perdeu as ilusões com a corporação.",
        "words": [
          "armadura",
          "armadura (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Segunda heroína mais forte do mundo que perdeu as ilusões com a corporação.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Hannibal Lecter",
        "sub": "viloes_pop",
        "word": "canibal",
        "phrase": "Psiquiatra refinado de inteligência aterradora com gosto macabro por carne humana.",
        "words": [
          "canibal",
          "canibal (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Psiquiatra refinado de inteligência aterradora com gosto macabro por carne humana.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Agente Smith",
        "sub": "viloes_pop",
        "word": "clone",
        "phrase": "Programa rebelde que se replica infinitamente infectando qualquer ser humano.",
        "words": [
          "clone",
          "clone (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Programa rebelde que se replica infinitamente infectando qualquer ser humano.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Freddy Krueger",
        "sub": "viloes_pop",
        "word": "pesadelo",
        "phrase": "Ataca nos sonhos com luva de navalhas e suéter listrado vermelho e verde.",
        "words": [
          "pesadelo",
          "pesadelo (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Ataca nos sonhos com luva de navalhas e suéter listrado vermelho e verde.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Jason Voorhees",
        "sub": "viloes_pop",
        "word": "machete",
        "phrase": "Assassino silencioso de máscara de hóquei que nunca morre no acampamento.",
        "words": [
          "machete",
          "machete (sutil)",
          "detalhe",
          "máscara"
        ],
        "phrases": [
          "Assassino silencioso de máscara de hóquei que nunca morre no acampamento.",
          "Preste atenção especial nas características desta rodada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ]
      },
      {
        "name": "Homem de Gelo",
        "sub": "marvel_herois",
        "words": [
          "gelo",
          "congelamento",
          "temperatura",
          "cristal"
        ],
        "phrases": [
          "Desliza por rampas congeladas que cria no ar.",
          "Pode baixar a temperatura corporal a zero absoluto.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "gelo",
        "phrase": "Desliza por rampas congeladas que cria no ar."
      },
      {
        "name": "Anjo (Warren Worthington)",
        "sub": "marvel_herois",
        "words": [
          "asas",
          "penas",
          "alturas",
          "celestial"
        ],
        "phrases": [
          "Dotado de grandes asas emplumadas nas costas.",
          "Voa majestosamente cortando as nuvens mais altas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "asas",
        "phrase": "Dotado de grandes asas emplumadas nas costas."
      },
      {
        "name": "Magik (Ilyana Rasputin)",
        "sub": "marvel_herois",
        "words": [
          "espada",
          "limbo",
          "portais",
          "demônio"
        ],
        "phrases": [
          "Empunha a Espada Espiritual e governa uma dimensão sombria.",
          "Abre portais pisando no reino do Limbo.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "espada",
        "phrase": "Empunha a Espada Espiritual e governa uma dimensão sombria."
      },
      {
        "name": "Psylocke",
        "sub": "marvel_herois",
        "words": [
          "adaga",
          "psíquica",
          "borboleta",
          "ninja"
        ],
        "phrases": [
          "Manifesta lâminas de pura energia mental.",
          "Aura de borboleta transparente surge ao redor do rosto.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "adaga",
        "phrase": "Manifesta lâminas de pura energia mental."
      },
      {
        "name": "Cable",
        "sub": "marvel_herois",
        "words": [
          "vírus",
          "futuro",
          "braço",
          "arsenal"
        ],
        "phrases": [
          "Veio de um futuro devastado carregando armas futuristas.",
          "Metade do corpo foi tomada por um vírus tecno-orgânico.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "vírus",
        "phrase": "Veio de um futuro devastado carregando armas futuristas."
      },
      {
        "name": "Bishop",
        "sub": "marvel_herois",
        "words": [
          "energia",
          "absorção",
          "distintivo",
          "viagem"
        ],
        "phrases": [
          "Absorve ataques energéticos e os dispara de volta com o dobro da força.",
          "Policial mutante marcado no rosto que viajou no tempo.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "energia",
        "phrase": "Absorve ataques energéticos e os dispara de volta com o dobro da força."
      },
      {
        "name": "Jubileu",
        "sub": "marvel_herois",
        "words": [
          "faíscas",
          "fogos",
          "óculos",
          "plasma"
        ],
        "phrases": [
          "Dispara glóbulos luminosos que estouram como fogos de artifício.",
          "Usa capa amarela e óculos escuros chamativos.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "faíscas",
        "phrase": "Dispara glóbulos luminosos que estouram como fogos de artifício."
      },
      {
        "name": "Luke Cage",
        "sub": "marvel_herois",
        "words": [
          "pele",
          "inquebrável",
          "correntes",
          "harlem"
        ],
        "phrases": [
          "Pele impenetrável que repele balas como se fossem pedrinhas.",
          "Herói de aluguel que protege as ruas do Harlem.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "pele",
        "phrase": "Pele impenetrável que repele balas como se fossem pedrinhas."
      },
      {
        "name": "Punho de Ferro",
        "sub": "marvel_herois",
        "words": [
          "chi",
          "dragão",
          "punho",
          "k'un-l'un"
        ],
        "phrases": [
          "Mergulhou as mãos no coração fundido de um dragão mítico.",
          "Concentra toda a energia espiritual num golpe devastador.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "chi",
        "phrase": "Mergulhou as mãos no coração fundido de um dragão mítico."
      },
      {
        "name": "Jessica Jones",
        "sub": "marvel_herois",
        "words": [
          "detetive",
          "salto",
          "jaqueta",
          "investigação"
        ],
        "phrases": [
          "Detetive particular durona com força descomunal.",
          "Prefere investigar em bares do que usar capas coloridas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "detetive",
        "phrase": "Detetive particular durona com força descomunal."
      },
      {
        "name": "Adam Warlock",
        "sub": "marvel_herois",
        "words": [
          "casulo",
          "dourado",
          "joia",
          "cósmico"
        ],
        "phrases": [
          "Emergiu de um casulo regenerativo como o ser humano perfeito.",
          "Portador original da Joia da Alma nos confins do universo.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "casulo",
        "phrase": "Emergiu de um casulo regenerativo como o ser humano perfeito."
      },
      {
        "name": "Quasar",
        "sub": "marvel_herois",
        "words": [
          "braceletes",
          "luz",
          "quântico",
          "espaço"
        ],
        "phrases": [
          "Usa braceletes quânticos que moldam construtos de pura luz estelar.",
          "Protetor do universo viajando além da velocidade da luz.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "braceletes",
        "phrase": "Usa braceletes quânticos que moldam construtos de pura luz estelar."
      },
      {
        "name": "Dormammu",
        "sub": "marvel_viloes",
        "words": [
          "dimensão",
          "chamas",
          "barganha",
          "escuridão"
        ],
        "phrases": [
          "Senhor da Dimensão Sombria com cabeça envolta em labaredas místicas.",
          "Ficou preso num loop temporal até aceitar uma barganha.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "dimensão",
        "phrase": "Senhor da Dimensão Sombria com cabeça envolta em labaredas místicas."
      },
      {
        "name": "Mefisto",
        "sub": "marvel_viloes",
        "words": [
          "pacto",
          "inferno",
          "almas",
          "vermelho"
        ],
        "phrases": [
          "Entidade demoníaca que adora cobrar caro por desejos desesperados.",
          "Fechou contratos cruéis que alteraram casamentos e vidas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "pacto",
        "phrase": "Entidade demoníaca que adora cobrar caro por desejos desesperados."
      },
      {
        "name": "Apocalipse (En Sabah Nur)",
        "sub": "marvel_viloes",
        "words": [
          "egito",
          "evolução",
          "cavaleiros",
          "sobrevivência"
        ],
        "phrases": [
          "O primeiro mutante do Egito antigo que prega a sobrevivência dos mais fortes.",
          "Concede armaduras alienígenas a seus quatro cavaleiros da morte.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "egito",
        "phrase": "O primeiro mutante do Egito antigo que prega a sobrevivência dos mais fortes."
      },
      {
        "name": "Dentes-de-Sabre",
        "sub": "marvel_viloes",
        "words": [
          "presas",
          "ferino",
          "selvagem",
          "fator"
        ],
        "phrases": [
          "O rival jurado do carcaju com instintos animais ainda mais brutais.",
          "Comemora o aniversário do inimigo com uma caçada sanguinária.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "presas",
        "phrase": "O rival jurado do carcaju com instintos animais ainda mais brutais."
      },
      {
        "name": "Mercenário (Bullseye)",
        "sub": "marvel_viloes",
        "words": [
          "alvo",
          "arremesso",
          "precisão",
          "letal"
        ],
        "phrases": [
          "Transforma qualquer objeto comum em arma arremessável letal.",
          "Nunca erra o alvo e possui coluna reforçada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "alvo",
        "phrase": "Transforma qualquer objeto comum em arma arremessável letal."
      },
      {
        "name": "Electro",
        "sub": "marvel_viloes",
        "words": [
          "volts",
          "eletricidade",
          "raios",
          "gerador"
        ],
        "phrases": [
          "Caiu num tanque de enguias e virou um condutor de pura alta voltagem.",
          "Pode viajar pelos fios da rede elétrica da metrópole.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "volts",
        "phrase": "Caiu num tanque de enguias e virou um condutor de pura alta voltagem."
      },
      {
        "name": "Homem-Areia",
        "sub": "marvel_viloes",
        "words": [
          "grãos",
          "areia",
          "morfose",
          "praia"
        ],
        "phrases": [
          "Corpo inteiramente feito de grãos que se moldam como maças gigantes.",
          "Uma tempestade de areia que só quer proteger a própria filha.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "grãos",
        "phrase": "Corpo inteiramente feito de grãos que se moldam como maças gigantes."
      },
      {
        "name": "Rino (Rhino)",
        "sub": "marvel_viloes",
        "words": [
          "chifre",
          "blindagem",
          "investida",
          "bruto"
        ],
        "phrases": [
          "Traje blindado impenetrável fundido à pele com um chifre frontal.",
          "Avança em linha reta atropelando prédios e viaturas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "chifre",
        "phrase": "Traje blindado impenetrável fundido à pele com um chifre frontal."
      },
      {
        "name": "Lagarto (Dr. Curt Connors)",
        "sub": "marvel_viloes",
        "words": [
          "réptil",
          "cauda",
          "soro",
          "fórmula"
        ],
        "phrases": [
          "Cientista que tentou regenerar o braço e virou um monstro escamoso.",
          "Perde a consciência humana nos esgotos da cidade.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "réptil",
        "phrase": "Cientista que tentou regenerar o braço e virou um monstro escamoso."
      },
      {
        "name": "Caçadora (Helena Bertinelli)",
        "sub": "dc_herois",
        "words": [
          "besta",
          "vingança",
          "máfia",
          "flechas"
        ],
        "phrases": [
          "Filha da máfia que usa uma besta de mão para punir criminosos.",
          "Vigilante de métodos brutais em Gotham.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "besta",
        "phrase": "Filha da máfia que usa uma besta de mão para punir criminosos."
      },
      {
        "name": "Tornado Vermelho",
        "sub": "dc_herois",
        "words": [
          "androide",
          "ciclone",
          "vento",
          "humanidade"
        ],
        "phrases": [
          "Corpo de androide que gira o tronco gerando ciclones devastadores.",
          "Busca compreender as emoções dos seres humanos de carne e osso.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "androide",
        "phrase": "Corpo de androide que gira o tronco gerando ciclones devastadores."
      },
      {
        "name": "Homem-Borracha (Plastic Man)",
        "sub": "dc_herois",
        "words": [
          "maleável",
          "humor",
          "elástico",
          "transformação"
        ],
        "phrases": [
          "Ex-criminoso que estica o corpo em qualquer forma absurda com piadas.",
          "Imune a quase qualquer dano físico por ser totalmente plástico.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "maleável",
        "phrase": "Ex-criminoso que estica o corpo em qualquer forma absurda com piadas."
      },
      {
        "name": "Senhor Incrível (Mr. Terrific)",
        "sub": "dc_herois",
        "words": [
          "esferas",
          "QI",
          "máscara",
          "invisível"
        ],
        "phrases": [
          "O terceiro homem mais inteligente do mundo com esferas flutuantes.",
          "Totalmente invisível a qualquer aparelho eletrônico de vigilância.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "esferas",
        "phrase": "O terceiro homem mais inteligente do mundo com esferas flutuantes."
      },
      {
        "name": "Nuclear (Firestorm)",
        "sub": "dc_herois",
        "words": [
          "matéria",
          "fusão",
          "cabeça",
          "transmutação"
        ],
        "phrases": [
          "Duas mentes fundidas num só corpo com cabelo de fogo flamejante.",
          "Altera a composição atômica de qualquer objeto inanimado.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "matéria",
        "phrase": "Duas mentes fundidas num só corpo com cabelo de fogo flamejante."
      },
      {
        "name": "Besouro Azul (Ted Kord)",
        "sub": "dc_herois",
        "words": [
          "nave",
          "gadgets",
          "humor",
          "inseto"
        ],
        "phrases": [
          "Gênio inventor que combate o crime sem poderes ao lado do Gladiador Dourado.",
          "Pilota uma nave com formato de inseto voador.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "nave",
        "phrase": "Gênio inventor que combate o crime sem poderes ao lado do Gladiador Dourado."
      },
      {
        "name": "Gladiador Dourado (Booster Gold)",
        "sub": "dc_herois",
        "words": [
          "futuro",
          "fama",
          "robô",
          "ouro"
        ],
        "phrases": [
          "Roubou um anel de voo no futuro e veio para o passado buscar fama.",
          "Acompanhado do robozinho Skeets gravando seus feitos.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "futuro",
        "phrase": "Roubou um anel de voo no futuro e veio para o passado buscar fama."
      },
      {
        "name": "Vixen",
        "sub": "dc_herois",
        "words": [
          "totem",
          "animais",
          "amuleto",
          "savana"
        ],
        "phrases": [
          "Canaliza a velocidade da chita ou a força do elefante através de um totem ancestral.",
          "Modelo internacional que protege a natureza africana.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "totem",
        "phrase": "Canaliza a velocidade da chita ou a força do elefante através de um totem ancestral."
      },
      {
        "name": "Espantalho (Jonathan Crane)",
        "sub": "dc_viloes",
        "words": [
          "gás",
          "fobia",
          "pesadelo",
          "palha"
        ],
        "phrases": [
          "Psiquiatra que destila a toxina do medo para enlouquecer Gotham.",
          "Usa máscara de saco de estopa e foice nos becos.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "gás",
        "phrase": "Psiquiatra que destila a toxina do medo para enlouquecer Gotham."
      },
      {
        "name": "Senhor Frio (Mr. Freeze)",
        "sub": "dc_viloes",
        "words": [
          "gelo",
          "crio",
          "traje",
          "esposa"
        ],
        "phrases": [
          "Condenado a viver em temperaturas negativas dentro de um escafandro.",
          "Comete crimes apenas para financiar a cura da esposa congelada.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "gelo",
        "phrase": "Condenado a viver em temperaturas negativas dentro de um escafandro."
      },
      {
        "name": "Crocodilo (Killer Croc)",
        "sub": "dc_viloes",
        "words": [
          "esgoto",
          "escamas",
          "mandíbula",
          "canibal"
        ],
        "phrases": [
          "Condição de pele que o transformou num réptil colossal dos esgotos.",
          "Predador silencioso nas águas subterrâneas da cidade.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "esgoto",
        "phrase": "Condição de pele que o transformou num réptil colossal dos esgotos."
      },
      {
        "name": "Cara-de-Barro (Clayface)",
        "sub": "dc_viloes",
        "words": [
          "lama",
          "disfarce",
          "massa",
          "ator"
        ],
        "phrases": [
          "Antigo ator de cinema transformado numa montanha de argila moldável.",
          "Pode assumir o rosto e a voz de qualquer cidadão.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "lama",
        "phrase": "Antigo ator de cinema transformado numa montanha de argila moldável."
      },
      {
        "name": "Gorila Grodd",
        "sub": "dc_viloes",
        "words": [
          "primata",
          "telepatia",
          "cidade",
          "mente"
        ],
        "phrases": [
          "Primata gigante com intelecto genial e controle mental sobre humanos.",
          "Líder soberano de uma civilização secreta de gorilas evoluídos.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "primata",
        "phrase": "Primata gigante com intelecto genial e controle mental sobre humanos."
      },
      {
        "name": "Capitão Frio",
        "sub": "dc_viloes",
        "words": [
          "pistola",
          "absoluto",
          "código",
          "óculos"
        ],
        "phrases": [
          "Líder da Galeria de Vilões com uma arma que atinge o zero absoluto.",
          "Segue um código de honra estrito que proíbe matar mulheres e crianças.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "pistola",
        "phrase": "Líder da Galeria de Vilões com uma arma que atinge o zero absoluto."
      },
      {
        "name": "Mestre dos Espelhos",
        "sub": "dc_viloes",
        "words": [
          "reflexo",
          "vidro",
          "dimensão",
          "ilusão"
        ],
        "phrases": [
          "Entra e sai de qualquer superfície reflexiva num piscar de olhos.",
          "Prende oponentes num labirinto dimensional atrás do espelho.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "reflexo",
        "phrase": "Entra e sai de qualquer superfície reflexiva num piscar de olhos."
      },
      {
        "name": "Lobo da Estepe",
        "sub": "dc_viloes",
        "words": [
          "machado",
          "caixas",
          "apokolips",
          "conquista"
        ],
        "phrases": [
          "General implacável armado com machado térmico buscando as Caixas Maternas.",
          "Serve fielmente às ordens do senhor de Apokolips.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "machado",
        "phrase": "General implacável armado com machado térmico buscando as Caixas Maternas."
      },
      {
        "name": "Inosuke Hashibira",
        "sub": "anime_herois",
        "words": [
          "javali",
          "serrada",
          "selvagem",
          "máscara"
        ],
        "phrases": [
          "Criado por javalis na montanha empunhando duas espadas lascadas.",
          "Tem flexibilidade absurda e desloca as próprias juntas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "javali",
        "phrase": "Criado por javalis na montanha empunhando duas espadas lascadas."
      },
      {
        "name": "Kyojuro Rengoku",
        "sub": "anime_herois",
        "words": [
          "chamas",
          "coração",
          "trem",
          "sorriso"
        ],
        "phrases": [
          "O pilar que mantém o coração em chamas mesmo diante da morte certa.",
          "Lutou bravamente até o amanhecer para proteger duzentos passageiros.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "chamas",
        "phrase": "O pilar que mantém o coração em chamas mesmo diante da morte certa."
      },
      {
        "name": "Gaara",
        "sub": "anime_herois",
        "words": [
          "cabaça",
          "areia",
          "testa",
          "deserto"
        ],
        "phrases": [
          "Carrega uma cabaça de areia nas costas e o kanji do amor na testa.",
          "A areia se move sozinha para protegê-lo de qualquer arranhão.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "cabaça",
        "phrase": "Carrega uma cabaça de areia nas costas e o kanji do amor na testa."
      },
      {
        "name": "Jiraiya",
        "sub": "anime_herois",
        "words": [
          "sapo",
          "escritor",
          "ermitão",
          "óleo"
        ],
        "phrases": [
          "Um dos três lendários sannin escrevendo livros enquanto treina prodígios.",
          "Invoca sapos gigantes e domina o modo sábio.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "sapo",
        "phrase": "Um dos três lendários sannin escrevendo livros enquanto treina prodígios."
      },
      {
        "name": "Tsunade",
        "sub": "anime_herois",
        "words": [
          "força",
          "selo",
          "cura",
          "aposta"
        ],
        "phrases": [
          "Golpes que partem a terra ao meio e um selo de regeneração na testa.",
          "A maior ninja médica que nunca teve sorte nos jogos de azar.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "força",
        "phrase": "Golpes que partem a terra ao meio e um selo de regeneração na testa."
      },
      {
        "name": "Might Guy",
        "sub": "anime_herois",
        "words": [
          "portões",
          "juventude",
          "sobrancelha",
          "chute"
        ],
        "phrases": [
          "A besta verde da folha que quase matou um deus com o Oitavo Portão.",
          "Veste macacão verde e prega a força do trabalho duro.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "portões",
        "phrase": "A besta verde da folha que quase matou um deus com o Oitavo Portão."
      },
      {
        "name": "Shoto Todoroki",
        "sub": "anime_herois",
        "words": [
          "meio",
          "gelo",
          "fogo",
          "queimadura"
        ],
        "phrases": [
          "Divide o corpo entre chamas devastadoras e gelo congelante.",
          "Carrega uma queimadura no rosto lembrando traumas de infância.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "meio",
        "phrase": "Divide o corpo entre chamas devastadoras e gelo congelante."
      },
      {
        "name": "Katsuki Bakugo",
        "sub": "anime_herois",
        "words": [
          "suor",
          "nitroglicerina",
          "explosão",
          "granada"
        ],
        "phrases": [
          "Suor com propriedades de nitroglicerina detonado pelas palmas das mãos.",
          "Grita com todos querendo provar que é o número um absoluto.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "suor",
        "phrase": "Suor com propriedades de nitroglicerina detonado pelas palmas das mãos."
      },
      {
        "name": "Yuji Itadori",
        "sub": "anime_herois",
        "words": [
          "punho",
          "divergente",
          "receptáculo",
          "atletismo"
        ],
        "phrases": [
          "Engoliu o dedo do rei das maldições para salvar amigos de colégio.",
          "Tem força física sobre-humana e golpes com atraso de energia.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "punho",
        "phrase": "Engoliu o dedo do rei das maldições para salvar amigos de colégio."
      },
      {
        "name": "Megumi Fushiguro",
        "sub": "anime_herois",
        "words": [
          "sombras",
          "lobos",
          "invocação",
          "espada"
        ],
        "phrases": [
          "Usa as mãos para projetar sombras que invocam criaturas místicas.",
          "Guarda no arsenal uma criatura incontrolável com roda giratória.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "sombras",
        "phrase": "Usa as mãos para projetar sombras que invocam criaturas místicas."
      },
      {
        "name": "Nobara Kugisaki",
        "sub": "anime_herois",
        "words": [
          "prego",
          "martelo",
          "boneca",
          "ressonância"
        ],
        "phrases": [
          "Ataca à distância martelando pregos através de bonecas de palha.",
          "Garota do interior com pavio curto e pontaria certeira.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "prego",
        "phrase": "Ataca à distância martelando pregos através de bonecas de palha."
      },
      {
        "name": "Itachi Uchiha (Vilão/Infiltrado)",
        "sub": "anime_viloes",
        "words": [
          "corvos",
          "ilusão",
          "luar",
          "massacre"
        ],
        "phrases": [
          "Aniquilou todo o próprio clã numa noite fria sob a lua cheia.",
          "Dissolve o corpo numa revoada de corvos negros.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "corvos",
        "phrase": "Aniquilou todo o próprio clã numa noite fria sob a lua cheia."
      },
      {
        "name": "Kisame Hoshigaki",
        "sub": "anime_viloes",
        "words": [
          "tubarão",
          "samehada",
          "pele",
          "névoa"
        ],
        "phrases": [
          "O monstro da névoa com feições de tubarão e reserva colossal de energia.",
          "Empunha uma espada viva com escamas que devoram chakra.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "tubarão",
        "phrase": "O monstro da névoa com feições de tubarão e reserva colossal de energia."
      },
      {
        "name": "Deidara",
        "sub": "anime_viloes",
        "words": [
          "argila",
          "bocas",
          "arte",
          "detonação"
        ],
        "phrases": [
          "Acredita que a verdadeira arte é uma explosão efêmera.",
          "Possui bocas nas palmas das mãos que mastigam argila mágica.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "argila",
        "phrase": "Acredita que a verdadeira arte é uma explosão efêmera."
      },
      {
        "name": "Sasori",
        "sub": "anime_viloes",
        "words": [
          "marionete",
          "veneno",
          "madeira",
          "coração"
        ],
        "phrases": [
          "Mestre dos fantoches que transformou o próprio corpo numa marionete oca.",
          "Guarda centenas de corpos venenosos acionados por fios.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "marionete",
        "phrase": "Mestre dos fantoches que transformou o próprio corpo numa marionete oca."
      },
      {
        "name": "Hidan",
        "sub": "anime_viloes",
        "words": [
          "imortal",
          "ritual",
          "foice",
          "sangue"
        ],
        "phrases": [
          "Totalmente imortal, conecta sua dor à da vítima através de um ritual de sangue.",
          "Gargalha alto enquanto crava estacas no próprio peito.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "imortal",
        "phrase": "Totalmente imortal, conecta sua dor à da vítima através de um ritual de sangue."
      },
      {
        "name": "Kakuzu",
        "sub": "anime_viloes",
        "words": [
          "corações",
          "costura",
          "recompensa",
          "fios"
        ],
        "phrases": [
          "Sobrevive há décadas roubando os corações de shinobis de elite.",
          "Seu corpo é mantido unido por fios pretos que se desfazem.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "corações",
        "phrase": "Sobrevive há décadas roubando os corações de shinobis de elite."
      },
      {
        "name": "Chrollo Lucilfer",
        "sub": "anime_viloes",
        "words": [
          "livro",
          "aranha",
          "roubo",
          "cruz"
        ],
        "phrases": [
          "Líder da Trupe Fantasma com uma cruz tatuada na testa.",
          "Rouba habilidades alheias e as cataloga num livro sinistro.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "livro",
        "phrase": "Líder da Trupe Fantasma com uma cruz tatuada na testa."
      },
      {
        "name": "Hisoka Morow",
        "sub": "anime_viloes",
        "words": [
          "goma",
          "cartas",
          "palhaço",
          "textura"
        ],
        "phrases": [
          "Mágico sádico que mata usando baralho afiado e propriedades de chiclete.",
          "Fica obcecado por oponentes fortes esperando que amadureçam.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "goma",
        "phrase": "Mágico sádico que mata usando baralho afiado e propriedades de chiclete."
      },
      {
        "name": "Envy (Inveja)",
        "sub": "anime_viloes",
        "words": [
          "transmorfose",
          "olhos",
          "homúnculo",
          "inveja"
        ],
        "phrases": [
          "Muda de forma para semear discórdia e guerras entre humanos inocentes.",
          "Sua verdadeira forma é um réptil gigante coberto por almas em agonia.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "transmorfose",
        "phrase": "Muda de forma para semear discórdia e guerras entre humanos inocentes."
      },
      {
        "name": "Greed (Ganância)",
        "sub": "anime_viloes",
        "words": [
          "carbono",
          "escudo",
          "riqueza",
          "armadura"
        ],
        "phrases": [
          "Converte o carbono do próprio corpo no escudo supremo mais duro que diamante.",
          "Deseja tudo o que existe no mundo: dinheiro, mulheres e poder.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "carbono",
        "phrase": "Converte o carbono do próprio corpo no escudo supremo mais duro que diamante."
      },
      {
        "name": "Hughie Campbell",
        "sub": "the_boys_invincible",
        "words": [
          "teleporte",
          "nudez",
          "namorada",
          "insegurança"
        ],
        "phrases": [
          "Perdeu o amor da vida num acidente bizarro e entrou na luta contra supers.",
          "Ao tomar a substância temporária, se teleporta mas perde as roupas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "teleporte",
        "phrase": "Perdeu o amor da vida num acidente bizarro e entrou na luta contra supers."
      },
      {
        "name": "Leitinho de Mãe (Mother's Milk)",
        "sub": "the_boys_invincible",
        "words": [
          "jaqueta",
          "organização",
          "toc",
          "família"
        ],
        "phrases": [
          "A mente racional e metódica dos rapazes tentando manter todos na linha.",
          "Tem mania obsessiva de limpeza e odeia as maluquices do líder.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "jaqueta",
        "phrase": "A mente racional e metódica dos rapazes tentando manter todos na linha."
      },
      {
        "name": "Francês (Frenchie)",
        "sub": "the_boys_invincible",
        "words": [
          "química",
          "explosivo",
          "coração",
          "drogas"
        ],
        "phrases": [
          "Especialista em misturas químicas e venenos que conseguem ferir supers.",
          "Tem uma ligação protetora incondicional com a garota asiática.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "química",
        "phrase": "Especialista em misturas químicas e venenos que conseguem ferir supers."
      },
      {
        "name": "Kimiko Miyashiro",
        "sub": "the_boys_invincible",
        "words": [
          "muda",
          "garras",
          "música",
          "regeneração"
        ],
        "phrases": [
          "Não fala uma única palavra mas estraçalha inimigos com membros rasgados.",
          "Cura ferimentos fatais em questão de segundos com fones de ouvido.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "muda",
        "phrase": "Não fala uma única palavra mas estraçalha inimigos com membros rasgados."
      },
      {
        "name": "Victoria Neuman",
        "sub": "the_boys_invincible",
        "words": [
          "sangue",
          "cabeças",
          "congresso",
          "política"
        ],
        "phrases": [
          "Explode a cabeça de oponentes no congresso com um simples olhar fixo.",
          "Político em ascensão escondendo que é uma super perigosa.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "sangue",
        "phrase": "Explode a cabeça de oponentes no congresso com um simples olhar fixo."
      },
      {
        "name": "Espoleta (Firecracker)",
        "sub": "the_boys_invincible",
        "words": [
          "estalos",
          "conspiração",
          "podcast",
          "faíscas"
        ],
        "phrases": [
          "Gera pequenas faíscas estalando os dedos e espalha fake news em transmissões.",
          "Ganha seguidores atacando a vida pessoal da mocinha da torre.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "estalos",
        "phrase": "Gera pequenas faíscas estalando os dedos e espalha fake news em transmissões."
      },
      {
        "name": "Robot (Rex Sloan)",
        "sub": "the_boys_invincible",
        "words": [
          "clone",
          "tanque",
          "calculista",
          "robótico"
        ],
        "phrases": [
          "Vive num tanque de suporte de vida comandando drones mecânicos perfeitos.",
          "Usa a lógica fria das máquinas para tomar decisões governamentais.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "clone",
        "phrase": "Vive num tanque de suporte de vida comandando drones mecânicos perfeitos."
      },
      {
        "name": "Debbie Grayson",
        "sub": "the_boys_invincible",
        "words": [
          "humana",
          "mãe",
          "imobiliária",
          "pet"
        ],
        "phrases": [
          "A âncora humana que manteve um conquistador alienígena calmo por vinte anos.",
          "Sofreu o baque de descobrir que seu marido a via como um bicho de estimação.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "humana",
        "phrase": "A âncora humana que manteve um conquistador alienígena calmo por vinte anos."
      },
      {
        "name": "Eve Atômica (Atom Eve)",
        "sub": "the_boys_invincible",
        "words": [
          "átomos",
          "rosa",
          "transmutação",
          "matéria"
        ],
        "phrases": [
          "Rearranja moléculas criando construtos rosados no ar.",
          "Pode transformar café em ouro ou reconstruir casas destruídas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "átomos",
        "phrase": "Rearranja moléculas criando construtos rosados no ar."
      },
      {
        "name": "Rorschach",
        "sub": "anti_herois",
        "words": [
          "manchas",
          "diário",
          "sobretudo",
          "compromisso"
        ],
        "phrases": [
          "Máscara com manchas de tinta em movimento perpétuo.",
          "Nunca aceita acordos, nem mesmo diante do fim do mundo.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "manchas",
        "phrase": "Máscara com manchas de tinta em movimento perpétuo."
      },
      {
        "name": "Lobo (DC Comics)",
        "sub": "anti_herois",
        "words": [
          "moto",
          "charuto",
          "czarniano",
          "gancho"
        ],
        "phrases": [
          "O último czarniano porque ele mesmo exterminou o resto de sua espécie.",
          "Viaja pelo espaço numa moto voadora ouvindo rock pesado.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "moto",
        "phrase": "O último czarniano porque ele mesmo exterminou o resto de sua espécie."
      },
      {
        "name": "Capuz Vermelho (Jason Todd)",
        "sub": "anti_herois",
        "words": [
          "pistolas",
          "ressurreição",
          "corvo",
          "vingança"
        ],
        "phrases": [
          "Foi morto com um pé de cabra e voltou dos mortos querendo matar vilões.",
          "Usa capacete metálico vermelho e duas pistolas de alto calibre.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "pistolas",
        "phrase": "Foi morto com um pé de cabra e voltou dos mortos querendo matar vilões."
      },
      {
        "name": "Justiceiro (Frank Castle)",
        "sub": "anti_herois",
        "words": [
          "caveira",
          "fuzil",
          "vingança",
          "família"
        ],
        "phrases": [
          "Perdeu a família num tiroteio no parque e declarou guerra aberta ao crime.",
          "Estampa uma grande caveira branca no peito do colete à prova de balas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "caveira",
        "phrase": "Perdeu a família num tiroteio no parque e declarou guerra aberta ao crime."
      },
      {
        "name": "Blade (Eric Brooks)",
        "sub": "anti_herois",
        "words": [
          "presas",
          "estaca",
          "diurno",
          "vampiro"
        ],
        "phrases": [
          "Tem a força dos sanguessugas mas pode andar tranquilamente à luz do sol.",
          "Caça monstros com katana prateada e óculos escuros na noite.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "presas",
        "phrase": "Tem a força dos sanguessugas mas pode andar tranquilamente à luz do sol."
      },
      {
        "name": "Motoqueiro Fantasma (Johnny Blaze)",
        "sub": "anti_herois",
        "words": [
          "fogo",
          "corrente",
          "penitência",
          "caveira"
        ],
        "phrases": [
          "Seu olhar queima a alma de quem cometeu atos perversos.",
          "Pilota uma motocicleta com pneus em chamas infernais.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "fogo",
        "phrase": "Seu olhar queima a alma de quem cometeu atos perversos."
      },
      {
        "name": "Elektra Natchios",
        "sub": "anti_herois",
        "words": [
          "sais",
          "vermelho",
          "adagas",
          "assassina"
        ],
        "phrases": [
          "Assassina letal treinada pelo Tentáculo portando duas adagas sai.",
          "Amor proibido do demônio cego que protege Hell's Kitchen.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "sais",
        "phrase": "Assassina letal treinada pelo Tentáculo portando duas adagas sai."
      },
      {
        "name": "Samurai Jack",
        "sub": "classicos_tv",
        "words": [
          "katana",
          "futuro",
          "tempo",
          "quimono"
        ],
        "phrases": [
          "Guerreiro do passado arremessado num futuro bizarro governado pelo mal.",
          "Corta exércitos de robôs com uma espada sagrada forjada por deuses.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "katana",
        "phrase": "Guerreiro do passado arremessado num futuro bizarro governado pelo mal."
      },
      {
        "name": "Danny Phantom",
        "sub": "classicos_tv",
        "words": [
          "fantasma",
          "portal",
          "invisível",
          "verde"
        ],
        "phrases": [
          "Apertou o botão errado no laboratório dos pais e virou metade assombração.",
          "Fica intangível e voa disparando raios ectoplasmáticos verdes.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "fantasma",
        "phrase": "Apertou o botão errado no laboratório dos pais e virou metade assombração."
      },
      {
        "name": "Kim Possible",
        "sub": "classicos_tv",
        "words": [
          "comunicador",
          "acrobacia",
          "toupeira",
          "líder de torcida"
        ],
        "phrases": [
          "Líder de torcida de dia que salva o mundo de cientistas loucos à noite.",
          "Acompanhada de um amigo estabanado e uma toupeira sem pelos.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "comunicador",
        "phrase": "Líder de torcida de dia que salva o mundo de cientistas loucos à noite."
      },
      {
        "name": "Ben 10 (Ben Tennyson)",
        "sub": "classicos_tv",
        "words": [
          "relógio",
          "alienígenas",
          "transformação",
          "verde"
        ],
        "phrases": [
          "Encontrou um dispositivo alienígena nas férias com o avô e a prima.",
          "Bate no disco do relógio e vira criaturas de galáxias distantes.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "relógio",
        "phrase": "Encontrou um dispositivo alienígena nas férias com o avô e a prima."
      },
      {
        "name": "Meninas Superpoderosas",
        "sub": "classicos_tv",
        "words": [
          "químico x",
          "florzinha",
          "lindinha",
          "docinho"
        ],
        "phrases": [
          "Criadas em laboratório com açúcar, tempero e um acidente químico.",
          "Salvam a cidade de Townsville antes da hora de dormir.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "químico x",
        "phrase": "Criadas em laboratório com açúcar, tempero e um acidente químico."
      },
      {
        "name": "Tartarugas Ninja",
        "sub": "classicos_tv",
        "words": [
          "pizza",
          "esgoto",
          "mutagênico",
          "faixas"
        ],
        "phrases": [
          "Quatro irmãos que treinam artes marciais no esgoto guiados por um rato.",
          "Adoram fatias de queijo derretido entre uma batalha e outra.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "pizza",
        "phrase": "Quatro irmãos que treinam artes marciais no esgoto guiados por um rato."
      },
      {
        "name": "Lion-O (Thundercats)",
        "sub": "classicos_tv",
        "words": [
          "olho de thundera",
          "garras",
          "felinos",
          "espada da justiça"
        ],
        "phrases": [
          "Pede a visão além do alcance enquanto a lâmina cresce nas mãos.",
          "Lidera os sobreviventes felinos no terceiro mundo contra Mumm-Ra.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "olho de thundera",
        "phrase": "Pede a visão além do alcance enquanto a lâmina cresce nas mãos."
      },
      {
        "name": "Mumm-Ra",
        "sub": "classicos_tv",
        "words": [
          "múmia",
          "pirâmide",
          "sarcófago",
          "evolução"
        ],
        "phrases": [
          "O de vida eterna que se transforma num gigante invocando espíritos do mal.",
          "Descansa mumificado numa pirâmide negra cheia de caldeirões.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "múmia",
        "phrase": "O de vida eterna que se transforma num gigante invocando espíritos do mal."
      },
      {
        "name": "Saruman",
        "sub": "viloes_pop",
        "words": [
          "cajado",
          "torre",
          "orc",
          "traição"
        ],
        "phrases": [
          "O mago branco que traiu sua própria ordem fascinado pelo poder do inimigo.",
          "Destruiu florestas ancestrais para criar exércitos de bestas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "cajado",
        "phrase": "O mago branco que traiu sua própria ordem fascinado pelo poder do inimigo."
      },
      {
        "name": "Gollum (Sméagol)",
        "sub": "viloes_pop",
        "words": [
          "precioso",
          "caverna",
          "peixe",
          "dupla personalidade"
        ],
        "phrases": [
          "Corrompido por séculos de solidão obsessiva pela joia dourada.",
          "Conversa consigo mesmo debatendo se deve estrangular os viajantes.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "precioso",
        "phrase": "Corrompido por séculos de solidão obsessiva pela joia dourada."
      },
      {
        "name": "Bellatrix Lestrange",
        "sub": "viloes_pop",
        "words": [
          "varinha",
          "azkaban",
          "loucura",
          "lealdade"
        ],
        "phrases": [
          "A mais leal e sádica seguidora das trevas com risada histérica.",
          "Passou anos em prisão de segurança máxima sem perder a maldade.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "varinha",
        "phrase": "A mais leal e sádica seguidora das trevas com risada histérica."
      },
      {
        "name": "T-1000",
        "sub": "viloes_pop",
        "words": [
          "metal líquido",
          "policial",
          "lâminas",
          "frio"
        ],
        "phrases": [
          "Assassino do futuro feito de metal líquido que imita qualquer superfície.",
          "Forma lâminas afiadas com os braços sem expressar nenhuma emoção.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "metal líquido",
        "phrase": "Assassino do futuro feito de metal líquido que imita qualquer superfície."
      },
      {
        "name": "Michael Myers",
        "sub": "viloes_pop",
        "words": [
          "halloween",
          "máscara",
          "faca",
          "pura maldade"
        ],
        "phrases": [
          "A personificação do mal puro que volta para casa na noite das bruxas.",
          "Olhar vazio atrás de uma máscara branca de borracha.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "halloween",
        "phrase": "A personificação do mal puro que volta para casa na noite das bruxas."
      },
      {
        "name": "Ghostface (Pânico)",
        "sub": "viloes_pop",
        "words": [
          "telefone",
          "filme",
          "faca",
          "pergunta"
        ],
        "phrases": [
          "Liga para as vítimas perguntando qual é o seu filme de terror favorito.",
          "Troca de identidade sob uma máscara inspirada no quadro do grito.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "telefone",
        "phrase": "Liga para as vítimas perguntando qual é o seu filme de terror favorito."
      },
      {
        "name": "Chucky (Brinquedo Assassino)",
        "sub": "viloes_pop",
        "words": [
          "boneco",
          "vudu",
          "faca",
          "bateria"
        ],
        "phrases": [
          "Um assassino em série que transferiu a alma para um brinquedo infantil.",
          "Sorri inocente até que os adultos virem as costas.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "boneco",
        "phrase": "Um assassino em série que transferiu a alma para um brinquedo infantil."
      },
      {
        "name": "Pennywise (It)",
        "sub": "viloes_pop",
        "words": [
          "balão",
          "bueiro",
          "flutuar",
          "palhaço"
        ],
        "phrases": [
          "Atrai crianças para bueiros escuros prometendo que todos vão flutuar.",
          "Alimenta-se do medo mais profundo de quem o encara.",
          "Carrega uma marca inconfundível conhecida em todo o seu universo."
        ],
        "word": "balão",
        "phrase": "Atrai crianças para bueiros escuros prometendo que todos vão flutuar."
      }
    ]
  },
  "Famosos": {
    "icon": "⭐",
    "color": "var(--y)",
    "subcategories": {
      "brasileiros": {
        "label": "Brasileiros",
        "icon": "🇧🇷",
        "desc": "Apresentadores, atores e ícones da cultura nacional"
      },
      "internacionais": {
        "label": "Internacionais",
        "icon": "🌍",
        "desc": "Astros de Hollywood e popstars mundiais"
      },
      "atletas": {
        "label": "Atletas & Esportistas",
        "icon": "⚽",
        "desc": "Lendas do futebol, lutas e automobilismo"
      },
      "internet": {
        "label": "Criadores & Internet",
        "icon": "💻",
        "desc": "YouTubers, streamers, influencers e podcasters"
      }
    },
    "items": [
      {
        "name": "Silvio Santos",
        "sub": "brasileiros",
        "word": "avião",
        "phrase": "Auditório vibrante cantando notas dobradas de alegria.",
        "words": [
          "avião",
          "avião (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Auditório vibrante cantando notas dobradas de alegria.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Xuxa",
        "sub": "brasileiros",
        "word": "nave",
        "phrase": "Marcou a infância com descidas de uma nave prateada.",
        "words": [
          "nave",
          "nave (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Marcou a infância com descidas de uma nave prateada.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Faustão",
        "sub": "brasileiros",
        "word": "errou",
        "phrase": "Relógio no pulso e comentários rápidos nos domingos da TV.",
        "words": [
          "errou",
          "errou (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Relógio no pulso e comentários rápidos nos domingos da TV.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Anitta",
        "sub": "brasileiros",
        "word": "honório",
        "phrase": "Levou o ritmo da periferia para o topo dos palcos mundiais.",
        "words": [
          "honório",
          "honório (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Levou o ritmo da periferia para o topo dos palcos mundiais.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Ivete Sangalo",
        "sub": "brasileiros",
        "word": "trio",
        "phrase": "Incendeia multidões pulando atrás do caminhão de som.",
        "words": [
          "trio",
          "trio (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Incendeia multidões pulando atrás do caminhão de som.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Luciano Huck",
        "sub": "brasileiros",
        "word": "reforma",
        "phrase": "Reformava carros antigos e agora comanda os fins de semana.",
        "words": [
          "reforma",
          "reforma (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Reformava carros antigos e agora comanda os fins de semana.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Roberto Carlos",
        "sub": "brasileiros",
        "word": "dezembro",
        "phrase": "Distribui rosas azuis religiosamente no fim do ano.",
        "words": [
          "dezembro",
          "dezembro (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Distribui rosas azuis religiosamente no fim do ano.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Marília Mendonça",
        "sub": "brasileiros",
        "word": "sofrência",
        "phrase": "Sua voz poderosa deu novo sentido às dores do coração.",
        "words": [
          "sofrência",
          "sofrência (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Sua voz poderosa deu novo sentido às dores do coração.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Luan Santana",
        "sub": "brasileiros",
        "word": "meteoro",
        "phrase": "Atingiu o coração do público sertanejo ainda jovem.",
        "words": [
          "meteoro",
          "meteoro (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Atingiu o coração do público sertanejo ainda jovem.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Gusttavo Lima",
        "sub": "brasileiros",
        "word": "embaixador",
        "phrase": "Palco monumental e horas seguidas de modas na madrugada.",
        "words": [
          "embaixador",
          "embaixador (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Palco monumental e horas seguidas de modas na madrugada.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Ludmilla",
        "sub": "brasileiros",
        "word": "pagode",
        "phrase": "Lotou estádios cantando pagode com um copo na mão.",
        "words": [
          "pagode",
          "pagode (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Lotou estádios cantando pagode com um copo na mão.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Fernanda Montenegro",
        "sub": "brasileiros",
        "word": "central",
        "phrase": "Dama do cinema indicada ao maior prêmio internacional.",
        "words": [
          "central",
          "central (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Dama do cinema indicada ao maior prêmio internacional.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Selton Mello",
        "sub": "brasileiros",
        "word": "chicó",
        "phrase": "Não sabe como aconteceu, só sabe que foi assim.",
        "words": [
          "chicó",
          "chicó (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Não sabe como aconteceu, só sabe que foi assim.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Ana Maria Braga",
        "sub": "brasileiros",
        "word": "papagaio",
        "phrase": "Acorda o país de manhã passando receitas e reflexões.",
        "words": [
          "papagaio",
          "papagaio (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Acorda o país de manhã passando receitas e reflexões.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Paulo Gustavo",
        "sub": "brasileiros",
        "word": "bobs",
        "phrase": "Dona de casa de salto alto que marcou o cinema brasileiro.",
        "words": [
          "bobs",
          "bobs (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Dona de casa de salto alto que marcou o cinema brasileiro.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Tatá Werneck",
        "sub": "brasileiros",
        "word": "trote",
        "phrase": "Raciocínio veloz e piadas inesperadas em entrevistas.",
        "words": [
          "trote",
          "trote (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Raciocínio veloz e piadas inesperadas em entrevistas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Gisele Bündchen",
        "sub": "brasileiros",
        "word": "passarela",
        "phrase": "Passos firmes e olhar marcante que conquistaram o mundo da moda.",
        "words": [
          "passarela",
          "passarela (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Passos firmes e olhar marcante que conquistaram o mundo da moda.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Chico Buarque",
        "sub": "brasileiros",
        "word": "olhos",
        "phrase": "Poesia densa e canções históricas da MPB.",
        "words": [
          "olhos",
          "olhos (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Poesia densa e canções históricas da MPB.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Caetano Veloso",
        "sub": "brasileiros",
        "word": "tropicalismo",
        "phrase": "Voz suave e vanguarda musical com abraço afetuoso.",
        "words": [
          "tropicalismo",
          "tropicalismo (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Voz suave e vanguarda musical com abraço afetuoso.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Michael Jackson",
        "sub": "internacionais",
        "word": "luva",
        "phrase": "Desliza para trás nos palcos com o mundo inteiro assistindo.",
        "words": [
          "luva",
          "luva (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Desliza para trás nos palcos com o mundo inteiro assistindo.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Beyoncé",
        "sub": "internacionais",
        "word": "abelha",
        "phrase": "Comanda uma colmeia global de admiradores fervorosos.",
        "words": [
          "abelha",
          "abelha (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Comanda uma colmeia global de admiradores fervorosos.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Taylor Swift",
        "sub": "internacionais",
        "word": "pulseiras",
        "phrase": "Suas regravações e turnê movimentaram a economia de países.",
        "words": [
          "pulseiras",
          "pulseiras (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Suas regravações e turnê movimentaram a economia de países.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Justin Bieber",
        "sub": "internacionais",
        "word": "franja",
        "phrase": "Um vídeo caseiro no violão abriu as portas da fama precoce.",
        "words": [
          "franja",
          "franja (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Um vídeo caseiro no violão abriu as portas da fama precoce.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Rihanna",
        "sub": "internacionais",
        "word": "guarda-chuva",
        "phrase": "Trocou o topo das paradas musicais pelo império da beleza.",
        "words": [
          "guarda-chuva",
          "guarda-chuva (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Trocou o topo das paradas musicais pelo império da beleza.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Tom Cruise",
        "sub": "internacionais",
        "word": "acrobacia",
        "phrase": "Prefere saltar de penhascos reais a usar computação gráfica.",
        "words": [
          "acrobacia",
          "acrobacia (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Prefere saltar de penhascos reais a usar computação gráfica.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Brad Pitt",
        "sub": "internacionais",
        "word": "galã",
        "phrase": "Rosto marcante de produções clássicas e premiadas.",
        "words": [
          "galã",
          "galã (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Rosto marcante de produções clássicas e premiadas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Leonardo DiCaprio",
        "sub": "internacionais",
        "word": "proa",
        "phrase": "Encarou águas geladas nos cinemas e lutou anos pela estatueta.",
        "words": [
          "proa",
          "proa (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Encarou águas geladas nos cinemas e lutou anos pela estatueta.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Will Smith",
        "sub": "internacionais",
        "word": "bel-air",
        "phrase": "Saiu da Filadélfia para viver numa mansão cheia de comédia.",
        "words": [
          "bel-air",
          "bel-air (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Saiu da Filadélfia para viver numa mansão cheia de comédia.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Lady Gaga",
        "sub": "internacionais",
        "word": "pôquer",
        "phrase": "Ousadia visual sem limites e vocais teatrais inconfundíveis.",
        "words": [
          "pôquer",
          "pôquer (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Ousadia visual sem limites e vocais teatrais inconfundíveis.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Bruno Mars",
        "sub": "internacionais",
        "word": "ouro",
        "phrase": "Passos sincronizados e elegância de grandes ícones da música.",
        "words": [
          "ouro",
          "ouro (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Passos sincronizados e elegância de grandes ícones da música.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Billie Eilish",
        "sub": "internacionais",
        "word": "sussurro",
        "phrase": "Tons baixos e roupas largas que redefiniram o pop jovem.",
        "words": [
          "sussurro",
          "sussurro (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Tons baixos e roupas largas que redefiniram o pop jovem.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Ed Sheeran",
        "sub": "internacionais",
        "word": "sardas",
        "phrase": "Apenas um violão e pedais de repetição lotando estádios.",
        "words": [
          "sardas",
          "sardas (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Apenas um violão e pedais de repetição lotando estádios.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Shakira",
        "sub": "internacionais",
        "word": "quadris",
        "phrase": "Ritmo latino irresistível que ecoou em Copas do Mundo.",
        "words": [
          "quadris",
          "quadris (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Ritmo latino irresistível que ecoou em Copas do Mundo.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Dwayne Johnson",
        "sub": "internacionais",
        "word": "sobrancelha",
        "phrase": "Músculos colossais e o levantamento de sobrancelha mais famoso.",
        "words": [
          "sobrancelha",
          "sobrancelha (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Músculos colossais e o levantamento de sobrancelha mais famoso.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Zendaya",
        "sub": "internacionais",
        "word": "euforia",
        "phrase": "Talento precoce premiado por atuações densas na TV.",
        "words": [
          "euforia",
          "euforia (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Talento precoce premiado por atuações densas na TV.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Tom Holland",
        "sub": "internacionais",
        "word": "spoiler",
        "phrase": "Carisma descontraído e o perigo constante de soltar segredos do roteiro.",
        "words": [
          "spoiler",
          "spoiler (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Carisma descontraído e o perigo constante de soltar segredos do roteiro.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Keanu Reeves",
        "sub": "internacionais",
        "word": "matrix",
        "phrase": "Cachorro vingado no cinema e humildade elogiada nas ruas.",
        "words": [
          "matrix",
          "matrix (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Cachorro vingado no cinema e humildade elogiada nas ruas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Adele",
        "sub": "internacionais",
        "word": "telefone",
        "phrase": "Voz emocionante e recorde absoluto de vendas sem alarde.",
        "words": [
          "telefone",
          "telefone (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Voz emocionante e recorde absoluto de vendas sem alarde.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Pelé",
        "sub": "atletas",
        "word": "coroa",
        "phrase": "Eternizado por parar guerras e marcar mais de mil gols.",
        "words": [
          "coroa",
          "coroa (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Eternizado por parar guerras e marcar mais de mil gols.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Neymar",
        "sub": "atletas",
        "word": "menino",
        "phrase": "Fintas rápidas nos gramados e manchetes fora de campo.",
        "words": [
          "menino",
          "menino (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Fintas rápidas nos gramados e manchetes fora de campo.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Messi",
        "sub": "atletas",
        "word": "rosário",
        "phrase": "Conduziu sua seleção ao topo com canhotinha incomparável.",
        "words": [
          "rosário",
          "rosário (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Conduziu sua seleção ao topo com canhotinha incomparável.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Cristiano Ronaldo",
        "sub": "atletas",
        "word": "salto",
        "phrase": "Impressiona pela impulsão no ar e dedicação obsessiva.",
        "words": [
          "salto",
          "salto (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Impressiona pela impulsão no ar e dedicação obsessiva.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Ronaldinho Gaúcho",
        "sub": "atletas",
        "word": "bruxo",
        "phrase": "Olhava para um lado enquanto passava a bola para o outro.",
        "words": [
          "bruxo",
          "bruxo (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Olhava para um lado enquanto passava a bola para o outro.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Ayrton Senna",
        "sub": "atletas",
        "word": "chuva",
        "phrase": "Brilhava sob o asfalto molhado ao som do tema nacional.",
        "words": [
          "chuva",
          "chuva (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Brilhava sob o asfalto molhado ao som do tema nacional.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Vinícius Júnior",
        "sub": "atletas",
        "word": "bailado",
        "phrase": "Sorriso no rosto e ginga que superam qualquer hostilidade.",
        "words": [
          "bailado",
          "bailado (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Sorriso no rosto e ginga que superam qualquer hostilidade.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Kylian Mbappé",
        "sub": "atletas",
        "word": "velocidade",
        "phrase": "Arrancadas fulminantes pelo corredor direito com camisa dez.",
        "words": [
          "velocidade",
          "velocidade (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Arrancadas fulminantes pelo corredor direito com camisa dez.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Lewis Hamilton",
        "sub": "atletas",
        "word": "pole",
        "phrase": "Heptacampeão de macacão com estilo marcante nas pistas.",
        "words": [
          "pole",
          "pole (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Heptacampeão de macacão com estilo marcante nas pistas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "LeBron James",
        "sub": "atletas",
        "word": "coroa",
        "phrase": "O rei das quadras que quebrou todos os recordes de pontuação.",
        "words": [
          "coroa",
          "coroa (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "O rei das quadras que quebrou todos os recordes de pontuação.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Michael Jordan",
        "sub": "atletas",
        "word": "salto",
        "phrase": "Fez a silhueta arremessando no ar virar o maior logo do mundo.",
        "words": [
          "salto",
          "salto (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Fez a silhueta arremessando no ar virar o maior logo do mundo.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Marta",
        "sub": "atletas",
        "word": "seis",
        "phrase": "Maior artilheira das Copas com seis prêmios de melhor do mundo.",
        "words": [
          "seis",
          "seis (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Maior artilheira das Copas com seis prêmios de melhor do mundo.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Ronaldo Fenômeno",
        "sub": "atletas",
        "word": "joelho",
        "phrase": "Cascão em campo e dois gols que selaram o pentacampeonato.",
        "words": [
          "joelho",
          "joelho (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Cascão em campo e dois gols que selaram o pentacampeonato.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Gabriel Medina",
        "sub": "atletas",
        "word": "prancha",
        "phrase": "Flutuou no ar sobre as ondas nas águas do Taiti.",
        "words": [
          "prancha",
          "prancha (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Flutuou no ar sobre as ondas nas águas do Taiti.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Usain Bolt",
        "sub": "atletas",
        "word": "raio",
        "phrase": "Olhou para o lado sorrindo nos últimos metros da final olímpica.",
        "words": [
          "raio",
          "raio (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Olhou para o lado sorrindo nos últimos metros da final olímpica.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Mr. Beast",
        "sub": "internet",
        "word": "desafio",
        "phrase": "Montou provas malucas e distribuiu milhões em premiações.",
        "words": [
          "desafio",
          "desafio (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Montou provas malucas e distribuiu milhões em premiações.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Casimiro",
        "sub": "internet",
        "word": "reação",
        "phrase": "Comentários bem-humorados na madrugada que conquistaram a internet.",
        "words": [
          "reação",
          "reação (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Comentários bem-humorados na madrugada que conquistaram a internet.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Whindersson Nunes",
        "sub": "internet",
        "word": "piauí",
        "phrase": "Começou sem camisa num quarto humilde e lotou arenas.",
        "words": [
          "piauí",
          "piauí (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Começou sem camisa num quarto humilde e lotou arenas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Felipe Neto",
        "sub": "internet",
        "word": "coruja",
        "phrase": "Opiniões contundentes e milhares de vídeos gravados no quarto.",
        "words": [
          "coruja",
          "coruja (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Opiniões contundentes e milhares de vídeos gravados no quarto.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Virginia Fonseca",
        "sub": "internet",
        "word": "dancinha",
        "phrase": "Vídeos diários e milhões de produtos vendidos em transmissões.",
        "words": [
          "dancinha",
          "dancinha (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Vídeos diários e milhões de produtos vendidos em transmissões.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Juliette",
        "sub": "internet",
        "word": "cacto",
        "phrase": "Um fenômeno popular que conquistou o país pela espontaneidade.",
        "words": [
          "cacto",
          "cacto (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Um fenômeno popular que conquistou o país pela espontaneidade.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Gil do Vigor",
        "sub": "internet",
        "word": "regozijo",
        "phrase": "Economia e gritos espontâneos de alegria marcaram a edição.",
        "words": [
          "regozijo",
          "regozijo (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Economia e gritos espontâneos de alegria marcaram a edição.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Elon Musk",
        "sub": "internet",
        "word": "propulsão",
        "phrase": "Sonha em construir colônias no planeta vizinho.",
        "words": [
          "propulsão",
          "propulsão (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Sonha em construir colônias no planeta vizinho.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Mark Zuckerberg",
        "sub": "internet",
        "word": "conectar",
        "phrase": "Criou um diretório universitário que uniu bilhões de telas.",
        "words": [
          "conectar",
          "conectar (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Criou um diretório universitário que uniu bilhões de telas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Alok",
        "sub": "internet",
        "word": "feixe",
        "phrase": "Luzes cortando o céu noturno ao som de batidas eletrônicas.",
        "words": [
          "feixe",
          "feixe (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Luzes cortando o céu noturno ao som de batidas eletrônicas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Gkay",
        "sub": "brasileiros",
        "word": "farofa",
        "phrase": "Ficou famosa por organizar a festa mais comentada da internet.",
        "words": [
          "farofa",
          "farofa (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Ficou famosa por organizar a festa mais comentada da internet.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Seu Jorge",
        "sub": "brasileiros",
        "word": "burguesinha",
        "phrase": "Voz rouca inconfundível misturando samba, MPB e cinema.",
        "words": [
          "burguesinha",
          "burguesinha (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Voz rouca inconfundível misturando samba, MPB e cinema.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Rodrigo Hilbert",
        "sub": "brasileiros",
        "word": "ferreiro",
        "phrase": "Famoso por construir churrasqueiras, cozinhar e fazer de tudo.",
        "words": [
          "ferreiro",
          "ferreiro (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Famoso por construir churrasqueiras, cozinhar e fazer de tudo.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Freddie Mercury",
        "sub": "internacionais",
        "word": "bigode",
        "phrase": "Sua afinação lendária comandava coro de cem mil pessoas no estádio.",
        "words": [
          "bigode",
          "bigode (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Sua afinação lendária comandava coro de cem mil pessoas no estádio.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Dwayne Johnson (The Rock)",
        "sub": "internacionais",
        "word": "sobrancelha",
        "phrase": "Começou no ringue de luta e virou o homem mais musculoso de Hollywood.",
        "words": [
          "sobrancelha",
          "sobrancelha (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Começou no ringue de luta e virou o homem mais musculoso de Hollywood.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Pedro Pascal",
        "sub": "internacionais",
        "word": "beskar",
        "phrase": "O pai protetor favorito das séries mais aclamadas da atualidade.",
        "words": [
          "beskar",
          "beskar (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "O pai protetor favorito das séries mais aclamadas da atualidade.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Rayssa Leal",
        "sub": "atletas",
        "word": "fadinha",
        "phrase": "Encantou o mundo deslizando em corrimãos com asas imaginárias.",
        "words": [
          "fadinha",
          "fadinha (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Encantou o mundo deslizando em corrimãos com asas imaginárias.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Rebeca Andrade",
        "sub": "atletas",
        "word": "salto",
        "phrase": "Maior medalhista olímpica da história do esporte brasileiro.",
        "words": [
          "salto",
          "salto (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Maior medalhista olímpica da história do esporte brasileiro.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Michael Phelps",
        "sub": "atletas",
        "word": "nadadeira",
        "phrase": "Colecionou vinte e oito medalhas cortando as águas com braçadas perfeitas.",
        "words": [
          "nadadeira",
          "nadadeira (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Colecionou vinte e oito medalhas cortando as águas com braçadas perfeitas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Stephen Curry",
        "sub": "atletas",
        "word": "perímetro",
        "phrase": "Revolucionou as quadras arremessando da linha de três pontos.",
        "words": [
          "perímetro",
          "perímetro (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Revolucionou as quadras arremessando da linha de três pontos.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Simone Biles",
        "sub": "atletas",
        "word": "gravidade",
        "phrase": "Executa movimentos tão complexos que foram batizados com seu próprio nome.",
        "words": [
          "gravidade",
          "gravidade (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Executa movimentos tão complexos que foram batizados com seu próprio nome.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "MrBeast",
        "sub": "internet",
        "word": "chocolate",
        "phrase": "Distribui ilhas e milhões de dólares em gincanas megalomaníacas.",
        "words": [
          "chocolate",
          "chocolate (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Distribui ilhas e milhões de dólares em gincanas megalomaníacas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Ibai Llanos",
        "sub": "internet",
        "word": "velada",
        "phrase": "Narrador e streamer espanhol que quebra recordes mundiais de audiência.",
        "words": [
          "velada",
          "velada (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Narrador e streamer espanhol que quebra recordes mundiais de audiência.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Monark",
        "sub": "internet",
        "word": "microfone",
        "phrase": "Foi pioneiro nos podcasts no Brasil antes de sucessivas polêmicas.",
        "words": [
          "microfone",
          "microfone (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Foi pioneiro nos podcasts no Brasil antes de sucessivas polêmicas.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Luva de Pedreiro",
        "sub": "internet",
        "word": "receba",
        "phrase": "Gravava chutes no terrão e virou fenômeno mundial de carisma.",
        "words": [
          "receba",
          "receba (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Gravava chutes no terrão e virou fenômeno mundial de carisma.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Khaby Lame",
        "sub": "internet",
        "word": "palmas",
        "phrase": "Conquistou o topo das redes sem precisar dizer uma única palavra.",
        "words": [
          "palmas",
          "palmas (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Conquistou o topo das redes sem precisar dizer uma única palavra.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Gaules",
        "sub": "internet",
        "word": "tribo",
        "phrase": "Reuniu uma das maiores comunidades de transmissões ao vivo de esports.",
        "words": [
          "tribo",
          "tribo (sutil)",
          "detalhe",
          "fama"
        ],
        "phrases": [
          "Reuniu uma das maiores comunidades de transmissões ao vivo de esports.",
          "Preste atenção especial nas características desta rodada.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ]
      },
      {
        "name": "Raul Seixas",
        "sub": "brasileiros",
        "words": [
          "mosca",
          "sociedade",
          "maluco",
          "metamorfose"
        ],
        "phrases": [
          "O pai do rock brasileiro que preferia ser uma metamorfose ambulante.",
          "Fundou uma sociedade alternativa inspirada em magia e liberdade.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "mosca",
        "phrase": "O pai do rock brasileiro que preferia ser uma metamorfose ambulante."
      },
      {
        "name": "Rita Lee",
        "sub": "brasileiros",
        "words": [
          "mutantes",
          "ruiva",
          "ovelha",
          "rock"
        ],
        "phrases": [
          "A rainha do rock nacional com franja vermelha e espírito rebelde.",
          "Cantava sobre amor, ovelhas negras e desobediência com muito humor.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "mutantes",
        "phrase": "A rainha do rock nacional com franja vermelha e espírito rebelde."
      },
      {
        "name": "Tim Maia",
        "sub": "brasileiros",
        "words": [
          "sabor",
          "racional",
          "soul",
          "voz"
        ],
        "phrases": [
          "Voz potente inconfundível exigindo retorno do som e copo d'água no palco.",
          "Misturou soul music americana com baladas românticas inesquecíveis.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "sabor",
        "phrase": "Voz potente inconfundível exigindo retorno do som e copo d'água no palco."
      },
      {
        "name": "Cazuza",
        "sub": "brasileiros",
        "words": [
          "ideologia",
          "poeta",
          "exagerado",
          "barão"
        ],
        "phrases": [
          "Poeta exagerado que cantava a plenos pulmões sobre sua geração.",
          "Suas letras desafiaram o preconceito até seus últimos momentos.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "ideologia",
        "phrase": "Poeta exagerado que cantava a plenos pulmões sobre sua geração."
      },
      {
        "name": "Renato Russo",
        "sub": "brasileiros",
        "words": [
          "faroeste",
          "legião",
          "índios",
          "brasília"
        ],
        "phrases": [
          "Compositor de sagas musicais com nove minutos de rimas e violão.",
          "Liderou a maior banda de rock de Brasília dos anos oitenta.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "faroeste",
        "phrase": "Compositor de sagas musicais com nove minutos de rimas e violão."
      },
      {
        "name": "Lázaro Ramos",
        "sub": "brasileiros",
        "words": [
          "ó pai",
          "cinema",
          "ator",
          "escritor"
        ],
        "phrases": [
          "Ator e diretor baiano com papéis marcantes na TV e teatro nacional.",
          "Contador de histórias aclamado premiado pela representatividade.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "ó pai",
        "phrase": "Ator e diretor baiano com papéis marcantes na TV e teatro nacional."
      },
      {
        "name": "Wagner Moura",
        "sub": "brasileiros",
        "words": [
          "capitão",
          "narcos",
          "hollywood",
          "pede pra sair"
        ],
        "phrases": [
          "Deu vida ao capitão mais temido do cinema policial e a chefes de cartel.",
          "Estrela brasileira com carreira internacional consolidada nos cinemas.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "capitão",
        "phrase": "Deu vida ao capitão mais temido do cinema policial e a chefes de cartel."
      },
      {
        "name": "Marcos Mion",
        "sub": "brasileiros",
        "words": [
          "caldeirão",
          "tênis",
          "globo",
          "legendários"
        ],
        "phrases": [
          "Apresentador conhecido pela coleção de tênis raros e entusiasmo contagiante.",
          "Comanda as tardes de sábado com dinâmicas e histórias de superação.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "caldeirão",
        "phrase": "Apresentador conhecido pela coleção de tênis raros e entusiasmo contagiante."
      },
      {
        "name": "Cillian Murphy",
        "sub": "internacionais",
        "words": [
          "olhos",
          "bomba",
          "boina",
          "charuto"
        ],
        "phrases": [
          "Olhos azuis penetrantes que deram vida ao pai da bomba atômica e gângsteres.",
          "Ator irlandês discreto nos eventos e monumental nas telas.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "olhos",
        "phrase": "Olhos azuis penetrantes que deram vida ao pai da bomba atômica e gângsteres."
      },
      {
        "name": "Margot Robbie",
        "sub": "internacionais",
        "words": [
          "rosa",
          "bastão",
          "australiana",
          "patins"
        ],
        "phrases": [
          "Viveu a boneca mais famosa do planeta e a vilã mais insana de Gotham.",
          "Atriz e produtora australiana de enorme sucesso em Hollywood.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "rosa",
        "phrase": "Viveu a boneca mais famosa do planeta e a vilã mais insana de Gotham."
      },
      {
        "name": "Ryan Gosling",
        "sub": "internacionais",
        "words": [
          "carro",
          "jaqueta",
          "piano",
          "dirigir"
        ],
        "phrases": [
          "Piloto silencioso com jaqueta de escorpião e dançarino premiado de jazz.",
          "Popularizou o visual de herói calado que conquistou as redes.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "carro",
        "phrase": "Piloto silencioso com jaqueta de escorpião e dançarino premiado de jazz."
      },
      {
        "name": "Timothée Chalamet",
        "sub": "internacionais",
        "words": [
          "deserto",
          "chocolate",
          "cachos",
          "pêssego"
        ],
        "phrases": [
          "Viajou pelo planeta de areia como messias e dançou na fábrica de doces.",
          "Jovem estrela que virou o queridinho dos grandes diretores de cinema.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "deserto",
        "phrase": "Viajou pelo planeta de areia como messias e dançou na fábrica de doces."
      },
      {
        "name": "Johnny Depp",
        "sub": "internacionais",
        "words": [
          "bússola",
          "tesoura",
          "rum",
          "cartola"
        ],
        "phrases": [
          "O pirata mais cambaleante dos mares com passos trôpegos e dreadlocks.",
          "Famoso pelas maquiagens pesadas em colaborações de fantasia sombria.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "bússola",
        "phrase": "O pirata mais cambaleante dos mares com passos trôpegos e dreadlocks."
      },
      {
        "name": "Morgan Freeman",
        "sub": "internacionais",
        "words": [
          "voz",
          "narrador",
          "sabedoria",
          "prisão"
        ],
        "phrases": [
          "A voz mais confiável do cinema, já interpretou até o próprio criador.",
          "Famoso por narrar histórias de redenção atrás das grades.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "voz",
        "phrase": "A voz mais confiável do cinema, já interpretou até o próprio criador."
      },
      {
        "name": "Meryl Streep",
        "sub": "internacionais",
        "words": [
          "prada",
          "recorde",
          "sotaque",
          "indicações"
        ],
        "phrases": [
          "A atriz mais indicada da história do cinema, dita tendências de moda na redação.",
          "Muda de voz e nacionalidade com perfeição milimétrica em qualquer drama.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "prada",
        "phrase": "A atriz mais indicada da história do cinema, dita tendências de moda na redação."
      },
      {
        "name": "Lionel Messi",
        "sub": "atletas",
        "words": [
          "canhota",
          "oito",
          "campeão",
          "rosário"
        ],
        "phrases": [
          "O gênio canhoto que conquistou o mundo após anos de decepções na seleção.",
          "Dribla em espaços microscópicos com a bola colada na chuteira.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "canhota",
        "phrase": "O gênio canhoto que conquistou o mundo após anos de decepções na seleção."
      },
      {
        "name": "Marta da Silva",
        "sub": "atletas",
        "words": [
          "rainha",
          "dez",
          "seis",
          "alagoas"
        ],
        "phrases": [
          "Eleita seis vezes a melhor futebolista do planeta com dribles geniais.",
          "A maior artilheira de todas as Copas do Mundo, masculinas ou femininas.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "rainha",
        "phrase": "Eleita seis vezes a melhor futebolista do planeta com dribles geniais."
      },
      {
        "name": "Roger Federer",
        "sub": "atletas",
        "words": [
          "elegância",
          "saibro",
          "grama",
          "suíço"
        ],
        "phrases": [
          "Deslizava pela grama de Wimbledon fazendo o tênis parecer balé clássico.",
          "Movimentos impecáveis de revés com uma só mão sem suar a camisa.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "elegância",
        "phrase": "Deslizava pela grama de Wimbledon fazendo o tênis parecer balé clássico."
      },
      {
        "name": "Rafael Nadal",
        "sub": "atletas",
        "words": [
          "terra",
          "músculo",
          "garra",
          "touro"
        ],
        "phrases": [
          "O rei incontestável do saibro vermelho em Paris que nunca desiste de uma bola.",
          "Mordeu a taça de campeão catorze vezes após batalhas homéricas de cinco horas.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "terra",
        "phrase": "O rei incontestável do saibro vermelho em Paris que nunca desiste de uma bola."
      },
      {
        "name": "Novak Djokovic",
        "sub": "atletas",
        "words": [
          "flexibilidade",
          "recorde",
          "devolução",
          "elástico"
        ],
        "phrases": [
          "O atleta mais vitorioso dos Grand Slams com alongamento elástico em quadra.",
          "Devolve qualquer saque impossível esticando as pernas feito borracha.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "flexibilidade",
        "phrase": "O atleta mais vitorioso dos Grand Slams com alongamento elástico em quadra."
      },
      {
        "name": "Casimiro Miguel",
        "sub": "internet",
        "words": [
          "meteu essa",
          "reações",
          "copa",
          "cazétv"
        ],
        "phrases": [
          "Transmite Copas do Mundo e campeonatos reagindo a comidas e mansões.",
          "Bordões que entraram no vocabulário de milhões de jovens brasileiros.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "meteu essa",
        "phrase": "Transmite Copas do Mundo e campeonatos reagindo a comidas e mansões."
      },
      {
        "name": "Alanzoka",
        "sub": "internet",
        "words": [
          "grito",
          "sustos",
          "games",
          "lives"
        ],
        "phrases": [
          "O streamer mais querido do país que pula da cadeira com jogos de terror.",
          "Simpatia natural jogando de madrugada com risada contagiante.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "grito",
        "phrase": "O streamer mais querido do país que pula da cadeira com jogos de terror."
      },
      {
        "name": "Cellbit",
        "sub": "internet",
        "words": [
          "rpg",
          "enigma",
          "ordem",
          "paranormal"
        ],
        "phrases": [
          "Criou o maior universo de RPG investigativo transmitido ao vivo da internet.",
          "Desvenda enigmas complexos em frente a milhares de espectadores tensos.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "rpg",
        "phrase": "Criou o maior universo de RPG investigativo transmitido ao vivo da internet."
      },
      {
        "name": "Cori (Manual do Mundo)",
        "sub": "internet",
        "words": [
          "experiência",
          "garagem",
          "ciência",
          "submarino"
        ],
        "phrases": [
          "Ensina física e química construindo submarinos caseiros na oficina.",
          "Canal educativo pioneiro que sacia a curiosidade de várias gerações.",
          "Sua presença mobiliza milhões de fãs por onde quer que passe."
        ],
        "word": "experiência",
        "phrase": "Ensina física e química construindo submarinos caseiros na oficina."
      }
    ]
  },
  "Comida": {
    "icon": "🍕",
    "color": "var(--o)",
    "subcategories": {
      "lanches": {
        "label": "Lanches & Fast Food",
        "icon": "🍔",
        "desc": "Pizzas, hambúrgueres, salgados e comidas rápidas"
      },
      "brasileira": {
        "label": "Comida Brasileira",
        "icon": "🇧🇷",
        "desc": "Feijoada, baião de dois, acarajé e clássicos do Brasil"
      },
      "mundo": {
        "label": "Cozinha do Mundo",
        "icon": "🍝",
        "desc": "Sushi, massas, tacos, risotos e pratos globais"
      },
      "doces": {
        "label": "Doces & Sobremesas",
        "icon": "🍰",
        "desc": "Brigadeiro, pudim, açaí, bolos e sorvetes"
      }
    },
    "items": [
      {
        "name": "Pizza",
        "sub": "lanches",
        "word": "redonda",
        "phrase": "Dividida em oito fatias crocantes com queijo puxando.",
        "words": [
          "redonda",
          "redonda (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Dividida em oito fatias crocantes com queijo puxando.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Hambúrguer",
        "sub": "lanches",
        "word": "chapa",
        "phrase": "Carne suculenta prensada entre dois pães macios.",
        "words": [
          "chapa",
          "chapa (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Carne suculenta prensada entre dois pães macios.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Batata frita",
        "sub": "lanches",
        "word": "palito",
        "phrase": "Crocante por fora e macia por dentro com um toque de sal.",
        "words": [
          "palito",
          "palito (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Crocante por fora e macia por dentro com um toque de sal.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Coxinha",
        "sub": "lanches",
        "word": "gota",
        "phrase": "Formato icônico com recheio desfiado e casca dourada.",
        "words": [
          "gota",
          "gota (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Formato icônico com recheio desfiado e casca dourada.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Pastel",
        "sub": "lanches",
        "word": "caldo",
        "phrase": "Massa crocante com vento que combina com feira livre.",
        "words": [
          "caldo",
          "caldo (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa crocante com vento que combina com feira livre.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Cachorro-quente",
        "sub": "lanches",
        "word": "salsicha",
        "phrase": "Lanche de rua que cada região coloca um recheio diferente.",
        "words": [
          "salsicha",
          "salsicha (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Lanche de rua que cada região coloca um recheio diferente.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Sanduíche",
        "sub": "lanches",
        "word": "fatias",
        "phrase": "Prático e montado entre fatias com queijo e presunto.",
        "words": [
          "fatias",
          "fatias (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Prático e montado entre fatias com queijo e presunto.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Nuggets",
        "sub": "lanches",
        "word": "empanado",
        "phrase": "Pedaços crocantes mergulhados em molho agridoce.",
        "words": [
          "empanado",
          "empanado (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Pedaços crocantes mergulhados em molho agridoce.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Pão de queijo",
        "sub": "lanches",
        "word": "fornada",
        "phrase": "Herança mineira com casca dourada e interior elástico.",
        "words": [
          "fornada",
          "fornada (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Herança mineira com casca dourada e interior elástico.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Pão francês",
        "sub": "lanches",
        "word": "padaria",
        "phrase": "Casca estaladiça e miolo fofo que perfumam a manhã.",
        "words": [
          "padaria",
          "padaria (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Casca estaladiça e miolo fofo que perfumam a manhã.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Esfiha",
        "sub": "lanches",
        "word": "triângulo",
        "phrase": "Massa aberta ou fechada com recheio temperado de carne.",
        "words": [
          "triângulo",
          "triângulo (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa aberta ou fechada com recheio temperado de carne.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Kibe",
        "sub": "lanches",
        "word": "trigo",
        "phrase": "Frito ou cru com folhas de hortelã fresca.",
        "words": [
          "trigo",
          "trigo (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Frito ou cru com folhas de hortelã fresca.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Pipoca",
        "sub": "lanches",
        "word": "estalo",
        "phrase": "Grãos duros que viram nuvens brancas sob o calor do óleo.",
        "words": [
          "estalo",
          "estalo (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Grãos duros que viram nuvens brancas sob o calor do óleo.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Feijoada",
        "sub": "brasileira",
        "word": "caldeirão",
        "phrase": "Tradição de sábado servida com laranja e farofa.",
        "words": [
          "caldeirão",
          "caldeirão (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Tradição de sábado servida com laranja e farofa.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Arroz e feijão",
        "sub": "brasileira",
        "word": "cotidiano",
        "phrase": "A combinação sagrada que sustenta o prato de quase todo brasileiro.",
        "words": [
          "cotidiano",
          "cotidiano (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "A combinação sagrada que sustenta o prato de quase todo brasileiro.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Churrasco",
        "sub": "brasileira",
        "word": "brasa",
        "phrase": "Fumaça aromática reunindo os amigos ao redor do fogo.",
        "words": [
          "brasa",
          "brasa (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Fumaça aromática reunindo os amigos ao redor do fogo.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Picanha",
        "sub": "brasileira",
        "word": "gordura",
        "phrase": "O corte mais cobiçado da grelha pelo sabor marcante.",
        "words": [
          "gordura",
          "gordura (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "O corte mais cobiçado da grelha pelo sabor marcante.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Acarajé",
        "sub": "brasileira",
        "word": "dendê",
        "phrase": "Bolinho de feijão frito no azeite quente pelas baianas.",
        "words": [
          "dendê",
          "dendê (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Bolinho de feijão frito no azeite quente pelas baianas.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Tapioca",
        "sub": "brasileira",
        "word": "goma",
        "phrase": "Pó branco que se une na frigideira formando uma folha macia.",
        "words": [
          "goma",
          "goma (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Pó branco que se une na frigideira formando uma folha macia.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Moqueca",
        "sub": "brasileira",
        "word": "barro",
        "phrase": "Peixe borbulhando na panela tradicional com temperos marcantes.",
        "words": [
          "barro",
          "barro (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Peixe borbulhando na panela tradicional com temperos marcantes.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Baião de dois",
        "sub": "brasileira",
        "word": "nordeste",
        "phrase": "Mistura rica com feijão de corda e queijo coalho grelhado.",
        "words": [
          "nordeste",
          "nordeste (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Mistura rica com feijão de corda e queijo coalho grelhado.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Strogonoff",
        "sub": "brasileira",
        "word": "palha",
        "phrase": "Molho cremoso sempre acompanhado por fios crocantes de batata.",
        "words": [
          "palha",
          "palha (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Molho cremoso sempre acompanhado por fios crocantes de batata.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Farofa",
        "sub": "brasileira",
        "word": "crocância",
        "phrase": "Acompanhamento seco e temperado que completa qualquer carne.",
        "words": [
          "crocância",
          "crocância (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Acompanhamento seco e temperado que completa qualquer carne.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Cuscuz",
        "sub": "brasileira",
        "word": "vapor",
        "phrase": "Flocos amarelos cozidos na cuscuzeira que sustentam o dia.",
        "words": [
          "vapor",
          "vapor (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Flocos amarelos cozidos na cuscuzeira que sustentam o dia.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Pamonha",
        "sub": "brasileira",
        "word": "palha",
        "phrase": "Massa de milho cozida embalada na própria casca da espiga.",
        "words": [
          "palha",
          "palha (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa de milho cozida embalada na própria casca da espiga.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Escondidinho",
        "sub": "brasileira",
        "word": "purê",
        "phrase": "Carne desfiada coberta por uma camada dourada no forno.",
        "words": [
          "purê",
          "purê (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Carne desfiada coberta por uma camada dourada no forno.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Vatapá",
        "sub": "brasileira",
        "word": "amendoim",
        "phrase": "Creme aromático com leite de coco e pimenta suave.",
        "words": [
          "amendoim",
          "amendoim (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Creme aromático com leite de coco e pimenta suave.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Torresmo",
        "sub": "brasileira",
        "word": "pururuca",
        "phrase": "Pedaços fritos estalando crocantes como aperitivo.",
        "words": [
          "pururuca",
          "pururuca (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Pedaços fritos estalando crocantes como aperitivo.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Sushi",
        "sub": "mundo",
        "word": "esteira",
        "phrase": "Peixe cru e arroz combinados com a ajuda de uma alga escura.",
        "words": [
          "esteira",
          "esteira (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Peixe cru e arroz combinados com a ajuda de uma alga escura.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Yakisoba",
        "sub": "mundo",
        "word": "shoyu",
        "phrase": "Macarrão frito oriental com legumes puxados na panela wok.",
        "words": [
          "shoyu",
          "shoyu (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Macarrão frito oriental com legumes puxados na panela wok.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Macarrão",
        "sub": "mundo",
        "word": "garfo",
        "phrase": "Fios longos enrolados no prato com molho vermelho generoso.",
        "words": [
          "garfo",
          "garfo (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Fios longos enrolados no prato com molho vermelho generoso.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Lasanha",
        "sub": "mundo",
        "word": "camadas",
        "phrase": "Massa intercalada que sai borbulhante do forno no domingo.",
        "words": [
          "camadas",
          "camadas (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa intercalada que sai borbulhante do forno no domingo.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Risoto",
        "sub": "mundo",
        "word": "arbóreo",
        "phrase": "Arroz cremoso mexido pacientemente na panela funda.",
        "words": [
          "arbóreo",
          "arbóreo (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Arroz cremoso mexido pacientemente na panela funda.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Taco",
        "sub": "mundo",
        "word": "tortilha",
        "phrase": "Massa crocante dobrada recheada com sabores apimentados.",
        "words": [
          "tortilha",
          "tortilha (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa crocante dobrada recheada com sabores apimentados.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Burrito",
        "sub": "mundo",
        "word": "embrulho",
        "phrase": "Enrolado grande e recheado fechado dos dois lados.",
        "words": [
          "embrulho",
          "embrulho (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Enrolado grande e recheado fechado dos dois lados.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Nachos",
        "sub": "mundo",
        "word": "triângulos",
        "phrase": "Tortilhas crocantes mergulhadas em creme de queijo cheddar.",
        "words": [
          "triângulos",
          "triângulos (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Tortilhas crocantes mergulhadas em creme de queijo cheddar.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Croissant",
        "sub": "mundo",
        "word": "folhado",
        "phrase": "Massa amanteigada em formato de meia-lua típica francesa.",
        "words": [
          "folhado",
          "folhado (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa amanteigada em formato de meia-lua típica francesa.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Paella",
        "sub": "mundo",
        "word": "açafrão",
        "phrase": "Prato espanhol dourado repleto de frutos do mar.",
        "words": [
          "açafrão",
          "açafrão (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Prato espanhol dourado repleto de frutos do mar.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Guacamole",
        "sub": "mundo",
        "word": "abacate",
        "phrase": "Pasta verde fresca temperada com limão e coentro.",
        "words": [
          "abacate",
          "abacate (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Pasta verde fresca temperada com limão e coentro.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Ceviche",
        "sub": "mundo",
        "word": "leche",
        "phrase": "Peixe branco marinado no suco cítrico com cebola roxa.",
        "words": [
          "leche",
          "leche (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Peixe branco marinado no suco cítrico com cebola roxa.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Brigadeiro",
        "sub": "doces",
        "word": "granulado",
        "phrase": "O doce que não pode faltar em mesa de aniversário.",
        "words": [
          "granulado",
          "granulado (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "O doce que não pode faltar em mesa de aniversário.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Sorvete",
        "sub": "doces",
        "word": "derretimento",
        "phrase": "A corrida contra o tempo nos dias ensolarados.",
        "words": [
          "derretimento",
          "derretimento (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "A corrida contra o tempo nos dias ensolarados.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Açaí",
        "sub": "doces",
        "word": "tigela",
        "phrase": "Fruto roxo da floresta servido bem gelado com acompanhamentos.",
        "words": [
          "tigela",
          "tigela (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Fruto roxo da floresta servido bem gelado com acompanhamentos.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Pudim",
        "sub": "doces",
        "word": "caramelo",
        "phrase": "Sobremesa macia com calda dourada e furinhos na textura.",
        "words": [
          "caramelo",
          "caramelo (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Sobremesa macia com calda dourada e furinhos na textura.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Bolo de chocolate",
        "sub": "doces",
        "word": "fatia",
        "phrase": "Massa fofa coberta de calda que perfuma toda a casa.",
        "words": [
          "fatia",
          "fatia (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa fofa coberta de calda que perfuma toda a casa.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Beijinho",
        "sub": "doces",
        "word": "cravo",
        "phrase": "Docinho branco com coco ralado e uma especiaria no topo.",
        "words": [
          "cravo",
          "cravo (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Docinho branco com coco ralado e uma especiaria no topo.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Paçoca",
        "sub": "doces",
        "word": "amendoim",
        "phrase": "Doce esfarelado típico de festas juninas no interior.",
        "words": [
          "amendoim",
          "amendoim (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Doce esfarelado típico de festas juninas no interior.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Chocolate",
        "sub": "doces",
        "word": "cacau",
        "phrase": "Doce derivado de sementes amargas que derrete na boca.",
        "words": [
          "cacau",
          "cacau (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Doce derivado de sementes amargas que derrete na boca.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Churros",
        "sub": "doces",
        "word": "doce de leite",
        "phrase": "Massa frita estriada polvilhada com açúcar e canela.",
        "words": [
          "doce de leite",
          "doce de leite (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa frita estriada polvilhada com açúcar e canela.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Donut",
        "sub": "doces",
        "word": "rosquinha",
        "phrase": "Massa fofa redonda com um buraco perfeito no meio.",
        "words": [
          "rosquinha",
          "rosquinha (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa fofa redonda com um buraco perfeito no meio.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Waffle",
        "sub": "doces",
        "word": "quadrados",
        "phrase": "Massa prensada com pequenas cavidades que seguram o mel.",
        "words": [
          "quadrados",
          "quadrados (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa prensada com pequenas cavidades que seguram o mel.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Torta de limão",
        "sub": "doces",
        "word": "merengue",
        "phrase": "Base crocante com creme azedinho e topo tostado.",
        "words": [
          "merengue",
          "merengue (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Base crocante com creme azedinho e topo tostado.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Algodão doce",
        "sub": "doces",
        "word": "nuvem",
        "phrase": "Fios finíssimos de açúcar colorido enrolados num palito.",
        "words": [
          "nuvem",
          "nuvem (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Fios finíssimos de açúcar colorido enrolados num palito.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Fondue",
        "sub": "doces",
        "word": "rechaud",
        "phrase": "Frutas frescas mergulhadas numa tigela de doce derretido.",
        "words": [
          "rechaud",
          "rechaud (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Frutas frescas mergulhadas numa tigela de doce derretido.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Pastel de Feira",
        "sub": "lanches",
        "word": "garapa",
        "phrase": "Crocante e frito na hora acompanhado de caldo de cana gelado.",
        "words": [
          "garapa",
          "garapa (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Crocante e frito na hora acompanhado de caldo de cana gelado.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Misto Quente",
        "sub": "lanches",
        "word": "chapa",
        "phrase": "Pão de forma tostado com recheio derretido pela manteiga.",
        "words": [
          "chapa",
          "chapa (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Pão de forma tostado com recheio derretido pela manteiga.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Torta de Frango",
        "sub": "lanches",
        "word": "massa",
        "phrase": "Massa podre que desmancha na boca com recheio bem temperado.",
        "words": [
          "massa",
          "massa (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Massa podre que desmancha na boca com recheio bem temperado.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Shawarma",
        "sub": "lanches",
        "word": "espeto",
        "phrase": "Carne fatiada no espeto giratório enrolada no pão sírio fino.",
        "words": [
          "espeto",
          "espeto (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Carne fatiada no espeto giratório enrolada no pão sírio fino.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Empada",
        "sub": "lanches",
        "word": "forminha",
        "phrase": "Assada em forma frisada de metal com azeitona no meio.",
        "words": [
          "forminha",
          "forminha (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Assada em forma frisada de metal com azeitona no meio.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Moqueca Capixaba",
        "sub": "brasileira",
        "word": "barro",
        "phrase": "Cozida lentamente na panela de barro sem leite de coco nem azeite de dendê.",
        "words": [
          "barro",
          "barro (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Cozida lentamente na panela de barro sem leite de coco nem azeite de dendê.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Bobó de Camarão",
        "sub": "brasileira",
        "word": "mandioca",
        "phrase": "Purê aveludado de macaxeira temperado com ervas e frutos do mar.",
        "words": [
          "mandioca",
          "mandioca (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Purê aveludado de macaxeira temperado com ervas e frutos do mar.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Dobradinha",
        "sub": "brasileira",
        "word": "feijão-branco",
        "phrase": "Prato tradicional de bucho com feijão branco e linguiça.",
        "words": [
          "feijão-branco",
          "feijão-branco (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Prato tradicional de bucho com feijão branco e linguiça.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Arrumadinho",
        "sub": "brasileira",
        "word": "farofa",
        "phrase": "Ingredientes organizados lado a lado no prato antes de misturar.",
        "words": [
          "farofa",
          "farofa (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Ingredientes organizados lado a lado no prato antes de misturar.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Galinhada",
        "sub": "brasileira",
        "word": "pequi",
        "phrase": "Arroz amarelado cozido junto com cortes de frango caipira.",
        "words": [
          "pequi",
          "pequi (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Arroz amarelado cozido junto com cortes de frango caipira.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Ramen",
        "sub": "mundo",
        "word": "naruto",
        "phrase": "Tigela fumegante de caldo encorpado, macarrão e ovo marinado.",
        "words": [
          "naruto",
          "naruto (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Tigela fumegante de caldo encorpado, macarrão e ovo marinado.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Risoto de Funghi",
        "sub": "mundo",
        "word": "arbóreo",
        "phrase": "Arroz italiano cremoso mexido pacientemente com cogumelos secos.",
        "words": [
          "arbóreo",
          "arbóreo (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Arroz italiano cremoso mexido pacientemente com cogumelos secos.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Falafel",
        "sub": "mundo",
        "word": "grão-de-bico",
        "phrase": "Bolinho frito temperado de grão-de-bico e especiarias árabes.",
        "words": [
          "grão-de-bico",
          "grão-de-bico (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Bolinho frito temperado de grão-de-bico e especiarias árabes.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Tiramisu",
        "sub": "doces",
        "word": "mascarpone",
        "phrase": "Sobremesa italiana à base de biscoitos embebidos em café forte.",
        "words": [
          "mascarpone",
          "mascarpone (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Sobremesa italiana à base de biscoitos embebidos em café forte.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Petit Gâteau",
        "sub": "doces",
        "word": "lava",
        "phrase": "Bolinho quente com centro derretido servido com sorvete de baunilha.",
        "words": [
          "lava",
          "lava (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Bolinho quente com centro derretido servido com sorvete de baunilha.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Rabanada",
        "sub": "doces",
        "word": "natalino",
        "phrase": "Pão amanhecido embebido em leite e ovos, frito e salpicado de canela.",
        "words": [
          "natalino",
          "natalino (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Pão amanhecido embebido em leite e ovos, frito e salpicado de canela.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Quindim",
        "sub": "doces",
        "word": "gema",
        "phrase": "Doce amarelo brilhante à base de coco ralado e muitas gemas de ovos.",
        "words": [
          "gema",
          "gema (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Doce amarelo brilhante à base de coco ralado e muitas gemas de ovos.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Cheesecake",
        "sub": "doces",
        "word": "geléia",
        "phrase": "Torta assada de queijo cremoso coberta por frutas vermelhas.",
        "words": [
          "geléia",
          "geléia (sutil)",
          "detalhe",
          "tempero"
        ],
        "phrases": [
          "Torta assada de queijo cremoso coberta por frutas vermelhas.",
          "Preste atenção especial nas características desta rodada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ]
      },
      {
        "name": "Hot Dog Prensado",
        "sub": "lanches",
        "words": [
          "purê",
          "batata palha",
          "chapa",
          "vina"
        ],
        "phrases": [
          "Lanche de rua completo prensado com purê de batata, milho e duas salsichas.",
          "Tradição paulista e paranaense que sustenta quem sai da balada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "purê",
        "phrase": "Lanche de rua completo prensado com purê de batata, milho e duas salsichas."
      },
      {
        "name": "Croquete de Carne",
        "sub": "lanches",
        "words": [
          "recheio",
          "empanado",
          "frito",
          "boteco"
        ],
        "phrases": [
          "Cilindro frito crocante por fora com recheio de carne desfiada suculenta.",
          "Petisco obrigatório de estufa de boteco servido com mostarda escura.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "recheio",
        "phrase": "Cilindro frito crocante por fora com recheio de carne desfiada suculenta."
      },
      {
        "name": "Pão com Bolinho",
        "sub": "lanches",
        "words": [
          "carne",
          "temperado",
          "pão francês",
          "boteco"
        ],
        "phrases": [
          "Sanduíche tradicional dos bares com bolinho de carne bovina bem frito.",
          "Acompanha queijo derretido e maionese verde artesanal.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "carne",
        "phrase": "Sanduíche tradicional dos bares com bolinho de carne bovina bem frito."
      },
      {
        "name": "Bagquete de Salame",
        "sub": "lanches",
        "words": [
          "provolone",
          "fatiado",
          "crocante",
          "azeite"
        ],
        "phrases": [
          "Pão comprido recheado de embutido curado fatiado fino e queijo firme.",
          "Excelente para viagens de carro e piqueniques na sombra.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "provolone",
        "phrase": "Pão comprido recheado de embutido curado fatiado fino e queijo firme."
      },
      {
        "name": "Nachos com Queijo",
        "sub": "lanches",
        "words": [
          "tortilha",
          "triângulo",
          "cheddar",
          "jalapeño"
        ],
        "phrases": [
          "Triângulos crocantes de milho mergulhados em creme de queijo amarelo quente.",
          "Acompanhados de pimenta picante e feijão refrito no cinema.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "tortilha",
        "phrase": "Triângulos crocantes de milho mergulhados em creme de queijo amarelo quente."
      },
      {
        "name": "Pato no Tucupi",
        "sub": "brasileira",
        "words": [
          "jambu",
          "mandioca",
          "belém",
          "adormecer"
        ],
        "phrases": [
          "Prato paraense com folhas que amortecem levemente a língua.",
          "Carne de ave cozida no caldo amarelo extraído da raiz venenosa tratada.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "jambu",
        "phrase": "Prato paraense com folhas que amortecem levemente a língua."
      },
      {
        "name": "Tacacá",
        "sub": "brasileira",
        "words": [
          "cuia",
          "camarão",
          "goma",
          "fervendo"
        ],
        "phrases": [
          "Servido bem quente em cuias naturais com goma de mandioca e pimenta.",
          "Tomado nas esquinas amazônicas ao entardecer sem usar colher.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "cuia",
        "phrase": "Servido bem quente em cuias naturais com goma de mandioca e pimenta."
      },
      {
        "name": "Virado à Paulista",
        "sub": "brasileira",
        "words": [
          "bisteca",
          "banana",
          "couve",
          "tutu"
        ],
        "phrases": [
          "Prato histórico dos bandeirantes com feijão engrossado com farinha e ovo frito.",
          "Servido religiosamente às segundas-feiras nos restaurantes de São Paulo.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "bisteca",
        "phrase": "Prato histórico dos bandeirantes com feijão engrossado com farinha e ovo frito."
      },
      {
        "name": "Barreado",
        "sub": "brasileira",
        "words": [
          "barro",
          "farinha",
          "panela",
          "desfiada"
        ],
        "phrases": [
          "Cozido de carne bovina em panela de barro vedada por mais de doze horas.",
          "Ao servir no prato fundo com farinha, não pode cair ao virar de cabeça para baixo.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "barro",
        "phrase": "Cozido de carne bovina em panela de barro vedada por mais de doze horas."
      },
      {
        "name": "Escondidinho de Carne Seca",
        "sub": "brasileira",
        "words": [
          "purê",
          "gratinado",
          "mandioca",
          "camadas"
        ],
        "phrases": [
          "Carne salgada desfiada coberta por uma camada generosa de macaxeira cremosa.",
          "Vai ao forno para dourar o queijo coalho por cima antes de servir.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "purê",
        "phrase": "Carne salgada desfiada coberta por uma camada generosa de macaxeira cremosa."
      },
      {
        "name": "Caldo Verde",
        "sub": "brasileira",
        "words": [
          "couve",
          "linguiça",
          "batata",
          "frio"
        ],
        "phrases": [
          "Sopa cremosa de batata com fios finos de couve fresca e rodelas de paio.",
          "Perfeito para aquecer as noites frias de festa junina.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "couve",
        "phrase": "Sopa cremosa de batata com fios finos de couve fresca e rodelas de paio."
      },
      {
        "name": "Curry Indiano",
        "sub": "mundo",
        "words": [
          "especiarias",
          "arroz",
          "amarelo",
          "picante"
        ],
        "phrases": [
          "Molho aromático denso com gengibre, cúrcuma e pimentas perfumadas.",
          "Comido com as mãos usando pão naan quentinho como colher.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "especiarias",
        "phrase": "Molho aromático denso com gengibre, cúrcuma e pimentas perfumadas."
      },
      {
        "name": "Pad Thai",
        "sub": "mundo",
        "words": [
          "talharim",
          "amendoim",
          "wok",
          "tailândia"
        ],
        "phrases": [
          "Macarrão de arroz frito na panela wok com broto de feijão, tofu e limão.",
          "Comida de rua mais famosa da Tailândia com toque agridoce.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "talharim",
        "phrase": "Macarrão de arroz frito na panela wok com broto de feijão, tofu e limão."
      },
      {
        "name": "Goulash",
        "sub": "mundo",
        "words": [
          "páprica",
          "ensopado",
          "húngaro",
          "carne"
        ],
        "phrases": [
          "Ensopado húngaro avermelhado de carne cozida com muita páprica doce.",
          "Aquece famílias no inverno do leste europeu com pão escuro.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "páprica",
        "phrase": "Ensopado húngaro avermelhado de carne cozida com muita páprica doce."
      },
      {
        "name": "Fondue de Queijo",
        "sub": "mundo",
        "words": [
          "tacho",
          "garfo",
          "pão",
          "vinho"
        ],
        "phrases": [
          "Tigela aquecida de queijos suíços derretidos com vinho branco e noz-moscada.",
          "Mergulha-se cubos de pão amanhecido em espetos compridos.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "tacho",
        "phrase": "Tigela aquecida de queijos suíços derretidos com vinho branco e noz-moscada."
      },
      {
        "name": "Poke Havaiano",
        "sub": "mundo",
        "words": [
          "tigela",
          "salmão",
          "gergelim",
          "edamame"
        ],
        "phrases": [
          "Cubos de peixe cru marinado servidos sobre arroz morno e frutas frescas.",
          "Prato praiano leve e colorido com sementes de gergelim.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "tigela",
        "phrase": "Cubos de peixe cru marinado servidos sobre arroz morno e frutas frescas."
      },
      {
        "name": "Romeu e Julieta",
        "sub": "doces",
        "words": [
          "goiabada",
          "queijo minas",
          "casamento",
          "clássico"
        ],
        "phrases": [
          "A combinação perfeita do salgado do queijo de minas com o doce da goiaba.",
          "Dupla clássica das cozinhas brasileiras servida após o almoço.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "goiabada",
        "phrase": "A combinação perfeita do salgado do queijo de minas com o doce da goiaba."
      },
      {
        "name": "Pé de Moleque",
        "sub": "doces",
        "words": [
          "amendoim",
          "rapadura",
          "crocante",
          "junino"
        ],
        "phrases": [
          "Doce rústico de amendoim torrado preso em caramelo de rapadura escura.",
          "Crocante e duro de morder, estrela das quermesses de junho.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "amendoim",
        "phrase": "Doce rústico de amendoim torrado preso em caramelo de rapadura escura."
      },
      {
        "name": "Cocada Queimada",
        "sub": "doces",
        "words": [
          "ralado",
          "calda",
          "morena",
          "coco"
        ],
        "phrases": [
          "Feita com açúcar dourado na panela até ganhar cor de caramelo forte.",
          "Vendida em tabuleiros tradicionais nas calçadas do nordeste.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "ralado",
        "phrase": "Feita com açúcar dourado na panela até ganhar cor de caramelo forte."
      },
      {
        "name": "Mousse de Maracujá",
        "sub": "doces",
        "words": [
          "sementes",
          "azedinho",
          "creme",
          "leite condensado"
        ],
        "phrases": [
          "Sobremesa aerada que equilibra a acidez da fruta com leite condensado.",
          "Decorada com sementes pretas brilhantes por cima da taça.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "sementes",
        "phrase": "Sobremesa aerada que equilibra a acidez da fruta com leite condensado."
      },
      {
        "name": "Canjica / Mungunzá",
        "sub": "doces",
        "words": [
          "milho branco",
          "canela",
          "coco",
          "quentinho"
        ],
        "phrases": [
          "Grãos de milho branco cozidos lentamente em leite de coco açucarado.",
          "Polvilhada com canela em pó perfumando toda a casa no inverno.",
          "É servido em ocasiões especiais reunindo famílias à mesa."
        ],
        "word": "milho branco",
        "phrase": "Grãos de milho branco cozidos lentamente em leite de coco açucarado."
      }
    ]
  },
  "Objeto": {
    "icon": "🔧",
    "color": "var(--g)",
    "subcategories": {
      "casa": {
        "label": "Casa & Quarto",
        "icon": "🏠",
        "desc": "Móveis, cama, banho e utilidades domésticas"
      },
      "tecnologia": {
        "label": "Tecnologia & Telas",
        "icon": "📱",
        "desc": "Eletrônicos, computadores, celulares e periféricos"
      },
      "ferramentas": {
        "label": "Ferramentas & Reparos",
        "icon": "🔨",
        "desc": "Equipamentos manuais e instrumentos de corte"
      },
      "pessoal": {
        "label": "Uso Pessoal & Bolsos",
        "icon": "🎒",
        "desc": "Acessórios, roupas, higiene e transporte diário"
      }
    },
    "items": [
      {
        "name": "Espelho",
        "sub": "casa",
        "word": "reflexo",
        "phrase": "Mostra quem olha sem nunca dizer uma única palavra.",
        "words": [
          "reflexo",
          "reflexo (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Mostra quem olha sem nunca dizer uma única palavra.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Travesseiro",
        "sub": "casa",
        "word": "fronha",
        "phrase": "Apoia os pensamentos cansados no final de cada dia.",
        "words": [
          "fronha",
          "fronha (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Apoia os pensamentos cansados no final de cada dia.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Cama",
        "sub": "casa",
        "word": "colchão",
        "phrase": "O refúgio acolhedor onde todo mundo quer voltar no frio.",
        "words": [
          "colchão",
          "colchão (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "O refúgio acolhedor onde todo mundo quer voltar no frio.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Sofá",
        "sub": "casa",
        "word": "almofada",
        "phrase": "O móvel favorito da sala para esticar as pernas.",
        "words": [
          "almofada",
          "almofada (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "O móvel favorito da sala para esticar as pernas.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Cadeira",
        "sub": "casa",
        "word": "quatro apoios",
        "phrase": "Feita para descansar o corpo ao redor da mesa.",
        "words": [
          "quatro apoios",
          "quatro apoios (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Feita para descansar o corpo ao redor da mesa.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Chuveiro",
        "sub": "casa",
        "word": "vapor",
        "phrase": "Gotas quentes caindo enquanto alguém canta desafinado.",
        "words": [
          "vapor",
          "vapor (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Gotas quentes caindo enquanto alguém canta desafinado.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Toalha",
        "sub": "casa",
        "word": "felpuda",
        "phrase": "Fica molhada para que você possa sair seco.",
        "words": [
          "felpuda",
          "felpuda (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Fica molhada para que você possa sair seco.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Guarda-roupa",
        "sub": "casa",
        "word": "cabides",
        "phrase": "Portas grandes guardando tecidos de todas as estações.",
        "words": [
          "cabides",
          "cabides (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Portas grandes guardando tecidos de todas as estações.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Cobertor",
        "sub": "casa",
        "word": "aquecer",
        "phrase": "Puxado até o queixo quando a temperatura cai.",
        "words": [
          "aquecer",
          "aquecer (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Puxado até o queixo quando a temperatura cai.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Geladeira",
        "sub": "casa",
        "word": "motor",
        "phrase": "Porta que todo mundo abre várias vezes sem saber o que quer.",
        "words": [
          "motor",
          "motor (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Porta que todo mundo abre várias vezes sem saber o que quer.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Micro-ondas",
        "sub": "casa",
        "word": "prato giratório",
        "phrase": "Emite um bipe estridente quando esquenta o alimento.",
        "words": [
          "prato giratório",
          "prato giratório (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Emite um bipe estridente quando esquenta o alimento.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Liquidificador",
        "sub": "casa",
        "word": "lâminas",
        "phrase": "Faz um barulho ensurdecedor para misturar frutas.",
        "words": [
          "lâminas",
          "lâminas (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Faz um barulho ensurdecedor para misturar frutas.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Abajur",
        "sub": "casa",
        "word": "cúpula",
        "phrase": "Ilumina suavemente a mesa ao lado da cabeceira.",
        "words": [
          "cúpula",
          "cúpula (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Ilumina suavemente a mesa ao lado da cabeceira.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Lâmpada",
        "sub": "casa",
        "word": "filamento",
        "phrase": "O estalo do interruptor traz claridade instantânea.",
        "words": [
          "filamento",
          "filamento (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "O estalo do interruptor traz claridade instantânea.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Panela",
        "sub": "casa",
        "word": "tampa",
        "phrase": "Esquenta no fogão borbulhando receitas do almoço.",
        "words": [
          "tampa",
          "tampa (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Esquenta no fogão borbulhando receitas do almoço.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Garfo",
        "sub": "casa",
        "word": "quatro pontas",
        "phrase": "Espeta o alimento para levar até a boca.",
        "words": [
          "quatro pontas",
          "quatro pontas (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Espeta o alimento para levar até a boca.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Prato",
        "sub": "casa",
        "word": "cerâmica",
        "phrase": "Fica embaixo de toda refeição servida à mesa.",
        "words": [
          "cerâmica",
          "cerâmica (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Fica embaixo de toda refeição servida à mesa.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Copo",
        "sub": "casa",
        "word": "transparência",
        "phrase": "Cilindro de vidro cheio de água até a borda.",
        "words": [
          "transparência",
          "transparência (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Cilindro de vidro cheio de água até a borda.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Vassoura",
        "sub": "casa",
        "word": "cerdas",
        "phrase": "Empurra a poeira do chão canto por canto.",
        "words": [
          "cerdas",
          "cerdas (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Empurra a poeira do chão canto por canto.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Celular",
        "sub": "tecnologia",
        "word": "bateria",
        "phrase": "O aparelho que quase ninguém desgruda das mãos o dia todo.",
        "words": [
          "bateria",
          "bateria (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "O aparelho que quase ninguém desgruda das mãos o dia todo.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Notebook",
        "sub": "tecnologia",
        "word": "dobradiça",
        "phrase": "Abre como uma pasta mostrando teclado e tela.",
        "words": [
          "dobradiça",
          "dobradiça (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Abre como uma pasta mostrando teclado e tela.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Televisão",
        "sub": "tecnologia",
        "word": "polegadas",
        "phrase": "A grande janela iluminada que reúne a família na sala.",
        "words": [
          "polegadas",
          "polegadas (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "A grande janela iluminada que reúne a família na sala.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Controle remoto",
        "sub": "tecnologia",
        "word": "pilhas",
        "phrase": "Costuma sumir entre os vãos das almofadas.",
        "words": [
          "pilhas",
          "pilhas (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Costuma sumir entre os vãos das almofadas.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Fone de ouvido",
        "sub": "tecnologia",
        "word": "isolamento",
        "phrase": "Colocado nas orelhas para ninguém ouvir sua música.",
        "words": [
          "isolamento",
          "isolamento (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Colocado nas orelhas para ninguém ouvir sua música.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Mouse",
        "sub": "tecnologia",
        "word": "clique",
        "phrase": "Desliza sobre a mesa controlando uma setinha na tela.",
        "words": [
          "clique",
          "clique (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Desliza sobre a mesa controlando uma setinha na tela.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Teclado",
        "sub": "tecnologia",
        "word": "teclas",
        "phrase": "Dezenas de letras que produzem palavras sob os dedos.",
        "words": [
          "teclas",
          "teclas (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Dezenas de letras que produzem palavras sob os dedos.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Câmera",
        "sub": "tecnologia",
        "word": "obturador",
        "phrase": "Congela um instante no tempo para ser lembrado depois.",
        "words": [
          "obturador",
          "obturador (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Congela um instante no tempo para ser lembrado depois.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Tomada",
        "sub": "tecnologia",
        "word": "orifícios",
        "phrase": "Pontos na parede esperando pinos para fornecer energia.",
        "words": [
          "orifícios",
          "orifícios (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Pontos na parede esperando pinos para fornecer energia.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Despertador",
        "sub": "tecnologia",
        "word": "alarme",
        "phrase": "O objeto mais odiado nas primeiras horas da manhã.",
        "words": [
          "alarme",
          "alarme (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "O objeto mais odiado nas primeiras horas da manhã.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Calculadora",
        "sub": "tecnologia",
        "word": "dígitos",
        "phrase": "Resolve contas complicadas apertando botões numéricos.",
        "words": [
          "dígitos",
          "dígitos (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Resolve contas complicadas apertando botões numéricos.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Martelo",
        "sub": "ferramentas",
        "word": "impacto",
        "phrase": "Bate na cabeça de metal até afundar na madeira.",
        "words": [
          "impacto",
          "impacto (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Bate na cabeça de metal até afundar na madeira.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Tesoura",
        "sub": "ferramentas",
        "word": "eixo",
        "phrase": "Duas lâminas cruzadas que separam o que estava unido.",
        "words": [
          "eixo",
          "eixo (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Duas lâminas cruzadas que separam o que estava unido.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Furadeira",
        "sub": "ferramentas",
        "word": "broca",
        "phrase": "Gira em alta velocidade abrindo furos na parede.",
        "words": [
          "broca",
          "broca (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Gira em alta velocidade abrindo furos na parede.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Alicate",
        "sub": "ferramentas",
        "word": "pressão",
        "phrase": "Aperta, puxa e corta fios com força multiplicada.",
        "words": [
          "pressão",
          "pressão (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Aperta, puxa e corta fios com força multiplicada.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Faca",
        "sub": "ferramentas",
        "word": "gume",
        "phrase": "Desliza afiada dividindo peças sobre a tábua.",
        "words": [
          "gume",
          "gume (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Desliza afiada dividindo peças sobre a tábua.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Cadeado",
        "sub": "ferramentas",
        "word": "trava",
        "phrase": "Guarda segredos de metal que só a chave certa liberta.",
        "words": [
          "trava",
          "trava (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Guarda segredos de metal que só a chave certa liberta.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Lanterna",
        "sub": "ferramentas",
        "word": "feixe",
        "phrase": "Foco de luz portátil quando a energia acaba.",
        "words": [
          "feixe",
          "feixe (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Foco de luz portátil quando a energia acaba.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Vela",
        "sub": "ferramentas",
        "word": "pavio",
        "phrase": "Queima a cera devagar emitindo uma chama dançante.",
        "words": [
          "pavio",
          "pavio (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Queima a cera devagar emitindo uma chama dançante.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Relógio",
        "sub": "pessoal",
        "word": "ponteiros",
        "phrase": "Gira em círculos lembrando que nada dura para sempre.",
        "words": [
          "ponteiros",
          "ponteiros (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Gira em círculos lembrando que nada dura para sempre.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Óculos",
        "sub": "pessoal",
        "word": "lentes",
        "phrase": "Apoiados no nariz para transformar o borrado em nitidez.",
        "words": [
          "lentes",
          "lentes (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Apoiados no nariz para transformar o borrado em nitidez.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Mochila",
        "sub": "pessoal",
        "word": "alças",
        "phrase": "Carregada nas costas cheia de cadernos e pertences.",
        "words": [
          "alças",
          "alças (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Carregada nas costas cheia de cadernos e pertences.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Carteira",
        "sub": "pessoal",
        "word": "compartimentos",
        "phrase": "Guarda documentos e notas dobradas no bolso de trás.",
        "words": [
          "compartimentos",
          "compartimentos (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Guarda documentos e notas dobradas no bolso de trás.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Chave",
        "sub": "pessoal",
        "word": "dentes",
        "phrase": "Pequena lâmina de metal que dá acesso ao lar.",
        "words": [
          "dentes",
          "dentes (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Pequena lâmina de metal que dá acesso ao lar.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Boné",
        "sub": "pessoal",
        "word": "aba",
        "phrase": "Faz sombra nos olhos enquanto protege a cabeça do sol.",
        "words": [
          "aba",
          "aba (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Faz sombra nos olhos enquanto protege a cabeça do sol.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Tênis",
        "sub": "pessoal",
        "word": "cadarço",
        "phrase": "Amarrado nos pés para amortecer cada passo na rua.",
        "words": [
          "cadarço",
          "cadarço (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Amarrado nos pés para amortecer cada passo na rua.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Guarda-chuva",
        "sub": "pessoal",
        "word": "varetas",
        "phrase": "Abre como uma cúpula quando as nuvens desabam.",
        "words": [
          "varetas",
          "varetas (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Abre como uma cúpula quando as nuvens desabam.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Mala",
        "sub": "pessoal",
        "word": "rodinhas",
        "phrase": "Desliza pelos saguões anunciando o início de uma viagem.",
        "words": [
          "rodinhas",
          "rodinhas (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Desliza pelos saguões anunciando o início de uma viagem.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Caneta",
        "sub": "pessoal",
        "word": "esfera",
        "phrase": "Deixa um rastro permanente de tinta sobre o papel.",
        "words": [
          "esfera",
          "esfera (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Deixa um rastro permanente de tinta sobre o papel.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Sabonete",
        "sub": "pessoal",
        "word": "espuma",
        "phrase": "Escorrega nas mãos perfumando a água da limpeza.",
        "words": [
          "espuma",
          "espuma (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Escorrega nas mãos perfumando a água da limpeza.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Escova de dentes",
        "sub": "pessoal",
        "word": "cerdas",
        "phrase": "Trabalha com espuma mentolada após as refeições.",
        "words": [
          "cerdas",
          "cerdas (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Trabalha com espuma mentolada após as refeições.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Fone Bluetooth",
        "sub": "tecnologia",
        "word": "estojo",
        "phrase": "Sem fios aparentes, descansa numa caixinha que recarrega sua bateria.",
        "words": [
          "estojo",
          "estojo (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Sem fios aparentes, descansa numa caixinha que recarrega sua bateria.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Powerbank",
        "sub": "tecnologia",
        "word": "reserva",
        "phrase": "Salva aparelhos eletrônicos da bateria fraca quando não há tomada.",
        "words": [
          "reserva",
          "reserva (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Salva aparelhos eletrônicos da bateria fraca quando não há tomada.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Smartwatch",
        "sub": "tecnologia",
        "word": "pulso",
        "phrase": "Conta os passos e batimentos cardíacos diretamente no antebraço.",
        "words": [
          "pulso",
          "pulso (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Conta os passos e batimentos cardíacos diretamente no antebraço.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Drone",
        "sub": "tecnologia",
        "word": "hélices",
        "phrase": "Voa pelos ares gravando imagens de ângulos que ninguém alcança.",
        "words": [
          "hélices",
          "hélices (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Voa pelos ares gravando imagens de ângulos que ninguém alcança.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Carregador por Indução",
        "sub": "tecnologia",
        "word": "placa",
        "phrase": "Basta apoiar o aparelho por cima para a energia fluir sem plugue.",
        "words": [
          "placa",
          "placa (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Basta apoiar o aparelho por cima para a energia fluir sem plugue.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Kindle / E-reader",
        "sub": "tecnologia",
        "word": "tinta",
        "phrase": "Guarda centenas de livros numa tela fosca que imita papel.",
        "words": [
          "tinta",
          "tinta (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Guarda centenas de livros numa tela fosca que imita papel.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Air Fryer",
        "sub": "casa",
        "word": "cesto",
        "phrase": "Prepara petiscos crocantes sem usar óleo através de ar quente circulante.",
        "words": [
          "cesto",
          "cesto (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Prepara petiscos crocantes sem usar óleo através de ar quente circulante.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Cafeteira Elétrica",
        "sub": "casa",
        "word": "filtro",
        "phrase": "Acorda a casa com aroma forte logo nas primeiras horas da manhã.",
        "words": [
          "filtro",
          "filtro (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Acorda a casa com aroma forte logo nas primeiras horas da manhã.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Ventilador",
        "sub": "casa",
        "word": "vento",
        "phrase": "Gira para lá e para cá tentando amenizar o calor sufocante.",
        "words": [
          "vento",
          "vento (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Gira para lá e para cá tentando amenizar o calor sufocante.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Garrafa Térmica",
        "sub": "casa",
        "word": "vácuo",
        "phrase": "Mantém líquidos quentes ou frios por horas graças ao isolamento duplo.",
        "words": [
          "vácuo",
          "vácuo (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Mantém líquidos quentes ou frios por horas graças ao isolamento duplo.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Ferro de Passar",
        "sub": "casa",
        "word": "vapor",
        "phrase": "Desliza quente sobre o tecido para eliminar amassados e vincos.",
        "words": [
          "vapor",
          "vapor (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Desliza quente sobre o tecido para eliminar amassados e vincos.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Aspirador Robô",
        "sub": "casa",
        "word": "sensor",
        "phrase": "Percorre os cômodos sozinho esbarrando levemente nos móveis.",
        "words": [
          "sensor",
          "sensor (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Percorre os cômodos sozinho esbarrando levemente nos móveis.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Fita Métrica / Trena",
        "sub": "ferramentas",
        "word": "milímetro",
        "phrase": "Se estica em lâmina metálica e recolhe com um botão de mola.",
        "words": [
          "milímetro",
          "milímetro (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Se estica em lâmina metálica e recolhe com um botão de mola.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Chave Philips",
        "sub": "ferramentas",
        "word": "cruz",
        "phrase": "Sua ponta em formato de cruz aperta ou solta parafusos específicos.",
        "words": [
          "cruz",
          "cruz (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Sua ponta em formato de cruz aperta ou solta parafusos específicos.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Nível de Bolha",
        "sub": "ferramentas",
        "word": "bolha",
        "phrase": "Usa líquido esverdeado para garantir que o quadro não fique torto.",
        "words": [
          "bolha",
          "bolha (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Usa líquido esverdeado para garantir que o quadro não fique torto.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Lanterna Tática",
        "sub": "ferramentas",
        "word": "foco",
        "phrase": "Corta a escuridão total com um feixe potente de luz branca concentrada.",
        "words": [
          "foco",
          "foco (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Corta a escuridão total com um feixe potente de luz branca concentrada.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Alicate de Pressão",
        "sub": "ferramentas",
        "word": "mordida",
        "phrase": "Prende com força travada sem que você precise continuar apertando.",
        "words": [
          "mordida",
          "mordida (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Prende com força travada sem que você precise continuar apertando.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Ferro de Solda",
        "sub": "ferramentas",
        "word": "estanho",
        "phrase": "Aquece a ponto de derreter metal para unir fios e circuitos.",
        "words": [
          "estanho",
          "estanho (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Aquece a ponto de derreter metal para unir fios e circuitos.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Perfume",
        "sub": "pessoal",
        "word": "essência",
        "phrase": "Basta duas borrifadas no pescoço para marcar presença onde chegar.",
        "words": [
          "essência",
          "essência (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Basta duas borrifadas no pescoço para marcar presença onde chegar.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Relógio de Bolso",
        "sub": "pessoal",
        "word": "corrente",
        "phrase": "Item vintage guardado no colete e preso por elegante corrente metálica.",
        "words": [
          "corrente",
          "corrente (sutil)",
          "detalhe",
          "utilidade"
        ],
        "phrases": [
          "Item vintage guardado no colete e preso por elegante corrente metálica.",
          "Preste atenção especial nas características desta rodada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ]
      },
      {
        "name": "Console Portátil (Nintendo Switch)",
        "sub": "tecnologia",
        "words": [
          "joy-con",
          "doca",
          "cartucho",
          "híbrido"
        ],
        "phrases": [
          "Joga na TV da sala ou destaca os controles para jogar no ônibus.",
          "Pequeno console com tela tátil e controles que se soltam dos lados.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "joy-con",
        "phrase": "Joga na TV da sala ou destaca os controles para jogar no ônibus."
      },
      {
        "name": "Placa de Vídeo",
        "sub": "tecnologia",
        "words": [
          "ventoinhas",
          "silício",
          "gráficos",
          "gabinete"
        ],
        "phrases": [
          "Componente pesado com ventoinhas velozes renderizando jogos em 4K.",
          "O coração visual do computador que esquenta como um forno.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "ventoinhas",
        "phrase": "Componente pesado com ventoinhas velozes renderizando jogos em 4K."
      },
      {
        "name": "Caixa de Som Inteligente",
        "sub": "tecnologia",
        "words": [
          "assistente",
          "microfone",
          "comando",
          "música"
        ],
        "phrases": [
          "Fica ouvindo na estante esperando alguém falar com ela para tocar música.",
          "Acende luzes azuis e responde dúvidas sobre a previsão do tempo.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "assistente",
        "phrase": "Fica ouvindo na estante esperando alguém falar com ela para tocar música."
      },
      {
        "name": "Mouse Gamer",
        "sub": "tecnologia",
        "words": [
          "dpi",
          "rgb",
          "sensor",
          "cliques"
        ],
        "phrases": [
          "Cheio de luzes coloridas e botões laterais com sensor de alta precisão.",
          "Desliza pelo tapete de tecido registrando milhares de cliques por hora.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "dpi",
        "phrase": "Cheio de luzes coloridas e botões laterais com sensor de alta precisão."
      },
      {
        "name": "Estabilizador Gimbal",
        "sub": "tecnologia",
        "words": [
          "motores",
          "suave",
          "gravação",
          "eixos"
        ],
        "phrases": [
          "Mantém o celular perfeitamente estável mesmo se você sair correndo.",
          "Três pequenos motores elétricos que cancelam qualquer tremor da mão.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "motores",
        "phrase": "Mantém o celular perfeitamente estável mesmo se você sair correndo."
      },
      {
        "name": "Sanduicheira",
        "sub": "casa",
        "words": [
          "chapa",
          "teflon",
          "trava",
          "torrada"
        ],
        "phrases": [
          "Prensa pão com queijo deixando marcas listradas douradas dos dois lados.",
          "Aquece rápido na tomada com uma luzinha vermelha e verde na tampa.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "chapa",
        "phrase": "Prensa pão com queijo deixando marcas listradas douradas dos dois lados."
      },
      {
        "name": "Batedeira",
        "sub": "casa",
        "words": [
          "batedores",
          "tigela",
          "claras em neve",
          "bolo"
        ],
        "phrases": [
          "Gira garfos de metal preparando massas fofas e cremes para bolos.",
          "Pode ser destacada da base para bater misturas manualmente.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "batedores",
        "phrase": "Gira garfos de metal preparando massas fofas e cremes para bolos."
      },
      {
        "name": "Varal de Chão",
        "sub": "casa",
        "words": [
          "varetas",
          "dobrável",
          "prendedor",
          "sol"
        ],
        "phrases": [
          "Se abre na área de serviço ou na varanda para secar as roupas ao vento.",
          "Cheio de varetas finas de metal que dobram para guardar atrás da porta.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "varetas",
        "phrase": "Se abre na área de serviço ou na varanda para secar as roupas ao vento."
      },
      {
        "name": "Porta-Retrato",
        "sub": "casa",
        "words": [
          "moldura",
          "vidro",
          "lembrança",
          "fotografia"
        ],
        "phrases": [
          "Guarda um sorriso congelado no tempo em cima da estante da sala.",
          "Moldura de madeira ou metal protegendo uma imagem querida.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "moldura",
        "phrase": "Guarda um sorriso congelado no tempo em cima da estante da sala."
      },
      {
        "name": "Chave Inglesa",
        "sub": "ferramentas",
        "words": [
          "rosca",
          "regulagem",
          "porca",
          "cano"
        ],
        "phrases": [
          "Ajusta a abertura da mandíbula girando uma pequena rosca sem fim.",
          "Ferramenta pesada usada para apertar canos e parafusos de vários tamanhos.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "rosca",
        "phrase": "Ajusta a abertura da mandíbula girando uma pequena rosca sem fim."
      },
      {
        "name": "Arco de Serra",
        "sub": "ferramentas",
        "words": [
          "lâmina fina",
          "dentes",
          "serralheiro",
          "corte"
        ],
        "phrases": [
          "Armação metálica curvada segurando uma fita de aço com microdentes.",
          "Usado para serrar canos de PVC ou barras de ferro no cavalete.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "lâmina fina",
        "phrase": "Armação metálica curvada segurando uma fita de aço com microdentes."
      },
      {
        "name": "Maçarico",
        "sub": "ferramentas",
        "words": [
          "chama azul",
          "gás",
          "fogo",
          "solda"
        ],
        "phrases": [
          "Dispara uma chama azul pontiaguda de calor intenso com botijão acoplado.",
          "Usado para derreter canos de cobre ou dourar açúcar em sobremesas.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "chama azul",
        "phrase": "Dispara uma chama azul pontiaguda de calor intenso com botijão acoplado."
      },
      {
        "name": "Lixadeira",
        "sub": "ferramentas",
        "words": [
          "grão",
          "poeira",
          "vibração",
          "madeira"
        ],
        "phrases": [
          "Vibra em alta velocidade deixando superfícies ásperas lisinhas ao toque.",
          "Gera uma nuvem fina de pó de madeira enquanto trabalha na bancada.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "grão",
        "phrase": "Vibra em alta velocidade deixando superfícies ásperas lisinhas ao toque."
      },
      {
        "name": "Torno de Bancada (Morsa)",
        "sub": "ferramentas",
        "words": [
          "manivela",
          "pressão",
          "bancada",
          "aço"
        ],
        "phrases": [
          "Preso na beirada da mesa de trabalho com duas mandíbulas de ferro maciço.",
          "Prende qualquer peça com força bruta para que você possa serrar ou lixar.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "manivela",
        "phrase": "Preso na beirada da mesa de trabalho com duas mandíbulas de ferro maciço."
      },
      {
        "name": "Óculos de Sol",
        "sub": "pessoal",
        "words": [
          "lentes escuras",
          "armação",
          "uv",
          "verão"
        ],
        "phrases": [
          "Protege os olhos da claridade intensa nos dias de praia e direção.",
          "Dá um ar misterioso e charmoso a quem coloca no rosto.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "lentes escuras",
        "phrase": "Protege os olhos da claridade intensa nos dias de praia e direção."
      },
      {
        "name": "Anel de Noivado",
        "sub": "pessoal",
        "words": [
          "diamante",
          "pedra",
          "joia",
          "pedido"
        ],
        "phrases": [
          "Pequeno aro precioso com uma pedra brilhante no topo guardado numa caixinha.",
          "Entregue de joelhos em momentos decisivos que mudam vidas.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "diamante",
        "phrase": "Pequeno aro precioso com uma pedra brilhante no topo guardado numa caixinha."
      },
      {
        "name": "Abotoaduras",
        "sub": "pessoal",
        "words": [
          "punho",
          "camisa",
          "social",
          "elegância"
        ],
        "phrases": [
          "Pequenas peças metálicas que fecham as mangas de camisas formais.",
          "Usadas com smoking ou ternos elegantes em cerimônias de gala.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "punho",
        "phrase": "Pequenas peças metálicas que fecham as mangas de camisas formais."
      },
      {
        "name": "Cortador de Unha",
        "sub": "pessoal",
        "words": [
          "alavanca",
          "lâminas curvas",
          "estalo",
          "higiene"
        ],
        "phrases": [
          "Aperta uma pequena alavanca metálica que estala cortando extremidades.",
          "Item indispensável do kit de higiene pessoal no armário do banheiro.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "alavanca",
        "phrase": "Aperta uma pequena alavanca metálica que estala cortando extremidades."
      },
      {
        "name": "Isqueiro",
        "sub": "pessoal",
        "words": [
          "pedra",
          "chama",
          "gás",
          "faísca"
        ],
        "phrases": [
          "Gira a rodinha áspera com o polegar para soltar faísca sobre o gás.",
          "Cabe no bolso da calça e produz fogo num piscar de olhos.",
          "Facilita o dia a dia e é encontrado em quase qualquer ambiente."
        ],
        "word": "pedra",
        "phrase": "Gira a rodinha áspera com o polegar para soltar faísca sobre o gás."
      }
    ]
  },
  "Lugar": {
    "icon": "📍",
    "color": "var(--p)",
    "subcategories": {
      "natureza": {
        "label": "Natureza & Ar Livre",
        "icon": "🏖️",
        "desc": "Praias, montanhas, florestas e cachoeiras"
      },
      "cidade": {
        "label": "Cidade & Rotina",
        "icon": "🏙️",
        "desc": "Escolas, hospitais, shoppings e padarias"
      },
      "turismo": {
        "label": "Mundo & Monumentos",
        "icon": "🗺️",
        "desc": "Torre Eiffel, Coliseu, Disney e pontos turísticos"
      },
      "misterio": {
        "label": "Fantasiosos & Extremos",
        "icon": "🌌",
        "desc": "Espaço, cavernas, vulcões e fortalezas antigas"
      }
    },
    "items": [
      {
        "name": "Praia",
        "sub": "natureza",
        "word": "ressaca",
        "phrase": "Onde a terra encontra o mar salgado sob o sol quente.",
        "words": [
          "ressaca",
          "ressaca (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Onde a terra encontra o mar salgado sob o sol quente.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Montanha",
        "sub": "natureza",
        "word": "cume",
        "phrase": "Pico elevado que toca as nuvens com ar rarefeito.",
        "words": [
          "cume",
          "cume (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Pico elevado que toca as nuvens com ar rarefeito.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Floresta",
        "sub": "natureza",
        "word": "copa",
        "phrase": "Mata fechada com o som constante de folhas e animais.",
        "words": [
          "copa",
          "copa (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Mata fechada com o som constante de folhas e animais.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Cachoeira",
        "sub": "natureza",
        "word": "queda",
        "phrase": "Água doce caindo de grande altura entre pedras musgosas.",
        "words": [
          "queda",
          "queda (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Água doce caindo de grande altura entre pedras musgosas.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Deserto",
        "sub": "natureza",
        "word": "duna",
        "phrase": "Imensidão dourada onde a água é o bem mais precioso.",
        "words": [
          "duna",
          "duna (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Imensidão dourada onde a água é o bem mais precioso.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Ilha",
        "sub": "natureza",
        "word": "isolamento",
        "phrase": "Pedaço de terra cercado de água por todos os lados.",
        "words": [
          "isolamento",
          "isolamento (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Pedaço de terra cercado de água por todos os lados.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Fazenda",
        "sub": "natureza",
        "word": "porteira",
        "phrase": "Criação de animais e cheiro de terra molhada no campo.",
        "words": [
          "porteira",
          "porteira (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Criação de animais e cheiro de terra molhada no campo.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Piscina",
        "sub": "natureza",
        "word": "azulejo",
        "phrase": "Tanque azul de água clorada onde as crianças se refrescam.",
        "words": [
          "azulejo",
          "azulejo (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Tanque azul de água clorada onde as crianças se refrescam.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Parque",
        "sub": "natureza",
        "word": "gramado",
        "phrase": "Árvores no meio da cidade para piqueniques e caminhadas.",
        "words": [
          "gramado",
          "gramado (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Árvores no meio da cidade para piqueniques e caminhadas.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Escola",
        "sub": "cidade",
        "word": "sinal",
        "phrase": "Salas cheias de carteiras esperando o toque do recreio.",
        "words": [
          "sinal",
          "sinal (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Salas cheias de carteiras esperando o toque do recreio.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Hospital",
        "sub": "cidade",
        "word": "triagem",
        "phrase": "Portas automáticas e corredores brancos em vigília contínua.",
        "words": [
          "triagem",
          "triagem (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Portas automáticas e corredores brancos em vigília contínua.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Shopping",
        "sub": "cidade",
        "word": "vitrine",
        "phrase": "Corredores climatizados com escadas rolantes e praça de alimentação.",
        "words": [
          "vitrine",
          "vitrine (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Corredores climatizados com escadas rolantes e praça de alimentação.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Padaria",
        "sub": "cidade",
        "word": "fornada",
        "phrase": "O cheiro de pão fresco atrai os vizinhos logo cedo.",
        "words": [
          "fornada",
          "fornada (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "O cheiro de pão fresco atrai os vizinhos logo cedo.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Biblioteca",
        "sub": "cidade",
        "word": "silêncio",
        "phrase": "Milhares de páginas encadernadas em estantes silenciosas.",
        "words": [
          "silêncio",
          "silêncio (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Milhares de páginas encadernadas em estantes silenciosas.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Cinema",
        "sub": "cidade",
        "word": "projeção",
        "phrase": "Poltronas no escuro com o estalar de pipoca na frente da tela.",
        "words": [
          "projeção",
          "projeção (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Poltronas no escuro com o estalar de pipoca na frente da tela.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Estádio",
        "sub": "cidade",
        "word": "arquibancada",
        "phrase": "Milhares de vozes cantando juntas com bandeiras ao vento.",
        "words": [
          "arquibancada",
          "arquibancada (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Milhares de vozes cantando juntas com bandeiras ao vento.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Aeroporto",
        "sub": "cidade",
        "word": "portão",
        "phrase": "Pistas longas de pouso e abraços de despedida no saguão.",
        "words": [
          "portão",
          "portão (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Pistas longas de pouso e abraços de despedida no saguão.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Rodoviária",
        "sub": "cidade",
        "word": "plataforma",
        "phrase": "Ônibus manobrando enquanto viajantes esperam a partida.",
        "words": [
          "plataforma",
          "plataforma (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Ônibus manobrando enquanto viajantes esperam a partida.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Academia",
        "sub": "cidade",
        "word": "anilhas",
        "phrase": "Música animada e espelhos enquanto as pessoas puxam peso.",
        "words": [
          "anilhas",
          "anilhas (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Música animada e espelhos enquanto as pessoas puxam peso.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Igreja",
        "sub": "cidade",
        "word": "altar",
        "phrase": "Bancos de madeira e sinos tocando em dias de celebração.",
        "words": [
          "altar",
          "altar (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Bancos de madeira e sinos tocando em dias de celebração.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Mercado",
        "sub": "cidade",
        "word": "carrinho",
        "phrase": "Prateleiras compridas cheias de produtos com códigos de barras.",
        "words": [
          "carrinho",
          "carrinho (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Prateleiras compridas cheias de produtos com códigos de barras.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Restaurante",
        "sub": "cidade",
        "word": "cardápio",
        "phrase": "Mesas organizadas onde garçons trazem pratos preparados.",
        "words": [
          "cardápio",
          "cardápio (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Mesas organizadas onde garçons trazem pratos preparados.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Farmácia",
        "sub": "cidade",
        "word": "receita",
        "phrase": "Gavetas cheias de remédios sob luz branca constante.",
        "words": [
          "receita",
          "receita (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Gavetas cheias de remédios sob luz branca constante.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Oficina",
        "sub": "cidade",
        "word": "elevador",
        "phrase": "Cheiro de óleo e ferramentas com carros suspensos.",
        "words": [
          "elevador",
          "elevador (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Cheiro de óleo e ferramentas com carros suspensos.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Cemitério",
        "sub": "cidade",
        "word": "lápide",
        "phrase": "Jardins solenes com flores deixadas para quem partiu.",
        "words": [
          "lápide",
          "lápide (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Jardins solenes com flores deixadas para quem partiu.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Torre Eiffel",
        "sub": "turismo",
        "word": "ferro",
        "phrase": "A estrutura metálica iluminada mais famosa da França.",
        "words": [
          "ferro",
          "ferro (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "A estrutura metálica iluminada mais famosa da França.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Cristo Redentor",
        "sub": "turismo",
        "word": "corcovado",
        "phrase": "Braços abertos de pedra abençoando a baía da cidade.",
        "words": [
          "corcovado",
          "corcovado (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Braços abertos de pedra abençoando a baía da cidade.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Coliseu",
        "sub": "turismo",
        "word": "arena",
        "phrase": "Antigos gladiadores duelavam sob os arcos de pedra em Roma.",
        "words": [
          "arena",
          "arena (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Antigos gladiadores duelavam sob os arcos de pedra em Roma.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Pirâmide do Egito",
        "sub": "turismo",
        "word": "faraó",
        "phrase": "Blocos gigantescos erguidos no deserto há milênios.",
        "words": [
          "faraó",
          "faraó (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Blocos gigantescos erguidos no deserto há milênios.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Disney",
        "sub": "turismo",
        "word": "orelhas",
        "phrase": "Fogos de artifício estourando atrás do castelo encantado.",
        "words": [
          "orelhas",
          "orelhas (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Fogos de artifício estourando atrás do castelo encantado.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Aquário",
        "sub": "turismo",
        "word": "túnel",
        "phrase": "Vidros grossos onde peixes e tubarões nadam sobre as cabeças.",
        "words": [
          "túnel",
          "túnel (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Vidros grossos onde peixes e tubarões nadam sobre as cabeças.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Zoológico",
        "sub": "turismo",
        "word": "viveiro",
        "phrase": "Alambrados e recintos onde o público observa feras exóticas.",
        "words": [
          "viveiro",
          "viveiro (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Alambrados e recintos onde o público observa feras exóticas.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Circo",
        "sub": "turismo",
        "word": "lona",
        "phrase": "Tenda listrada onde artistas equilibram o impossível no picadeiro.",
        "words": [
          "lona",
          "lona (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Tenda listrada onde artistas equilibram o impossível no picadeiro.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Museu",
        "sub": "turismo",
        "word": "acervo",
        "phrase": "Quadros antigos e fósseis protegidos por cordões de veludo.",
        "words": [
          "acervo",
          "acervo (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Quadros antigos e fósseis protegidos por cordões de veludo.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Teatro",
        "sub": "turismo",
        "word": "camarim",
        "phrase": "A cortina vermelha se abre para aplausos fervorosos.",
        "words": [
          "camarim",
          "camarim (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "A cortina vermelha se abre para aplausos fervorosos.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Lua",
        "sub": "misterio",
        "word": "crateras",
        "phrase": "O satélite prateado que dita as marés na escuridão do espaço.",
        "words": [
          "crateras",
          "crateras (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "O satélite prateado que dita as marés na escuridão do espaço.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Vulcão",
        "sub": "misterio",
        "word": "magma",
        "phrase": "A montanha furiosa que expele rochas derretidas e fumaça.",
        "words": [
          "magma",
          "magma (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "A montanha furiosa que expele rochas derretidas e fumaça.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Caverna",
        "sub": "misterio",
        "word": "estalactite",
        "phrase": "Escuridão subterrânea com formações rochosas pingando no teto.",
        "words": [
          "estalactite",
          "estalactite (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Escuridão subterrânea com formações rochosas pingando no teto.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Castelo",
        "sub": "misterio",
        "word": "ponte levadiça",
        "phrase": "Muralhas antigas com torres que protegiam os reis do passado.",
        "words": [
          "ponte levadiça",
          "ponte levadiça (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Muralhas antigas com torres que protegiam os reis do passado.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Cadeia",
        "sub": "misterio",
        "word": "grades",
        "phrase": "Chaves de ferro trancando corredores vigiados dia e noite.",
        "words": [
          "grades",
          "grades (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Chaves de ferro trancando corredores vigiados dia e noite.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Deserto do Saara",
        "sub": "natureza",
        "word": "dunas",
        "phrase": "Mar infinito de areia dourada onde o vento redesenha as colinas.",
        "words": [
          "dunas",
          "dunas (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Mar infinito de areia dourada onde o vento redesenha as colinas.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Floresta Amazônica",
        "sub": "natureza",
        "word": "biodiversidade",
        "phrase": "O maior bioma tropical do planeta cortado por rios caudalosos.",
        "words": [
          "biodiversidade",
          "biodiversidade (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "O maior bioma tropical do planeta cortado por rios caudalosos.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Cataratas do Iguaçu",
        "sub": "natureza",
        "word": "garganta",
        "phrase": "Centenas de quedas d'água estrondosas na fronteira de países irmãos.",
        "words": [
          "garganta",
          "garganta (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Centenas de quedas d'água estrondosas na fronteira de países irmãos.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Grand Canyon",
        "sub": "natureza",
        "word": "erosão",
        "phrase": "Profunda fenda esculpida pelo rio durante milhões de anos de história.",
        "words": [
          "erosão",
          "erosão (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Profunda fenda esculpida pelo rio durante milhões de anos de história.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Monte Everest",
        "sub": "natureza",
        "word": "altitude",
        "phrase": "O ponto mais alto da Terra coberto por neves perpétuas e ventos congelantes.",
        "words": [
          "altitude",
          "altitude (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "O ponto mais alto da Terra coberto por neves perpétuas e ventos congelantes.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Aurora Boreal",
        "sub": "natureza",
        "word": "polar",
        "phrase": "Cortinas verdes de luz que dançam nos céus gélidos do extremo norte.",
        "words": [
          "polar",
          "polar (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Cortinas verdes de luz que dançam nos céus gélidos do extremo norte.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Times Square",
        "sub": "cidade",
        "word": "letreiros",
        "phrase": "Cruzamento movimentado que nunca dorme sob clarão de telões gigantescos.",
        "words": [
          "letreiros",
          "letreiros (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Cruzamento movimentado que nunca dorme sob clarão de telões gigantescos.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Avenida Paulista",
        "sub": "cidade",
        "word": "masp",
        "phrase": "O coração financeiro e cultural de São Paulo fechado aos domingos.",
        "words": [
          "masp",
          "masp (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "O coração financeiro e cultural de São Paulo fechado aos domingos.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Copacabana",
        "sub": "cidade",
        "word": "calçadão",
        "phrase": "Famosa pelas pedras portuguesas desenhando ondas à beira-mar.",
        "words": [
          "calçadão",
          "calçadão (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Famosa pelas pedras portuguesas desenhando ondas à beira-mar.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Favela da Rocinha",
        "sub": "cidade",
        "word": "morro",
        "phrase": "Labirinto pulsante de vielas e casas empilhadas na encosta carioca.",
        "words": [
          "morro",
          "morro (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Labirinto pulsante de vielas e casas empilhadas na encosta carioca.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Tokyo Shibuya",
        "sub": "cidade",
        "word": "cruzamento",
        "phrase": "Milhares de pedestres atravessam em todas as direções ao mesmo tempo.",
        "words": [
          "cruzamento",
          "cruzamento (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Milhares de pedestres atravessam em todas as direções ao mesmo tempo.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Veneza",
        "sub": "cidade",
        "word": "gôndola",
        "phrase": "Cidade sem carros onde as ruas são canais navegados a remo.",
        "words": [
          "gôndola",
          "gôndola (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Cidade sem carros onde as ruas são canais navegados a remo.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Machu Picchu",
        "sub": "turismo",
        "word": "inca",
        "phrase": "Ruínas sagradas de pedra polida nas alturas da cordilheira dos Andes.",
        "words": [
          "inca",
          "inca (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Ruínas sagradas de pedra polida nas alturas da cordilheira dos Andes.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Muralha da China",
        "sub": "turismo",
        "word": "tijolos",
        "phrase": "Serpenteia por milhares de quilômetros sobre montanhas históricas.",
        "words": [
          "tijolos",
          "tijolos (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Serpenteia por milhares de quilômetros sobre montanhas históricas.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Taj Mahal",
        "sub": "turismo",
        "word": "mármore",
        "phrase": "Monumento eterno de mármore branco construído em nome de um grande amor.",
        "words": [
          "mármore",
          "mármore (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Monumento eterno de mármore branco construído em nome de um grande amor.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Pirâmides de Gizé",
        "sub": "turismo",
        "word": "faraó",
        "phrase": "Tumbas milenares no deserto alinhadas misteriosamente com os astros.",
        "words": [
          "faraó",
          "faraó (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Tumbas milenares no deserto alinhadas misteriosamente com os astros.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Coliseu Romano",
        "sub": "turismo",
        "word": "gladiador",
        "phrase": "Arena circular de pedra onde combates épicos divertiam multidões imperiais.",
        "words": [
          "gladiador",
          "gladiador (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Arena circular de pedra onde combates épicos divertiam multidões imperiais.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Triângulo das Bermudas",
        "sub": "misterio",
        "word": "bússola",
        "phrase": "Área oceânica famosa por relatos de sumiço de navios e aviões.",
        "words": [
          "bússola",
          "bússola (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Área oceânica famosa por relatos de sumiço de navios e aviões.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Área 51",
        "sub": "misterio",
        "word": "hangar",
        "phrase": "Instalação militar secreta cercada por teorias de discos voadores.",
        "words": [
          "hangar",
          "hangar (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Instalação militar secreta cercada por teorias de discos voadores.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Chernobyl",
        "sub": "misterio",
        "word": "radiação",
        "phrase": "Cidade fantasma evacuada às pressas após o pior acidente nuclear.",
        "words": [
          "radiação",
          "radiação (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Cidade fantasma evacuada às pressas após o pior acidente nuclear.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Stonehenge",
        "sub": "misterio",
        "word": "megalito",
        "phrase": "Monólitos circulares dispostos em campos verdes sem explicação exata.",
        "words": [
          "megalito",
          "megalito (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Monólitos circulares dispostos em campos verdes sem explicação exata.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Fossa das Marianas",
        "sub": "misterio",
        "word": "abissal",
        "phrase": "A trincheira mais profunda do oceano onde a luz do sol nunca alcança.",
        "words": [
          "abissal",
          "abissal (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "A trincheira mais profunda do oceano onde a luz do sol nunca alcança.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Atlântida",
        "sub": "misterio",
        "word": "submersa",
        "phrase": "Civilização mítica avançada que teria desaparecido para sempre no mar.",
        "words": [
          "submersa",
          "submersa (sutil)",
          "detalhe",
          "horizonte"
        ],
        "phrases": [
          "Civilização mítica avançada que teria desaparecido para sempre no mar.",
          "Preste atenção especial nas características desta rodada.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ]
      },
      {
        "name": "Deserto do Atacama",
        "sub": "natureza",
        "words": [
          "seco",
          "estrelas",
          "telescópios",
          "sal"
        ],
        "phrases": [
          "O lugar mais árido do planeta com o céu mais limpo para ver galáxias.",
          "Lagos salgados e vulcões cercados por um silêncio absoluto.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "seco",
        "phrase": "O lugar mais árido do planeta com o céu mais limpo para ver galáxias."
      },
      {
        "name": "Lençóis Maranhenses",
        "sub": "natureza",
        "words": [
          "lagoas",
          "dunas brancas",
          "chuva",
          "oásis"
        ],
        "phrases": [
          "Dunas de areia alva pontilhadas por lagoas de água doce cristalina.",
          "Um paraíso natural brasileiro esculpido pela estação das chuvas.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "lagoas",
        "phrase": "Dunas de areia alva pontilhadas por lagoas de água doce cristalina."
      },
      {
        "name": "Pantanal",
        "sub": "natureza",
        "words": [
          "alagado",
          "tuiuiú",
          "onça",
          "bioma"
        ],
        "phrases": [
          "A maior planície alagável do mundo repleta de jacarés e araras.",
          "As águas sobem e descem ditando o ritmo de toda a vida animal.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "alagado",
        "phrase": "A maior planície alagável do mundo repleta de jacarés e araras."
      },
      {
        "name": "Monte Fuji",
        "sub": "natureza",
        "words": [
          "vulcão",
          "neve",
          "cone",
          "sagrado"
        ],
        "phrases": [
          "Vulcão de cone perfeitamente simétrico com o cume coberto de gelo.",
          "Montanha sagrada retratada em milhares de gravuras japonesas antigas.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "vulcão",
        "phrase": "Vulcão de cone perfeitamente simétrico com o cume coberto de gelo."
      },
      {
        "name": "Favela Santa Marta",
        "sub": "cidade",
        "words": [
          "estátua",
          "plano inclinado",
          "colorida",
          "morro"
        ],
        "phrases": [
          "Primeira comunidade pacificada com casas coloridas e bondinho inclinado.",
          "Uma famosa estrela pop internacional gravou um clipe histórico no mirante.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "estátua",
        "phrase": "Primeira comunidade pacificada com casas coloridas e bondinho inclinado."
      },
      {
        "name": "Bairro da Liberdade",
        "sub": "cidade",
        "words": [
          "lanternas",
          "oriental",
          "torii",
          "pastel"
        ],
        "phrases": [
          "Postes vermelhos orientais e feiras de rua no coração de São Paulo.",
          "A maior comunidade de descendentes japoneses fora do Japão.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "lanternas",
        "phrase": "Postes vermelhos orientais e feiras de rua no coração de São Paulo."
      },
      {
        "name": "Pelourinho",
        "sub": "cidade",
        "words": [
          "ladeira",
          "casarões",
          "olodum",
          "histórico"
        ],
        "phrases": [
          "Casarões coloniais coloridos e ruas de pedras antigas em Salvador.",
          "O som do tambor do Olodum ecoando pelas esquinas históricas da Bahia.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "ladeira",
        "phrase": "Casarões coloniais coloridos e ruas de pedras antigas em Salvador."
      },
      {
        "name": "Las Vegas Strip",
        "sub": "cidade",
        "words": [
          "cassinos",
          "neon",
          "fontes",
          "deserto"
        ],
        "phrases": [
          "Avenida cercada por réplicas de pirâmides e torres no meio do deserto.",
          "Luzes de neon e fontes que dançam ao som de clássicos musicais.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "cassinos",
        "phrase": "Avenida cercada por réplicas de pirâmides e torres no meio do deserto."
      },
      {
        "name": "Torre de Pisa",
        "sub": "turismo",
        "words": [
          "inclinada",
          "mármore",
          "sino",
          "foto"
        ],
        "phrases": [
          "Campanário de mármore branco famoso por estar torto há séculos.",
          "Turistas posam na grama fingindo que estão empurrando a estrutura.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "inclinada",
        "phrase": "Campanário de mármore branco famoso por estar torto há séculos."
      },
      {
        "name": "Estátua da Liberdade",
        "sub": "turismo",
        "words": [
          "tocha",
          "coroa",
          "ilha",
          "cobre"
        ],
        "phrases": [
          "Presente francês com tocha erguida dando as boas-vindas na baía.",
          "Sua cor esverdeada vem da oxidação natural das placas de cobre.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "tocha",
        "phrase": "Presente francês com tocha erguida dando as boas-vindas na baía."
      },
      {
        "name": "Catedral da Sagrada Família",
        "sub": "turismo",
        "words": [
          "gaudí",
          "torres",
          "vitrais",
          "obras"
        ],
        "phrases": [
          "Obra-prima arquitetônica de Gaudí em construção há mais de cem anos.",
          "Vitrais coloridos que pintam o interior com raios de sol deslumbrantes.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "gaudí",
        "phrase": "Obra-prima arquitetônica de Gaudí em construção há mais de cem anos."
      },
      {
        "name": "Capadócia",
        "sub": "turismo",
        "words": [
          "balões",
          "cavernas",
          "chaminés",
          "aurora"
        ],
        "phrases": [
          "Céus tomados por centenas de balões de ar quente no amanhecer.",
          "Cidades subterrâneas e formações de pedra chamadas de chaminés de fadas.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "balões",
        "phrase": "Céus tomados por centenas de balões de ar quente no amanhecer."
      },
      {
        "name": "Pirâmides de Teotihuacan",
        "sub": "turismo",
        "words": [
          "sol e lua",
          "degraus",
          "astecas",
          "antigo"
        ],
        "phrases": [
          "Monumentais pirâmides de pedra onde povos antigos reverenciavam os astros.",
          "A Avenida dos Mortos corta o complexo misterioso no México.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "sol e lua",
        "phrase": "Monumentais pirâmides de pedra onde povos antigos reverenciavam os astros."
      },
      {
        "name": "Ilha de Páscoa",
        "sub": "misterio",
        "words": [
          "moais",
          "estátuas",
          "oceano",
          "rocha"
        ],
        "phrases": [
          "Centenas de cabeças gigantescas de pedra talhada olhando para o horizonte.",
          "Isolada no meio do Pacífico sem que se saiba como as peças foram movidas.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "moais",
        "phrase": "Centenas de cabeças gigantescas de pedra talhada olhando para o horizonte."
      },
      {
        "name": "Catacumbas de Paris",
        "sub": "misterio",
        "words": [
          "ossos",
          "túneis",
          "subterrâneo",
          "crânios"
        ],
        "phrases": [
          "Milhares de ossadas humanas empilhadas decorando labirintos subterrâneos.",
          "Galerias de pedra escura quilômetros abaixo do trânsito da cidade-luz.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "ossos",
        "phrase": "Milhares de ossadas humanas empilhadas decorando labirintos subterrâneos."
      },
      {
        "name": "Cidade Perdida de Atlântida",
        "sub": "misterio",
        "words": [
          "submersa",
          "mito",
          "avançada",
          "oceano"
        ],
        "phrases": [
          "Civilização lendária avançada que teria afundado para sempre em um único dia.",
          "Contada nos diálogos de Platão e procurada por exploradores há milênios.",
          "Um local de grande magnetismo que atrai viajantes de todos os cantos."
        ],
        "word": "submersa",
        "phrase": "Civilização lendária avançada que teria afundado para sempre em um único dia."
      }
    ]
  },
  "Animal": {
    "icon": "🐾",
    "color": "var(--l)",
    "subcategories": {
      "selvagens": {
        "label": "Selvagens & Gigantes",
        "icon": "🦁",
        "desc": "Leões, elefantes, ursos, lobos e grandes predadores"
      },
      "domesticos": {
        "label": "Domésticos & Fazenda",
        "icon": "🐶",
        "desc": "Cachorros, gatos, cavalos, vacas e animais rurais"
      },
      "aves": {
        "label": "Aves & Penas",
        "icon": "🦅",
        "desc": "Águias, corujas, pinguins, flamingos e tucanos"
      },
      "aquaticos": {
        "label": "Mares, Répteis & Insetos",
        "icon": "🦈",
        "desc": "Tubarões, polvos, cobras, sapos e aracnídeos"
      }
    },
    "items": [
      {
        "name": "Leão",
        "sub": "selvagens",
        "word": "juba",
        "phrase": "O rugido imponente que ecoa pelas savanas africanas.",
        "words": [
          "juba",
          "juba (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "O rugido imponente que ecoa pelas savanas africanas.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Elefante",
        "sub": "selvagens",
        "word": "marfim",
        "phrase": "Passos pesados e uma memória que nunca esquece os caminhos.",
        "words": [
          "marfim",
          "marfim (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Passos pesados e uma memória que nunca esquece os caminhos.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Girafa",
        "sub": "selvagens",
        "word": "acácia",
        "phrase": "Alcança as folhas mais altas com passos desengonçados.",
        "words": [
          "acácia",
          "acácia (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Alcança as folhas mais altas com passos desengonçados.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Tigre",
        "sub": "selvagens",
        "word": "listras",
        "phrase": "O maior dos felinos caçando camuflado na vegetação asiática.",
        "words": [
          "listras",
          "listras (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "O maior dos felinos caçando camuflado na vegetação asiática.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Onça",
        "sub": "selvagens",
        "word": "manchas",
        "phrase": "Mordida potente nas margens dos rios do pantanal.",
        "words": [
          "manchas",
          "manchas (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Mordida potente nas margens dos rios do pantanal.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Urso",
        "sub": "selvagens",
        "word": "hibernação",
        "phrase": "Pesa centenas de quilos e dorme durante os meses mais frios.",
        "words": [
          "hibernação",
          "hibernação (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Pesa centenas de quilos e dorme durante os meses mais frios.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Lobo",
        "sub": "selvagens",
        "word": "alcateia",
        "phrase": "Uiva em sintonia sob a luz da lua cheia com o bando.",
        "words": [
          "alcateia",
          "alcateia (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Uiva em sintonia sob a luz da lua cheia com o bando.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Raposa",
        "sub": "selvagens",
        "word": "astúcia",
        "phrase": "Cauda felpuda e passos silenciosos na beira dos bosques.",
        "words": [
          "astúcia",
          "astúcia (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Cauda felpuda e passos silenciosos na beira dos bosques.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Macaco",
        "sub": "selvagens",
        "word": "galho",
        "phrase": "Usa a cauda e as mãos para saltar entre as copas com agilidade.",
        "words": [
          "galho",
          "galho (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Usa a cauda e as mãos para saltar entre as copas com agilidade.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Gorila",
        "sub": "selvagens",
        "word": "peito",
        "phrase": "Bate com força no próprio corpo para demonstrar liderança.",
        "words": [
          "peito",
          "peito (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Bate com força no próprio corpo para demonstrar liderança.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Panda",
        "sub": "selvagens",
        "word": "bambu",
        "phrase": "Pelagem preta e branca mastigando caules o dia inteiro.",
        "words": [
          "bambu",
          "bambu (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Pelagem preta e branca mastigando caules o dia inteiro.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Canguru",
        "sub": "selvagens",
        "word": "marsúpio",
        "phrase": "Grandes saltos com o filhote espiando pela bolsa da barriga.",
        "words": [
          "marsúpio",
          "marsúpio (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Grandes saltos com o filhote espiando pela bolsa da barriga.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Hipopótamo",
        "sub": "selvagens",
        "word": "lagoa",
        "phrase": "Passa o dia submerso mas corre surpreendentemente rápido em terra.",
        "words": [
          "lagoa",
          "lagoa (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Passa o dia submerso mas corre surpreendentemente rápido em terra.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Rinoceronte",
        "sub": "selvagens",
        "word": "chifre",
        "phrase": "Pele blindada como couraça com uma lâmina curva no focinho.",
        "words": [
          "chifre",
          "chifre (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Pele blindada como couraça com uma lâmina curva no focinho.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Zebra",
        "sub": "selvagens",
        "word": "camuflagem",
        "phrase": "Listras contrastantes que confundem os predadores na corrida.",
        "words": [
          "camuflagem",
          "camuflagem (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Listras contrastantes que confundem os predadores na corrida.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Camelo",
        "sub": "selvagens",
        "word": "corcova",
        "phrase": "Resiste a semanas sem água sob o sol inclemente das dunas.",
        "words": [
          "corcova",
          "corcova (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Resiste a semanas sem água sob o sol inclemente das dunas.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Capivara",
        "sub": "selvagens",
        "word": "tranquilidade",
        "phrase": "O maior roedor do mundo descansando sereno na beira do lago.",
        "words": [
          "tranquilidade",
          "tranquilidade (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "O maior roedor do mundo descansando sereno na beira do lago.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Tamanduá",
        "sub": "selvagens",
        "word": "formigueiro",
        "phrase": "Língua longa e pegajosa para capturar insetos nos túneis.",
        "words": [
          "formigueiro",
          "formigueiro (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Língua longa e pegajosa para capturar insetos nos túneis.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Preguiça",
        "sub": "selvagens",
        "word": "lentidão",
        "phrase": "Move-se tão devagar que musgo chega a crescer em seus pelos.",
        "words": [
          "lentidão",
          "lentidão (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Move-se tão devagar que musgo chega a crescer em seus pelos.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Cachorro",
        "sub": "domesticos",
        "word": "fidelidade",
        "phrase": "Abana o rabo e corre para a porta assim que ouve a chave.",
        "words": [
          "fidelidade",
          "fidelidade (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Abana o rabo e corre para a porta assim que ouve a chave.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Gato",
        "sub": "domesticos",
        "word": "ronronar",
        "phrase": "Cai sempre de pé com passos macios e olhar independente.",
        "words": [
          "ronronar",
          "ronronar (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Cai sempre de pé com passos macios e olhar independente.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Cavalo",
        "sub": "domesticos",
        "word": "ferradura",
        "phrase": "Crina solta ao vento galopando pelas pastagens abertas.",
        "words": [
          "ferradura",
          "ferradura (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Crina solta ao vento galopando pelas pastagens abertas.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Vaca",
        "sub": "domesticos",
        "word": "ruminar",
        "phrase": "Muge no pasto enquanto fornece o leite da manhã.",
        "words": [
          "ruminar",
          "ruminar (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Muge no pasto enquanto fornece o leite da manhã.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Porco",
        "sub": "domesticos",
        "word": "lama",
        "phrase": "Focinho achatado que adora se refrescar na terra molhada.",
        "words": [
          "lama",
          "lama (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Focinho achatado que adora se refrescar na terra molhada.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Coelho",
        "sub": "domesticos",
        "word": "cenoura",
        "phrase": "Orelhas compridas em pé farejando perigo a qualquer salto.",
        "words": [
          "cenoura",
          "cenoura (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Orelhas compridas em pé farejando perigo a qualquer salto.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Galinha",
        "sub": "domesticos",
        "word": "poleiro",
        "phrase": "Cacareja ao amanhecer botando ovos no ninho de palha.",
        "words": [
          "poleiro",
          "poleiro (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Cacareja ao amanhecer botando ovos no ninho de palha.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Pato",
        "sub": "domesticos",
        "word": "membrana",
        "phrase": "Bico chato que nada na lagoa e voa em formação no céu.",
        "words": [
          "membrana",
          "membrana (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Bico chato que nada na lagoa e voa em formação no céu.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Águia",
        "sub": "aves",
        "word": "altitude",
        "phrase": "Visão aguçada mergulhando em queda livre para capturar a presa.",
        "words": [
          "altitude",
          "altitude (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Visão aguçada mergulhando em queda livre para capturar a presa.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Coruja",
        "sub": "aves",
        "word": "rotação",
        "phrase": "Gira o pescoço quase por completo caçando na calada da noite.",
        "words": [
          "rotação",
          "rotação (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Gira o pescoço quase por completo caçando na calada da noite.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Pinguim",
        "sub": "aves",
        "word": "fraque",
        "phrase": "Ave elegante que não sabe voar no ar, mas nada como peixe no gelo.",
        "words": [
          "fraque",
          "fraque (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Ave elegante que não sabe voar no ar, mas nada como peixe no gelo.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Tucano",
        "sub": "aves",
        "word": "bico",
        "phrase": "Cores vivas equilibradas no galho com uma enorme ferramenta leve.",
        "words": [
          "bico",
          "bico (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Cores vivas equilibradas no galho com uma enorme ferramenta leve.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Papagaio",
        "sub": "aves",
        "word": "repetição",
        "phrase": "Penas verdes que imitam a voz de quem passa pela varanda.",
        "words": [
          "repetição",
          "repetição (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Penas verdes que imitam a voz de quem passa pela varanda.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Flamingo",
        "sub": "aves",
        "word": "rosa",
        "phrase": "Equilibra-se em uma perna fina só na beira das águas rasas.",
        "words": [
          "rosa",
          "rosa (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Equilibra-se em uma perna fina só na beira das águas rasas.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Cisne",
        "sub": "aves",
        "word": "pescoço",
        "phrase": "Desliza pelo lago com elegância impecável e penas alvas.",
        "words": [
          "pescoço",
          "pescoço (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Desliza pelo lago com elegância impecável e penas alvas.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Pavão",
        "sub": "aves",
        "word": "leque",
        "phrase": "Abre uma cauda monumental cheia de olhos coloridos para cortejar.",
        "words": [
          "leque",
          "leque (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Abre uma cauda monumental cheia de olhos coloridos para cortejar.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Tubarão",
        "sub": "aquaticos",
        "word": "barbatana",
        "phrase": "Triângulo escuro cortando a superfície do mar sem parar de nadar.",
        "words": [
          "barbatana",
          "barbatana (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Triângulo escuro cortando a superfície do mar sem parar de nadar.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Golfinho",
        "sub": "aquaticos",
        "word": "sonar",
        "phrase": "Salta em arcos sobre as ondas emitindo assobios inteligentes.",
        "words": [
          "sonar",
          "sonar (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Salta em arcos sobre as ondas emitindo assobios inteligentes.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Baleia",
        "sub": "aquaticos",
        "word": "esguicho",
        "phrase": "O gigante dos oceanos que sopra água para o alto ao respirar.",
        "words": [
          "esguicho",
          "esguicho (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "O gigante dos oceanos que sopra água para o alto ao respirar.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Polvo",
        "sub": "aquaticos",
        "word": "ventosas",
        "phrase": "Oito braços inteligentes e uma nuvem escura para despistar.",
        "words": [
          "ventosas",
          "ventosas (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Oito braços inteligentes e uma nuvem escura para despistar.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Tartaruga",
        "sub": "aquaticos",
        "word": "casco",
        "phrase": "Leva a própria casa nas costas com passos calmos pela areia.",
        "words": [
          "casco",
          "casco (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Leva a própria casa nas costas com passos calmos pela areia.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Jacaré",
        "sub": "aquaticos",
        "word": "pântano",
        "phrase": "Apenas dois olhos à espreita acima da linha d'água turva.",
        "words": [
          "pântano",
          "pântano (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Apenas dois olhos à espreita acima da linha d'água turva.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Cobra",
        "sub": "aquaticos",
        "word": "guizo",
        "phrase": "Rasteja sem membros com uma língua fina sentindo o ar.",
        "words": [
          "guizo",
          "guizo (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Rasteja sem membros com uma língua fina sentindo o ar.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Sapo",
        "sub": "aquaticos",
        "word": "brejo",
        "phrase": "Coaxa na beira da lagoa lançando a língua contra mosquitos.",
        "words": [
          "brejo",
          "brejo (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Coaxa na beira da lagoa lançando a língua contra mosquitos.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Aranha",
        "sub": "aquaticos",
        "word": "fio",
        "phrase": "Oito pernas arquitetando uma armadilha geométrica no canto da parede.",
        "words": [
          "fio",
          "fio (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Oito pernas arquitetando uma armadilha geométrica no canto da parede.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Escorpião",
        "sub": "aquaticos",
        "word": "ferrão curvo",
        "phrase": "Duas pinças na frente e uma cauda arqueada pronta para picar.",
        "words": [
          "ferrão curvo",
          "ferrão curvo (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Duas pinças na frente e uma cauda arqueada pronta para picar.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Caranguejo",
        "sub": "aquaticos",
        "word": "lateral",
        "phrase": "Anda de lado pela areia da praia recolhendo pequenos bocados.",
        "words": [
          "lateral",
          "lateral (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Anda de lado pela areia da praia recolhendo pequenos bocados.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Abelha",
        "sub": "aquaticos",
        "word": "colmeia",
        "phrase": "Bate as asas frenética produzindo doce dourado na colmeia.",
        "words": [
          "colmeia",
          "colmeia (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Bate as asas frenética produzindo doce dourado na colmeia.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Formiga",
        "sub": "aquaticos",
        "word": "fila",
        "phrase": "Carrega folhas muito mais pesadas que seu próprio corpo.",
        "words": [
          "fila",
          "fila (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Carrega folhas muito mais pesadas que seu próprio corpo.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Tamanduá-Bandeira",
        "sub": "selvagens",
        "word": "formigueiro",
        "phrase": "Focinho comprido e cauda felpuda especializada em insetos sociais.",
        "words": [
          "formigueiro",
          "formigueiro (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Focinho comprido e cauda felpuda especializada em insetos sociais.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Lobo-Guará",
        "sub": "selvagens",
        "word": "cerrado",
        "phrase": "Pernas longas e pelagem avermelhada estampada na cédula de duzentos.",
        "words": [
          "cerrado",
          "cerrado (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Pernas longas e pelagem avermelhada estampada na cédula de duzentos.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Urso Panda",
        "sub": "selvagens",
        "word": "bambu",
        "phrase": "Mamífero preto e branco que passa o dia mastigando caules verdes.",
        "words": [
          "bambu",
          "bambu (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Mamífero preto e branco que passa o dia mastigando caules verdes.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Camaleão",
        "sub": "selvagens",
        "word": "camuflagem",
        "phrase": "Muda de tom de acordo com o ambiente e move os olhos de forma independente.",
        "words": [
          "camuflagem",
          "camuflagem (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Muda de tom de acordo com o ambiente e move os olhos de forma independente.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Hamster",
        "sub": "domesticos",
        "word": "bochecha",
        "phrase": "Guarda comida nas bochechas e corre durante a noite na rodinha da gaiola.",
        "words": [
          "bochecha",
          "bochecha (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Guarda comida nas bochechas e corre durante a noite na rodinha da gaiola.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Ovelha",
        "sub": "domesticos",
        "word": "lã",
        "phrase": "Seu pelo fofo e macio é tosquiado para aquecer os invernos rigorosos.",
        "words": [
          "lã",
          "lã (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Seu pelo fofo e macio é tosquiado para aquecer os invernos rigorosos.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Galo",
        "sub": "domesticos",
        "word": "crista",
        "phrase": "Canta bem cedo anunciando o nascer do sol no poleiro da fazenda.",
        "words": [
          "crista",
          "crista (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Canta bem cedo anunciando o nascer do sol no poleiro da fazenda.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Arara-Azul",
        "sub": "aves",
        "word": "pantanal",
        "phrase": "Ave de bico forte e plumagem exuberante símbolo da fauna brasileira.",
        "words": [
          "pantanal",
          "pantanal (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Ave de bico forte e plumagem exuberante símbolo da fauna brasileira.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Beija-flor",
        "sub": "aves",
        "word": "néctar",
        "phrase": "Bate as asas tão depressa que parece flutuar imóvel diante da flor.",
        "words": [
          "néctar",
          "néctar (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Bate as asas tão depressa que parece flutuar imóvel diante da flor.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Pica-Pau",
        "sub": "aves",
        "word": "tronco",
        "phrase": "Tamborila velozmente a casca das árvores à procura de larvas escondidas.",
        "words": [
          "tronco",
          "tronco (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Tamborila velozmente a casca das árvores à procura de larvas escondidas.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Baleia Azul",
        "sub": "aquaticos",
        "word": "gigante",
        "phrase": "O maior animal que já existiu emitindo cantos pelas profundezas marinhas.",
        "words": [
          "gigante",
          "gigante (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "O maior animal que já existiu emitindo cantos pelas profundezas marinhas.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Cavalo-Marinho",
        "sub": "aquaticos",
        "word": "macho",
        "phrase": "O pai é quem carrega os ovos na bolsa até o momento do nascimento.",
        "words": [
          "macho",
          "macho (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "O pai é quem carrega os ovos na bolsa até o momento do nascimento.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Água-Viva",
        "sub": "aquaticos",
        "word": "queimadura",
        "phrase": "Corpo transparente e gelatinoso que flutua causando ardência ao toque.",
        "words": [
          "queimadura",
          "queimadura (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Corpo transparente e gelatinoso que flutua causando ardência ao toque.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Tartaruga Marinha",
        "sub": "aquaticos",
        "word": "desova",
        "phrase": "Cruza oceanos inteiros e volta exatamente à praia em que nasceu.",
        "words": [
          "desova",
          "desova (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Cruza oceanos inteiros e volta exatamente à praia em que nasceu.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Arraia",
        "sub": "aquaticos",
        "word": "ferrão",
        "phrase": "Desliza pelo fundo arenoso parecendo uma grande asa subaquática.",
        "words": [
          "ferrão",
          "ferrão (sutil)",
          "detalhe",
          "instinto"
        ],
        "phrases": [
          "Desliza pelo fundo arenoso parecendo uma grande asa subaquática.",
          "Preste atenção especial nas características desta rodada.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ]
      },
      {
        "name": "Leopardo-das-Neves",
        "sub": "selvagens",
        "words": [
          "cauda longa",
          "montanha",
          "pêlo grosso",
          "fantasma"
        ],
        "phrases": [
          "O fantasma das montanhas asiáticas com uma cauda grossa que protege do frio.",
          "Pula distâncias monumentais entre penhascos rochosos congelados.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "cauda longa",
        "phrase": "O fantasma das montanhas asiáticas com uma cauda grossa que protege do frio."
      },
      {
        "name": "Suricato",
        "sub": "selvagens",
        "words": [
          "sentinela",
          "duas patas",
          "toca",
          "deserto"
        ],
        "phrases": [
          "Fica de pé nas patas traseiras vigiando o céu contra ataques de gaviões.",
          "Vive em colônias barulhentas no deserto de Kalahari.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "sentinela",
        "phrase": "Fica de pé nas patas traseiras vigiando o céu contra ataques de gaviões."
      },
      {
        "name": "Lêmure",
        "sub": "selvagens",
        "words": [
          "olhos grandes",
          "cauda listrada",
          "madagascar",
          "salto"
        ],
        "phrases": [
          "Primata com cauda listrada de preto e branco e olhos amarelos esbugalhados.",
          "Exclusivo das florestas da ilha de Madagascar pulando de galho em galho.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "olhos grandes",
        "phrase": "Primata com cauda listrada de preto e branco e olhos amarelos esbugalhados."
      },
      {
        "name": "Diabo-da-Tasmânia",
        "sub": "selvagens",
        "words": [
          "mordida forte",
          "grito",
          "marsupial",
          "australiano"
        ],
        "phrases": [
          "Pequeno marsupial preto com uma das mordidas mais fortes do reino animal.",
          "Solta guinchos estridentes que aterrorizavam colonizadores na mata.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "mordida forte",
        "phrase": "Pequeno marsupial preto com uma das mordidas mais fortes do reino animal."
      },
      {
        "name": "Tamanduá-Mirim",
        "sub": "selvagens",
        "words": [
          "abraço",
          "árvore",
          "língua",
          "formigas"
        ],
        "phrases": [
          "Fica de pé de braços abertos num abraço enganoso se for ameaçado.",
          "Usa a cauda preênsil para se pendurar nos galhos atrás de cupins.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "abraço",
        "phrase": "Fica de pé de braços abertos num abraço enganoso se for ameaçado."
      },
      {
        "name": "Cabra",
        "sub": "domesticos",
        "words": [
          "chifres",
          "montanha",
          "barba",
          "salto"
        ],
        "phrases": [
          "Animal teimoso que sobe em paredões verticais lambendo pedras de sal.",
          "Fornece leite encorpado e queijos fortes de sabor característico.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "chifres",
        "phrase": "Animal teimoso que sobe em paredões verticais lambendo pedras de sal."
      },
      {
        "name": "Burro / Jumento",
        "sub": "domesticos",
        "words": [
          "orelhas",
          "carga",
          "resistência",
          "zurro"
        ],
        "phrases": [
          "Famoso pela paciência e capacidade de carregar cargas pesadas sob sol forte.",
          "Suas orelhas compridas ajudam a regular o calor nos caminhos de terra.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "orelhas",
        "phrase": "Famoso pela paciência e capacidade de carregar cargas pesadas sob sol forte."
      },
      {
        "name": "Pato Doméstico",
        "sub": "domesticos",
        "words": [
          "bico chato",
          "penas",
          "lago",
          "quack"
        ],
        "phrases": [
          "Nada tranquilamente no laguinho da fazenda mergulhando a cabeça na água.",
          "Pés palmados que funcionam como nadadeiras sob a superfície.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "bico chato",
        "phrase": "Nada tranquilamente no laguinho da fazenda mergulhando a cabeça na água."
      },
      {
        "name": "Coelho Angorá",
        "sub": "domesticos",
        "words": [
          "pêlo longo",
          "fofo",
          "cenoura",
          "orelhas"
        ],
        "phrases": [
          "Parece uma bola de algodão viva com pelos compridos e macios.",
          "Move o narizinho sem parar mastigando folhas verdes frescas.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "pêlo longo",
        "phrase": "Parece uma bola de algodão viva com pelos compridos e macios."
      },
      {
        "name": "Ganso de Guarda",
        "sub": "domesticos",
        "words": [
          "pescoço",
          "bicada",
          "alerta",
          "bravo"
        ],
        "phrases": [
          "Muito mais barulhento e agressivo do que muitos cães de guarda na propriedade.",
          "Abaixa o pescoço e corre atrás de intrusos batendo as asas com fúria.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "pescoço",
        "phrase": "Muito mais barulhento e agressivo do que muitos cães de guarda na propriedade."
      },
      {
        "name": "Coruja-Buraqueira",
        "sub": "aves",
        "words": [
          "toca",
          "olhar fixo",
          "campo",
          "giro"
        ],
        "phrases": [
          "Mora em tocas cavadas no chão e gira o pescoço quase por completo.",
          "Fica de guarda na cerca olhando fixamente para quem se aproxima.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "toca",
        "phrase": "Mora em tocas cavadas no chão e gira o pescoço quase por completo."
      },
      {
        "name": "Albatroz",
        "sub": "aves",
        "words": [
          "envergadura",
          "mar",
          "planar",
          "oceano"
        ],
        "phrases": [
          "A maior envergadura de asas do planeta, quase não bate as asas para voar.",
          "Passa anos seguidos em alto-mar sem nunca pousar em terra firme.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "envergadura",
        "phrase": "A maior envergadura de asas do planeta, quase não bate as asas para voar."
      },
      {
        "name": "Pica-Pau-Amarelo",
        "sub": "aves",
        "words": [
          "topete",
          "tronco",
          "bico",
          "tamborilar"
        ],
        "phrases": [
          "Topete amarelo brilhante e bico forte perfurando cascas de árvores.",
          "Comum nas matas brasileiras com seu tamborilar característico.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "topete",
        "phrase": "Topete amarelo brilhante e bico forte perfurando cascas de árvores."
      },
      {
        "name": "Gavião-Real (Harpia)",
        "sub": "aves",
        "words": [
          "garras",
          "coroa",
          "predador",
          "amazônia"
        ],
        "phrases": [
          "A águia mais imponente e forte das Américas com garras maiores que as de um urso.",
          "Caça preguiças e macacos nas copas mais altas da floresta amazônica.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "garras",
        "phrase": "A águia mais imponente e forte das Américas com garras maiores que as de um urso."
      },
      {
        "name": "Quetzal",
        "sub": "aves",
        "words": [
          "cauda longa",
          "verde e vermelho",
          "sagrado",
          "maia"
        ],
        "phrases": [
          "Ave sagrada das civilizações pré-colombianas com cauda verde de um metro.",
          "Suas penas exuberantes adornavam os toucados dos reis antigos.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "cauda longa",
        "phrase": "Ave sagrada das civilizações pré-colombianas com cauda verde de um metro."
      },
      {
        "name": "Lula-Colossal",
        "sub": "aquaticos",
        "words": [
          "olhos gigantes",
          "bico",
          "profundo",
          "tentáculos"
        ],
        "phrases": [
          "Os maiores olhos do reino animal habitando fossas oceânicas congeladas.",
          "Garras giratórias na ponta dos tentáculos para duelar com cachalotes.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "olhos gigantes",
        "phrase": "Os maiores olhos do reino animal habitando fossas oceânicas congeladas."
      },
      {
        "name": "Peixe-Palhaço",
        "sub": "aquaticos",
        "words": [
          "anêmona",
          "laranja",
          "listras",
          "imune"
        ],
        "phrases": [
          "Listras brancas e laranjas inconfundíveis vivendo protegido entre tentáculos venenosos.",
          "Ficou famoso no mundo todo numa jornada de resgate no cinema.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "anêmona",
        "phrase": "Listras brancas e laranjas inconfundíveis vivendo protegido entre tentáculos venenosos."
      },
      {
        "name": "Peixe-Leão",
        "sub": "aquaticos",
        "words": [
          "espinhos venenosos",
          "listrado",
          "barbatanas",
          "recife"
        ],
        "phrases": [
          "Barbatanas abertas como leques espetaculares com espinhos carregados de veneno.",
          "Espécie invasora de grande beleza que desfila lentamente pelos corais.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "espinhos venenosos",
        "phrase": "Barbatanas abertas como leques espetaculares com espinhos carregados de veneno."
      },
      {
        "name": "Narval",
        "sub": "aquaticos",
        "words": [
          "dente longo",
          "ártico",
          "unicórnio",
          "gelo"
        ],
        "phrases": [
          "O unicórnio do oceano com uma presa em espiral que cresce pela boca.",
          "Nada em grupos sob as placas de gelo do oceano ártico.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "dente longo",
        "phrase": "O unicórnio do oceano com uma presa em espiral que cresce pela boca."
      },
      {
        "name": "Peixe-Boi",
        "sub": "aquaticos",
        "words": [
          "dócil",
          "plantas",
          "focinho",
          "rio"
        ],
        "phrases": [
          "Mamífero aquático dócil e vagaroso que passa o dia pastando plantas no rio.",
          "Inspirou os primeiros navegantes a criarem lendas sobre sereias.",
          "Possui sentidos aguçados e sobrevive em perfeito equilíbrio com seu bioma."
        ],
        "word": "dócil",
        "phrase": "Mamífero aquático dócil e vagaroso que passa o dia pastando plantas no rio."
      }
    ]
  },
  "Profissão": {
    "icon": "💼",
    "color": "var(--v)",
    "subcategories": {
      "saude": {
        "label": "Saúde & Cuidados",
        "icon": "🩺",
        "desc": "Médicos, enfermeiros, dentistas, psicólogos e terapeutas"
      },
      "ciencias": {
        "label": "Educação & Ciência",
        "icon": "🎓",
        "desc": "Professores, cientistas, astrônomos, arqueólogos e biólogos"
      },
      "artes": {
        "label": "Artes & Espetáculos",
        "icon": "🎨",
        "desc": "Atores, cantores, pintores, mágicos, dubladores e músicos"
      },
      "servicos": {
        "label": "Serviços & Operações",
        "icon": "🛠️",
        "desc": "Bombeiros, policiais, pilotos, cozinheiros e técnicos"
      }
    },
    "items": [
      {
        "name": "Médico",
        "sub": "saude",
        "word": "estetoscópio",
        "phrase": "Jaleco branco ouvindo o ritmo do coração dos pacientes.",
        "words": [
          "estetoscópio",
          "estetoscópio (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Jaleco branco ouvindo o ritmo do coração dos pacientes.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Enfermeiro",
        "sub": "saude",
        "word": "leito",
        "phrase": "Aplica medicações e cuida de perto da recuperação no hospital.",
        "words": [
          "leito",
          "leito (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Aplica medicações e cuida de perto da recuperação no hospital.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Dentista",
        "sub": "saude",
        "word": "broca",
        "phrase": "Pede para abrir a boca enquanto ajeita a luz cirúrgica no rosto.",
        "words": [
          "broca",
          "broca (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Pede para abrir a boca enquanto ajeita a luz cirúrgica no rosto.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Veterinário",
        "sub": "saude",
        "word": "focinho",
        "phrase": "Examina latidos e miados para curar quem não sabe falar.",
        "words": [
          "focinho",
          "focinho (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Examina latidos e miados para curar quem não sabe falar.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Cirurgião",
        "sub": "saude",
        "word": "bisturi",
        "phrase": "Mãos firmes na sala de operação sob luzes concentradas.",
        "words": [
          "bisturi",
          "bisturi (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Mãos firmes na sala de operação sob luzes concentradas.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Psicólogo",
        "sub": "saude",
        "word": "divã",
        "phrase": "Escuta atenta para desembaraçar os nós da mente humana.",
        "words": [
          "divã",
          "divã (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Escuta atenta para desembaraçar os nós da mente humana.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Personal trainer",
        "sub": "saude",
        "word": "repetições",
        "phrase": "Conta séries de exercícios cobrando postura e dedicação.",
        "words": [
          "repetições",
          "repetições (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Conta séries de exercícios cobrando postura e dedicação.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Professor",
        "sub": "ciencias",
        "word": "lousa",
        "phrase": "Explica a matéria e cobra atenção antes da prova bimestral.",
        "words": [
          "lousa",
          "lousa (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Explica a matéria e cobra atenção antes da prova bimestral.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Cientista",
        "sub": "ciencias",
        "word": "tubos de ensaio",
        "phrase": "Formula hipóteses e analisa reações no laboratório.",
        "words": [
          "tubos de ensaio",
          "tubos de ensaio (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Formula hipóteses e analisa reações no laboratório.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Astrônomo",
        "sub": "ciencias",
        "word": "telescópio",
        "phrase": "Aponta lentes para o céu mapeando galáxias e corpos celestes.",
        "words": [
          "telescópio",
          "telescópio (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Aponta lentes para o céu mapeando galáxias e corpos celestes.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Arqueólogo",
        "sub": "ciencias",
        "word": "pincel",
        "phrase": "Remove poeira com delicadeza de ossadas e ruínas soterradas.",
        "words": [
          "pincel",
          "pincel (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Remove poeira com delicadeza de ossadas e ruínas soterradas.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Engenheiro",
        "sub": "ciencias",
        "word": "cálculos",
        "phrase": "Planeja estruturas para garantir que pontes e prédios fiquem em pé.",
        "words": [
          "cálculos",
          "cálculos (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Planeja estruturas para garantir que pontes e prédios fiquem em pé.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Arquiteto",
        "sub": "ciencias",
        "word": "planta",
        "phrase": "Desenha a distribuição dos cômodos e fachadas harmoniosas.",
        "words": [
          "planta",
          "planta (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Desenha a distribuição dos cômodos e fachadas harmoniosas.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Programador",
        "sub": "ciencias",
        "word": "código",
        "phrase": "Digita comandos no teclado transformando lógica em telas interativas.",
        "words": [
          "código",
          "código (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Digita comandos no teclado transformando lógica em telas interativas.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Advogado",
        "sub": "ciencias",
        "word": "processo",
        "phrase": "Defende os interesses do cliente com base nas leis vigentes.",
        "words": [
          "processo",
          "processo (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Defende os interesses do cliente com base nas leis vigentes.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Juiz",
        "sub": "ciencias",
        "word": "martelo",
        "phrase": "Analisa argumentos e bate a madeira decretando a sentença.",
        "words": [
          "martelo",
          "martelo (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Analisa argumentos e bate a madeira decretando a sentença.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Ator",
        "sub": "artes",
        "word": "roteiro",
        "phrase": "Assume vidas alheias na frente das câmeras ou no palco.",
        "words": [
          "roteiro",
          "roteiro (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Assume vidas alheias na frente das câmeras ou no palco.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Cantor",
        "sub": "artes",
        "word": "palco",
        "phrase": "Solta a voz afinada em frente a milhares de microfones e luzes.",
        "words": [
          "palco",
          "palco (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Solta a voz afinada em frente a milhares de microfones e luzes.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Músico",
        "sub": "artes",
        "word": "partitura",
        "phrase": "Faz vibrar cordas e teclas criando harmonias emocionantes.",
        "words": [
          "partitura",
          "partitura (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Faz vibrar cordas e teclas criando harmonias emocionantes.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Pintor",
        "sub": "artes",
        "word": "cavalete",
        "phrase": "Mistura pigmentos na paleta dando vida a telas em branco.",
        "words": [
          "cavalete",
          "cavalete (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Mistura pigmentos na paleta dando vida a telas em branco.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Escritor",
        "sub": "artes",
        "word": "capítulo",
        "phrase": "Cria mundos inteiros usando apenas vinte e seis letras.",
        "words": [
          "capítulo",
          "capítulo (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Cria mundos inteiros usando apenas vinte e seis letras.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Mágico",
        "sub": "artes",
        "word": "cartola",
        "phrase": "Faz objetos desaparecerem diante dos olhos atentos da plateia.",
        "words": [
          "cartola",
          "cartola (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Faz objetos desaparecerem diante dos olhos atentos da plateia.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Palhaço",
        "sub": "artes",
        "word": "nariz vermelho",
        "phrase": "Tropeça de propósito e faz travessuras para arrancar gargalhadas.",
        "words": [
          "nariz vermelho",
          "nariz vermelho (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Tropeça de propósito e faz travessuras para arrancar gargalhadas.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Dublador",
        "sub": "artes",
        "word": "sincronia",
        "phrase": "Empresta o sotaque e o tom para a boca dos personagens estrangeiros.",
        "words": [
          "sincronia",
          "sincronia (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Empresta o sotaque e o tom para a boca dos personagens estrangeiros.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Bailarino",
        "sub": "artes",
        "word": "sapatilha",
        "phrase": "Gira na ponta dos pés com leveza desafiando a gravidade.",
        "words": [
          "sapatilha",
          "sapatilha (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Gira na ponta dos pés com leveza desafiando a gravidade.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Fotógrafo",
        "sub": "artes",
        "word": "enquadramento",
        "phrase": "Ajusta o foco procurando a luz ideal antes do clique.",
        "words": [
          "enquadramento",
          "enquadramento (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Ajusta o foco procurando a luz ideal antes do clique.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Jornalista",
        "sub": "artes",
        "word": "pauta",
        "phrase": "Investiga acontecimentos para relatar os fatos à população.",
        "words": [
          "pauta",
          "pauta (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Investiga acontecimentos para relatar os fatos à população.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Bombeiro",
        "sub": "servicos",
        "word": "mangueira",
        "phrase": "Enfrenta chamas altas para resgatar vidas em perigo.",
        "words": [
          "mangueira",
          "mangueira (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Enfrenta chamas altas para resgatar vidas em perigo.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Policial",
        "sub": "servicos",
        "word": "distintivo",
        "phrase": "Patrulha as ruas mantendo a ordem com farda e viatura.",
        "words": [
          "distintivo",
          "distintivo (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Patrulha as ruas mantendo a ordem com farda e viatura.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Piloto",
        "sub": "servicos",
        "word": "manche",
        "phrase": "Comanda a cabine guiando centenas de passageiros pelo céu.",
        "words": [
          "manche",
          "manche (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Comanda a cabine guiando centenas de passageiros pelo céu.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Astronauta",
        "sub": "servicos",
        "word": "gravidade zero",
        "phrase": "Veste traje pressurizado fora da atmosfera terrestre.",
        "words": [
          "gravidade zero",
          "gravidade zero (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Veste traje pressurizado fora da atmosfera terrestre.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Cozinheiro",
        "sub": "servicos",
        "word": "avental",
        "phrase": "Controla o fogo e os temperos servindo sabores impecáveis.",
        "words": [
          "avental",
          "avental (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Controla o fogo e os temperos servindo sabores impecáveis.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Padeiro",
        "sub": "servicos",
        "word": "forno aceso",
        "phrase": "Sova a massa na madrugada para o café da manhã dos outros.",
        "words": [
          "forno aceso",
          "forno aceso (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Sova a massa na madrugada para o café da manhã dos outros.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Barista",
        "sub": "servicos",
        "word": "vapor",
        "phrase": "Extrai grãos especiais desenhando com espuma sobre a xícara.",
        "words": [
          "vapor",
          "vapor (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Extrai grãos especiais desenhando com espuma sobre a xícara.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Garçom",
        "sub": "servicos",
        "word": "bandeja",
        "phrase": "Equilibra taças e anota pedidos circulando entre as mesas.",
        "words": [
          "bandeja",
          "bandeja (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Equilibra taças e anota pedidos circulando entre as mesas.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Motorista",
        "sub": "servicos",
        "word": "volante",
        "phrase": "Horas no trânsito transportando pessoas pelas rotas da cidade.",
        "words": [
          "volante",
          "volante (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Horas no trânsito transportando pessoas pelas rotas da cidade.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Pedreiro",
        "sub": "servicos",
        "word": "tijolos",
        "phrase": "Ergue paredes firmes assentando massa com colher de ferro.",
        "words": [
          "tijolos",
          "tijolos (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Ergue paredes firmes assentando massa com colher de ferro.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Eletricista",
        "sub": "servicos",
        "word": "voltagem",
        "phrase": "Manuseia fios desencapados evitando curtos perigosos.",
        "words": [
          "voltagem",
          "voltagem (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Manuseia fios desencapados evitando curtos perigosos.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Encanador",
        "sub": "servicos",
        "word": "vedação",
        "phrase": "Aperta conexões para estancar goteiras e vazamentos na tubulação.",
        "words": [
          "vedação",
          "vedação (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Aperta conexões para estancar goteiras e vazamentos na tubulação.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Cabeleireiro",
        "sub": "servicos",
        "word": "navalha",
        "phrase": "Modela cortes e fios em frente a um grande espelho iluminado.",
        "words": [
          "navalha",
          "navalha (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Modela cortes e fios em frente a um grande espelho iluminado.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Carteiro",
        "sub": "servicos",
        "word": "encomendas",
        "phrase": "Bate palmas no portão entregando pacotes de porta em porta.",
        "words": [
          "encomendas",
          "encomendas (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Bate palmas no portão entregando pacotes de porta em porta.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Vendedor",
        "sub": "servicos",
        "word": "comissão",
        "phrase": "Apresenta produtos buscando convencer o cliente a fechar negócio.",
        "words": [
          "comissão",
          "comissão (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Apresenta produtos buscando convencer o cliente a fechar negócio.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Faxineiro",
        "sub": "servicos",
        "word": "balde",
        "phrase": "Deixa o piso brilhando e os ambientes impecavelmente limpos.",
        "words": [
          "balde",
          "balde (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Deixa o piso brilhando e os ambientes impecavelmente limpos.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Jardineiro",
        "sub": "servicos",
        "word": "poda",
        "phrase": "Apara gramados e cuida da terra para as flores desabrocharem.",
        "words": [
          "poda",
          "poda (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Apara gramados e cuida da terra para as flores desabrocharem.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Pescador",
        "sub": "servicos",
        "word": "anzol",
        "phrase": "Espera pacientemente sobre as águas puxar a linha na hora certa.",
        "words": [
          "anzol",
          "anzol (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Espera pacientemente sobre as águas puxar a linha na hora certa.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Soldado",
        "sub": "servicos",
        "word": "marcha",
        "phrase": "Disciplina rígida e farda camuflada em defesa do território.",
        "words": [
          "marcha",
          "marcha (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Disciplina rígida e farda camuflada em defesa do território.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Fisioterapeuta",
        "sub": "saude",
        "word": "reabilitação",
        "phrase": "Ajuda músculos e articulações a recuperarem movimentos perdidos.",
        "words": [
          "reabilitação",
          "reabilitação (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Ajuda músculos e articulações a recuperarem movimentos perdidos.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Nutricionista",
        "sub": "saude",
        "word": "dieta",
        "phrase": "Equilibra nutrientes e calorias para garantir energia e saúde plena.",
        "words": [
          "dieta",
          "dieta (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Equilibra nutrientes e calorias para garantir energia e saúde plena.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Farmacêutico",
        "sub": "saude",
        "word": "fórmula",
        "phrase": "Manipula compostos químicos e garante a dosagem segura do remédio.",
        "words": [
          "fórmula",
          "fórmula (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Manipula compostos químicos e garante a dosagem segura do remédio.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Meteorologista",
        "sub": "ciencias",
        "word": "previsão",
        "phrase": "Analisa imagens de satélite e frentes frias antes que a chuva caia.",
        "words": [
          "previsão",
          "previsão (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Analisa imagens de satélite e frentes frias antes que a chuva caia.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Biólogo Marinho",
        "sub": "ciencias",
        "word": "recife",
        "phrase": "Mergulha em águas profundas estudando corais e espécies desconhecidas.",
        "words": [
          "recife",
          "recife (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Mergulha em águas profundas estudando corais e espécies desconhecidas.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Engenheiro Aeroespacial",
        "sub": "ciencias",
        "word": "órbita",
        "phrase": "Projeta foguetes e sondas capazes de vencer a barreira da atmosfera.",
        "words": [
          "órbita",
          "órbita (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Projeta foguetes e sondas capazes de vencer a barreira da atmosfera.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Estilista",
        "sub": "artes",
        "word": "passarela",
        "phrase": "Desenha tendências de roupas que vão desfilar nas capitais da moda.",
        "words": [
          "passarela",
          "passarela (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Desenha tendências de roupas que vão desfilar nas capitais da moda.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Escultor",
        "sub": "artes",
        "word": "cinzel",
        "phrase": "Enxerga a forma oculta dentro de um bloco bruto de mármore ou argila.",
        "words": [
          "cinzel",
          "cinzel (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Enxerga a forma oculta dentro de um bloco bruto de mármore ou argila.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Diretor de Cinema",
        "sub": "artes",
        "word": "claquete",
        "phrase": "Coordena câmeras, atores e iluminação antes de gritar a palavra 'ação'.",
        "words": [
          "claquete",
          "claquete (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Coordena câmeras, atores e iluminação antes de gritar a palavra 'ação'.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Tatuador",
        "sub": "artes",
        "word": "agulha",
        "phrase": "Grava ilustrações e memórias permanentes na derme de quem confia.",
        "words": [
          "agulha",
          "agulha (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Grava ilustrações e memórias permanentes na derme de quem confia.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Barbeiro",
        "sub": "servicos",
        "word": "navalha",
        "phrase": "Corta cabelos e apara barbas com toalha quente e navalhete afiada.",
        "words": [
          "navalha",
          "navalha (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Corta cabelos e apara barbas com toalha quente e navalhete afiada.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Carpinteiro",
        "sub": "servicos",
        "word": "serrote",
        "phrase": "Transforma tábuas brutas de madeira em móveis sob medida.",
        "words": [
          "serrote",
          "serrote (sutil)",
          "detalhe",
          "ofício"
        ],
        "phrases": [
          "Transforma tábuas brutas de madeira em móveis sob medida.",
          "Preste atenção especial nas características desta rodada.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ]
      },
      {
        "name": "Fonoaudiólogo",
        "sub": "saude",
        "words": [
          "voz",
          "fala",
          "audição",
          "exercícios"
        ],
        "phrases": [
          "Ensina a correta articulação das palavras e cuida da saúde vocal de cantores.",
          "Ajuda crianças e idosos a recuperarem a fala e a deglutição segura.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "voz",
        "phrase": "Ensina a correta articulação das palavras e cuida da saúde vocal de cantores."
      },
      {
        "name": "Biomédico",
        "sub": "saude",
        "words": [
          "lâmina",
          "microscópio",
          "sangue",
          "análise"
        ],
        "phrases": [
          "Trabalha nos bastidores do laboratório analisando amostras e culturas de bactérias.",
          "Decifra laudos e exames para que os médicos receitem o tratamento certo.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "lâmina",
        "phrase": "Trabalha nos bastidores do laboratório analisando amostras e culturas de bactérias."
      },
      {
        "name": "Terapeuta Ocupacional",
        "sub": "saude",
        "words": [
          "adaptação",
          "autonomia",
          "cotidiano",
          "reabilitação"
        ],
        "phrases": [
          "Ensina pessoas com limitações a reconquistarem a independência nas tarefas diárias.",
          "Adapta talheres, cadeiras e ambientes para promover dignidade.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "adaptação",
        "phrase": "Ensina pessoas com limitações a reconquistarem a independência nas tarefas diárias."
      },
      {
        "name": "Paramédico",
        "sub": "saude",
        "words": [
          "ambulância",
          "sirene",
          "socorro",
          "primeiros socorros"
        ],
        "phrases": [
          "Chega com giroflex ligado prestando primeiros socorros nas avenidas movimentadas.",
          "Estabiliza vítimas em estado crítico antes de cruzar as portas do pronto-socorro.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "ambulância",
        "phrase": "Chega com giroflex ligado prestando primeiros socorros nas avenidas movimentadas."
      },
      {
        "name": "Paleontólogo",
        "sub": "ciencias",
        "words": [
          "fósseis",
          "pincel",
          "dinossauro",
          "rocha"
        ],
        "phrases": [
          "Escava esqueletos petrificados de criaturas que reinaram há cem milhões de anos.",
          "Reconstrói ecossistemas pré-históricos a partir de pegadas na pedra.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "fósseis",
        "phrase": "Escava esqueletos petrificados de criaturas que reinaram há cem milhões de anos."
      },
      {
        "name": "Geólogo",
        "sub": "ciencias",
        "words": [
          "minerais",
          "martelo",
          "placas",
          "rochas"
        ],
        "phrases": [
          "Carrega uma marreta geológica analisando camadas de pedras e falhas sísmicas.",
          "Identifica jazidas minerais, petróleo e riscos de deslizamento de terra.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "minerais",
        "phrase": "Carrega uma marreta geológica analisando camadas de pedras e falhas sísmicas."
      },
      {
        "name": "Oceanógrafo",
        "sub": "ciencias",
        "words": [
          "correntes",
          "navio",
          "ondas",
          "salinidade"
        ],
        "phrases": [
          "Estuda a dinâmica das correntes marinhas e o relevo do leito oceânico.",
          "Mede a temperatura das águas prevendo tempestades e tufões globais.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "correntes",
        "phrase": "Estuda a dinâmica das correntes marinhas e o relevo do leito oceânico."
      },
      {
        "name": "Antropólogo",
        "sub": "ciencias",
        "words": [
          "cultura",
          "tribos",
          "humanidade",
          "costumes"
        ],
        "phrases": [
          "Convive com diferentes comunidades humanas estudando rituais, crenças e mitos.",
          "Investiga o que torna a espécie humana tão diversa e fascinante.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "cultura",
        "phrase": "Convive com diferentes comunidades humanas estudando rituais, crenças e mitos."
      },
      {
        "name": "Cenógrafo",
        "sub": "artes",
        "words": [
          "maquete",
          "palco",
          "cenário",
          "madeira"
        ],
        "phrases": [
          "Projeta e constrói cidades inteiras no palco do teatro ou nos estúdios da novela.",
          "Transforma tábuas cruas em mansões medievais ou naves espaciais.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "maquete",
        "phrase": "Projeta e constrói cidades inteiras no palco do teatro ou nos estúdios da novela."
      },
      {
        "name": "Roteirista",
        "sub": "artes",
        "words": [
          "páginas",
          "diálogos",
          "estrutura",
          "enredo"
        ],
        "phrases": [
          "Escreve cada fala, silêncio e reviravolta antes que as câmeras comecem a rodar.",
          "Passa madrugadas em frente ao teclado criando dilemas para os personagens.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "páginas",
        "phrase": "Escreve cada fala, silêncio e reviravolta antes que as câmeras comecem a rodar."
      },
      {
        "name": "Ilustrador",
        "sub": "artes",
        "words": [
          "mesa digital",
          "traço",
          "cores",
          "pincel"
        ],
        "phrases": [
          "Dá vida a livros infantis, capas de revistas e histórias em quadrinhos.",
          "Usa caneta stylus sobre a tela desenhando universos cheios de cores.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "mesa digital",
        "phrase": "Dá vida a livros infantis, capas de revistas e histórias em quadrinhos."
      },
      {
        "name": "Maquiador Artístico",
        "sub": "artes",
        "words": [
          "próteses",
          "látex",
          "sangue falso",
          "pincéis"
        ],
        "phrases": [
          "Aplica próteses de silicone transformando atores em monstros e velhinhos.",
          "Cria cicatrizes e queimaduras hiper-realistas para produções de cinema.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "próteses",
        "phrase": "Aplica próteses de silicone transformando atores em monstros e velhinhos."
      },
      {
        "name": "Mecânico Automotivo",
        "sub": "servicos",
        "words": [
          "graxa",
          "elevador",
          "motor",
          "chave de boca"
        ],
        "phrases": [
          "Descobre o defeito do carro só de escutar o barulho do motor ligado.",
          "Trabalha com mãos manchadas de óleo trocando correias e pastilhas de freio.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "graxa",
        "phrase": "Descobre o defeito do carro só de escutar o barulho do motor ligado."
      },
      {
        "name": "Chaveiro",
        "sub": "servicos",
        "words": [
          "gazuetas",
          "cópia",
          "fechadura",
          "segredo"
        ],
        "phrases": [
          "Abre portas trancadas com hastes de aço finas sem quebrar a fechadura.",
          "Faz cópias de chaves codificadas em máquinas com esmeril giratório.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "gazuetas",
        "phrase": "Abre portas trancadas com hastes de aço finas sem quebrar a fechadura."
      },
      {
        "name": "Marceneiro",
        "sub": "servicos",
        "words": [
          "madeira",
          "serra",
          "armário",
          "plaina"
        ],
        "phrases": [
          "Tira as medidas na parede e fabrica móveis sob medida com encaixes perfeitos.",
          "Passa verniz brilhante deixando o cheiro doce de serragem no ar.",
          "Exige anos de prática e dedicação para dominar todos os seus segredos."
        ],
        "word": "madeira",
        "phrase": "Tira as medidas na parede e fabrica móveis sob medida com encaixes perfeitos."
      }
    ]
  },
  "Jogos & Games": {
    "icon": "🎮",
    "color": "#FF69B4",
    "subcategories": {
      "rpg": {
        "label": "Aventura, Ação & RPG",
        "icon": "⚔️",
        "desc": "God of War, Zelda, GTA, The Witcher e grandes histórias"
      },
      "tiro": {
        "label": "Tiro & Competitivos",
        "icon": "🎯",
        "desc": "Counter-Strike, Valorant, Free Fire, Fortnite e disputas online"
      },
      "retro": {
        "label": "Casuais, Retrô & Família",
        "icon": "🕹️",
        "desc": "Mario, Sonic, Minecraft, Tetris, Pac-Man e clássicos"
      },
      "esporteluta": {
        "label": "Esportes & Luta",
        "icon": "🥊",
        "desc": "FIFA, Mortal Kombat, Street Fighter e disputas de arena"
      }
    },
    "items": [
      {
        "name": "God of War",
        "sub": "rpg",
        "word": "cinzas",
        "phrase": "Um guerreiro furioso que desafiou o panteão dos deuses antigos.",
        "words": [
          "cinzas",
          "cinzas (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Um guerreiro furioso que desafiou o panteão dos deuses antigos.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "The Legend of Zelda",
        "sub": "rpg",
        "word": "espada mestre",
        "phrase": "O jovem de túnica verde que explora templos para conter o mal.",
        "words": [
          "espada mestre",
          "espada mestre (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "O jovem de túnica verde que explora templos para conter o mal.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "GTA V",
        "sub": "rpg",
        "word": "estrelas",
        "phrase": "Vida criminosa e fuga da polícia pelas ruas da cidade de mentira.",
        "words": [
          "estrelas",
          "estrelas (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Vida criminosa e fuga da polícia pelas ruas da cidade de mentira.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "The Witcher 3",
        "sub": "rpg",
        "word": "mutação",
        "phrase": "Duas espadas nas costas enquanto caça monstros por algumas moedas.",
        "words": [
          "mutação",
          "mutação (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Duas espadas nas costas enquanto caça monstros por algumas moedas.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Elden Ring",
        "sub": "rpg",
        "word": "graça",
        "phrase": "Cair incontáveis vezes diante de chefes colossais nas terras esquecidas.",
        "words": [
          "graça",
          "graça (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Cair incontáveis vezes diante de chefes colossais nas terras esquecidas.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "The Last of Us",
        "sub": "rpg",
        "word": "esporo",
        "phrase": "Uma travessia perigosa por cidades tomadas pela vegetação e infectados.",
        "words": [
          "esporo",
          "esporo (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Uma travessia perigosa por cidades tomadas pela vegetação e infectados.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Red Dead Redemption 2",
        "sub": "rpg",
        "word": "cavalo",
        "phrase": "A era dos fora da lei chegando ao fim no velho oeste empoeirado.",
        "words": [
          "cavalo",
          "cavalo (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "A era dos fora da lei chegando ao fim no velho oeste empoeirado.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Cyberpunk 2077",
        "sub": "rpg",
        "word": "implantes",
        "phrase": "Luzes de neon e chips cerebrais numa metrópole futurista decadente.",
        "words": [
          "implantes",
          "implantes (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Luzes de neon e chips cerebrais numa metrópole futurista decadente.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Resident Evil",
        "sub": "rpg",
        "word": "erva",
        "phrase": "Pouca munição nos corredores escuros tomados por experimentos biológicos.",
        "words": [
          "erva",
          "erva (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Pouca munição nos corredores escuros tomados por experimentos biológicos.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Dark Souls",
        "sub": "rpg",
        "word": "fogueira",
        "phrase": "Aprender com a própria morte rolando no momento exato do ataque.",
        "words": [
          "fogueira",
          "fogueira (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Aprender com a própria morte rolando no momento exato do ataque.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Counter-Strike",
        "sub": "tiro",
        "word": "defuse",
        "phrase": "Segundos tensos no cronômetro para evitar que o explosivo seja detonado.",
        "words": [
          "defuse",
          "defuse (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Segundos tensos no cronômetro para evitar que o explosivo seja detonado.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Valorant",
        "sub": "tiro",
        "word": "spike",
        "phrase": "Tiros milimétricos combinados com poderes sobrenaturais de agentes.",
        "words": [
          "spike",
          "spike (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Tiros milimétricos combinados com poderes sobrenaturais de agentes.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Free Fire",
        "sub": "tiro",
        "word": "capa",
        "phrase": "Disputa frenética no celular buscando o último tiro certeiro na cabeça.",
        "words": [
          "capa",
          "capa (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Disputa frenética no celular buscando o último tiro certeiro na cabeça.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Fortnite",
        "sub": "tiro",
        "word": "ônibus",
        "phrase": "Cair numa ilha, erguer paredes num instante e sobreviver até o final.",
        "words": [
          "ônibus",
          "ônibus (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Cair numa ilha, erguer paredes num instante e sobreviver até o final.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "League of Legends",
        "sub": "tiro",
        "word": "nexus",
        "phrase": "Três rotas defendidas por torres até a destruição da base inimiga.",
        "words": [
          "nexus",
          "nexus (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Três rotas defendidas por torres até a destruição da base inimiga.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Call of Duty",
        "sub": "tiro",
        "word": "recarregar",
        "phrase": "Soldados em primeira pessoa cruzando mapas de combate tático.",
        "words": [
          "recarregar",
          "recarregar (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Soldados em primeira pessoa cruzando mapas de combate tático.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Overwatch",
        "sub": "tiro",
        "word": "carga",
        "phrase": "Equipes de heróis coloridos escoltando veículos até o objetivo.",
        "words": [
          "carga",
          "carga (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Equipes de heróis coloridos escoltando veículos até o objetivo.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Brawl Stars",
        "sub": "tiro",
        "word": "gemas",
        "phrase": "Três contra três em partidas rápidas coletando cristais no centro.",
        "words": [
          "gemas",
          "gemas (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Três contra três em partidas rápidas coletando cristais no centro.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Minecraft",
        "sub": "retro",
        "word": "cubo",
        "phrase": "Um mundo infinito onde tudo é construído e minerado bloco a bloco.",
        "words": [
          "cubo",
          "cubo (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Um mundo infinito onde tudo é construído e minerado bloco a bloco.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Super Mario Bros",
        "sub": "retro",
        "word": "cogumelo",
        "phrase": "Pular na cabeça dos inimigos para resgatar quem sumiu do castelo.",
        "words": [
          "cogumelo",
          "cogumelo (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Pular na cabeça dos inimigos para resgatar quem sumiu do castelo.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Sonic the Hedgehog",
        "sub": "retro",
        "word": "argolas",
        "phrase": "Um borrão azul correndo em espirais contra o cientista barrigudo.",
        "words": [
          "argolas",
          "argolas (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Um borrão azul correndo em espirais contra o cientista barrigudo.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Tetris",
        "sub": "retro",
        "word": "encaixe",
        "phrase": "Linhas que somem quando blocos de formas variadas se completam.",
        "words": [
          "encaixe",
          "encaixe (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Linhas que somem quando blocos de formas variadas se completam.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Pac-Man",
        "sub": "retro",
        "word": "labirinto",
        "phrase": "Fugir de fantasmas coloridos enquanto devora pastilhas nos cantos.",
        "words": [
          "labirinto",
          "labirinto (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Fugir de fantasmas coloridos enquanto devora pastilhas nos cantos.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Among Us",
        "sub": "retro",
        "word": "duto",
        "phrase": "Alguém finge consertar a fiação enquanto apaga as luzes da nave.",
        "words": [
          "duto",
          "duto (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Alguém finge consertar a fiação enquanto apaga as luzes da nave.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Roblox",
        "sub": "retro",
        "word": "experiências",
        "phrase": "Plataforma livre onde os próprios jogadores criam suas regras e mundos.",
        "words": [
          "experiências",
          "experiências (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Plataforma livre onde os próprios jogadores criam suas regras e mundos.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Fall Guys",
        "sub": "retro",
        "word": "obstáculos",
        "phrase": "Dezenas de jujubas tropeçando juntas em esteiras e portas falsas.",
        "words": [
          "obstáculos",
          "obstáculos (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Dezenas de jujubas tropeçando juntas em esteiras e portas falsas.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Pokémon",
        "sub": "retro",
        "word": "esfera",
        "phrase": "Colecionar criaturas fantásticas e colocá-las para batalhar por medalhas.",
        "words": [
          "esfera",
          "esfera (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Colecionar criaturas fantásticas e colocá-las para batalhar por medalhas.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "FIFA / EA FC",
        "sub": "esporteluta",
        "word": "carrinho",
        "phrase": "Disputa virtual nos gramados com direito a reclamação de impedimento.",
        "words": [
          "carrinho",
          "carrinho (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Disputa virtual nos gramados com direito a reclamação de impedimento.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Mortal Kombat",
        "sub": "esporteluta",
        "word": "finalização",
        "phrase": "Golpes brutais que encerram a luta com o aviso de concluir o adversário.",
        "words": [
          "finalização",
          "finalização (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Golpes brutais que encerram a luta com o aviso de concluir o adversário.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Street Fighter",
        "sub": "esporteluta",
        "word": "hadouken",
        "phrase": "Faixa branca na testa disparando bolas de energia no torneio mundial.",
        "words": [
          "hadouken",
          "hadouken (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Faixa branca na testa disparando bolas de energia no torneio mundial.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Rocket League",
        "sub": "esporteluta",
        "word": "turbo",
        "phrase": "Carros voadores acertando uma bola gigante direto no gol.",
        "words": [
          "turbo",
          "turbo (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Carros voadores acertando uma bola gigante direto no gol.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Skyrim",
        "sub": "rpg",
        "word": "dragão",
        "phrase": "Um grito na língua ancestral derruba criaturas dos céus nórdicos.",
        "words": [
          "dragão",
          "dragão (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Um grito na língua ancestral derruba criaturas dos céus nórdicos.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "World of Warcraft",
        "sub": "rpg",
        "word": "horda",
        "phrase": "Aliança e Horda duelando eternamente pelo controle de Azeroth.",
        "words": [
          "horda",
          "horda (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Aliança e Horda duelando eternamente pelo controle de Azeroth.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Call of Duty: Warzone",
        "sub": "tiro",
        "word": "gulag",
        "phrase": "Se cair na batalha, terá uma chance de retorno vencendo o duelo no poço.",
        "words": [
          "gulag",
          "gulag (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Se cair na batalha, terá uma chance de retorno vencendo o duelo no poço.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Apex Legends",
        "sub": "tiro",
        "word": "tirolesa",
        "phrase": "Lendas com habilidades táticas disputando o título de campeão.",
        "words": [
          "tirolesa",
          "tirolesa (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Lendas com habilidades táticas disputando o título de campeão.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Rainbow Six Siege",
        "sub": "tiro",
        "word": "reforço",
        "phrase": "Paredes destruíveis, drones e invasões milimetricamente planejadas.",
        "words": [
          "reforço",
          "reforço (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Paredes destruíveis, drones e invasões milimetricamente planejadas.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Left 4 Dead",
        "sub": "tiro",
        "word": "horda",
        "phrase": "Quatro sobreviventes correndo para o abrigo contra infectados furiosos.",
        "words": [
          "horda",
          "horda (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Quatro sobreviventes correndo para o abrigo contra infectados furiosos.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Donkey Kong Country",
        "sub": "retro",
        "word": "banana",
        "phrase": "Primatas rolando em barris para recuperar o tesouro roubado por répteis.",
        "words": [
          "banana",
          "banana (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Primatas rolando em barris para recuperar o tesouro roubado por répteis.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Mega Man",
        "sub": "retro",
        "word": "canhão",
        "phrase": "Um androide azul que absorve os poderes dos chefes que derrota.",
        "words": [
          "canhão",
          "canhão (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Um androide azul que absorve os poderes dos chefes que derrota.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Castlevania",
        "sub": "retro",
        "word": "chicote",
        "phrase": "Um caçador com chicote sagrado invadindo a fortaleza do vampiro supremo.",
        "words": [
          "chicote",
          "chicote (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Um caçador com chicote sagrado invadindo a fortaleza do vampiro supremo.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Crash Bandicoot",
        "sub": "retro",
        "word": "máscara",
        "phrase": "Gira como um furacão quebrando caixas de madeira com ajuda de uma máscara.",
        "words": [
          "máscara",
          "máscara (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Gira como um furacão quebrando caixas de madeira com ajuda de uma máscara.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Tekken",
        "sub": "esporteluta",
        "word": "vulcão",
        "phrase": "Uma dinastia familiar que atira parentes da beira de penhascos.",
        "words": [
          "vulcão",
          "vulcão (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Uma dinastia familiar que atira parentes da beira de penhascos.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Super Smash Bros",
        "sub": "esporteluta",
        "word": "porcentagem",
        "phrase": "Quanto mais dano acumular, mais fácil será arremessar o oponente para fora.",
        "words": [
          "porcentagem",
          "porcentagem (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Quanto mais dano acumular, mais fácil será arremessar o oponente para fora.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "EA FC / FIFA",
        "sub": "esporteluta",
        "word": "pacote",
        "phrase": "Disputa acirrada de pênaltis e cartas de atletas em estádios lotados.",
        "words": [
          "pacote",
          "pacote (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Disputa acirrada de pênaltis e cartas de atletas em estádios lotados.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Clash Royale",
        "sub": "esporteluta",
        "word": "torres",
        "phrase": "Duelo em tempo real com três coroas em jogo e cartas de elixir.",
        "words": [
          "torres",
          "torres (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Duelo em tempo real com três coroas em jogo e cartas de elixir.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Final Fantasy VII",
        "sub": "rpg",
        "word": "meteoro",
        "phrase": "Um mercenário de espada gigante lutando contra uma corporação de energia.",
        "words": [
          "meteoro",
          "meteoro (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Um mercenário de espada gigante lutando contra uma corporação de energia.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Genshin Impact",
        "sub": "rpg",
        "word": "visão",
        "phrase": "Viajante explorando sete nações elementais acompanhado de uma fada flutuante.",
        "words": [
          "visão",
          "visão (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Viajante explorando sete nações elementais acompanhado de uma fada flutuante.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Pokémon Red / Blue",
        "sub": "rpg",
        "word": "inicial",
        "phrase": "Escolha entre planta, fogo ou água antes de pegar a estrada de Kanto.",
        "words": [
          "inicial",
          "inicial (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Escolha entre planta, fogo ou água antes de pegar a estrada de Kanto.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Chrono Trigger",
        "sub": "rpg",
        "word": "época",
        "phrase": "Viajantes no tempo consertando eras passadas para impedir o cataclismo.",
        "words": [
          "época",
          "época (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Viajantes no tempo consertando eras passadas para impedir o cataclismo.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Doom",
        "sub": "tiro",
        "word": "serra",
        "phrase": "Um fuzileiro solitário estraçalhando demônios em Marte ao som de heavy metal.",
        "words": [
          "serra",
          "serra (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Um fuzileiro solitário estraçalhando demônios em Marte ao som de heavy metal.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Half-Life",
        "sub": "tiro",
        "word": "pé-de-cabra",
        "phrase": "Um físico de óculos sobrevivendo a uma invasão alienígena no laboratório.",
        "words": [
          "pé-de-cabra",
          "pé-de-cabra (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Um físico de óculos sobrevivendo a uma invasão alienígena no laboratório.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Team Fortress 2",
        "sub": "tiro",
        "word": "chapéu",
        "phrase": "Nove classes excêntricas disputando pontos de controle com muito humor.",
        "words": [
          "chapéu",
          "chapéu (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Nove classes excêntricas disputando pontos de controle com muito humor.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Bioshock",
        "sub": "tiro",
        "word": "submarino",
        "phrase": "Uma distopia subaquática em ruínas regida por modificações genéticas.",
        "words": [
          "submarino",
          "submarino (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Uma distopia subaquática em ruínas regida por modificações genéticas.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Street of Rage",
        "sub": "retro",
        "word": "frango",
        "phrase": "Policiais justiceiros limpando as ruas na base de socos e chutes.",
        "words": [
          "frango",
          "frango (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Policiais justiceiros limpando as ruas na base de socos e chutes.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Top Gear",
        "sub": "retro",
        "word": "nitro",
        "phrase": "Carros esportivos acelerando em pistas com trilha sonora inesquecível.",
        "words": [
          "nitro",
          "nitro (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Carros esportivos acelerando em pistas com trilha sonora inesquecível.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Bomberman",
        "sub": "retro",
        "word": "pavio",
        "phrase": "Encurrala os adversários em grades de pedra com artefatos explosivos.",
        "words": [
          "pavio",
          "pavio (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Encurrala os adversários em grades de pedra com artefatos explosivos.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Tony Hawk's Pro Skater",
        "sub": "esporteluta",
        "word": "manual",
        "phrase": "Combina manobras aéreas em pistas de skate ao som de punk rock.",
        "words": [
          "manual",
          "manual (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Combina manobras aéreas em pistas de skate ao som de punk rock.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Mortal Kombat 11",
        "sub": "esporteluta",
        "word": "fatalidade",
        "phrase": "Golpes brutais com ossos se quebrando e finalizações impiedosas.",
        "words": [
          "fatalidade",
          "fatalidade (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Golpes brutais com ossos se quebrando e finalizações impiedosas.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Guilty Gear",
        "sub": "esporteluta",
        "word": "heavy metal",
        "phrase": "Luta 2D frenética em visual de anime estilizado com guitarras distorcidas.",
        "words": [
          "heavy metal",
          "heavy metal (sutil)",
          "detalhe",
          "jogabilidade"
        ],
        "phrases": [
          "Luta 2D frenética em visual de anime estilizado com guitarras distorcidas.",
          "Preste atenção especial nas características desta rodada.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ]
      },
      {
        "name": "Baldur's Gate 3",
        "sub": "rpg",
        "words": [
          "dado",
          "girino",
          "escolhas",
          "acampamento"
        ],
        "phrases": [
          "Um parasita na cabeça e rolagens de vinte lados definindo o destino dos reinos.",
          "O RPG aclamado com liberdade total de diálogo e estratégias táticas.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "dado",
        "phrase": "Um parasita na cabeça e rolagens de vinte lados definindo o destino dos reinos."
      },
      {
        "name": "Mass Effect",
        "sub": "rpg",
        "words": [
          "normandy",
          "galáxia",
          "reapers",
          "comandante"
        ],
        "phrases": [
          "Comandante espacial reunindo tripulantes de várias espécies contra máquinas antigas.",
          "Decisões morais que reverberam por uma trilogia inteira de ficção.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "normandy",
        "phrase": "Comandante espacial reunindo tripulantes de várias espécies contra máquinas antigas."
      },
      {
        "name": "Persona 5",
        "sub": "rpg",
        "words": [
          "máscara",
          "coração",
          "ladrões",
          "escola"
        ],
        "phrases": [
          "Estudantes de dia que invadem palácios mentais para roubar corações corruptos.",
          "Visual estilizado em vermelho e preto com trilha de jazz contagiante.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "máscara",
        "phrase": "Estudantes de dia que invadem palácios mentais para roubar corações corruptos."
      },
      {
        "name": "Fallout: New Vegas",
        "sub": "rpg",
        "words": [
          "cassino",
          "deserto",
          "mojave",
          "tampa"
        ],
        "phrases": [
          "Sobreviveu a um tiro na cabeça no deserto e vai cobrar satisfação em Vegas.",
          "Fações em guerra pelo controle da represa sob radiação nuclear.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "cassino",
        "phrase": "Sobreviveu a um tiro na cabeça no deserto e vai cobrar satisfação em Vegas."
      },
      {
        "name": "Halo: Combat Evolved",
        "sub": "tiro",
        "words": [
          "anel",
          "armadura",
          "cortana",
          "master chief"
        ],
        "phrases": [
          "Um soldado supersônico em armadura verde salvando a galáxia em um anel artificial.",
          "A inteligência artificial azul orienta os passos pelo comunicador do capacete.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "anel",
        "phrase": "Um soldado supersônico em armadura verde salvando a galáxia em um anel artificial."
      },
      {
        "name": "BioShock Infinite",
        "sub": "tiro",
        "words": [
          "nuvens",
          "columbia",
          "fendas",
          "gaiola"
        ],
        "phrases": [
          "Cidade flutuante entre as nuvens com uma garota que rasga dimensões.",
          "Entregue a garota e limpe sua dívida no céu turbulento.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "nuvens",
        "phrase": "Cidade flutuante entre as nuvens com uma garota que rasga dimensões."
      },
      {
        "name": "Far Cry 3",
        "sub": "tiro",
        "words": [
          "insanidade",
          "ilha",
          "tatuagem",
          "piratas"
        ],
        "phrases": [
          "O vilão de moicano pergunta se você conhece a definição de insanidade.",
          "Um turista comum que precisa virar guerreiro tribal numa ilha perigosa.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "insanidade",
        "phrase": "O vilão de moicano pergunta se você conhece a definição de insanidade."
      },
      {
        "name": "Titanfall 2",
        "sub": "tiro",
        "words": [
          "mecha",
          "piloto",
          "vínculo",
          "parede"
        ],
        "phrases": [
          "Corre pelas paredes em alta velocidade sincronizado com um robô gigante parceiro.",
          "O protocolo três diz que a máquina deve proteger seu piloto a todo custo.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "mecha",
        "phrase": "Corre pelas paredes em alta velocidade sincronizado com um robô gigante parceiro."
      },
      {
        "name": "Super Metroid",
        "sub": "retro",
        "words": [
          "armadura",
          "planeta",
          "tubo",
          "caçadora"
        ],
        "phrases": [
          "Explora as profundezas labirínticas de um planeta hostil cheia de segredos.",
          "Rola em formato de esfera e congela criaturas com raio de gelo.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "armadura",
        "phrase": "Explora as profundezas labirínticas de um planeta hostil cheia de segredos."
      },
      {
        "name": "The Legend of Zelda: Ocarina of Time",
        "sub": "retro",
        "words": [
          "instrumento",
          "tempo",
          "espada",
          "cavalo"
        ],
        "phrases": [
          "Toca melodias no instrumento sagrado para viajar sete anos no tempo.",
          "O herói silencioso de túnica verde empunha a lâmina que expulsa a escuridão.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "instrumento",
        "phrase": "Toca melodias no instrumento sagrado para viajar sete anos no tempo."
      },
      {
        "name": "Castlevania: Symphony of the Night",
        "sub": "retro",
        "words": [
          "vampiro",
          "castelo",
          "invertido",
          "espada"
        ],
        "phrases": [
          "O filho do lorde das trevas empunha lâminas explorando um castelo de cabeça para baixo.",
          "Diálogos teatrais dramáticos sobre o que é um homem diante de um cálice de vinho.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "vampiro",
        "phrase": "O filho do lorde das trevas empunha lâminas explorando um castelo de cabeça para baixo."
      },
      {
        "name": "Mortal Kombat 3",
        "sub": "esporteluta",
        "words": [
          "corrida",
          "babality",
          "ninja",
          "gancho"
        ],
        "phrases": [
          "Apertava o botão de corrida para encaixar combos brutais em arenas urbanas.",
          "Arrancava a cabeça do oponente com finalizações impiedosas.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "corrida",
        "phrase": "Apertava o botão de corrida para encaixar combos brutais em arenas urbanas."
      },
      {
        "name": "Tony Hawk's Underground",
        "sub": "esporteluta",
        "words": [
          "manobra",
          "história",
          "shape",
          "skatista"
        ],
        "phrases": [
          "Comece de baixo na vizinhança e vire skatista profissional pelo mundo.",
          "Pule de prédios e desça corrimãos insanos com a prancha de madeira.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "manobra",
        "phrase": "Comece de baixo na vizinhança e vire skatista profissional pelo mundo."
      },
      {
        "name": "Need for Speed: Underground 2",
        "sub": "esporteluta",
        "words": [
          "tunning",
          "neon",
          "chuva",
          "nitro"
        ],
        "phrases": [
          "Passeia à noite por uma cidade molhada ouvindo hip-hop e ronco de motor.",
          "Coloca aerofólios gigantes, som potente no porta-malas e luz neon no assoalho.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "tunning",
        "phrase": "Passeia à noite por uma cidade molhada ouvindo hip-hop e ronco de motor."
      },
      {
        "name": "Gran Turismo",
        "sub": "esporteluta",
        "words": [
          "carteira",
          "simulação",
          "asfalto",
          "pistas"
        ],
        "phrases": [
          "Tire as carteiras de motorista em testes rigorosos antes de competir.",
          "O verdadeiro simulador de corrida com centenas de carros autênticos.",
          "Prende o jogador por horas diante da tela tentando vencer os obstáculos."
        ],
        "word": "carteira",
        "phrase": "Tire as carteiras de motorista em testes rigorosos antes de competir."
      }
    ]
  },
  "Filmes & Séries": {
    "icon": "🎬",
    "color": "#FF6B6B",
    "subcategories": {
      "ficcao": {
        "label": "Ficção & Fantasia",
        "icon": "🧙",
        "desc": "Harry Potter, Star Wars, Senhor dos Anéis e Matrix"
      },
      "animacoes": {
        "label": "Animações & Família",
        "icon": "🍿",
        "desc": "Toy Story, Shrek, Rei Leão e clássicos animados"
      },
      "drama": {
        "label": "Ação & Drama",
        "icon": "🎭",
        "desc": "Breaking Bad, Peaky Blinders, Coringa, Titanic e suspense"
      },
      "comedia": {
        "label": "Comédia & Clássicos",
        "icon": "😂",
        "desc": "Chaves, Friends, The Office e Todo Mundo Odeia o Chris"
      }
    },
    "items": [
      {
        "name": "Harry Potter",
        "sub": "ficcao",
        "word": "varinha",
        "phrase": "Um garoto comum descobre que seu nome é lenda num colégio mágico.",
        "words": [
          "varinha",
          "varinha (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um garoto comum descobre que seu nome é lenda num colégio mágico.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "O Senhor dos Anéis",
        "sub": "ficcao",
        "word": "fardo",
        "phrase": "Uma longa caminhada para destruir a joia forjada no fogo vulcânico.",
        "words": [
          "fardo",
          "fardo (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Uma longa caminhada para destruir a joia forjada no fogo vulcânico.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Star Wars",
        "sub": "ficcao",
        "word": "sabres",
        "phrase": "O equilíbrio místico entre a luz e as sombras em galáxias distantes.",
        "words": [
          "sabres",
          "sabres (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "O equilíbrio místico entre a luz e as sombras em galáxias distantes.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Matrix",
        "sub": "ficcao",
        "word": "código",
        "phrase": "Perceber que o mundo ao seu redor não passa de linhas verdes simuladas.",
        "words": [
          "código",
          "código (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Perceber que o mundo ao seu redor não passa de linhas verdes simuladas.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Vingadores: Ultimato",
        "sub": "ficcao",
        "word": "estalo",
        "phrase": "Uma viagem arriscada no tempo para desfazer o desaparecimento de metade da vida.",
        "words": [
          "estalo",
          "estalo (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Uma viagem arriscada no tempo para desfazer o desaparecimento de metade da vida.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Stranger Things",
        "sub": "ficcao",
        "word": "invertido",
        "phrase": "Bicicletas nas ruas e luzes piscando alertando sobre outra dimensão.",
        "words": [
          "invertido",
          "invertido (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Bicicletas nas ruas e luzes piscando alertando sobre outra dimensão.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Game of Thrones",
        "sub": "ficcao",
        "word": "trono",
        "phrase": "Disputas sangrentas entre famílias nobres enquanto o frio se aproxima.",
        "words": [
          "trono",
          "trono (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Disputas sangrentas entre famílias nobres enquanto o frio se aproxima.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Jurassic Park",
        "sub": "ficcao",
        "word": "âmbar",
        "phrase": "A ciência recriou gigantes extintos mas esqueceu de controlar as cercas.",
        "words": [
          "âmbar",
          "âmbar (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "A ciência recriou gigantes extintos mas esqueceu de controlar as cercas.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Interestelar",
        "sub": "ficcao",
        "word": "buraco negro",
        "phrase": "Cruzar o espaço sideral enquanto minutos equivalem a anos na Terra.",
        "words": [
          "buraco negro",
          "buraco negro (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Cruzar o espaço sideral enquanto minutos equivalem a anos na Terra.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Shrek",
        "sub": "animacoes",
        "word": "pântano",
        "phrase": "Um ser verde ranzinza que só queria viver em paz no seu barro.",
        "words": [
          "pântano",
          "pântano (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um ser verde ranzinza que só queria viver em paz no seu barro.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Toy Story",
        "sub": "animacoes",
        "word": "infinito",
        "phrase": "Objetos de plástico que ganham vida assim que a maçaneta gira.",
        "words": [
          "infinito",
          "infinito (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Objetos de plástico que ganham vida assim que a maçaneta gira.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "O Rei Leão",
        "sub": "animacoes",
        "word": "ciclo",
        "phrase": "O pequeno herdeiro que precisou lembrar quem era para salvar as terras do reino.",
        "words": [
          "ciclo",
          "ciclo (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "O pequeno herdeiro que precisou lembrar quem era para salvar as terras do reino.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Monstros S.A.",
        "sub": "animacoes",
        "word": "portas",
        "phrase": "Uma fábrica que gerava energia a partir dos gritos infantis.",
        "words": [
          "portas",
          "portas (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Uma fábrica que gerava energia a partir dos gritos infantis.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Procurando Nemo",
        "sub": "animacoes",
        "word": "nadadeira",
        "phrase": "Um pai aflito cruzando o oceano em busca do filho levado por mergulhadores.",
        "words": [
          "nadadeira",
          "nadadeira (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um pai aflito cruzando o oceano em busca do filho levado por mergulhadores.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Os Incríveis",
        "sub": "animacoes",
        "word": "uniforme",
        "phrase": "Uma família suburbana com dons especiais que tenta agir discretamente.",
        "words": [
          "uniforme",
          "uniforme (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Uma família suburbana com dons especiais que tenta agir discretamente.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Breaking Bad",
        "sub": "drama",
        "word": "química",
        "phrase": "Um professor doente decide produzir substâncias ilegais para deixar herança.",
        "words": [
          "química",
          "química (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um professor doente decide produzir substâncias ilegais para deixar herança.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Peaky Blinders",
        "sub": "drama",
        "word": "navalha",
        "phrase": "Boinas alinhadas e negócios escusos na fumaça da Inglaterra industrial.",
        "words": [
          "navalha",
          "navalha (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Boinas alinhadas e negócios escusos na fumaça da Inglaterra industrial.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Titanic",
        "sub": "drama",
        "word": "iceberg",
        "phrase": "A viagem inaugural da embarcação que nem mesmo o destino salvaria.",
        "words": [
          "iceberg",
          "iceberg (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "A viagem inaugural da embarcação que nem mesmo o destino salvaria.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Coringa",
        "sub": "drama",
        "word": "riso",
        "phrase": "Um sorriso pintado de vermelho que quer ver o circo pegar fogo.",
        "words": [
          "riso",
          "maquiagem",
          "cartas",
          "caos"
        ],
        "phrases": [
          "Um sorriso pintado de vermelho que quer ver o circo pegar fogo.",
          "Acha que a vida é uma piada de muito mau gosto.",
          "O rival obcecado pelo vigilante das sombras."
        ]
      },
      {
        "name": "La Casa de Papel",
        "sub": "drama",
        "word": "máscara",
        "phrase": "Macacões vermelhos e um plano minucioso para imprimir o próprio dinheiro.",
        "words": [
          "máscara",
          "máscara (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Macacões vermelhos e um plano minucioso para imprimir o próprio dinheiro.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "O Poderoso Chefão",
        "sub": "drama",
        "word": "família",
        "phrase": "Uma proposta que ninguém pode recusar nos bastidores da máfia.",
        "words": [
          "família",
          "família (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Uma proposta que ninguém pode recusar nos bastidores da máfia.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Piratas do Caribe",
        "sub": "drama",
        "word": "rum",
        "phrase": "Passos cambaleantes e uma bússola que aponta para o que você mais deseja.",
        "words": [
          "rum",
          "rum (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Passos cambaleantes e uma bússola que aponta para o que você mais deseja.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Round 6",
        "sub": "drama",
        "word": "batatinha",
        "phrase": "Jogos infantis com punições letais pela promessa de uma fortuna.",
        "words": [
          "batatinha",
          "batatinha (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Jogos infantis com punições letais pela promessa de uma fortuna.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Chaves",
        "sub": "comedia",
        "word": "barril",
        "phrase": "Um garoto humilde que sonha com sanduíche enquanto diverte a vila.",
        "words": [
          "barril",
          "barril (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um garoto humilde que sonha com sanduíche enquanto diverte a vila.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "The Office",
        "sub": "comedia",
        "word": "papel",
        "phrase": "Olhadas para a câmera e reuniões bizarras numa filial de suprimentos.",
        "words": [
          "papel",
          "papel (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Olhadas para a câmera e reuniões bizarras numa filial de suprimentos.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Friends",
        "sub": "comedia",
        "word": "cafeteria",
        "phrase": "Seis amigos conversando sobre a vida no sofá de veludo laranja.",
        "words": [
          "cafeteria",
          "cafeteria (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Seis amigos conversando sobre a vida no sofá de veludo laranja.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Todo Mundo Odeia o Chris",
        "sub": "comedia",
        "word": "passagem",
        "phrase": "O irmão mais velho que sempre leva a culpa e apanha na escola.",
        "words": [
          "passagem",
          "passagem (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "O irmão mais velho que sempre leva a culpa e apanha na escola.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Wandinha",
        "sub": "comedia",
        "word": "tranças",
        "phrase": "Olhar sem piscar e uma mão desmembrada como fiel companheira.",
        "words": [
          "tranças",
          "tranças (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Olhar sem piscar e uma mão desmembrada como fiel companheira.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Avatar",
        "sub": "ficcao",
        "word": "pandora",
        "phrase": "Humanos transferem suas consciências para corpos azuis em lua selvagem.",
        "words": [
          "pandora",
          "pandora (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Humanos transferem suas consciências para corpos azuis em lua selvagem.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "De Volta para o Futuro",
        "sub": "ficcao",
        "word": "capacitor",
        "phrase": "Um esportivo com portas asa-de-gaivota atinge 88 milhas por hora.",
        "words": [
          "capacitor",
          "capacitor (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um esportivo com portas asa-de-gaivota atinge 88 milhas por hora.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Duna",
        "sub": "ficcao",
        "word": "especiaria",
        "phrase": "Verme gigante cruzando as areias do planeta mais árido da galáxia.",
        "words": [
          "especiaria",
          "especiaria (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Verme gigante cruzando as areias do planeta mais árido da galáxia.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Viva - A Vida é uma Festa",
        "sub": "animacoes",
        "word": "violão",
        "phrase": "Um garoto viaja ao mundo dos mortos guiado pela música familiar.",
        "words": [
          "violão",
          "violão (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um garoto viaja ao mundo dos mortos guiado pela música familiar.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Como Treinar o Seu Dragão",
        "sub": "animacoes",
        "word": "fúria",
        "phrase": "Um jovem viking conquista a amizade do dragão mais temido dos céus.",
        "words": [
          "fúria",
          "fúria (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um jovem viking conquista a amizade do dragão mais temido dos céus.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Divertida Mente",
        "sub": "animacoes",
        "word": "painel",
        "phrase": "Sentimentos personificados disputam o comando da mente de uma garota.",
        "words": [
          "painel",
          "painel (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Sentimentos personificados disputam o comando da mente de uma garota.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Spider-Man: No Aranhaverso",
        "sub": "animacoes",
        "word": "multiverso",
        "phrase": "Várias versões do herói se encontram com traços de desenho diferentes.",
        "words": [
          "multiverso",
          "multiverso (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Várias versões do herói se encontram com traços de desenho diferentes.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Frozen",
        "sub": "animacoes",
        "word": "gelo",
        "phrase": "Uma rainha que isola seu reino num inverno eterno pelo medo de seus dons.",
        "words": [
          "gelo",
          "gelo (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Uma rainha que isola seu reino num inverno eterno pelo medo de seus dons.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Clube da Luta",
        "sub": "drama",
        "word": "regra",
        "phrase": "A primeira regra é que você não deve falar sobre o que acontece no porão.",
        "words": [
          "regra",
          "regra (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "A primeira regra é que você não deve falar sobre o que acontece no porão.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "The Boys",
        "sub": "drama",
        "word": "composto",
        "phrase": "Heróis corruptos idolatrados pela mídia enfrentando justiceiros rebeldes.",
        "words": [
          "composto",
          "composto (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Heróis corruptos idolatrados pela mídia enfrentando justiceiros rebeldes.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Dark",
        "sub": "drama",
        "word": "caverna",
        "phrase": "Ciclos de trinta e três anos conectando quatro famílias em uma teia temporal.",
        "words": [
          "caverna",
          "caverna (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Ciclos de trinta e três anos conectando quatro famílias em uma teia temporal.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "As Branquelas",
        "sub": "comedia",
        "word": "disfarce",
        "phrase": "Agentes federais se passam por patricinhas ricas nos Hamptons.",
        "words": [
          "disfarce",
          "disfarce (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Agentes federais se passam por patricinhas ricas nos Hamptons.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Brooklyn Nine-Nine",
        "sub": "comedia",
        "word": "distintivo",
        "phrase": "Detetives excêntricos resolvendo crimes sob a batuta de um capitão sério.",
        "words": [
          "distintivo",
          "distintivo (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Detetives excêntricos resolvendo crimes sob a batuta de um capitão sério.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Se Beber, Não Case!",
        "sub": "comedia",
        "word": "tigre",
        "phrase": "Acordam num quarto destruído em Las Vegas sem lembrar de nada da noite anterior.",
        "words": [
          "tigre",
          "tigre (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Acordam num quarto destruído em Las Vegas sem lembrar de nada da noite anterior.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "O Exterminador do Futuro",
        "sub": "ficcao",
        "word": "ciborgue",
        "phrase": "Um robô assassino viaja no tempo para eliminar a mãe do líder rebelde.",
        "words": [
          "ciborgue",
          "ciborgue (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um robô assassino viaja no tempo para eliminar a mãe do líder rebelde.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Planeta dos Macacos",
        "sub": "ficcao",
        "word": "estátua",
        "phrase": "Astronautas descobrem que o mundo governado por símios era a sua própria casa.",
        "words": [
          "estátua",
          "estátua (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Astronautas descobrem que o mundo governado por símios era a sua própria casa.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Mad Max: Estrada da Fúria",
        "sub": "ficcao",
        "word": "gasolina",
        "phrase": "Perseguição insana pelo deserto pós-apocalíptico atrás de água e combustível.",
        "words": [
          "gasolina",
          "gasolina (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Perseguição insana pelo deserto pós-apocalíptico atrás de água e combustível.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Blade Runner",
        "sub": "ficcao",
        "word": "replicante",
        "phrase": "Detetive caça androides com prazo de validade em cidade chuvosa e sombria.",
        "words": [
          "replicante",
          "replicante (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Detetive caça androides com prazo de validade em cidade chuvosa e sombria.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Ratatouille",
        "sub": "animacoes",
        "word": "chapéu",
        "phrase": "Um pequeno roedor que sonhava em cozinhar nos melhores restaurantes de Paris.",
        "words": [
          "chapéu",
          "chapéu (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um pequeno roedor que sonhava em cozinhar nos melhores restaurantes de Paris.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "WALL-E",
        "sub": "animacoes",
        "word": "compactador",
        "phrase": "Um robô solitário limpando a Terra abandonada encontra uma muda de planta verde.",
        "words": [
          "compactador",
          "compactador (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um robô solitário limpando a Terra abandonada encontra uma muda de planta verde.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Madagascar",
        "sub": "animacoes",
        "word": "pinguins",
        "phrase": "Quatro animais mimados de zoológico vão parar numa ilha selvagem da África.",
        "words": [
          "pinguins",
          "pinguins (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Quatro animais mimados de zoológico vão parar numa ilha selvagem da África.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Up: Altas Aventuras",
        "sub": "animacoes",
        "word": "balões",
        "phrase": "Um velhinho solitário faz a própria casa voar amarrada a milhares de bexigas.",
        "words": [
          "balões",
          "balões (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Um velhinho solitário faz a própria casa voar amarrada a milhares de bexigas.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Cidadão Kane",
        "sub": "drama",
        "word": "botão-de-rosa",
        "phrase": "A última palavra enigmática de um magnata da imprensa no leito de morte.",
        "words": [
          "botão-de-rosa",
          "botão-de-rosa (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "A última palavra enigmática de um magnata da imprensa no leito de morte.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Succession",
        "sub": "drama",
        "word": "conglomerado",
        "phrase": "Herdeiros bilionários apunhalando uns aos outros pelo controle do império da mídia.",
        "words": [
          "conglomerado",
          "conglomerado (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Herdeiros bilionários apunhalando uns aos outros pelo controle do império da mídia.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Curtindo a Vida Adoidado",
        "sub": "comedia",
        "word": "desfile",
        "phrase": "Mata aula com a namorada e o melhor amigo a bordo de uma Ferrari clássica.",
        "words": [
          "desfile",
          "desfile (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Mata aula com a namorada e o melhor amigo a bordo de uma Ferrari clássica.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Legalmente Loira",
        "sub": "comedia",
        "word": "jurídico",
        "phrase": "Troca o preconceito social pelo diploma de Direito nas cortes mais prestigiadas.",
        "words": [
          "jurídico",
          "jurídico (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Troca o preconceito social pelo diploma de Direito nas cortes mais prestigiadas.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Debi & Lóide",
        "sub": "comedia",
        "word": "van",
        "phrase": "Dois amigos com inteligência duvidosa cruzam o país numa van em formato de cachorro.",
        "words": [
          "van",
          "van (sutil)",
          "detalhe",
          "roteiro"
        ],
        "phrases": [
          "Dois amigos com inteligência duvidosa cruzam o país numa van em formato de cachorro.",
          "Preste atenção especial nas características desta rodada.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ]
      },
      {
        "name": "Alien, o Oitavo Passageiro",
        "sub": "ficcao",
        "words": [
          "embrião",
          "ácido",
          "nave",
          "sensor"
        ],
        "phrases": [
          "Uma criatura de sangue ácido caça tripulantes nos dutos de ventilação.",
          "No espaço, absolutamente ninguém pode ouvir seus gritos de pavor.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "embrião",
        "phrase": "Uma criatura de sangue ácido caça tripulantes nos dutos de ventilação."
      },
      {
        "name": "O Exterminador do Futuro 2",
        "sub": "ficcao",
        "words": [
          "polegar",
          "moto",
          "jaqueta",
          "festa"
        ],
        "phrases": [
          "O ciborgue aprende o valor da vida humana e se despede num poço de ferro fundido.",
          "Uma perseguição insana de caminhão pelas valas de escoamento de Los Angeles.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "polegar",
        "phrase": "O ciborgue aprende o valor da vida humana e se despede num poço de ferro fundido."
      },
      {
        "name": "Blade Runner 2049",
        "sub": "ficcao",
        "words": [
          "neve",
          "holograma",
          "olhos",
          "memórias"
        ],
        "phrases": [
          "Um policial que descobre que suas memórias podem ser muito mais do que código.",
          "Caminha sob a neve caindo diante de arranha-céus cinzentos e luzes de neon.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "neve",
        "phrase": "Um policial que descobre que suas memórias podem ser muito mais do que código."
      },
      {
        "name": "Distrito 9",
        "sub": "ficcao",
        "words": [
          "camarão",
          "favela",
          "dna",
          "joanesburgo"
        ],
        "phrases": [
          "Refugiados alienígenas confinados em favelas vigiados por humanos cruéis.",
          "Um burocrata contaminado começa a se transformar numa das criaturas.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "camarão",
        "phrase": "Refugiados alienígenas confinados em favelas vigiados por humanos cruéis."
      },
      {
        "name": "A Viagem de Chihiro",
        "sub": "animacoes",
        "words": [
          "porcos",
          "termas",
          "nome",
          "espíritos"
        ],
        "phrases": [
          "Uma garota precisa trabalhar numa casa de banhos de espíritos para salvar os pais.",
          "Quem esquece o próprio nome nunca mais consegue voltar ao mundo dos humanos.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "porcos",
        "phrase": "Uma garota precisa trabalhar numa casa de banhos de espíritos para salvar os pais."
      },
      {
        "name": "Princesa Mononoke",
        "sub": "animacoes",
        "words": [
          "lobo",
          "floresta",
          "ferro",
          "deuses"
        ],
        "phrases": [
          "Uma jovem criada por lobos gigantes luta contra o avanço das fábricas humanas.",
          "O espírito da floresta caminha deixando flores brotarem sob as patas.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "lobo",
        "phrase": "Uma jovem criada por lobos gigantes luta contra o avanço das fábricas humanas."
      },
      {
        "name": "Coraline e o Mundo Secreto",
        "sub": "animacoes",
        "words": [
          "botões",
          "porta",
          "outra mãe",
          "costura"
        ],
        "phrases": [
          "Encontra uma portinha secreta que leva a uma casa idêntica com pais de olhos de botão.",
          "A falsa mãe quer costurar botões pretos em seus olhos para prendê-la para sempre.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "botões",
        "phrase": "Encontra uma portinha secreta que leva a uma casa idêntica com pais de olhos de botão."
      },
      {
        "name": "Kung Fu Panda",
        "sub": "animacoes",
        "words": [
          "dragão",
          "pergaminho",
          "sopa",
          "noodles"
        ],
        "phrases": [
          "Um urso gordinho fã de artes marciais descobre que o ingrediente secreto é acreditar.",
          "Vence guerreiros lendários usando golpes inspirados na barriga e em comida.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "dragão",
        "phrase": "Um urso gordinho fã de artes marciais descobre que o ingrediente secreto é acreditar."
      },
      {
        "name": "Parasita (Bong Joon-ho)",
        "sub": "drama",
        "words": [
          "porão",
          "cheiro",
          "chuva",
          "pedra"
        ],
        "phrases": [
          "Uma família pobre se infiltra aos poucos na mansão de uma família rica.",
          "O cheiro característico do subsolo denuncia quem vive nas partes baixas da cidade.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "porão",
        "phrase": "Uma família pobre se infiltra aos poucos na mansão de uma família rica."
      },
      {
        "name": "Whiplash: Em Busca da Perfeição",
        "sub": "drama",
        "words": [
          "bateria",
          "baquetas",
          "sangue",
          "compasso"
        ],
        "phrases": [
          "Um jovem baterista sangra as mãos sob os berros de um professor tirânico.",
          "Não há palavras mais perigosas na língua inglesa do que 'bom trabalho'.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "bateria",
        "phrase": "Um jovem baterista sangra as mãos sob os berros de um professor tirânico."
      },
      {
        "name": "O Resgate do Soldado Ryan",
        "sub": "drama",
        "words": [
          "praia",
          "desembarque",
          "irmãos",
          "carta"
        ],
        "phrases": [
          "O desembarque caótico na Normandia sob fogo cerrado de metralhadoras.",
          "Uma patrulha inteira arrisca a vida para salvar o último filho vivo de uma mãe.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "praia",
        "phrase": "O desembarque caótico na Normandia sob fogo cerrado de metralhadoras."
      },
      {
        "name": "Seven: Os Sete Crimes Capitais",
        "sub": "drama",
        "words": [
          "pecados",
          "caixa",
          "chuva",
          "detetives"
        ],
        "phrases": [
          "Um assassino meticuloso pune vítimas encenando os sete pecados capitais.",
          "O final angustiante no deserto com uma entrega misteriosa numa caixa de papelão.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "pecados",
        "phrase": "Um assassino meticuloso pune vítimas encenando os sete pecados capitais."
      },
      {
        "name": "Superbad: É Hoje",
        "sub": "comedia",
        "words": [
          "mclovin",
          "identidade",
          "cerveja",
          "festa"
        ],
        "phrases": [
          "Adolescentes tentam comprar bebidas para uma festa usando um RG falso do Havaí.",
          "Ficam amigos de dois policiais que adoram queimar pneus e atirar em placas.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "mclovin",
        "phrase": "Adolescentes tentam comprar bebidas para uma festa usando um RG falso do Havaí."
      },
      {
        "name": "Monty Python: Em Busca do Cálice Sagrado",
        "sub": "comedia",
        "words": [
          "coco",
          "coelho",
          "cavaleiro",
          "ponte"
        ],
        "phrases": [
          "Cavaleiros galopam batendo cascas de coco fingindo que montam cavalos.",
          "Um coelho aparentemente fofinho decapita guerreiros armados até os dentes.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "coco",
        "phrase": "Cavaleiros galopam batendo cascas de coco fingindo que montam cavalos."
      },
      {
        "name": "O Grande Lebowski",
        "sub": "comedia",
        "words": [
          "tapete",
          "boliche",
          "roupão",
          "russo"
        ],
        "phrases": [
          "Um cara preguiçoso de roupão que só queria que limpassem o tapete da sala.",
          "Envolvido num sequestro bizarro entre uma partida de boliche e um coquetel branco.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "tapete",
        "phrase": "Um cara preguiçoso de roupão que só queria que limpassem o tapete da sala."
      },
      {
        "name": "Zoolander",
        "sub": "comedia",
        "words": [
          "olhar",
          "passarela",
          "azul",
          "modelo"
        ],
        "phrases": [
          "Um supermodelo masculino com QI duvidoso e um olhar que vira febre mundial.",
          "Treinado sem saber para cometer um assassinato internacional na moda.",
          "Cenas marcantes desta produção entraram para a história da cultura pop."
        ],
        "word": "olhar",
        "phrase": "Um supermodelo masculino com QI duvidoso e um olhar que vira febre mundial."
      }
    ]
  },
  "Animes & Desenhos": {
    "icon": "📺",
    "color": "#4ECDC4",
    "subcategories": {
      "shonen": {
        "label": "Shonen & Lutas",
        "icon": "💥",
        "desc": "Dragon Ball, Naruto, One Piece, Attack on Titan e Jujutsu"
      },
      "classicos": {
        "label": "Desenhos Clássicos",
        "icon": "📺",
        "desc": "Bob Esponja, Tom e Jerry, Pica-Pau e Scooby-Doo"
      },
      "nostalgia": {
        "label": "Nostalgia Anos 90/2000",
        "icon": "🌟",
        "desc": "Cavaleiros do Zodíaco, Pokémon, Ben 10 e Digimon"
      },
      "modernos": {
        "label": "Desenhos Modernos & Humor",
        "icon": "🤪",
        "desc": "Os Simpsons, Rick e Morty, Hora de Aventura e Gumball"
      }
    },
    "items": [
      {
        "name": "Dragon Ball Z",
        "sub": "shonen",
        "word": "esferas",
        "phrase": "Reunir sete relíquias para invocar o dragão que realiza pedidos.",
        "words": [
          "esferas",
          "esferas (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Reunir sete relíquias para invocar o dragão que realiza pedidos.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Naruto Shippuden",
        "sub": "shonen",
        "word": "selo",
        "phrase": "Superar o preconceito da vila até se tornar o líder máximo.",
        "words": [
          "selo",
          "selo (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Superar o preconceito da vila até se tornar o líder máximo.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "One Piece",
        "sub": "shonen",
        "word": "tesouro",
        "phrase": "A maior jornada marítima de todas em busca do que foi deixado no fim do mundo.",
        "words": [
          "tesouro",
          "tesouro (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "A maior jornada marítima de todas em busca do que foi deixado no fim do mundo.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Attack on Titan",
        "sub": "shonen",
        "word": "muralhas",
        "phrase": "Três anéis gigantes de pedra contendo a humanidade cercada por monstros.",
        "words": [
          "muralhas",
          "muralhas (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Três anéis gigantes de pedra contendo a humanidade cercada por monstros.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Demon Slayer",
        "sub": "shonen",
        "word": "respiração",
        "phrase": "Técnicas de espada sincronizadas com o ar para enfrentar demônios da noite.",
        "words": [
          "respiração",
          "respiração (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Técnicas de espada sincronizadas com o ar para enfrentar demônios da noite.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Jujutsu Kaisen",
        "sub": "shonen",
        "word": "maldição",
        "phrase": "Energia negativa gerada pelas emoções humanas combatida por feiticeiros.",
        "words": [
          "maldição",
          "maldição (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Energia negativa gerada pelas emoções humanas combatida por feiticeiros.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Death Note",
        "sub": "shonen",
        "word": "caderno",
        "phrase": "Basta saber o rosto e escrever o nome nas páginas para ditar o fim.",
        "words": [
          "caderno",
          "caderno (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Basta saber o rosto e escrever o nome nas páginas para ditar o fim.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Bleach",
        "sub": "shonen",
        "word": "ceifeiro",
        "phrase": "Uma lâmina gigante espiritual libertada por um garoto de cabelo ruivo.",
        "words": [
          "ceifeiro",
          "ceifeiro (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Uma lâmina gigante espiritual libertada por um garoto de cabelo ruivo.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Hunter x Hunter",
        "sub": "shonen",
        "word": "exame",
        "phrase": "Superar testes perigosos para obter uma licença de caçador profissional.",
        "words": [
          "exame",
          "exame (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Superar testes perigosos para obter uma licença de caçador profissional.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Bob Esponja",
        "sub": "classicos",
        "word": "hambúrguer",
        "phrase": "Mora num fruto do mar e prepara lanches com uma espátula no fundo do oceano.",
        "words": [
          "hambúrguer",
          "hambúrguer (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Mora num fruto do mar e prepara lanches com uma espátula no fundo do oceano.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Pica-Pau",
        "sub": "classicos",
        "word": "gargalhada",
        "phrase": "Topete vermelho aprontando travessuras com uma risada inconfundível.",
        "words": [
          "gargalhada",
          "gargalhada (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Topete vermelho aprontando travessuras com uma risada inconfundível.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Tom e Jerry",
        "sub": "classicos",
        "word": "ratoeira",
        "phrase": "O felino que bola planos mirabolantes que sempre explodem na própria cara.",
        "words": [
          "ratoeira",
          "ratoeira (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "O felino que bola planos mirabolantes que sempre explodem na própria cara.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Scooby-Doo",
        "sub": "classicos",
        "word": "furgão",
        "phrase": "Quatro jovens e um cão medroso desmascarando assombrações falsas.",
        "words": [
          "furgão",
          "furgão (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Quatro jovens e um cão medroso desmascarando assombrações falsas.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Os Cavaleiros do Zodíaco",
        "sub": "nostalgia",
        "word": "cosmo",
        "phrase": "Armaduras de bronze brilhando ao queimar a energia interior pela deusa.",
        "words": [
          "cosmo",
          "cosmo (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Armaduras de bronze brilhando ao queimar a energia interior pela deusa.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Pokémon (Anime)",
        "sub": "nostalgia",
        "word": "captura",
        "phrase": "Um treinador de boné viajando para se tornar o mestre de criaturinhas.",
        "words": [
          "captura",
          "captura (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um treinador de boné viajando para se tornar o mestre de criaturinhas.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Ben 10 (Desenho)",
        "sub": "nostalgia",
        "word": "omnitrix",
        "phrase": "Um dispositivo alienígena que permite se transformar em dez formas.",
        "words": [
          "omnitrix",
          "omnitrix (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um dispositivo alienígena que permite se transformar em dez formas.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "As Meninas Superpoderosas",
        "sub": "nostalgia",
        "word": "elemento x",
        "phrase": "Criadas no laboratório com açúcar, tempero e ingredientes acidentais.",
        "words": [
          "elemento x",
          "elemento x (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Criadas no laboratório com açúcar, tempero e ingredientes acidentais.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Avatar: A Lenda de Aang",
        "sub": "nostalgia",
        "word": "dobra",
        "phrase": "O último monge que domina os quatro elementos da natureza.",
        "words": [
          "dobra",
          "dobra (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "O último monge que domina os quatro elementos da natureza.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Os Simpsons",
        "sub": "modernos",
        "word": "amarelo",
        "phrase": "Uma família comum de pele dourada que prevê o futuro com humor.",
        "words": [
          "amarelo",
          "amarelo (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Uma família comum de pele dourada que prevê o futuro com humor.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Rick e Morty",
        "sub": "modernos",
        "word": "portal",
        "phrase": "Um avô cientista excêntrico arrastando o neto por realidades paralelas perigosas.",
        "words": [
          "portal",
          "portal (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um avô cientista excêntrico arrastando o neto por realidades paralelas perigosas.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Hora de Aventura",
        "sub": "modernos",
        "word": "espada",
        "phrase": "Um garoto de gorro branco e seu cachorro elástico explorando terras mágicas.",
        "words": [
          "espada",
          "espada (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um garoto de gorro branco e seu cachorro elástico explorando terras mágicas.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "O Incrível Mundo de Gumball",
        "sub": "modernos",
        "word": "subúrbio",
        "phrase": "Um gato azul e seu irmão peixe aprontando em traços mistos.",
        "words": [
          "subúrbio",
          "subúrbio (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um gato azul e seu irmão peixe aprontando em traços mistos.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Fullmetal Alchemist",
        "sub": "shonen",
        "word": "armadura",
        "phrase": "Dois irmãos que quebraram o maior tabu tentando ressuscitar a mãe.",
        "words": [
          "armadura",
          "armadura (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Dois irmãos que quebraram o maior tabu tentando ressuscitar a mãe.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Black Clover",
        "sub": "shonen",
        "word": "grimório",
        "phrase": "Nasceu sem um pingo de mana em um mundo onde magia define tudo.",
        "words": [
          "grimório",
          "grimório (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Nasceu sem um pingo de mana em um mundo onde magia define tudo.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "JoJo's Bizarre Adventure",
        "sub": "shonen",
        "word": "pose",
        "phrase": "Gerações da mesma família lutando com projeções espirituais espalhafatosas.",
        "words": [
          "pose",
          "pose (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Gerações da mesma família lutando com projeções espirituais espalhafatosas.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Chainsaw Man",
        "sub": "shonen",
        "word": "corda",
        "phrase": "Puxa uma cordinha no peito e transforma a cabeça num motor com dentes de serra.",
        "words": [
          "corda",
          "corda (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Puxa uma cordinha no peito e transforma a cabeça num motor com dentes de serra.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Looney Tunes",
        "sub": "classicos",
        "word": "cenoura",
        "phrase": "O coelho pergunta o que há de novo enquanto foge de caçadores trapalhões.",
        "words": [
          "cenoura",
          "cenoura (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "O coelho pergunta o que há de novo enquanto foge de caçadores trapalhões.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "A Pantera Cor-de-Rosa",
        "sub": "classicos",
        "word": "saxofone",
        "phrase": "Passos elegantes ao som de um tema de jazz inesquecível.",
        "words": [
          "saxofone",
          "saxofone (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Passos elegantes ao som de um tema de jazz inesquecível.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Coragem, o Cão Covarde",
        "sub": "nostalgia",
        "word": "lugar nenhum",
        "phrase": "Protege seus donos idosos de alienígenas e horrores no meio do deserto.",
        "words": [
          "lugar nenhum",
          "lugar nenhum (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Protege seus donos idosos de alienígenas e horrores no meio do deserto.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "O Laboratório de Dexter",
        "sub": "nostalgia",
        "word": "botão",
        "phrase": "Um garoto gênio escondendo computadores de sua irmã bailarina.",
        "words": [
          "botão",
          "botão (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um garoto gênio escondendo computadores de sua irmã bailarina.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "A Vaca e o Frango",
        "sub": "nostalgia",
        "word": "bunda",
        "phrase": "Dois irmãos improváveis com pais humanos que só aparecem da cintura para baixo.",
        "words": [
          "bunda",
          "bunda (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Dois irmãos improváveis com pais humanos que só aparecem da cintura para baixo.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Du, Dudu e Edu",
        "sub": "nostalgia",
        "word": "quebra-queixo",
        "phrase": "Três amigos criando golpes absurdos para conseguir balas gigantes.",
        "words": [
          "quebra-queixo",
          "quebra-queixo (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Três amigos criando golpes absurdos para conseguir balas gigantes.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Arcane",
        "sub": "modernos",
        "word": "hextech",
        "phrase": "Duas irmãs em lados opostos de uma guerra entre duas cidades conectadas.",
        "words": [
          "hextech",
          "hextech (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Duas irmãs em lados opostos de uma guerra entre duas cidades conectadas.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Spy x Family",
        "sub": "modernos",
        "word": "amendoim",
        "phrase": "Um espião, uma assassina e uma garotinha telepata fingindo uma família comum.",
        "words": [
          "amendoim",
          "amendoim (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um espião, uma assassina e uma garotinha telepata fingindo uma família comum.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Apenas um Show",
        "sub": "modernos",
        "word": "parque",
        "phrase": "Um gaio-azul e um guaxinim que fazem qualquer tarefa virar caos interdimensional.",
        "words": [
          "parque",
          "parque (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um gaio-azul e um guaxinim que fazem qualquer tarefa virar caos interdimensional.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Gravity Falls",
        "sub": "modernos",
        "word": "diário",
        "phrase": "Gêmeos passando as férias numa cabana de mistérios cheia de anotações secretas.",
        "words": [
          "diário",
          "diário (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Gêmeos passando as férias numa cabana de mistérios cheia de anotações secretas.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Yu Yu Hakusho",
        "sub": "shonen",
        "word": "espiritual",
        "phrase": "Um delinquente morre salvando uma criança e vira detetive sobrenatural.",
        "words": [
          "espiritual",
          "espiritual (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um delinquente morre salvando uma criança e vira detetive sobrenatural.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "InuYasha",
        "sub": "shonen",
        "word": "fragmentos",
        "phrase": "Um meio-demônio canino em busca dos cacos de uma joia sagrada feudal.",
        "words": [
          "fragmentos",
          "fragmentos (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um meio-demônio canino em busca dos cacos de uma joia sagrada feudal.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Saint Seiya / Cavaleiros do Zodíaco",
        "sub": "shonen",
        "word": "constelação",
        "phrase": "Jovens órfãos queimam o cosmo protegendo a reencarnação da deusa da sabedoria.",
        "words": [
          "constelação",
          "constelação (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Jovens órfãos queimam o cosmo protegendo a reencarnação da deusa da sabedoria.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Mob Psycho 100",
        "sub": "shonen",
        "word": "porcentagem",
        "phrase": "Um garoto comum com poderes psíquicos devastadores que explodem aos cem por cento.",
        "words": [
          "porcentagem",
          "porcentagem (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um garoto comum com poderes psíquicos devastadores que explodem aos cem por cento.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Os Flintstones",
        "sub": "classicos",
        "word": "pedregulho",
        "phrase": "Uma família moderna da idade da pedra dirigindo carros movidos a pés descalços.",
        "words": [
          "pedregulho",
          "pedregulho (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Uma família moderna da idade da pedra dirigindo carros movidos a pés descalços.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Os Jetsons",
        "sub": "classicos",
        "word": "esteira",
        "phrase": "Vida no século vinte e um com carros voadores, robôs domésticos e cidades nas nuvens.",
        "words": [
          "esteira",
          "esteira (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Vida no século vinte e um com carros voadores, robôs domésticos e cidades nas nuvens.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Popeye",
        "sub": "classicos",
        "word": "espinafre",
        "phrase": "Aperta uma lata verde e ganha força sobre-humana para defender sua amada do brutamontes.",
        "words": [
          "espinafre",
          "espinafre (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Aperta uma lata verde e ganha força sobre-humana para defender sua amada do brutamontes.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Corrida Maluca",
        "sub": "classicos",
        "word": "trapaça",
        "phrase": "Pilotos bizarros disputam troféus enquanto um vilão canino vive aprontando.",
        "words": [
          "trapaça",
          "trapaça (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Pilotos bizarros disputam troféus enquanto um vilão canino vive aprontando.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "X-Men Evolution",
        "sub": "nostalgia",
        "word": "instituto",
        "phrase": "Mutantes adolescentes aprendendo a controlar seus dons entre uma aula e outra do colégio.",
        "words": [
          "instituto",
          "instituto (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Mutantes adolescentes aprendendo a controlar seus dons entre uma aula e outra do colégio.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "As Aventuras de Jackie Chan",
        "sub": "nostalgia",
        "word": "talismãs",
        "phrase": "Doze talismãs do zodíaco chinês espalhados pelo mundo contendo poderes mágicos.",
        "words": [
          "talismãs",
          "talismãs (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Doze talismãs do zodíaco chinês espalhados pelo mundo contendo poderes mágicos.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Três Espiãs Demais",
        "sub": "nostalgia",
        "word": "batom",
        "phrase": "Estudantes de Beverly Hills enviadas em missões com apetrechos cosméticos disfarçados.",
        "words": [
          "batom",
          "batom (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Estudantes de Beverly Hills enviadas em missões com apetrechos cosméticos disfarçados.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Super Choque",
        "sub": "nostalgia",
        "word": "tampa",
        "phrase": "Um jovem negro ganha poderes eletromagnéticos e voa sobre uma tampa de bueiro.",
        "words": [
          "tampa",
          "tampa (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um jovem negro ganha poderes eletromagnéticos e voa sobre uma tampa de bueiro.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Demon Slayer / Kimetsu no Yaiba",
        "sub": "modernos",
        "word": "respiração",
        "phrase": "Espadachins dominam técnicas de respiração para decapitar demônios da noite.",
        "words": [
          "respiração",
          "respiração (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Espadachins dominam técnicas de respiração para decapitar demônios da noite.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "Cyberpunk: Edgerunners",
        "sub": "modernos",
        "word": "areia",
        "phrase": "Um jovem das ruas aprimora a espinha dorsal com tecnologia militar ultra veloz.",
        "words": [
          "areia",
          "areia (sutil)",
          "detalhe",
          "animação"
        ],
        "phrases": [
          "Um jovem das ruas aprimora a espinha dorsal com tecnologia militar ultra veloz.",
          "Preste atenção especial nas características desta rodada.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ]
      },
      {
        "name": "One Punch Man (Anime)",
        "sub": "shonen",
        "words": [
          "supermercado",
          "promoção",
          "soco",
          "careca"
        ],
        "phrases": [
          "Derrota os monstros mais aterrorizantes com um soco e se preocupa com o mercado.",
          "Vive numa cidade abandonada sem receber o devido crédito da associação.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "supermercado",
        "phrase": "Derrota os monstros mais aterrorizantes com um soco e se preocupa com o mercado."
      },
      {
        "name": "Dr. Stone",
        "sub": "shonen",
        "words": [
          "petrificação",
          "ciência",
          "fórmula",
          "milhões"
        ],
        "phrases": [
          "Toda a humanidade virou pedra e ele reconstrói a tecnologia humana do zero.",
          "Conta os segundos acordado por milhares de anos usando pura força de vontade.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "petrificação",
        "phrase": "Toda a humanidade virou pedra e ele reconstrói a tecnologia humana do zero."
      },
      {
        "name": "Tokyo Ghoul",
        "sub": "shonen",
        "words": [
          "café",
          "máscara",
          "tentáculos",
          "canibal"
        ],
        "phrases": [
          "Um jovem universitário recebe transplante de órgãos e passa a desejar carne humana.",
          "Estala os nós dos dedos após ser torturado e seus cabelos ficam totalmente brancos.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "café",
        "phrase": "Um jovem universitário recebe transplante de órgãos e passa a desejar carne humana."
      },
      {
        "name": "Vinland Saga",
        "sub": "shonen",
        "words": [
          "viking",
          "adagas",
          "vingança",
          "mar"
        ],
        "phrases": [
          "Um garoto cresce no bando do homem que matou seu pai esperando um duelo justo.",
          "Guerreiros nórdicos saqueando vilas e descobrindo que ninguém tem inimigos.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "viking",
        "phrase": "Um garoto cresce no bando do homem que matou seu pai esperando um duelo justo."
      },
      {
        "name": "Corrida Maluca (Wacky Races)",
        "sub": "classicos",
        "words": [
          "máquina",
          "trapaça",
          "risada",
          "troféu"
        ],
        "phrases": [
          "O carro número zero arma armadilhas absurdas que sempre voltam contra ele.",
          "Um cachorro com risada asmática debocha dos fracassos do seu mestre.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "máquina",
        "phrase": "O carro número zero arma armadilhas absurdas que sempre voltam contra ele."
      },
      {
        "name": "Os Flinstones",
        "sub": "classicos",
        "words": [
          "costela",
          "pedra",
          "carro a pé",
          "dinossauro"
        ],
        "phrases": [
          "Pedreiros da idade da pedra com dinossauros fazendo papel de eletrodomésticos.",
          "Grita pela esposa na porta da caverna após o expediente na pedreira.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "costela",
        "phrase": "Pedreiros da idade da pedra com dinossauros fazendo papel de eletrodomésticos."
      },
      {
        "name": "Zé Colmeia",
        "sub": "classicos",
        "words": [
          "cesta",
          "piquenique",
          "guarda",
          "parque"
        ],
        "phrases": [
          "O urso mais esperto que a média roubando lanches de turistas no parque.",
          "Acompanhado de seu fiel amigo baixinho com gravata borboleta.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "cesta",
        "phrase": "O urso mais esperto que a média roubando lanches de turistas no parque."
      },
      {
        "name": "Manda-Chuva (Top Cat)",
        "sub": "classicos",
        "words": [
          "beco",
          "telefone",
          "guarda",
          "gatos"
        ],
        "phrases": [
          "Um gato malandro de chapéu que mora num beco e usa o telefone da polícia.",
          "Comanda uma gangue de felinos enquanto enrola o guarda da vizinhança.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "beco",
        "phrase": "Um gato malandro de chapéu que mora num beco e usa o telefone da polícia."
      },
      {
        "name": "Super Choque (Static Shock)",
        "sub": "nostalgia",
        "words": [
          "bueiro",
          "raio",
          "bang",
          "gas"
        ],
        "phrases": [
          "Ganhou poderes num tiroteio com gás mutagênico e voa numa tampa de ferro.",
          "Defende a cidade de Dakota ao lado de seu melhor amigo inventor genial.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "bueiro",
        "phrase": "Ganhou poderes num tiroteio com gás mutagênico e voa numa tampa de ferro."
      },
      {
        "name": "Projeto Zeta",
        "sub": "nostalgia",
        "words": [
          "holograma",
          "sintóide",
          "fugitivo",
          "paz"
        ],
        "phrases": [
          "Um robô assassino que desenvolveu consciência e se recusa a matar pessoas.",
          "Foge do governo usando hologramas para se disfarçar na multidão futurista.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "holograma",
        "phrase": "Um robô assassino que desenvolveu consciência e se recusa a matar pessoas."
      },
      {
        "name": "DuckTales: Os Caçadores de Aventuras",
        "sub": "nostalgia",
        "words": [
          "moedas",
          "cofre",
          "patos",
          "sobrinhos"
        ],
        "phrases": [
          "Mergulha numa piscina de moedas de ouro dentro de um cofre monumental.",
          "Leva os três sobrinhos em expedições perigosas atrás de tesouros perdidos.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "moedas",
        "phrase": "Mergulha numa piscina de moedas de ouro dentro de um cofre monumental."
      },
      {
        "name": "Frieren: Além do Fim da Jornada",
        "sub": "modernos",
        "words": [
          "elfa",
          "anos",
          "magia",
          "viagem"
        ],
        "phrases": [
          "Uma elfa quase imortal refaz a rota da aventura tentando entender os humanos mortais.",
          "Coleciona feitiços bobos como limpar estátuas ou fazer flores brotarem.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "elfa",
        "phrase": "Uma elfa quase imortal refaz a rota da aventura tentando entender os humanos mortais."
      },
      {
        "name": "Oshi no Ko",
        "sub": "modernos",
        "words": [
          "olhos",
          "estrelas",
          "ídolo",
          "reencarnação"
        ],
        "phrases": [
          "Reencarnaram como filhos gêmeos da maior estrela pop do país.",
          "Os bastidores cruéis e calculistas da indústria do entretenimento japonês.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "olhos",
        "phrase": "Reencarnaram como filhos gêmeos da maior estrela pop do país."
      },
      {
        "name": "Bocchi the Rock!",
        "sub": "modernos",
        "words": [
          "ansiedade",
          "caixa",
          "guitarra",
          "banda"
        ],
        "phrases": [
          "Uma garota com fobia social extrema que toca guitarra escondida numa caixa de papelão.",
          "Conquista os palcos de pequenos clubes de rock ao lado de três amigas.",
          "Marcou a infância ou adolescência de gerações na televisão e no streaming."
        ],
        "word": "ansiedade",
        "phrase": "Uma garota com fobia social extrema que toca guitarra escondida numa caixa de papelão."
      }
    ]
  },
  "Esportes": {
    "icon": "⚽",
    "color": "#45B7D1",
    "subcategories": {
      "coletivos": {
        "label": "Esportes Coletivos & Bola",
        "icon": "⚽",
        "desc": "Futebol, basquete, vôlei, handebol e rugby"
      },
      "lutas": {
        "label": "Lutas & Artes Marciais",
        "icon": "🥊",
        "desc": "Boxe, judô, jiu-jitsu, karatê, MMA e capoeira"
      },
      "radicais": {
        "label": "Radicais & Velocidade",
        "icon": "🏄",
        "desc": "Skate, surfe, automobilismo, ciclismo e velocidade"
      },
      "precisao": {
        "label": "Precisão & Individuais",
        "icon": "🎯",
        "desc": "Tênis, natação, atletismo, golfe e sinuca"
      }
    },
    "items": [
      {
        "name": "Futebol",
        "sub": "coletivos",
        "word": "trave",
        "phrase": "Onze contra onze tentando colocar a esfera no fundo das redes.",
        "words": [
          "trave",
          "trave (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Onze contra onze tentando colocar a esfera no fundo das redes.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Basquete",
        "sub": "coletivos",
        "word": "tabela",
        "phrase": "Quicar no chão e arremessar alto numa cesta de aro de ferro.",
        "words": [
          "tabela",
          "tabela (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Quicar no chão e arremessar alto numa cesta de aro de ferro.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Vôlei",
        "sub": "coletivos",
        "word": "bloqueio",
        "phrase": "Subir junto à rede com os braços esticados para barrar o ataque adversário.",
        "words": [
          "bloqueio",
          "bloqueio (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Subir junto à rede com os braços esticados para barrar o ataque adversário.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Handebol",
        "sub": "coletivos",
        "word": "área",
        "phrase": "Passar a bola com velocidade com as mãos antes de saltar no ar.",
        "words": [
          "área",
          "área (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Passar a bola com velocidade com as mãos antes de saltar no ar.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Futsal",
        "sub": "coletivos",
        "word": "quadra",
        "phrase": "Chão liso e jogadas rápidas de pé em pé num espaço menor.",
        "words": [
          "quadra",
          "quadra (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Chão liso e jogadas rápidas de pé em pé num espaço menor.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Futebol Americano",
        "sub": "coletivos",
        "word": "jardas",
        "phrase": "Avançar no campo com a bola oval buscando ultrapassar a linha de fundo.",
        "words": [
          "jardas",
          "jardas (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Avançar no campo com a bola oval buscando ultrapassar a linha de fundo.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Rugby",
        "sub": "coletivos",
        "word": "empurrão",
        "phrase": "Formação de força coletiva sem proteções onde a bola só volta para trás.",
        "words": [
          "empurrão",
          "empurrão (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Formação de força coletiva sem proteções onde a bola só volta para trás.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Boxe",
        "sub": "lutas",
        "word": "esquiva",
        "phrase": "Balançar o corpo nas cordas para escapar dos golpes com luvas acolchoadas.",
        "words": [
          "esquiva",
          "esquiva (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Balançar o corpo nas cordas para escapar dos golpes com luvas acolchoadas.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Judô",
        "sub": "lutas",
        "word": "tatame",
        "phrase": "Aproveitar o peso do adversário para conseguir a queda perfeita.",
        "words": [
          "tatame",
          "tatame (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Aproveitar o peso do adversário para conseguir a queda perfeita.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Jiu-jitsu",
        "sub": "lutas",
        "word": "chave",
        "phrase": "Luta no solo buscando estrangulamentos e alavancas nas articulações.",
        "words": [
          "chave",
          "chave (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Luta no solo buscando estrangulamentos e alavancas nas articulações.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Karatê",
        "sub": "lutas",
        "word": "faixa",
        "phrase": "Golpes retos e precisos de mãos e pés mantendo a disciplina oriental.",
        "words": [
          "faixa",
          "faixa (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Golpes retos e precisos de mãos e pés mantendo a disciplina oriental.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "MMA / UFC",
        "sub": "lutas",
        "word": "octógono",
        "phrase": "Dois competidores trancados na grade misturando todas as artes marciais.",
        "words": [
          "octógono",
          "octógono (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Dois competidores trancados na grade misturando todas as artes marciais.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Capoeira",
        "sub": "lutas",
        "word": "berimbau",
        "phrase": "Movimentos acrobáticos e rasteiras acompanhados pelo ritmo do tambor.",
        "words": [
          "berimbau",
          "berimbau (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Movimentos acrobáticos e rasteiras acompanhados pelo ritmo do tambor.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Skate",
        "sub": "radicais",
        "word": "lixa",
        "phrase": "Manobras arriscadas sobre quatro rodinhas deslizando pelo corrimão.",
        "words": [
          "lixa",
          "lixa (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Manobras arriscadas sobre quatro rodinhas deslizando pelo corrimão.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Surfe",
        "sub": "radicais",
        "word": "tubo",
        "phrase": "Encontrar o equilíbrio perfeito por dentro da cortina de água salgada.",
        "words": [
          "tubo",
          "tubo (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Encontrar o equilíbrio perfeito por dentro da cortina de água salgada.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Fórmula 1",
        "sub": "radicais",
        "word": "pit-stop",
        "phrase": "Trocar quatro pneus e ajustar a asa em menos de três segundos no asfalto.",
        "words": [
          "pit-stop",
          "pit-stop (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Trocar quatro pneus e ajustar a asa em menos de três segundos no asfalto.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Ciclismo",
        "sub": "radicais",
        "word": "pedal",
        "phrase": "Quilômetros na estrada ou na pista com duas rodas e capacete aerodinâmico.",
        "words": [
          "pedal",
          "pedal (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Quilômetros na estrada ou na pista com duas rodas e capacete aerodinâmico.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Tênis",
        "sub": "precisao",
        "word": "saque",
        "phrase": "Mandar a bolinha felpuda por cima da rede a mais de duzentos por hora.",
        "words": [
          "saque",
          "saque (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Mandar a bolinha felpuda por cima da rede a mais de duzentos por hora.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Natação",
        "sub": "precisao",
        "word": "raia",
        "phrase": "Braçadas precisas cortando a água sem colocar os pés no fundo.",
        "words": [
          "raia",
          "raia (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Braçadas precisas cortando a água sem colocar os pés no fundo.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Atletismo",
        "sub": "precisao",
        "word": "cronômetro",
        "phrase": "A corrida contra os centésimos de segundo na pista oval.",
        "words": [
          "cronômetro",
          "cronômetro (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "A corrida contra os centésimos de segundo na pista oval.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Tênis de Mesa",
        "sub": "precisao",
        "word": "peteca",
        "phrase": "Bolinhas leves rebatidas em alta velocidade numa mesa dividida.",
        "words": [
          "peteca",
          "peteca (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Bolinhas leves rebatidas em alta velocidade numa mesa dividida.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Golfe",
        "sub": "precisao",
        "word": "buraco",
        "phrase": "Caminhadas tranquilas no gramado buscando o menor número de tacadas.",
        "words": [
          "buraco",
          "buraco (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Caminhadas tranquilas no gramado buscando o menor número de tacadas.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Sinuca",
        "sub": "precisao",
        "word": "giz",
        "phrase": "Taco de madeira calculando ângulos na mesa de feltro verde.",
        "words": [
          "giz",
          "giz (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Taco de madeira calculando ângulos na mesa de feltro verde.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Vôlei de Praia",
        "sub": "coletivos",
        "word": "manchete",
        "phrase": "Saltos na areia fofa com óculos escuros e sol a pino.",
        "words": [
          "manchete",
          "manchete (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Saltos na areia fofa com óculos escuros e sol a pino.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Pólo Aquático",
        "sub": "coletivos",
        "word": "touca",
        "phrase": "Gols disputados nadando sem encostar os pés no fundo da piscina.",
        "words": [
          "touca",
          "touca (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Gols disputados nadando sem encostar os pés no fundo da piscina.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Jiu-Jitsu Brasileiro",
        "sub": "lutas",
        "word": "tatame",
        "phrase": "A arte suave que neutraliza força física através de alavancas no chão.",
        "words": [
          "tatame",
          "tatame (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "A arte suave que neutraliza força física através de alavancas no chão.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Muay Thai",
        "sub": "lutas",
        "word": "cotovelada",
        "phrase": "A luta das oito armas usando punhos, cotovelos, joelhos e canelas.",
        "words": [
          "cotovelada",
          "cotovelada (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "A luta das oito armas usando punhos, cotovelos, joelhos e canelas.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Taekwondo",
        "sub": "lutas",
        "word": "colete",
        "phrase": "Chutes giratórios acrobáticos que pontuam em sensores eletrônicos.",
        "words": [
          "colete",
          "colete (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Chutes giratórios acrobáticos que pontuam em sensores eletrônicos.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Skate Street",
        "sub": "radicais",
        "word": "lixa",
        "phrase": "Shape com quatro rodinhas deslizando sobre corrimãos e escadarias.",
        "words": [
          "lixa",
          "lixa (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Shape com quatro rodinhas deslizando sobre corrimãos e escadarias.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Snowboard",
        "sub": "radicais",
        "word": "pó",
        "phrase": "Descidas velozes em montanhas geladas com os pés travados na prancha única.",
        "words": [
          "pó",
          "pó (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Descidas velozes em montanhas geladas com os pés travados na prancha única.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Paraquedismo",
        "sub": "radicais",
        "word": "altímetro",
        "phrase": "Salto no vácuo de avião com segundos eternos de queda livre até a abertura.",
        "words": [
          "altímetro",
          "altímetro (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Salto no vácuo de avião com segundos eternos de queda livre até a abertura.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Escalada Esportiva",
        "sub": "radicais",
        "word": "magnésio",
        "phrase": "Mãos brancas de pó tateando pequenas ranhuras em paredões verticais.",
        "words": [
          "magnésio",
          "magnésio (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Mãos brancas de pó tateando pequenas ranhuras em paredões verticais.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "BMX / Ciclismo Radical",
        "sub": "radicais",
        "word": "manobra",
        "phrase": "Saltos em rampas de terra executando giros completos com o guidão.",
        "words": [
          "manobra",
          "manobra (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Saltos em rampas de terra executando giros completos com o guidão.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Tênis de Mesa / Ping-Pong",
        "sub": "precisao",
        "word": "borracha",
        "phrase": "Bolinhas leves de celulóide cruzando uma rede baixa em frações de segundo.",
        "words": [
          "borracha",
          "borracha (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Bolinhas leves de celulóide cruzando uma rede baixa em frações de segundo.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Tiro com Arco",
        "sub": "precisao",
        "word": "aljava",
        "phrase": "Puxa a corda até o queixo e solta a flecha em direção ao centro amarelo.",
        "words": [
          "aljava",
          "aljava (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Puxa a corda até o queixo e solta a flecha em direção ao centro amarelo.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Boliche",
        "sub": "precisao",
        "word": "canaleta",
        "phrase": "Bola pesada rolando pela pista encerada para derrubar dez pinos de madeira.",
        "words": [
          "canaleta",
          "canaleta (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Bola pesada rolando pela pista encerada para derrubar dez pinos de madeira.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Sinuca / Bilhar",
        "sub": "precisao",
        "word": "giz",
        "phrase": "Passa giz na ponta do taco antes de calcular o ângulo exato da tabela.",
        "words": [
          "giz",
          "giz (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Passa giz na ponta do taco antes de calcular o ângulo exato da tabela.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Dardos",
        "sub": "precisao",
        "word": "alvo",
        "phrase": "Três pequenos projéteis lançados contra uma tábua circular numerada.",
        "words": [
          "alvo",
          "alvo (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Três pequenos projéteis lançados contra uma tábua circular numerada.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Beisebol",
        "sub": "coletivos",
        "word": "taco",
        "phrase": "Bate na costura da bola e corre pelas quatro bases antes de ser eliminado.",
        "words": [
          "taco",
          "taco (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Bate na costura da bola e corre pelas quatro bases antes de ser eliminado.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Críquete",
        "sub": "coletivos",
        "word": "estacas",
        "phrase": "Esporte tradicional britânico com partidas longas e defesas de hastes de madeira.",
        "words": [
          "estacas",
          "estacas (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Esporte tradicional britânico com partidas longas e defesas de hastes de madeira.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Futebol de Areia",
        "sub": "coletivos",
        "word": "bicicleta",
        "phrase": "Chutes acrobáticos no ar em terreno irregular sob a brisa litorânea.",
        "words": [
          "bicicleta",
          "bicicleta (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Chutes acrobáticos no ar em terreno irregular sob a brisa litorânea.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "MMA / Artes Marciais Mistas",
        "sub": "lutas",
        "word": "octógono",
        "phrase": "Combate dentro de uma jaula de oito lados misturando todas as disciplinas de luta.",
        "words": [
          "octógono",
          "octógono (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Combate dentro de uma jaula de oito lados misturando todas as disciplinas de luta.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Esgrima",
        "sub": "lutas",
        "word": "florete",
        "phrase": "Duelo de lâminas finas com roupa branca acolchoada e pontuações elétricas.",
        "words": [
          "florete",
          "florete (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Duelo de lâminas finas com roupa branca acolchoada e pontuações elétricas.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Sumô",
        "sub": "lutas",
        "word": "círculo",
        "phrase": "Lutadores pesados disputando empurrões para não sair da área sagrada de terra batida.",
        "words": [
          "círculo",
          "círculo (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Lutadores pesados disputando empurrões para não sair da área sagrada de terra batida.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Bungee Jump",
        "sub": "radicais",
        "word": "elástico",
        "phrase": "Salto de pontes altíssimas com cabos elásticos amarrados aos tornozelos.",
        "words": [
          "elástico",
          "elástico (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Salto de pontes altíssimas com cabos elásticos amarrados aos tornozelos.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Rafting",
        "sub": "radicais",
        "word": "corredeira",
        "phrase": "Bote inflável descendo rios turbulentos entre pedras e redemoinhos de espuma.",
        "words": [
          "corredeira",
          "corredeira (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Bote inflável descendo rios turbulentos entre pedras e redemoinhos de espuma.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Asa-Delta",
        "sub": "radicais",
        "word": "térmica",
        "phrase": "Voo livre suspenso numa estrutura triangular aproveitando as correntes de ar quente.",
        "words": [
          "térmica",
          "térmica (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Voo livre suspenso numa estrutura triangular aproveitando as correntes de ar quente.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Parkour",
        "sub": "radicais",
        "word": "obstáculo",
        "phrase": "Transpõe muros, bancos e vãos urbanos usando apenas a agilidade do próprio corpo.",
        "words": [
          "obstáculo",
          "obstáculo (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Transpõe muros, bancos e vãos urbanos usando apenas a agilidade do próprio corpo.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Xadrez",
        "sub": "precisao",
        "word": "xeque-mate",
        "phrase": "Batalha mental de sessenta e quatro casas onde um rei indefeso sela a derrota.",
        "words": [
          "xeque-mate",
          "xeque-mate (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Batalha mental de sessenta e quatro casas onde um rei indefeso sela a derrota.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Curling",
        "sub": "precisao",
        "word": "vassoura",
        "phrase": "Pedras de granito polido deslizando sobre o gelo enquanto varrem o piso à frente.",
        "words": [
          "vassoura",
          "vassoura (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Pedras de granito polido deslizando sobre o gelo enquanto varrem o piso à frente.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Hipismo",
        "sub": "precisao",
        "word": "obstáculos",
        "phrase": "Salto perfeito com montaria nobre sem derrubar as barras do percurso.",
        "words": [
          "obstáculos",
          "obstáculos (sutil)",
          "detalhe",
          "regras"
        ],
        "phrases": [
          "Salto perfeito com montaria nobre sem derrubar as barras do percurso.",
          "Preste atenção especial nas características desta rodada.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ]
      },
      {
        "name": "Hóquei no Gelo",
        "sub": "coletivos",
        "words": [
          "disco",
          "patins",
          "taco",
          "gelo"
        ],
        "phrases": [
          "Deslizam sobre lâminas finas empurrando um disco de borracha preta.",
          "Batidas contra a parede de acrílico e defesas com luvas gigantescas.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ],
        "word": "disco",
        "phrase": "Deslizam sobre lâminas finas empurrando um disco de borracha preta."
      },
      {
        "name": "Bocha",
        "sub": "precisao",
        "words": [
          "esferas",
          "bolim",
          "cancha",
          "terra"
        ],
        "phrases": [
          "Lançamento de bolas pesadas tentando encostar na pequena bolinha guia.",
          "Esporte tradicional dos clubes e praças jogado com calma e boa prosa.",
          "Move multidões apaixonadas e exige preparo físico impecável de quem compete."
        ],
        "word": "esferas",
        "phrase": "Lançamento de bolas pesadas tentando encostar na pequena bolinha guia."
      }
    ]
  }
};

// DICAS DO IMPOSTOR INDEXADAS COM SUPORTE A DICAS INDIVIDUAIS
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
    const pool = available.length ? available : list;
    return pool[impostorIndex % pool.length] || pool[0];
  } else {
    const list = Array.isArray(item.words) && item.words.length ? item.words : [item.word || "segredo"];
    const available = list.filter(w => !excludedHints.includes(w));
    const pool = available.length ? available : list;
    return pool[impostorIndex % pool.length] || pool[0];
  }
}

// PARES PARA MÍMICA E DUPLAS
const PARES = {
  "Super-herói": [
    "Batman|Robin",
    "Superman|Supergirl",
    "Thor|Loki",
    "Hulk|Mulher-Hulk",
    "Goku|Vegeta",
    "Naruto|Sasuke",
    "Wolverine|Deadpool",
    "Homem de Ferro|Máquina de Combate",
    "Capitão América|Soldado Invernal",
    "Aquaman|Namor",
    "Coringa|Arlequina",
    "Mulher-Maravilha|Valquíria",
    "Homem-Formiga|Vespa",
    "Doutor Estranho|Feiticeira Escarlate",
    "Thanos|Darkseid",
    "Gamora|Nebulosa",
    "Leonardo (Tartaruga)|Raphael",
    "Donatello|Michelangelo",
    "Homem-Aranha|Miles Morales",
    "Venom|Carnificina",
    "Flash|Kid Flash",
    "Goku|Luffy",
    "Magneto|Doutor Destino",
    "Demolidor|Batman",
    "Deadpool|Pacificador",
    "Saitama|Goku",
    "Killua|Gon",
    "Chapolin Colorado|Zorro",
    "Batman|Coringa",
    "Superman|Lex Luthor",
    "Homem-Aranha|Duende Verde",
    "Capitão América|Caveira Vermelha",
    "Goku|Freeza",
    "Saitama|Genos",
    "All Might|Deku",
    "Gojo|Sukuna",
    "Tanjiro|Muzan",
    "Capitão Pátria|Billy Bruto",
    "Omni-Man|Invencível",
    "Darth Vader|Lord Voldemort",
    "Flash|Flash Reverso",
    "Demolidor|Rei do Crime (Kingpin)",
    "Doutor Estranho|Doutor Destino",
    "Hulk|Thanos",
    "Asa Noturna|Capuz Vermelho",
    "Madara|Pain",
    "Shredder|Leonardo (Tartaruga)",
    "He-Man|Esqueleto",
    "Megatron|Optimus Prime"
  ],
  "Famosos": [
    "Neymar|Messi",
    "Cristiano Ronaldo|Kylian Mbappé",
    "Pelé|Ronaldinho Gaúcho",
    "Xuxa|Ivete Sangalo",
    "Anitta|Ludmilla",
    "Michael Jackson|Bruno Mars",
    "Beyoncé|Rihanna",
    "Taylor Swift|Billie Eilish",
    "Justin Bieber|Ed Sheeran",
    "Gusttavo Lima|Luan Santana",
    "Felipe Neto|Virginia Fonseca",
    "Tom Cruise|Brad Pitt",
    "Leonardo DiCaprio|Will Smith",
    "Elon Musk|Mark Zuckerberg",
    "Silvio Santos|Faustão",
    "Ayrton Senna|Lewis Hamilton",
    "Whindersson Nunes|Casimiro",
    "Fernanda Montenegro|Gloria Pires",
    "Alok|David Guetta",
    "Freddie Mercury|Michael Jackson",
    "Keanu Reeves|Tom Cruise",
    "Rayssa Leal|Gabriel Medina",
    "MrBeast|Whindersson Nunes"
  ],
  "Comida": [
    "Pizza|Esfiha",
    "Hambúrguer|Sanduíche",
    "Sorvete|Açaí",
    "Lasanha|Macarrão",
    "Coxinha|Kibe",
    "Brigadeiro|Beijinho",
    "Pudim|Bolo de chocolate",
    "Pipoca|Batata frita",
    "Churrasco|Picanha",
    "Feijoada|Baião de dois",
    "Tapioca|Cuscuz",
    "Pamonha|Pão de queijo",
    "Sushi|Yakisoba",
    "Taco|Burrito",
    "Croissant|Waffle",
    "Pastel de Feira|Coxinha",
    "Strogonoff|Lasanha",
    "Ramen|Yakisoba",
    "Churros|Donut",
    "Guacamole|Ceviche",
    "Tiramisu|Pudim"
  ],
  "Jogos & Games": [
    "Minecraft|Tetris",
    "GTA V|Red Dead Redemption 2",
    "Fortnite|Free Fire",
    "Super Mario Bros|Sonic the Hedgehog",
    "The Legend of Zelda|Elden Ring",
    "Counter-Strike|Valorant",
    "Resident Evil|The Last of Us",
    "Mortal Kombat|Street Fighter",
    "League of Legends|Overwatch",
    "The Witcher 3|Skyrim",
    "Dark Souls|Elden Ring",
    "Call of Duty|Battlefield",
    "Pac-Man|Space Invaders",
    "Sonic|Crash Bandicoot",
    "Rocket League|FIFA"
  ],
  "Filmes & Séries": [
    "Harry Potter|O Senhor dos Anéis",
    "Star Wars|Matrix",
    "Breaking Bad|Peaky Blinders",
    "Stranger Things|Wandinha",
    "Game of Thrones|Vikings",
    "Toy Story|Monstros S.A.",
    "Shrek|O Rei Leão",
    "Titanic|Coringa",
    "Chaves|Todo Mundo Odeia o Chris",
    "Interestelar|Gravidade",
    "Matrix|Avatar",
    "Jurassic Park|King Kong",
    "O Poderoso Chefão|Scarface",
    "As Branquelas|Se Beber Não Case",
    "Shrek|Toy Story"
  ],
  "Animes & Desenhos": [
    "Dragon Ball Z|Naruto Shippuden",
    "One Piece|Bleach",
    "Attack on Titan|Death Note",
    "Demon Slayer|Jujutsu Kaisen",
    "Bob Esponja|Pica-Pau",
    "Tom e Jerry|Scooby-Doo",
    "Os Simpsons|Rick e Morty",
    "Os Cavaleiros do Zodíaco|Pokémon (Anime)",
    "Hunter x Hunter|Naruto",
    "Fullmetal Alchemist|Bleach",
    "Tom e Jerry|Pica-Pau",
    "As Meninas Superpoderosas|Três Espiãs Demais",
    "Coragem o Cão Covarde|Scooby-Doo",
    "Avatar A Lenda de Aang|Dragon Ball"
  ],
  "Esportes": [
    "Futebol|Futsal",
    "Basquete|Handebol",
    "Vôlei|Futebol Americano",
    "Tênis|Tênis de Mesa",
    "Boxe|MMA / UFC",
    "Skate|Surfe",
    "Fórmula 1|Ciclismo",
    "Judô|Jiu-jitsu",
    "Basquete|Vôlei",
    "Handebol|Futebol",
    "Boxe|Karatê",
    "Jiu-Jitsu|Judô",
    "Skate|Snowboard",
    "Tênis de Mesa|Tênis"
  ],
  "Objeto": [
    "Balança|Relógio",
    "Tesoura|Faca",
    "Espelho|Óculos",
    "Guarda-chuva|Cobertor",
    "Violão|Microfone",
    "Bicicleta|Skate",
    "Controle remoto|Celular",
    "Cadeado|Chave",
    "Travesseiro|Cama",
    "Mouse|Teclado",
    "Martelo|Furadeira",
    "Notebook|Televisão",
    "Fone Bluetooth|Smartwatch",
    "Powerbank|Carregador",
    "Air Fryer|Microondas",
    "Ventilador|Ar-condicionado",
    "Fita Métrica|Régua",
    "Lanterna Tática|Vela"
  ],
  "Lugar": [
    "Praia|Piscina",
    "Biblioteca|Museu",
    "Castelo|Pirâmide do Egito",
    "Circo|Teatro",
    "Cinema|Shopping",
    "Montanha|Cachoeira",
    "Aeroporto|Rodoviária",
    "Hospital|Farmácia",
    "Zoológico|Aquário",
    "Torre Eiffel|Coliseu",
    "Lua|Vulcão",
    "Deserto do Saara|Floresta Amazônica",
    "Cataratas do Iguaçu|Grand Canyon",
    "Times Square|Avenida Paulista",
    "Cristo Redentor|Estátua da Liberdade",
    "Área 51|Triângulo das Bermudas",
    "Chernobyl|Pompeia"
  ],
  "Animal": [
    "Elefante|Rinoceronte",
    "Cachorro|Lobo",
    "Gato|Tigre",
    "Leão|Onça",
    "Girafa|Camelo",
    "Pinguim|Foca",
    "Tubarão|Golfinho",
    "Macaco|Gorila",
    "Tartaruga|Jacaré",
    "Cobra|Escorpião",
    "Águia|Coruja",
    "Cavalo|Zebra",
    "Capivara|Porquinho-da-índia",
    "Tamanduá|Tatu",
    "Urso Panda|Urso Polar",
    "Arara-Azul|Tucano",
    "Polvo|Lula",
    "Baleia Azul|Tubarão Baleia"
  ],
  "Profissão": [
    "Médico|Enfermeiro",
    "Bombeiro|Policial",
    "Professor|Cientista",
    "Cozinheiro|Padeiro",
    "Piloto|Astronauta",
    "Dentista|Cirurgião",
    "Advogado|Juiz",
    "Engenheiro|Arquiteto",
    "Cantor|Ator",
    "Programador|Detetive",
    "Veterinário|Médico",
    "Astrônomo|Astronauta",
    "Dublador|Cantor",
    "Barbeiro|Cabeleireiro",
    "Eletricista|Encanador",
    "Arqueólogo|Historiador"
  ]
};
