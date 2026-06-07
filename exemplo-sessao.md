# Exemplo de Sessão — Formato Caderno

> Exemplo prático do framework de sinais (`!`, `>`, `d:`, `?`, `"`, `//`, `♦`)
> pra usar no caderno. Layout contínuo, linha abaixo de linha.

---

## Página do caderno (reproduzida em texto)

```
═══════════════════════════════════════════
SESSÃO 12 — 7º Lua Minguante
═══════════════════════════════════════════

─── Druida nível 1 ───
SAB +2 · DEX 0 · STR +1 · PV 6
Forma animal: lobo (d4)
Magias: Conjurar Raízes, Gust

MISSÃO
Resgatar Nieda no Poço dos Ossos
Destino: Tocada · Médio · 1 obstáculo

RECURSOS
♦ HP 6/6   Torch 5/6   Corr 0
♦ Rações 3  Água 2  Ervas 1
♦ Foco: Cajado de Raiz

PREPARAÇÃO
// levei pouca água, torça que tenha lá
// rezar no Mosteiro antes de sair
// dúvida: levo a pá ou fico só com a lança?

GANCHO
! Chegou um mensageiro da Nieda.
" O Poço dos Ossos engoliu nossa colheita da lua.
  Mandaram a Nieda mais nova. Não voltou.
> Aceito. Vou hoje.

═══════════════════════════════════════════
DIÁRIO
═══════════════════════════════════════════

! A cratera se abre. O musgo brilha num azul
  doentio. Silêncio absoluto.

> Aguço a vista. Sigo pela borda leste,
  furtivo, evitando a clareira.

d: DES CD 12 (furtividade) → 14 ✅

? Tem alguém na borda?
  3 → Não, mas... ouço passos ao longe.

♦ -1 Torch (entrando na área escura)

! A trilha desemboca numa clareira com uma
  árvore que respira. O chão treme a cada
  "inspiração".

> Ponho a mão na árvore. As raízes se retraem,
  revelando uma passagem.

// o +2 SAB me ajuda a sentir por onde elas
//   vão ceder
// acho que não vi algo importante aqui

? A passagem é segura?
  5 → Sim (mas apertada — largo mochila e passo)

═══ MAPA — Poço dos Ossos (sala a sala) ═══

         ╔══╗─────╔══╗
         ║1 ║     ║2 ║
         ╚══╝     ╚══╝
           │         │
           │    ╔══╗ │
           └────║3 ║─┘
                ╚══╝
                  │
                ╔══╗
                ║4 ║
                ╚══╝

1. Entrada — cascata de raízes
2. Câmara dos ecos (vazia)
3. Poço — Nieda caída, inconsciente
4. Saída norte — levou a lugar nenhum

═ CONTINUA ═

! SALA 1 — desço pelas raízes. O chão range.
  Os ossos crocam sob a bota.

> Acendo a tocha. Vejo símbolos na parede.

? Algo vivo aqui?
  2 → Não. Só os ossos.

> Atravesso pra SALA 2.

! A câmara ecoa meus passos. No centro, uma
  poça d'água escura. Ela não reflete a tocha.

> Encho um cantil. Só por precaução.

d: ??? não rolou nada — só anotei

> Vou pra SALA 3 — o Poço.

! O fedor de musgo podre sobe do buraco. Lá
  embaixo, vejo um vulto. Não se mexe.

> Desço pela corda. Silêncio.

d: STR CD 10 (segurar corda com mochila) → 12 ✅

" (Nieda) ...você veio. Achava que ninguém...

> Amarro a corda nela. "Sobe primeiro, depois
  a gente conversa."

♦ -1 Erva (Nieda tá ferida — dou uma Erva da
  Chama pra ela)

═══ SAÍDA ═══

! Vocês sobem. A árvore que respira começa a
  tremer mais forte. O chão racha.

> Grito "Gust!" — a rajada explode as raízes
  ao redor e nos arremessa pra borda. Nieda
  agarrada em mim.

♦ -1 magia (Gust gasta)

! Os dois caem do outro lado da cratera
  enquanto a clareira desaba.

═══════════════════════════════════════════
PÓS-SESSÃO
═══════════════════════════════════════════

♦ Corr +1 (inalei esporo no Poço)
♦ -1 Erva
♦ -1 Tocha
♦ -1 magia (Gust)

XP +120 (missão concluída)
// Nieda deve favorecimento pro Mosteiro agora

// próxima: pedir pra Prior me ensinar purificação
// antes de outra missão em zona Podre
```

---

## Como desenhar mapa no fluxo

No caderno, o mapa sai naturalmente — é só você desenhar. A notação aqui é ASCII, mas no papel você faz:

1. **Quadrado/retângulo** pra cada sala
2. **Número** dentro (1, 2, 3…)
3. **Linha** ligando salas adjacentes
4. **Legenda** abaixo com nome + observação de cada sala

No caderno real fica algo como:

```
     ┌────┐───┐
     │ 1  │   │ 2
     └────┘   │
       │      │
     ┌────┐   │
     │ 4  │───┘
     └────┘
       │
     ┌────┐
     │ 3  │
     └────┘

1. Entrada (fria, musgo)
2. Câmara central (eco)
3. Poço (Nieda)
4. Saída norte (desabou)
```

O mapa fica **dentro do fluxo narrativo**, no momento em que você entra no local. A linha horizontal `═══ MAPA ═══` separa a transição do mapa pra volta da narração. Depois você referencia as salas pelo número no diário (`! SALA 1...`).

---

## Regras que usei no exemplo

| Sinal | Onde aparece | Por quê |
|-------|-------------|---------|
| `!` | toda cena | delimita blocos de descrição |
| `>` | ação do personagem | separa o que eu faço do que acontece |
| `d:` | teste + resultado | resultado numérico + veredito (✅/❌) |
| `?` | pergunta + oráculo | resposta do dado + interpretação |
| `"` | diálogo | fala de NPC |
| `//` | preparação e notas | o que é meu, não do personagem |
| `♦` | recurso | qualquer gasto/ganho de recurso físico |
| `═══` | separador | muda de seção (pré → jogo → pós) |

> Pronto pra dormir. Quando acordar, me diz se quer que a gente documente uma sessão de verdade nesse formato, ou se quer ajustar o layout.
