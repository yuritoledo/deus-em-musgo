import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Deus em Musgo',
  description: 'Campanha solo de Shadowdark no cenário Deus em Musgo',
  cleanUrls: true,
  lastUpdated: true,

  ignoreDeadLinks: [
    /_templates/,
    /progressao-e-xp/,
    /encontros-aleatorios/,
    /tesouros-e-reliquias/,
  ],

  srcExclude: [
    '_templates.md',
    'AGENTS.md',
    '.vitepress/**',
    'node_modules/**',
  ],

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Game Loop Solo', link: '/game-loop' },
    ],
    sidebar: [
      {
        text: 'Visão Geral',
        items: [
          { text: 'Início', link: '/' },
        ],
      },
      {
        text: 'Facções',
        collapsed: true,
        items: [
          { text: 'Todas as Facções', link: '/faccoes/faccoes' },
        ],
      },
      {
        text: 'Locais & Regiões',
        collapsed: true,
        items: [
          { text: 'Mapa da Região', link: '/locais-e-regioes/mapa-da-regiao' },
        ],
      },
      {
        text: 'Masmorras',
        collapsed: true,
        items: [
          { text: 'Gerador de Masmorras', link: '/masmorras/gerador-de-masmorras' },
          { text: 'Mapa do Local', link: '/masmorras/mapa-do-local-metodo-dos-dados' },
          { text: 'Descrevendo a Sala', link: '/masmorras/descrevendo-a-sala' },
        ],
      },
      {
        text: 'Bestiário',
        collapsed: true,
        items: [
          { text: 'Encontros por Região', link: '/bestiario/encontros-por-regiao' },
        ],
      },
      {
        text: 'Mecânicas',
        collapsed: true,
        items: [
          { text: 'Reputação & Facções', link: '/mecanicas/reputacao-e-faccoes' },
          { text: '🧫 Corrupção', link: '/mecanicas/corrupcao' },
        ],
      },
      {
        text: 'Oráculo Solo',
        collapsed: true,
        items: [
          { text: 'O Oráculo', link: '/oraculo-solo/o-oraculo' },
          { text: 'Tesouros & Relíquias', link: '/oraculo-solo/tesouros-e-reliquias' },
          { text: 'Resolução de Desafios', link: '/oraculo-solo/resolucao-de-desafios' },
          { text: 'Gerador de Missão', link: '/oraculo-solo/gerador-de-missao' },
        ],
      },
      {
        text: 'Classes',
        collapsed: true,
        items: [
          { text: 'Druida', link: '/classes/druida' },
        ],
      },
      {
        text: 'Missões',
        collapsed: true,
        items: [
          { text: 'Todas as Missões', link: '/missoes/' },
          { text: 'Luz na Torre do Cemitério', link: '/missoes/luz-na-torre-do-cemiterio' },
          { text: 'Caça na Selva Pomar', link: '/missoes/caca-na-selva-pomar' },
          { text: 'Escolta da Bruxa', link: '/missoes/escolta-da-bruxa' },
        ],
      },
      {
        text: 'Guia de Jogo',
        collapsed: false,
        items: [
          { text: '⭐ Cheat Sheet', link: '/cheat-sheet' },
          { text: 'Game Loop (Solo)', link: '/game-loop' },
          { text: 'Game Loop (Grupo)', link: '/game-loop-em-grupo' },
          { text: 'Regras Base (SRD)', link: '/regras-base' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    outline: 'deep',

    footer: {
      message: 'Deus em Musgo — Uma campanha solo de Shadowdark',
    },
  },
})
