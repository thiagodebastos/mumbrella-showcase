// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  currentSection: number,
  currentSubsection: number,
  title: string,
  children: React.Element<*>
}

const Wrapper = styled.div`
  color: ${props => props.textColour || 'black'};
  max-width: 280px;
  text-align: center;
  margin-top: auto;
`

const ContentArea = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`

const Intro = (props: Props) => {
  const { currentSection, currentSubsection } = props
  return (
    <Wrapper>
      <ContentArea>
        <h1>
          {props.title}
        </h1>
        <Link to={`/${currentSection}/${currentSubsection + 1}`}>
          {props.children}
        </Link>
      </ContentArea>
    </Wrapper>
  )
}
export default Intro
