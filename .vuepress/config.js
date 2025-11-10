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
            {
              text: 'Заявки',
              children: [
                '/docs/Как создать заявку на прием',
                '/docs/Как создать безномерную заявку на выдачу',
              ]
            },
            {
              text: 'Прием/Выдача',
              children: [
                '/docs/Как принять контейнер из карточки',
                '/docs/Как выдать контейнер со страницы пропусков',
              ]
            },
            {
              text: 'Ремонт',
              children: [
                '/docs/Как оценить ремонтные работы',
                '/docs/Как отклонить ремонт',
              ]
            }
          ]
        }
      ]
    },
    
    sidebarDepth: 2
  }),

  bundler: viteBundler()
}
