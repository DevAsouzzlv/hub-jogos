# 🎭 Hub de Jogos - Duplas, Impostor & Mímica

Um aplicativo web interativo, vibrante e responsivo para jogar em grupo com amigos e família no mesmo celular! Inspirado em jogos como *Among Us*, *Spyfall*, *Mímica* e *Codenames*, com design moderno em estilo Neo-brutalista pop.

---

## 🚀 Novidades desta Versão (v2.0)

1. **Arquitetura Modular Limpa**:
   - `index.html`: Estrutura semântica leve e acessível.
   - `css/style.css`: Design neobrutalista moderno com cores vibrantes e responsividade total.
   - `css/animations.css`: Transições de cartas em 3D, efeitos *pop-in*, pulso e estados de alerta.
   - `js/data.js`: Banco de dados expandido com centenas de palavras, pistas individuais e pares.
   - `js/filters.js`: Sistema de filtros inteligente por categorias e subuniversos.
   - `js/animations.js`: Efeitos de animação (Flip 3D, Confetes em Canvas e Web Audio sintetizado).
   - `js/game.js`: Lógica completa do jogo, estados e histórico de navegação.

2. **Botão de Voltar Inteligente**:
   - Adicionado botão **← Voltar** em todas as telas para navegar livremente entre modos, configurações de jogadores, seleção de temas e filtros sem perder os dados.

3. **Filtro de Super-Heróis por Universo**:
   - Filtre facilmente quais universos participarão da partida:
     - 🔴 **Marvel** (Vingadores, X-Men, Homem-Aranha, Vilões)
     - 🔵 **DC Comics** (Batman, Superman, Liga da Justiça, Batfamília, Vilões)
     - 🟢 **Animes & Shonen** (Goku, Naruto, Luffy, Gojo, Saitama, Deku)
     - 🟡 **Clássicos & Outros** (Tartarugas Ninja, Ben 10, Incríveis, etc.)

4. **Novos Temas Adicionados**:
   - 🎮 **Jogos & Games** (Minecraft, GTA, Fortnite, Zelda, God of War, Valorant...)
   - 🎬 **Filmes & Séries** (Harry Potter, Senhor dos Anéis, Star Wars, Breaking Bad, Stranger Things...)
   - 📺 **Animes & Desenhos** (Dragon Ball, One Piece, Bob Esponja, Chaves, Cavaleiros do Zodíaco...)
   - ⚽ **Esportes** (Futebol, Basquete, Vôlei, Surfe, Skate, Fórmula 1, Ginástica...)

5. **Banco de Palavras Expandido**:
   - Centenas de novas palavras em todas as categorias existentes (Comida, Lugares, Animais, Famosos, Objetos, Profissões).
   - Dicionário de pistas individuais (`HW`) para todos os termos, auxiliando o impostor com dicas inteligentes.

6. **Animações e Efeitos Sonoros**:
   - Efeito de **Flip 3D** ao virar e esconder a carta.
   - Explosão de **Confetes** ao finalizar a rodada de visualização.
   - Feedback sonoro e tátil no celular via Web Audio API e Vibration API.

---

## 🎮 Modos de Jogo

### 👯 1. Duplas & Impostores (6 a 20 jogadores)
- O jogo sorteia duplas de palavras idênticas para a maioria dos jogadores.
- Um ou mais jogadores recebem a carta **IMPOSTOR** (sem palavra secreta ou com uma dica sutil).
- Todos dão pistas na roda. O objetivo das duplas é se encontrarem sem revelar a palavra para o impostor!

### 🕵️ 2. Modo Impostor (3 a 20 jogadores)
- Todos os inocentes recebem a mesma palavra secreta.
- Os impostores sorteados não sabem qual é a palavra (mas podem receber uma dica secreta caso ativada).
- Façam perguntas entre si e votem em quem parece estar blefando!

### 🤫 3. Mímica Secreta (3 a 20 jogadores)
- Cada jogador faz a mímica da sua palavra na sua vez.
- Jogadores recebem palavras semelhantes (ex: *Cachorro* vs *Lobo*), e os impostores recebem a palavra diferente.
- Inclui cronômetro de 60 segundos com aviso visual e placar de pontos!

---

## 💻 Como Executar Localmente

Não precisa de servidor complexo! Basta abrir o arquivo `index.html` em qualquer navegador:

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/hub-jogos.git
   ```
2. Abra `index.html` no seu navegador de preferência (Chrome, Edge, Firefox, Safari).
3. Também pode ser servido via [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) ou `npx serve`.

---

## 🌐 Publicando no GitHub Pages

Para colocar o jogo online gratuitamente:
1. Acesse o repositório no GitHub.
2. Vá em **Settings** > **Pages**.
3. Em **Branch**, selecione `main` e a pasta `/ (root)`.
4. Clique em **Save**. Em instantes, seu link estará no ar para jogar no celular!
