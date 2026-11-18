# -*- coding: utf-8 -*-
"""
Banco Grupo 1: Super-herói, Famosos, Comida, Objeto, Lugar
Cada tema com lista massiva de tuplas: (nome, subcategoria, [4 palavras-dica], [4 frases-dica])
"""

import scripts.vocab_part1 as vp1
import scripts.pool_group_a as pga
import scripts.pool_batch_famosos_comida as pbfc

def get_group1_data():
    data = {
        "Super-herói": [],
        "Famosos": [],
        "Comida": [],
        "Objeto": [],
        "Lugar": []
    }

    # 1. Super-herói
    sh_list = vp1.get_superhero_items() + pga.get_superhero_candidates()
    data["Super-herói"] = sh_list

    # 2. Famosos
    fam_list = pbfc.get_famosos_items()
    # Adicionar mais famosos para garantir 250+ candidatos
    extra_famosos = [
        ("Rodrigo Faro", "brasileiros", ["dança-gatinho", "apresentador", "domingo", "tv"], ["Famoso pelo quadro Dança Gatinho no programa de TV.", "Apresentador carismático de programas dominicais.", "Começou a carreira como cantor no grupo infantil Dominó.", "Imita passos de dança de cantores famosos a cada beijo."]),
        ("Luciano Huck", "brasileiros", ["domingão", "lata-velha", "caldeirão", "loucura"], ["Comandou o Caldeirão do Huck aos sábados por duas décadas.", "Reformava carros destruídos no quadro Lata Velha.", "Atual apresentador do Domingão com Huck na Globo.", "Bordão famoso nas aberturas: 'Loucura, loucura!'."]),
        ("Marília Mendonça", "brasileiros", ["rainha-sofrência", "infiel", "violão", "sertanejo"], ["A eterna Rainha da Sofrência da música sertaneja.", "Compositora de letras profundas como Infiel e Supera.", "Voz poderosa que quebrou todos os recordes no YouTube.", "Ícone inesquecível da música popular brasileira."]),
        ("Gusttavo Lima", "brasileiros", ["embaixador", "buteco", "tchê-tcherere", "violão"], ["O Embaixador do sertanejo com megashows pelo país.", "Criador do projeto de shows gigantesco Buteco.", "Estourou internacionalmente com o hit Balada Boa.", "Voz marcante e vida em mansões com estilo de palácio grego."]),
        ("Zeca Pagodinho", "brasileiros", ["deixa-vida-me-levar", "xerém", "cerveja", "samba"], ["Mestre do samba de raiz e do pagode tradicional.", "Música clássica de filosofia de vida: 'Deixa a vida me levar'.", "Famoso pela generosidade e festas comunitárias em Xerém.", "Gosta de tomar cerveja gelada com amigos na calçada."]),
        ("Alcione", "brasileiros", ["marrom", "não-deixe-o-samba-morrer", "voz-grave", "mangueira"], ["A 'Marrom' do samba com voz grave inconfundível.", "Cantou o hino eterno: 'Não deixe o samba morrer'.", "Torcedora símbolo apaixonada da escola de samba Mangueira.", "Comanda palcos com unhas longas pintadas e presença nobre."]),
        ("Luan Santana", "brasileiros", ["meteoro", "meteoro-da-paixão", "sertanejo", "show"], ["Estourou jovem em todo o Brasil com a canção Meteoro.", "Pioneiro da explosão do sertanejo universitário romântico.", "Dono de dezenas de hits no topo das rádios brasileiras.", "Mega shows com produção visual futurista nos festivais."]),
        ("Ludmilla", "brasileiros", ["numanice", "rainha-favela", "pagode", "funk"], ["Começou como MC Beyoncé cantando funk no Rio.", "Criou o projeto Numanice de pagode com estádios lotados.", "Venceu o Grammy Latino com suas produções musicais.", "Carisma gigante e presença marcante nos maiores festivais."]),
        ("Chico Xavier", "brasileiros", ["psicografia", "espiritismo", "caridade", "uberaba"], ["Maior líder espiritual e médium da história do Brasil.", "Psicografou mais de quatrocentos livros doando os lucros.", "Vida humilde inteiramente dedicada à caridade e aos pobres.", "Eleito o Maior Brasileiro de Todos os Tempos em votação popular."]),
        ("Galvão Bueno", "brasileiros", ["olha-o-gol", "haja-coração", "narrador", "copas"], ["A voz mais marcante das transmissões esportivas do país.", "Narrou os maiores títulos mundiais da seleção e de Senna.", "Bordões inesquecíveis: 'Haja coração!' e 'É tetra!'.", "Trabalhou por mais de quatro décadas na TV Globo."]),
        ("Tiago Leifert", "brasileiros", ["globo-esporte", "bbb", "videogame", "apresentador"], ["Revolucionou a linguagem descontraída do Globo Esporte.", "Apresentou edições marcantes do Big Brother Brasil e The Voice.", "Apaixonado por videogames e transmissões de futebol online.", "Famoso por seus discursos emocionantes de eliminação no reality."]),
        ("Pedro Bial", "brasileiros", ["discursos", "paredão", "filtro-solar", "jornalista"], ["Poeta e jornalista que comandou o BBB por dezesseis anos.", "Criou o bordão clássico da eliminação: 'Vem pra cá!'.", "Narrador do texto inspirador do Filtro Solar nos anos noventa.", "Comanda o talk show Conversa com Bial na TV Globo."]),
        ("Rodrigo Lombardi", "brasileiros", ["raj", "caminho-das-índias", "alex", "voz-grave"], ["Ficou famoso em todo o país como o indiano Raj.", "Interpretou o empresário sedutor Alex em Verdades Secretas.", "Voz encorpada e presença marcante em novelas dramáticas.", "Dublou personagens clássicos em animações da Disney."]),
        ("Alok", "brasileiros", ["hear-me-now", "laser", "eletrônica", "dj"], ["Maior DJ e produtor de música eletrônica do Brasil.", "Hit mundial 'Hear Me Now' com centenas de milhões de streams.", "Shows monumentais com pirâmides de lasers visíveis do espaço.", "Reconhecido como um dos quatro melhores DJs do planeta."]),
        ("Seu Jorge", "brasileiros", ["amiga-da-minha-mulher", "burguesinha", "violão", "mané-galinha"], ["Cantor de voz rouca marcante e mestre do samba-rock.", "Hits atemporais como Burguesinha e Carolina.", "Interpretou o bandido Mané Galinha no clássico Cidade de Deus.", "Regravou canções de David Bowie em português no violão."]),
        ("Djavan", "brasileiros", ["oceano", "samurai", "alagoas", "harmonia"], ["Gênio alagoano da MPB com harmonias sofisticadas no violão.", "Compositor de clássicos como Oceano, Samurai e Sina.", "Cria palavras poéticas e ritmos cheios de síncope brasileira.", "Ganhador de múltiplos prêmios Grammy Latino."]),
        ("Milton Nascimento", "brasileiros", ["bituca", "clube-da-esquina", "minas", "voz-divina"], ["Conhecido pelo apelido afetuoso de Bituca com voz celestial.", "Líder e alma do movimento histórico do Clube da Esquina.", "Compôs obras-primas como Travessia e Canção da América.", "Cidadão do mundo reverenciado por lendas do jazz internacional."]),
        ("Raul Seixas", "brasileiros", ["metamorfose-ambulante", "maluco-beleza", "sociedade-alternativa", "bahia"], ["O lendário Maluco Beleza e Pai do Rock Brasileiro.", "Compôs hinos como Metamorfose Ambulante e Gita.", "Fundou a mítica Sociedade Alternativa com Paulo Coelho.", "Grito clássico que ecoa em todos os shows de rock: 'Toca Raul!'."]),
        ("Paulo Coelho", "brasileiros", ["o-alquimista", "mago", "livros", "genebra"], ["O escritor brasileiro mais lido e traduzido de todo o planeta.", "Autor do best-seller mundial O Alquimista vendido em cem línguas.", "Membro imortal da Academia Brasileira de Letras.", "Parceiro histórico de Raul Seixas na composição de rocks nos anos setenta."]),
        ("Chacrinha", "brasileiros", ["buzina", "bacalhau", "velho-guerreiro", "abacaxi"], ["O Velho Guerreiro e o maior comunicador anárquico da TV.", "Jogava bacalhau para o auditório e usava buzina no pescoço.", "Bordão histórico: 'Quem não se comunica, se trumbica!'.", "Lançou os maiores ícones da música brasileira em seu programa."])
    ]
    for n, s, w, p in extra_famosos:
        fam_list.append({"name": n, "sub": s, "words": w, "phrases": p, "word": w[0], "phrase": p[0]})
    data["Famosos"] = fam_list

    # 3. Comida
    com_list = pbfc.get_comida_items()
    extra_comida = [
        ("X-Tudo", "lanches", ["todos-ingredientes", "ovo-frito", "calabresa", "gigante"], ["O lanche mais completo e pesado das lanchonetes de rua.", "Leva hambúrguer, presunto, queijo, ovo, bacon, calabresa e salada.", "Exige as duas mãos com firmeza para conseguir morder.", "Vem embrulhado em papel alumínio mantendo tudo bem quente."]),
        ("Sanduíche de Mortadela", "lanches", ["pilha-fatias", "mercadão", "pão-francês", "são-paulo"], ["O lanche mais famoso do Mercado Municipal de São Paulo.", "Pão francês recheado com uma montanha de fatias de mortadela.", "Pode ser servido frio ou com queijo prato derretido na chapa.", "Pesa quase meio quilo e atrai turistas de todas as cidades."]),
        ("Pastel de Pizza", "lanches", ["presunto", "muçarela", "orégano", "tomate"], ["Recheio clássico que reproduz o sabor da pizza tradicional.", "Queijo muçarela derretido com presunto, orégano e rodela de tomate.", "Massa crocante frita na hora com cheiro irresistível.", "Um dos sabores mais pedidos em qualquer barraca de feira livre."]),
        ("Fogazza Frita", "lanches", ["massa-fechada", "queijo-quente", "frita", "orégano"], ["Massa fechada recheada e frita em óleo quente até dourar.", "Primo italiano do pastel com massa mais grossa e macia.", "Tradicionalmente vendida nas festas de rua da colônia italiana.", "Recheio farto de queijo muçarela derretido com molho de tomate."]),
        ("Tostex de Queijo", "lanches", ["chapa-fogão", "triangular", "pão-de-forma", "derretido"], ["Sanduíche de pão de forma feito na clássica tostadeira de ferro de fogão.", "Bordas bem prensadas e crocantes com o queijo borbulhando dentro.", "Lanche caseiro nostálgico das tardes de infância na cozinha.", "Fica tostado com desenho quadriculado ou estriado na casca."]),
        ("Picanha na Brasa", "brasileira", ["capa-de-gordura", "sal-grosso", "grelha", "churrasco"], ["O corte de carne bovina mais nobre e adorado do churrasco brasileiro.", "Capa grossa de gordura branca que derrete na brasa do carvão.", "Temperada tradicionalmente apenas com sal grosso na tábua.", "Servida malpassada em fatias suculentas com farofa crocante."]),
        ("Cupim Casqueirado", "brasileira", ["fatias-finas", "gordura-entrelaçada", "assado", "churrascaria"], ["Corte bovino com carne entremeada de gordura muito saborosa.", "Assado lentamente no espeto e fatiado fino em casquinhas douradas.", "Crocante por fora e desmanchando de macio por dentro.", "Acompanha mandioca cozida com manteiga de garrafa e vinagrete."]),
        ("Maminha na Manteiga", "brasileira", ["manteiga-garrafa", "ponta-alcatra", "suculenta", "forno"], ["Corte macio e suculento da ponta da alcatra com formato triangular.", "Assada ou grelhada e regada generosamente com manteiga derretida.", "Carne muito tenra que agrada a todos pelo sabor suave.", "Excelente acompanhamento para arroz com brócolis e batatas rústicas."]),
        ("Caldo de Mocotó", "brasileira", ["patas-bovinas", "colágeno", "caldo-quente", "levantar-defunto"], ["Caldo grosso e forte cozido com as patas do boi por horas.", "Rico em colágeno gelatinoso que encorpa e esquenta o corpo.", "Temperado com coentro, pimenta, ovos cozidos e cheiro-verde.", "Famoso na sabedoria popular por curar ressacas e dar energia."]),
        ("Leitão à Pururuca", "brasileira", ["pele-crocante", "óleo-quente", "assado", "festas"], ["Porco assado inteiro no forno ou na brasa de chão.", "Pele regada com óleo fervente até formar bolhas estaladiças.", "Casca extremamente crocante que quebra como vidro ao dente.", "Prato de festa tradicional de casamentos e celebrações de fim de ano."]),
        ("Espaguete ao Pesto", "mundo", ["manjericão", "pinoli", "azeite", "verde"], ["Massa italiana longa envolvida em molho verde perfumado.", "Batido no pilão com folhas frescas de manjericão, alho e azeite.", "Leva queijo parmesão ralado e castanhas ou pinolis tostados.", "Prato aromático e clássico da região da Ligúria na Itália."]),
        ("Fettuccine Alfredo", "mundo", ["manteiga", "parmesão", "cremoso", "roma"], ["Fitas largas de massa fresca italiana cobertas por molho branco aveludado.", "Criado em Roma unindo apenas manteiga fresca e queijo parmesão curado.", "A água do cozimento da massa emulsiona o queijo virando um creme perfeito.", "Um dos pratos de massa mais reproduzidos nos restaurantes mundiais."]),
        ("Risoto de Funghi", "mundo", ["arroz-arbóreo", "cogumelos", "caldo", "manteiga"], ["Arroz italiano arbóreo de grão gordo cozido lentamente com vinho branco.", "Acrescenta-se caldo de legumes concha por concha mexendo sem parar.", "Sabor terroso e profundo de cogumelos secos hidratados.", "Finalizado com manteiga gelada e parmesão na técnica da mantecatura."]),
        ("Tortilla Espanhola", "mundo", ["batatas", "ovos", "frigideira", "tapas"], ["Omelete grossa e redonda recheada com rodelas de batata cozidas em azeite.", "Pode levar cebola caramelizada para dar doçura e umidade ao miolo.", "Dourada dos dois lados na frigideira com centro macio e suculento.", "Servida quente ou fria em cubinhos como aperitivo em bares da Espanha."]),
        ("Nachos com Queijo Cheddar", "mundo", ["tortilhas-triângulo", "queijo-quente", "jalapeño", "chili"], ["Triângulos crocantes de milho fritos servidos em bandeja rasa.", "Cobertos por uma camada generosa de queijo cheddar cremoso derretido.", "Acompanhados de carne com chili de feijão e pimentas jalapeño fatiadas.", "Petisco clássico e viciante para comer assistindo a filmes e jogos."]),
        ("Pavê de Morango", "doces", ["frutas-frescas", "creme-confeiteiro", "bolacha", "travessa"], ["Sobremesa montada em camadas com morangos vermelhos fatiados.", "Creme branco suave de baunilha alternado com biscoitos umedecidos.", "Coberta por chantilly batido e morangos inteiros para decorar.", "Presença doce e refrescante nas sobremesas de festas de família."]),
        ("Torta Holandesa", "doces", ["calipso", "creme-branco", "ganache", "gelada"], ["Torta redonda decorada na lateral com biscoitos Calipso redondos.", "Recheio aveludado e leve à base de creme de leite e manteiga batida.", "Coberta no topo com uma camada espelhada de ganache de chocolate meio amargo.", "Servida bem gelada fatiada em triângulos elegantes nas confeitarias."]),
        ("Rapadura", "doces", ["cana-de-açúcar", "tijolo-doce", "nordeste", "energia"], ["Bloco doce e rústico obtido pela fervura e concentração do caldo de cana.", "Formato retangular de tijolo duro com sabor marcante de melaço.", "Alimento histórico dos trabalhadores rurais do Nordeste brasileiro.", "Ditado popular imortal: 'Rapadura é doce, mas não é mole não!'."]),
        ("Pé de Moleque", "doces", ["amendoim-torrado", "melaço", "crocante", "junina"], ["Doce tradicional feito com grãos de amendoim torrado envolvidos em caramelo escuro.", "Crocante e duro de morder com sabor tostado de açúcar e melaço.", "Item indispensável das barraquinhas nas festas juninas de São João.", "Diz a lenda que o nome surgiu dos meninos que roubavam o doce na janela."]),
        ("Paçoca de Rolha", "doces", ["amendoim-moído", "formato-cilíndrico", "esfarela", "festa"], ["Doce de amendoim moído prensado em formato cilíndrico de rolha.", "Esfarela deliciosamente na boca ao dar a primeira mordida.", "Feito com farinha de mandioca, açúcar refinado e uma pitada de sal.", "A queridinha do Brasil nas festividades juninas e no dia a dia."])
    ]
    for n, s, w, p in extra_comida:
        com_list.append({"name": n, "sub": s, "words": w, "phrases": p, "word": w[0], "phrase": p[0]})
    data["Comida"] = com_list

    # 4. Objeto
    obj_raw = pga.get_superhero_candidates() # Apenas para estrutura, carregar dados reais
    import scripts.theme_dictionaries as td
    obj_list = []
    for sub, sub_items in td.THEME_CANDIDATES["Objeto"].items():
        for item in sub_items:
            # item pode ser tupla de 4 elementos ou 5
            if len(item) == 4:
                n, w, p = item[0], item[2], item[3]
            else:
                n, w, p = item[0], item[1], item[2]
            obj_list.append({"name": n, "sub": sub, "words": w, "phrases": p, "word": w[0], "phrase": p[0]})
    data["Objeto"] = obj_list

    # 5. Lugar
    lug_list = []
    for item in pga.get_superhero_candidates():
        pass # Placeholder
    # Carregar lugares definidos
    data["Lugar"] = []

    return data
