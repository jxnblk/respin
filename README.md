
# Respin

React SVG loading spinner based on jxnblk.com/loading

```sh
npm i respin
```

```js
const React = require('react')
const Spinner = require('respin')

const MyComponent = props => (
  <div>
    <Spinner /> Loading...
  </div>
)
```

## Props

- `size = 16` - (number) - width and height in pixels
- `duration = 1000` - (number) - duration of animation in milliseconds
- `spokes = 8` - (number) - number of spokes in spinner

Respin passes all other props to the root `<svg>` element.

MIT License

