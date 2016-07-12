**Looking for SASS-based `d2l-loading-spinner`?** It's [over here](https://github.com/Brightspace/valence-ui-loading-spinner/tree/sass).

# d2l-loading-spinner

[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A Valence UI, [Polymer](https://www.polymer-project.org/1.0/)-based web component button element.

![screenshot of button component](/screenshots/screenshot.png?raw=true)

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`d2l-loading-spinner` can be installed from [Bower][bower-url]:
```shell
bower install d2l-loading-spinner
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-loading-spinner.html`:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-loading-spinner/d2l-loading-spinner.html">
</head>
```

The component can now be used as shown below:

```html
<d2l-loading-spinner></d2l-loading-spinner>
```

The size can be changed using the font-size property.

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-loading-spinner
[bower-image]: https://img.shields.io/bower/v/d2l-loading-spinner.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-loading-spinner
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-loading-spinner.svg?branch=master
