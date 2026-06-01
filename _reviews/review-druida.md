# Revisão da Classe Druida

## 1. Consistência entre Arquivos

### 1.1 Tabela de Magias Conhecidas — Divergência Crítica

O **Druida.md** tem tabela de nv 1 a 10 com círculos 1 a 5. O **5.2** mostra só até nv 5 e círculo 3. A **Ficha.md** tem ranhuras até círculo 5.

**Problema:** Jogador lê Druida.md e acha que vai desbloquear círculo 4 no nv 7. Mestre lê 5.2 e sabe que o cap é 5. A tabela 1–10 é ruído — artefato de versão anterior com cap 10, ou antecipa conteúdo que não existe.

**→ Cortar a tabela do Druida.md nos níveis 6–10, ou adicionar nota "níveis 6+ apenas em campanhas estendidas".**

### 1.2 Ficha.md vs Druida.md — Pequenas Diferenças

| Elemento | Druida.md | Ficha.md |
|:---------|:----------|:---------|
| Fala Selvagem (animais) | "Falha = não coopera; retry só próximo amanhecer" | "próximo amanhecer **ou torpor do fungo**" |
| Forma Caçadora | Dura 5 rounds | Não menciona duração |
| Forma Primal | Dura 5 rounds | Não menciona duração |

- "Torpor do fungo" na Ficha.md não aparece no Druida.md.
- Ficha.md omite duração das formas Caçadora e Primal (5 rounds).

### 1.3 "1/sessão" vs "1/dia"

Ler Sinais é **1/sessão**. Talento resultado 2 diz **"+1 uso/dia de Ler Sinais"**.

**Sessão ≠ dia.** Numa sessão pode passar 1 dia, 3 dias, uma semana.

**→ Unificar como "1/sessão"** (ciclo do game loop reforça "sessão" como unidade).

---

## 2. Habilidades de Classe

### 2.1 Fala Selvagem — DC 12

- SAB +2 (típico nv 1): chance ≈ 55% (10+ no d20). Razoável.
- Castigo de "só amanhã" — justo, impede spam.
- **Fungos:** mecânica exclusivamente narrativa ("vibrações", "sentir direções vagas"). Não tem rolagem. Ficha.md coloca DC 12 como regra geral.

**→ Esclarecer se fungos exigem rolagem ou é automático.**

### 2.2 Ler Sinais — 1/sessão, escala 2d6

- **10+** (16.7%) — token de sorte. Muito forte (re-roll salva de falha crítica ou morte).
- **7-9** (41.7%) — direção vaga. Útil pra exploração solo.
- **6-** (41.7%) — nada.

Nenhuma outra classe tem habilidade similar. Sacerdote tem Augúrio (C2, gasta recurso). Druida ganha de graça 1/sessão. Diferencial temático forte.

### 2.3 Formas Selvagens — Progressão

| Forma | Nv | FOR | DES | CA | Dano | +atq | Duração | Especial |
|:------|:--:|:---:|:---:|:--:|:----:|:----:|:--------|:---------|
| Espreitadora | 1 | +1 | +1 | 11 | d4 | +1 | 1 turno/nv | Furtivo ou Rastreador |
| Caçadora | 3 | +2 | +1 | 13 | d6 | +2 | 5 rounds | Instintivo ou Movimento |
| Primal | 5 | +3 | +2 | 15 | d8 | +3 | 5 rounds | Vant FOR ou Rugido |

- **CA 11→13→15:** Nv 1 CA 11 é baixa (Goblin acerta com 11+). Nv 5 CA 15 é decente. Guerreiro nv 5 com placa+escudo tem CA 18–19. Druida sacrifica CA por utilidade.
- **Dano d4→d6→d8:** Nv 5, 1d8+3 (média 7.5) ≈ Guerreiro com espada longa d8+4 (8.5). Justo.
- **Bônus ataque:** Na Primal, FOR+3 e +3 atq = +6 total. Guerreiro nv 5 com FOR+4 + arma favorita = +5. Druida bate melhor **mas só por 5 rounds**. Equilibrado pelo custo de recurso.
- **Duração assimétrica:** Espreitadora dura 1 turno/nível (provavelmente muito tempo). Caçadora/Primal duram 5 rounds (combate). Provavelmente intencional (fraca=exploração, fortes=combate), mas não explicado.

**→ "1 turno/nível" é linguagem old-school ambígua. Trocar para "10 minutos/nível" ou número fixo de rounds.**

### 2.4 Rugido da Forma Primal

"DC 14 SAB ou fogem com medo por 1 rodada". SAB de monstros é baixa (+0 a +1). DC 14 é alta — maioria falha. Por 1 rodada é CC forte mas breve.

**Frequência não especificada.** Pode usar todo turno? Uma vez por transformação? Custa ação?

**→ Definir: "Uma vez por transformação" ou "gasta uma ação".**

---

## 3. Talentos (Tabela 2d6)

### 3.1 Tabela

| 2d6 | Prob | Talento |
|:---:|:----:|:--------|
| 2 | 2.8% | +1 uso/dia Ler Sinais **ou** conjurar 1 magia C1 transformado |
| 3–5 | 25% | +1 FOR **ou** +1 SAB |
| 6–8 | 44.4% | +1 testes de conjuração |
| 9–11 | 25% | +2 FOR **ou** +2 SAB **ou** vantagem atq+CA numa forma |
| 12 | 2.8% | Escolhe 2 opções **ou** +2 pontos distribuir |

### 3.2 Resultado 2 — Fraco

- **+1 uso de Ler Sinais:** Chance de 10+ é 16.7%. Um uso extra sobe pra ~30.5%. OK, mas situacional.
- **Conjurar C1 transformado:** Só Rajada de Vento e Emaranhar fazem sentido. Shillelagh exige arma. Memória da Pedra é toque. Nicho demais.

Comparado a outras classes:
- Guerreiro: +1 ataque OU +2 PV. Sempre útil.
- Sacerdote: vantagem expulsar OU +1 magia preparada. Forte.
- Mago: falha crítica vira normal OU +1 magia conhecida. Excelente.

**→ Sugestão: trocar "+1 uso de Ler Sinais" por "vantagem em testes de Fala Selvagem" ou algo que impacte mais sessões.**

### 3.3 Resultado 9-11 — "Vantagem atq+CA numa forma"

Vantagem em ataque ≈ +3.5 efetivo. Vantagem em CA (inimigos com desvantagem) ≈ -3.5 ataque inimigo.

Comparado a +2 FOR:
- +2 FOR = +2 atq, +2 dano, +2 testes. Fora de forma, FOR é inútil (usa SAB via Shillelagh).
- Vantagem = +3.5 atq + -3.5 defesa, **mas só em 1 forma e só transformado** (5 rounds/dia).

**Veredito:** Mais forte que +2 FOR (pra druida foco animal), mais fraca que +2 SAB (afeta conjuração + Fala Selvagem + Ler Sinais + Shillelagh). Escolha válida e temática. Não é desbalanceada.

### 3.4 O que Falta?

- **Nenhum talento afeta magia diretamente** além do +1 conjuração no 6–8. Druida conjurador puro (sem forma) só tem isso como melhoria. Poderia ter "+1 magia conhecida de C1" ou "reduz CD em 1 pra magias da natureza".
- **Nenhum talento de fungo/esporo.** Tema central do cenário ("Deus em Musgo", esporos, podridão) e zero talentos tocam nisso.

### 3.5 Resultado 12 — "+2 pontos para distribuir" é **trap**

+2 pontos (ex: +1 FOR +1 SAB) é estritamente pior que escolher duas do 9-11 (+2 FOR +2 SAB ou +2 FOR + vantagem). Só faria sentido pra distribuir em CON/DES — que druida não usa.

**→ Remover ou mudar para "+2 em quaisquer atributos" (permitindo +2 CON, por exemplo).**

---

## 4. Magias

### 4.1 Círculo 1 — Suficiente?

Druida nv 1 conhece **2 magias** (de 5 disponíveis + Forma Espreitadora grátis):

| Magia | Função | Qualidade |
|:------|:-------|:----------|
| Shillelagh | Ataque SAB, 3 rounds | Essencial pra druida que bate |
| Memória da Pedra | Investigação | Muito situacional |
| Rajada de Vento | CC leve (empurrão) | Útil, versátil |
| Emaranhar | CC forte (imobilizar), concentração | Excelente |

Pick provável: Shillelagh + Emaranhar. Lista curta o suficiente pra não ter paralisia. Comparado:
- Sacerdote: 2 magias C1 (Curar, Arma Sagrada, Escudo da Fé, Expulsar PV). Mais focado em suporte.
- Mago: 3 magias C1 + Míssil Mágico. Vantagem clara em quantidade.

**Veredito: 2 + 1 forma grátis é suficiente. Lista cobre combate, exploração e interação.**

### 4.2 Magias que Funcionam Transformado

Só 3 têm tag "Pode ser lançada enquanto transformado":
- Saliva Venenosa (C2) — buffa mordida
- Escudo de Carvalho (C2) — +2 CA
- Garra Trovejante (C3) — dano extra de trovão

**Problema:** O talento resultado 2 ("conjurar 1 magia C1 transformado") é quase inútil porque as magias de C1 não prestam em forma animal.

**→ Adicionar tag em mais magias de C1 (ex: Rajada de Vento), ou trocar o talento para "escolha 1 magia qualquer que você conhece para lançar transformado".**

### 4.3 Análise Específica

**Memória da Pedra (C1):** Completamente dependente de mestre/oráculo. Pode ser inútil em 80% das sessões. **→ Adicionar uso mecânico concreto (ex: "1 pergunta sim/não com vantagem sobre últimas 24h na área").**

**Evocar Espírito (C3):** Extremamente vago ("conceder vantagem", "impor desvantagem"). Difícil de arbitrar em jogo solo. **→ Definir 3-4 efeitos concretos.**

**Caixão de Terra (C3):** DC 16 FOR é alto pra Shadowdark (monstro médio tem FOR+2 a +3, precisa de 13-14 no dado). Alvo fica fora de combate por 1d6 rodadas (média 3.5). Muito forte. **→ Reduzir DC para 14 ou permitir teste todo turno.**

### 4.4 Progressão vs Outros Conjuradores

Se cap = 5: Druida empata com Sacerdote em círculo máximo mas conhece **mais** magias de C2 (3 vs 2) e C3 (3 vs 1). É o melhor conjurador divino no cap.

---

## 5. Desvantagens Comparativas

- **Dado de Vida d6:** Igual Sacerdote, pior que Guerreiro (d8), melhor que Mago/Ladrão (d4). Justo.
- **Armadura:** Couro + escudo = CA 13-14 nv 1. Sacerdote usa cota de malha (CA 16+). Druida é mais frágil, compensado pelas formas.
- **Sem cura:** Druida não tem acesso a cura alguma. Sacerdote tem Curar Ferimentos no C1. Se a intenção é druida não curar nesse cenário, devia ser declarado. Druida solo sem cura é desafio extra.
- **Armas:** Arco Curto e Foice. Sem Shillelagh ativo, depende de FOR pra bater corpo a corpo — e FOR é atributo secundário.

### 5.1 Sugestão: Bálsamo de Musgo

Adicionar 1 magia de cura temática:
> **Bálsamo de Musgo** — Círculo 1, druida. Toque, instantânea. Cura 1d4 PV. O musgo se desfaz em pó após a cura. Pode ser lançada enquanto transformado.

Fraca, temática, dá um respiro pro druida solo.

---

## 6. Gaps e Recomendações

### 6.1 Gaps

1. **Tabela de círculos 1–10 vs cap 5.** Inconsistência mais grave. Decisão de design pendente.
2. **Ler Sinais "1/sessão" vs talento "+1/dia".** Unificar.
3. **Duração "1 turno/nível" da Forma Espreitadora.** Ambíguo. Definir em rounds ou tempo real.
4. **Idioma "Esporos" (linha 10).** Mencionado mas nunca referenciado mecanicamente.
5. **Rugido da Forma Primal — frequência não especificada.**
6. **Ficha.md omite duração das formas Caçadora e Primal.**
7. **Nenhum talento ou mecânica de fungo/esporo** — tema central do cenário.

### 6.2 Recomendações Prioritárias

- Cortar tabela de níveis 6–10 do Druida.md (ou justificar cap estendido)
- Unificar "sessão" vs "dia" para "1/sessão"
- Definir "turno" no sistema (10 min? duração de cena?)
- Especificar frequência do Rugido (1/transformação)
- Adicionar 1 magia de cura temática (Bálsamo de Musgo)
- Adicionar 1 talento de fungo/podridão
- Adicionar tag "pode ser lançada transformado" em Rajada de Vento
- Trocar resultado 2 para usar Fala Selvagem em vez de +1 Ler Sinais
- Remover/melhorar opção "+2 pontos" no resultado 12
- Concretizar Evocar Espírito com 3-4 efeitos definidos

### 6.3 O que Tá Bom ✅

- Progressão das formas (CA, dano, bônus) bem escalonada
- Lista de magias enxuta e temática
- Talentos 3-5 e 6-8 sólidos e alinhados com outras classes
- Fala Selvagem como habilidade de exploração excelente pra jogo solo
- Design "formas são magias mas não contam no limite" é elegante
- 80% pronta — fundações sólidas

---

*Revisão gerada em 31/05/2026*
