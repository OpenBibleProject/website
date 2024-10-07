# OpenBibleProject 📖
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) [![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/1ko0f.svg)](https://status.awesomebible.de/?utm_source=status_badge)

Read this in: [Deutsch 🇩🇪](README_DE.md)

The OpenBibleProject provides a specification for bible modules that are both easy to implement and portable.

All the modules are licensed under permissive licenses, so that you don't have to worry about licensing when using them in your projects.

## Contributing
### ... to the bible modules
If you would like to contribute to the bible modules, make yourself familiar with the module spec.

The first step would be to convert your translation into individual markdown files for each book / chapter, then you can add the index file for metadata.


If your module is done, upload it to Github and submit the link and licensing information about the translation via the [Github Discussion](https://github.com/orgs/OpenBibleProject/discussions/new?category=submit-modules) feature.

### ... to the documentation
The OpenBibleProject website & documentation is built using [Astro](https://astro.build/) and the [Starlight theme](https://starlight.astro.build/).

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

If you'd like to translate pages, create a file with the same name in the respective language subdirectory.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/openbibleproject/website)  [![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/openbibleproject/website) [![Open with Github.dev](https://img.shields.io/badge/Open_with-Github.dev-black?style=for-the-badge&logo=github)](https://github.dev/openbibleproject/website)

#### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### OpenBibleProject, an awesomeBible project
<a href="https://awesomebible.de" target="_blank" rel="noopener noreferrer">
    <img src="https://raw.githubusercontent.com/awesomebible/assets/main/exports/svg/wordmark_gradient.svg" height="133" width="265" alt="awesomeBible Logo"></img>
</a>
