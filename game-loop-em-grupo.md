# game-loop — Deus em Musgo (Grupo)

> Adaptação do loop solo para mesa com narrador + grupo fixo (3-6 jogadores).
> Shadowdark puro. Nada aqui substitui regras do sistema — só organiza o fluxo.

---

## O Ciclo

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                   │
│   ENTRE SESSÕES:  1. PREPARAÇÃO (GM rola Ganchos + Mundo)        │
│                                                                   │
│   NA MESA:        2. GANCHO → 3. DESTINO → 4. VIAGEM             │
│                         ↓                            ↓            │
│                   7. DESCANSO ←─ 6. RETORNO ←─ 5. EXPLORAÇÃO      │
│                                                                   │
│   ENTRE SESSÕES:  8. THREAD + LOG                                 │
└──────────────────────────────────────────────────────────────────┘
```

---

## Entre Sessões — Preparação do GM

Antes de cada sessão, reserve 10-15 min pra preparar:

### 1. Ganchos (role 2-3)

Role na [tabela de Ganchos](oraculo-solo/rumores-e-ganchos.md) e anote resumidamente:

- **Rumor** — algo que ouviram no mosteiro
- **Missão** — pedido de facção ou NPC
- **Evento** — algo que aconteceu e chama atenção

Deixe anotado em 1-2 linhas cada. Leve pra mesa.

### 2. Thread de Narrativa

Se faz **3 sessões** desde a última thread (ou se uma facção agiu), role a [Thread de Narrativa](oraculo-solo/o-oraculo#6-threads-de-narrativa).

Isso move o mundo **entre sessões**. O grupo chega e descobre o que mudou.

### 3. O que NÃO preparar

- **Não role a dungeon inteira.** Use o [Gerador de Masmorras](masmorras/gerador-de-masmorras.md) sala a sala na mesa.
- **Não defina o resultado de negociações.** Deixe os dados decidirem.
- **Não planeje "enredo".** Só situação, facção e gancho. O grupo define o resto.

---

## Na Mesa — Passo a Passo

---

## 1. Gancho — O que o grupo veio fazer

**Não role.** Você apresenta os ganchos que preparou.

- Mostre 2-3 opções (rumor, missão, facção)
- Grupo discute e escolhe **UM**
- Se não tiverem gancho, role [Evento Inesperado](oraculo-solo/o-oraculo#4-evento-inesperado) e improvise a partir daí

> **Opção West Marches:** os jogadores decidem o destino **entre sessões** (WhatsApp, grupo de msg). Chegam na mesa já sabendo onde vão. Isso libera tempo de jogo.

---

## 2. Destino — Onde fica e o caminho

Role normalmente. As tabelas funcionam pra grupo igual.

### Zona (1d6)

| d6 | Zona | Perigo | Distância típica |
|:--:|:-----|:------:|:-----------------|
| 1–2 | **Tênue** — perto do mosteiro | Inseguro | Perto–Médio |
| 3–4 | **Tocada** — 1-3 dias de viagem | Arriscado | Médio–Longe |
| 5 | **Podre** — 3+ dias | Mortal | Longe–Distante |
| 6 | **Masmorra** — role [tema](masmorras/gerador-de-masmorras.md) | varia | — |

### Local específico (1d12)

Role 1d12 no tema do local ou escolha do [mapa conhecido](locais-e-regioes/mapa-da-regiao).

### Distância (1d4)

| d4 | Distância | Obstáculos |
|:--:|:----------|:----------:|
| 1 | **Perto** — horas | 0 |
| 2 | **Médio** — meio dia | 1 |
| 3 | **Longe** — 1 dia | 2 |
| 4 | **Distante** — 2+ dias | 3 |

Ao anunciar o destino, **descreva o perigo estimado**. O grupo decide se vai ou se prepara melhor.

---

## 3. Viagem — O caminho

Role **1d6 pra cada obstáculo** que a distância pedir:

| d6 | Obstáculo | Quem resolve |
|:--:|:----------|:-------------|
| 1 | **Terreno difícil** | Grupo todo. Quem tem maior FOR guia |
| 2 | **Encontro aleatório** | Role [tabela](mecanicas/encontros-aleatorios) |
| 3 | **Condição piora** | Zona sobe 1 nível — afeta todos |
| 4 | **Trilha perdida** | **1 personagem** faz SAB CD 12 (guia/scout). Os outros ajudam (vantagem) |
| 5 | **Indício** | Pista sobre o destino. Role [Ação+Tema](oraculo-solo/o-oraculo) |
| 6 | **Escolha** | Grupo decide: atalho perigoso ou caminho seguro mas longo |

> **Em grupo:** pergunte "quem vai na frente?" antes de rolar obstáculo. Isso define quem faz o teste.

---

## 4. Exploração — Dentro do local

A parte que mais muda do solo pro grupo. Precisa de procedimento.

### Ordem de Marcha

Definida no início da exploração. O grupo escolhe:

```
1ª fileira — [Personagem] — escoteiro, lanterna, quem abre portas
2ª fileira — [Personagem] — suporte, arqueiros, conjuradores
3ª fileira — [Personagem] — retaguarda, protege contra emboscada
```

- Quem está na **1ª fileira** faz testes de Percepção (armadilhas, passagens ocultas)
- Quem está na **retaguarda** nota perseguição e emboscada por trás
- **Tocha/luz:** quem carrega determina o alcance de visão do grupo

A ordem pode mudar a qualquer momento (gasta 1 turno pra rearranjar).

### Turnos de Exploração

Cada ação significativa = **1 turno** (aproximadamente 10 minutos):

| Ação | Turnos |
|:-----|:------:|
| Atravessar corredor, examinar sala | 1 |
| Forçar porta, desarmar armadilha | 1 |
| Combate | 1-5 |
| Descanso curto | 1 |
| Saquear sala completamente | 1 |
| Procurar passagem secreta | 1 |

- **Tocha queima 1 turno** a cada 6 turnos (1 hora de luz)
- Role [Encontro Aleatório](mecanicas/encontros-aleatorios) a cada **3 turnos** (não a cada sala)
- Role [Evento Inesperado](oraculo-solo/o-oraculo#4-evento-inesperado) no **início de cada cena nova**

### O Mapa

**Um jogador mapeia.** Papel quadriculado ou digital.

- Você descreve o que os personagens veem — **eles desenham**
- Não mostre o mapa "correto"
- Se errarem um teste de Percepção, o mapa fica incompleto

### Regra de Testes em Grupo

| Situação | Quem rola |
|:---------|:----------|
| **Armadilha** | Quem ativou (ou o scout, se estava procurando) |
| **Percepção** | Quem está prestando atenção. Os outros podem ajudar (dão vantagem a 1 rolagem) |
| **Furtividade** | **Cada um rola o seu.** Se alguém falhar, o grupo foi notado |
| **Conhecimento** | 1 pessoa rola. Se falhar, outro pode tentar (mas com CD +2) |
| **Força bruta** | Quem tem maior FOR faz o teste. Alguém forte ajuda (vantagem) |
| **Negociação** | 1 pessoa fala e rola. Os outros podem interromper (e atrapalhar) |

### Regra Opcional: Ajude ou Atrapalhe

- **Ajudar:** um segundo personagem pode dar vantagem em 1 teste por cena
- **Atrapalhar:** se dois querem fazer a mesma coisa ao mesmo tempo, os dois rolam separado e fica com o **pior** resultado

---

## 5. Resolução — Combate e Desafios

### Combate

Shadowdark padrão. Nada muda:

| Regra | Valor |
|:------|:------|
| Iniciativa | d20 + DES (maior age primeiro) |
| Ataque | d20 + bônus da arma vs CA |
| Dano | dado da arma + FOR (corpo a corpo) |
| CA | 10 + armadura + escudo + DES |
| Crítico | 20 natural = dano máximo |

**Iniciativa em grupo:** cada personagem rola separado. Monstros rolam uma vez só (todos no mesmo turno).

### Resolução sem combate

Use a [Resolução de Desafios](oraculo-solo/resolucao-de-desafios):

1. **Situação** → o que está na frente do grupo
2. **Ação** → o que **cada um** faz
3. **Resultado** → item certo = sucesso automático. Abordagem esperta = Oráculo de Custo. Arriscou = Teste de Atributo

### Regra Opcional: Morale

Quando os inimigos estão com metade ou menos dos PV, ou perderam o líder:

- Role 1d20. Se **≤ 12**, eles fogem ou se rendem
- Isso acelera combate e evita "matar até o último HP"

---

## 6. Retorno — Voltar ao mosteiro

Mesma distância da ida, caminho conhecido.

- Role **metade dos obstáculos** (arredondado pra baixo)
- Se a missão foi concluída, role **Recompensa** ([Tesouros](oraculo-solo/tesouros-e-reliquias))

**Se falharam ou abandonaram:** role consequência — a facção envolvida perde 1 passo de progresso ou o deus avança em alguma área.

---

## 7. Descanso — Entre missões

No mosteiro ou abrigo seguro, **cada personagem**:

1. **Cura total** — recupera todos os PV
2. **Magias** — prepara nova seleção
3. **Tesouro → XP** — 1 PO = 1 XP ([tabela](mecanicas/progressao-e-xp))
4. **Level up?** — se tiver XP suficiente

### Reputação

Ajuste **por personagem** ou **por grupo** (decida na sessão zero):

- Por personagem: conflito interno se alguém queimou ponte com facção que o resto precisa
- Por grupo: mais simples, menos granular

Use a [tabela de reputação](mecanicas/reputacao-e-faccoes):

| Situação | Ajuste |
|:---------|:------:|
| Ajudou a facção ou protegeu interesses dela | +1 a +3 |
| Matou membro ou sabotou plano | -2 a -5 |
| A partir de ±5 | Missão especial disponível |
| Em -10 | Hostil — atacam à vista |

---

## Entre Sessões — Encerramento

Depois da sessão:

1. **Role Thread de Narrativa** se for a 3ª sessão desde a última thread
2. **Atualize o mapa do mundo** com o que o grupo descobriu
3. **Anote reputação** alterada
4. **Prepare 2-3 ganchos** pra próxima sessão

---

## Sessão Zero — Checklist

Antes da primeira sessão em grupo, alinhe:

- [ ] **O jogo é mortal.** Personagem morre de verdade. Leva a sério.
- [ ] **Exploração é o foco.** Nem todo encontro é combate. Negociar, fugir, enganar são opções válidas.
- [ ] **Tesouro = XP.** O objetivo não é matar tudo que se move.
- [ ] **Ordem de marcha.** Definam uma padrão pra não discutir toda sala.
- [ ] **Quem mapeia.** Escolham 1 jogador responsável pelo mapa.
- [ ] **Rolagens.** Defina se vai de "quem tem maior atributo rola" ou "cada um rola seu teste".
- [ ] **Reputação.** Por personagem ou por grupo? (Decida antes de afetar a primeira facção.)

---

## Referência Rápida

### Ordem de Marcha

```
1° fileira: scout / tanque / luz
2° fileira: DPS / suporte / conjuradores
3° fileira: retaguarda
```

### Turnos (1 turno ≈ 10 min)

| Evento | Turnos |
|:-------|:------:|
| Atravessar sala/corredor | 1 |
| Examinar, forçar porta, desarmar | 1 |
| Combate típico | 1-5 |
| Descanso curto | 1 |
| Saquear | 1 |

### Perigo por Zona

| Zona | Teste de Encontro |
|:-----|:-----------------:|
| Tênue | 3+ no d6 |
| Tocada | 2+ |
| Podre | 1+ |

Role 1d6 a cada **3 turnos**. Se igual ou maior, encontro.

### Oráculo Sim/Não (pra GM)

| d6 | Resposta |
|:--:|:---------|
| 1 | Não, e... |
| 2 | Não |
| 3 | Não, mas... |
| 4 | Sim, mas... |
| 5 | Sim |
| 6 | Sim, e... |

### Oráculo de Ação + Tema (pra GM improvisar)

| d6 | Ação | d6 | Tema |
|:--:|:-----|:--:|:-----|
| 1 | Avançar / Atacar | 1 | Vento / Podridão |
| 2 | Recuar / Proteger | 2 | Musgo / Esporo |
| 3 | Revelar / Perguntar | 3 | Memória / Visão |
| 4 | Corromper / Dissolver | 4 | Fogo / Chama |
| 5 | Florescer / Expandir | 5 | Osso / Apodrecido |
| 6 | Consumir / Silenciar | 6 | O Deus / O Pulso |

### Morale (opcional)

Inimigos com ≤ 50% PV ou sem líder → d20 ≤ 12 = fogem ou se rendem.

---

> *Veja também: [game-loop Solo](game-loop.md) (versão original) · [Oráculo](oraculo-solo/o-oraculo) · [Masmorras](masmorras/gerador-de-masmorras.md) · [Progressão](mecanicas/progressao-e-xp)*
