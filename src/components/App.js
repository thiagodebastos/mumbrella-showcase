/* eslint-disable no-unused-expressions */
import React from 'react'
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import Routes from '../routes'

injectGlobal`
${normalize()}

body {
  margin: 0;
  color: white;
}

* {
  box-sizing: border-box;
}
`
const App = () =>
  <div>
    {Routes}
  </div>

export default App
