# &lt;ActionControl /&gt;
A generic element with `press`/`release` state.

## Preview

```jsx
<ActionControl tag='button' theme='primary' size='lg' gradient={true} outlined={true} press={true} >
    hello world
</ActionControl>
```
Rendered to:
```html
<button class="c1 thPrimary szLg gradient outlined pressed">
    hello world
</button>
```

## Features
* Includes all features in [`<Control />`](https://www.npmjs.com/package/@nodestrap/control).
* `press`/`release` state. Visualized in dimmed color.
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/action-control
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
