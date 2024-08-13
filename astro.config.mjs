import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

// https://astro.build/config
export default defineConfig({
  site: 'https://obp.awesomebible.de',
  integrations: [starlight({
    title: 'OpenBibleProject',
    // Set English as the default language for this site.
    defaultLocale: 'root',
    locales: {
      // English docs in `src/content/docs/`
      root: {
        label: 'English',
        lang: 'en'
      },
      de: {
        label: 'Deutsch',
        lang: 'de'
      }
    },
    editLink: {
      baseUrl: 'https://github.com/openbibleproject/docs/edit/main/'
    },
    plugins: [
      starlightDocSearch({
        appId: 'VSOUB3M7ZH',
        apiKey: 'c298c1ce79d2ee90d5e5b3e8f24fe72f',
        indexName: 'obp-awesomebible',
      }),
    ],
	head: [],
    social: {
      github: 'https://github.com/OpenBibleProject'
    },
    sidebar: [{
      label: 'OpenBibleProject',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'About us',
        link: '/about/',
        translations: {
          de: 'Über uns'
        }
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'spec'
      }
    }],
    customCss: [
    // Relative path to your custom CSS file
    '@fontsource-variable/inter', '@fontsource-variable/jetbrains-mono', '/src/assets/custom-styles.css']
  })]
});