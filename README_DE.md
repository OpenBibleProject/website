# OpenBibleProject 📖
## Das Projekt ist veraltet. Schau dir lieber [AO Lab's Bibel API](https://bible.helloao.org) an.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) [![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/1ko0f.svg)](https://status.awesomebible.de/?utm_source=status_badge)

Read this in: [English 🇺🇸](README.md)

Das OpenBibleProject stellt eine Spezifikation für Bibelmodule zur Verfügung, die einfach zu implementieren und portabel ist.

Alle Module sind unter permissiven Lizenzen lizensiert, so dass man sich keine Sorgen um Lizensierung machen braucht.

## Verfügbare Module
- [Menge](https://github.com/OpenBibleProject/menge)


## Du willst etwas beitragen?
### ... zu den Bibelmodulen
Wenn du etwas zu den Bibelmodulen beitragen willst, mach dich zuerst mit der Modulspezifikation vertraut.

Der erste Schritt ist es, die Übersetzung in einzelne Markdown-Dateien für jedes Buch / Kapitel umzuwandeln. Dann kannst du die Index-Datei mit den Metadaten hinzufügen.

Wenn dein Modul fertig ist, lade es in ein Github Repository hoch und reiche den Link mit Informationen zur Lizensierung über [Github Discussions](https://github.com/orgs/OpenBibleProject/discussions/new?category=submit-modules) ein.

### ... zur Dokumentation
Die OpenBibleWebsite & Dokumentation ist mit [Astro](https://astro.build/) und dem [Starlight Theme](https://starlight.astro.build/de/) gebaut.

Starlight sucht nach `.md` oder `.mdx` Dateien in dem `src/content/docs/` Ordner. Jede Datei wird basierend auf dem Dateinamen als Route bereitgestellt.

Wenn du Seiten übersetzen willst, erstelle eine Datei mit dem selben Namen in dem jeweiligen Sprach-Unterverzeichnis.

Bilder können in `src/assets/` hochgeladen und mit einem relativen Link in Markdown eingefügt werden.

#### 🧞 Befehle
Alle Befehle werden vom Stammverzeichnis des Projekts aus in einem Terminal ausgeführt:

| Befehl                    | Aktion                                               |
| :------------------------ | :-----------------------------------------------     |
| `npm install`             | Installiert Abhängigkeiten                           |
| `npm run dev`             | Startet den dev server unter `localhost:4321`        |
| `npm run build`           | Macht einen Produktionsbuild unter `./dist/`         |
| `npm run preview`         | Vorschau des lokalen Builds                          |
| `npm run astro ...`       | Führe CLI-Befehle wie `astro add`, `astro check` aus |
| `npm run astro -- --help` | Zeigt die Hilfe der Astro CLI an                     |

### OpenBibleProject, ein awesomeBible Projekt.
<a href="https://awesomebible.de" target="_blank" rel="noopener noreferrer">
    <img src="https://raw.githubusercontent.com/awesomebible/assets/main/exports/svg/wordmark_gradient.svg" height="133" width="265" alt="awesomeBible Logo"></img>
</a>
