import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Deus em Musgo',
  description: 'Campanha solo de Shadowdark no cenário Deus em Musgo',
  cleanUrls: true,
  lastUpdated: true,

  srcExclude: [
    '_reviews/**',
    '_templates/**',
    'AGENTS.md',
    '.vitepress/**',
    'node_modules/**',
  ],

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Game Loop Solo', link: '/game-loop' },
      { text: 'Índice', link: '/indice-geral' },
    ],

    sidebar: [
      {
        text: 'Visão Geral',
        collapsed: false,
        items: [
          { text: 'Premissa', link: '/visao-geral/premissa' },
        ],
      },
      {
        text: 'Facções',
        collapsed: true,
        items: [
          { text: 'Index', link: '/faccoes/index-das-faccoes' },
          { text: 'Mosteiro da Chama Perpétua', link: '/faccoes/mosteiro-da-chama-perpetua' },
          { text: 'Devotos do Verde', link: '/faccoes/devotos-do-verde' },
          { text: 'Seguidores da Nieda', link: '/faccoes/os-seguidores-da-nieda' },
          { text: 'Emissários do Sol', link: '/faccoes/emissarios-do-sol' },
          { text: 'Mercadores do Norte', link: '/faccoes/mercadores-do-norte' },
          { text: 'Capuz Vermelho', link: '/faccoes/capuz-vermelho' },
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
          { text: 'Criaturas', link: '/bestiario/criaturas' },
        ],
      },
      {
        text: 'Mecânicas',
        collapsed: true,
        items: [
          { text: 'Encontros Aleatórios', link: '/mecanicas/encontros-aleatorios' },
          { text: 'Progressão & XP', link: '/mecanicas/progressao-e-xp' },
          { text: 'Reputação & Facções', link: '/mecanicas/reputacao-e-faccoes' },
        ],
      },
      {
        text: 'Oráculo Solo',
        collapsed: true,
        items: [
          { text: 'O Oráculo', link: '/oraculo-solo/o-oraculo' },
          { text: 'Tabela de Encontros', link: '/oraculo-solo/tabela-de-encontros' },
          { text: 'Rumores & Ganchos', link: '/oraculo-solo/rumores-e-ganchos' },
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
        text: 'Guia de Jogo',
        collapsed: false,
        items: [
          { text: 'Game Loop (Solo)', link: '/game-loop' },
          { text: 'Game Loop (Grupo)', link: '/game-loop-em-grupo' },
          { text: 'Regras Base (SRD)', link: '/regras-base' },
          { text: '⭐ Índice Geral', link: '/indice-geral' },
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
