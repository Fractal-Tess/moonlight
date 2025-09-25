import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeMoonlight from 'starlight-theme-moonlight'

export default defineConfig({
  integrations: [
    starlight({
      credits: true,
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-theme-moonlight/edit/main/docs/',
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
      social: [
        { href: 'https://bsky.app/profile/hideoo.dev', icon: 'blueSky', label: 'Bluesky' },
        { href: 'https://github.com/HiDeoo/starlight-theme-moonlight', icon: 'github', label: 'GitHub' },
      ],
      title: 'Starlight Moonlight',
    }),
  ],
  site: 'https://starlight-theme-moonlight.vercel.app',
})
