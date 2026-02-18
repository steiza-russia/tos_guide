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
      { text: 'Для клиентов', link: '/docs/clients/', activeMatch: '^/docs/clients/' },
      { text: 'Для сотрудников', link: '/docs/', activeMatch: '^/docs/(?!clients/)' }
    ],
    
    sidebar: {
      '/docs/clients/': [
        {
          text: 'Для клиентов',
          children: [
            '/docs/clients/Как авторизоваться в системе',
            '/docs/clients/Как создать заявку на прием',
            '/docs/clients/Как создать безномерную заявку на выдачу',
          ]
        }
      ],
      '/docs/': [
        {
          text: 'Инструкции',
          children: [
            '/docs/Как добавить клиента в систему',
            {
              text: 'Сотрудники',
              children: [
                '/docs/empls_page/Управление сотрудниками',
              ]
            },
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
                '/docs/Как принять контейнер без заявки',
                '/docs/Как принять контейнер из карточки',
                '/docs/Как выдать контейнер со страницы пропусков',
                '/docs/Как выдать контейнер без заявки',
              ]
            },
            {
              text: 'Продажа контейнеров',
              children: [
                '/docs/sell_module/Как сформировать КП',
              ]
            },
            {
              text: 'Ремонт',
              children: [
                '/docs/Как оценить ремонтные работы',
                '/docs/Как отклонить ремонт',
              ]
            },
            {
              text: 'Перетарка',
              children: [
                '/docs/repacking/Как создать партию груза',
                '/docs/repacking/Как перетарить груз',
                '/docs/repacking/Генерация документов для перетарки',
                '/docs/repacking/Как внести груз в систему',
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
