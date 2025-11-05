import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  base: '/tos_guide/',
  
  lang: 'ru-RU',
  title: 'Steiza',
  description: 'Инструкции по работе с системой Steiza',

  theme: defaultTheme({
    colorMode: 'light',
    colorModeSwitch: false,
    
    navbar: [
      { text: 'Главная', link: '/' },
      { text: 'Инструкции', link: '/docs/' }
    ],
    
    sidebar: {
      '/docs/': [
        {
          text: 'Инструкции',
          children: [
            '/docs/Как добавить клиента в систему',
            '/docs/Как создать заявку на прием',
            '/docs/Как создать безномерную заявку на выдачу',
            '/docs/Как принять контейнер из карточки',
            '/docs/Как выдать контейнер со страницы пропусков',
          ]
        }
      ]
    },
    
    sidebarDepth: 2
  }),

  bundler: viteBundler()
}
