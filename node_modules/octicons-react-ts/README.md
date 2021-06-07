# octicons-react-ts

Make [Octicons](https://github.com/primer/octicons) "Reacted" and "Typed".

![Octicons](https://user-images.githubusercontent.com/54012/37737576-5d1e8c7a-2d11-11e8-8fd9-13956a241549.png)

You may also view all available icons in [Octicons](https://octicons.github.com/).

## Install

```bash
npm install octicons-react-ts --save
```

or with yarn

```bash
yarn add octicons-react-ts
```

## Usage

### Typescript

The library is definitely typed, it also declared `octicons` with [`octicons.d.ts`](./src/octicons.d.ts).

### React

It's exposed as an React SFC.

The entire library will be available when importing `octicons-react-ts`. Specifying the [icon you want to use][octicons], by supplying the `name=""` to the component.

```tsx
import * as React from 'react'
import Octicon from 'octicons-react'

const alertIcon: React.SFC<{}> = ({}) => (<Octicon name="alert" />)
```

You may view all available icons in [Octicons](https://octicons.github.com/).

![rep](./rep.gif)

### options

The `name` is required, the optinal settings include: `width`, `height`, `ratio`, `viewport`, `class`, `aria-hidden`, `aria-label`.

Remember that the component turns out to be a SVG. You may accquire more infomations at [SVG: Scalable Vector Graphics | MDN](https://developer.mozilla.org/en-US/docs/Web/SVG). In short, they are almost pictures, css rules on pictures are probably compatible.

The optional settings all has default values. The `width`, `height`, `viewport` are generated according to the data `octicons` provided.

The default classes for these icons are `octicon` and `octicon-name` according to its name. You can add class to it with array of class names.

`aria-hidden` is false and the default `aria-label` is the icon's name, these can also be specified.

```tsx
<Octicon name="arrow-left" width={20} height={30} viewbox={[0, 0, 30, 30]} class={['my-icon']} aira-hidden={true} aria-label="icon" />
```

**NOTE: About size.** The svg size is determined in this order:

1. If `width` specified, the width of svg is set that value. `height` works the same way.
2. If `ratio` specified, the svg will be scaled to that value by default size.
3. The default size.

### css

You may import scss like

```scss
@import 'node_modules/octicons-react-ts/src/icon.scss'
```

And there is also the optional compiled `dist/icon.css`.

## Release

**NOTE**: This package release tag is a little bit diffrent, to keep the track of the reference to the source `octicons`, the release tag is like bellow:

```yml
v<VERSION>.<SOURCEVERSION>.<PATCHES>
```

and the `<SOURCEVERSION>` just concats `octicons` main version and subversion.

So an example version tag of `octicons-react` may look like `v1.73.2` which stands: *version 1 based on `octicons-v7.3.x`(probably v7.3.0) with 2 patches*.

## Update

You may clone the project and update the icons to follow the `octicons` at any time with the help of `/src/scripts`.

You may just run

```bash
npm run catch && npm run build
```

And try it out to choose wether to link it to your project.

The *symbol*(name) and *keywords* are commented out in `collect.js` and `octicons.d.ts`, you may uncomment them and rebuild it.

## Troubleshoot

### package `data.json` not found ?

If tsc or webpack complains, you may try to append this to your 'data.d.ts':

```ts
declare module '*.json'
```

### How can I only import the icons I need ?

I suggest downloading the `.svg` file from [primer/octicons](https://github.com/primer/octicons) to you project in such situations.

And as far as I'm concerned, the `@githubprime/octicons-react` is also a good choice.

### May I use it with class and style sheet as a font ?

I'm considering it.

## LICENSE

### octicons

[primer/octicons](https://github.com/primer/octicons) (c) GitHub, Inc.

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).

_Code License:_ [MIT](https://github.com/primer/octicons/blob/master/LICENSE)

### octicons-react

Copyright (c) 2018 Qotes

_Code License:_ [MIT](./LICENSE)
