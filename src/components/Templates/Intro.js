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
`

const StyledLink = styled(Link)`
position: absolute;
bottom: 40px;
left: 50%;
transform: translate(-50%);
`

const SectionTitle = styled.h1`
  color: white;
  font-weight: 400;
`

const Intro = (props: Props) => {
  const { currentSection, currentSubsection } = props
  return (
    <Wrapper>
      <SectionTitle>
        {props.title}
      </SectionTitle>
      <StyledLink to={`/${currentSection}/${currentSubsection + 1}`}>
        {props.children}
      </StyledLink>
    </Wrapper>
  )
}
export default Intro
