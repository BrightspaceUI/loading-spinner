# React Loading Spinner
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]

A loading spinner written in React. 

## Installation

```shell
npm install react-loading-spinner
```

## Usage

### Props

`className:` *String:* **Optional:** parameter to set custom styling for spinner. <br/>
`size:` *String:* **Optional:** Size of spinner. All CSS units are supported except for **%**. <br/>
`thickness:` *String:* **Optional:** Thickness of spinner. All CSS units are supported. <br/>
`color:` *String:* **Optional:** Colour of the spinner.

```js
import LoadingSpinner from 'react-loading-spinner';
class Component extends React.Component {
    render() {
        return <LoadingSpinner 
        			className='myCssClass' 
        			size='10px' 
        			thickness='10px' 
        			colour='#ccc'/>
    }
}
```

## Sample

Included is a sample application which allows you to launch the file viewer with many different file types. To build the sample application, run:

```shell
npm run build-sample
```

To serve the sample application, run:

```shell
npm run serve
```

Then open `http://localhost:8080/` in your browser.


## Code Style

This repository is configured with EditorConfig rules and contributions should make use of them. See the VUI Best Practices & Style Guide for more information.

[npm-url]: https://npmjs.org/package/react-valence-ui-loading-spinner
[npm-image]: https://badge.fury.io/js/react-valence-ui-loading-spinner.png
[ci-url]: https://travis-ci.org/Brightspace/react-valence-ui-loading-spinner
[ci-image]: https://travis-ci.org/Brightspace/react-valence-ui-loading-spinner.svg
