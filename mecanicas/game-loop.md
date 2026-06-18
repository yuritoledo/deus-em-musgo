# game-loop — Deus em Musgo

> Guia rápido pra jogar solo. Cada sessão segue esse ciclo. Role, interprete, avance.

---

## O Ciclo

```
┌─────────────────────────────────────────────────────┐
│                                                       │
│   1. GANCHO   2. DESTINO   3. VIAGEM   4. EXPLORAÇÃO │
│       ↑                                  ↓           │
│   7. DESCANSO ←─── 6. RETORNO ←─── 5. RESOLUÇÃO     │
│                                                       │
└─────────────────────────────────────────────────────┘
```

Cada sessão = uma volta completa. Algumas voltas são curtas (missão perto, volta no mesmo dia). Outras levam dias.

---

## 1. Gancho — Por que sair?

Role ou escolha um motivo pra sair do mosteiro:

**1d6:**
| d6  | Gancho |
|:---:|:--------|
| 1–2 | **Rumor** — algo que ouviu ([Rumores](../oraculo-solo/gerador-de-missao.md)) |
| 3–4 | **Missão** — uma facção ou NPC pediu ajuda ([Ganchos de Missão](../oraculo-solo/gerador-de-missao.md#ganchos-missao)) |
| 5   | **Facção** — alguém da sua própria facção tem uma tarefa ([Ganchos de Facção](../oraculo-solo/gerador-de-missao.md#ganchos-faccao)) |
| 6   | **Combine** — role duas vezes, junta os resultados |

Se não tiver gancho claro, role **[Evento Inesperado](../oraculo-solo/o-oraculo.md#2-evento-inesperado)** e improvise a partir daí.

---

## 2. Destino — Onde fica?

### Zona (1d8)

| d8  | Zona                                                                                |  Perigo   | Distância típica |
| :-: | :---------------------------------------------------------------------------------- | :-------: | :--------------- |
| 1–2 | **Tênue** — perto do mosteiro                                                       | Inseguro  | Perto–Médio      |
| 3–4 | **Tocada**                                                                          | Arriscado | Médio–Longe      |
|  5  | **Podre**                                                                           |  Mortal   | Longe–Distante   |
|  6  | **Coração**                                                                         |  Crítico  | Distante+        |
| 7–8 | **Masmorra** — role [tema](../masmorras/gerador-de-masmorras.md) |   Varia   | —                |

### Local específico (1d12)

Role 1d12 no tema do local ([Gerador de Masmorras](../masmorras/gerador-de-masmorras.md)) ou escolha do [mapa conhecido](../locais-e-regioes/locais-detalhados.md#mapa-regiao).

### Distância (1d4)

| d4  | Distância              | Viagens  |
| :-: | :--------------------- | :--------: |
|  1  | **Perto** — horas      |     0      |
|  2  | **Médio** — meio dia   |     1      |
|  3  | **Longe** — 1 dia      |     2      |
|  4  | **Distante** — 2+ dias |     3      |

---

## 3. Viagem — O caminho {#viagem}

Role **1d6 na tabela de Viagem** para cada ponto de distância:

| d6 | Viagem |
|:--:|:----------|
| 1 | **Terreno difícil** — FOR CD 10 ou perde 1 recurso |
| 2 | **Encontro aleatório** — role tabela |
| 3 | **Condição piora** — zona sobe 1 nível |
| 4 | **Trilha perdida** — SAB CD 12 ou chega em local diferente |
| 5 | **Indício** — pista sobre o que te espera |
| 6 | **Escolha** — atalho perigoso ou caminho seguro mas longo |

---

## 4. Exploração — Dentro do local

1. **Gere o local:** use o [Gerador de Masmorras](../masmorras/gerador-de-masmorras.md) ou [Mapa por Dados](../masmorras/mapa-do-local-metodo-dos-dados.md)
2. **Descreva cada sala** com [Descrevendo a Sala](../masmorras/descrevendo-a-sala.md)
3. **Role encontro** a cada sala ou corredor relevante (tabela)
4. **Role [Evento Inesperado](../oraculo-solo/o-oraculo.md#2-evento-inesperado)** no início de cada cena nova

### Quando encontrar algo ou alguém

| Situação | O que fazer |
|:---------|:------------|
| Pergunta sim/não | [Oráculo Sim/Não](../oraculo-solo/o-oraculo.md#1-oráculo-simnão) (ajuste pela certeza) |
| Pergunta aberta (quem/onde/como/por quê) | Improvise a partir do contexto |
| "O que acontece agora?" | Improvise a partir do contexto |
| Reação de NPC | [Tabela de Reação](../oraculo-solo/o-oraculo.md#3-reações--encontros) + modificador de reputação |
| Desafio físico/social | Resolução de Desafios |
| Quer agir com cautela/bonus | Gaste um **Token de Sorte** (re-role 1 d20) |

---

## 5. Resolução — O conflito

### Combate (Shadowdark padrão)

| Regra | Valor |
|:------|:------|
| Iniciativa | d20 + DES (maior age primeiro) |
| Ataque | d20 + bônus da arma vs CA do alvo |
| Dano | dado da arma + FOR (corpo a corpo) ou sem modificador (distância) |
| CA | 10 + armadura + escudo + DES (limitado pela armadura) |
| PV | máximo por nível, sem PV temporário |
| Cura | Descanso longo (seguro) recupera 1d3+CON. Descanso em abrigo recupera tudo. |
| Crítico | 20 natural = dano máximo |

**NPCs** reagem conforme [Reação](../oraculo-solo/o-oraculo.md#3-reações--encontros) antes do combate. Nem todo encontro é briga.

### Resolução sem combate

Use a Resolução de Desafios para armadilhas, negociações, exploração:

1. **Situação** → o que está na sua frente
2. **Ação** → o que você faz
3. **Resultado:**
   - Item certo = ✅ sucesso automático
   - Abordagem esperta = 🎲 Oráculo de Custo
   - Arriscou = 🎲 Teste de Atributo
   - Ignorou = 💥 consequência

---

## 6. Retorno — Voltar pra casa

Na volta, a distância é a **mesma** e você já conhece o caminho:

- Role **metade dos testes de viagem** (arredondado pra baixo)
- Se o gancho foi completado, role **Recompensa** ([Tesouros](../oraculo-solo/o-oraculo.md#7-tesouros--relíquias))

Se falhou ou abandonou: role **consequência** — a facção envolvida perde 1 passo de progresso ou o deus avança em alguma área.

---

## 7. Descanso — Entre missões

### No mosteiro ou abrigo seguro:

1. **Cura total** — recupera todos os PV
2. **Magias** — prepara nova seleção pro próximo dia
3. **Tesouro → XP** — 1 PO = 1 XP (tabela)
4. **Level up?** — se tiver XP suficiente, sobe de nível (cap 5)
5. **Reputação** — ajuste conforme o que aconteceu na sessão ([5.3](reputacao-e-faccoes.md))
6. **Corrupção** — se tem pontos de Corrupção, role os efeitos do tier atual ([mecanica completa](corrupcao.md))

### A cada 3 sessões, role [Thread Narrativa](../oraculo-solo/o-oraculo.md#4-threads-de-narrativa):

O mundo se move enquanto você descansa. Facções agem, o deus se manifesta, segredos emergem.

Encontros durante a missão seguem as regras de encontros aleatórios por zona.

---
*Veja também: [Oráculo Completo](../oraculo-solo/o-oraculo.md) · Progressão · [Reputação](reputacao-e-faccoes.md) · Encontros Aleatórios · Resolução de Desafios · [Corrupção](corrupcao.md)
