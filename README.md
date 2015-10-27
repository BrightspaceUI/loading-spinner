# vui-loading-spinner

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]

This component contains Sass mixins and CSS that can be used to create a loading spinner.

## Usage

`@include vui-loading-spinner( size, thickness, colour )` Accepts all unit types except for **%**

```js
//HTML
<span class='container' />

//CSS or SASS
.container {
	@include vui-loading-spinner; //Will use default style
}

OR

.container {
	@include vui-loading-spinner( 10px, 20px, #ccccc )
}

```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[npm-url]: https://www.npmjs.org/package/vui-loading-spinner
[npm-image]: https://img.shields.io/npm/v/vui-loading-spinner.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-loading-spinner
[ci-image]: https://img.shields.io/travis-ci/Brightspace/valence-ui-loading-spinner.svg?branch=master
