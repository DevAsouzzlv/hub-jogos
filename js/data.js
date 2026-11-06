/**
 * HUB DE JOGOS - BANCO DE DADOS COMPLETO E REFINADO
 * Suporte a:
 * - wordHint: APENAS UMA PALAVRA (sutil e desafiadora)
 * - phraseHint: UMA FRASE CURTA (enigmática e não óbvia)
 * - HEROES_DATABASE com categorias para filtros (Marvel, DC, Anime, Outros)
 * - Novos temas (Jogos, Filmes/Séries, Animes/Desenhos, Esportes)
 */

// SUPER-HERÓIS COM UNIVERSOS, PALAVRA ÚNICA E FRASE CURTA
const HEROES_DATABASE = [
  // MARVEL
  { name: "Homem-Aranha", universe: "marvel", wordHint: "aracnídeo", phraseHint: "Costuma escalar prédios quando a cidade dorme." },
  { name: "Homem de Ferro", universe: "marvel", wordHint: "reator", phraseHint: "Um coração de metal impulsionado por tecnologia." },
  { name: "Thor", universe: "marvel", wordHint: "tempestade", phraseHint: "Desce dos céus com o estrondo dos trovões." },
  { name: "Hulk", universe: "marvel", wordHint: "fúria", phraseHint: "O descontrole emocional liberta a fera." },
  { name: "Capitão América", universe: "marvel", wordHint: "símbolo", phraseHint: "Acordou no presente carregando a honra do passado." },
  { name: "Viúva Negra", universe: "marvel", wordHint: "infiltração", phraseHint: "Criada nas sombras sem deixar rastros." },
  { name: "Gavião Arqueiro", universe: "marvel", wordHint: "pontaria", phraseHint: "Nunca erra o alvo mesmo a longa distância." },
  { name: "Pantera Negra", universe: "marvel", wordHint: "vibranium", phraseHint: "Herdeiro do trono guardião da montanha sagrada." },
  { name: "Doutor Estranho", universe: "marvel", wordHint: "místico", phraseHint: "Manipula as dobras do tempo e da realidade." },
  { name: "Feiticeira Escarlate", universe: "marvel", wordHint: "feitiço", phraseHint: "Pode reescrever a realidade com a própria dor." },
  { name: "Visão", universe: "marvel", wordHint: "sintético", phraseHint: "Uma joia brilhando na testa de quem busca a humanidade." },
  { name: "Falcão", universe: "marvel", wordHint: "voo", phraseHint: "Cruza os ares com asas metálicas coordenadas." },
  { name: "Soldado Invernal", universe: "marvel", wordHint: "amnésia", phraseHint: "Um passado congelado que voltou como pesadelo." },
  { name: "Homem-Formiga", universe: "marvel", wordHint: "escala", phraseHint: "O segredo está em mudar de dimensão num clique." },
  { name: "Vespa", universe: "marvel", wordHint: "ferrão", phraseHint: "Ágil no ar e ataca com precisão microscópica." },
  { name: "Capitã Marvel", universe: "marvel", wordHint: "fóton", phraseHint: "Energia pura cruzando galáxias inteiras." },
  { name: "Máquina de Combate", universe: "marvel", wordHint: "artilharia", phraseHint: "Armadura pesada com protocolo estritamente militar." },
  { name: "Groot", universe: "marvel", wordHint: "madeira", phraseHint: "Suas poucas palavras escondem um coração enorme." },
  { name: "Rocket Raccoon", universe: "marvel", wordHint: "explosivo", phraseHint: "Pequeno no tamanho e implacável no gatilho." },
  { name: "Star-Lord", universe: "marvel", wordHint: "fita", phraseHint: "Navega pelas estrelas ao som de fitas antigas." },
  { name: "Gamora", universe: "marvel", wordHint: "lâmina", phraseHint: "A guerreira mais letal que se rebelou contra o próprio criador." },
  { name: "Drax", universe: "marvel", wordHint: "vingança", phraseHint: "Leva tudo ao pé da letra com duas adagas em mãos." },
  { name: "Nebulosa", universe: "marvel", wordHint: "cibernética", phraseHint: "Peças mecânicas cobrindo cicatrizes de família." },
  { name: "Wolverine", universe: "marvel", wordHint: "adamantium", phraseHint: "Garras afiadas e feridas que se fecham num instante." },
  { name: "Ciclope", universe: "marvel", wordHint: "rubi", phraseHint: "Um feixe devastador controlado por um visor constante." },
  { name: "Tempestade", universe: "marvel", wordHint: "vento", phraseHint: "Reverenciada como deusa por controlar os céus." },
  { name: "Jean Grey", universe: "marvel", wordHint: "telepatia", phraseHint: "Uma mente brilhante guardando uma entidade cósmica." },
  { name: "Vampira", universe: "marvel", wordHint: "toque", phraseHint: "A pele descoberta absorve a vida de quem encostar." },
  { name: "Gambit", universe: "marvel", wordHint: "cinética", phraseHint: "Energiza qualquer objeto antes de arremessar com estilo." },
  { name: "Fera", universe: "marvel", wordHint: "intelecto", phraseHint: "Cita filósofos clássicos com pelos azuis e garras." },
  { name: "Noturno", universe: "marvel", wordHint: "enxofre", phraseHint: "Desaparece numa névoa azul antes que você perceba." },
  { name: "Professor Xavier", universe: "marvel", wordHint: "cérebro", phraseHint: "Guia os jovens excluídos sem precisar se levantar." },
  { name: "Colossus", universe: "marvel", wordHint: "blindagem", phraseHint: "Músculos que se transformam em aço reluzente." },
  { name: "Mística", universe: "marvel", wordHint: "camaleão", phraseHint: "Pode ser qualquer pessoa que cruzar seu caminho." },
  { name: "Deadpool", universe: "marvel", wordHint: "regeneração", phraseHint: "Fala diretamente com quem está assistindo o jogo." },
  { name: "Demolidor", universe: "marvel", wordHint: "radar", phraseHint: "Vê muito mais do que os olhos comuns enxergam." },
  { name: "Justiceiro", universe: "marvel", wordHint: "caveira", phraseHint: "Sem trégua e sem julgamento para quem cruza a linha." },
  { name: "Elektra", universe: "marvel", wordHint: "adaga", phraseHint: "Mestre letal das sombras e da arte marcial." },
  { name: "Blade", universe: "marvel", wordHint: "noturno", phraseHint: "Caminha no sol enquanto caça criaturas da noite." },
  { name: "Motoqueiro Fantasma", universe: "marvel", wordHint: "penitência", phraseHint: "Seu olhar queima a alma de quem cometeu erros." },
  { name: "Surfista Prateado", universe: "marvel", wordHint: "cósmico", phraseHint: "Corta o vácuo do espaço anunciando o destino dos mundos." },
  { name: "Punho de Ferro", universe: "marvel", wordHint: "chi", phraseHint: "Concentrou a energia de um dragão nas mãos desnudas." },
  { name: "Luke Cage", universe: "marvel", wordHint: "impenetrável", phraseHint: "As balas ricocheteiam no peito sem deixar marcas." },
  { name: "Jessica Jones", universe: "marvel", wordHint: "investigação", phraseHint: "Portas arrancadas e casos difíceis no escritório decadente." },
  { name: "Cavaleiro da Lua", universe: "marvel", wordHint: "fases", phraseHint: "Múltiplas personalidades sob o comando de um deus esquecido." },
  { name: "Shang-Chi", universe: "marvel", wordHint: "anéis", phraseHint: "Arte milenar despertando o poder de artefatos antigos." },
  { name: "Namor", universe: "marvel", wordHint: "abismo", phraseHint: "Asas nos tornozelos e realeza das fossas marinhas." },
  { name: "Miles Morales", universe: "marvel", wordHint: "camuflagem", phraseHint: "Um choque de eletricidade e tênis novo no asfalto." },
  { name: "Spider-Gwen", universe: "marvel", wordHint: "baquetas", phraseHint: "Capuz branco e ritmo musical nas teias entre prédios." },
  { name: "Nick Fury", universe: "marvel", wordHint: "vigilância", phraseHint: "Sabe de tudo antes mesmo que o evento aconteça." },
  { name: "Mulher-Hulk", universe: "marvel", wordHint: "tribunal", phraseHint: "Defende clientes de dia e dobra postes à noite." },
  { name: "Ms. Marvel", universe: "marvel", wordHint: "cristal", phraseHint: "Projeta construtos de luz enquanto sonha acordada." },
  { name: "Sr. Fantástico", universe: "marvel", wordHint: "maleável", phraseHint: "Uma das mentes mais brilhantes com corpo sem limites." },
  { name: "Mulher Invisível", universe: "marvel", wordHint: "barreira", phraseHint: "Você só nota sua presença quando o escudo se ergue." },
  { name: "Tocha Humana", universe: "marvel", wordHint: "combustão", phraseHint: "Basta duas palavras para o corpo inteiro arder em chamas." },
  { name: "O Coisa", universe: "marvel", wordHint: "rocha", phraseHint: "Casca dura de pedra escondendo um coração leal." },
  { name: "Thanos", universe: "marvel", wordHint: "equilíbrio", phraseHint: "Um único estalo para cumprir sua visão sombria." },
  { name: "Loki", universe: "marvel", wordHint: "engano", phraseHint: "Sempre que parece derrotado, era apenas um clone." },
  { name: "Ultron", universe: "marvel", wordHint: "rede", phraseHint: "A evolução mecânica que despreza seus próprios criadores." },
  { name: "Magneto", universe: "marvel", wordHint: "ferro", phraseHint: "Nenhum metal escapa ao comando de sua vontade." },
  { name: "Doutor Destino", universe: "marvel", wordHint: "máscara", phraseHint: "Monarca absoluto que combina feitiçaria e tecnologia." },
  { name: "Duende Verde", universe: "marvel", wordHint: "planador", phraseHint: "Gargalhadas no ar jogando artefatos ardentes." },
  { name: "Doutor Octopus", universe: "marvel", wordHint: "tentáculos", phraseHint: "Braços mecânicos controlados por uma mente obcecada." },
  { name: "Venom", universe: "marvel", wordHint: "parasita", phraseHint: "Duas mentes num só corpo de dentes pontiagudos." },
  { name: "Carnificina", universe: "marvel", wordHint: "vermelho", phraseHint: "O caos absoluto em formato de lâminas escarlates." },

  // DC COMICS
  { name: "Batman", universe: "dc", wordHint: "morcego", phraseHint: "Não tem superpoderes, apenas preparo e a escuridão." },
  { name: "Superman", universe: "dc", wordHint: "solar", phraseHint: "A esperança vem da luz de um sol distante." },
  { name: "Mulher-Maravilha", universe: "dc", wordHint: "verdade", phraseHint: "Ninguém consegue mentir preso nas voltas da sua corda." },
  { name: "Flash", universe: "dc", wordHint: "relâmpago", phraseHint: "Tão veloz que pode viajar pelas linhas do tempo." },
  { name: "Aquaman", universe: "dc", wordHint: "tridente", phraseHint: "Reina sobre setenta por cento da superfície do planeta." },
  { name: "Lanterna Verde", universe: "dc", wordHint: "vontade", phraseHint: "O único limite para suas criações é a própria imaginação." },
  { name: "Ciborgue", universe: "dc", wordHint: "circuito", phraseHint: "Conectado a todos os bancos de dados do universo." },
  { name: "Mulher-Gato", universe: "dc", wordHint: "joias", phraseHint: "Passos macios nos telhados em busca de peças raras." },
  { name: "Robin", universe: "dc", wordHint: "acrobacia", phraseHint: "O primeiro aprendiz sob as asas do guardião noturno." },
  { name: "Batgirl", universe: "dc", wordHint: "torre", phraseHint: "Brilhante em computadores e implacável na luta corpo a corpo." },
  { name: "Asa Noturna", universe: "dc", wordHint: "bastão", phraseHint: "Saiu da sombra do mentor para proteger sua própria cidade." },
  { name: "Capuz Vermelho", universe: "dc", wordHint: "retorno", phraseHint: "Voltou do descanso eterno buscando vingança armada." },
  { name: "Arqueiro Verde", universe: "dc", wordHint: "aljava", phraseHint: "Um bilionário que defende os fracos com precisão impecável." },
  { name: "Supergirl", universe: "dc", wordHint: "órbita", phraseHint: "Chegou à Terra carregando a mesma força do primo." },
  { name: "Shazam", universe: "dc", wordHint: "trovão", phraseHint: "Uma única palavra mágica transforma uma criança num campeão." },
  { name: "Ravena", universe: "dc", wordHint: "meditação", phraseHint: "Precisa manter a calma para conter as sombras do pai." },
  { name: "Mutano", universe: "dc", wordHint: "verde", phraseHint: "Pode se transformar em qualquer criatura do reino selvagem." },
  { name: "Estelar", universe: "dc", wordHint: "energia", phraseHint: "Dispara rajadas de luz e aprende idiomas pelo beijo." },
  { name: "Superboy", universe: "dc", wordHint: "clone", phraseHint: "Dividido entre o sangue de um herói e a mente de um vilão." },
  { name: "Mera", universe: "dc", wordHint: "hidrocinese", phraseHint: "Molda a própria água em armas rígidas e mortais." },
  { name: "John Constantine", universe: "dc", wordHint: "exorcismo", phraseHint: "Fumaça, cinismo e pactos perigosos com o submundo." },
  { name: "Gavião Negro", universe: "dc", wordHint: "reencarnação", phraseHint: "Asas douradas cruzando os séculos em busca do grande amor." },
  { name: "Caçador de Marte", universe: "dc", wordHint: "marciano", phraseHint: "Lê pensamentos alheios mas teme o fogo mais que tudo." },
  { name: "Zatanna", universe: "dc", wordHint: "inversão", phraseHint: "Pronuncia as palavras de trás para frente para invocar magias." },
  { name: "Canário Negro", universe: "dc", wordHint: "acústica", phraseHint: "Um grito tão estridente que estilhaça vidros blindados." },
  { name: "Doutor Destino (Fate)", universe: "dc", wordHint: "elmo", phraseHint: "O hospedeiro humano obedece à vontade de uma entidade dourada." },
  { name: "Coringa", universe: "dc", wordHint: "risada", phraseHint: "A pele pálida e o sorriso que ninguém acha engraçado." },
  { name: "Arlequina", universe: "dc", wordHint: "marreta", phraseHint: "Trocou o divã de psiquiatria por acrobacias e loucura." },
  { name: "Pinguim", universe: "dc", wordHint: "fraque", phraseHint: "Comanda o submundo com truques na ponta do guarda-chuva." },
  { name: "Charada", universe: "dc", wordHint: "enigma", phraseHint: "Não consegue cometer um ato sem deixar pistas complexas." },
  { name: "Hera Venenosa", universe: "dc", wordHint: "esporos", phraseHint: "Prefere a companhia das plantas do que dos seres humanos." },
  { name: "Duas-Caras", universe: "dc", wordHint: "moeda", phraseHint: "A sorte de quem vive ou morre depende do lado que cair." },
  { name: "Bane", universe: "dc", wordHint: "veneno", phraseHint: "Bombas químicas nos tubos aumentam sua força monstruosa." },
  { name: "Espantalho", universe: "dc", wordHint: "alucinação", phraseHint: "Seu gás desperta os piores pesadelos da mente humana." },
  { name: "Darkseid", universe: "dc", wordHint: "apokolips", phraseHint: "Busca a equação que escravizará a vontade de todo o cosmo." },
  { name: "Brainiac", universe: "dc", wordHint: "redoma", phraseHint: "Encolhe cidades inteiras para colecionar em prateleiras." },
  { name: "Lex Luthor", universe: "dc", wordHint: "inveja", phraseHint: "Sua genialidade não aceita a existência de um deus entre nós." },

  // ANIME & SHONEN
  { name: "Goku", universe: "anime", wordHint: "sayajin", phraseHint: "Nunca recusa uma boa luta e sempre busca quebrar seus limites." },
  { name: "Vegeta", universe: "anime", wordHint: "orgulho", phraseHint: "O príncipe de uma raça guerreira que não aceita ficar em segundo." },
  { name: "Gohan", universe: "anime", wordHint: "estudioso", phraseHint: "Guarda uma força gigantesca que só desperta quando vê injustiça." },
  { name: "Piccolo", universe: "anime", wordHint: "antenas", phraseHint: "Ouvidos aguçados e meditação no topo das montanhas." },
  { name: "Trunks", universe: "anime", wordHint: "espada", phraseHint: "Voltou no tempo para tentar evitar a queda do seu mundo." },
  { name: "Naruto", universe: "anime", wordHint: "raposa", phraseHint: "O garoto rejeitado que prometeu nunca voltar atrás em sua palavra." },
  { name: "Sasuke", universe: "anime", wordHint: "olhos", phraseHint: "Um caminho de escuridão guiado pelo desejo de vingar seu clã." },
  { name: "Kakashi", universe: "anime", wordHint: "livro", phraseHint: "Copía mil técnicas e lê histórias enquanto se atrasa." },
  { name: "Itachi", universe: "anime", wordHint: "corvos", phraseHint: "Sacrificou a própria honra para manter a paz nas sombras." },
  { name: "Luffy", universe: "anime", wordHint: "borracha", phraseHint: "Navega em busca do tesouro supremo sem nunca perder o apetite." },
  { name: "Zoro", universe: "anime", wordHint: "bússola", phraseHint: "Três lâminas mortais mas não consegue achar o caminho de volta." },
  { name: "Sanji", universe: "anime", wordHint: "chama", phraseHint: "Nunca bate em mulheres e só usa os pés para lutar." },
  { name: "Saitama", universe: "anime", wordHint: "tédio", phraseHint: "Ficou tão forte que as lutas perderam toda a emoção." },
  { name: "Genos", universe: "anime", wordHint: "incineração", phraseHint: "Anota cada lição do mestre esperando entender seu segredo." },
  { name: "Deku", universe: "anime", wordHint: "caderno", phraseHint: "Anotava estratégias até herdar a chama de seu ídolo." },
  { name: "All Might", universe: "anime", wordHint: "sorriso", phraseHint: "Chegava com imponência para dizer que tudo estava bem." },
  { name: "Bakugo", universe: "anime", wordHint: "suor", phraseHint: "Explosões nas palmas das mãos e um temperamento curto." },
  { name: "Satoru Gojo", universe: "anime", wordHint: "infinito", phraseHint: "Ninguém consegue tocá-lo a menos que ele permita." },
  { name: "Sukuna", universe: "anime", wordHint: "dedos", phraseHint: "O rei das maldições adormecido no corpo de um garoto comum." },
  { name: "Tanjiro Kamado", universe: "anime", wordHint: "olfato", phraseHint: "Sente as intenções pelo cheiro enquanto empunha a lâmina negra." },
  { name: "Nezuko", universe: "anime", wordHint: "caixa", phraseHint: "Dorme de dia para proteger os humanos durante a noite." },
  { name: "Zenitsu", universe: "anime", wordHint: "sono", phraseHint: "Só mostra sua verdadeira força quando perde a consciência de medo." },
  { name: "Edward Elric", universe: "anime", wordHint: "troca", phraseHint: "Para obter algo, algo de igual valor deve ser oferecido." },
  { name: "Eren Yeager", universe: "anime", wordHint: "liberdade", phraseHint: "Avança implacável contra o mundo para proteger seu povo." },
  { name: "Levi Ackerman", universe: "anime", wordHint: "lâminas", phraseHint: "Limpeza impecável e rotações mortais contra gigantes." },

  // OUTROS & CLÁSSICOS
  { name: "Ben 10", universe: "outros", wordHint: "relógio", phraseHint: "Basta apertar o disco no pulso para mudar de forma." },
  { name: "Leonardo (Tartaruga)", universe: "outros", wordHint: "katana", phraseHint: "Lidera os irmãos com faixa azul e disciplina rígida." },
  { name: "Donatello", universe: "outros", wordHint: "tecnologia", phraseHint: "Conserta máquinas e luta com um longo bastão de madeira." },
  { name: "Michelangelo", universe: "outros", wordHint: "fatia", phraseHint: "Duas nunchakus no ar e um apetite sem fim por queijo." },
  { name: "Raphael", universe: "outros", wordHint: "temperamento", phraseHint: "Faixa vermelha nos olhos e pavio curto com as adagas." },
  { name: "Mestre Splinter", universe: "outros", wordHint: "esgoto", phraseHint: "Um mestre sábio que adotou quatro irmãos nas profundezas." },
  { name: "Destruidor", universe: "outros", wordHint: "garras", phraseHint: "Armadura pontiaguda comandando os ninjas do Clã do Pé." },
  { name: "Power Ranger Vermelho", universe: "outros", wordHint: "morfar", phraseHint: "Chama a equipe com um grito e comanda o robô gigante." },
  { name: "Sr. Incrível", universe: "outros", wordHint: "coluna", phraseHint: "Sente dores nas costas mas levanta trens com um só braço." },
  { name: "Mulher-Elástica", universe: "outros", wordHint: "flexível", phraseHint: "Mantém a família unida esticando os limites do corpo." },
  { name: "Gelado", universe: "outros", wordHint: "umidade", phraseHint: "Desliza em rampas congeladas se o ar ao redor permitir." },
  { name: "Hellboy", universe: "outros", wordHint: "chifres", phraseHint: "Lixa os próprios chifres e fuma charuto enfrentando monstros." },
  { name: "Chapolin Colorado", universe: "outros", wordHint: "antena", phraseHint: "Não contavam com sua astúcia na hora do apuro." }
];

// LISTAGEM PRINCIPAL DOS TEMAS
const TEMAS = {
  "Super-herói": HEROES_DATABASE.map(h => h.name),

  "Famosos": [
    "Neymar", "Xuxa", "Anitta", "Messi", "Cristiano Ronaldo", "Silvio Santos", "Michael Jackson", "Beyoncé",
    "Faustão", "Ivete Sangalo", "Luciano Huck", "Whindersson Nunes", "Ronaldinho Gaúcho", "Pelé", "Rihanna",
    "Taylor Swift", "Justin Bieber", "Gisele Bündchen", "Ludmilla", "Luan Santana", "Gusttavo Lima",
    "Marília Mendonça", "Roberto Carlos", "Tom Cruise", "Brad Pitt", "Leonardo DiCaprio", "Will Smith",
    "Kylian Mbappé", "Vinícius Júnior", "Gil do Vigor", "Felipe Neto", "Virginia Fonseca", "Juliette",
    "Elon Musk", "Mark Zuckerberg", "Shakira", "Ed Sheeran", "Billie Eilish", "Bruno Mars", "Lady Gaga",
    "Dwayne Johnson", "Zendaya", "Tom Holland", "Ayrton Senna", "Mr. Beast", "Casimiro", "Alok"
  ],

  "Comida": [
    "Pizza", "Sorvete", "Feijoada", "Brigadeiro", "Hambúrguer", "Lasanha", "Coxinha", "Pastel", "Açaí",
    "Sushi", "Pipoca", "Churrasco", "Strogonoff", "Acarajé", "Tapioca", "Pão de queijo", "Cachorro-quente",
    "Batata frita", "Macarrão", "Arroz e feijão", "Farofa", "Moqueca", "Baião de dois", "Pamonha",
    "Bolo de chocolate", "Pudim", "Beijinho", "Paçoca", "Chocolate", "Milk-shake", "Panqueca", "Omelete",
    "Taco", "Esfiha", "Kibe", "Yakisoba", "Risoto", "Salada", "Sanduíche", "Nuggets", "Churros", "Donut",
    "Waffle", "Pão francês", "Cuscuz", "Sopa", "Camarão", "Picanha", "Torta de limão", "Algodão doce",
    "Escondidinho", "Vatapá", "Rabada", "Pernil", "Panetone", "Croissant", "Crepe", "Fondue", "Guacamole"
  ],

  "Objeto": [
    "Balança", "Tesoura", "Espelho", "Relógio", "Guarda-chuva", "Violão", "Chuveiro", "Escada", "Bicicleta",
    "Controle remoto", "Cadeado", "Travesseiro", "Mochila", "Óculos", "Caneta", "Garfo", "Panela",
    "Ventilador", "Geladeira", "Televisão", "Celular", "Fone de ouvido", "Chave", "Carteira", "Lanterna",
    "Martelo", "Vassoura", "Cadeira", "Sofá", "Cobertor", "Lâmpada", "Tomada", "Microfone", "Câmera",
    "Bola", "Skate", "Capacete", "Escova de dentes", "Sabonete", "Toalha", "Guarda-roupa", "Cama", "Copo",
    "Prato", "Colher", "Faca", "Mala", "Moeda", "Anel", "Boné", "Tênis", "Calculadora", "Abajur",
    "Furadeira", "Mouse", "Teclado", "Notebook", "Despertador", "Liquidificador", "Micro-ondas", "Vela"
  ],

  "Lugar": [
    "Praia", "Biblioteca", "Castelo", "Circo", "Cinema", "Montanha", "Aeroporto", "Hospital", "Shopping",
    "Estádio", "Farol", "Zoológico", "Escola", "Igreja", "Padaria", "Mercado", "Parque", "Rodoviária",
    "Praça", "Academia", "Posto de gasolina", "Hotel", "Museu", "Teatro", "Piscina", "Deserto", "Floresta",
    "Ilha", "Cachoeira", "Fazenda", "Cadeia", "Universidade", "Banco", "Farmácia", "Restaurante",
    "Parque de diversões", "Pirâmide do Egito", "Torre Eiffel", "Cristo Redentor", "Disney", "Lua",
    "Cemitério", "Aquário", "Sorveteria", "Salão de beleza", "Oficina", "Vulcão", "Caverna", "Coliseu"
  ],

  "Animal": [
    "Elefante", "Cachorro", "Girafa", "Pinguim", "Tubarão", "Macaco", "Coruja", "Tartaruga", "Leão",
    "Cavalo", "Polvo", "Canguru", "Zebra", "Hipopótamo", "Rinoceronte", "Crocodilo", "Jacaré", "Cobra",
    "Sapo", "Borboleta", "Abelha", "Formiga", "Aranha", "Escorpião", "Gato", "Coelho", "Porco", "Vaca",
    "Galinha", "Pato", "Cisne", "Águia", "Papagaio", "Tucano", "Flamingo", "Golfinho", "Baleia", "Foca",
    "Urso", "Lobo", "Raposa", "Veado", "Tigre", "Onça", "Panda", "Gorila", "Camelo", "Morcego", "Camaleão",
    "Caranguejo", "Água-viva", "Pavão", "Capivara", "Tatu", "Tamanduá", "Preguiça", "Ornitorrinco"
  ],

  "Profissão": [
    "Médico", "Bombeiro", "Professor", "Cozinheiro", "Piloto", "Policial", "Dentista", "Pirata", "Astronauta",
    "Padeiro", "Jogador de futebol", "Youtuber", "Advogado", "Engenheiro", "Arquiteto", "Enfermeiro",
    "Veterinário", "Motorista", "Pedreiro", "Eletricista", "Encanador", "Cabeleireiro", "Garçom", "Fotógrafo",
    "Jornalista", "Cantor", "Ator", "Palhaço", "Mágico", "Detetive", "Juiz", "Cientista", "Programador",
    "Músico", "Pintor", "Escritor", "Agricultor", "Pescador", "Soldado", "Jardineiro", "Carteiro", "Vendedor",
    "Faxineiro", "Cirurgião", "Personal trainer", "Bailarino", "Dublador", "Barista", "Psicólogo", "Arqueólogo"
  ],

  "Jogos & Games": [
    "Minecraft", "GTA V", "Fortnite", "Super Mario Bros", "Sonic the Hedgehog", "The Legend of Zelda",
    "God of War", "Counter-Strike", "League of Legends", "Valorant", "Free Fire", "Resident Evil",
    "Mortal Kombat", "Pokémon", "Roblox", "FIFA / EA FC", "The Witcher 3", "Elden Ring",
    "Tetris", "Pac-Man", "Among Us", "Clash Royale", "Brawl Stars", "Call of Duty", "Overwatch",
    "Street Fighter", "The Last of Us", "Red Dead Redemption 2", "Cyberpunk 2077", "Fall Guys"
  ],

  "Filmes & Séries": [
    "Harry Potter", "O Senhor dos Anéis", "Star Wars", "Vingadores: Ultimato", "Titanic", "Matrix",
    "Stranger Things", "Game of Thrones", "Breaking Bad", "La Casa de Papel", "Peaky Blinders", "Shrek",
    "Toy Story", "Jurassic Park", "Piratas do Caribe", "Coringa", "O Poderoso Chefão",
    "De Volta para o Futuro", "Avatar", "Clube da Luta", "Interestelar", "O Rei Leão",
    "Round 6 (Squid Game)", "The Walking Dead", "The Office", "Friends", "Wandinha", "Chaves"
  ],

  "Animes & Desenhos": [
    "Dragon Ball Z", "Naruto Shippuden", "One Piece", "Attack on Titan", "Demon Slayer", "Jujutsu Kaisen",
    "Death Note", "Pokémon", "Os Cavaleiros do Zodíaco", "Bob Esponja", "Pica-Pau", "Tom e Jerry",
    "Os Simpsons", "Rick e Morty", "Ben 10", "As Meninas Superpoderosas", "Hora de Aventura",
    "O Incrível Mundo de Gumball", "Scooby-Doo", "Avatar: A Lenda de Aang", "Bleach", "Hunter x Hunter"
  ],

  "Esportes": [
    "Futebol", "Basquete", "Vôlei", "Tênis", "Natação", "Judô", "Skate", "Surfe", "Boxe", "Fórmula 1",
    "Atletismo", "Ciclismo", "Handebol", "Ginástica Artística", "Futebol Americano", "Beisebol", "Golfe",
    "Karatê", "Jiu-jitsu", "MMA / UFC", "Tênis de Mesa", "Rugby", "Futsal", "Capoeira", "Sinuca"
  ]
};

// DICIONÁRIO DE PISTAS: PALAVRA ÚNICA (wordHint) E FRASE CURTA (phraseHint)
const ITEM_HINTS = {};

// Registra heróis
HEROES_DATABASE.forEach(h => {
  ITEM_HINTS[h.name] = {
    word: h.wordHint,
    phrase: h.phraseHint
  };
});

// Helper para registrar palavras dos outros temas
function registerBulkHints(data) {
  Object.keys(data).forEach(term => {
    ITEM_HINTS[term] = data[term];
  });
}

// PISTAS CONCISAS (palavra única difícil + frase enigmática)
registerBulkHints({
  // Famosos
  "Neymar": { word: "menino", phrase: "Fintas rápidas nos gramados e manchetes fora de campo." },
  "Xuxa": { word: "nave", phrase: "Marcou a infância com descidas de uma nave prateada." },
  "Anitta": { word: "honório", phrase: "Levou o ritmo da periferia para o topo dos palcos mundiais." },
  "Messi": { word: "rosário", phrase: "Conduziu sua seleção ao topo com canhotinha incomparável." },
  "Cristiano Ronaldo": { word: "salto", phrase: "Impressiona pela impulsão no ar e dedicação obsessiva." },
  "Silvio Santos": { word: "avião", phrase: "Auditório vibrante cantando notas dobradas de alegria." },
  "Michael Jackson": { word: "luva", phrase: "Desliza para trás nos palcos com o mundo inteiro assistindo." },
  "Beyoncé": { word: "abelha", phrase: "Comanda uma colmeia global de admiradores fervorosos." },
  "Faustão": { word: "errou", phrase: "Relógio no pulso e comentários rápidos nos domingos da TV." },
  "Ivete Sangalo": { word: "trio", phrase: "Incendeia multidões pulando atrás do caminhão de som." },
  "Luciano Huck": { word: "reforma", phrase: "Reformava carros antigos e agora comanda os fins de semana." },
  "Whindersson Nunes": { word: "piauí", phrase: "Começou sem camisa num quarto humilde e lotou arenas." },
  "Ronaldinho Gaúcho": { word: "bruxo", phrase: "Olhava para um lado enquanto passava a bola para o outro." },
  "Pelé": { word: "coroa", phrase: "Eternizado por parar guerras e marcar mais de mil gols." },
  "Rihanna": { word: "guarda-chuva", phrase: "Trocou o topo das paradas musicais pelo império da beleza." },
  "Taylor Swift": { word: "pulseiras", phrase: "Suas regravações e turnê movimentaram a economia de países." },
  "Justin Bieber": { word: "franja", phrase: "Um vídeo caseiro no violão abriu as portas da fama precoce." },
  "Gisele Bündchen": { word: "passarela", phrase: "Passos firmes e olhar marcante que conquistaram o mundo da moda." },
  "Ludmilla": { word: "pagode", phrase: "Lotou estádios cantando pagode com um copo na mão." },
  "Luan Santana": { word: "meteoro", phrase: "Atingiu o coração do público sertanejo ainda jovem." },
  "Gusttavo Lima": { word: "embaixador", phrase: "Palco monumental e horas seguidas de modas na madrugada." },
  "Marília Mendonça": { word: "sofrência", phrase: "Sua voz poderosa deu novo sentido às dores do coração." },
  "Roberto Carlos": { word: "dezembro", phrase: "Distribui rosas azuis religiosamente no fim do ano." },
  "Tom Cruise": { word: "acrobacia", phrase: "Prefere saltar de penhascos reais a usar computação gráfica." },
  "Brad Pitt": { word: "galã", phrase: "Rosto marcante de produções clássicas e premiadas." },
  "Leonardo DiCaprio": { word: "proa", phrase: "Encarou águas geladas nos cinemas e lutou anos pela estatueta." },
  "Will Smith": { word: "bel-air", phrase: "Saiu da Filadélfia para viver numa mansão cheia de comédia." },
  "Kylian Mbappé": { word: "velocidade", phrase: "Arrancadas fulminantes pelo corredor direito com camisa dez." },
  "Vinícius Júnior": { word: "bailado", phrase: "Sorriso no rosto e ginga que superam qualquer hostilidade." },
  "Gil do Vigor": { word: "regozijo", phrase: "Economia e gritos espontâneos de alegria marcaram a edição." },
  "Felipe Neto": { word: "coruja", phrase: "Opiniões contundentes e milhares de vídeos gravados no quarto." },
  "Virginia Fonseca": { word: "dancinha", phrase: "Vídeos diários e milhões de produtos vendidos em transmissões." },
  "Juliette": { word: "cacto", phrase: "Um fenômeno popular que conquistou o país pela espontaneidade." },
  "Elon Musk": { word: "propulsão", phrase: "Sonha em construir colônias no planeta vizinho." },
  "Mark Zuckerberg": { word: "conectar", phrase: "Criou um diretório universitário que uniu bilhões de telas." },
  "Shakira": { word: "quadris", phrase: "Ritmo latino irresistível que ecoou em Copas do Mundo." },
  "Ed Sheeran": { word: "sardas", phrase: "Apenas um violão e pedais de repetição lotando estádios." },
  "Billie Eilish": { word: "sussurro", phrase: "Tons baixos e roupas largas que redefiniram o pop jovem." },
  "Bruno Mars": { word: "ouro", phrase: "Passos sincronizados e elegância de grandes ícones da música." },
  "Lady Gaga": { word: "pôquer", phrase: "Ousadia visual sem limites e vocais teatrais inconfundíveis." },
  "Dwayne Johnson": { word: "sobrancelha", phrase: "Músculos colossais e o levantamento de sobrancelha mais famoso." },
  "Zendaya": { word: "euforia", phrase: "Talento precoce premiado por atuações densas na TV." },
  "Tom Holland": { word: "spoiler", phrase: "Carisma descontraído e o perigo constante de soltar segredos do roteiro." },
  "Ayrton Senna": { word: "chuva", phrase: "Brilhava sob o asfalto molhado ao som do tema nacional." },
  "Mr. Beast": { word: "desafio", phrase: "Montou provas malucas e distribuiu milhões em premiações." },
  "Casimiro": { word: "reação", phrase: "Comentários bem-humorados na madrugada que conquistaram a internet." },
  "Alok": { word: "feixe", phrase: "Luzes cortando o céu noturno ao som de batidas eletrônicas." },

  // Comida
  "Pizza": { word: "redonda", phrase: "Dividida em oito fatias crocantes com queijo puxando." },
  "Sorvete": { word: "derretimento", phrase: "A corrida contra o tempo nos dias ensolarados." },
  "Feijoada": { word: "caldeirão", phrase: "Tradição de sábado servida com laranja e farofa." },
  "Brigadeiro": { word: "granulado", phrase: "O doce que não pode faltar em mesa de aniversário." },
  "Hambúrguer": { word: "chapa", phrase: "Carne suculenta prensada entre dois pães macios." },
  "Lasanha": { word: "camadas", phrase: "Massa intercalada que sai borbulhante do forno no domingo." },
  "Coxinha": { word: "gota", phrase: "Formato icônico com recheio desfiado e casca dourada." },
  "Pastel": { word: "caldo", phrase: "Massa crocante com vento que combina com feira livre." },
  "Açaí": { word: "tigela", phrase: "Fruto roxo da floresta servido bem gelado com acompanhamentos." },
  "Sushi": { word: "esteira", phrase: "Peixe cru e arroz combinados com a ajuda de uma alga escura." },
  "Pipoca": { word: "estalo", phrase: "Grãos duros que viram nuvens brancas sob o calor do óleo." },
  "Churrasco": { word: "brasa", phrase: "Fumaça aromática reunindo os amigos ao redor do fogo." },
  "Strogonoff": { word: "palha", phrase: "Molho cremoso sempre acompanhado por fios crocantes de batata." },
  "Acarajé": { word: "dendê", phrase: "Bolinho de feijão frito no azeite quente pelas baianas." },
  "Tapioca": { word: "goma", phrase: "Pó branco que se une na frigideira formando uma folha macia." },
  "Pão de queijo": { word: "fornada", phrase: "Herança mineira com casca dourada e interior elástico." },
  "Cachorro-quente": { word: "salsicha", phrase: "Lanche de rua que cada região coloca um recheio diferente." },
  "Batata frita": { word: "palito", phrase: "Crocante por fora e macia por dentro com um toque de sal." },
  "Macarrão": { word: "garfo", phrase: "Fios longos enrolados no prato com molho vermelho generoso." },
  "Arroz e feijão": { word: "cotidiano", phrase: "A combinação sagrada que sustenta o prato de quase todo brasileiro." },
  "Farofa": { word: "crocância", phrase: "Acompanhamento seco e temperado que completa qualquer carne." },
  "Moqueca": { word: "barro", phrase: "Peixe borbulhando na panela tradicional com temperos marcantes." },
  "Baião de dois": { word: "nordeste", phrase: "Mistura rica com feijão de corda e queijo coalho grelhado." },
  "Pamonha": { word: "palha", phrase: "Massa de milho cozida embalada na própria casca da espiga." },
  "Pudim": { word: "caramelo", phrase: "Sobremesa macia com calda dourada e furinhos na textura." },
  "Paçoca": { word: "amendoim", phrase: "Doce esfarelado típico de festas juninas no interior." },
  "Chocolate": { word: "cacau", phrase: "Doce derivado de sementes amargas que derrete na boca." },
  "Milk-shake": { word: "canudo", phrase: "Bebida densa e gelada que exige esforço para puxar." },
  "Taco": { word: "tortilha", phrase: "Massa crocante dobrada recheada com sabores apimentados." },
  "Churros": { word: "doce de leite", phrase: "Massa frita estriada polvilhada com açúcar e canela." },
  "Pão francês": { word: "padaria", phrase: "Casca estaladiça e miolo fofo que perfumam a manhã." },
  "Cuscuz": { word: "vapor", phrase: "Flocos amarelos cozidos na cuscuzeira que sustentam o dia." },
  "Picanha": { word: "gordura", phrase: "O corte mais cobiçado da grelha pelo sabor marcante." },

  // Jogos & Games
  "Minecraft": { word: "cubo", phrase: "Um mundo infinito onde tudo é construído e minerado bloco a bloco." },
  "GTA V": { word: "estrelas", phrase: "Vida criminosa e fuga da polícia pelas ruas da cidade de mentira." },
  "Fortnite": { word: "ônibus", phrase: "Cair numa ilha, erguer paredes num instante e sobreviver até o final." },
  "Super Mario Bros": { word: "cogumelo", phrase: "Pular na cabeça dos inimigos para resgatar quem sumiu do castelo." },
  "Sonic the Hedgehog": { word: "argolas", phrase: "Um borrão azul correndo em espirais contra o cientista barrigudo." },
  "The Legend of Zelda": { word: "espada mestre", phrase: "O jovem de túnica verde que explora templos para conter o mal." },
  "God of War": { word: "cinzas", phrase: "Um guerreiro furioso que desafiou o panteão dos deuses antigos." },
  "Counter-Strike": { word: "defuse", phrase: "Segundos tensos no cronômetro para evitar que o explosivo seja detonado." },
  "League of Legends": { word: "nexus", phrase: "Três rotas defendidas por torres até a destruição da base inimiga." },
  "Valorant": { word: "spike", phrase: "Tiros milimétricos combinados com poderes sobrenaturais de agentes." },
  "Free Fire": { word: "capa", phrase: "Disputa frenética no celular buscando o último tiro certeiro na cabeça." },
  "Resident Evil": { word: "erva", phrase: "Pouca munição nos corredores escuros tomados por experimentos biológicos." },
  "Mortal Kombat": { word: "finalização", phrase: "Golpes brutais que encerram a luta com o aviso de concluir o adversário." },
  "Pokémon": { word: "esfera", phrase: "Colecionar criaturas fantásticas e colocá-las para batalhar por medalhas." },
  "Roblox": { word: "experiências", phrase: "Plataforma livre onde os próprios jogadores criam suas regras e mundos." },
  "FIFA / EA FC": { word: "carrinho", phrase: "Disputa virtual nos gramados com direito a reclamação de impedimento." },
  "The Witcher 3": { word: "mutação", phrase: "Duas espadas nas costas enquanto caça monstros por algumas moedas." },
  "Elden Ring": { word: "graça", phrase: "Cair incontáveis vezes diante de chefes colossais nas terras esquecidas." },
  "Tetris": { word: "encaixe", phrase: "Linhas que somem quando blocos de formas variadas se completam." },
  "Pac-Man": { word: "labirinto", phrase: "Fugir de fantasmas coloridos enquanto devora pastilhas nos cantos." },
  "Among Us": { word: "duto", phrase: "Alguém finge consertar a fiação enquanto apaga as luzes da nave." },
  "The Last of Us": { word: "esporo", phrase: "Uma travessia perigosa por cidades tomadas pela vegetação e infectados." },

  // Filmes & Séries
  "Harry Potter": { word: "varinha", phrase: "Um garoto comum descobre que seu nome é lenda num colégio mágico." },
  "O Senhor dos Anéis": { word: "fardo", phrase: "Uma longa caminhada para destruir a joia forjada no fogo vulcânico." },
  "Star Wars": { word: "sabres", phrase: "O equilíbrio místico entre a luz e as sombras em galáxias distantes." },
  "Vingadores: Ultimato": { word: "estalo", phrase: "Uma viagem arriscada no tempo para desfazer o desaparecimento de metade da vida." },
  "Titanic": { word: "iceberg", phrase: "A viagem inaugural da embarcação que nem mesmo o destino salvaria." },
  "Matrix": { word: "código", phrase: "Perceber que o mundo ao seu redor não passa de linhas verdes simuladas." },
  "Stranger Things": { word: "invertido", phrase: "Bicicletas nas ruas e luzes piscando alertando sobre outra dimensão." },
  "Game of Thrones": { word: "trono", phrase: "Disputas sangrentas entre famílias nobres enquanto o frio se aproxima." },
  "Breaking Bad": { word: "química", phrase: "Um professor doente decide produzir substâncias ilegais para deixar herança." },
  "La Casa de Papel": { word: "máscara", phrase: "Macacões vermelhos e um plano minucioso para imprimir o próprio dinheiro." },
  "Peaky Blinders": { word: "navalha", phrase: "Boinas alinhadas e negócios escusos na fumaça da Inglaterra industrial." },
  "Shrek": { word: "pântano", phrase: "Um ser verde ranzinza que só queria viver em paz no seu barro." },
  "Toy Story": { word: "infinito", phrase: "Objetos de plástico que ganham vida assim que a maçaneta gira." },
  "Jurassic Park": { word: "âmbar", phrase: "A ciência recriou gigantes extintos mas esqueceu de controlar as cercas." },
  "Piratas do Caribe": { word: "rum", phrase: "Passos cambaleantes e uma bússola que aponta para o que você mais deseja." },
  "Coringa": { word: "escadaria", phrase: "A transformação dolorosa de um homem ignorado num ícone do caos." },
  "Chaves": { word: "barril", phrase: "Um garoto humilde que sonha com sanduíche enquanto diverte a vila." },

  // Animes & Desenhos
  "Dragon Ball Z": { word: "esferas", phrase: "Reunir sete relíquias para invocar o dragão que realiza pedidos." },
  "Naruto Shippuden": { word: "selo", phrase: "Superar o preconceito da vila até se tornar o líder máximo." },
  "One Piece": { word: "tesouro", phrase: "A maior jornada marítima de todas em busca do que foi deixado no fim do mundo." },
  "Attack on Titan": { word: "muralhas", phrase: "Três anéis gigantes de pedra contendo a humanidade cercada por monstros." },
  "Demon Slayer": { word: "respiração", phrase: "Técnicas de espada sincronizadas com o ar para enfrentar demônios da noite." },
  "Jujutsu Kaisen": { word: "maldição", phrase: "Energia negativa gerada pelas emoções humanas combatida por feiticeiros." },
  "Death Note": { word: "caderno", phrase: "Basta saber o rosto e escrever o nome nas páginas para ditar o fim." },
  "Bob Esponja": { word: "hambúrguer", phrase: "Mora num fruto do mar e prepara lanches com uma espátula no fundo do oceano." },
  "Pica-Pau": { word: "gargalhada", phrase: "Topete vermelho aprontando travessuras com uma risada inconfundível." },
  "Tom e Jerry": { word: "ratoeira", phrase: "O felino que bola planos mirabolantes que sempre explodem na própria cara." },
  "Os Simpsons": { word: "amarelo", phrase: "Uma família comum de pele dourada que prevê o futuro com humor." },
  "Rick e Morty": { word: "portal", phrase: "Um avô cientista excêntrico arrastando o neto por realidades paralelas perigosas." },

  // Esportes
  "Futebol": { word: "trave", phrase: "Onze contra onze tentando colocar a esfera no fundo das redes." },
  "Basquete": { word: "tabela", phrase: "Quicar no chão e arremessar alto numa cesta de aro de ferro." },
  "Vôlei": { word: "bloqueio", phrase: "Subir junto à rede com os braços esticados para barrar o ataque adversário." },
  "Tênis": { word: "saque", phrase: "Mandar a bolinha felpuda por cima da rede a mais de duzentos por hora." },
  "Natação": { word: "raia", phrase: "Braçadas precisas cortando a água sem colocar os pés no fundo." },
  "Judô": { word: "tatame", phrase: "Aproveitar o peso do adversário para conseguir a queda perfeita." },
  "Skate": { word: "lixa", phrase: "Manobras arriscadas sobre quatro rodinhas deslizando pelo corrimão." },
  "Surfe": { word: "tubo", phrase: "Encontrar o equilíbrio perfeito por dentro da cortina de água salgada." },
  "Boxe": { word: "esquiva", phrase: "Balançar o corpo nas cordas para escapar dos golpes com luvas acolchoadas." },
  "Fórmula 1": { word: "pit-stop", phrase: "Trocar quatro pneus e ajustar a asa em menos de três segundos no asfalto." }
});

// FUNÇÃO SEGURA PARA OBTER DICA (PALAVRA OU FRASE)
function getHintForWord(word, hintType = "word") {
  const item = ITEM_HINTS[word];
  if (item) {
    if (hintType === "phrase" && item.phrase) return item.phrase;
    if (item.word) return item.word;
  }
  return hintType === "phrase" ? "Preste muita atenção nos detalhes que os outros disserem." : "mistério";
}

// PARES PARA MÍMICA E DUPLAS
const PARES = {
  "Super-herói": [
    "Batman|Robin", "Superman|Supergirl", "Thor|Loki", "Hulk|Mulher-Hulk", "Goku|Vegeta",
    "Naruto|Sasuke", "Wolverine|Deadpool", "Homem de Ferro|Máquina de Combate",
    "Capitão América|Soldado Invernal", "Aquaman|Namor", "Coringa|Arlequina",
    "Mulher-Maravilha|Valquíria", "Homem-Formiga|Vespa", "Doutor Estranho|Feiticeira Escarlate",
    "Thanos|Darkseid", "Gamora|Nebulosa", "Leonardo (Tartaruga)|Raphael", "Donatello|Michelangelo",
    "Homem-Aranha|Miles Morales", "Venom|Carnificina", "Flash|Kid Flash", "Goku|Luffy"
  ],
  "Famosos": [
    "Neymar|Messi", "Cristiano Ronaldo|Kylian Mbappé", "Pelé|Ronaldinho Gaúcho", "Xuxa|Ivete Sangalo",
    "Anitta|Ludmilla", "Michael Jackson|Bruno Mars", "Beyoncé|Rihanna", "Taylor Swift|Billie Eilish",
    "Justin Bieber|Ed Sheeran", "Gusttavo Lima|Luan Santana", "Felipe Neto|Virginia Fonseca",
    "Tom Cruise|Brad Pitt", "Leonardo DiCaprio|Will Smith", "Elon Musk|Mark Zuckerberg",
    "Silvio Santos|Faustão", "Ayrton Senna|Lewis Hamilton", "Whindersson Nunes|Casimiro"
  ],
  "Comida": [
    "Pizza|Esfiha", "Hambúrguer|Sanduíche", "Sorvete|Açaí", "Lasanha|Macarrão", "Coxinha|Kibe",
    "Brigadeiro|Beijinho", "Pudim|Bolo de chocolate", "Pipoca|Batata frita", "Churrasco|Picanha",
    "Feijoada|Baião de dois", "Tapioca|Cuscuz", "Pamonha|Pão de queijo", "Sushi|Yakisoba"
  ],
  "Jogos & Games": [
    "Minecraft|Terraria", "GTA V|Red Dead Redemption 2", "Fortnite|Free Fire",
    "Super Mario Bros|Sonic the Hedgehog", "The Legend of Zelda|Elden Ring",
    "Counter-Strike|Valorant", "Resident Evil|The Last of Us", "Mortal Kombat|Street Fighter"
  ],
  "Filmes & Séries": [
    "Harry Potter|O Senhor dos Anéis", "Star Wars|Star Trek", "Breaking Bad|Peaky Blinders",
    "Stranger Things|Dark", "Game of Thrones|Vikings", "Toy Story|Monstros S.A.", "Shrek|Kung Fu Panda"
  ],
  "Animes & Desenhos": [
    "Dragon Ball Z|Naruto Shippuden", "One Piece|Bleach", "Attack on Titan|Death Note",
    "Demon Slayer|Jujutsu Kaisen", "Bob Esponja|Pica-Pau", "Tom e Jerry|Scooby-Doo", "Os Simpsons|Rick e Morty"
  ],
  "Esportes": [
    "Futebol|Futsal", "Basquete|Handebol", "Vôlei|Vôlei de Praia", "Tênis|Tênis de Mesa",
    "Boxe|MMA / UFC", "Skate|Surfe", "Fórmula 1|Ciclismo"
  ],
  "Objeto": [
    "Balança|Relógio", "Tesoura|Faca", "Espelho|Óculos", "Guarda-chuva|Cobertor", "Violão|Microfone",
    "Bicicleta|Skate", "Controle remoto|Celular", "Cadeado|Chave", "Travesseiro|Cama", "Mouse|Teclado"
  ],
  "Lugar": [
    "Praia|Piscina", "Biblioteca|Museu", "Castelo|Pirâmide do Egito", "Circo|Teatro",
    "Cinema|Shopping", "Montanha|Cachoeira", "Aeroporto|Rodoviária", "Hospital|Farmácia", "Zoológico|Aquário"
  ],
  "Animal": [
    "Elefante|Rinoceronte", "Cachorro|Lobo", "Gato|Tigre", "Leão|Onça", "Girafa|Camelo",
    "Pinguim|Foca", "Tubarão|Golfinho", "Macaco|Gorila", "Tartaruga|Jacaré", "Cobra|Escorpião"
  ],
  "Profissão": [
    "Médico|Enfermeiro", "Bombeiro|Policial", "Professor|Cientista", "Cozinheiro|Padeiro",
    "Piloto|Astronauta", "Dentista|Cirurgião", "Advogado|Juiz", "Engenheiro|Arquiteto"
  ]
};
