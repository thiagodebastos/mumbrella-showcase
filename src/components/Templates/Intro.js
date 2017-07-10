// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  section: number
}

const Wrapper = styled.div`
  background-color: ${props => props.colour || 'white'};
  color: ${props => props.colour || 'black'};
`
/* eslint-disable */
const Intro = (props: Props) => {
  const { section, colour, viewState } = props
  return (
    <Wrapper>
      <h1>
        {section}
        {props.colour}
      </h1>
      <Link to="/1/1">
        <img src="https://placehold.it/50x50&text=V" alt="tap" />
      </Link>
    </Wrapper>
  )
}
export default Intro
