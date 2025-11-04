import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  
  base: '/steiza/',
  
  lang: 'ru-RU',
  title: 'Steiza',
  description: 'Инструкции по работе с системой',

  theme: defaultTheme({
    logo: null,
    
    colorMode: 'light',
    colorModeSwitch: true,
    
    navbar: [
      {
        text: 'Главная',
        link: '/',
      },
      {
        text: 'Инструкции',
        link: '/docs/',
      },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Инструкции',
          collapsible: false,
          children: [
            '/docs/Как добавить клиента в систему_',
          ],
        },
      ],
    },

    editLink: false,
    lastUpdated: true,
    lastUpdatedText: 'Обновлено',
    contributors: false,
  }),
})

