const test = require('ava')
const React = require('react')
const render = require('react-test-renderer').create
const Spinner = require('./Spinner')

test('snapshot', t => {
  const tree = render(<Spinner />).toJSON()
  t.snapshot(tree)
})
