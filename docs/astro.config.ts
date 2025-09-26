import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeMoonlight from 'starlight-theme-moonlight'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/fractal-tess/moonlight/edit/main/docs/',
      },
      plugins: [starlightThemeMoonlight()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization'],
        },
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', link: '/resources/starlight/' }],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: [{ href: 'https://github.com/fractal-tess/moonlight', icon: 'github', label: 'GitHub' }],
      title: 'Starlight Moonlight',
    }),
  ],
})
