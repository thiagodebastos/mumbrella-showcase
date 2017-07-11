// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'

const Wrapper = styled(Link)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`

const Loader = () =>
  <Wrapper to="/1/0">
    <Logo />
  </Wrapper>

export default Loader
