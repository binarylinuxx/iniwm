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
          { text: 'What is iniWM?', link: '/index' }, // Links to index.md
          { text: 'Showcase', link: '/showcase' }, // Links to index.md
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/starter/install' },
          { text: 'Configuration', link: '/guide/configuration' }, // You'll need to create this
          { text: 'Default Keybindings', link: '/guide/keybindings' }, // You'll need to create this
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Cool tools!!', link: '/guide/tools' }, // You'll need to create this
        ]
      },
      {
        text: 'Help',
        items: [
          { text: 'Common Issues', link: '/starter/common_issues' },
          { text: 'Contribute', link: '/starter/contribute' },
          // { text: 'FAQ', link: '/help/faq' }, // Optional
        ]
      }
    ],
    socialLinks: [
      { icon: 'codeberg', link: 'https://codeberg.org/blx/iniWM' } // Or codeberg icon/link if supported
    ]
  }
})
