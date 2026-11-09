/**
 * HUB DE JOGOS - BANCO DE DADOS GIGANTE E CATEGORIZADO
 * Todos os temas possuem subcategorias para filtros personalizados.
 * Cada item possui:
 * - name: Nome da palavra/personagem
 * - sub: Subcategoria para filtragem
 * - word: 1 palavra desafiadora e sutil para o impostor
 * - phrase: Frase curta, enigmática e nada óbvia
 */

const THEME_DATABASE = {
  "Super-herói": {
    "icon": "🦸",
    "color": "var(--b)",
    "subcategories": {
      "marvel": {
        "label": "Marvel",
        "icon": "🔴",
        "desc": "Vingadores, X-Men, Homem-Aranha e vilões"
      },
      "dc": {
        "label": "DC Comics",
        "icon": "🔵",
        "desc": "Batman, Superman, Liga da Justiça e vilões"
      },
      "anime": {
        "label": "Animes & Shonen",
        "icon": "🟢",
        "desc": "Goku, Naruto, Luffy, Gojo e heróis de anime"
      },
      "outros": {
        "label": "Clássicos & Outros",
        "icon": "🟡",
        "desc": "Tartarugas Ninja, Ben 10, Incríveis, etc."
      }
    },
    "items": [
      {
        "name": "Homem-Aranha",
        "sub": "marvel",
        "word": "aracnídeo",
        "phrase": "Costuma escalar prédios quando a cidade dorme."
      },
      {
        "name": "Homem de Ferro",
        "sub": "marvel",
        "word": "reator",
        "phrase": "Um coração de metal impulsionado por tecnologia."
      },
      {
        "name": "Thor",
        "sub": "marvel",
        "word": "tempestade",
        "phrase": "Desce dos céus com o estrondo dos trovões."
      },
      {
        "name": "Hulk",
        "sub": "marvel",
        "word": "fúria",
        "phrase": "O descontrole emocional liberta a fera."
      },
      {
        "name": "Capitão América",
        "sub": "marvel",
        "word": "símbolo",
        "phrase": "Acordou no presente carregando a honra do passado."
      },
      {
        "name": "Viúva Negra",
        "sub": "marvel",
        "word": "infiltração",
        "phrase": "Criada nas sombras sem deixar rastros."
      },
      {
        "name": "Gavião Arqueiro",
        "sub": "marvel",
        "word": "pontaria",
        "phrase": "Nunca erra o alvo mesmo a longa distância."
      },
      {
        "name": "Pantera Negra",
        "sub": "marvel",
        "word": "vibranium",
        "phrase": "Herdeiro do trono guardião da montanha sagrada."
      },
      {
        "name": "Doutor Estranho",
        "sub": "marvel",
        "word": "místico",
        "phrase": "Manipula as dobras do tempo e da realidade."
      },
      {
        "name": "Feiticeira Escarlate",
        "sub": "marvel",
        "word": "feitiço",
        "phrase": "Pode reescrever a realidade com a própria dor."
      },
      {
        "name": "Visão",
        "sub": "marvel",
        "word": "sintético",
        "phrase": "Uma joia brilhando na testa de quem busca a humanidade."
      },
      {
        "name": "Falcão",
        "sub": "marvel",
        "word": "voo",
        "phrase": "Cruza os ares com asas metálicas coordenadas."
      },
      {
        "name": "Soldado Invernal",
        "sub": "marvel",
        "word": "amnésia",
        "phrase": "Um passado congelado que voltou como pesadelo."
      },
      {
        "name": "Homem-Formiga",
        "sub": "marvel",
        "word": "escala",
        "phrase": "O segredo está em mudar de dimensão num clique."
      },
      {
        "name": "Vespa",
        "sub": "marvel",
        "word": "ferrão",
        "phrase": "Ágil no ar e ataca com precisão microscópica."
      },
      {
        "name": "Capitã Marvel",
        "sub": "marvel",
        "word": "fóton",
        "phrase": "Energia pura cruzando galáxias inteiras."
      },
      {
        "name": "Máquina de Combate",
        "sub": "marvel",
        "word": "artilharia",
        "phrase": "Armadura pesada com protocolo estritamente militar."
      },
      {
        "name": "Groot",
        "sub": "marvel",
        "word": "madeira",
        "phrase": "Suas poucas palavras escondem um coração enorme."
      },
      {
        "name": "Rocket Raccoon",
        "sub": "marvel",
        "word": "explosivo",
        "phrase": "Pequeno no tamanho e implacável no gatilho."
      },
      {
        "name": "Star-Lord",
        "sub": "marvel",
        "word": "fita",
        "phrase": "Navega pelas estrelas ao som de fitas antigas."
      },
      {
        "name": "Gamora",
        "sub": "marvel",
        "word": "lâmina",
        "phrase": "A guerreira mais letal que se rebelou contra o próprio criador."
      },
      {
        "name": "Drax",
        "sub": "marvel",
        "word": "vingança",
        "phrase": "Leva tudo ao pé da letra com duas adagas em mãos."
      },
      {
        "name": "Nebulosa",
        "sub": "marvel",
        "word": "cibernética",
        "phrase": "Peças mecânicas cobrindo cicatrizes de família."
      },
      {
        "name": "Wolverine",
        "sub": "marvel",
        "word": "adamantium",
        "phrase": "Garras afiadas e feridas que se fecham num instante."
      },
      {
        "name": "Ciclope",
        "sub": "marvel",
        "word": "rubi",
        "phrase": "Um feixe devastador controlado por um visor constante."
      },
      {
        "name": "Tempestade",
        "sub": "marvel",
        "word": "vento",
        "phrase": "Reverenciada como deusa por controlar os céus."
      },
      {
        "name": "Jean Grey",
        "sub": "marvel",
        "word": "telepatia",
        "phrase": "Uma mente brilhante guardando uma entidade cósmica."
      },
      {
        "name": "Vampira",
        "sub": "marvel",
        "word": "toque",
        "phrase": "A pele descoberta absorve a vida de quem encostar."
      },
      {
        "name": "Gambit",
        "sub": "marvel",
        "word": "cinética",
        "phrase": "Energiza qualquer objeto antes de arremessar com estilo."
      },
      {
        "name": "Fera",
        "sub": "marvel",
        "word": "intelecto",
        "phrase": "Cita filósofos clássicos com pelos azuis e garras."
      },
      {
        "name": "Noturno",
        "sub": "marvel",
        "word": "enxofre",
        "phrase": "Desaparece numa névoa azul antes que você perceba."
      },
      {
        "name": "Professor Xavier",
        "sub": "marvel",
        "word": "cérebro",
        "phrase": "Guia os jovens excluídos sem precisar se levantar."
      },
      {
        "name": "Colossus",
        "sub": "marvel",
        "word": "blindagem",
        "phrase": "Músculos que se transformam em aço reluzente."
      },
      {
        "name": "Mística",
        "sub": "marvel",
        "word": "camaleão",
        "phrase": "Pode ser qualquer pessoa que cruzar seu caminho."
      },
      {
        "name": "Deadpool",
        "sub": "marvel",
        "word": "regeneração",
        "phrase": "Fala diretamente com quem está assistindo o jogo."
      },
      {
        "name": "Demolidor",
        "sub": "marvel",
        "word": "radar",
        "phrase": "Vê muito mais do que os olhos comuns enxergam."
      },
      {
        "name": "Justiceiro",
        "sub": "marvel",
        "word": "caveira",
        "phrase": "Sem trégua e sem julgamento para quem cruza a linha."
      },
      {
        "name": "Elektra",
        "sub": "marvel",
        "word": "adaga",
        "phrase": "Mestre letal das sombras e da arte marcial."
      },
      {
        "name": "Blade",
        "sub": "marvel",
        "word": "noturno",
        "phrase": "Caminha no sol enquanto caça criaturas da noite."
      },
      {
        "name": "Motoqueiro Fantasma",
        "sub": "marvel",
        "word": "penitência",
        "phrase": "Seu olhar queima a alma de quem cometeu erros."
      },
      {
        "name": "Surfista Prateado",
        "sub": "marvel",
        "word": "cósmico",
        "phrase": "Corta o vácuo do espaço anunciando o destino dos mundos."
      },
      {
        "name": "Cavaleiro da Lua",
        "sub": "marvel",
        "word": "fases",
        "phrase": "Múltiplas personalidades sob o comando de um deus esquecido."
      },
      {
        "name": "Shang-Chi",
        "sub": "marvel",
        "word": "anéis",
        "phrase": "Arte milenar despertando o poder de artefatos antigos."
      },
      {
        "name": "Namor",
        "sub": "marvel",
        "word": "abismo",
        "phrase": "Asas nos tornozelos e realeza das fossas marinhas."
      },
      {
        "name": "Miles Morales",
        "sub": "marvel",
        "word": "camuflagem",
        "phrase": "Um choque de eletricidade e tênis novo no asfalto."
      },
      {
        "name": "Spider-Gwen",
        "sub": "marvel",
        "word": "baquetas",
        "phrase": "Capuz branco e ritmo musical nas teias entre prédios."
      },
      {
        "name": "Mulher-Hulk",
        "sub": "marvel",
        "word": "tribunal",
        "phrase": "Defende clientes de dia e dobra postes à noite."
      },
      {
        "name": "Thanos",
        "sub": "marvel",
        "word": "equilíbrio",
        "phrase": "Um único estalo para cumprir sua visão sombria."
      },
      {
        "name": "Loki",
        "sub": "marvel",
        "word": "engano",
        "phrase": "Sempre que parece derrotado, era apenas um clone."
      },
      {
        "name": "Magneto",
        "sub": "marvel",
        "word": "ferro",
        "phrase": "Nenhum metal escapa ao comando de sua vontade."
      },
      {
        "name": "Doutor Destino",
        "sub": "marvel",
        "word": "máscara",
        "phrase": "Monarca absoluto que combina feitiçaria e tecnologia."
      },
      {
        "name": "Duende Verde",
        "sub": "marvel",
        "word": "planador",
        "phrase": "Gargalhadas no ar jogando artefatos ardentes."
      },
      {
        "name": "Doutor Octopus",
        "sub": "marvel",
        "word": "tentáculos",
        "phrase": "Braços mecânicos controlados por uma mente obcecada."
      },
      {
        "name": "Venom",
        "sub": "marvel",
        "word": "parasita",
        "phrase": "Duas mentes num só corpo de dentes pontiagudos."
      },
      {
        "name": "Carnificina",
        "sub": "marvel",
        "word": "vermelho",
        "phrase": "O caos absoluto em formato de lâminas escarlates."
      },
      {
        "name": "Batman",
        "sub": "dc",
        "word": "morcego",
        "phrase": "Não tem superpoderes, apenas preparo e a escuridão."
      },
      {
        "name": "Superman",
        "sub": "dc",
        "word": "solar",
        "phrase": "A esperança vem da luz de um sol distante."
      },
      {
        "name": "Mulher-Maravilha",
        "sub": "dc",
        "word": "verdade",
        "phrase": "Ninguém consegue mentir preso nas voltas da sua corda."
      },
      {
        "name": "Flash",
        "sub": "dc",
        "word": "relâmpago",
        "phrase": "Tão veloz que pode viajar pelas linhas do tempo."
      },
      {
        "name": "Aquaman",
        "sub": "dc",
        "word": "tridente",
        "phrase": "Reina sobre setenta por cento da superfície do planeta."
      },
      {
        "name": "Lanterna Verde",
        "sub": "dc",
        "word": "vontade",
        "phrase": "O único limite para suas criações é a própria imaginação."
      },
      {
        "name": "Ciborgue",
        "sub": "dc",
        "word": "circuito",
        "phrase": "Conectado a todos os bancos de dados do universo."
      },
      {
        "name": "Mulher-Gato",
        "sub": "dc",
        "word": "joias",
        "phrase": "Passos macios nos telhados em busca de peças raras."
      },
      {
        "name": "Robin",
        "sub": "dc",
        "word": "acrobacia",
        "phrase": "O primeiro aprendiz sob as asas do guardião noturno."
      },
      {
        "name": "Batgirl",
        "sub": "dc",
        "word": "torre",
        "phrase": "Brilhante em computadores e implacável na luta corpo a corpo."
      },
      {
        "name": "Asa Noturna",
        "sub": "dc",
        "word": "bastão",
        "phrase": "Saiu da sombra do mentor para proteger sua própria cidade."
      },
      {
        "name": "Capuz Vermelho",
        "sub": "dc",
        "word": "retorno",
        "phrase": "Voltou do descanso eterno buscando vingança armada."
      },
      {
        "name": "Arqueiro Verde",
        "sub": "dc",
        "word": "aljava",
        "phrase": "Um bilionário que defende os fracos com precisão impecável."
      },
      {
        "name": "Supergirl",
        "sub": "dc",
        "word": "órbita",
        "phrase": "Chegou à Terra carregando a mesma força do primo."
      },
      {
        "name": "Shazam",
        "sub": "dc",
        "word": "trovão",
        "phrase": "Uma única palavra mágica transforma uma criança num campeão."
      },
      {
        "name": "Ravena",
        "sub": "dc",
        "word": "meditação",
        "phrase": "Precisa manter a calma para conter as sombras do pai."
      },
      {
        "name": "Mutano",
        "sub": "dc",
        "word": "verde",
        "phrase": "Pode se transformar em qualquer criatura do reino selvagem."
      },
      {
        "name": "Estelar",
        "sub": "dc",
        "word": "energia",
        "phrase": "Dispara rajadas de luz e aprende idiomas pelo beijo."
      },
      {
        "name": "Superboy",
        "sub": "dc",
        "word": "clone",
        "phrase": "Dividido entre o sangue de um herói e a mente de um vilão."
      },
      {
        "name": "Mera",
        "sub": "dc",
        "word": "hidrocinese",
        "phrase": "Molda a própria água em armas rígidas e mortais."
      },
      {
        "name": "John Constantine",
        "sub": "dc",
        "word": "exorcismo",
        "phrase": "Fumaça, cinismo e pactos perigosos com o submundo."
      },
      {
        "name": "Gavião Negro",
        "sub": "dc",
        "word": "reencarnação",
        "phrase": "Asas douradas cruzando os séculos em busca do grande amor."
      },
      {
        "name": "Caçador de Marte",
        "sub": "dc",
        "word": "marciano",
        "phrase": "Lê pensamentos alheios mas teme o fogo mais que tudo."
      },
      {
        "name": "Zatanna",
        "sub": "dc",
        "word": "inversão",
        "phrase": "Pronuncia as palavras de trás para frente para invocar magias."
      },
      {
        "name": "Canário Negro",
        "sub": "dc",
        "word": "acústica",
        "phrase": "Um grito tão estridente que estilhaça vidros blindados."
      },
      {
        "name": "Doutor Destino (Fate)",
        "sub": "dc",
        "word": "elmo",
        "phrase": "O hospedeiro humano obedece à vontade de uma entidade dourada."
      },
      {
        "name": "Coringa",
        "sub": "dc",
        "word": "risada",
        "phrase": "A pele pálida e o sorriso que ninguém acha engraçado."
      },
      {
        "name": "Arlequina",
        "sub": "dc",
        "word": "marreta",
        "phrase": "Trocou o divã de psiquiatria por acrobacias e loucura."
      },
      {
        "name": "Pinguim",
        "sub": "dc",
        "word": "fraque",
        "phrase": "Comanda o submundo com truques na ponta do guarda-chuva."
      },
      {
        "name": "Charada",
        "sub": "dc",
        "word": "enigma",
        "phrase": "Não consegue cometer um ato sem deixar pistas complexas."
      },
      {
        "name": "Hera Venenosa",
        "sub": "dc",
        "word": "esporos",
        "phrase": "Prefere a companhia das plantas do que dos seres humanos."
      },
      {
        "name": "Duas-Caras",
        "sub": "dc",
        "word": "moeda",
        "phrase": "A sorte de quem vive ou morre depende do lado que cair."
      },
      {
        "name": "Bane",
        "sub": "dc",
        "word": "veneno",
        "phrase": "Bombas químicas nos tubos aumentam sua força monstruosa."
      },
      {
        "name": "Espantalho",
        "sub": "dc",
        "word": "alucinação",
        "phrase": "Seu gás desperta os piores pesadelos da mente humana."
      },
      {
        "name": "Darkseid",
        "sub": "dc",
        "word": "apokolips",
        "phrase": "Busca a equação que escravizará a vontade de todo o cosmo."
      },
      {
        "name": "Brainiac",
        "sub": "dc",
        "word": "redoma",
        "phrase": "Encolhe cidades inteiras para colecionar em prateleiras."
      },
      {
        "name": "Lex Luthor",
        "sub": "dc",
        "word": "inveja",
        "phrase": "Sua genialidade não aceita a existência de um deus entre nós."
      },
      {
        "name": "Goku",
        "sub": "anime",
        "word": "sayajin",
        "phrase": "Nunca recusa uma boa luta e sempre busca quebrar seus limites."
      },
      {
        "name": "Vegeta",
        "sub": "anime",
        "word": "orgulho",
        "phrase": "O príncipe de uma raça guerreira que não aceita ficar em segundo."
      },
      {
        "name": "Gohan",
        "sub": "anime",
        "word": "estudioso",
        "phrase": "Guarda uma força gigantesca que só desperta quando vê injustiça."
      },
      {
        "name": "Piccolo",
        "sub": "anime",
        "word": "antenas",
        "phrase": "Ouvidos aguçados e meditação no topo das montanhas."
      },
      {
        "name": "Trunks",
        "sub": "anime",
        "word": "espada",
        "phrase": "Voltou no tempo para tentar evitar a queda do seu mundo."
      },
      {
        "name": "Naruto",
        "sub": "anime",
        "word": "raposa",
        "phrase": "O garoto rejeitado que prometeu nunca voltar atrás em sua palavra."
      },
      {
        "name": "Sasuke",
        "sub": "anime",
        "word": "olhos",
        "phrase": "Um caminho de escuridão guiado pelo desejo de vingar seu clã."
      },
      {
        "name": "Kakashi",
        "sub": "anime",
        "word": "livro",
        "phrase": "Copía mil técnicas e lê histórias enquanto se atrasa."
      },
      {
        "name": "Itachi",
        "sub": "anime",
        "word": "corvos",
        "phrase": "Sacrificou a própria honra para manter a paz nas sombras."
      },
      {
        "name": "Luffy",
        "sub": "anime",
        "word": "borracha",
        "phrase": "Navega em busca do tesouro supremo sem nunca perder o apetite."
      },
      {
        "name": "Zoro",
        "sub": "anime",
        "word": "bússola",
        "phrase": "Três lâminas mortais mas não consegue achar o caminho de volta."
      },
      {
        "name": "Sanji",
        "sub": "anime",
        "word": "chama",
        "phrase": "Nunca bate em mulheres e só usa os pés para lutar."
      },
      {
        "name": "Saitama",
        "sub": "anime",
        "word": "tédio",
        "phrase": "Ficou tão forte que as lutas perderam toda a emoção."
      },
      {
        "name": "Genos",
        "sub": "anime",
        "word": "incineração",
        "phrase": "Anota cada lição do mestre esperando entender seu segredo."
      },
      {
        "name": "Deku",
        "sub": "anime",
        "word": "caderno",
        "phrase": "Anotava estratégias até herdar a chama de seu ídolo."
      },
      {
        "name": "All Might",
        "sub": "anime",
        "word": "sorriso",
        "phrase": "Chegava com imponência para dizer que tudo estava bem."
      },
      {
        "name": "Bakugo",
        "sub": "anime",
        "word": "suor",
        "phrase": "Explosões nas palmas das mãos e um temperamento curto."
      },
      {
        "name": "Satoru Gojo",
        "sub": "anime",
        "word": "infinito",
        "phrase": "Ninguém consegue tocá-lo a menos que ele permita."
      },
      {
        "name": "Sukuna",
        "sub": "anime",
        "word": "dedos",
        "phrase": "O rei das maldições adormecido no corpo de um garoto comum."
      },
      {
        "name": "Tanjiro Kamado",
        "sub": "anime",
        "word": "olfato",
        "phrase": "Sente as intenções pelo cheiro enquanto empunha a lâmina negra."
      },
      {
        "name": "Nezuko",
        "sub": "anime",
        "word": "caixa",
        "phrase": "Dorme de dia para proteger os humanos durante a noite."
      },
      {
        "name": "Zenitsu",
        "sub": "anime",
        "word": "sono",
        "phrase": "Só mostra sua verdadeira força quando perde a consciência de medo."
      },
      {
        "name": "Edward Elric",
        "sub": "anime",
        "word": "troca",
        "phrase": "Para obter algo, algo de igual valor deve ser oferecido."
      },
      {
        "name": "Eren Yeager",
        "sub": "anime",
        "word": "liberdade",
        "phrase": "Avança implacável contra o mundo para proteger seu povo."
      },
      {
        "name": "Levi Ackerman",
        "sub": "anime",
        "word": "lâminas",
        "phrase": "Limpeza impecável e rotações mortais contra gigantes."
      },
      {
        "name": "Ben 10",
        "sub": "outros",
        "word": "relógio",
        "phrase": "Basta apertar o disco no pulso para mudar de forma."
      },
      {
        "name": "Leonardo (Tartaruga)",
        "sub": "outros",
        "word": "katana",
        "phrase": "Lidera os irmãos com faixa azul e disciplina rígida."
      },
      {
        "name": "Donatello",
        "sub": "outros",
        "word": "tecnologia",
        "phrase": "Conserta máquinas e luta com um longo bastão de madeira."
      },
      {
        "name": "Michelangelo",
        "sub": "outros",
        "word": "fatia",
        "phrase": "Duas nunchakus no ar e um apetite sem fim por queijo."
      },
      {
        "name": "Raphael",
        "sub": "outros",
        "word": "temperamento",
        "phrase": "Faixa vermelha nos olhos e pavio curto com as adagas."
      },
      {
        "name": "Mestre Splinter",
        "sub": "outros",
        "word": "esgoto",
        "phrase": "Um mestre sábio que adotou quatro irmãos nas profundezas."
      },
      {
        "name": "Destruidor",
        "sub": "outros",
        "word": "garras",
        "phrase": "Armadura pontiaguda comandando os ninjas do Clã do Pé."
      },
      {
        "name": "Power Ranger Vermelho",
        "sub": "outros",
        "word": "morfar",
        "phrase": "Chama a equipe com um grito e comanda o robô gigante."
      },
      {
        "name": "Sr. Incrível",
        "sub": "outros",
        "word": "coluna",
        "phrase": "Sente dores nas costas mas levanta trens com um só braço."
      },
      {
        "name": "Mulher-Elástica",
        "sub": "outros",
        "word": "flexível",
        "phrase": "Mantém a família unida esticando os limites do corpo."
      },
      {
        "name": "Gelado",
        "sub": "outros",
        "word": "umidade",
        "phrase": "Desliza em rampas congeladas se o ar ao redor permitir."
      },
      {
        "name": "Hellboy",
        "sub": "outros",
        "word": "chifres",
        "phrase": "Lixa os próprios chifres e fuma charuto enfrentando monstros."
      },
      {
        "name": "Chapolin Colorado",
        "sub": "outros",
        "word": "antena",
        "phrase": "Não contavam com sua astúcia na hora do apuro."
      },
      {
        "name": "Pacificador",
        "sub": "dc",
        "word": "capacete",
        "phrase": "Valoriza tanto a paz que mataria qualquer um por ela."
      },
      {
        "name": "Constantine",
        "sub": "dc",
        "word": "fumaça",
        "phrase": "Fuma cigarros enquanto engana demônios nos bares de Londres."
      },
      {
        "name": "Besouro Azul",
        "sub": "dc",
        "word": "escaravelho",
        "phrase": "Um artefato alienígena acoplado à sua coluna vertebral."
      },
      {
        "name": "Killua Zoldyck",
        "sub": "anime",
        "word": "eletricidade",
        "phrase": "Herdeiro de assassinos que converte aura em relâmpago veloz."
      },
      {
        "name": "Roronoa Zoro",
        "sub": "anime",
        "word": "bambolê",
        "phrase": "Três lâminas empunhadas e zero senso de direção."
      },
      {
        "name": "Jotaro Kujo",
        "sub": "anime",
        "word": "platina",
        "phrase": "Para o fluxo temporal por alguns preciosos segundos."
      },
      {
        "name": "Zorro",
        "sub": "outros",
        "word": "chicote",
        "phrase": "Deixa sua marca em três cortes velozes no tecido da camisa."
      },
      {
        "name": "He-Man",
        "sub": "outros",
        "word": "greyskull",
        "phrase": "Ergue a espada aos céus e clama pelo poder supremo."
      },
      {
        "name": "Spawn",
        "sub": "outros",
        "word": "capa",
        "phrase": "Fez um pacto com as trevas para rever a esposa que amava."
      },
      {
        "name": "Kick-Ass",
        "sub": "outros",
        "word": "mergulhador",
        "phrase": "Não tem superpoderes, apenas um traje verde e muita coragem."
      },
      {
        "name": "Omni-Man",
        "sub": "outros",
        "word": "bigode",
        "phrase": "Vendeu a mentira de protetor mas servia a um império sanguinário."
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
        "phrase": "Auditório vibrante cantando notas dobradas de alegria."
      },
      {
        "name": "Xuxa",
        "sub": "brasileiros",
        "word": "nave",
        "phrase": "Marcou a infância com descidas de uma nave prateada."
      },
      {
        "name": "Faustão",
        "sub": "brasileiros",
        "word": "errou",
        "phrase": "Relógio no pulso e comentários rápidos nos domingos da TV."
      },
      {
        "name": "Anitta",
        "sub": "brasileiros",
        "word": "honório",
        "phrase": "Levou o ritmo da periferia para o topo dos palcos mundiais."
      },
      {
        "name": "Ivete Sangalo",
        "sub": "brasileiros",
        "word": "trio",
        "phrase": "Incendeia multidões pulando atrás do caminhão de som."
      },
      {
        "name": "Luciano Huck",
        "sub": "brasileiros",
        "word": "reforma",
        "phrase": "Reformava carros antigos e agora comanda os fins de semana."
      },
      {
        "name": "Roberto Carlos",
        "sub": "brasileiros",
        "word": "dezembro",
        "phrase": "Distribui rosas azuis religiosamente no fim do ano."
      },
      {
        "name": "Marília Mendonça",
        "sub": "brasileiros",
        "word": "sofrência",
        "phrase": "Sua voz poderosa deu novo sentido às dores do coração."
      },
      {
        "name": "Luan Santana",
        "sub": "brasileiros",
        "word": "meteoro",
        "phrase": "Atingiu o coração do público sertanejo ainda jovem."
      },
      {
        "name": "Gusttavo Lima",
        "sub": "brasileiros",
        "word": "embaixador",
        "phrase": "Palco monumental e horas seguidas de modas na madrugada."
      },
      {
        "name": "Ludmilla",
        "sub": "brasileiros",
        "word": "pagode",
        "phrase": "Lotou estádios cantando pagode com um copo na mão."
      },
      {
        "name": "Fernanda Montenegro",
        "sub": "brasileiros",
        "word": "central",
        "phrase": "Dama do cinema indicada ao maior prêmio internacional."
      },
      {
        "name": "Selton Mello",
        "sub": "brasileiros",
        "word": "chicó",
        "phrase": "Não sabe como aconteceu, só sabe que foi assim."
      },
      {
        "name": "Ana Maria Braga",
        "sub": "brasileiros",
        "word": "papagaio",
        "phrase": "Acorda o país de manhã passando receitas e reflexões."
      },
      {
        "name": "Paulo Gustavo",
        "sub": "brasileiros",
        "word": "bobs",
        "phrase": "Dona de casa de salto alto que marcou o cinema brasileiro."
      },
      {
        "name": "Tatá Werneck",
        "sub": "brasileiros",
        "word": "trote",
        "phrase": "Raciocínio veloz e piadas inesperadas em entrevistas."
      },
      {
        "name": "Gisele Bündchen",
        "sub": "brasileiros",
        "word": "passarela",
        "phrase": "Passos firmes e olhar marcante que conquistaram o mundo da moda."
      },
      {
        "name": "Chico Buarque",
        "sub": "brasileiros",
        "word": "olhos",
        "phrase": "Poesia densa e canções históricas da MPB."
      },
      {
        "name": "Caetano Veloso",
        "sub": "brasileiros",
        "word": "tropicalismo",
        "phrase": "Voz suave e vanguarda musical com abraço afetuoso."
      },
      {
        "name": "Michael Jackson",
        "sub": "internacionais",
        "word": "luva",
        "phrase": "Desliza para trás nos palcos com o mundo inteiro assistindo."
      },
      {
        "name": "Beyoncé",
        "sub": "internacionais",
        "word": "abelha",
        "phrase": "Comanda uma colmeia global de admiradores fervorosos."
      },
      {
        "name": "Taylor Swift",
        "sub": "internacionais",
        "word": "pulseiras",
        "phrase": "Suas regravações e turnê movimentaram a economia de países."
      },
      {
        "name": "Justin Bieber",
        "sub": "internacionais",
        "word": "franja",
        "phrase": "Um vídeo caseiro no violão abriu as portas da fama precoce."
      },
      {
        "name": "Rihanna",
        "sub": "internacionais",
        "word": "guarda-chuva",
        "phrase": "Trocou o topo das paradas musicais pelo império da beleza."
      },
      {
        "name": "Tom Cruise",
        "sub": "internacionais",
        "word": "acrobacia",
        "phrase": "Prefere saltar de penhascos reais a usar computação gráfica."
      },
      {
        "name": "Brad Pitt",
        "sub": "internacionais",
        "word": "galã",
        "phrase": "Rosto marcante de produções clássicas e premiadas."
      },
      {
        "name": "Leonardo DiCaprio",
        "sub": "internacionais",
        "word": "proa",
        "phrase": "Encarou águas geladas nos cinemas e lutou anos pela estatueta."
      },
      {
        "name": "Will Smith",
        "sub": "internacionais",
        "word": "bel-air",
        "phrase": "Saiu da Filadélfia para viver numa mansão cheia de comédia."
      },
      {
        "name": "Lady Gaga",
        "sub": "internacionais",
        "word": "pôquer",
        "phrase": "Ousadia visual sem limites e vocais teatrais inconfundíveis."
      },
      {
        "name": "Bruno Mars",
        "sub": "internacionais",
        "word": "ouro",
        "phrase": "Passos sincronizados e elegância de grandes ícones da música."
      },
      {
        "name": "Billie Eilish",
        "sub": "internacionais",
        "word": "sussurro",
        "phrase": "Tons baixos e roupas largas que redefiniram o pop jovem."
      },
      {
        "name": "Ed Sheeran",
        "sub": "internacionais",
        "word": "sardas",
        "phrase": "Apenas um violão e pedais de repetição lotando estádios."
      },
      {
        "name": "Shakira",
        "sub": "internacionais",
        "word": "quadris",
        "phrase": "Ritmo latino irresistível que ecoou em Copas do Mundo."
      },
      {
        "name": "Dwayne Johnson",
        "sub": "internacionais",
        "word": "sobrancelha",
        "phrase": "Músculos colossais e o levantamento de sobrancelha mais famoso."
      },
      {
        "name": "Zendaya",
        "sub": "internacionais",
        "word": "euforia",
        "phrase": "Talento precoce premiado por atuações densas na TV."
      },
      {
        "name": "Tom Holland",
        "sub": "internacionais",
        "word": "spoiler",
        "phrase": "Carisma descontraído e o perigo constante de soltar segredos do roteiro."
      },
      {
        "name": "Keanu Reeves",
        "sub": "internacionais",
        "word": "matrix",
        "phrase": "Cachorro vingado no cinema e humildade elogiada nas ruas."
      },
      {
        "name": "Adele",
        "sub": "internacionais",
        "word": "telefone",
        "phrase": "Voz emocionante e recorde absoluto de vendas sem alarde."
      },
      {
        "name": "Pelé",
        "sub": "atletas",
        "word": "coroa",
        "phrase": "Eternizado por parar guerras e marcar mais de mil gols."
      },
      {
        "name": "Neymar",
        "sub": "atletas",
        "word": "menino",
        "phrase": "Fintas rápidas nos gramados e manchetes fora de campo."
      },
      {
        "name": "Messi",
        "sub": "atletas",
        "word": "rosário",
        "phrase": "Conduziu sua seleção ao topo com canhotinha incomparável."
      },
      {
        "name": "Cristiano Ronaldo",
        "sub": "atletas",
        "word": "salto",
        "phrase": "Impressiona pela impulsão no ar e dedicação obsessiva."
      },
      {
        "name": "Ronaldinho Gaúcho",
        "sub": "atletas",
        "word": "bruxo",
        "phrase": "Olhava para um lado enquanto passava a bola para o outro."
      },
      {
        "name": "Ayrton Senna",
        "sub": "atletas",
        "word": "chuva",
        "phrase": "Brilhava sob o asfalto molhado ao som do tema nacional."
      },
      {
        "name": "Vinícius Júnior",
        "sub": "atletas",
        "word": "bailado",
        "phrase": "Sorriso no rosto e ginga que superam qualquer hostilidade."
      },
      {
        "name": "Kylian Mbappé",
        "sub": "atletas",
        "word": "velocidade",
        "phrase": "Arrancadas fulminantes pelo corredor direito com camisa dez."
      },
      {
        "name": "Lewis Hamilton",
        "sub": "atletas",
        "word": "pole",
        "phrase": "Heptacampeão de macacão com estilo marcante nas pistas."
      },
      {
        "name": "LeBron James",
        "sub": "atletas",
        "word": "coroa",
        "phrase": "O rei das quadras que quebrou todos os recordes de pontuação."
      },
      {
        "name": "Michael Jordan",
        "sub": "atletas",
        "word": "salto",
        "phrase": "Fez a silhueta arremessando no ar virar o maior logo do mundo."
      },
      {
        "name": "Marta",
        "sub": "atletas",
        "word": "seis",
        "phrase": "Maior artilheira das Copas com seis prêmios de melhor do mundo."
      },
      {
        "name": "Ronaldo Fenômeno",
        "sub": "atletas",
        "word": "joelho",
        "phrase": "Cascão em campo e dois gols que selaram o pentacampeonato."
      },
      {
        "name": "Gabriel Medina",
        "sub": "atletas",
        "word": "prancha",
        "phrase": "Flutuou no ar sobre as ondas nas águas do Taiti."
      },
      {
        "name": "Usain Bolt",
        "sub": "atletas",
        "word": "raio",
        "phrase": "Olhou para o lado sorrindo nos últimos metros da final olímpica."
      },
      {
        "name": "Mr. Beast",
        "sub": "internet",
        "word": "desafio",
        "phrase": "Montou provas malucas e distribuiu milhões em premiações."
      },
      {
        "name": "Casimiro",
        "sub": "internet",
        "word": "reação",
        "phrase": "Comentários bem-humorados na madrugada que conquistaram a internet."
      },
      {
        "name": "Whindersson Nunes",
        "sub": "internet",
        "word": "piauí",
        "phrase": "Começou sem camisa num quarto humilde e lotou arenas."
      },
      {
        "name": "Felipe Neto",
        "sub": "internet",
        "word": "coruja",
        "phrase": "Opiniões contundentes e milhares de vídeos gravados no quarto."
      },
      {
        "name": "Virginia Fonseca",
        "sub": "internet",
        "word": "dancinha",
        "phrase": "Vídeos diários e milhões de produtos vendidos em transmissões."
      },
      {
        "name": "Juliette",
        "sub": "internet",
        "word": "cacto",
        "phrase": "Um fenômeno popular que conquistou o país pela espontaneidade."
      },
      {
        "name": "Gil do Vigor",
        "sub": "internet",
        "word": "regozijo",
        "phrase": "Economia e gritos espontâneos de alegria marcaram a edição."
      },
      {
        "name": "Elon Musk",
        "sub": "internet",
        "word": "propulsão",
        "phrase": "Sonha em construir colônias no planeta vizinho."
      },
      {
        "name": "Mark Zuckerberg",
        "sub": "internet",
        "word": "conectar",
        "phrase": "Criou um diretório universitário que uniu bilhões de telas."
      },
      {
        "name": "Alok",
        "sub": "internet",
        "word": "feixe",
        "phrase": "Luzes cortando o céu noturno ao som de batidas eletrônicas."
      },
      {
        "name": "Gkay",
        "sub": "brasileiros",
        "word": "farofa",
        "phrase": "Ficou famosa por organizar a festa mais comentada da internet."
      },
      {
        "name": "Seu Jorge",
        "sub": "brasileiros",
        "word": "burguesinha",
        "phrase": "Voz rouca inconfundível misturando samba, MPB e cinema."
      },
      {
        "name": "Rodrigo Hilbert",
        "sub": "brasileiros",
        "word": "ferreiro",
        "phrase": "Famoso por construir churrasqueiras, cozinhar e fazer de tudo."
      },
      {
        "name": "Freddie Mercury",
        "sub": "internacionais",
        "word": "bigode",
        "phrase": "Sua afinação lendária comandava coro de cem mil pessoas no estádio."
      },
      {
        "name": "Dwayne Johnson (The Rock)",
        "sub": "internacionais",
        "word": "sobrancelha",
        "phrase": "Começou no ringue de luta e virou o homem mais musculoso de Hollywood."
      },
      {
        "name": "Pedro Pascal",
        "sub": "internacionais",
        "word": "beskar",
        "phrase": "O pai protetor favorito das séries mais aclamadas da atualidade."
      },
      {
        "name": "Rayssa Leal",
        "sub": "atletas",
        "word": "fadinha",
        "phrase": "Encantou o mundo deslizando em corrimãos com asas imaginárias."
      },
      {
        "name": "Rebeca Andrade",
        "sub": "atletas",
        "word": "salto",
        "phrase": "Maior medalhista olímpica da história do esporte brasileiro."
      },
      {
        "name": "Michael Phelps",
        "sub": "atletas",
        "word": "nadadeira",
        "phrase": "Colecionou vinte e oito medalhas cortando as águas com braçadas perfeitas."
      },
      {
        "name": "Stephen Curry",
        "sub": "atletas",
        "word": "perímetro",
        "phrase": "Revolucionou as quadras arremessando da linha de três pontos."
      },
      {
        "name": "Simone Biles",
        "sub": "atletas",
        "word": "gravidade",
        "phrase": "Executa movimentos tão complexos que foram batizados com seu próprio nome."
      },
      {
        "name": "MrBeast",
        "sub": "internet",
        "word": "chocolate",
        "phrase": "Distribui ilhas e milhões de dólares em gincanas megalomaníacas."
      },
      {
        "name": "Ibai Llanos",
        "sub": "internet",
        "word": "velada",
        "phrase": "Narrador e streamer espanhol que quebra recordes mundiais de audiência."
      },
      {
        "name": "Monark",
        "sub": "internet",
        "word": "microfone",
        "phrase": "Foi pioneiro nos podcasts no Brasil antes de sucessivas polêmicas."
      },
      {
        "name": "Luva de Pedreiro",
        "sub": "internet",
        "word": "receba",
        "phrase": "Gravava chutes no terrão e virou fenômeno mundial de carisma."
      },
      {
        "name": "Khaby Lame",
        "sub": "internet",
        "word": "palmas",
        "phrase": "Conquistou o topo das redes sem precisar dizer uma única palavra."
      },
      {
        "name": "Gaules",
        "sub": "internet",
        "word": "tribo",
        "phrase": "Reuniu uma das maiores comunidades de transmissões ao vivo de esports."
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
        "phrase": "Dividida em oito fatias crocantes com queijo puxando."
      },
      {
        "name": "Hambúrguer",
        "sub": "lanches",
        "word": "chapa",
        "phrase": "Carne suculenta prensada entre dois pães macios."
      },
      {
        "name": "Batata frita",
        "sub": "lanches",
        "word": "palito",
        "phrase": "Crocante por fora e macia por dentro com um toque de sal."
      },
      {
        "name": "Coxinha",
        "sub": "lanches",
        "word": "gota",
        "phrase": "Formato icônico com recheio desfiado e casca dourada."
      },
      {
        "name": "Pastel",
        "sub": "lanches",
        "word": "caldo",
        "phrase": "Massa crocante com vento que combina com feira livre."
      },
      {
        "name": "Cachorro-quente",
        "sub": "lanches",
        "word": "salsicha",
        "phrase": "Lanche de rua que cada região coloca um recheio diferente."
      },
      {
        "name": "Sanduíche",
        "sub": "lanches",
        "word": "fatias",
        "phrase": "Prático e montado entre fatias com queijo e presunto."
      },
      {
        "name": "Nuggets",
        "sub": "lanches",
        "word": "empanado",
        "phrase": "Pedaços crocantes mergulhados em molho agridoce."
      },
      {
        "name": "Pão de queijo",
        "sub": "lanches",
        "word": "fornada",
        "phrase": "Herança mineira com casca dourada e interior elástico."
      },
      {
        "name": "Pão francês",
        "sub": "lanches",
        "word": "padaria",
        "phrase": "Casca estaladiça e miolo fofo que perfumam a manhã."
      },
      {
        "name": "Esfiha",
        "sub": "lanches",
        "word": "triângulo",
        "phrase": "Massa aberta ou fechada com recheio temperado de carne."
      },
      {
        "name": "Kibe",
        "sub": "lanches",
        "word": "trigo",
        "phrase": "Frito ou cru com folhas de hortelã fresca."
      },
      {
        "name": "Pipoca",
        "sub": "lanches",
        "word": "estalo",
        "phrase": "Grãos duros que viram nuvens brancas sob o calor do óleo."
      },
      {
        "name": "Feijoada",
        "sub": "brasileira",
        "word": "caldeirão",
        "phrase": "Tradição de sábado servida com laranja e farofa."
      },
      {
        "name": "Arroz e feijão",
        "sub": "brasileira",
        "word": "cotidiano",
        "phrase": "A combinação sagrada que sustenta o prato de quase todo brasileiro."
      },
      {
        "name": "Churrasco",
        "sub": "brasileira",
        "word": "brasa",
        "phrase": "Fumaça aromática reunindo os amigos ao redor do fogo."
      },
      {
        "name": "Picanha",
        "sub": "brasileira",
        "word": "gordura",
        "phrase": "O corte mais cobiçado da grelha pelo sabor marcante."
      },
      {
        "name": "Acarajé",
        "sub": "brasileira",
        "word": "dendê",
        "phrase": "Bolinho de feijão frito no azeite quente pelas baianas."
      },
      {
        "name": "Tapioca",
        "sub": "brasileira",
        "word": "goma",
        "phrase": "Pó branco que se une na frigideira formando uma folha macia."
      },
      {
        "name": "Moqueca",
        "sub": "brasileira",
        "word": "barro",
        "phrase": "Peixe borbulhando na panela tradicional com temperos marcantes."
      },
      {
        "name": "Baião de dois",
        "sub": "brasileira",
        "word": "nordeste",
        "phrase": "Mistura rica com feijão de corda e queijo coalho grelhado."
      },
      {
        "name": "Strogonoff",
        "sub": "brasileira",
        "word": "palha",
        "phrase": "Molho cremoso sempre acompanhado por fios crocantes de batata."
      },
      {
        "name": "Farofa",
        "sub": "brasileira",
        "word": "crocância",
        "phrase": "Acompanhamento seco e temperado que completa qualquer carne."
      },
      {
        "name": "Cuscuz",
        "sub": "brasileira",
        "word": "vapor",
        "phrase": "Flocos amarelos cozidos na cuscuzeira que sustentam o dia."
      },
      {
        "name": "Pamonha",
        "sub": "brasileira",
        "word": "palha",
        "phrase": "Massa de milho cozida embalada na própria casca da espiga."
      },
      {
        "name": "Escondidinho",
        "sub": "brasileira",
        "word": "purê",
        "phrase": "Carne desfiada coberta por uma camada dourada no forno."
      },
      {
        "name": "Vatapá",
        "sub": "brasileira",
        "word": "amendoim",
        "phrase": "Creme aromático com leite de coco e pimenta suave."
      },
      {
        "name": "Torresmo",
        "sub": "brasileira",
        "word": "pururuca",
        "phrase": "Pedaços fritos estalando crocantes como aperitivo."
      },
      {
        "name": "Sushi",
        "sub": "mundo",
        "word": "esteira",
        "phrase": "Peixe cru e arroz combinados com a ajuda de uma alga escura."
      },
      {
        "name": "Yakisoba",
        "sub": "mundo",
        "word": "shoyu",
        "phrase": "Macarrão frito oriental com legumes puxados na panela wok."
      },
      {
        "name": "Macarrão",
        "sub": "mundo",
        "word": "garfo",
        "phrase": "Fios longos enrolados no prato com molho vermelho generoso."
      },
      {
        "name": "Lasanha",
        "sub": "mundo",
        "word": "camadas",
        "phrase": "Massa intercalada que sai borbulhante do forno no domingo."
      },
      {
        "name": "Risoto",
        "sub": "mundo",
        "word": "arbóreo",
        "phrase": "Arroz cremoso mexido pacientemente na panela funda."
      },
      {
        "name": "Taco",
        "sub": "mundo",
        "word": "tortilha",
        "phrase": "Massa crocante dobrada recheada com sabores apimentados."
      },
      {
        "name": "Burrito",
        "sub": "mundo",
        "word": "embrulho",
        "phrase": "Enrolado grande e recheado fechado dos dois lados."
      },
      {
        "name": "Nachos",
        "sub": "mundo",
        "word": "triângulos",
        "phrase": "Tortilhas crocantes mergulhadas em creme de queijo cheddar."
      },
      {
        "name": "Croissant",
        "sub": "mundo",
        "word": "folhado",
        "phrase": "Massa amanteigada em formato de meia-lua típica francesa."
      },
      {
        "name": "Paella",
        "sub": "mundo",
        "word": "açafrão",
        "phrase": "Prato espanhol dourado repleto de frutos do mar."
      },
      {
        "name": "Guacamole",
        "sub": "mundo",
        "word": "abacate",
        "phrase": "Pasta verde fresca temperada com limão e coentro."
      },
      {
        "name": "Ceviche",
        "sub": "mundo",
        "word": "leche",
        "phrase": "Peixe branco marinado no suco cítrico com cebola roxa."
      },
      {
        "name": "Brigadeiro",
        "sub": "doces",
        "word": "granulado",
        "phrase": "O doce que não pode faltar em mesa de aniversário."
      },
      {
        "name": "Sorvete",
        "sub": "doces",
        "word": "derretimento",
        "phrase": "A corrida contra o tempo nos dias ensolarados."
      },
      {
        "name": "Açaí",
        "sub": "doces",
        "word": "tigela",
        "phrase": "Fruto roxo da floresta servido bem gelado com acompanhamentos."
      },
      {
        "name": "Pudim",
        "sub": "doces",
        "word": "caramelo",
        "phrase": "Sobremesa macia com calda dourada e furinhos na textura."
      },
      {
        "name": "Bolo de chocolate",
        "sub": "doces",
        "word": "fatia",
        "phrase": "Massa fofa coberta de calda que perfuma toda a casa."
      },
      {
        "name": "Beijinho",
        "sub": "doces",
        "word": "cravo",
        "phrase": "Docinho branco com coco ralado e uma especiaria no topo."
      },
      {
        "name": "Paçoca",
        "sub": "doces",
        "word": "amendoim",
        "phrase": "Doce esfarelado típico de festas juninas no interior."
      },
      {
        "name": "Chocolate",
        "sub": "doces",
        "word": "cacau",
        "phrase": "Doce derivado de sementes amargas que derrete na boca."
      },
      {
        "name": "Churros",
        "sub": "doces",
        "word": "doce de leite",
        "phrase": "Massa frita estriada polvilhada com açúcar e canela."
      },
      {
        "name": "Donut",
        "sub": "doces",
        "word": "rosquinha",
        "phrase": "Massa fofa redonda com um buraco perfeito no meio."
      },
      {
        "name": "Waffle",
        "sub": "doces",
        "word": "quadrados",
        "phrase": "Massa prensada com pequenas cavidades que seguram o mel."
      },
      {
        "name": "Torta de limão",
        "sub": "doces",
        "word": "merengue",
        "phrase": "Base crocante com creme azedinho e topo tostado."
      },
      {
        "name": "Algodão doce",
        "sub": "doces",
        "word": "nuvem",
        "phrase": "Fios finíssimos de açúcar colorido enrolados num palito."
      },
      {
        "name": "Fondue",
        "sub": "doces",
        "word": "rechaud",
        "phrase": "Frutas frescas mergulhadas numa tigela de doce derretido."
      },
      {
        "name": "Pastel de Feira",
        "sub": "lanches",
        "word": "garapa",
        "phrase": "Crocante e frito na hora acompanhado de caldo de cana gelado."
      },
      {
        "name": "Misto Quente",
        "sub": "lanches",
        "word": "chapa",
        "phrase": "Pão de forma tostado com recheio derretido pela manteiga."
      },
      {
        "name": "Torta de Frango",
        "sub": "lanches",
        "word": "massa",
        "phrase": "Massa podre que desmancha na boca com recheio bem temperado."
      },
      {
        "name": "Shawarma",
        "sub": "lanches",
        "word": "espeto",
        "phrase": "Carne fatiada no espeto giratório enrolada no pão sírio fino."
      },
      {
        "name": "Empada",
        "sub": "lanches",
        "word": "forminha",
        "phrase": "Assada em forma frisada de metal com azeitona no meio."
      },
      {
        "name": "Moqueca Capixaba",
        "sub": "brasileira",
        "word": "barro",
        "phrase": "Cozida lentamente na panela de barro sem leite de coco nem azeite de dendê."
      },
      {
        "name": "Bobó de Camarão",
        "sub": "brasileira",
        "word": "mandioca",
        "phrase": "Purê aveludado de macaxeira temperado com ervas e frutos do mar."
      },
      {
        "name": "Dobradinha",
        "sub": "brasileira",
        "word": "feijão-branco",
        "phrase": "Prato tradicional de bucho com feijão branco e linguiça."
      },
      {
        "name": "Arrumadinho",
        "sub": "brasileira",
        "word": "farofa",
        "phrase": "Ingredientes organizados lado a lado no prato antes de misturar."
      },
      {
        "name": "Galinhada",
        "sub": "brasileira",
        "word": "pequi",
        "phrase": "Arroz amarelado cozido junto com cortes de frango caipira."
      },
      {
        "name": "Ramen",
        "sub": "mundo",
        "word": "naruto",
        "phrase": "Tigela fumegante de caldo encorpado, macarrão e ovo marinado."
      },
      {
        "name": "Risoto de Funghi",
        "sub": "mundo",
        "word": "arbóreo",
        "phrase": "Arroz italiano cremoso mexido pacientemente com cogumelos secos."
      },
      {
        "name": "Falafel",
        "sub": "mundo",
        "word": "grão-de-bico",
        "phrase": "Bolinho frito temperado de grão-de-bico e especiarias árabes."
      },
      {
        "name": "Tiramisu",
        "sub": "doces",
        "word": "mascarpone",
        "phrase": "Sobremesa italiana à base de biscoitos embebidos em café forte."
      },
      {
        "name": "Petit Gâteau",
        "sub": "doces",
        "word": "lava",
        "phrase": "Bolinho quente com centro derretido servido com sorvete de baunilha."
      },
      {
        "name": "Rabanada",
        "sub": "doces",
        "word": "natalino",
        "phrase": "Pão amanhecido embebido em leite e ovos, frito e salpicado de canela."
      },
      {
        "name": "Quindim",
        "sub": "doces",
        "word": "gema",
        "phrase": "Doce amarelo brilhante à base de coco ralado e muitas gemas de ovos."
      },
      {
        "name": "Cheesecake",
        "sub": "doces",
        "word": "geléia",
        "phrase": "Torta assada de queijo cremoso coberta por frutas vermelhas."
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
        "phrase": "Mostra quem olha sem nunca dizer uma única palavra."
      },
      {
        "name": "Travesseiro",
        "sub": "casa",
        "word": "fronha",
        "phrase": "Apoia os pensamentos cansados no final de cada dia."
      },
      {
        "name": "Cama",
        "sub": "casa",
        "word": "colchão",
        "phrase": "O refúgio acolhedor onde todo mundo quer voltar no frio."
      },
      {
        "name": "Sofá",
        "sub": "casa",
        "word": "almofada",
        "phrase": "O móvel favorito da sala para esticar as pernas."
      },
      {
        "name": "Cadeira",
        "sub": "casa",
        "word": "quatro apoios",
        "phrase": "Feita para descansar o corpo ao redor da mesa."
      },
      {
        "name": "Chuveiro",
        "sub": "casa",
        "word": "vapor",
        "phrase": "Gotas quentes caindo enquanto alguém canta desafinado."
      },
      {
        "name": "Toalha",
        "sub": "casa",
        "word": "felpuda",
        "phrase": "Fica molhada para que você possa sair seco."
      },
      {
        "name": "Guarda-roupa",
        "sub": "casa",
        "word": "cabides",
        "phrase": "Portas grandes guardando tecidos de todas as estações."
      },
      {
        "name": "Cobertor",
        "sub": "casa",
        "word": "aquecer",
        "phrase": "Puxado até o queixo quando a temperatura cai."
      },
      {
        "name": "Geladeira",
        "sub": "casa",
        "word": "motor",
        "phrase": "Porta que todo mundo abre várias vezes sem saber o que quer."
      },
      {
        "name": "Micro-ondas",
        "sub": "casa",
        "word": "prato giratório",
        "phrase": "Emite um bipe estridente quando esquenta o alimento."
      },
      {
        "name": "Liquidificador",
        "sub": "casa",
        "word": "lâminas",
        "phrase": "Faz um barulho ensurdecedor para misturar frutas."
      },
      {
        "name": "Abajur",
        "sub": "casa",
        "word": "cúpula",
        "phrase": "Ilumina suavemente a mesa ao lado da cabeceira."
      },
      {
        "name": "Lâmpada",
        "sub": "casa",
        "word": "filamento",
        "phrase": "O estalo do interruptor traz claridade instantânea."
      },
      {
        "name": "Panela",
        "sub": "casa",
        "word": "tampa",
        "phrase": "Esquenta no fogão borbulhando receitas do almoço."
      },
      {
        "name": "Garfo",
        "sub": "casa",
        "word": "quatro pontas",
        "phrase": "Espeta o alimento para levar até a boca."
      },
      {
        "name": "Prato",
        "sub": "casa",
        "word": "cerâmica",
        "phrase": "Fica embaixo de toda refeição servida à mesa."
      },
      {
        "name": "Copo",
        "sub": "casa",
        "word": "transparência",
        "phrase": "Cilindro de vidro cheio de água até a borda."
      },
      {
        "name": "Vassoura",
        "sub": "casa",
        "word": "cerdas",
        "phrase": "Empurra a poeira do chão canto por canto."
      },
      {
        "name": "Celular",
        "sub": "tecnologia",
        "word": "bateria",
        "phrase": "O aparelho que quase ninguém desgruda das mãos o dia todo."
      },
      {
        "name": "Notebook",
        "sub": "tecnologia",
        "word": "dobradiça",
        "phrase": "Abre como uma pasta mostrando teclado e tela."
      },
      {
        "name": "Televisão",
        "sub": "tecnologia",
        "word": "polegadas",
        "phrase": "A grande janela iluminada que reúne a família na sala."
      },
      {
        "name": "Controle remoto",
        "sub": "tecnologia",
        "word": "pilhas",
        "phrase": "Costuma sumir entre os vãos das almofadas."
      },
      {
        "name": "Fone de ouvido",
        "sub": "tecnologia",
        "word": "isolamento",
        "phrase": "Colocado nas orelhas para ninguém ouvir sua música."
      },
      {
        "name": "Mouse",
        "sub": "tecnologia",
        "word": "clique",
        "phrase": "Desliza sobre a mesa controlando uma setinha na tela."
      },
      {
        "name": "Teclado",
        "sub": "tecnologia",
        "word": "teclas",
        "phrase": "Dezenas de letras que produzem palavras sob os dedos."
      },
      {
        "name": "Câmera",
        "sub": "tecnologia",
        "word": "obturador",
        "phrase": "Congela um instante no tempo para ser lembrado depois."
      },
      {
        "name": "Tomada",
        "sub": "tecnologia",
        "word": "orifícios",
        "phrase": "Pontos na parede esperando pinos para fornecer energia."
      },
      {
        "name": "Despertador",
        "sub": "tecnologia",
        "word": "alarme",
        "phrase": "O objeto mais odiado nas primeiras horas da manhã."
      },
      {
        "name": "Calculadora",
        "sub": "tecnologia",
        "word": "dígitos",
        "phrase": "Resolve contas complicadas apertando botões numéricos."
      },
      {
        "name": "Martelo",
        "sub": "ferramentas",
        "word": "impacto",
        "phrase": "Bate na cabeça de metal até afundar na madeira."
      },
      {
        "name": "Tesoura",
        "sub": "ferramentas",
        "word": "eixo",
        "phrase": "Duas lâminas cruzadas que separam o que estava unido."
      },
      {
        "name": "Furadeira",
        "sub": "ferramentas",
        "word": "broca",
        "phrase": "Gira em alta velocidade abrindo furos na parede."
      },
      {
        "name": "Alicate",
        "sub": "ferramentas",
        "word": "pressão",
        "phrase": "Aperta, puxa e corta fios com força multiplicada."
      },
      {
        "name": "Faca",
        "sub": "ferramentas",
        "word": "gume",
        "phrase": "Desliza afiada dividindo peças sobre a tábua."
      },
      {
        "name": "Cadeado",
        "sub": "ferramentas",
        "word": "trava",
        "phrase": "Guarda segredos de metal que só a chave certa liberta."
      },
      {
        "name": "Lanterna",
        "sub": "ferramentas",
        "word": "feixe",
        "phrase": "Foco de luz portátil quando a energia acaba."
      },
      {
        "name": "Vela",
        "sub": "ferramentas",
        "word": "pavio",
        "phrase": "Queima a cera devagar emitindo uma chama dançante."
      },
      {
        "name": "Relógio",
        "sub": "pessoal",
        "word": "ponteiros",
        "phrase": "Gira em círculos lembrando que nada dura para sempre."
      },
      {
        "name": "Óculos",
        "sub": "pessoal",
        "word": "lentes",
        "phrase": "Apoiados no nariz para transformar o borrado em nitidez."
      },
      {
        "name": "Mochila",
        "sub": "pessoal",
        "word": "alças",
        "phrase": "Carregada nas costas cheia de cadernos e pertences."
      },
      {
        "name": "Carteira",
        "sub": "pessoal",
        "word": "compartimentos",
        "phrase": "Guarda documentos e notas dobradas no bolso de trás."
      },
      {
        "name": "Chave",
        "sub": "pessoal",
        "word": "dentes",
        "phrase": "Pequena lâmina de metal que dá acesso ao lar."
      },
      {
        "name": "Boné",
        "sub": "pessoal",
        "word": "aba",
        "phrase": "Faz sombra nos olhos enquanto protege a cabeça do sol."
      },
      {
        "name": "Tênis",
        "sub": "pessoal",
        "word": "cadarço",
        "phrase": "Amarrado nos pés para amortecer cada passo na rua."
      },
      {
        "name": "Guarda-chuva",
        "sub": "pessoal",
        "word": "varetas",
        "phrase": "Abre como uma cúpula quando as nuvens desabam."
      },
      {
        "name": "Mala",
        "sub": "pessoal",
        "word": "rodinhas",
        "phrase": "Desliza pelos saguões anunciando o início de uma viagem."
      },
      {
        "name": "Caneta",
        "sub": "pessoal",
        "word": "esfera",
        "phrase": "Deixa um rastro permanente de tinta sobre o papel."
      },
      {
        "name": "Sabonete",
        "sub": "pessoal",
        "word": "espuma",
        "phrase": "Escorrega nas mãos perfumando a água da limpeza."
      },
      {
        "name": "Escova de dentes",
        "sub": "pessoal",
        "word": "cerdas",
        "phrase": "Trabalha com espuma mentolada após as refeições."
      },
      {
        "name": "Fone Bluetooth",
        "sub": "tecnologia",
        "word": "estojo",
        "phrase": "Sem fios aparentes, descansa numa caixinha que recarrega sua bateria."
      },
      {
        "name": "Powerbank",
        "sub": "tecnologia",
        "word": "reserva",
        "phrase": "Salva aparelhos eletrônicos da bateria fraca quando não há tomada."
      },
      {
        "name": "Smartwatch",
        "sub": "tecnologia",
        "word": "pulso",
        "phrase": "Conta os passos e batimentos cardíacos diretamente no antebraço."
      },
      {
        "name": "Drone",
        "sub": "tecnologia",
        "word": "hélices",
        "phrase": "Voa pelos ares gravando imagens de ângulos que ninguém alcança."
      },
      {
        "name": "Carregador por Indução",
        "sub": "tecnologia",
        "word": "placa",
        "phrase": "Basta apoiar o aparelho por cima para a energia fluir sem plugue."
      },
      {
        "name": "Kindle / E-reader",
        "sub": "tecnologia",
        "word": "tinta",
        "phrase": "Guarda centenas de livros numa tela fosca que imita papel."
      },
      {
        "name": "Air Fryer",
        "sub": "casa",
        "word": "cesto",
        "phrase": "Prepara petiscos crocantes sem usar óleo através de ar quente circulante."
      },
      {
        "name": "Cafeteira Elétrica",
        "sub": "casa",
        "word": "filtro",
        "phrase": "Acorda a casa com aroma forte logo nas primeiras horas da manhã."
      },
      {
        "name": "Ventilador",
        "sub": "casa",
        "word": "vento",
        "phrase": "Gira para lá e para cá tentando amenizar o calor sufocante."
      },
      {
        "name": "Garrafa Térmica",
        "sub": "casa",
        "word": "vácuo",
        "phrase": "Mantém líquidos quentes ou frios por horas graças ao isolamento duplo."
      },
      {
        "name": "Ferro de Passar",
        "sub": "casa",
        "word": "vapor",
        "phrase": "Desliza quente sobre o tecido para eliminar amassados e vincos."
      },
      {
        "name": "Aspirador Robô",
        "sub": "casa",
        "word": "sensor",
        "phrase": "Percorre os cômodos sozinho esbarrando levemente nos móveis."
      },
      {
        "name": "Fita Métrica / Trena",
        "sub": "ferramentas",
        "word": "milímetro",
        "phrase": "Se estica em lâmina metálica e recolhe com um botão de mola."
      },
      {
        "name": "Chave Philips",
        "sub": "ferramentas",
        "word": "cruz",
        "phrase": "Sua ponta em formato de cruz aperta ou solta parafusos específicos."
      },
      {
        "name": "Nível de Bolha",
        "sub": "ferramentas",
        "word": "bolha",
        "phrase": "Usa líquido esverdeado para garantir que o quadro não fique torto."
      },
      {
        "name": "Lanterna Tática",
        "sub": "ferramentas",
        "word": "foco",
        "phrase": "Corta a escuridão total com um feixe potente de luz branca concentrada."
      },
      {
        "name": "Alicate de Pressão",
        "sub": "ferramentas",
        "word": "mordida",
        "phrase": "Prende com força travada sem que você precise continuar apertando."
      },
      {
        "name": "Ferro de Solda",
        "sub": "ferramentas",
        "word": "estanho",
        "phrase": "Aquece a ponto de derreter metal para unir fios e circuitos."
      },
      {
        "name": "Perfume",
        "sub": "pessoal",
        "word": "essência",
        "phrase": "Basta duas borrifadas no pescoço para marcar presença onde chegar."
      },
      {
        "name": "Relógio de Bolso",
        "sub": "pessoal",
        "word": "corrente",
        "phrase": "Item vintage guardado no colete e preso por elegante corrente metálica."
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
        "phrase": "Onde a terra encontra o mar salgado sob o sol quente."
      },
      {
        "name": "Montanha",
        "sub": "natureza",
        "word": "cume",
        "phrase": "Pico elevado que toca as nuvens com ar rarefeito."
      },
      {
        "name": "Floresta",
        "sub": "natureza",
        "word": "copa",
        "phrase": "Mata fechada com o som constante de folhas e animais."
      },
      {
        "name": "Cachoeira",
        "sub": "natureza",
        "word": "queda",
        "phrase": "Água doce caindo de grande altura entre pedras musgosas."
      },
      {
        "name": "Deserto",
        "sub": "natureza",
        "word": "duna",
        "phrase": "Imensidão dourada onde a água é o bem mais precioso."
      },
      {
        "name": "Ilha",
        "sub": "natureza",
        "word": "isolamento",
        "phrase": "Pedaço de terra cercado de água por todos os lados."
      },
      {
        "name": "Fazenda",
        "sub": "natureza",
        "word": "porteira",
        "phrase": "Criação de animais e cheiro de terra molhada no campo."
      },
      {
        "name": "Piscina",
        "sub": "natureza",
        "word": "azulejo",
        "phrase": "Tanque azul de água clorada onde as crianças se refrescam."
      },
      {
        "name": "Parque",
        "sub": "natureza",
        "word": "gramado",
        "phrase": "Árvores no meio da cidade para piqueniques e caminhadas."
      },
      {
        "name": "Escola",
        "sub": "cidade",
        "word": "sinal",
        "phrase": "Salas cheias de carteiras esperando o toque do recreio."
      },
      {
        "name": "Hospital",
        "sub": "cidade",
        "word": "triagem",
        "phrase": "Portas automáticas e corredores brancos em vigília contínua."
      },
      {
        "name": "Shopping",
        "sub": "cidade",
        "word": "vitrine",
        "phrase": "Corredores climatizados com escadas rolantes e praça de alimentação."
      },
      {
        "name": "Padaria",
        "sub": "cidade",
        "word": "fornada",
        "phrase": "O cheiro de pão fresco atrai os vizinhos logo cedo."
      },
      {
        "name": "Biblioteca",
        "sub": "cidade",
        "word": "silêncio",
        "phrase": "Milhares de páginas encadernadas em estantes silenciosas."
      },
      {
        "name": "Cinema",
        "sub": "cidade",
        "word": "projeção",
        "phrase": "Poltronas no escuro com o estalar de pipoca na frente da tela."
      },
      {
        "name": "Estádio",
        "sub": "cidade",
        "word": "arquibancada",
        "phrase": "Milhares de vozes cantando juntas com bandeiras ao vento."
      },
      {
        "name": "Aeroporto",
        "sub": "cidade",
        "word": "portão",
        "phrase": "Pistas longas de pouso e abraços de despedida no saguão."
      },
      {
        "name": "Rodoviária",
        "sub": "cidade",
        "word": "plataforma",
        "phrase": "Ônibus manobrando enquanto viajantes esperam a partida."
      },
      {
        "name": "Academia",
        "sub": "cidade",
        "word": "anilhas",
        "phrase": "Música animada e espelhos enquanto as pessoas puxam peso."
      },
      {
        "name": "Igreja",
        "sub": "cidade",
        "word": "altar",
        "phrase": "Bancos de madeira e sinos tocando em dias de celebração."
      },
      {
        "name": "Mercado",
        "sub": "cidade",
        "word": "carrinho",
        "phrase": "Prateleiras compridas cheias de produtos com códigos de barras."
      },
      {
        "name": "Restaurante",
        "sub": "cidade",
        "word": "cardápio",
        "phrase": "Mesas organizadas onde garçons trazem pratos preparados."
      },
      {
        "name": "Farmácia",
        "sub": "cidade",
        "word": "receita",
        "phrase": "Gavetas cheias de remédios sob luz branca constante."
      },
      {
        "name": "Oficina",
        "sub": "cidade",
        "word": "elevador",
        "phrase": "Cheiro de óleo e ferramentas com carros suspensos."
      },
      {
        "name": "Cemitério",
        "sub": "cidade",
        "word": "lápide",
        "phrase": "Jardins solenes com flores deixadas para quem partiu."
      },
      {
        "name": "Torre Eiffel",
        "sub": "turismo",
        "word": "ferro",
        "phrase": "A estrutura metálica iluminada mais famosa da França."
      },
      {
        "name": "Cristo Redentor",
        "sub": "turismo",
        "word": "corcovado",
        "phrase": "Braços abertos de pedra abençoando a baía da cidade."
      },
      {
        "name": "Coliseu",
        "sub": "turismo",
        "word": "arena",
        "phrase": "Antigos gladiadores duelavam sob os arcos de pedra em Roma."
      },
      {
        "name": "Pirâmide do Egito",
        "sub": "turismo",
        "word": "faraó",
        "phrase": "Blocos gigantescos erguidos no deserto há milênios."
      },
      {
        "name": "Disney",
        "sub": "turismo",
        "word": "orelhas",
        "phrase": "Fogos de artifício estourando atrás do castelo encantado."
      },
      {
        "name": "Aquário",
        "sub": "turismo",
        "word": "túnel",
        "phrase": "Vidros grossos onde peixes e tubarões nadam sobre as cabeças."
      },
      {
        "name": "Zoológico",
        "sub": "turismo",
        "word": "viveiro",
        "phrase": "Alambrados e recintos onde o público observa feras exóticas."
      },
      {
        "name": "Circo",
        "sub": "turismo",
        "word": "lona",
        "phrase": "Tenda listrada onde artistas equilibram o impossível no picadeiro."
      },
      {
        "name": "Museu",
        "sub": "turismo",
        "word": "acervo",
        "phrase": "Quadros antigos e fósseis protegidos por cordões de veludo."
      },
      {
        "name": "Teatro",
        "sub": "turismo",
        "word": "camarim",
        "phrase": "A cortina vermelha se abre para aplausos fervorosos."
      },
      {
        "name": "Lua",
        "sub": "misterio",
        "word": "crateras",
        "phrase": "O satélite prateado que dita as marés na escuridão do espaço."
      },
      {
        "name": "Vulcão",
        "sub": "misterio",
        "word": "magma",
        "phrase": "A montanha furiosa que expele rochas derretidas e fumaça."
      },
      {
        "name": "Caverna",
        "sub": "misterio",
        "word": "estalactite",
        "phrase": "Escuridão subterrânea com formações rochosas pingando no teto."
      },
      {
        "name": "Castelo",
        "sub": "misterio",
        "word": "ponte levadiça",
        "phrase": "Muralhas antigas com torres que protegiam os reis do passado."
      },
      {
        "name": "Cadeia",
        "sub": "misterio",
        "word": "grades",
        "phrase": "Chaves de ferro trancando corredores vigiados dia e noite."
      },
      {
        "name": "Deserto do Saara",
        "sub": "natureza",
        "word": "dunas",
        "phrase": "Mar infinito de areia dourada onde o vento redesenha as colinas."
      },
      {
        "name": "Floresta Amazônica",
        "sub": "natureza",
        "word": "biodiversidade",
        "phrase": "O maior bioma tropical do planeta cortado por rios caudalosos."
      },
      {
        "name": "Cataratas do Iguaçu",
        "sub": "natureza",
        "word": "garganta",
        "phrase": "Centenas de quedas d'água estrondosas na fronteira de países irmãos."
      },
      {
        "name": "Grand Canyon",
        "sub": "natureza",
        "word": "erosão",
        "phrase": "Profunda fenda esculpida pelo rio durante milhões de anos de história."
      },
      {
        "name": "Monte Everest",
        "sub": "natureza",
        "word": "altitude",
        "phrase": "O ponto mais alto da Terra coberto por neves perpétuas e ventos congelantes."
      },
      {
        "name": "Aurora Boreal",
        "sub": "natureza",
        "word": "polar",
        "phrase": "Cortinas verdes de luz que dançam nos céus gélidos do extremo norte."
      },
      {
        "name": "Times Square",
        "sub": "cidade",
        "word": "letreiros",
        "phrase": "Cruzamento movimentado que nunca dorme sob clarão de telões gigantescos."
      },
      {
        "name": "Avenida Paulista",
        "sub": "cidade",
        "word": "masp",
        "phrase": "O coração financeiro e cultural de São Paulo fechado aos domingos."
      },
      {
        "name": "Copacabana",
        "sub": "cidade",
        "word": "calçadão",
        "phrase": "Famosa pelas pedras portuguesas desenhando ondas à beira-mar."
      },
      {
        "name": "Favela da Rocinha",
        "sub": "cidade",
        "word": "morro",
        "phrase": "Labirinto pulsante de vielas e casas empilhadas na encosta carioca."
      },
      {
        "name": "Tokyo Shibuya",
        "sub": "cidade",
        "word": "cruzamento",
        "phrase": "Milhares de pedestres atravessam em todas as direções ao mesmo tempo."
      },
      {
        "name": "Veneza",
        "sub": "cidade",
        "word": "gôndola",
        "phrase": "Cidade sem carros onde as ruas são canais navegados a remo."
      },
      {
        "name": "Machu Picchu",
        "sub": "turismo",
        "word": "inca",
        "phrase": "Ruínas sagradas de pedra polida nas alturas da cordilheira dos Andes."
      },
      {
        "name": "Muralha da China",
        "sub": "turismo",
        "word": "tijolos",
        "phrase": "Serpenteia por milhares de quilômetros sobre montanhas históricas."
      },
      {
        "name": "Taj Mahal",
        "sub": "turismo",
        "word": "mármore",
        "phrase": "Monumento eterno de mármore branco construído em nome de um grande amor."
      },
      {
        "name": "Pirâmides de Gizé",
        "sub": "turismo",
        "word": "faraó",
        "phrase": "Tumbas milenares no deserto alinhadas misteriosamente com os astros."
      },
      {
        "name": "Coliseu Romano",
        "sub": "turismo",
        "word": "gladiador",
        "phrase": "Arena circular de pedra onde combates épicos divertiam multidões imperiais."
      },
      {
        "name": "Triângulo das Bermudas",
        "sub": "misterio",
        "word": "bússola",
        "phrase": "Área oceânica famosa por relatos de sumiço de navios e aviões."
      },
      {
        "name": "Área 51",
        "sub": "misterio",
        "word": "hangar",
        "phrase": "Instalação militar secreta cercada por teorias de discos voadores."
      },
      {
        "name": "Chernobyl",
        "sub": "misterio",
        "word": "radiação",
        "phrase": "Cidade fantasma evacuada às pressas após o pior acidente nuclear."
      },
      {
        "name": "Stonehenge",
        "sub": "misterio",
        "word": "megalito",
        "phrase": "Monólitos circulares dispostos em campos verdes sem explicação exata."
      },
      {
        "name": "Fossa das Marianas",
        "sub": "misterio",
        "word": "abissal",
        "phrase": "A trincheira mais profunda do oceano onde a luz do sol nunca alcança."
      },
      {
        "name": "Atlântida",
        "sub": "misterio",
        "word": "submersa",
        "phrase": "Civilização mítica avançada que teria desaparecido para sempre no mar."
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
        "phrase": "O rugido imponente que ecoa pelas savanas africanas."
      },
      {
        "name": "Elefante",
        "sub": "selvagens",
        "word": "marfim",
        "phrase": "Passos pesados e uma memória que nunca esquece os caminhos."
      },
      {
        "name": "Girafa",
        "sub": "selvagens",
        "word": "acácia",
        "phrase": "Alcança as folhas mais altas com passos desengonçados."
      },
      {
        "name": "Tigre",
        "sub": "selvagens",
        "word": "listras",
        "phrase": "O maior dos felinos caçando camuflado na vegetação asiática."
      },
      {
        "name": "Onça",
        "sub": "selvagens",
        "word": "manchas",
        "phrase": "Mordida potente nas margens dos rios do pantanal."
      },
      {
        "name": "Urso",
        "sub": "selvagens",
        "word": "hibernação",
        "phrase": "Pesa centenas de quilos e dorme durante os meses mais frios."
      },
      {
        "name": "Lobo",
        "sub": "selvagens",
        "word": "alcateia",
        "phrase": "Uiva em sintonia sob a luz da lua cheia com o bando."
      },
      {
        "name": "Raposa",
        "sub": "selvagens",
        "word": "astúcia",
        "phrase": "Cauda felpuda e passos silenciosos na beira dos bosques."
      },
      {
        "name": "Macaco",
        "sub": "selvagens",
        "word": "galho",
        "phrase": "Usa a cauda e as mãos para saltar entre as copas com agilidade."
      },
      {
        "name": "Gorila",
        "sub": "selvagens",
        "word": "peito",
        "phrase": "Bate com força no próprio corpo para demonstrar liderança."
      },
      {
        "name": "Panda",
        "sub": "selvagens",
        "word": "bambu",
        "phrase": "Pelagem preta e branca mastigando caules o dia inteiro."
      },
      {
        "name": "Canguru",
        "sub": "selvagens",
        "word": "marsúpio",
        "phrase": "Grandes saltos com o filhote espiando pela bolsa da barriga."
      },
      {
        "name": "Hipopótamo",
        "sub": "selvagens",
        "word": "lagoa",
        "phrase": "Passa o dia submerso mas corre surpreendentemente rápido em terra."
      },
      {
        "name": "Rinoceronte",
        "sub": "selvagens",
        "word": "chifre",
        "phrase": "Pele blindada como couraça com uma lâmina curva no focinho."
      },
      {
        "name": "Zebra",
        "sub": "selvagens",
        "word": "camuflagem",
        "phrase": "Listras contrastantes que confundem os predadores na corrida."
      },
      {
        "name": "Camelo",
        "sub": "selvagens",
        "word": "corcova",
        "phrase": "Resiste a semanas sem água sob o sol inclemente das dunas."
      },
      {
        "name": "Capivara",
        "sub": "selvagens",
        "word": "tranquilidade",
        "phrase": "O maior roedor do mundo descansando sereno na beira do lago."
      },
      {
        "name": "Tamanduá",
        "sub": "selvagens",
        "word": "formigueiro",
        "phrase": "Língua longa e pegajosa para capturar insetos nos túneis."
      },
      {
        "name": "Preguiça",
        "sub": "selvagens",
        "word": "lentidão",
        "phrase": "Move-se tão devagar que musgo chega a crescer em seus pelos."
      },
      {
        "name": "Cachorro",
        "sub": "domesticos",
        "word": "fidelidade",
        "phrase": "Abana o rabo e corre para a porta assim que ouve a chave."
      },
      {
        "name": "Gato",
        "sub": "domesticos",
        "word": "ronronar",
        "phrase": "Cai sempre de pé com passos macios e olhar independente."
      },
      {
        "name": "Cavalo",
        "sub": "domesticos",
        "word": "ferradura",
        "phrase": "Crina solta ao vento galopando pelas pastagens abertas."
      },
      {
        "name": "Vaca",
        "sub": "domesticos",
        "word": "ruminar",
        "phrase": "Muge no pasto enquanto fornece o leite da manhã."
      },
      {
        "name": "Porco",
        "sub": "domesticos",
        "word": "lama",
        "phrase": "Focinho achatado que adora se refrescar na terra molhada."
      },
      {
        "name": "Coelho",
        "sub": "domesticos",
        "word": "cenoura",
        "phrase": "Orelhas compridas em pé farejando perigo a qualquer salto."
      },
      {
        "name": "Galinha",
        "sub": "domesticos",
        "word": "poleiro",
        "phrase": "Cacareja ao amanhecer botando ovos no ninho de palha."
      },
      {
        "name": "Pato",
        "sub": "domesticos",
        "word": "membrana",
        "phrase": "Bico chato que nada na lagoa e voa em formação no céu."
      },
      {
        "name": "Águia",
        "sub": "aves",
        "word": "altitude",
        "phrase": "Visão aguçada mergulhando em queda livre para capturar a presa."
      },
      {
        "name": "Coruja",
        "sub": "aves",
        "word": "rotação",
        "phrase": "Gira o pescoço quase por completo caçando na calada da noite."
      },
      {
        "name": "Pinguim",
        "sub": "aves",
        "word": "fraque",
        "phrase": "Ave elegante que não sabe voar no ar, mas nada como peixe no gelo."
      },
      {
        "name": "Tucano",
        "sub": "aves",
        "word": "bico",
        "phrase": "Cores vivas equilibradas no galho com uma enorme ferramenta leve."
      },
      {
        "name": "Papagaio",
        "sub": "aves",
        "word": "repetição",
        "phrase": "Penas verdes que imitam a voz de quem passa pela varanda."
      },
      {
        "name": "Flamingo",
        "sub": "aves",
        "word": "rosa",
        "phrase": "Equilibra-se em uma perna fina só na beira das águas rasas."
      },
      {
        "name": "Cisne",
        "sub": "aves",
        "word": "pescoço",
        "phrase": "Desliza pelo lago com elegância impecável e penas alvas."
      },
      {
        "name": "Pavão",
        "sub": "aves",
        "word": "leque",
        "phrase": "Abre uma cauda monumental cheia de olhos coloridos para cortejar."
      },
      {
        "name": "Tubarão",
        "sub": "aquaticos",
        "word": "barbatana",
        "phrase": "Triângulo escuro cortando a superfície do mar sem parar de nadar."
      },
      {
        "name": "Golfinho",
        "sub": "aquaticos",
        "word": "sonar",
        "phrase": "Salta em arcos sobre as ondas emitindo assobios inteligentes."
      },
      {
        "name": "Baleia",
        "sub": "aquaticos",
        "word": "esguicho",
        "phrase": "O gigante dos oceanos que sopra água para o alto ao respirar."
      },
      {
        "name": "Polvo",
        "sub": "aquaticos",
        "word": "ventosas",
        "phrase": "Oito braços inteligentes e uma nuvem escura para despistar."
      },
      {
        "name": "Tartaruga",
        "sub": "aquaticos",
        "word": "casco",
        "phrase": "Leva a própria casa nas costas com passos calmos pela areia."
      },
      {
        "name": "Jacaré",
        "sub": "aquaticos",
        "word": "pântano",
        "phrase": "Apenas dois olhos à espreita acima da linha d'água turva."
      },
      {
        "name": "Cobra",
        "sub": "aquaticos",
        "word": "guizo",
        "phrase": "Rasteja sem membros com uma língua fina sentindo o ar."
      },
      {
        "name": "Sapo",
        "sub": "aquaticos",
        "word": "brejo",
        "phrase": "Coaxa na beira da lagoa lançando a língua contra mosquitos."
      },
      {
        "name": "Aranha",
        "sub": "aquaticos",
        "word": "fio",
        "phrase": "Oito pernas arquitetando uma armadilha geométrica no canto da parede."
      },
      {
        "name": "Escorpião",
        "sub": "aquaticos",
        "word": "ferrão curvo",
        "phrase": "Duas pinças na frente e uma cauda arqueada pronta para picar."
      },
      {
        "name": "Caranguejo",
        "sub": "aquaticos",
        "word": "lateral",
        "phrase": "Anda de lado pela areia da praia recolhendo pequenos bocados."
      },
      {
        "name": "Abelha",
        "sub": "aquaticos",
        "word": "colmeia",
        "phrase": "Bate as asas frenética produzindo doce dourado na colmeia."
      },
      {
        "name": "Formiga",
        "sub": "aquaticos",
        "word": "fila",
        "phrase": "Carrega folhas muito mais pesadas que seu próprio corpo."
      },
      {
        "name": "Tamanduá-Bandeira",
        "sub": "selvagens",
        "word": "formigueiro",
        "phrase": "Focinho comprido e cauda felpuda especializada em insetos sociais."
      },
      {
        "name": "Lobo-Guará",
        "sub": "selvagens",
        "word": "cerrado",
        "phrase": "Pernas longas e pelagem avermelhada estampada na cédula de duzentos."
      },
      {
        "name": "Urso Panda",
        "sub": "selvagens",
        "word": "bambu",
        "phrase": "Mamífero preto e branco que passa o dia mastigando caules verdes."
      },
      {
        "name": "Camaleão",
        "sub": "selvagens",
        "word": "camuflagem",
        "phrase": "Muda de tom de acordo com o ambiente e move os olhos de forma independente."
      },
      {
        "name": "Hamster",
        "sub": "domesticos",
        "word": "bochecha",
        "phrase": "Guarda comida nas bochechas e corre durante a noite na rodinha da gaiola."
      },
      {
        "name": "Ovelha",
        "sub": "domesticos",
        "word": "lã",
        "phrase": "Seu pelo fofo e macio é tosquiado para aquecer os invernos rigorosos."
      },
      {
        "name": "Galo",
        "sub": "domesticos",
        "word": "crista",
        "phrase": "Canta bem cedo anunciando o nascer do sol no poleiro da fazenda."
      },
      {
        "name": "Arara-Azul",
        "sub": "aves",
        "word": "pantanal",
        "phrase": "Ave de bico forte e plumagem exuberante símbolo da fauna brasileira."
      },
      {
        "name": "Beija-flor",
        "sub": "aves",
        "word": "néctar",
        "phrase": "Bate as asas tão depressa que parece flutuar imóvel diante da flor."
      },
      {
        "name": "Pica-Pau",
        "sub": "aves",
        "word": "tronco",
        "phrase": "Tamborila velozmente a casca das árvores à procura de larvas escondidas."
      },
      {
        "name": "Baleia Azul",
        "sub": "aquaticos",
        "word": "gigante",
        "phrase": "O maior animal que já existiu emitindo cantos pelas profundezas marinhas."
      },
      {
        "name": "Cavalo-Marinho",
        "sub": "aquaticos",
        "word": "macho",
        "phrase": "O pai é quem carrega os ovos na bolsa até o momento do nascimento."
      },
      {
        "name": "Água-Viva",
        "sub": "aquaticos",
        "word": "queimadura",
        "phrase": "Corpo transparente e gelatinoso que flutua causando ardência ao toque."
      },
      {
        "name": "Tartaruga Marinha",
        "sub": "aquaticos",
        "word": "desova",
        "phrase": "Cruza oceanos inteiros e volta exatamente à praia em que nasceu."
      },
      {
        "name": "Arraia",
        "sub": "aquaticos",
        "word": "ferrão",
        "phrase": "Desliza pelo fundo arenoso parecendo uma grande asa subaquática."
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
        "phrase": "Jaleco branco ouvindo o ritmo do coração dos pacientes."
      },
      {
        "name": "Enfermeiro",
        "sub": "saude",
        "word": "leito",
        "phrase": "Aplica medicações e cuida de perto da recuperação no hospital."
      },
      {
        "name": "Dentista",
        "sub": "saude",
        "word": "broca",
        "phrase": "Pede para abrir a boca enquanto ajeita a luz cirúrgica no rosto."
      },
      {
        "name": "Veterinário",
        "sub": "saude",
        "word": "focinho",
        "phrase": "Examina latidos e miados para curar quem não sabe falar."
      },
      {
        "name": "Cirurgião",
        "sub": "saude",
        "word": "bisturi",
        "phrase": "Mãos firmes na sala de operação sob luzes concentradas."
      },
      {
        "name": "Psicólogo",
        "sub": "saude",
        "word": "divã",
        "phrase": "Escuta atenta para desembaraçar os nós da mente humana."
      },
      {
        "name": "Personal trainer",
        "sub": "saude",
        "word": "repetições",
        "phrase": "Conta séries de exercícios cobrando postura e dedicação."
      },
      {
        "name": "Professor",
        "sub": "ciencias",
        "word": "lousa",
        "phrase": "Explica a matéria e cobra atenção antes da prova bimestral."
      },
      {
        "name": "Cientista",
        "sub": "ciencias",
        "word": "tubos de ensaio",
        "phrase": "Formula hipóteses e analisa reações no laboratório."
      },
      {
        "name": "Astrônomo",
        "sub": "ciencias",
        "word": "telescópio",
        "phrase": "Aponta lentes para o céu mapeando galáxias e corpos celestes."
      },
      {
        "name": "Arqueólogo",
        "sub": "ciencias",
        "word": "pincel",
        "phrase": "Remove poeira com delicadeza de ossadas e ruínas soterradas."
      },
      {
        "name": "Engenheiro",
        "sub": "ciencias",
        "word": "cálculos",
        "phrase": "Planeja estruturas para garantir que pontes e prédios fiquem em pé."
      },
      {
        "name": "Arquiteto",
        "sub": "ciencias",
        "word": "planta",
        "phrase": "Desenha a distribuição dos cômodos e fachadas harmoniosas."
      },
      {
        "name": "Programador",
        "sub": "ciencias",
        "word": "código",
        "phrase": "Digita comandos no teclado transformando lógica em telas interativas."
      },
      {
        "name": "Advogado",
        "sub": "ciencias",
        "word": "processo",
        "phrase": "Defende os interesses do cliente com base nas leis vigentes."
      },
      {
        "name": "Juiz",
        "sub": "ciencias",
        "word": "martelo",
        "phrase": "Analisa argumentos e bate a madeira decretando a sentença."
      },
      {
        "name": "Ator",
        "sub": "artes",
        "word": "roteiro",
        "phrase": "Assume vidas alheias na frente das câmeras ou no palco."
      },
      {
        "name": "Cantor",
        "sub": "artes",
        "word": "palco",
        "phrase": "Solta a voz afinada em frente a milhares de microfones e luzes."
      },
      {
        "name": "Músico",
        "sub": "artes",
        "word": "partitura",
        "phrase": "Faz vibrar cordas e teclas criando harmonias emocionantes."
      },
      {
        "name": "Pintor",
        "sub": "artes",
        "word": "cavalete",
        "phrase": "Mistura pigmentos na paleta dando vida a telas em branco."
      },
      {
        "name": "Escritor",
        "sub": "artes",
        "word": "capítulo",
        "phrase": "Cria mundos inteiros usando apenas vinte e seis letras."
      },
      {
        "name": "Mágico",
        "sub": "artes",
        "word": "cartola",
        "phrase": "Faz objetos desaparecerem diante dos olhos atentos da plateia."
      },
      {
        "name": "Palhaço",
        "sub": "artes",
        "word": "nariz vermelho",
        "phrase": "Tropeça de propósito e faz travessuras para arrancar gargalhadas."
      },
      {
        "name": "Dublador",
        "sub": "artes",
        "word": "sincronia",
        "phrase": "Empresta o sotaque e o tom para a boca dos personagens estrangeiros."
      },
      {
        "name": "Bailarino",
        "sub": "artes",
        "word": "sapatilha",
        "phrase": "Gira na ponta dos pés com leveza desafiando a gravidade."
      },
      {
        "name": "Fotógrafo",
        "sub": "artes",
        "word": "enquadramento",
        "phrase": "Ajusta o foco procurando a luz ideal antes do clique."
      },
      {
        "name": "Jornalista",
        "sub": "artes",
        "word": "pauta",
        "phrase": "Investiga acontecimentos para relatar os fatos à população."
      },
      {
        "name": "Bombeiro",
        "sub": "servicos",
        "word": "mangueira",
        "phrase": "Enfrenta chamas altas para resgatar vidas em perigo."
      },
      {
        "name": "Policial",
        "sub": "servicos",
        "word": "distintivo",
        "phrase": "Patrulha as ruas mantendo a ordem com farda e viatura."
      },
      {
        "name": "Piloto",
        "sub": "servicos",
        "word": "manche",
        "phrase": "Comanda a cabine guiando centenas de passageiros pelo céu."
      },
      {
        "name": "Astronauta",
        "sub": "servicos",
        "word": "gravidade zero",
        "phrase": "Veste traje pressurizado fora da atmosfera terrestre."
      },
      {
        "name": "Cozinheiro",
        "sub": "servicos",
        "word": "avental",
        "phrase": "Controla o fogo e os temperos servindo sabores impecáveis."
      },
      {
        "name": "Padeiro",
        "sub": "servicos",
        "word": "forno aceso",
        "phrase": "Sova a massa na madrugada para o café da manhã dos outros."
      },
      {
        "name": "Barista",
        "sub": "servicos",
        "word": "vapor",
        "phrase": "Extrai grãos especiais desenhando com espuma sobre a xícara."
      },
      {
        "name": "Garçom",
        "sub": "servicos",
        "word": "bandeja",
        "phrase": "Equilibra taças e anota pedidos circulando entre as mesas."
      },
      {
        "name": "Motorista",
        "sub": "servicos",
        "word": "volante",
        "phrase": "Horas no trânsito transportando pessoas pelas rotas da cidade."
      },
      {
        "name": "Pedreiro",
        "sub": "servicos",
        "word": "tijolos",
        "phrase": "Ergue paredes firmes assentando massa com colher de ferro."
      },
      {
        "name": "Eletricista",
        "sub": "servicos",
        "word": "voltagem",
        "phrase": "Manuseia fios desencapados evitando curtos perigosos."
      },
      {
        "name": "Encanador",
        "sub": "servicos",
        "word": "vedação",
        "phrase": "Aperta conexões para estancar goteiras e vazamentos na tubulação."
      },
      {
        "name": "Cabeleireiro",
        "sub": "servicos",
        "word": "navalha",
        "phrase": "Modela cortes e fios em frente a um grande espelho iluminado."
      },
      {
        "name": "Carteiro",
        "sub": "servicos",
        "word": "encomendas",
        "phrase": "Bate palmas no portão entregando pacotes de porta em porta."
      },
      {
        "name": "Vendedor",
        "sub": "servicos",
        "word": "comissão",
        "phrase": "Apresenta produtos buscando convencer o cliente a fechar negócio."
      },
      {
        "name": "Faxineiro",
        "sub": "servicos",
        "word": "balde",
        "phrase": "Deixa o piso brilhando e os ambientes impecavelmente limpos."
      },
      {
        "name": "Jardineiro",
        "sub": "servicos",
        "word": "poda",
        "phrase": "Apara gramados e cuida da terra para as flores desabrocharem."
      },
      {
        "name": "Pescador",
        "sub": "servicos",
        "word": "anzol",
        "phrase": "Espera pacientemente sobre as águas puxar a linha na hora certa."
      },
      {
        "name": "Soldado",
        "sub": "servicos",
        "word": "marcha",
        "phrase": "Disciplina rígida e farda camuflada em defesa do território."
      },
      {
        "name": "Fisioterapeuta",
        "sub": "saude",
        "word": "reabilitação",
        "phrase": "Ajuda músculos e articulações a recuperarem movimentos perdidos."
      },
      {
        "name": "Nutricionista",
        "sub": "saude",
        "word": "dieta",
        "phrase": "Equilibra nutrientes e calorias para garantir energia e saúde plena."
      },
      {
        "name": "Farmacêutico",
        "sub": "saude",
        "word": "fórmula",
        "phrase": "Manipula compostos químicos e garante a dosagem segura do remédio."
      },
      {
        "name": "Meteorologista",
        "sub": "ciencias",
        "word": "previsão",
        "phrase": "Analisa imagens de satélite e frentes frias antes que a chuva caia."
      },
      {
        "name": "Biólogo Marinho",
        "sub": "ciencias",
        "word": "recife",
        "phrase": "Mergulha em águas profundas estudando corais e espécies desconhecidas."
      },
      {
        "name": "Engenheiro Aeroespacial",
        "sub": "ciencias",
        "word": "órbita",
        "phrase": "Projeta foguetes e sondas capazes de vencer a barreira da atmosfera."
      },
      {
        "name": "Estilista",
        "sub": "artes",
        "word": "passarela",
        "phrase": "Desenha tendências de roupas que vão desfilar nas capitais da moda."
      },
      {
        "name": "Escultor",
        "sub": "artes",
        "word": "cinzel",
        "phrase": "Enxerga a forma oculta dentro de um bloco bruto de mármore ou argila."
      },
      {
        "name": "Diretor de Cinema",
        "sub": "artes",
        "word": "claquete",
        "phrase": "Coordena câmeras, atores e iluminação antes de gritar a palavra 'ação'."
      },
      {
        "name": "Tatuador",
        "sub": "artes",
        "word": "agulha",
        "phrase": "Grava ilustrações e memórias permanentes na derme de quem confia."
      },
      {
        "name": "Barbeiro",
        "sub": "servicos",
        "word": "navalha",
        "phrase": "Corta cabelos e apara barbas com toalha quente e navalhete afiada."
      },
      {
        "name": "Carpinteiro",
        "sub": "servicos",
        "word": "serrote",
        "phrase": "Transforma tábuas brutas de madeira em móveis sob medida."
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
        "phrase": "Um guerreiro furioso que desafiou o panteão dos deuses antigos."
      },
      {
        "name": "The Legend of Zelda",
        "sub": "rpg",
        "word": "espada mestre",
        "phrase": "O jovem de túnica verde que explora templos para conter o mal."
      },
      {
        "name": "GTA V",
        "sub": "rpg",
        "word": "estrelas",
        "phrase": "Vida criminosa e fuga da polícia pelas ruas da cidade de mentira."
      },
      {
        "name": "The Witcher 3",
        "sub": "rpg",
        "word": "mutação",
        "phrase": "Duas espadas nas costas enquanto caça monstros por algumas moedas."
      },
      {
        "name": "Elden Ring",
        "sub": "rpg",
        "word": "graça",
        "phrase": "Cair incontáveis vezes diante de chefes colossais nas terras esquecidas."
      },
      {
        "name": "The Last of Us",
        "sub": "rpg",
        "word": "esporo",
        "phrase": "Uma travessia perigosa por cidades tomadas pela vegetação e infectados."
      },
      {
        "name": "Red Dead Redemption 2",
        "sub": "rpg",
        "word": "cavalo",
        "phrase": "A era dos fora da lei chegando ao fim no velho oeste empoeirado."
      },
      {
        "name": "Cyberpunk 2077",
        "sub": "rpg",
        "word": "implantes",
        "phrase": "Luzes de neon e chips cerebrais numa metrópole futurista decadente."
      },
      {
        "name": "Resident Evil",
        "sub": "rpg",
        "word": "erva",
        "phrase": "Pouca munição nos corredores escuros tomados por experimentos biológicos."
      },
      {
        "name": "Dark Souls",
        "sub": "rpg",
        "word": "fogueira",
        "phrase": "Aprender com a própria morte rolando no momento exato do ataque."
      },
      {
        "name": "Counter-Strike",
        "sub": "tiro",
        "word": "defuse",
        "phrase": "Segundos tensos no cronômetro para evitar que o explosivo seja detonado."
      },
      {
        "name": "Valorant",
        "sub": "tiro",
        "word": "spike",
        "phrase": "Tiros milimétricos combinados com poderes sobrenaturais de agentes."
      },
      {
        "name": "Free Fire",
        "sub": "tiro",
        "word": "capa",
        "phrase": "Disputa frenética no celular buscando o último tiro certeiro na cabeça."
      },
      {
        "name": "Fortnite",
        "sub": "tiro",
        "word": "ônibus",
        "phrase": "Cair numa ilha, erguer paredes num instante e sobreviver até o final."
      },
      {
        "name": "League of Legends",
        "sub": "tiro",
        "word": "nexus",
        "phrase": "Três rotas defendidas por torres até a destruição da base inimiga."
      },
      {
        "name": "Call of Duty",
        "sub": "tiro",
        "word": "recarregar",
        "phrase": "Soldados em primeira pessoa cruzando mapas de combate tático."
      },
      {
        "name": "Overwatch",
        "sub": "tiro",
        "word": "carga",
        "phrase": "Equipes de heróis coloridos escoltando veículos até o objetivo."
      },
      {
        "name": "Brawl Stars",
        "sub": "tiro",
        "word": "gemas",
        "phrase": "Três contra três em partidas rápidas coletando cristais no centro."
      },
      {
        "name": "Minecraft",
        "sub": "retro",
        "word": "cubo",
        "phrase": "Um mundo infinito onde tudo é construído e minerado bloco a bloco."
      },
      {
        "name": "Super Mario Bros",
        "sub": "retro",
        "word": "cogumelo",
        "phrase": "Pular na cabeça dos inimigos para resgatar quem sumiu do castelo."
      },
      {
        "name": "Sonic the Hedgehog",
        "sub": "retro",
        "word": "argolas",
        "phrase": "Um borrão azul correndo em espirais contra o cientista barrigudo."
      },
      {
        "name": "Tetris",
        "sub": "retro",
        "word": "encaixe",
        "phrase": "Linhas que somem quando blocos de formas variadas se completam."
      },
      {
        "name": "Pac-Man",
        "sub": "retro",
        "word": "labirinto",
        "phrase": "Fugir de fantasmas coloridos enquanto devora pastilhas nos cantos."
      },
      {
        "name": "Among Us",
        "sub": "retro",
        "word": "duto",
        "phrase": "Alguém finge consertar a fiação enquanto apaga as luzes da nave."
      },
      {
        "name": "Roblox",
        "sub": "retro",
        "word": "experiências",
        "phrase": "Plataforma livre onde os próprios jogadores criam suas regras e mundos."
      },
      {
        "name": "Fall Guys",
        "sub": "retro",
        "word": "obstáculos",
        "phrase": "Dezenas de jujubas tropeçando juntas em esteiras e portas falsas."
      },
      {
        "name": "Pokémon",
        "sub": "retro",
        "word": "esfera",
        "phrase": "Colecionar criaturas fantásticas e colocá-las para batalhar por medalhas."
      },
      {
        "name": "FIFA / EA FC",
        "sub": "esporteluta",
        "word": "carrinho",
        "phrase": "Disputa virtual nos gramados com direito a reclamação de impedimento."
      },
      {
        "name": "Mortal Kombat",
        "sub": "esporteluta",
        "word": "finalização",
        "phrase": "Golpes brutais que encerram a luta com o aviso de concluir o adversário."
      },
      {
        "name": "Street Fighter",
        "sub": "esporteluta",
        "word": "hadouken",
        "phrase": "Faixa branca na testa disparando bolas de energia no torneio mundial."
      },
      {
        "name": "Rocket League",
        "sub": "esporteluta",
        "word": "turbo",
        "phrase": "Carros voadores acertando uma bola gigante direto no gol."
      },
      {
        "name": "Skyrim",
        "sub": "rpg",
        "word": "dragão",
        "phrase": "Um grito na língua ancestral derruba criaturas dos céus nórdicos."
      },
      {
        "name": "World of Warcraft",
        "sub": "rpg",
        "word": "horda",
        "phrase": "Aliança e Horda duelando eternamente pelo controle de Azeroth."
      },
      {
        "name": "Call of Duty: Warzone",
        "sub": "tiro",
        "word": "gulag",
        "phrase": "Se cair na batalha, terá uma chance de retorno vencendo o duelo no poço."
      },
      {
        "name": "Apex Legends",
        "sub": "tiro",
        "word": "tirolesa",
        "phrase": "Lendas com habilidades táticas disputando o título de campeão."
      },
      {
        "name": "Rainbow Six Siege",
        "sub": "tiro",
        "word": "reforço",
        "phrase": "Paredes destruíveis, drones e invasões milimetricamente planejadas."
      },
      {
        "name": "Left 4 Dead",
        "sub": "tiro",
        "word": "horda",
        "phrase": "Quatro sobreviventes correndo para o abrigo contra infectados furiosos."
      },
      {
        "name": "Donkey Kong Country",
        "sub": "retro",
        "word": "banana",
        "phrase": "Primatas rolando em barris para recuperar o tesouro roubado por répteis."
      },
      {
        "name": "Mega Man",
        "sub": "retro",
        "word": "canhão",
        "phrase": "Um androide azul que absorve os poderes dos chefes que derrota."
      },
      {
        "name": "Castlevania",
        "sub": "retro",
        "word": "chicote",
        "phrase": "Um caçador com chicote sagrado invadindo a fortaleza do vampiro supremo."
      },
      {
        "name": "Crash Bandicoot",
        "sub": "retro",
        "word": "máscara",
        "phrase": "Gira como um furacão quebrando caixas de madeira com ajuda de uma máscara."
      },
      {
        "name": "Tekken",
        "sub": "esporteluta",
        "word": "vulcão",
        "phrase": "Uma dinastia familiar que atira parentes da beira de penhascos."
      },
      {
        "name": "Super Smash Bros",
        "sub": "esporteluta",
        "word": "porcentagem",
        "phrase": "Quanto mais dano acumular, mais fácil será arremessar o oponente para fora."
      },
      {
        "name": "EA FC / FIFA",
        "sub": "esporteluta",
        "word": "pacote",
        "phrase": "Disputa acirrada de pênaltis e cartas de atletas em estádios lotados."
      },
      {
        "name": "Clash Royale",
        "sub": "esporteluta",
        "word": "torres",
        "phrase": "Duelo em tempo real com três coroas em jogo e cartas de elixir."
      },
      {
        "name": "Final Fantasy VII",
        "sub": "rpg",
        "word": "meteoro",
        "phrase": "Um mercenário de espada gigante lutando contra uma corporação de energia."
      },
      {
        "name": "Genshin Impact",
        "sub": "rpg",
        "word": "visão",
        "phrase": "Viajante explorando sete nações elementais acompanhado de uma fada flutuante."
      },
      {
        "name": "Pokémon Red / Blue",
        "sub": "rpg",
        "word": "inicial",
        "phrase": "Escolha entre planta, fogo ou água antes de pegar a estrada de Kanto."
      },
      {
        "name": "Chrono Trigger",
        "sub": "rpg",
        "word": "época",
        "phrase": "Viajantes no tempo consertando eras passadas para impedir o cataclismo."
      },
      {
        "name": "Doom",
        "sub": "tiro",
        "word": "serra",
        "phrase": "Um fuzileiro solitário estraçalhando demônios em Marte ao som de heavy metal."
      },
      {
        "name": "Half-Life",
        "sub": "tiro",
        "word": "pé-de-cabra",
        "phrase": "Um físico de óculos sobrevivendo a uma invasão alienígena no laboratório."
      },
      {
        "name": "Team Fortress 2",
        "sub": "tiro",
        "word": "chapéu",
        "phrase": "Nove classes excêntricas disputando pontos de controle com muito humor."
      },
      {
        "name": "Bioshock",
        "sub": "tiro",
        "word": "submarino",
        "phrase": "Uma distopia subaquática em ruínas regida por modificações genéticas."
      },
      {
        "name": "Street of Rage",
        "sub": "retro",
        "word": "frango",
        "phrase": "Policiais justiceiros limpando as ruas na base de socos e chutes."
      },
      {
        "name": "Top Gear",
        "sub": "retro",
        "word": "nitro",
        "phrase": "Carros esportivos acelerando em pistas com trilha sonora inesquecível."
      },
      {
        "name": "Bomberman",
        "sub": "retro",
        "word": "pavio",
        "phrase": "Encurrala os adversários em grades de pedra com artefatos explosivos."
      },
      {
        "name": "Tony Hawk's Pro Skater",
        "sub": "esporteluta",
        "word": "manual",
        "phrase": "Combina manobras aéreas em pistas de skate ao som de punk rock."
      },
      {
        "name": "Mortal Kombat 11",
        "sub": "esporteluta",
        "word": "fatalidade",
        "phrase": "Golpes brutais com ossos se quebrando e finalizações impiedosas."
      },
      {
        "name": "Guilty Gear",
        "sub": "esporteluta",
        "word": "heavy metal",
        "phrase": "Luta 2D frenética em visual de anime estilizado com guitarras distorcidas."
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
        "phrase": "Um garoto comum descobre que seu nome é lenda num colégio mágico."
      },
      {
        "name": "O Senhor dos Anéis",
        "sub": "ficcao",
        "word": "fardo",
        "phrase": "Uma longa caminhada para destruir a joia forjada no fogo vulcânico."
      },
      {
        "name": "Star Wars",
        "sub": "ficcao",
        "word": "sabres",
        "phrase": "O equilíbrio místico entre a luz e as sombras em galáxias distantes."
      },
      {
        "name": "Matrix",
        "sub": "ficcao",
        "word": "código",
        "phrase": "Perceber que o mundo ao seu redor não passa de linhas verdes simuladas."
      },
      {
        "name": "Vingadores: Ultimato",
        "sub": "ficcao",
        "word": "estalo",
        "phrase": "Uma viagem arriscada no tempo para desfazer o desaparecimento de metade da vida."
      },
      {
        "name": "Stranger Things",
        "sub": "ficcao",
        "word": "invertido",
        "phrase": "Bicicletas nas ruas e luzes piscando alertando sobre outra dimensão."
      },
      {
        "name": "Game of Thrones",
        "sub": "ficcao",
        "word": "trono",
        "phrase": "Disputas sangrentas entre famílias nobres enquanto o frio se aproxima."
      },
      {
        "name": "Jurassic Park",
        "sub": "ficcao",
        "word": "âmbar",
        "phrase": "A ciência recriou gigantes extintos mas esqueceu de controlar as cercas."
      },
      {
        "name": "Interestelar",
        "sub": "ficcao",
        "word": "buraco negro",
        "phrase": "Cruzar o espaço sideral enquanto minutos equivalem a anos na Terra."
      },
      {
        "name": "Shrek",
        "sub": "animacoes",
        "word": "pântano",
        "phrase": "Um ser verde ranzinza que só queria viver em paz no seu barro."
      },
      {
        "name": "Toy Story",
        "sub": "animacoes",
        "word": "infinito",
        "phrase": "Objetos de plástico que ganham vida assim que a maçaneta gira."
      },
      {
        "name": "O Rei Leão",
        "sub": "animacoes",
        "word": "ciclo",
        "phrase": "O pequeno herdeiro que precisou lembrar quem era para salvar as terras do reino."
      },
      {
        "name": "Monstros S.A.",
        "sub": "animacoes",
        "word": "portas",
        "phrase": "Uma fábrica que gerava energia a partir dos gritos infantis."
      },
      {
        "name": "Procurando Nemo",
        "sub": "animacoes",
        "word": "nadadeira",
        "phrase": "Um pai aflito cruzando o oceano em busca do filho levado por mergulhadores."
      },
      {
        "name": "Os Incríveis",
        "sub": "animacoes",
        "word": "uniforme",
        "phrase": "Uma família suburbana com dons especiais que tenta agir discretamente."
      },
      {
        "name": "Breaking Bad",
        "sub": "drama",
        "word": "química",
        "phrase": "Um professor doente decide produzir substâncias ilegais para deixar herança."
      },
      {
        "name": "Peaky Blinders",
        "sub": "drama",
        "word": "navalha",
        "phrase": "Boinas alinhadas e negócios escusos na fumaça da Inglaterra industrial."
      },
      {
        "name": "Titanic",
        "sub": "drama",
        "word": "iceberg",
        "phrase": "A viagem inaugural da embarcação que nem mesmo o destino salvaria."
      },
      {
        "name": "Coringa",
        "sub": "drama",
        "word": "escadaria",
        "phrase": "A transformação dolorosa de um homem ignorado num ícone do caos."
      },
      {
        "name": "La Casa de Papel",
        "sub": "drama",
        "word": "máscara",
        "phrase": "Macacões vermelhos e um plano minucioso para imprimir o próprio dinheiro."
      },
      {
        "name": "O Poderoso Chefão",
        "sub": "drama",
        "word": "família",
        "phrase": "Uma proposta que ninguém pode recusar nos bastidores da máfia."
      },
      {
        "name": "Piratas do Caribe",
        "sub": "drama",
        "word": "rum",
        "phrase": "Passos cambaleantes e uma bússola que aponta para o que você mais deseja."
      },
      {
        "name": "Round 6",
        "sub": "drama",
        "word": "batatinha",
        "phrase": "Jogos infantis com punições letais pela promessa de uma fortuna."
      },
      {
        "name": "Chaves",
        "sub": "comedia",
        "word": "barril",
        "phrase": "Um garoto humilde que sonha com sanduíche enquanto diverte a vila."
      },
      {
        "name": "The Office",
        "sub": "comedia",
        "word": "papel",
        "phrase": "Olhadas para a câmera e reuniões bizarras numa filial de suprimentos."
      },
      {
        "name": "Friends",
        "sub": "comedia",
        "word": "cafeteria",
        "phrase": "Seis amigos conversando sobre a vida no sofá de veludo laranja."
      },
      {
        "name": "Todo Mundo Odeia o Chris",
        "sub": "comedia",
        "word": "passagem",
        "phrase": "O irmão mais velho que sempre leva a culpa e apanha na escola."
      },
      {
        "name": "Wandinha",
        "sub": "comedia",
        "word": "tranças",
        "phrase": "Olhar sem piscar e uma mão desmembrada como fiel companheira."
      },
      {
        "name": "Avatar",
        "sub": "ficcao",
        "word": "pandora",
        "phrase": "Humanos transferem suas consciências para corpos azuis em lua selvagem."
      },
      {
        "name": "De Volta para o Futuro",
        "sub": "ficcao",
        "word": "capacitor",
        "phrase": "Um esportivo com portas asa-de-gaivota atinge 88 milhas por hora."
      },
      {
        "name": "Duna",
        "sub": "ficcao",
        "word": "especiaria",
        "phrase": "Verme gigante cruzando as areias do planeta mais árido da galáxia."
      },
      {
        "name": "Viva - A Vida é uma Festa",
        "sub": "animacoes",
        "word": "violão",
        "phrase": "Um garoto viaja ao mundo dos mortos guiado pela música familiar."
      },
      {
        "name": "Como Treinar o Seu Dragão",
        "sub": "animacoes",
        "word": "fúria",
        "phrase": "Um jovem viking conquista a amizade do dragão mais temido dos céus."
      },
      {
        "name": "Divertida Mente",
        "sub": "animacoes",
        "word": "painel",
        "phrase": "Sentimentos personificados disputam o comando da mente de uma garota."
      },
      {
        "name": "Spider-Man: No Aranhaverso",
        "sub": "animacoes",
        "word": "multiverso",
        "phrase": "Várias versões do herói se encontram com traços de desenho diferentes."
      },
      {
        "name": "Frozen",
        "sub": "animacoes",
        "word": "gelo",
        "phrase": "Uma rainha que isola seu reino num inverno eterno pelo medo de seus dons."
      },
      {
        "name": "Clube da Luta",
        "sub": "drama",
        "word": "regra",
        "phrase": "A primeira regra é que você não deve falar sobre o que acontece no porão."
      },
      {
        "name": "The Boys",
        "sub": "drama",
        "word": "composto",
        "phrase": "Heróis corruptos idolatrados pela mídia enfrentando justiceiros rebeldes."
      },
      {
        "name": "Dark",
        "sub": "drama",
        "word": "caverna",
        "phrase": "Ciclos de trinta e três anos conectando quatro famílias em uma teia temporal."
      },
      {
        "name": "As Branquelas",
        "sub": "comedia",
        "word": "disfarce",
        "phrase": "Agentes federais se passam por patricinhas ricas nos Hamptons."
      },
      {
        "name": "Brooklyn Nine-Nine",
        "sub": "comedia",
        "word": "distintivo",
        "phrase": "Detetives excêntricos resolvendo crimes sob a batuta de um capitão sério."
      },
      {
        "name": "Se Beber, Não Case!",
        "sub": "comedia",
        "word": "tigre",
        "phrase": "Acordam num quarto destruído em Las Vegas sem lembrar de nada da noite anterior."
      },
      {
        "name": "O Exterminador do Futuro",
        "sub": "ficcao",
        "word": "ciborgue",
        "phrase": "Um robô assassino viaja no tempo para eliminar a mãe do líder rebelde."
      },
      {
        "name": "Planeta dos Macacos",
        "sub": "ficcao",
        "word": "estátua",
        "phrase": "Astronautas descobrem que o mundo governado por símios era a sua própria casa."
      },
      {
        "name": "Mad Max: Estrada da Fúria",
        "sub": "ficcao",
        "word": "gasolina",
        "phrase": "Perseguição insana pelo deserto pós-apocalíptico atrás de água e combustível."
      },
      {
        "name": "Blade Runner",
        "sub": "ficcao",
        "word": "replicante",
        "phrase": "Detetive caça androides com prazo de validade em cidade chuvosa e sombria."
      },
      {
        "name": "Ratatouille",
        "sub": "animacoes",
        "word": "chapéu",
        "phrase": "Um pequeno roedor que sonhava em cozinhar nos melhores restaurantes de Paris."
      },
      {
        "name": "WALL-E",
        "sub": "animacoes",
        "word": "compactador",
        "phrase": "Um robô solitário limpando a Terra abandonada encontra uma muda de planta verde."
      },
      {
        "name": "Madagascar",
        "sub": "animacoes",
        "word": "pinguins",
        "phrase": "Quatro animais mimados de zoológico vão parar numa ilha selvagem da África."
      },
      {
        "name": "Up: Altas Aventuras",
        "sub": "animacoes",
        "word": "balões",
        "phrase": "Um velhinho solitário faz a própria casa voar amarrada a milhares de bexigas."
      },
      {
        "name": "Cidadão Kane",
        "sub": "drama",
        "word": "botão-de-rosa",
        "phrase": "A última palavra enigmática de um magnata da imprensa no leito de morte."
      },
      {
        "name": "Succession",
        "sub": "drama",
        "word": "conglomerado",
        "phrase": "Herdeiros bilionários apunhalando uns aos outros pelo controle do império da mídia."
      },
      {
        "name": "Curtindo a Vida Adoidado",
        "sub": "comedia",
        "word": "desfile",
        "phrase": "Mata aula com a namorada e o melhor amigo a bordo de uma Ferrari clássica."
      },
      {
        "name": "Legalmente Loira",
        "sub": "comedia",
        "word": "jurídico",
        "phrase": "Troca o preconceito social pelo diploma de Direito nas cortes mais prestigiadas."
      },
      {
        "name": "Debi & Lóide",
        "sub": "comedia",
        "word": "van",
        "phrase": "Dois amigos com inteligência duvidosa cruzam o país numa van em formato de cachorro."
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
        "phrase": "Reunir sete relíquias para invocar o dragão que realiza pedidos."
      },
      {
        "name": "Naruto Shippuden",
        "sub": "shonen",
        "word": "selo",
        "phrase": "Superar o preconceito da vila até se tornar o líder máximo."
      },
      {
        "name": "One Piece",
        "sub": "shonen",
        "word": "tesouro",
        "phrase": "A maior jornada marítima de todas em busca do que foi deixado no fim do mundo."
      },
      {
        "name": "Attack on Titan",
        "sub": "shonen",
        "word": "muralhas",
        "phrase": "Três anéis gigantes de pedra contendo a humanidade cercada por monstros."
      },
      {
        "name": "Demon Slayer",
        "sub": "shonen",
        "word": "respiração",
        "phrase": "Técnicas de espada sincronizadas com o ar para enfrentar demônios da noite."
      },
      {
        "name": "Jujutsu Kaisen",
        "sub": "shonen",
        "word": "maldição",
        "phrase": "Energia negativa gerada pelas emoções humanas combatida por feiticeiros."
      },
      {
        "name": "Death Note",
        "sub": "shonen",
        "word": "caderno",
        "phrase": "Basta saber o rosto e escrever o nome nas páginas para ditar o fim."
      },
      {
        "name": "Bleach",
        "sub": "shonen",
        "word": "ceifeiro",
        "phrase": "Uma lâmina gigante espiritual libertada por um garoto de cabelo ruivo."
      },
      {
        "name": "Hunter x Hunter",
        "sub": "shonen",
        "word": "exame",
        "phrase": "Superar testes perigosos para obter uma licença de caçador profissional."
      },
      {
        "name": "Bob Esponja",
        "sub": "classicos",
        "word": "hambúrguer",
        "phrase": "Mora num fruto do mar e prepara lanches com uma espátula no fundo do oceano."
      },
      {
        "name": "Pica-Pau",
        "sub": "classicos",
        "word": "gargalhada",
        "phrase": "Topete vermelho aprontando travessuras com uma risada inconfundível."
      },
      {
        "name": "Tom e Jerry",
        "sub": "classicos",
        "word": "ratoeira",
        "phrase": "O felino que bola planos mirabolantes que sempre explodem na própria cara."
      },
      {
        "name": "Scooby-Doo",
        "sub": "classicos",
        "word": "furgão",
        "phrase": "Quatro jovens e um cão medroso desmascarando assombrações falsas."
      },
      {
        "name": "Os Cavaleiros do Zodíaco",
        "sub": "nostalgia",
        "word": "cosmo",
        "phrase": "Armaduras de bronze brilhando ao queimar a energia interior pela deusa."
      },
      {
        "name": "Pokémon (Anime)",
        "sub": "nostalgia",
        "word": "captura",
        "phrase": "Um treinador de boné viajando para se tornar o mestre de criaturinhas."
      },
      {
        "name": "Ben 10 (Desenho)",
        "sub": "nostalgia",
        "word": "omnitrix",
        "phrase": "Um dispositivo alienígena que permite se transformar em dez formas."
      },
      {
        "name": "As Meninas Superpoderosas",
        "sub": "nostalgia",
        "word": "elemento x",
        "phrase": "Criadas no laboratório com açúcar, tempero e ingredientes acidentais."
      },
      {
        "name": "Avatar: A Lenda de Aang",
        "sub": "nostalgia",
        "word": "dobra",
        "phrase": "O último monge que domina os quatro elementos da natureza."
      },
      {
        "name": "Os Simpsons",
        "sub": "modernos",
        "word": "amarelo",
        "phrase": "Uma família comum de pele dourada que prevê o futuro com humor."
      },
      {
        "name": "Rick e Morty",
        "sub": "modernos",
        "word": "portal",
        "phrase": "Um avô cientista excêntrico arrastando o neto por realidades paralelas perigosas."
      },
      {
        "name": "Hora de Aventura",
        "sub": "modernos",
        "word": "espada",
        "phrase": "Um garoto de gorro branco e seu cachorro elástico explorando terras mágicas."
      },
      {
        "name": "O Incrível Mundo de Gumball",
        "sub": "modernos",
        "word": "subúrbio",
        "phrase": "Um gato azul e seu irmão peixe aprontando em traços mistos."
      },
      {
        "name": "Fullmetal Alchemist",
        "sub": "shonen",
        "word": "armadura",
        "phrase": "Dois irmãos que quebraram o maior tabu tentando ressuscitar a mãe."
      },
      {
        "name": "Black Clover",
        "sub": "shonen",
        "word": "grimório",
        "phrase": "Nasceu sem um pingo de mana em um mundo onde magia define tudo."
      },
      {
        "name": "JoJo's Bizarre Adventure",
        "sub": "shonen",
        "word": "pose",
        "phrase": "Gerações da mesma família lutando com projeções espirituais espalhafatosas."
      },
      {
        "name": "Chainsaw Man",
        "sub": "shonen",
        "word": "corda",
        "phrase": "Puxa uma cordinha no peito e transforma a cabeça num motor com dentes de serra."
      },
      {
        "name": "Looney Tunes",
        "sub": "classicos",
        "word": "cenoura",
        "phrase": "O coelho pergunta o que há de novo enquanto foge de caçadores trapalhões."
      },
      {
        "name": "A Pantera Cor-de-Rosa",
        "sub": "classicos",
        "word": "saxofone",
        "phrase": "Passos elegantes ao som de um tema de jazz inesquecível."
      },
      {
        "name": "Coragem, o Cão Covarde",
        "sub": "nostalgia",
        "word": "lugar nenhum",
        "phrase": "Protege seus donos idosos de alienígenas e horrores no meio do deserto."
      },
      {
        "name": "O Laboratório de Dexter",
        "sub": "nostalgia",
        "word": "botão",
        "phrase": "Um garoto gênio escondendo computadores de sua irmã bailarina."
      },
      {
        "name": "A Vaca e o Frango",
        "sub": "nostalgia",
        "word": "bunda",
        "phrase": "Dois irmãos improváveis com pais humanos que só aparecem da cintura para baixo."
      },
      {
        "name": "Du, Dudu e Edu",
        "sub": "nostalgia",
        "word": "quebra-queixo",
        "phrase": "Três amigos criando golpes absurdos para conseguir balas gigantes."
      },
      {
        "name": "Arcane",
        "sub": "modernos",
        "word": "hextech",
        "phrase": "Duas irmãs em lados opostos de uma guerra entre duas cidades conectadas."
      },
      {
        "name": "Spy x Family",
        "sub": "modernos",
        "word": "amendoim",
        "phrase": "Um espião, uma assassina e uma garotinha telepata fingindo uma família comum."
      },
      {
        "name": "Apenas um Show",
        "sub": "modernos",
        "word": "parque",
        "phrase": "Um gaio-azul e um guaxinim que fazem qualquer tarefa virar caos interdimensional."
      },
      {
        "name": "Gravity Falls",
        "sub": "modernos",
        "word": "diário",
        "phrase": "Gêmeos passando as férias numa cabana de mistérios cheia de anotações secretas."
      },
      {
        "name": "Yu Yu Hakusho",
        "sub": "shonen",
        "word": "espiritual",
        "phrase": "Um delinquente morre salvando uma criança e vira detetive sobrenatural."
      },
      {
        "name": "InuYasha",
        "sub": "shonen",
        "word": "fragmentos",
        "phrase": "Um meio-demônio canino em busca dos cacos de uma joia sagrada feudal."
      },
      {
        "name": "Saint Seiya / Cavaleiros do Zodíaco",
        "sub": "shonen",
        "word": "constelação",
        "phrase": "Jovens órfãos queimam o cosmo protegendo a reencarnação da deusa da sabedoria."
      },
      {
        "name": "Mob Psycho 100",
        "sub": "shonen",
        "word": "porcentagem",
        "phrase": "Um garoto comum com poderes psíquicos devastadores que explodem aos cem por cento."
      },
      {
        "name": "Os Flintstones",
        "sub": "classicos",
        "word": "pedregulho",
        "phrase": "Uma família moderna da idade da pedra dirigindo carros movidos a pés descalços."
      },
      {
        "name": "Os Jetsons",
        "sub": "classicos",
        "word": "esteira",
        "phrase": "Vida no século vinte e um com carros voadores, robôs domésticos e cidades nas nuvens."
      },
      {
        "name": "Popeye",
        "sub": "classicos",
        "word": "espinafre",
        "phrase": "Aperta uma lata verde e ganha força sobre-humana para defender sua amada do brutamontes."
      },
      {
        "name": "Corrida Maluca",
        "sub": "classicos",
        "word": "trapaça",
        "phrase": "Pilotos bizarros disputam troféus enquanto um vilão canino vive aprontando."
      },
      {
        "name": "X-Men Evolution",
        "sub": "nostalgia",
        "word": "instituto",
        "phrase": "Mutantes adolescentes aprendendo a controlar seus dons entre uma aula e outra do colégio."
      },
      {
        "name": "As Aventuras de Jackie Chan",
        "sub": "nostalgia",
        "word": "talismãs",
        "phrase": "Doze talismãs do zodíaco chinês espalhados pelo mundo contendo poderes mágicos."
      },
      {
        "name": "Três Espiãs Demais",
        "sub": "nostalgia",
        "word": "batom",
        "phrase": "Estudantes de Beverly Hills enviadas em missões com apetrechos cosméticos disfarçados."
      },
      {
        "name": "Super Choque",
        "sub": "nostalgia",
        "word": "tampa",
        "phrase": "Um jovem negro ganha poderes eletromagnéticos e voa sobre uma tampa de bueiro."
      },
      {
        "name": "Demon Slayer / Kimetsu no Yaiba",
        "sub": "modernos",
        "word": "respiração",
        "phrase": "Espadachins dominam técnicas de respiração para decapitar demônios da noite."
      },
      {
        "name": "Cyberpunk: Edgerunners",
        "sub": "modernos",
        "word": "areia",
        "phrase": "Um jovem das ruas aprimora a espinha dorsal com tecnologia militar ultra veloz."
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
        "phrase": "Onze contra onze tentando colocar a esfera no fundo das redes."
      },
      {
        "name": "Basquete",
        "sub": "coletivos",
        "word": "tabela",
        "phrase": "Quicar no chão e arremessar alto numa cesta de aro de ferro."
      },
      {
        "name": "Vôlei",
        "sub": "coletivos",
        "word": "bloqueio",
        "phrase": "Subir junto à rede com os braços esticados para barrar o ataque adversário."
      },
      {
        "name": "Handebol",
        "sub": "coletivos",
        "word": "área",
        "phrase": "Passar a bola com velocidade com as mãos antes de saltar no ar."
      },
      {
        "name": "Futsal",
        "sub": "coletivos",
        "word": "quadra",
        "phrase": "Chão liso e jogadas rápidas de pé em pé num espaço menor."
      },
      {
        "name": "Futebol Americano",
        "sub": "coletivos",
        "word": "jardas",
        "phrase": "Avançar no campo com a bola oval buscando ultrapassar a linha de fundo."
      },
      {
        "name": "Rugby",
        "sub": "coletivos",
        "word": "empurrão",
        "phrase": "Formação de força coletiva sem proteções onde a bola só volta para trás."
      },
      {
        "name": "Boxe",
        "sub": "lutas",
        "word": "esquiva",
        "phrase": "Balançar o corpo nas cordas para escapar dos golpes com luvas acolchoadas."
      },
      {
        "name": "Judô",
        "sub": "lutas",
        "word": "tatame",
        "phrase": "Aproveitar o peso do adversário para conseguir a queda perfeita."
      },
      {
        "name": "Jiu-jitsu",
        "sub": "lutas",
        "word": "chave",
        "phrase": "Luta no solo buscando estrangulamentos e alavancas nas articulações."
      },
      {
        "name": "Karatê",
        "sub": "lutas",
        "word": "faixa",
        "phrase": "Golpes retos e precisos de mãos e pés mantendo a disciplina oriental."
      },
      {
        "name": "MMA / UFC",
        "sub": "lutas",
        "word": "octógono",
        "phrase": "Dois competidores trancados na grade misturando todas as artes marciais."
      },
      {
        "name": "Capoeira",
        "sub": "lutas",
        "word": "berimbau",
        "phrase": "Movimentos acrobáticos e rasteiras acompanhados pelo ritmo do tambor."
      },
      {
        "name": "Skate",
        "sub": "radicais",
        "word": "lixa",
        "phrase": "Manobras arriscadas sobre quatro rodinhas deslizando pelo corrimão."
      },
      {
        "name": "Surfe",
        "sub": "radicais",
        "word": "tubo",
        "phrase": "Encontrar o equilíbrio perfeito por dentro da cortina de água salgada."
      },
      {
        "name": "Fórmula 1",
        "sub": "radicais",
        "word": "pit-stop",
        "phrase": "Trocar quatro pneus e ajustar a asa em menos de três segundos no asfalto."
      },
      {
        "name": "Ciclismo",
        "sub": "radicais",
        "word": "pedal",
        "phrase": "Quilômetros na estrada ou na pista com duas rodas e capacete aerodinâmico."
      },
      {
        "name": "Tênis",
        "sub": "precisao",
        "word": "saque",
        "phrase": "Mandar a bolinha felpuda por cima da rede a mais de duzentos por hora."
      },
      {
        "name": "Natação",
        "sub": "precisao",
        "word": "raia",
        "phrase": "Braçadas precisas cortando a água sem colocar os pés no fundo."
      },
      {
        "name": "Atletismo",
        "sub": "precisao",
        "word": "cronômetro",
        "phrase": "A corrida contra os centésimos de segundo na pista oval."
      },
      {
        "name": "Tênis de Mesa",
        "sub": "precisao",
        "word": "peteca",
        "phrase": "Bolinhas leves rebatidas em alta velocidade numa mesa dividida."
      },
      {
        "name": "Golfe",
        "sub": "precisao",
        "word": "buraco",
        "phrase": "Caminhadas tranquilas no gramado buscando o menor número de tacadas."
      },
      {
        "name": "Sinuca",
        "sub": "precisao",
        "word": "giz",
        "phrase": "Taco de madeira calculando ângulos na mesa de feltro verde."
      },
      {
        "name": "Vôlei de Praia",
        "sub": "coletivos",
        "word": "manchete",
        "phrase": "Saltos na areia fofa com óculos escuros e sol a pino."
      },
      {
        "name": "Pólo Aquático",
        "sub": "coletivos",
        "word": "touca",
        "phrase": "Gols disputados nadando sem encostar os pés no fundo da piscina."
      },
      {
        "name": "Jiu-Jitsu Brasileiro",
        "sub": "lutas",
        "word": "tatame",
        "phrase": "A arte suave que neutraliza força física através de alavancas no chão."
      },
      {
        "name": "Muay Thai",
        "sub": "lutas",
        "word": "cotovelada",
        "phrase": "A luta das oito armas usando punhos, cotovelos, joelhos e canelas."
      },
      {
        "name": "Taekwondo",
        "sub": "lutas",
        "word": "colete",
        "phrase": "Chutes giratórios acrobáticos que pontuam em sensores eletrônicos."
      },
      {
        "name": "Skate Street",
        "sub": "radicais",
        "word": "lixa",
        "phrase": "Shape com quatro rodinhas deslizando sobre corrimãos e escadarias."
      },
      {
        "name": "Snowboard",
        "sub": "radicais",
        "word": "pó",
        "phrase": "Descidas velozes em montanhas geladas com os pés travados na prancha única."
      },
      {
        "name": "Paraquedismo",
        "sub": "radicais",
        "word": "altímetro",
        "phrase": "Salto no vácuo de avião com segundos eternos de queda livre até a abertura."
      },
      {
        "name": "Escalada Esportiva",
        "sub": "radicais",
        "word": "magnésio",
        "phrase": "Mãos brancas de pó tateando pequenas ranhuras em paredões verticais."
      },
      {
        "name": "BMX / Ciclismo Radical",
        "sub": "radicais",
        "word": "manobra",
        "phrase": "Saltos em rampas de terra executando giros completos com o guidão."
      },
      {
        "name": "Tênis de Mesa / Ping-Pong",
        "sub": "precisao",
        "word": "borracha",
        "phrase": "Bolinhas leves de celulóide cruzando uma rede baixa em frações de segundo."
      },
      {
        "name": "Tiro com Arco",
        "sub": "precisao",
        "word": "aljava",
        "phrase": "Puxa a corda até o queixo e solta a flecha em direção ao centro amarelo."
      },
      {
        "name": "Boliche",
        "sub": "precisao",
        "word": "canaleta",
        "phrase": "Bola pesada rolando pela pista encerada para derrubar dez pinos de madeira."
      },
      {
        "name": "Sinuca / Bilhar",
        "sub": "precisao",
        "word": "giz",
        "phrase": "Passa giz na ponta do taco antes de calcular o ângulo exato da tabela."
      },
      {
        "name": "Dardos",
        "sub": "precisao",
        "word": "alvo",
        "phrase": "Três pequenos projéteis lançados contra uma tábua circular numerada."
      },
      {
        "name": "Beisebol",
        "sub": "coletivos",
        "word": "taco",
        "phrase": "Bate na costura da bola e corre pelas quatro bases antes de ser eliminado."
      },
      {
        "name": "Críquete",
        "sub": "coletivos",
        "word": "estacas",
        "phrase": "Esporte tradicional britânico com partidas longas e defesas de hastes de madeira."
      },
      {
        "name": "Futebol de Areia",
        "sub": "coletivos",
        "word": "bicicleta",
        "phrase": "Chutes acrobáticos no ar em terreno irregular sob a brisa litorânea."
      },
      {
        "name": "MMA / Artes Marciais Mistas",
        "sub": "lutas",
        "word": "octógono",
        "phrase": "Combate dentro de uma jaula de oito lados misturando todas as disciplinas de luta."
      },
      {
        "name": "Esgrima",
        "sub": "lutas",
        "word": "florete",
        "phrase": "Duelo de lâminas finas com roupa branca acolchoada e pontuações elétricas."
      },
      {
        "name": "Sumô",
        "sub": "lutas",
        "word": "círculo",
        "phrase": "Lutadores pesados disputando empurrões para não sair da área sagrada de terra batida."
      },
      {
        "name": "Bungee Jump",
        "sub": "radicais",
        "word": "elástico",
        "phrase": "Salto de pontes altíssimas com cabos elásticos amarrados aos tornozelos."
      },
      {
        "name": "Rafting",
        "sub": "radicais",
        "word": "corredeira",
        "phrase": "Bote inflável descendo rios turbulentos entre pedras e redemoinhos de espuma."
      },
      {
        "name": "Asa-Delta",
        "sub": "radicais",
        "word": "térmica",
        "phrase": "Voo livre suspenso numa estrutura triangular aproveitando as correntes de ar quente."
      },
      {
        "name": "Parkour",
        "sub": "radicais",
        "word": "obstáculo",
        "phrase": "Transpõe muros, bancos e vãos urbanos usando apenas a agilidade do próprio corpo."
      },
      {
        "name": "Xadrez",
        "sub": "precisao",
        "word": "xeque-mate",
        "phrase": "Batalha mental de sessenta e quatro casas onde um rei indefeso sela a derrota."
      },
      {
        "name": "Curling",
        "sub": "precisao",
        "word": "vassoura",
        "phrase": "Pedras de granito polido deslizando sobre o gelo enquanto varrem o piso à frente."
      },
      {
        "name": "Hipismo",
        "sub": "precisao",
        "word": "obstáculos",
        "phrase": "Salto perfeito com montaria nobre sem derrubar as barras do percurso."
      }
    ]
  }
};

// DICAS DO IMPOSTOR INDEXADAS
const ITEM_HINTS = {};
Object.keys(THEME_DATABASE).forEach(t => {
  THEME_DATABASE[t].items.forEach(it => {
    ITEM_HINTS[it.name] = {
      word: it.word,
      phrase: it.phrase
    };
  });
});

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
    "Chapolin Colorado|Zorro"
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
