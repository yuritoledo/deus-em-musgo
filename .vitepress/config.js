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
      { text: 'Game Loop Solo', link: '/Game Loop' },
      { text: 'Índice', link: '/⚰️ Index' },
    ],

    sidebar: [
      {
        text: 'Visão Geral',
        collapsed: false,
        items: [
          { text: 'Premissa', link: '/0 - Visão Geral/0.0 - Premissa' },
        ],
      },
      {
        text: 'Facções',
        collapsed: true,
        items: [
          { text: 'Index', link: '/1 - Facções/1.0 - Index das Facções' },
          { text: 'Mosteiro da Chama Perpétua', link: '/1 - Facções/1.1 - Mosteiro da Chama Perpétua' },
          { text: 'Devotos do Verde', link: '/1 - Facções/1.2 - Devotos do Verde' },
          { text: 'Seguidores da Nieda', link: '/1 - Facções/1.3 - Os Seguidores da Nieda' },
          { text: 'Emissários do Sol', link: '/1 - Facções/1.4 - Emissários do Sol' },
          { text: 'Mercadores do Norte', link: '/1 - Facções/1.5 - Mercadores do Norte' },
          { text: 'Capuz Vermelho', link: '/1 - Facções/1.6 - Capuz Vermelho' },
        ],
      },
      {
        text: 'Locais & Regiões',
        collapsed: true,
        items: [
          { text: 'Mapa da Região', link: '/2 - Locais & Regiões/2.0 - Mapa da Região' },
        ],
      },
      {
        text: 'Masmorras',
        collapsed: true,
        items: [
          { text: 'Gerador de Masmorras', link: '/3 - Masmorras/3.0 - Gerador de Masmorras' },
          { text: 'Mapa do Local', link: '/3 - Masmorras/3.1 - Mapa do Local (Método dos Dados)' },
          { text: 'Descrevendo a Sala', link: '/3 - Masmorras/3.2 - Descrevendo a Sala' },
        ],
      },
      {
        text: 'Bestiário',
        collapsed: true,
        items: [
          { text: 'Encontros por Região', link: '/4 - Bestiário/4.0 - Encontros por Região' },
          { text: 'Criaturas', link: '/4 - Bestiário/4.1 - Criaturas' },
        ],
      },
      {
        text: 'Mecânicas',
        collapsed: true,
        items: [
          { text: 'Encontros Aleatórios', link: '/5 - Mecânicas/5.1 - Encontros Aleatórios' },
          { text: 'Progressão & XP', link: '/5 - Mecânicas/5.2 - Progressão & XP' },
          { text: 'Reputação & Facções', link: '/5 - Mecânicas/5.3 - Reputação & Facções' },
        ],
      },
      {
        text: 'Oráculo Solo',
        collapsed: true,
        items: [
          { text: 'O Oráculo', link: '/6 - Oráculo Solo/6.1 - O Oráculo' },
          { text: 'Tabela de Encontros', link: '/6 - Oráculo Solo/6.2 - Tabela de Encontros' },
          { text: 'Rumores & Ganchos', link: '/6 - Oráculo Solo/6.3 - Rumores & Ganchos' },
          { text: 'Tesouros & Relíquias', link: '/6 - Oráculo Solo/6.4 - Tesouros & Relíquias' },
          { text: 'Resolução de Desafios', link: '/6 - Oráculo Solo/6.5 - Resolução de Desafios' },
          { text: 'Gerador de Missão', link: '/6 - Oráculo Solo/6.6 - Gerador de Missão' },
        ],
      },
      {
        text: 'Classes',
        collapsed: true,
        items: [
          { text: 'Druida', link: '/8 - Classes/Druida' },
        ],
      },
      {
        text: 'Guia de Jogo',
        collapsed: false,
        items: [
          { text: 'Game Loop (Solo)', link: '/Game Loop' },
          { text: 'Game Loop (Grupo)', link: '/Game Loop em Grupo' },
          { text: 'Regras Base (SRD)', link: '/regras-base' },
          { text: '⭐ Índice Geral', link: '/⚰️ Index' },
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
