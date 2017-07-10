// @flow
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

type Props = {
  onClick: Function => void
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`

const Loader = ({ onClick }: Props) =>
  <Wrapper onClick={onClick}>
    <Logo />
  </Wrapper>

export default Loader
