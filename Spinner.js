const React = require('react')

module.exports = props => {
  const {
    size = 16,
    spokes = 8,
    duration = 1000,
    ...rest
  } = props

  return (
    <svg
      viewBox='0 0 32 32'
      width={size}
      height={size}
      style={style}
      fill='currentcolor'
      {...rest}>
      {getPaths(spokes, duration)}
    </svg>
  )
}

const getPaths = (length, dur) => Array.from({ length })
  .map((n, i) => (
    <path
      key={i}
      opacity={0.1}
      d='M14 0 H18 V8 H14z'
      transform={`rotate(${i * 360 / length} 16 16)`}
    >
      <animate
        attributeName='opacity'
        from={1}
        to={0.1}
        dur={dur + 'ms'}
        repeatCount='indefinite'
        begin={(i * dur / length) + 'ms'}
      />
    </path>
  ))

const style = {
  display: 'inline-flex',
  margin: 0
}
