import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import partytown from "@astrojs/partytown";

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
	head: [
		{
		  tag: 'script',
		  attrs: {
			type: 'text/partytown',
			src: 'https://umami.awesomebible.de/script.js',
			'data-website-id': '9be0dcdf-7bd0-45e9-b2f7-93913404478b',
		  },
		},
	  ],
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
  }), partytown()]
});