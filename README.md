**Looking for SASS-based `d2l-loading-spinner`?** It's [over here](https://github.com/BrightspaceUI/loading-spinner/tree/sass).

# d2l-loading-spinner
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/loading-spinner)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]
  
[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/BrightspaceUIloading-spinner)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/BrightspaceUIloading-spinner.svg)](https://vaadin.com/directory/component/BrightspaceUIloading-spinner)

[Polymer](https://www.polymer-project.org)-based web component loading spinner.

![screenshot of loading component](/loading-spinner.gif?raw=true)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-loading-spinner` can be installed from [Bower][bower-url]:
```shell
bower install d2l-loading-spinner
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-loading-spinner.html`:

```html
<head>
  <script src="../webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="../d2l-loading-spinner/d2l-loading-spinner.html">
</head>
```

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="d2l-loading-spinner.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-loading-spinner></d2l-loading-spinner>
```

### Size

The size (default `50px`) can be adjusted using the `size` attribute:

```html
<d2l-loading-spinner size="100"></d2l-loading-spinner>
```

Or by setting the `--d2l-loading-spinner-size` [CSS property](https://www.polymer-project.org/2.0/docs/devguide/custom-css-properties):

```html
<custom-style>
.huge-spinner {
  --d2l-loading-spinner-size: 400px;
}
</custom-style>
<d2l-loading-spinner class="huge-spinner"></d2l-loading-spinner>
```

### Color

While not recommended, the default color (blue) can be set using the `color` attribute:

```html
<d2l-loading-spinner color="red"></d2l-loading-spinner>
```

Or by setting the `--d2l-loading-spinner-color` [CSS property](https://www.polymer-project.org/2.0/docs/devguide/custom-css-properties):

```html
<custom-style>
.red-spinner {
  --d2l-loading-spinner-color: red;
}
</custom-style>
<d2l-loading-spinner class="red-spinner"></d2l-loading-spinner>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

[bower-url]: http://bower.io/search/?q=d2l-loading-spinner
[bower-image]: https://badge.fury.io/bo/d2l-loading-spinner.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/loading-spinner
[ci-image]: https://travis-ci.org/BrightspaceUI/loading-spinner.svg?branch=master
