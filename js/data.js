/**
 * HUB DE JOGOS - BANCO DE DADOS COMPLETO E EXPANDIDO
 * Contém categorias, subcategorias, dicionário de pistas (HW),
 * pistas genéricas de tema (HINTS) e pares para mímica (PARES).
 */

// Super-heróis com universos categorizados para permitir filtros
const HEROES_DATABASE = [
  // MARVEL
  { name: "Homem-Aranha", universe: "marvel", hint: "teia" },
  { name: "Homem de Ferro", universe: "marvel", hint: "armadura" },
  { name: "Thor", universe: "marvel", hint: "trovão" },
  { name: "Hulk", universe: "marvel", hint: "raiva" },
  { name: "Capitão América", universe: "marvel", hint: "escudo" },
  { name: "Viúva Negra", universe: "marvel", hint: "espiã" },
  { name: "Gavião Arqueiro", universe: "marvel", hint: "flecha" },
  { name: "Pantera Negra", universe: "marvel", hint: "Wakanda" },
  { name: "Doutor Estranho", universe: "marvel", hint: "magia" },
  { name: "Feiticeira Escarlate", universe: "marvel", hint: "caos" },
  { name: "Visão", universe: "marvel", hint: "andróide" },
  { name: "Falcão", universe: "marvel", hint: "asas" },
  { name: "Soldado Invernal", universe: "marvel", hint: "braço metálico" },
  { name: "Homem-Formiga", universe: "marvel", hint: "minúsculo" },
  { name: "Vespa", universe: "marvel", hint: "ferrão" },
  { name: "Capitã Marvel", universe: "marvel", hint: "cósmica" },
  { name: "Máquina de Combate", universe: "marvel", hint: "militar" },
  { name: "Groot", universe: "marvel", hint: "árvore" },
  { name: "Rocket Raccoon", universe: "marvel", hint: "guaxinim" },
  { name: "Star-Lord", universe: "marvel", hint: "música" },
  { name: "Gamora", universe: "marvel", hint: "assassina" },
  { name: "Drax", universe: "marvel", hint: "vingança" },
  { name: "Nebulosa", universe: "marvel", hint: "ciborgue" },
  { name: "Wolverine", universe: "marvel", hint: "garras" },
  { name: "Ciclope", universe: "marvel", hint: "visor" },
  { name: "Tempestade", universe: "marvel", hint: "clima" },
  { name: "Jean Grey", universe: "marvel", hint: "telepatia" },
  { name: "Vampira", universe: "marvel", hint: "toque" },
  { name: "Gambit", universe: "marvel", hint: "cartas" },
  { name: "Fera", universe: "marvel", hint: "azul" },
  { name: "Noturno", universe: "marvel", hint: "teletransporte" },
  { name: "Professor Xavier", universe: "marvel", hint: "cadeira" },
  { name: "Colossus", universe: "marvel", hint: "aço" },
  { name: "Mística", universe: "marvel", hint: "disfarce" },
  { name: "Deadpool", universe: "marvel", hint: "piadas" },
  { name: "Demolidor", universe: "marvel", hint: "cego" },
  { name: "Justiceiro", universe: "marvel", hint: "caveira" },
  { name: "Elektra", universe: "marvel", hint: "sai ninja" },
  { name: "Blade", universe: "marvel", hint: "caçador" },
  { name: "Motoqueiro Fantasma", universe: "marvel", hint: "fogo" },
  { name: "Surfista Prateado", universe: "marvel", hint: "prancha" },
  { name: "Punho de Ferro", universe: "marvel", hint: "kung fu" },
  { name: "Luke Cage", universe: "marvel", hint: "invulnerável" },
  { name: "Jessica Jones", universe: "marvel", hint: "detetive" },
  { name: "Cavaleiro da Lua", universe: "marvel", hint: "lua" },
  { name: "Shang-Chi", universe: "marvel", hint: "dez anéis" },
  { name: "Namor", universe: "marvel", hint: "submarino" },
  { name: "Miles Morales", universe: "marvel", hint: "Brooklyn" },
  { name: "Spider-Gwen", universe: "marvel", hint: "capuz" },
  { name: "Nick Fury", universe: "marvel", hint: "tapa-olho" },
  { name: "Mulher-Hulk", universe: "marvel", hint: "advogada" },
  { name: "Ms. Marvel", universe: "marvel", hint: "luz" },
  { name: "Sr. Fantástico", universe: "marvel", hint: "elástico" },
  { name: "Mulher Invisível", universe: "marvel", hint: "campo de força" },
  { name: "Tocha Humana", universe: "marvel", hint: "chamas" },
  { name: "O Coisa", universe: "marvel", hint: "pedra" },
  { name: "Valquíria", universe: "marvel", hint: "pegaso" },
  { name: "Thanos", universe: "marvel", hint: "joias" },
  { name: "Loki", universe: "marvel", hint: "truques" },
  { name: "Ultron", universe: "marvel", hint: "inteligência artificial" },
  { name: "Magneto", universe: "marvel", hint: "ímã" },
  { name: "Caveira Vermelha", universe: "marvel", hint: "Hydra" },
  { name: "Doutor Destino", universe: "marvel", hint: "Latveria" },
  { name: "Duende Verde", universe: "marvel", hint: "abóbora" },
  { name: "Doutor Octopus", universe: "marvel", hint: "tentáculos" },
  { name: "Venom", universe: "marvel", hint: "simbionte" },
  { name: "Carnificina", universe: "marvel", hint: "vermelho" },
  { name: "Abutre", universe: "marvel", hint: "asas mecânicas" },
  { name: "Lagarto", universe: "marvel", hint: "réptil" },
  { name: "Rei do Crime", universe: "marvel", hint: "bengala" },
  { name: "Mysterio", universe: "marvel", hint: "ilusão" },
  { name: "Electro", universe: "marvel", hint: "raios" },
  { name: "Kraven o Caçador", universe: "marvel", hint: "safári" },
  { name: "Shuri", universe: "marvel", hint: "laboratório" },
  { name: "Cable", universe: "marvel", hint: "futuro" },
  { name: "Juggernaut", universe: "marvel", hint: "capacete" },
  { name: "Hulk Vermelho", universe: "marvel", hint: "general" },
  { name: "Sentinela", universe: "marvel", hint: "vazio" },

  // DC COMICS
  { name: "Batman", universe: "dc", hint: "morcego" },
  { name: "Superman", universe: "dc", hint: "Krypton" },
  { name: "Mulher-Maravilha", universe: "dc", hint: "laço" },
  { name: "Flash", universe: "dc", hint: "velocidade" },
  { name: "Aquaman", universe: "dc", hint: "tridente" },
  { name: "Lanterna Verde", universe: "dc", hint: "anel" },
  { name: "Ciborgue", universe: "dc", hint: "metade máquina" },
  { name: "Mulher-Gato", universe: "dc", hint: "chicote" },
  { name: "Robin", universe: "dc", hint: "prodígio" },
  { name: "Batgirl", universe: "dc", hint: "Gotham" },
  { name: "Asa Noturna", universe: "dc", hint: "bastões" },
  { name: "Capuz Vermelho", universe: "dc", hint: "pistolas" },
  { name: "Arqueiro Verde", universe: "dc", hint: "capuz verde" },
  { name: "Supergirl", universe: "dc", hint: "prima" },
  { name: "Shazam", universe: "dc", hint: "raio mágico" },
  { name: "Ravena", universe: "dc", hint: "sombras" },
  { name: "Mutano", universe: "dc", hint: "animais" },
  { name: "Estelar", universe: "dc", hint: "tamaraniana" },
  { name: "Superboy", universe: "dc", hint: "jaqueta" },
  { name: "Mera", universe: "dc", hint: "água" },
  { name: "John Constantine", universe: "dc", hint: "exorcista" },
  { name: "Aqualad", universe: "dc", hint: "Atlântida" },
  { name: "Kid Flash", universe: "dc", hint: "raio amarelo" },
  { name: "Gavião Negro", universe: "dc", hint: "maça" },
  { name: "Mulher-Gavião", universe: "dc", hint: "asas" },
  { name: "Caçador de Marte", universe: "dc", hint: "marciano" },
  { name: "Zatanna", universe: "dc", hint: "magia invertida" },
  { name: "Canário Negro", universe: "dc", hint: "grito" },
  { name: "Doutor Destino (Fate)", universe: "dc", hint: "elmo de ouro" },
  { name: "Monstro do Pântano", universe: "dc", hint: "plantas" },
  { name: "Pacificador", universe: "dc", hint: "capacete prateado" },
  { name: "Coringa", universe: "dc", hint: "risada" },
  { name: "Arlequina", universe: "dc", hint: "marreta" },
  { name: "Pinguim", universe: "dc", hint: "guarda-chuva" },
  { name: "Charada", universe: "dc", hint: "interrogação" },
  { name: "Hera Venenosa", universe: "dc", hint: "plantas venenosas" },
  { name: "Duas-Caras", universe: "dc", hint: "moeda" },
  { name: "Bane", universe: "dc", hint: "veneno venoso" },
  { name: "Espantalho", universe: "dc", hint: "gás do medo" },
  { name: "Darkseid", universe: "dc", hint: "raio ômega" },
  { name: "Brainiac", universe: "dc", hint: "cidades em garrafas" },
  { name: "Lex Luthor", universe: "dc", hint: "careca bilionário" },
  { name: "Ra's al Ghul", universe: "dc", hint: "poço de Lázaro" },
  { name: "General Zod", universe: "dc", hint: "ajoelhe-se" },
  { name: "Apocalipse (Doomsday)", universe: "dc", hint: "ossos externos" },
  { name: "Sinestro", universe: "dc", hint: "anel amarelo" },
  { name: "Flash Reverso", universe: "dc", hint: "velocista amarelo" },
  { name: "Exterminador (Deathstroke)", universe: "dc", hint: "olho vendado" },
  { name: "Adão Negro", universe: "dc", hint: "Kahndaq" },
  { name: "Mr. Freeze", universe: "dc", hint: "gelo criogênico" },

  // ANIME & MANGÁ
  { name: "Goku", universe: "anime", hint: "super sayajin" },
  { name: "Vegeta", universe: "anime", hint: "orgulho" },
  { name: "Gohan", universe: "anime", hint: "potencial" },
  { name: "Piccolo", universe: "anime", hint: "namekuseijin" },
  { name: "Trunks", universe: "anime", hint: "espada do futuro" },
  { name: "Naruto", universe: "anime", hint: "raposa de nove caudas" },
  { name: "Sasuke", universe: "anime", hint: "sharingan" },
  { name: "Kakashi", universe: "anime", hint: "máscara" },
  { name: "Itachi", universe: "anime", hint: "corvos" },
  { name: "Luffy", universe: "anime", hint: "chapéu de palha" },
  { name: "Zoro", universe: "anime", hint: "três espadas" },
  { name: "Sanji", universe: "anime", hint: "chute de fogo" },
  { name: "Saitama", universe: "anime", hint: "um soco só" },
  { name: "Genos", universe: "anime", hint: "ciborgue loiro" },
  { name: "Deku", universe: "anime", hint: "One For All" },
  { name: "All Might", universe: "anime", hint: "símbolo da paz" },
  { name: "Bakugo", universe: "anime", hint: "explosões" },
  { name: "Todoroki", universe: "anime", hint: "meio fogo meio gelo" },
  { name: "Seiya de Pégaso", universe: "anime", hint: "meteoro" },
  { name: "Shiryu de Dragão", universe: "anime", hint: "escudo de dragão" },
  { name: "Sailor Moon", universe: "anime", hint: "tiara lunar" },
  { name: "Tanjiro Kamado", universe: "anime", hint: "respiração da água" },
  { name: "Nezuko", universe: "anime", hint: "bambu na boca" },
  { name: "Zenitsu", universe: "anime", hint: "raio dormindo" },
  { name: "Satoru Gojo", universe: "anime", hint: "olhos vendados" },
  { name: "Sukuna", universe: "anime", hint: "rei das maldições" },
  { name: "Edward Elric", universe: "anime", hint: "alquimista de aço" },
  { name: "Eren Yeager", universe: "anime", hint: "titã de ataque" },
  { name: "Levi Ackerman", universe: "anime", hint: "lâminas giratórias" },
  { name: "Killua", universe: "anime", hint: "eletricidade branca" },
  { name: "Gon Freecss", universe: "anime", hint: "vara de pescar" },

  // OUTROS & CLÁSSICOS
  { name: "Ben 10", universe: "outros", hint: "Omnitrix" },
  { name: "Leonardo (Tartaruga)", universe: "outros", hint: "espadas e azul" },
  { name: "Donatello", universe: "outros", hint: "bastão e roxo" },
  { name: "Michelangelo", universe: "outros", hint: "nunchaku e pizza" },
  { name: "Raphael", universe: "outros", hint: "adagas e vermelho" },
  { name: "Mestre Splinter", universe: "outros", hint: "rato sensei" },
  { name: "Destruidor", universe: "outros", hint: "armadura de lâminas" },
  { name: "Power Ranger Vermelho", universe: "outros", hint: "morfar" },
  { name: "Sr. Incrível", universe: "outros", hint: "super força de família" },
  { name: "Mulher-Elástica", universe: "outros", hint: "estica o corpo" },
  { name: "Gelado", universe: "outros", hint: "onde está meu uniforme" },
  { name: "Hellboy", universe: "outros", hint: "mão de pedra" },
  { name: "Spawn", universe: "outros", hint: "correntes e capa" },
  { name: "Capitão Planeta", universe: "outros", hint: "pelo seu poder" },
  { name: "Chapolin Colorado", universe: "outros", hint: "marreta biônica" },
  { name: "Zorro", universe: "outros", hint: "espada e marca Z" },
  { name: "Megamente", universe: "outros", hint: "cabeça azul" }
];

// BANCO DE PALAVRAS PRINCIPAL
const TEMAS = {
  "Super-herói": HEROES_DATABASE.map(h => h.name),

  "Famosos": [
    "Neymar", "Xuxa", "Anitta", "Messi", "Cristiano Ronaldo", "Silvio Santos", "Michael Jackson", "Beyoncé",
    "Faustão", "Ivete Sangalo", "Luciano Huck", "Whindersson Nunes", "Ronaldinho Gaúcho", "Pelé", "Rihanna",
    "Taylor Swift", "Justin Bieber", "Gisele Bündchen", "Ludmilla", "Luan Santana", "Gusttavo Lima",
    "Marília Mendonça", "Roberto Carlos", "Tom Cruise", "Brad Pitt", "Leonardo DiCaprio", "Will Smith",
    "Kylian Mbappé", "Vinícius Júnior", "Tiago Leifert", "Gil do Vigor", "Felipe Neto", "Luccas Neto",
    "Virginia Fonseca", "Juliette", "Ratinho", "Fátima Bernardes", "Rodrigo Faro", "Elon Musk", "Mark Zuckerberg",
    "Shakira", "Ed Sheeran", "Billie Eilish", "Bruno Mars", "Lady Gaga", "Dwayne Johnson", "Zendaya",
    "Tom Holland", "Gabriel Medina", "Ayrton Senna", "Hulk Paraíba", "Mr. Beast", "Cauã Reymond",
    "Bruna Marquezine", "Lázaro Ramos", "Fernanda Montenegro", "Selton Mello", "Ana Maria Braga",
    "Sabrina Sato", "Carlinhos Maia", "Tatá Werneck", "Paulo Gustavo", "Chico Buarque", "Caetano Veloso",
    "Gilberto Gil", "Maria Bethânia", "Lewis Hamilton", "LeBron James", "Michael Jordan", "Usain Bolt",
    "Serena Williams", "Marta", "Cafu", "Romário", "Kaká", "Ronaldo Fenômeno", "Adele", "Drake",
    "Eminem", "Snoop Dogg", "Harry Styles", "Selena Gomez", "Ariana Grande", "Keanu Reeves",
    "Robert Downey Jr.", "Scarlett Johansson", "Margot Robbie", "Ryan Reynolds", "Jim Carrey", "Mr. Bean",
    "Casimiro", "Alok", "Pedro Pascal", "Ana Castela", "João Gomes", "Gkay", "Rodrigo Hilbert", "Supla",
    "Mano Brown", "Pabllo Vittar", "Gloria Groove", "Ludwig van Beethoven", "Albert Einstein"
  ],

  "Comida": [
    "Pizza", "Sorvete", "Feijoada", "Brigadeiro", "Hambúrguer", "Lasanha", "Coxinha", "Pastel", "Açaí",
    "Sushi", "Pipoca", "Churrasco", "Strogonoff", "Acarajé", "Tapioca", "Pão de queijo", "Cachorro-quente",
    "Batata frita", "Macarrão", "Arroz e feijão", "Farofa", "Moqueca", "Baião de dois", "Pamonha",
    "Bolo de chocolate", "Pudim", "Beijinho", "Paçoca", "Chocolate", "Milk-shake", "Panqueca", "Omelete",
    "Taco", "Esfiha", "Kibe", "Yakisoba", "Risoto", "Salada", "Sanduíche", "Nuggets", "Churros", "Donut",
    "Waffle", "Pão francês", "Mortadela", "Pipoca doce", "Cuscuz", "Sopa", "Camarão", "Picanha",
    "Torta de limão", "Algodão doce", "Escondidinho", "Vatapá", "Rabada", "Pernil", "Panetone", "Rabanada",
    "Cocada", "Quindim", "Bem-casado", "Maria-mole", "Curau", "Canjica", "Bolo de rolo", "Tacacá",
    "Pão de mel", "Empadão", "Nhoque", "Ravioli", "Paella", "Falafel", "Ceviche", "Dim sum", "Pão de alho",
    "Burrito", "Nachos", "Croissant", "Crepe", "Fondue", "Guacamole", "Poke", "Tiramisù", "Petit Gâteau",
    "Brownie", "Cupcake", "Cheesecake", "Mousse de maracujá", "Torresmo", "Caldo de cana", "Água de coco"
  ],

  "Objeto": [
    "Balança", "Tesoura", "Espelho", "Relógio", "Guarda-chuva", "Violão", "Chuveiro", "Escada", "Bicicleta",
    "Controle remoto", "Cadeado", "Travesseiro", "Mochila", "Óculos", "Caneta", "Garfo", "Panela",
    "Ventilador", "Geladeira", "Televisão", "Celular", "Fone de ouvido", "Chave", "Carteira", "Lanterna",
    "Martelo", "Vassoura", "Cadeira", "Sofá", "Cobertor", "Lâmpada", "Tomada", "Microfone", "Câmera",
    "Bola", "Skate", "Capacete", "Escova de dentes", "Sabonete", "Toalha", "Guarda-roupa", "Cama", "Copo",
    "Prato", "Colher", "Faca", "Mala", "Moeda", "Anel", "Boné", "Tênis", "Calculadora", "Abajur", "Alicate",
    "Furadeira", "Serra", "Chave de fenda", "Fita métrica", "Régua", "Apontador", "Borracha", "Cola",
    "Grampeador", "Pen drive", "Mouse", "Teclado", "Notebook", "Tablet", "Despertador", "Cortina", "Tapete",
    "Quadro", "Vaso", "Ferro de passar", "Máquina de lavar", "Liquidificador", "Micro-ondas", "Torradeira",
    "Chaleira", "Abridor", "Peneira", "Guardanapo", "Secador", "Perfume", "Pente", "Binóculo", "Bússola",
    "Mapa", "Isqueiro", "Vela", "Fósforo", "Guarda-sol", "Carregador", "Garrafa térmica", "Violino", "Pandeiro"
  ],

  "Lugar": [
    "Praia", "Biblioteca", "Castelo", "Circo", "Cinema", "Montanha", "Aeroporto", "Hospital", "Shopping",
    "Estádio", "Farol", "Zoológico", "Escola", "Igreja", "Padaria", "Mercado", "Parque", "Rodoviária",
    "Praça", "Academia", "Posto de gasolina", "Hotel", "Museu", "Teatro", "Piscina", "Deserto", "Floresta",
    "Ilha", "Cachoeira", "Fazenda", "Cadeia", "Universidade", "Banco", "Farmácia", "Restaurante",
    "Parque de diversões", "Pirâmide do Egito", "Torre Eiffel", "Cristo Redentor", "Disney", "Lua",
    "Cemitério", "Loja de brinquedos", "Fábrica", "Aquário", "Sorveteria", "Salão de beleza", "Barbearia",
    "Cozinha", "Banheiro", "Quarto", "Garagem", "Delegacia", "Prefeitura", "Correios", "Lanchonete", "Bar",
    "Boate", "Feira", "Açougue", "Lavanderia", "Oficina", "Estação de metrô", "Porto", "Ponte", "Túnel",
    "Vulcão", "Caverna", "Oceano", "Rio Amazonas", "Sítio", "Cabana", "Cassino", "Parque aquático",
    "Marte", "Polo Norte", "Machu Picchu", "Coliseu", "Muralha da China", "Big Ben", "Estátua da Liberdade",
    "Taj Mahal", "Veneza", "Havaí", "Grand Canyon", "Ilha de Páscoa", "Cataratas do Iguaçu", "Antártida"
  ],

  "Animal": [
    "Elefante", "Cachorro", "Girafa", "Pinguim", "Tubarão", "Macaco", "Coruja", "Tartaruga", "Leão",
    "Cavalo", "Polvo", "Canguru", "Zebra", "Hipopótamo", "Rinoceronte", "Crocodilo", "Jacaré", "Cobra",
    "Sapo", "Borboleta", "Abelha", "Formiga", "Aranha", "Escorpião", "Gato", "Coelho", "Porco", "Vaca",
    "Galinha", "Pato", "Cisne", "Águia", "Papagaio", "Tucano", "Flamingo", "Golfinho", "Baleia", "Foca",
    "Urso", "Lobo", "Raposa", "Veado", "Tigre", "Onça", "Panda", "Gorila", "Camelo", "Morcego", "Camaleão",
    "Caranguejo", "Água-viva", "Pavão", "Hiena", "Jaguatirica", "Lontra", "Castor", "Esquilo", "Ouriço",
    "Tamanduá", "Preguiça", "Capivara", "Tatu", "Arara", "Pelicano", "Beija-flor", "Pombo", "Ovelha",
    "Alce", "Rena", "Lêmure", "Suricato", "Hamster", "Iguana", "Cascavel", "Piranha", "Peixe-palhaço",
    "Cavalo-marinho", "Lula", "Estrela-do-mar", "Mosquito", "Joaninha", "Louva-a-deus", "Axolote",
    "Ornitorrinco", "Dragão-de-Komodo", "Chita", "Surucucu", "Zangão", "Peixe-boi", "Bicho-da-seda"
  ],

  "Profissão": [
    "Médico", "Bombeiro", "Professor", "Cozinheiro", "Piloto", "Policial", "Dentista", "Pirata", "Astronauta",
    "Padeiro", "Jogador de futebol", "Youtuber", "Advogado", "Engenheiro", "Arquiteto", "Enfermeiro",
    "Veterinário", "Motorista", "Pedreiro", "Eletricista", "Encanador", "Cabeleireiro", "Garçom", "Fotógrafo",
    "Jornalista", "Cantor", "Ator", "Palhaço", "Mágico", "Detetive", "Juiz", "Cientista", "Programador",
    "Músico", "Pintor", "Escritor", "Agricultor", "Pescador", "Soldado", "Jardineiro", "Carteiro", "Vendedor",
    "Faxineiro", "Cirurgião", "Maquiador", "Personal trainer", "Bailarino", "Ladrão", "Rei", "Vidente",
    "Treinador", "Árbitro", "Dublador", "Roteirista", "Diretor de cinema", "Locutor", "Influenciador",
    "Streamer", "Barista", "Sommelier", "Confeiteiro", "Açougueiro", "Costureira", "Alfaiate", "Mecânico",
    "Frentista", "Taxista", "Salva-vidas", "Porteiro", "Recepcionista", "Contador", "Psicólogo",
    "Nutricionista", "Fisioterapeuta", "Farmacêutico", "Astrônomo", "Biólogo", "Químico", "Bibliotecário",
    "Tradutor", "Mergulhador", "Alpinista", "Arqueólogo", "Carpinteiro", "Segurança", "Espião", "Guia turístico"
  ],

  // NOVOS TEMAS SOLICITADOS
  "Jogos & Games": [
    "Minecraft", "GTA V", "Fortnite", "Super Mario Bros", "Sonic the Hedgehog", "The Legend of Zelda",
    "God of War", "Counter-Strike", "League of Legends", "Valorant", "Free Fire", "Resident Evil",
    "Mortal Kombat", "Pokémon Red/Blue", "Roblox", "FIFA / EA FC", "The Witcher 3", "Elden Ring",
    "Tetris", "Pac-Man", "Among Us", "Clash Royale", "Brawl Stars", "Call of Duty", "Overwatch",
    "Street Fighter", "The Last of Us", "Red Dead Redemption 2", "Cyberpunk 2077", "Genshin Impact",
    "Fall Guys", "Angry Birds", "Subway Surfers", "Candy Crush", "Need for Speed", "Dark Souls",
    "Crash Bandicoot", "Tomb Raider", "Doom", "Halo", "Assassin's Creed", "Donkey Kong", "Terraria",
    "Stardew Valley", "Rocket League", "Cuphead", "Hollow Knight", "Five Nights at Freddy's", "Brawlhalla"
  ],

  "Filmes & Séries": [
    "Harry Potter", "O Senhor dos Anéis", "Star Wars", "Vingadores: Ultimato", "Titanic", "Matrix",
    "Stranger Things", "Game of Thrones", "Breaking Bad", "La Casa de Papel", "Peaky Blinders", "Shrek",
    "Toy Story", "Jurassic Park", "Piratas do Caribe", "Coringa (Filme)", "O Poderoso Chefão",
    "De Volta para o Futuro", "Avatar", "Clube da Luta", "Interestelar", "O Rei Leão", "Homem-Aranha no Aranhaverso",
    "Round 6 (Squid Game)", "The Walking Dead", "The Office", "Friends", "Wandinha", "Dark",
    "Chaves", "Monstros S.A.", "Procurando Nemo", "Os Incríveis", "Carros (Pixar)", "Frozen",
    "Madagascar", "Kung Fu Panda", "Homens de Preto", "Velozes e Furiosos", "John Wick", "Gladiador",
    "O Show de Truman", "Pantera Negra (Filme)", "Barbie (Filme)", "Oppenheimer", "Todo Mundo Odeia o Chris"
  ],

  "Animes & Desenhos": [
    "Dragon Ball Z", "Naruto Shippuden", "One Piece", "Attack on Titan", "Demon Slayer", "Jujutsu Kaisen",
    "Death Note", "Pokémon", "Os Cavaleiros do Zodíaco", "Bob Esponja", "Pica-Pau", "Tom e Jerry",
    "Os Simpsons", "Rick e Morty", "Ben 10", "As Meninas Superpoderosas", "Hora de Aventura",
    "O Incrível Mundo de Gumball", "Apenas um Show", "Scooby-Doo", "Phineas e Ferb", "Avatar: A Lenda de Aang",
    "Bleach", "Hunter x Hunter", "Fullmetal Alchemist", "My Hero Academia", "Sailor Moon", "Digimon",
    "Yu-Gi-Oh!", "One Punch Man", "Chainsaw Man", "Spy x Family", "Tokyo Ghoul", "Gravity Falls",
    "Laboratório de Dexter", "Coragem, o Cão Covarde", "Johnny Bravo", "Danny Phantom", "Os Padrinhos Mágicos"
  ],

  "Esportes": [
    "Futebol", "Basquete", "Vôlei", "Tênis", "Natação", "Judô", "Skate", "Surfe", "Boxe", "Fórmula 1",
    "Atletismo", "Ciclismo", "Handebol", "Ginástica Artística", "Futebol Americano", "Beisebol", "Golfe",
    "Karatê", "Taekwondo", "Jiu-jitsu", "MMA / UFC", "Tênis de Mesa (Ping-pong)", "Badminton", "Rugby",
    "Hipismo", "Canoagem", "Polo Aquático", "Tiro com Arco", "Esgrima", "Hóquei no Gelo", "Escalada",
    "Futsal", "Futevôlei", "Vôlei de Praia", "Crossfit", "Maratona", "Boliche", "Capoeira", "Sinuca"
  ]
};

// ÍCONES E CORES PARA CADA TEMA
const TEMAS_CONFIG = {
  "Super-herói": { icon: "🦸", color: "var(--b)", description: "Heróis e vilões com poderes especiais" },
  "Famosos": { icon: "⭐", color: "var(--y)", description: "Atores, cantores, atletas e personalidades" },
  "Comida": { icon: "🍕", color: "var(--o)", description: "Pratos, lanches, sobremesas e bebidas" },
  "Objeto": { icon: "🔧", color: "var(--g)", description: "Ferramentas, itens do dia a dia e utensílios" },
  "Lugar": { icon: "📍", color: "var(--p)", description: "Cidades, pontos turísticos e ambientes" },
  "Animal": { icon: "🐾", color: "var(--l)", description: "Criaturas do reino animal do mundo todo" },
  "Profissão": { icon: "💼", color: "var(--v)", description: "Trabalhos, carreiras e ofícios diversos" },
  "Jogos & Games": { icon: "🎮", color: "#FF69B4", description: "Videogames famosos de todas as gerações" },
  "Filmes & Séries": { icon: "🎬", color: "#FF6B6B", description: "Clássicos do cinema e séries marcantes" },
  "Animes & Desenhos": { icon: "📺", color: "#4ECDC4", description: "Animações, mangás e desenhos animados" },
  "Esportes": { icon: "⚽", color: "#45B7D1", description: "Modalidades esportivas e competições" },
  "Misto": { icon: "🎲", color: "var(--ink)", description: "Mistura tudo para uma partida imprevisível!" }
};

// DICIONÁRIO DE PISTAS ESPECÍFICAS (HW) - MAIS DE 500 PISTAS
const HW = {};

// Função auxiliar para povoar HW
function registerHints(rawString) {
  rawString.split("|").forEach(function(p) {
    const k = p.indexOf("=");
    if (k > 0) {
      HW[p.slice(0, k).trim()] = p.slice(k + 1).trim();
    }
  });
}

// Registro das pistas dos Super-heróis
HEROES_DATABASE.forEach(h => {
  if (h.hint) HW[h.name] = h.hint;
});

// Pistas para Famosos
registerHints(
  "Neymar=Santos|Xuxa=rainha dos baixinhos|Anitta=funk carioca|Messi=Argentina campeão|Cristiano Ronaldo=Siiiu|Silvio Santos=aviãozinho de dinheiro|" +
  "Michael Jackson=passo lunar|Beyoncé=Single Ladies|Faustão=oloko bicho|Ivete Sangalo=Carnaval de Salvador|Luciano Huck=caldeirão|" +
  "Whindersson Nunes=Piauí|Ronaldinho Gaúcho=drible elástico|Pelé=mil gols|Rihanna=guarda-chuva|Taylor Swift=turnê das eras|Justin Bieber=Baby|" +
  "Gisele Bündchen=top model|Ludmilla=Numanice|Luan Santana=meteoro da paixão|Gusttavo Lima=embaixador do sertanejo|Marília Mendonça=rainha da sofrência|" +
  "Roberto Carlos=especial de fim de ano|Tom Cruise=faz suas próprias acrobacias|Brad Pitt=ator galã|Leonardo DiCaprio=finalmente ganhou o Oscar|" +
  "Will Smith=um maluco no pedaço|Kylian Mbappé=tartaruga ninja|Vinícius Júnior=bailando no Real Madrid|Tiago Leifert=apresentador de games|" +
  "Gil do Vigor=brasiiil|Felipe Neto=coruja e opiniões|Luccas Neto=banheira de nutella|Virginia Fonseca=dancinhas e maquiagem|Juliette=cactos campeã|" +
  "Ratinho=teste de DNA|Fátima Bernardes=dançou no palco|Rodrigo Faro=dança gatinho|Elon Musk=foguetes e satélites|Mark Zuckerberg=rede azul|" +
  "Shakira=quadris não mentem|Ed Sheeran=violão e sardas|Billie Eilish=sussurro pop|Bruno Mars=passinhos sincronizados|Lady Gaga=vestido de carne|" +
  "Dwayne Johnson=The Rock levantando a sobrancelha|Zendaya=premiada na TV|Tom Holland=escapou spoiler|Gabriel Medina=três vezes campeão das ondas|" +
  "Ayrton Senna=tema da vitória|Hulk Paraíba=chute potente|Mr. Beast=doou ilhas|Cauã Reymond=galã de novela|Bruna Marquezine=Hollywood e moda|" +
  "Lázaro Ramos=ator e diretor|Fernanda Montenegro=dama do teatro|Selton Mello=o auto da compadecida|Ana Maria Braga=acorda menina|Sabrina Sato=risada icônica|" +
  "Carlinhos Maia=vila mais famosa|Tatá Werneck=Lady Night|Paulo Gustavo=Dona Hermínia|Chico Buarque=olhos claros e MPB|Caetano Veloso=tropicália|" +
  "Gilberto Gil=aquele abraço|Maria Bethânia=declamação intensa|Lewis Hamilton=heptacampeão de macacão|LeBron James=o rei das enterradas|" +
  "Michael Jordan=camisa 23 dos touros|Usain Bolt=pose do raio|Serena Williams=raquete mais forte|Marta=seis vezes a melhor do mundo|Cafu=levantou a taça de 2002|" +
  "Romário=peixe dentro da área|Kaká=último melhor do mundo antes dos dois|Ronaldo Fenômeno=dois gols na final da Copa|Adele=rolando nas profundezas|" +
  "Drake=rapper de Toronto|Eminem=rima super rápida|Snoop Dogg=fumaça na praia|Harry Styles=melancia com açúcar|Selena Gomez=feiticeira e cantora|" +
  "Ariana Grande=rabo de cavalo alto|Keanu Reeves=cachorrinho e terno preto|Robert Downey Jr.=gênio filantropo|Scarlett Johansson=ruiva fatal|" +
  "Margot Robbie=Barbie no cinema|Ryan Reynolds=senso de humor ácido|Jim Carrey=máscara verde e caretas|Mr. Bean=urso de pelúcia e mini cooper|" +
  "Casimiro=meteu essa|Alok=show de lasers|Pedro Pascal=o pai da ficção|Ana Castela=boiadeira|João Gomes=vaqueiro|Gkay=farofa anual|" +
  "Rodrigo Hilbert=constrói tudo|Supla=papito|Mano Brown=capítulo 4 versículo 3|Pabllo Vittar=yukê|Gloria Groove=drag vermelha|" +
  "Ludwig van Beethoven=surdo mas genial|Albert Einstein=língua de fora e relatividade"
);

// Pistas para Comidas
registerHints(
  "Pizza=fatias triangulares|Sorvete=derrete no calor|Feijoada=caldeirão de sábado|Brigadeiro=granulado no docinho|Hambúrguer=carne entre dois pães|" +
  "Lasanha=camadas de queijo e massa|Coxinha=formato de gota com frango|Pastel=frito na hora na feira|Açaí=tigela roxa com banana|Sushi=enrolado com alga|" +
  "Pipoca=estoura na panela|Churrasco=espeto na brasa|Strogonoff=molho cremoso com batata palha|Acarajé=frito no azeite de dendê|Tapioca=goma branca recheada|" +
  "Pão de queijo=forno de Minas Gerais|Cachorro-quente=molho com salsicha|Batata frita=crocante com ketchup|Macarrão=espaguete longo com molho|" +
  "Arroz e feijão=a dupla mais famosa do prato|Farofa=farinha temperada crocante|Moqueca=peixe cozido na panela de barro|Baião de dois=mistura nordestina marcante|" +
  "Pamonha=enrolada na palha do milho|Bolo de chocolate=aniversário com velinhas|Pudim=furinhos e calda de caramelo|Beijinho=docinho branco com cravo|" +
  "Paçoca=amendoim esfarelado|Chocolate=barra doce com cacau|Milk-shake=sorvete batido no copo alto|Panqueca=massa fina dobrada|Omelete=ovos batidos na frigideira|" +
  "Taco=massa crocante mexicana|Esfiha=triângulo árabe aberto ou fechado|Kibe=trigo recheado com carne|Yakisoba=macarrão frito oriental|Risoto=arroz italiano cremoso|" +
  "Salada=folhas verdes e legumes|Sanduíche=pão de forma com recheio|Nuggets=frango empanado dourado|Churros=tubo com doce de leite e canela|Donut=rosquinha com furo no meio|" +
  "Waffle=massa quadriculada|Pão francês=casca crocante da padaria|Mortadela=sanduíche do mercadão|Pipoca doce=coberta com caramelo vermelho|Cuscuz=amarelinho no vapor|" +
  "Sopa=líquido quente para dias frios|Camarão=frutos do mar rosados|Picanha=capa de gordura na grelha|Torta de limão=creme azedinho com merengue|Algodão doce=nuvem de açúcar no palito|" +
  "Escondidinho=purê por cima da carne seca|Vatapá=creme amarelo aromático|Rabada=cozido tradicional com agrião|Pernil=assado típico de festas|Panetone=massa natalina com frutas|" +
  "Rabanada=pão molhado no leite frito|Cocada=coco ralado com açúcar|Quindim=amarelinho com gema e coco|Bem-casado=doce de festa de casamento|Maria-mole=fofo coberto de coco ralado|" +
  "Curau=creme de milho com canela|Canjica=grãos brancos doces com leite|Bolo de rolo=camadas finíssimas de goiabada|Tacacá=cuia quente com jambu|Pão de mel=coberto de chocolate com especiarias|" +
  "Empadão=massa podre que esfarela|Nhoque=bolinhas de batata dia 29|Ravioli=quadradinhos de massa recheada|Paella=arroz espanhol com frutos do mar|Falafel=bolinho de grão-de-bico frito|" +
  "Ceviche=peixe marinado no limão|Dim sum=cestinhas no vapor|Pão de alho=acompanhamento indispensável do churrasco|Burrito=grande enrolado em tortilha macia|Nachos=triângulos mergulhados no cheddar|" +
  "Croissant=massa folhada amanteigada francesa|Crepe=disco fininho da calçada de Paris|Fondue=panela no centro para mergulhar|Guacamole=pasta de abacate temperada|Poke=peixe cru em cubos na tigela havaiana|" +
  "Tiramisù=café e queijo mascarpone|Petit Gâteau=bolinho que derrama chocolate quente|Brownie=quadrado denso com nozes|Cupcake=bolinho individual com cobertura|Cheesecake=torta de queijo com frutas vermelhas|" +
  "Mousse de maracujá=aerado e docinho com azedo|Torresmo=pele de porco super crocante|Caldo de cana=moído na hora com limão|Água de coco=bebe direto na fruta verde"
);

// Pistas para Objetos
registerHints(
  "Balança=mede o peso na farmácia|Tesoura=duas lâminas que cortam|Espelho=mostra o reflexo de quem olha|Relógio=ponteiros girando o dia todo|Guarda-chuva=abre para proteger da tempestade|" +
  "Violão=seis cordas no corpo de madeira|Chuveiro=água quente saindo pelos furinhos|Escada=degraus para alcançar o alto|Bicicleta=duas rodas e pedais|Controle remoto=aperta botão para mudar o canal|" +
  "Cadeado=trava metálica que precisa de chave|Travesseiro=apoia a cabeça na hora de dormir|Mochila=carrega materiais nas costas|Óculos=lentes na frente dos olhos|Caneta=tinta que escreve no papel|" +
  "Garfo=quatro dentes para espetar a comida|Panela=fica no fogão preparando a comida|Ventilador=hélice que gira para fazer vento|Geladeira=porta que mantém os alimentos gelados|Televisão=tela grande na sala|" +
  "Celular=aparelho que todo mundo olha o dia todo|Fone de ouvido=coloca na orelha para ouvir som|Chave=gira na fechadura da porta|Carteira=guarda dinheiro e documentos|Lanterna=foco de luz portátil|" +
  "Martelo=bate no prego para fixar na madeira|Vassoura=cerdas que varrem a sujeira do chão|Cadeira=quatro pernas para sentar|Sofá=estofado confortável da sala|Cobertor=esquenta a cama na noite fria|" +
  "Lâmpada=acende no teto quando aperta o interruptor|Tomada=dois ou três furinhos na parede com energia|Microfone=amplifica a voz de quem canta ou fala|Câmera=lente que captura fotos e vídeos|" +
  "Bola=redonda feita para chutar ou arremessar|Skate=prancha com quatro rodinhas de asfalto|Capacete=protege a cabeça na moto ou na bike|Escova de dentes=pasta e cerdas após as refeições|Sabonete=faz espuma no banho cheiroso|" +
  "Toalha=tecido felpudo para se enxugar|Guarda-roupa=guarda as roupas penduradas em cabides|Cama=colchão macio para deitar|Copo=cilindro transparente para beber água|Prato=recipiente raso para colocar a refeição|" +
  "Colher=formato côncavo para tomar sopa|Faca=gume afiado para fatiar o bife|Mala=rodinhas para viajar no aeroporto|Moeda=círculo de metal no bolso|Anel=joia colocada no dedo|Boné=aba na cabeça para tapar o sol|" +
  "Tênis=cadarço amarrado nos pés|Calculadora=teclas numéricas para fazer contas|Abajur=luz suave na mesa de cabeceira|Alicate=aperta e corta fios metálicos|Furadeira=broca giratória que fura a parede|" +
  "Serra=dentes afiados cortando a madeira|Chave de fenda=ponta reta para parafusos|Fita métrica=fita numerada que estica|Régua=mede centímetros em linha reta|Apontador=faz ponta nova no lápis|" +
  "Borracha=apaga o que foi escrito a grafite|Cola=gruda uma folha na outra|Grampeador=prende folhas de papel com grampos|Pen drive=armazena arquivos no conector USB|Mouse=clica na setinha da tela do computador|" +
  "Teclado=cheio de letras para digitar|Notebook=computador portátil que fecha como um livro|Tablet=tela sensível ao toque maior que o celular|Despertador=toca alto na hora de acordar|Cortina=tecido que tapa a janela|" +
  "Tapete=estendido no chão sob os pés|Quadro=moldura pendurada com pintura|Vaso=recipiente de cerâmica com plantas|Ferro de passar=tira os amassados da roupa com vapor|Máquina de lavar=gira as roupas com sabão e água|" +
  "Liquidificador=jarra de vidro com lâminas no fundo|Micro-ondas=esquenta o prato em poucos minutos|Torradeira=pula as fatias de pão douradas|Chaleira=assobia quando a água ferve|Abridor=tira a tampa da garrafa de vidro|" +
  "Peneira=separa o líquido dos pedacinhos|Guardanapo=papel macio para limpar os lábios|Secador=sopra ar quente no cabelo molhado|Perfume=frasco com aroma marcante|Pente=alinha os fios do cabelo com dentes finos|" +
  "Binóculo=dois cilindros para enxergar de longe|Bússola=agulha magnética apontando para o norte|Mapa=desenho que mostra caminhos e países|Isqueiro=produz faísca e chama com gás|Vela=pavio aceso em cera derretida|" +
  "Fósforo=palito de madeira riscado na caixinha|Guarda-sol=fincado na areia para fazer sombra|Carregador=fio que liga o celular na tomada|Garrafa térmica=mantém o café quente por horas|Violino=tocado com arco e quatro cordas|Pandeiro=couro com platinelas ritmadas"
);

// Pistas para Lugares
registerHints(
  "Praia=areia, ondas e água salgada|Biblioteca=estantes cheias de livros em silêncio|Castelo=construção antiga com torres e muralhas|Circo=lona colorida com palhaços e trapezistas|Cinema=telão gigante e pipoca no escuro|" +
  "Montanha=pico alto que toca as nuvens|Aeroporto=pistas longas onde decolam aviões|Hospital=médicos e ambulâncias socorrendo pessoas|Shopping=corredores climatizados com muitas lojas|Estádio=arquibancada lotada de torcedores cantando|" +
  "Farol=torre à beira-mar que guia navios à noite|Zoológico=viveiros com animais selvagens|Escola=salas de aula com lousa e recreio|Igreja=bancos de madeira e sinos na torre|Padaria=cheirinho de pão quente saindo da fornada|" +
  "Mercado=carrinhos circulando entre prateleiras|Parque=árvores, grama e pista de caminhada|Rodoviária=plataformas onde chegam ônibus de viagem|Praça=bancos ao redor de um coreto central|Academia=pesos, esteiras e pessoas se exercitando|" +
  "Posto de gasolina=bombas de combustível e calibrador de pneus|Hotel=quartos com cama arrumada para hóspedes|Museu=obras de arte e esqueletos históricos|Teatro=palco com cortina vermelha e plateia|Piscina=tanque de azulejos com cloro|" +
  "Deserto=imensidão de dunas e calor escaldante|Floresta=mata fechada cheia de árvores e animais|Ilha=pedaço de terra cercado de água por todos os lados|Cachoeira=queda d'água refrescante entre rochas|Fazenda=celeiro, plantações e criação de gado|" +
  "Cadeia=grades de ferro e celas de detenção|Universidade=campus com vários prédios e cursos superiores|Banco=portas giratórias e caixas eletrônicos|Farmácia=balcão cheio de remédios e perfumaria|Restaurante=mesas com garçons trazendo pedidos|" +
  "Parque de diversões=roda gigante e montanha-russa com gritos|Pirâmide do Egito=monumento de pedra no meio do deserto|Torre Eiffel=estrutura metálica icônica em Paris|Cristo Redentor=braços abertos no topo do Corcovado|Disney=castelo mágico com orelhas redondas|" +
  "Lua=crateras visíveis no céu da noite|Cemitério=túmulos com flores e silêncio sepulcral|Loja de brinquedos=prateleiras com bonecas, jogos e carrinhos|Fábrica=chaminés e operários em linha de produção|Aquário=tanques de vidro com peixes coloridos|" +
  "Sorveteria=balcão gelado com potes de vários sabores|Salão de beleza=espelhos, tesouras e secadores de cabelo|Barbearia=cadeira reclinável e toalha quente na barba|Cozinha=fogão aceso e panelas no fogo|Banheiro=pia, espelho e chuveiro|" +
  "Quarto=cama aconchegante e guarda-roupa|Garagem=espaço coberto onde estaciona o carro|Delegacia=viaturas paradas na frente e queixas registradas|Prefeitura=gabinete do prefeito da cidade|Correios=caixas amarelas e encomendas despachadas|" +
  "Lanchonete=balcão com chapa de fritura e banquetas|Bar=balcão com chopp gelado e petiscos|Boate=música alta com luzes estroboscópicas|Feira=barracas de frutas na rua pela manhã|Açougue=ganchos com peças de carne penduradas|" +
  "Lavanderia=máquinas industriais lavando em círculo|Oficina=graxa, ferramentas e carros suspensos no elevador|Estação de metrô=trens rápidos passando nos trilhos subterrâneos|Porto=grandes guindastes movimentando contêineres marítimos|Ponte=estrutura suspensa que liga duas margens|" +
  "Túnel=passagem escura escavada por dentro do morro|Vulcão=cratera que pode expelir lava incandescente|Caverna=abertura profunda com estalactites no teto|Oceano=mar aberto de águas profundas e misteriosas|Rio Amazonas=o maior volume de água doce do planeta|" +
  "Sítio=casa de campo para descansar no fim de semana|Cabana=casinha rústica de madeira na serra|Cassino=mesas de roleta e baralhos em Las Vegas|Parque aquático=toboáguas gigantes que caem na piscina|Marte=o planeta vermelho vizinho da Terra|" +
  "Polo Norte=gelo permanente na morada do Papai Noel|Machu Picchu=cidade de pedra no alto dos Andes peruanos|Coliseu=antiga arena de gladiadores em Roma|Muralha da China=fortificação que atravessa montanhas asiáticas|Big Ben=famoso relógio na torre de Londres|" +
  "Estátua da Liberdade=tocha erguida na baía de Nova York|Taj Mahal=palácio de mármore branco na Índia|Veneza=gôndolas navegando pelos canais sem carros|Havaí=vulcões, praias tropicais e colares de flores|Grand Canyon=imensos desfiladeiros esculpidos pelo rio|" +
  "Ilha de Páscoa=gigantescas estátuas de pedra moai|Cataratas do Iguaçu=conjunto gigantesco de quedas d'água na fronteira|Antártida=o continente mais frio e desolado do planeta"
);

// Pistas para Animais
registerHints(
  "Elefante=longa tromba e orelhas enormes|Cachorro=o melhor amigo que abana o rabo|Girafa=pescoço comprido para comer folhas altas|Pinguim=ave de fraque preto que não voa no gelo|Tubarão=barbatana triangular cortando a água do mar|" +
  "Macaco=pula de galho em galho comendo banana|Coruja=gira a cabeça quase toda no escuro da noite|Tartaruga=casco duro e passos bem lentos|Leão=juba imponente e rugido de rei da selva|Cavalo=crina longa que galopa com ferraduras|" +
  "Polvo=oito tentáculos com ventosas e solta tinta|Canguru=salta alto com o filhote na bolsa da barriga|Zebra=pelagem cheia de listras brancas e pretas|Hipopótamo=animal pesado que fica submerso na lagoa|Rinoceronte=chifre espesso na ponta do focinho|" +
  "Crocodilo=dentes afiados na margem dos rios tropicais|Jacaré=réptil de escamas que toma sol na lagoa|Cobra=rasteja pelo chão sem patas com língua bifurcada|Sapo=pula na beira do brejo e captura moscas|Borboleta=asas coloridas que antes eram lagartas|" +
  "Abelha=produz mel e tem ferrão na colmeia|Formiga=carrega folhas pesadas em fila organizada|Aranha=tece teias nos cantos com oito patas|Escorpião=duas pinças e cauda com ferrão curvado|Gato=ronrona e cai sempre de pé com quatro patas|" +
  "Coelho=orelhas compridas e come cenoura pulando|Porco=focinho redondo que adora chafurdar na lama|Vaca=rumina o pasto e produz leite na fazenda|Galinha=cacareja e bota ovos no galinheiro|Pato=bico chato e nada na lagoa fazendo quá-quá|" +
  "Cisne=pescoço curvado elegante flutuando no lago|Águia=visão aguçada e garras fortes voando nas alturas|Papagaio=penas verdes que repete palavras ouvidas|Tucano=bico grande e colorido na copa das árvores|Flamingo=penas cor-de-rosa apoiado em uma perna só|" +
  "Golfinho=salta da água fazendo acrobacias inteligentes|Baleia=o maior mamífero dos oceanos que esguicha água|Foca=bate palmas com as nadadeiras no gelo|Urso=pelagem grossa que adora pescar salmão|Lobo=uiva para a lua cheia com sua alcateia|" +
  "Raposa=cauda felpuda e famosa pela astúcia|Veado=galhadas ramificadas correndo na floresta|Tigre=maior felino com listras alaranjadas na Ásia|Onça=pintinhas pretas no corpo pelo pantanal brasileiro|Panda=urso fofo que só come broto de bambu|" +
  "Gorila=bate forte no próprio peito na selva|Camelo=duas corcovas que resistem à sede no deserto|Morcego=único mamífero que voa no escuro por ecolocalização|Camaleão=muda a cor da pele para se camuflar|Caranguejo=anda de lado pela areia da praia|" +
  "Água-viva=corpo transparente e gelatinoso que queima|Pavão=abre uma cauda gigante com desenhos de olhos|Hiena=emite um som que parece uma risada debochada|Jaguatirica=felino selvagem brasileiro menor que a onça|Lontra=brincalhona que desliza de barriga na água|" +
  "Castor=dentes fortes que constroem represas de madeira|Esquilo=esconde nozes e tem cauda bem felpuda|Ouriço=espetado de espinhos pontiagudos como defesa|Tamanduá=focinho fino e comprido comendo formigas|Preguiça=dorme de cabeça para baixo pendurada lentamente|" +
  "Capivara=o maior roedor do mundo tranquilo na beira do rio|Tatu=se enrola formando uma bola blindada|Arara=penas azuis e amarelas voando em duplas|Pelicano=bolsa elástica sob o bico para pegar peixes|Beija-flor=bate as asas tão rápido que parece parado no ar|" +
  "Pombo=ave cinzenta que bica migalhas na praça|Ovelha=coberta por lã fofinha tosquiada no pasto|Alce=chifres gigantescos em formato de pás no Alasca|Rena=puxa trenós e tem cascos adaptados à neve|Lêmure=olhos arregalados e cauda anelada em Madagascar|" +
  "Suricato=fica ereto nas patas traseiras vigiando o horizonte|Hamster=corre na rodinha e guarda comida nas bochechas|Iguana=lagarto verde que toma sol nos galhos tropicais|Cascavel=chocalho na ponta da cauda avisando o perigo|Piranha=peixe de rio com mandíbula cortante|" +
  "Peixe-palhaço=laranja com listras brancas aninhado na anêmona|Cavalo-marinho=pequeno peixe vertical onde o macho fica grávido|Lula=corpo em tubo com dez tentáculos nas profundezas|Estrela-do-mar=cinco pontas grudadas nas pedras do recife|Mosquito=zumbido irritante no ouvido à noite|" +
  "Joaninha=casca vermelha com pintinhas pretas no jardim|Louva-a-deus=patas dianteiras dobradas como se estivesse rezando|Axolote=salamandra rosada mexicana que regenera membros|Ornitorrinco=bico de pato, cauda de castor e bota ovos|Dragão-de-Komodo=o maior lagarto carnívoro do mundo|" +
  "Chita=o animal terrestre mais veloz em corrida curta|Surucucu=a maior serpente peçonhenta da América do Sul|Zangão=macho da colmeia sem ferrão|Peixe-boi=mamífero dócil e rechonchudo das águas calmas|Bicho-da-seda=lagarta que fia casulos preciosos"
);

// Pistas para Profissões
registerHints(
  "Médico=estetoscópio no peito e jaleco branco|Bombeiro=mangueira potente apagando incêndios com sirene|Professor=giz ou canetão explicando a matéria aos alunos|Cozinheiro=avental e chapéu alto comandando a cozinha|Piloto=comanda a manche do avião na cabine de comando|" +
  "Policial=farda, distintivo e viatura patrulhando as ruas|Dentista=motorzinho e cadeira com luz focada na boca|Pirata=tapa-olho, perna de pau e baú do tesouro|Astronauta=traje pressurizado flutuando no espaço sem gravidade|Padeiro=acorda na madrugada para sovar a massa do pão|" +
  "Jogador de futebol=chuteira, meiões e corre atrás da bola no campo|Youtuber=câmera ligada pedindo like e inscrição no canal|Advogado=processos e defesas perante o juiz no tribunal|Engenheiro=capacete branco na obra acompanhando a construção|Arquiteto=desenha plantas de casas e edifícios modernos|" +
  "Enfermeiro=aplica injeções e cuida dos pacientes no leito|Veterinário=examina cachorros e gatos doentes na clínica|Motorista=mãos no volante transportando passageiros no trânsito|Pedreiro=assenta tijolos com colher de pedreiro e cimento|Eletricista=alicates e fita isolante consertando a fiação elétrica|" +
  "Encanador=chaves inglesas desentupindo canos e vazamentos|Cabeleireiro=tesouras afiadas cortando e modelando o cabelo|Garçom=equilibra a bandeja com copos e anota pedidos|Fotógrafo=lente com zoom buscando o ângulo perfeito para o clique|Jornalista=microfone na mão apurando notícias de última hora|" +
  "Cantor=solta a voz no palco diante de uma multidão|Ator=interpreta personagens no palco ou na televisão|Palhaço=nariz vermelho e sapatos gigantes fazendo rir|Mágico=cartola preta tirando um coelho da manga|Detetive=lupa e sobretudo investigando pistas deixadas para trás|" +
  "Juiz=bate o martelo de madeira ditando a sentença|Cientista=tubos de ensaio e microscópio em experimentos|Programador=passa o dia digitando linhas de código no teclado|Músico=toca acordes e melodias no seu instrumento|Pintor=pincel e paleta de tintas colorindo a tela|" +
  "Escritor=cria histórias e capítulos para serem impressos em livros|Agricultor=trator e enxada cultivando a terra para a colheita|Pescador=vara, anzol e rede esperando o peixe puxar|Soldado=farda camuflada e marcha com disciplina militar|Jardineiro=tesoura de poda e adubo cuidando das plantas e flores|" +
  "Carteiro=bolsa cheia de cartas e pacotes entregues de porta em porta|Vendedor=conversa e apresenta produtos para bater metas|Faxineiro=balde, esfregão e desinfetante deixando tudo limpo|Cirurgião=bisturi e máscara na sala de cirurgia do hospital|Maquiador=pincéis, sombras e batons transformando o visual|" +
  "Personal trainer=cronômetro e incentivo para fazer mais repetições|Bailarino=sapatilhas de ponta e passos graciosos de dança|Ladrão=se esgueira no escuro tentando fugir sem ser visto|Rei=coroa dourada sentado em seu trono no castelo|Vidente=olha fixamente para uma bola de cristal prevendo o futuro|" +
  "Treinador=prancheta tática e apito comandando a equipe|Árbitro=cartões amarelo e vermelho apitando as faltas do jogo|Dublador=grava a voz em português sincronizada com a boca do ator|Roteirista=escreve os diálogos e cenas que serão filmados|Diretor de cinema=grita corta e ação atrás do monitor|" +
  "Locutor=voz aveludada transmitindo notícias pelo rádio|Influenciador=grava stories mostrando o dia a dia e recebidos|Streamer=faz lives ao vivo jogando e interagindo com o chat|Barista=faz desenhos decorados na espuma do café espresso|Sommelier=cheira e avalia taças de vinho refinado|" +
  "Confeiteiro=decora bolos com chantilly e saco de confeitar|Açougueiro=amola o cutelo para cortar carnes com precisão|Costureira=fita métrica no pescoço e linha passando pela agulha|Alfaiate=costura ternos e camisas sob medida|Mecânico=chave de boca debaixo do capô consertando o motor|" +
  "Frentista=pergunta se vai querer gasolina comum ou aditivada|Taxista=liga o taxímetro e conhece todos os caminhos da cidade|Salva-vidas=apito no pescoço e boia na praia de olho nos banhistas|Porteiro=controla o interfone e a entrada de pessoas no prédio|Recepcionista=atende telefonemas e recebe visitantes no balcão|" +
  "Contador=calcula impostos e planilhas contábeis das empresas|Psicólogo=escuta atenta e paciente deitado no divã|Nutricionista=planeja dietas balanceadas e cardápios saudáveis|Fisioterapeuta=alongamentos e exercícios para reabilitar movimentos|Farmacêutico=carimba receitas médicas e orienta sobre os remédios|" +
  "Astrônomo=telescópio apontado para estrelas e galáxias distantes|Biólogo=analisa amostras de células e DNA na natureza|Químico=mistura substâncias observando reações no laboratório|Bibliotecário=organiza estantes e faz sinal de silêncio aos leitores|Tradutor=passa textos de um idioma para outro com precisão|" +
  "Mergulhador=cilindro de oxigênio e nadadeiras no fundo do mar|Alpinista=mosquetões e cordas escalando paredões de pedra|Arqueólogo=pincel cuidadoso desenterrando fósseis antigos|Carpinteiro=aplainar e lixar pranchas de madeira pura|Segurança=braços cruzados e terno preto vigiando o local|" +
  "Espião=identidade falsa e microfones secretos transmitindo dados|Guia turístico=bandeirinha levantada mostrando monumentos aos turistas"
);

// Pistas para Jogos & Games
registerHints(
  "Minecraft=blocos quadrados para minerar e construir|GTA V=três personagens no mundo aberto do crime|Fortnite=construção de paredes e pulo do ônibus voador|Super Mario Bros=encanador pulando em canos e comendo cogumelos|Sonic the Hedgehog=ouriço azul supersônico coletando anéis dourados|" +
  "The Legend of Zelda=Link explorando Hyrule com a Espada Mestre|God of War=Kratos com as Lâminas do Caos enfrentando deuses|Counter-Strike=plantar ou desarmar a bomba C4 na Dust 2|League of Legends=destruir o Nexus inimigo em Summoner's Rift|Valorant=tiros precisos com agentes de habilidades na Spike|" +
  "Free Fire=battle royale no celular com capa e granada de gelo|Resident Evil=sobreviver a zumbis e vírus com pouca munição|Mortal Kombat=golpes brutais terminando com Fatality sangrento|Pokémon Red/Blue=escolher Charmander, Bulbasaur ou Squirtle|Roblox=plataforma com milhares de minigames criados por usuários|" +
  "FIFA / EA FC=partidas virtuais de futebol com cartas do Ultimate Team|The Witcher 3=Geralt de Rívia caçando monstros com duas espadas|Elden Ring=morrer várias vezes nas Terras Intermédias com cavalo espectral|Tetris=encaixar peças geométricas coloridas que caem do topo|Pac-Man=círculo amarelo comendo pastilhas e fugindo de fantasmas|" +
  "Among Us=achar o impostor que sabota a nave espacial|Clash Royale=jogar cartas no tabuleiro para derrubar as torres do rei|Brawl Stars=batalhas rápidas 3 contra 3 com vários lutadores|Call of Duty=guerra em primeira pessoa com helicópteros e fuzis|Overwatch=heróis com habilidades únicas disputando a carga|" +
  "Street Fighter=Ryu soltando Hadouken e Shoryuken na arena|The Last of Us=Joel e Ellie cruzando um mundo infectado por fungos|Red Dead Redemption 2=cowboys fora da lei cavalgando pelo Velho Oeste|Cyberpunk 2077=implantes cibernéticos na futurista Night City|Genshin Impact=mundo aberto de Teyvat com sete elementos mágicos|" +
  "Fall Guys=jujubas coloridas tropeçando em pistas de obstáculos|Angry Birds=estilingue atirando passarinhos contra porcos verdes|Subway Surfers=fugir do guarda correndo sobre os trilhos do trem|Candy Crush=combinar doces coloridos de três em três|Need for Speed=corridas clandestinas tunando carros e fugindo da polícia|" +
  "Dark Souls=acender fogueiras e rolar para esquivar de chefões colossais|Crash Bandicoot=marsupial girando e quebrando caixas de madeira|Tomb Raider=Lara Croft explorando tumbas antigas com duas pistolas|Doom=matar demônios no inferno ao som de heavy metal pesado|Halo=Master Chief de armadura verde enfrentando o Covenant|" +
  "Assassin's Creed=capuz branco e lâmina oculta saltando no fardo de feno|Donkey Kong=gorila atirando barris e coletando cachos de bananas|Terraria=aventura 2D subterrânea minerando e enfrentando olhos voadores|Stardew Valley=cuidar da fazendinha, plantar sementes e fazer amigos na vila|Rocket League=futebol jogado com carros que dão cambalhotas com turbo|" +
  "Cuphead=desenho antigo anos 30 com xícaras enfrentando chefes difíceis|Hollow Knight=pequeno cavaleiro com agulha explorando o reino de Hallownest|Five Nights at Freddy's=vigiar câmeras de segurança contra animatrônicos assustadores|Brawlhalla=luta em plataformas para arremessar o oponente para fora da tela"
);

// Pistas para Filmes & Séries
registerHints(
  "Harry Potter=óculos redondos, varinha e escola de magia de Hogwarts|O Senhor dos Anéis=o Um Anel que precisa ser destruído na Montanha da Perdição|Star Wars=sabres de luz, a Força e naves espaciais como a Millennium Falcon|Vingadores: Ultimato=o estalo final com as seis joias do infinito|Titanic=o navio gigantesco que colide com o iceberg na viagem inaugural|" +
  "Matrix=pílula vermelha ou azul para acordar da simulação virtual|Stranger Things=luzes piscando e o Mundo Invertido na cidade de Hawkins|Game of Thrones=disputa pelo Trono de Ferro com dragões e o inverno chegando|Breaking Bad=professor de química de metanfetamina azul no deserto|La Casa de Papel=macacão vermelho e máscara de Salvador Dalí assaltando a casa da moeda|" +
  "Peaky Blinders=boinas com lâminas na Inglaterra pós-guerra|Shrek=ogro verde que quer apenas a paz do seu pântano|Toy Story=brinquedos que ganham vida quando os humanos saem do quarto|Jurassic Park=parque com dinossauros clonados que fogem das cercas elétricas|Piratas do Caribe=bússola que não aponta para o norte e muito rum no mar|" +
  "Coringa (Filme)=palhaço solitário dançando na grande escadaria|O Poderoso Chefão=oferta que ele não pode recusar com a máfia italiana|De Volta para o Futuro=DeLorean que viaja no tempo a 88 milhas por hora|Avatar=seres azuis gigantes protegendo a natureza de Pandora|Clube da Luta=a primeira regra é que você não fala sobre isso|" +
  "Interestelar=buraco de minhoca e a passagem do tempo em outros planetas|O Rei Leão=o círculo da vida no topo da Pedra do Reino|Homem-Aranha no Aranhaverso=salto de fé com tênis Nike em Nova York|Round 6 (Squid Game)=boneca gigante que canta batatinha frita um dois três|The Walking Dead=grupo de sobreviventes fugindo de hordas de zumbis|" +
  "The Office=pegadinhas e comédia no escritório de uma fábrica de papel|Friends=seis amigos tomando café no sofá do Central Perk|Wandinha=filha gótica da Família Addams investigando assassinatos na escola|Dark=viagem no tempo em ciclos de 33 anos na cidadezinha alemã|Chaves=menino que mora no barril da vila e adora sanduíche de presunto|" +
  "Monstros S.A.=fábrica que gera energia a partir dos gritos de crianças|Procurando Nemo=peixinho com nadadeira menor perdido no mar de Sydney|Os Incríveis=família inteira de super-heróis em uniformes vermelhos combinando|Carros (Pixar)=Relâmpago McQueen aprendendo a humildade em Radiator Springs|Frozen=duas irmãs princesas cantando Livre Estou no castelo de gelo|" +
  "Madagascar=quatro animais do zoológico que naufragam numa ilha africana|Kung Fu Panda=urso panda rechonchudo escolhido como o Guerreiro Dragão|Homens de Preto=terno escuro e caneta que apaga a memória das testemunhas|Velozes e Furiosos=corridas velozes onde o mais importante é sempre a família|John Wick=vingança implacável após tirarem seu cachorrinho|" +
  "Gladiador=general romano que virou escravo e lutou na arena do Coliseu|O Show de Truman=sua vida inteira transmitida ao vivo para o mundo sem ele saber|Pantera Negra (Filme)=cidade tecnológica oculta de Wakanda para sempre|Barbie (Filme)=sai da Barbieland cor-de-rosa para conhecer o mundo real|Oppenheimer=cientista que liderou o desenvolvimento da bomba atômica|" +
  "Todo Mundo Odeia o Chris=garoto crescendo no Brooklyn nos anos 80 com pai de dois empregos"
);

// Pistas para Animes & Desenhos
registerHints(
  "Dragon Ball Z=esferas que invocam o dragão Sheng Long realizando desejos|Naruto Shippuden=ninja com jaqueta laranja sonhando em virar Hokage|One Piece=pirata que estica navegando em busca do maior tesouro do mundo|Attack on Titan=muralhas gigantes protegendo a humanidade de titãs devoradores|Demon Slayer=caçador de demônios carregando a irmã na caixa de madeira|" +
  "Jujutsu Kaisen=feiticeiros jujutsu exorcizando maldições com energia amaldiçoada|Death Note=caderno preto que mata quem tem o nome escrito nele|Pokémon=capturar criaturinhas em esferas vermelhas e brancas|Os Cavaleiros do Zodíaco=armaduras de bronze queimando o cosmo pela deusa Atena|Bob Esponja=calça quadrada fazendo hambúrguer de siri no fundo do mar|" +
  "Pica-Pau=pássaro de topete vermelho com risada inconfundível|Tom e Jerry=gato e rato em perseguições eternas pela casa|Os Simpsons=família de pele amarela morando na cidade de Springfield|Rick e Morty=cientista alcoólatra maluco abrindo portais com o neto inseguro|Ben 10=relógio alienígena que permite se transformar em dez seres|" +
  "As Meninas Superpoderosas=açúcar, tempero e tudo que há de bom com o elemento X|Hora de Aventura=um garoto humano e um cachorro mágico na Terra de Ooo|O Incrível Mundo de Gumball=gato azul e peixe com pernas se metendo em confusão na escola|Apenas um Show=um gaio-azul e um guaxinim trabalhando na manutenção do parque|Scooby-Doo=quatro jovens e um cão medroso desmascarando monstros falsos|" +
  "Phineas e Ferb=dois irmãos inventando engenhocas gigantes nas férias de verão|Avatar: A Lenda de Aang=o último dobrador de ar que domina os quatro elementos|Bleach=garoto de cabelo laranja que vira ceifeiro de almas com zangetsu|Hunter x Hunter=exame rigoroso de caçadores com uso de energia Nen|Fullmetal Alchemist=dois irmãos buscando a Pedra Filosofal pela troca equivalente|" +
  "My Hero Academia=escola para jovens que nasceram com dons e individualidades|Sailor Moon=guerreira lunar lutando pelo amor e pela justiça|Digimon=crianças digitais com parceiros monstros evoluindo no digimundo|Yu-Gi-Oh!=duelo de cartas invocando o Dragão Branco de Olhos Azuis|One Punch Man=herói por hobby que derrota qualquer oponente com um golpe só|" +
  "Chainsaw Man=garoto que se funde com demônio motosserra com lâminas no corpo|Spy x Family=espião, assassina de aluguel e filha telepata fingindo ser família|Tokyo Ghoul=jovem metade humano metade criatura que só se alimenta de carne humana|Gravity Falls=dois irmãos gêmeos passando as férias numa cabana cheia de mistérios|Laboratório de Dexter=menino gênio com laboratório secreto atrás da estante|" +
  "Coragem, o Cão Covarde=cachorrinho rosa assustado protegendo seus donos no Meio do Nada|Johnny Bravo=óculos escuros e topete loiro tentando paquerar sem sucesso|Danny Phantom=adolescente que ganha poderes fantasmagóricos ao entrar no portal|Os Padrinhos Mágicos=menino de boné rosa com duas fadas disfarçadas de peixinhos"
);

// Pistas para Esportes
registerHints(
  "Futebol=onze jogadores de cada lado chutando a bola para fazer o gol|Basquete=arremessar a bola laranja dentro da cesta suspensa na tabela|Vôlei=cortar a bola por cima da rede sem deixá-la cair na quadra|Tênis=rebater com a raquete uma bolinha amarela felpuda na quadra|Natação=dar braçadas rápidas na piscina de raias com touca e óculos|" +
  "Judô=derrubar o adversário no tatame aplicando um ippon perfeito|Skate=andar sobre a lancha com quatro rodinhas deslizando em corrimãos|Surfe=ficar em pé sobre a prancha deslizando por dentro do tubo da onda|Boxe=luvas acolchoadas trocando socos dentro das quatro cordas do ringue|Fórmula 1=carros monopostos velozes parando nos boxes em alta velocidade|" +
  "Atletismo=corridas de velocidade, saltos e arremessos na pista oval|Ciclismo=pedalar quilômetros na estrada ou na pista com capacete aerodinâmico|Handebol=arremessar a bola com as mãos no gol defendido pelo goleiro|Ginástica Artística=saltos acrobáticos nas barras assimétricas e solo com música|Futebol Americano=avançar jardas com a bola oval buscando o touchdown|" +
  "Beisebol=bater na bola com o taco de madeira e correr pelas quatro bases|Golfe=acertar a bolinha branca no buraco com o menor número de tacadas|Karatê=golpes retos com mãos e pés usando kimono branco e faixa preta|Taekwondo=arte marcial coreana focada em chutes altos e acrobáticos|Jiu-jitsu=luta de chão com alavancas, chaves de braço e estrangulamentos|" +
  "MMA / UFC=combate dentro da jaula octogonal misturando todas as artes marciais|Tênis de Mesa (Ping-pong)=raquetes pequenas com borracha rebatendo a bolinha leve|Badminton=rebater uma peteca leve com raquete fina por cima da rede|Rugby=formação scrum e passe de bola oval somente para trás|Hipismo=saltar obstáculos montado a cavalo com postura elegante|" +
  "Canoagem=remar com força e sincronia em caiaques cortando a correnteza|Polo Aquático=jogar bola com as mãos nadando sem colocar os pés no fundo|Tiro com Arco=puxar a corda e mirar a flecha no centro amarelo do alvo|Esgrima=lâmina fina com protetor facial buscando tocar no adversário|Hóquei no Gelo=patinar veloz no gelo usando tacos para empurrar o disco preto|" +
  "Escalada=subir paredões verticais de pedra segurando em pequenas frestas|Futsal=bola mais pesada que quica pouco jogada na quadra de salão|Futevôlei=jogar a bola de futebol por cima da rede de praia sem usar as mãos|Vôlei de Praia=dupla de jogadores descalços pulando na areia fofa|Crossfit=pneus gigantes, barras com peso e cordas em treinos intensos|" +
  "Maratona=corrida de rua com mais de quarenta e dois quilômetros de resistência|Boliche=jogar a bola pesada com três furos para derrubar os dez pinos|Capoeira=roda com berimbau e ginga misturando dança com luta|Sinuca=taco longo acertando a bola branca para encaçapar as bolas coloridas"
);

// DICAS GENÉRICAS PARA O IMPOSTOR POR CATEGORIA
const HINTS = {
  "Super-herói": [
    "Muita criança já quis ser ou se fantasiar disso",
    "Já apareceu em quadrinhos, filmes de grande bilheteria ou desenhos animados",
    "Costuma ter uma identidade secreta, uniforme marcante ou símbolo no peito",
    "Quase sempre está em um grande conflito entre heróis e vilões",
    "Tem fãs apaixonados em eventos de cultura pop e convenções",
    "Geralmente possui algum poder especial, arma lendária ou traje tecnológico"
  ],
  "Famosos": [
    "Muita gente conhece e já ouviu falar, mas quase ninguém viu de perto",
    "Provavelmente já virou meme ou assunto viral nas redes sociais",
    "Tem milhões de fãs, mas também não agrada todo mundo",
    "Costuma ser assunto comum em conversas descontraídas",
    "Aparece frequentemente em telas de televisão, cinema ou celulares",
    "Alguém da turma certamente tem uma opinião formada sobre essa pessoa"
  ],
  "Comida": [
    "Combina perfeitamente com momentos de encontro e confraternização",
    "Pode trazer muitas lembranças gostosas de infância",
    "Costuma acabar bem rápido quando junta a galera com fome",
    "Tem quem ame de paixão e tem gente que não chega nem perto",
    "Pode ser servido em dias comuns de semana ou em festas especiais",
    "O cheirinho quando está sendo preparado dá água na boca"
  ],
  "Objeto": [
    "A gente quase não repara, até o momento em que precisa usar",
    "Alguém da roda já perdeu, quebrou ou esqueceu um desses em algum lugar",
    "Dá para encontrar com facilidade em praticamente qualquer casa",
    "Pode ser algo pequeno de carregar no bolso ou um item bem grande",
    "Costuma ter um lugar certo para ser guardado, mas nem sempre está lá",
    "Geralmente tem uma utilidade prática e bem definida"
  ],
  "Lugar": [
    "Você já deve ter passado por um lugar desses ou visto em fotos",
    "Tem horários ou épocas em que fica bem cheio de gente",
    "Muita gente guarda memórias boas ou divertidas ligadas a esse ambiente",
    "Pode ser bem perto de você ou exigir uma longa viagem para visitar",
    "Algumas pessoas vão por obrigação do dia a dia, outras por puro lazer",
    "Costuma ter sons, cheiros e movimentação bem característicos"
  ],
  "Animal": [
    "Alguém da turma provavelmente já viu um de perto ou tomou um susto",
    "Aparece com frequência em histórias infantis, desenhos e fábulas",
    "Tem quem ache fofinho e tem quem sinta receio ou medo",
    "Vive em um habitat bem específico na natureza ou pertinho dos humanos",
    "Tem características físicas ou sons que todo mundo reconhece",
    "Faz parte de ditados populares ou apelidos bem conhecidos"
  ],
  "Profissão": [
    "Alguém que você ou sua família já precisou contratar ou recorrer",
    "Tem uma rotina de trabalho própria com equipamentos específicos",
    "Todo mundo já viu alguém exercendo essa função em algum momento",
    "Tem gente que sonha com essa carreira desde a infância",
    "Pode exigir anos de estudo, treino duro ou vocação natural",
    "Geralmente usa algum uniforme, ferramenta ou roupa apropriada"
  ],
  "Jogos & Games": [
    "Milhões de pessoas já passaram horas na frente da tela jogando isso",
    "Tem trilha sonora, personagens ou gráficos que marcaram época",
    "Dá para jogar sozinho ou competir com amigos online",
    "Pode ser no computador, console de mesa ou direto no celular",
    "Tem desafios, fases ou missões que já tiraram a paciência de muita gente",
    "É assunto garantido em qualquer roda que goste de videogames"
  ],
  "Filmes & Séries": [
    "Muita gente já maratonou ou assistiu no cinema comendo pipoca",
    "Tem frases marcantes que as pessoas repetem no dia a dia",
    "Tem personagens inesquecíveis e cenas que viraram clássicos",
    "Costuma ter trilha sonora épica e momentos de suspense ou risada",
    "Pode ser animação, ação, suspense, drama ou comédia",
    "Ganhou prêmios ou virou febre de audiência pelo mundo"
  ],
  "Animes & Desenhos": [
    "Gerações inteiras cresceram assistindo isso na televisão ou na internet",
    "Tem aberturas musicais marcantes que a galera sabe cantar",
    "Tem traços característicos de animação japonesa ou ocidental",
    "Os personagens costumam ter golpes, bordões ou visuais icônicos",
    "Cheio de momentos épicos de amizade, comédia ou batalhas",
    "Muito comum de ver cosplays disso em eventos de anime"
  ],
  "Esportes": [
    "Envolve disputa entre equipes ou competidores individuais",
    "Tem regras claras, árbitros e uma forma específica de pontuar",
    "Muitos já praticaram na escola, na rua ou no clube",
    "Tem campeonatos mundiais e gera torcidas muito apaixonadas",
    "Exige esforço físico, agilidade, mira ou trabalho em equipe",
    "Costuma usar algum acessório como bola, raquete, rede ou uniforme"
  ],
  "Misto": [
    "Pense em algo que você já viu, ouviu falar ou utilizou recentemente",
    "Tem a ver com algo bastante conhecido pela maioria das pessoas da turma",
    "Não é algo tão raro quanto pode parecer à primeira vista",
    "Alguém do grupo com certeza tem alguma história curiosa sobre isso",
    "Preste muita atenção nas pistas dos outros jogadores antes de falar"
  ]
};

// PARES PARA O MODO MÍMICA E DUPLAS
const PARES = {
  "Super-herói": [
    "Batman|Robin", "Superman|Supergirl", "Thor|Loki", "Hulk|Mulher-Hulk", "Goku|Vegeta",
    "Naruto|Sasuke", "Wolverine|Deadpool", "Homem de Ferro|Máquina de Combate",
    "Capitão América|Soldado Invernal", "Aquaman|Namor", "Coringa|Arlequina",
    "Mulher-Maravilha|Valquíria", "Homem-Formiga|Vespa", "Doutor Estranho|Feiticeira Escarlate",
    "Pantera Negra|Mulher-Gato", "Thanos|Darkseid", "Gamora|Nebulosa",
    "Leonardo (Tartaruga)|Raphael", "Donatello|Michelangelo", "Homem-Aranha|Miles Morales",
    "Venom|Carnificina", "Lanterna Verde|Sinestro", "Tempestade|Jean Grey",
    "Magneto|Professor Xavier", "Flash|Kid Flash", "Goku|Luffy", "All Might|Deku"
  ],
  "Famosos": [
    "Neymar|Messi", "Cristiano Ronaldo|Kylian Mbappé", "Pelé|Ronaldinho Gaúcho", "Xuxa|Ivete Sangalo",
    "Anitta|Ludmilla", "Michael Jackson|Bruno Mars", "Beyoncé|Rihanna", "Taylor Swift|Billie Eilish",
    "Justin Bieber|Ed Sheeran", "Gusttavo Lima|Luan Santana", "Felipe Neto|Luccas Neto",
    "Tom Cruise|Brad Pitt", "Leonardo DiCaprio|Will Smith", "Elon Musk|Mark Zuckerberg",
    "Silvio Santos|Faustão", "Ratinho|Luciano Huck", "Fátima Bernardes|Tiago Leifert",
    "Shakira|Lady Gaga", "Ayrton Senna|Lewis Hamilton", "Marília Mendonça|Ana Castela",
    "Whindersson Nunes|Casimiro", "Robert Downey Jr.|Tom Holland", "Margot Robbie|Ryan Reynolds"
  ],
  "Comida": [
    "Pizza|Esfiha", "Hambúrguer|Sanduíche", "Sorvete|Açaí", "Lasanha|Macarrão", "Coxinha|Kibe",
    "Brigadeiro|Beijinho", "Pudim|Bolo de chocolate", "Pipoca|Batata frita", "Churrasco|Picanha",
    "Feijoada|Baião de dois", "Moqueca|Sopa", "Chocolate|Paçoca", "Tapioca|Cuscuz",
    "Pamonha|Pão de queijo", "Sushi|Yakisoba", "Strogonoff|Risoto", "Omelete|Panqueca",
    "Churros|Donut", "Algodão doce|Pipoca doce", "Cachorro-quente|Hambúrguer", "Pastel|Taco",
    "Croissant|Crepe", "Nachos|Burrito", "Fondue|Petit Gâteau"
  ],
  "Objeto": [
    "Balança|Relógio", "Tesoura|Faca", "Espelho|Óculos", "Guarda-chuva|Cobertor", "Violão|Microfone",
    "Escada|Cadeira", "Bicicleta|Skate", "Controle remoto|Celular", "Cadeado|Chave",
    "Travesseiro|Cama", "Caneta|Calculadora", "Garfo|Colher", "Panela|Prato",
    "Ventilador|Lâmpada", "Televisão|Câmera", "Fone de ouvido|Capacete", "Carteira|Moeda",
    "Mochila|Mala", "Boné|Tênis", "Sabonete|Toalha", "Geladeira|Guarda-roupa",
    "Furadeira|Martelo", "Notebook|Tablet", "Mouse|Teclado", "Isqueiro|Vela"
  ],
  "Lugar": [
    "Praia|Piscina", "Biblioteca|Museu", "Castelo|Pirâmide do Egito", "Circo|Teatro",
    "Cinema|Shopping", "Montanha|Cachoeira", "Aeroporto|Rodoviária", "Hospital|Farmácia",
    "Estádio|Academia", "Farol|Torre Eiffel", "Zoológico|Aquário", "Escola|Universidade",
    "Igreja|Cemitério", "Padaria|Mercado", "Parque|Praça", "Hotel|Restaurante",
    "Floresta|Deserto", "Fazenda|Ilha", "Cadeia|Delegacia", "Cozinha|Banheiro",
    "Quarto|Garagem", "Parque de diversões|Disney", "Salão de beleza|Barbearia"
  ],
  "Animal": [
    "Elefante|Rinoceronte", "Cachorro|Lobo", "Gato|Tigre", "Leão|Onça", "Girafa|Camelo",
    "Pinguim|Foca", "Tubarão|Golfinho", "Macaco|Gorila", "Coruja|Morcego", "Tartaruga|Jacaré",
    "Cavalo|Zebra", "Polvo|Água-viva", "Canguru|Coelho", "Cobra|Escorpião", "Sapo|Camaleão",
    "Borboleta|Abelha", "Formiga|Aranha", "Porco|Vaca", "Galinha|Pato", "Cisne|Flamingo",
    "Águia|Papagaio", "Urso|Panda", "Capivara|Tamanduá", "Caranguejo|Lula"
  ],
  "Profissão": [
    "Médico|Enfermeiro", "Bombeiro|Policial", "Professor|Cientista", "Cozinheiro|Padeiro",
    "Piloto|Astronauta", "Dentista|Cirurgião", "Pirata|Soldado", "Advogado|Juiz",
    "Engenheiro|Arquiteto", "Pedreiro|Eletricista", "Cabeleireiro|Maquiador", "Fotógrafo|Jornalista",
    "Cantor|Músico", "Ator|Palhaço", "Mágico|Vidente", "Pintor|Escritor", "Agricultor|Jardineiro",
    "Carteiro|Motorista", "Treinador|Árbitro", "Garçom|Vendedor", "Programador|Detetive"
  ],
  "Jogos & Games": [
    "Minecraft|Terraria", "GTA V|Red Dead Redemption 2", "Fortnite|Free Fire",
    "Super Mario Bros|Sonic the Hedgehog", "The Legend of Zelda|Elden Ring",
    "Counter-Strike|Valorant", "League of Legends|Brawl Stars", "God of War|Dark Souls",
    "Resident Evil|The Last of Us", "Mortal Kombat|Street Fighter", "Tetris|Pac-Man",
    "Roblox|Among Us", "Call of Duty|Overwatch", "Fall Guys|Rocket League"
  ],
  "Filmes & Séries": [
    "Harry Potter|O Senhor dos Anéis", "Star Wars|Star Trek", "Titanic|Avatar",
    "Breaking Bad|Peaky Blinders", "Stranger Things|Dark", "Game of Thrones|Vikings",
    "Toy Story|Monstros S.A.", "Shrek|Kung Fu Panda", "Matrix|Interestelar",
    "Friends|The Office", "La Casa de Papel|Round 6 (Squid Game)", "Jurassic Park|King Kong"
  ],
  "Animes & Desenhos": [
    "Dragon Ball Z|Naruto Shippuden", "One Piece|Bleach", "Attack on Titan|Death Note",
    "Demon Slayer|Jujutsu Kaisen", "Pokémon|Digimon", "Bob Esponja|Pica-Pau",
    "Tom e Jerry|Scooby-Doo", "Os Simpsons|Rick e Morty", "Ben 10|Danny Phantom",
    "As Meninas Superpoderosas|Hora de Aventura", "My Hero Academia|One Punch Man"
  ],
  "Esportes": [
    "Futebol|Futsal", "Basquete|Handebol", "Vôlei|Vôlei de Praia", "Tênis|Tênis de Mesa (Ping-pong)",
    "Natação|Polo Aquático", "Boxe|MMA / UFC", "Judô|Karatê", "Skate|Surfe",
    "Fórmula 1|Ciclismo", "Atletismo|Maratona", "Futebol Americano|Rugby", "Capoeira|Ginástica Artística"
  ]
};
