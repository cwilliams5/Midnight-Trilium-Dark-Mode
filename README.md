# Midnight - Trilium Dark Mode Theme
A beautiful, opinionated, material design inspired dark mode theme for Trilium with extra features and [OCD level](https://github.com/zadam/trilium/issues/2639) attention to detail and style coverage. 

![Midnight Screenshot](/img/midnight.png?raw=true "Midnight Screenshot")

## Features
* Material Design Based
  * Comfortable Contrast
  * Maximum Readability
* Dark Mode Friendly Font
* Consistent Design
  * Including fixes to alignment and layout issues
* Custom Code View Styling
  * Dark Mode Native
  * Ligature Font
* Complete Style Coverage
  * More than even built in default themes and dark mode!
* New Features
  * Zen Mode - focus solely on the note at hand
   <img src="https://raw.githubusercontent.com/cwilliams5/Midnight-Trilium-Dark-Mode/main/img/zenmode.gif" title="Zen Mode example" width=50% height=50%>

## Support

Supported Trilium version: 0.50.2. Please report any bugs or missing style coverage.

Unsupported: Everything else. However, Midnight was initially developed against 0.49.5, versions greater then that will probably work but only latest supported. Early versions than 0.49.5 not tested.

## Prerequisites
Technically none, Midnight will try and fetch the fonts it uses from the web. For offline use, or if any problems encountered, please manually install the following fonts:
* [Inter](https://github.com/rsms/inter) - A beautiful font designed specifically for screen use and works well in dark mode compared to default Trilium fonts.
* [FiraCode](https://github.com/tonsky/FiraCode) - The best programming font, great dark mode look and programming ligatures. 

## Installation
* See [prerequisites](https://github.com/cwilliams5/Midnight-Trilium-Dark-Mode/edit/main/README.md#prerequisites) to guarantee font use even when offline.
* Create a new note in Trilium, store it anywhere you would like.
* Change note type to CSS.
* Paste in the raw contents of [midnight.css](https://raw.githubusercontent.com/cwilliams5/Midnight-Trilium-Dark-Mode/main/midnight.css).
* Add an owned attribute of ```#appTheme=Midnight``` to the note.
* Click the Trilium icon in the top left, select Options, and under theme select Midnight.

### Zen Mode

Enable the optional Zen Mode. Remember the ```ALT + Z``` key combo to exit Zen Mode!
* Create a new note in Trilium, store it anywhere you would like.
* Change note type to JS Frontend.
* Paste in the raw contents of [zenmode.js](https://raw.githubusercontent.com/cwilliams5/Midnight-Trilium-Dark-Mode/main/zenmode.js).
* Add an owned attribute of ```#run=frontendStartup``` to the note.
* Click the Trilium icon in the top left, select Reload frontend, or press ```F5``` to reload the front end.

## Customization
The code is laid out and commented for your easy customization. Change what you want, delete what you want. Let me know anything interesting you think is valuable for the core. Pull requests welcome!

### Highly Opinionated
As described, this is my daily theme and is highly opinionated to my desires. I created a "highly opiniated" section of the code for those changes I've made that I expect may be controversial. This will allow easy removal if you do not like. Here they are so far:
* By default, in Trilium notes have a max-width of 1200px. Midnight will override this to 100% with a slight margin for gutter comfort. If you don't like your notes too wide, feel free to remove.

### Zen Mode VS Extreme Zen Mode
By default, "Extreme Zen Mode" is active, meaning Zen Mode removes *everything* but the note contents. If you would prefer that more of the note UI, such as attributes, tabs, splitter, etc, remain visible, comment out or remove the Extreme Zen Mode section and uncomment the Zen Mode section.

## Donation
If for some reason you want to donate for this, I'm flattered but instead please consider donating to or sponsoring [zadam](https://github.com/sponsors/zadam), the developer of [Trilium](https://github.com/zadam/trilium).
