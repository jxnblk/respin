const fs = require('fs')
const path = require('path')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const Spinner = require('../Spinner')

const App = () => (
  <html>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <Spinner />
    <h1>
      <a href='https://github.com/jxnblk/respin'>
        Respin
      </a>
    </h1>
  </html>
)

const css = `*{box-sizing:border-box}
body{
  font-family:-apple-system,BlinkMacSystemFont,sans-serif;
  margin:0;
  padding:32px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  min-height:100vh;
}
a{color:inherit}`

const html = renderToStaticMarkup(<App />)

const filename = path.join(__dirname, 'index.html')
fs.writeFileSync(filename, `<!DOCTYPE html>${html}`)
