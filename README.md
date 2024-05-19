# OpenBibleProject 📖
Read this in: [Deutsch 🇺🇸](README_DE.md)

The OpenBibleProject provides a specification for bible modules that are both easy to implement and portable.

All the modules are licensed under permissive licenses, so that you don't have to worry about licensing when using them in your projects.

## Available modules
- [Menge](https://github.com/OpenBibleProject/menge)


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

### OpenBibleProject, an awesomeBible project.
<a href="https://awesomebible.de" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/OpenBibleProject/website/assets/42138517/a86fb996-1975-4760-834a-3de0156f2b34" height="133" width="265" alt="awesomeBible Logo"></img>
</a>
