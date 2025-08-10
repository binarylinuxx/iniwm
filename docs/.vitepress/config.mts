// docs/.vitepress/config.mjs
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/iniwm/',
  title: "IniWM",
  description: "Documentation for the iniWM window manager",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/starter/install' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is iniWM?', link: '/index' },
          { text: 'Showcase', link: '/showcase' }, 
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/starter/install' },
          { text: 'Configuration', link: '/guide/configuration' }, 
          { text: 'Default Keybindings', link: '/guide/keybindings' }, 
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Cool tools!!', link: '/guide/tools' }, 
        ]
      },
      {
        text: 'Help',
        items: [
          { text: 'Common Issues', link: '/starter/common_issues' },
          { text: 'Contribute', link: '/starter/contribute' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'codeberg', link: 'https://codeberg.org/blx/iniWM' } 
    ]
  }
})
