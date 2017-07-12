// @flow
/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import Loader from './Loader'
import Intro from './Templates'
import Progress from './Progress'
import NextView from './NextView'

import sectionConfig from '../config/sectionConfig'

type Props = {
  section: number,
  sections: Array<Object>,
  subsection: number,
  changeView: Function,
  viewState?: Array<{
    currentSection: string,
    currentSubsection: string
  }>
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Wrapper = styled.div`
  ${props =>
    props.flexCentered
      ? `display: flex;
        align-items: center;
        flex-direction: column;`
      : ''} height: 100vh;
  width: 100vw;
  padding: 20px 40px;
  justify-content: center;
  background-color: ${props => props.colour || 'white'};
  color: black;
`

const View = (props: Props): React.Element<*> => {
  const {
    currentSection = 0,
    currentSubsection = 0,
    changeView,
    viewState,
    sections
  } = props

  const nextPage = () => {
    if (currentSection === 0) {
      console.info('left loader page')
    } else if (currentSubsection === 0) {
      console.info(`starting section ${currentSubsection + 1}`)
    }
    console.info('test')
    changeView({ currentSection })
  }

  if (currentSection === 0) {
    return <Loader />
  } else if (currentSubsection === 0) {
    return (
      <Wrapper
        {...props}
        colour={sections[`${currentSection - 1}`].colour}
        flexCentered
      >
        <Intro {...props} title={sections[`${currentSection - 1}`].title}>
          <NextView onClick={nextPage} />
        </Intro>
      </Wrapper>
    )
  }

  const totalSubsections = sections[`${currentSection - 1}`].subsections.length
  const sectionTitle = sections[`${currentSection - 1}`].title
  const sectionText =
    sections[`${currentSection - 1}`].subsections[`${currentSubsection - 1}`]
      .text

  return (
    <Wrapper {...props}>
      <Header>
        <div>
          {sectionTitle}
        </div>
        <Progress
          currentSection={currentSection}
          currentSubsection={currentSubsection}
          totalSections={sections.length}
          totalSubsections={totalSubsections}
        />
      </Header>
      <div>
        {sectionText}
      </div>
      <Link to="/">>></Link>
    </Wrapper>
  )
}

export default View
