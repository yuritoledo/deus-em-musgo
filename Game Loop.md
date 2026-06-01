# Game Loop — Deus em Musgo

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
| d6 | Gancho |
|:--:|:--------|
| 1–2 | **Rumor** — algo que ouviu ([Rumores](6%20-%20Oráculo%20Solo/6.3%20-%20Rumores%20&%20Ganchos.md)) |
| 3–4 | **Missão** — uma facção ou NPC pediu ajuda (mesmo arquivo, Ganchos de Missão) |
| 5 | **Facção** — alguém da sua própria facção tem uma tarefa (Ganchos de Facção) |
| 6 | **Combine** — role duas vezes, junta os resultados |

Se não tiver gancho claro, role **[Evento Inesperado](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md#4-evento-inesperado)** e improvise a partir daí.

---

## 2. Destino — Onde fica?

### Zona (1d6)

| d6 | Zona | Perigo | Distância típica |
|:--:|:-----|:------:|:-----------------|
| 1–2 | **Tênue** — perto do mosteiro | Inseguro | Perto–Médio |
| 3–4 | **Tocada** — 1-3 dias de viagem | Arriscado | Médio–Longe |
| 5 | **Podre** — 3+ dias | Mortal | Longe–Distante |
| 6 | **Masmorra** — role [tema](3%20-%20Masmorras/3.0%20-%20Gerador%20de%20Masmorras.md) | varia | — |

### Local específico (1d12)

Role 1d12 no tema do local ([Gerador de Masmorras](3%20-%20Masmorras/3.0%20-%20Gerador%20de%20Masmorras.md)) ou escolha do [mapa conhecido](2%20-%20Locais%20&%20Regiões/2.0%20-%20Mapa%20da%20Região.md).

### Distância (1d4)

| d4 | Distância | Viagem | Obstáculos |
|:--:|:----------|:-------|:----------:|
| 1 | **Perto** — horas | Sem teste de encontro | 0 |
| 2 | **Médio** — meio dia | Role vento + 1 obstáculo | 1 |
| 3 | **Longe** — 1 dia | Role vento + 2 obstáculos | 2 |
| 4 | **Distante** — 2+ dias | Role vento + 3 obstáculos | 3 |

---

## 3. Viagem — O caminho

### Vento (1d6)

Role vento e [direção](5%20-%20Mecânicas/Mecânica%20de%20Vento.md):

| d6 | Vento | Efeito |
|:--:|:------|:-------|
| 1–2 | **Calmaria** | Nada |
| 3–4 | **Forte** | Movimento custa +1/2. Percepção auditiva com desvantagem |
| 5–6 | **Tempestade** | FOR CD 12 pra mover. Tochas apagam. Se zona Podre/Coração: Ciclo do Podre |

### Obstáculos (1d6 por obstáculo)

Role para cada obstáculo que a distância pedir:

| d6 | Obstáculo |
|:--:|:-----------|
| 1 | **Terreno difícil** — FOR CD 10 ou perde 1 recurso |
| 2 | **Encontro aleatório** — role [tabela](5%20-%20Mecânicas/5.1%20-%20Encontros%20Aleatórios.md) |
| 3 | **Condição piora** — vento ou zona sobe 1 nível |
| 4 | **Trilha perdida** — SAB CD 12 ou chega em local diferente |
| 5 | **Indício** — pista sobre o que te espera (role [Ação+Tema](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md#2-oráculo-de-ação--tema)) |
| 6 | **Escolha** — atalho perigoso ou caminho seguro mas longo |

---

## 4. Exploração — Dentro do local

1. **Gere o local:** use o [Gerador de Masmorras](3%20-%20Masmorras/3.0%20-%20Gerador%20de%20Masmorras.md) ou [Mapa por Dados](3%20-%20Masmorras/3.1%20-%20Mapa%20do%20Local%20(Método%20dos%20Dados).md)
2. **Descreva cada sala** com [Descrevendo a Sala](3%20-%20Masmorras/3.2%20-%20Descrevendo%20a%20Sala.md)
3. **Role encontro** a cada sala ou corredor relevante ([tabela](5%20-%20Mecânicas/5.1%20-%20Encontros%20Aleatórios.md))
4. **Role [Evento Inesperado](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md#4-evento-inesperado)** no início de cada cena nova

### Quando encontrar algo ou alguém

| Situação | O que fazer |
|:---------|:------------|
| Pergunta sim/não | [Oráculo Sim/Não](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md#1-oráculo-simnão) (ajuste pela certeza) |
| Pergunta aberta (quem/onde/como/por quê) | [Oráculo de Foco](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md#3-oráculo-de-foco-perguntas-abertas) |
| "O que acontece agora?" | [Ação + Tema](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md#2-oráculo-de-ação--tema) |
| Reação de NPC | [Tabela de Reação](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md#5-reações--encontros) + modificador de reputação |
| Desafio físico/social | [Resolução de Desafios](6%20-%20Oráculo%20Solo/6.5%20-%20Resolução%20de%20Desafios.md) |
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

**NPCs** reagem conforme [Reação](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md#5-reações--encontros) antes do combate. Nem todo encontro é briga.

### Resolução sem combate

Use a [Resolução de Desafios](6%20-%20Oráculo%20Solo/6.5%20-%20Resolução%20de%20Desafios.md) para armadilhas, negociações, exploração:

1. **Situação** → o que está na sua frente
2. **Ação** → o que você faz
3. **Resultado:**
   - Item certo = ✅ sucesso automático
   - Abordagem esperta = 🎲 Oráculo de Custo
   - Arriscou = 🎲 Teste de Atributo
   - Ignorou = 💥 consequência

---

## 6. Retorno — Voltar pra casa

Na volta, a distância é a **mesma** (você já conhece o caminho, mas o vento e obstáculos ainda estão lá):

- Role **vento** normalmente
- Role **metade dos obstáculos** (arredondado pra baixo)
- Se o gancho foi completado, role **Recompensa** ([Tesouros](6%20-%20Oráculo%20Solo/6.4%20-%20Tesouros%20&%20Relíquias.md))

Se falhou ou abandonou: role **consequência** — a facção envolvida perde 1 passo de progresso ou o deus avança em alguma área.

---

## 7. Descanso — Entre missões

### No mosteiro ou abrigo seguro:

1. **Cura total** — recupera todos os PV
2. **Magias** — prepara nova seleção pro próximo dia
3. **Tesouro → XP** — 1 PO = 1 XP ([tabela](5%20-%20Mecânicas/5.2%20-%20Progressão%20&%20XP.md))
4. **Level up?** — se tiver XP suficiente, sobe de nível (cap 5)
5. **Reputação** — ajuste conforme o que aconteceu na sessão ([5.3](5%20-%20Mecânicas/5.3%20-%20Reputação%20&%20Facções.md))

### A cada 3 sessões, role [Thread Narrativa](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md#6-threads-de-narrativa):

O mundo se move enquanto você descansa. Facções agem, o deus se manifesta, segredos emergem.

### Tabela de Reputação (resumo)

| Situação | Ajuste |
|:---------|:------:|
| Ajudou a facção ou protegeu interesses dela | +1 a +3 |
| Matou membro ou sabotou plano | -2 a -5 |
| A partir de ±5 | Missão especial disponível |
| Em -10 | Hostil — atacam à vista |

---

## Referência Rápida

### Oráculo Sim/Não (1d6)

| d6 | Resposta |
|:--:|:---------|
| 1 | Não, e... |
| 2 | Não |
| 3 | Não, mas... |
| 4 | Sim, mas... |
| 5 | Sim |
| 6 | Sim, e... |

**Mods de Certeza:** Certeza=melhor 2d6 · Provável=descarta menor · Improvável=descarta maior · Impossível=pior 2d6.

### Reação (1d6 + mod)

| d6 | Reação |
|:--:|:-------|
| 1 | Hostil |
| 2 | Desconfiado |
| 3 | Neutro |
| 4 | Aberto |
| 5 | Amigável |
| 6 | Aliado |

Mod = reputação da facção / 10 (arredondado). Ex: +7 → +1.

### Perigo por Zona

| Zona | Teste de Encontro |
|:-----|:-----------------:|
| Tênue (seguro) | 3+ no dado |
| Tocada (médio) | 2+ |
| Podre (mortal) | 1+ |

Role 1d6 a cada mudança de sala ou horário. Se igual ou maior que o valor, encontro.

---

*Veja também: [Ficha](⚰️%20Ficha.md) · [Oráculo Completo](6%20-%20Oráculo%20Solo/6.1%20-%20O%20Oráculo.md) · [Progressão](5%20-%20Mecânicas/5.2%20-%20Progressão%20&%20XP.md) · [Reputação](5%20-%20Mecânicas/5.3%20-%20Reputação%20&%20Facções.md)*
