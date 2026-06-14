# Reconhecimento de Terreno

Reconhecimento de terreno é uma missão aberta: você vai na frente, mapeia o que tem, volta com informação.

> **Resolução:** Progresso por dados. Sem mapa de masmorra. Cada turno de exploração ≈ 30 min in-game.

---

## Setup

### Objetivo (d3)

Role ou escolha:

| d3 | Objetivo |
|:--:|:---------|
| 1 | **Mapear avanço do musgo** — fronteira do deus se expandiu. Precisam saber até onde chegou, onde o solo ainda é seguro |
| 2 | **Localizar acampamento perdido** — patrulha ou caravana não voltou. Última posição conhecida é na direção X. Achar o acampamento e descobrir o que aconteceu |
| 3 | **Caminho pra facção** — uma facção quer expandir operação mas não sabe rota segura. Você vai na frente, mapeia terreno, perigos e recursos |

### NPC Companheiro (d3)

Um acompanhante vai com você. Cada um tem **3 PV** e um bônus específico. Se cair a 0 PV, desmaia — você perde o bônus até estabilizar ou recuar.

| d3 | NPC | Origem | Bônus | PV |
|:--:|:----|:-------|:------|:--:|
| 1 | **Crispim, o Coletor** | Devotos do Verde | +1d em **Indício e Recurso** — conhece flora, acha água e abrigo | 3 |
| 2 | **Isha, a Caçadora** | Seguidores da Nieda | +1d em **Obstáculo e Encontro** — guia por terreno difícil, reage a emboscada | 3 |
| 3 | **Greta, a Mercenária** | Mercadores do Norte | +1d em **Encontro e Clareira** — briga bem, visão estratégica do terreno | 3 |

### Zona

Use a tabela do [game-loop](../game-loop.md#2-destino---onde-fica) (Tênue, Tocada, Podre, Coração). A zona determina o **alvo de Progresso** e o **perigo**:

| Zona | Alvo | Perigo | Modificador |
|:-----|:----:|:------:|:------------|
| Tênue | 12 | Inseguro | — |
| Tocada | 20 | Arriscado | — |
| Podre | 30 | Mortal | NPC dá +2 (não +1), mas encontros a cada turno |
| Coração | 40 | Crítico | Só com proteção contra esporos. Falha = Corrupção |

---

## O Ciclo do Recon

Cada turno de exploração você role **2d6 separados**:

| d6 | Situação | Efeito |
|:--:|:---------|:-------|
| 1 | **Encontro** | Role na tabela de Encontros. Resolve antes de somar Progresso |
| 2 | **Obstáculo** | Terreno impossível — precisa contornar (perde 1 turno, sem Progresso) |
| 3 | **Indício** | Pista sobre o deus, fauna local ou atividade de facção |
| 4 | **Clareira / ponto alto** | Visão privilegiada do terreno. Soma +2 de Progresso |
| 5 | **Recurso** | Água, abrigo, item útil ou terreno fértil. Anota no inventário |
| 6 | **Nada notável** | Segue em frente sem percalços |

**Progresso:** Some os dois dados **se não for Encontro**. Se for, resolve o encontro primeiro, depois soma.

> O bônus do NPC se aplica quando o resultado do dado individual corresponde à especialidade dele. Ex: Crispim vê "3" (Indício) → soma 1d extra no Progresso daquele turno.

### Encontros (1d6)

Role quando sair **1** nas situações:

| d6 | Encontro | Efeito |
|:--:|:---------|:-------|
| 1 | **Fera da podridão** — besta mutada surge do musgo | Combate. Se vencer, coleta 1d4 **carne corrupta** (item de troca) |
| 2 | **Névoa de esporos** — vento traz nuvem tóxica | CON CD 12 ou perde 1 turno (tosse, visão turva). Terreno alto evita |
| 3 | **Sobrevivente hostil** — alguém que enlouqueceu na solidão | Combate OU diálogo (reação 2d6). Se ignorar, pode perseguir |
| 4 | **Fenda no chão** — solo cede, raízes vivas se agitam | DES CD 10 ou cai (perde 1 item). Se passa, acha passagem oculta (+2 Progresso) |
| 5 | **Bando de cães-do-musgo** — matilha farejando comida | Combate em grupo. Aparecem em 1d4 rodadas se ficou parado |
| 6 | **Rastro de facção rival** — acampamento recente ou pegadas | Escolhe: segue o rastro (informação extra) ou desvia (perde 1 turno) |

---

## Resolução

### Sucesso — Progresso ≥ alvo

Você completa o reconhecimento. Role ou escolha o que o mapa revela:

| d3 | O mapa revela... |
|:--:|:-----------------|
| 1 | **Rotas seguras** — viagens futuras pela zona não precisam rolar obstáculos |
| 2 | **Pontos de interesse** — abrigos, água, recursos. Vantagem em qualquer ação na zona |
| 3 | **Descoberta extra** — ruína, acampamento inimigo ou local de poder. A facção recompensa com XP ou recurso extra |

O mapa em si já vale como tesouro da missão.

### Falha — Recuou ou o NPC morreu

- Se recuar antes do alvo, role **metade do Progresso atual** como informação útil
- Se o NPC morreu, a facção envolvida perde 1 passo de reputação
- Se abandonou a missão, role [consequência](../game-loop.md#6-retorno---voltar-pra-casa) normal

---

## Combinando com o Game Loop

1. **Gancho + Destino + Viagem** — use as regras normais do [game-loop](../game-loop.md)
2. **Chegando na zona** — inicia o ciclo de Recon acima
3. **Retorno** — metade dos obstáculos (caminho conhecido). Se completou, leva o mapa
4. **Descanso** — normal. NPCs feridos se recuperam em 1 descanso no Mosteiro
