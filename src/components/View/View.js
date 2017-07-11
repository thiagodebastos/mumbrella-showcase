// @flow
/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import Loader from '../Loader'
import Intro from '../Templates'
import Progress from '../Progress'
import NextView from '../NextView'

import sectionConfig from '../../config/sectionConfig'

type Props = {
  section: number,
  sections: Array<object>,
  subsection: number,
  changeView: Function,
  viewState?: Array<{
    currentSection: string,
    currentSubsection: string
  }>
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.colour || 'white'};
`

const View = (props: Props): React.Element<*> => {
  const {
    currentSection = 0,
    currentSubsection = 0,
    changeView,
    viewState,
    sections
  } = props
  console.info(viewState)

  const nextPage = () => {
    if (currentSection === 0) {
      console.info('left loader page')
    } else if (currentSubsection === 0) {
      console.info(`starting section ${currentSubsection + 1}`)
    }
    changeView({ currentSection })
  }

  if (currentSection === 0) {
    return <Loader />
  } else if (currentSubsection === 0) {
    return (
      <Wrapper {...props} colour={sections[`${currentSection - 1}`].colour}>
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
    <Wrapper {...props} colour="black">
      <header>
        {sectionTitle}
        <Progress
          currentSection={currentSection}
          currentSubsection={currentSubsection}
          totalSections={sections.length}
          totalSubsections={totalSubsections}
        />
      </header>
      <div>
        {sectionText}
      </div>
    </Wrapper>
  )
}

export default View
