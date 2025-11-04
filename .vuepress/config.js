import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  base: '/tos_guide/',
  
  lang: 'ru-RU',
  title: 'Steiza',
  description: 'Инструкции по работе с системой Steiza',

  theme: defaultTheme({
    navbar: [
      { text: 'Главная', link: '/' },
      { text: 'Инструкции', link: '/docs/' }
    ],
    
    sidebar: {
      '/docs/': [
        {
          text: 'Инструкции',
          children: [
            '/docs/',
            '/docs/Как добавить клиента в систему'
          ]
        }
      ]
    },
    
    sidebarDepth: 2
  }),

  bundler: viteBundler()
}
