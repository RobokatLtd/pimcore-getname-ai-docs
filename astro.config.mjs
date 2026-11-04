import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://robokatltd.github.io',
  base: '/pimcore-getname-ai-docs',
  integrations: [
    starlight({
      title: { en: 'getName.ai for Pimcore', pl: 'getName.ai dla Pimcore', de: 'getName.ai für Pimcore' },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        pl: { label: 'Polski', lang: 'pl' },
        de: { label: 'Deutsch', lang: 'de' },
      },
      sidebar: [
        {
          label: 'Getting started',
          translations: { pl: 'Na początek', de: 'Erste Schritte' },
          items: ['before-you-start', 'how-it-works', 'installation'],
        },
        {
          label: 'First configuration',
          translations: { pl: 'Pierwsza konfiguracja', de: 'Erste Konfiguration' },
          items: ['first-classification', 'first-attributes'],
        },
        {
          label: 'Configuration tabs',
          translations: { pl: 'Zakładki konfiguracji', de: 'Reiter der Konfiguration' },
          items: [
            'reference/connection',
            'reference/task',
            'reference/mapping',
            'reference/execution',
            'reference/logs-permissions',
          ],
        },
        {
          label: 'After the run',
          translations: { pl: 'Po uruchomieniu', de: 'Nach dem Durchlauf' },
          items: ['results', 'troubleshooting'],
        },
        'glossary',
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
