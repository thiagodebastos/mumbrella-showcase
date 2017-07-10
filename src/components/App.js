import React from 'react'
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import Routes from '../routes'

injectGlobal`${normalize()}` // eslint-disable-line

const App = () =>
  <div>
    {Routes}
  </div>

export default App
