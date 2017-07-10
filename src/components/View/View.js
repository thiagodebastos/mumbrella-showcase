// @flow
import React from 'react'
import Loader from '../Loader'
import Intro from '../Templates'
import Progress from '../Progress'
// import viewTypes from '../../config/viewTypes.json'

type Props = {
  section: number,
  subsection: number,
  changeView: Function,
  viewState?: Array<{
    currentSection: string,
    currentSubsection: string
  }>
}

const View = (props: Props): React.Element<*> => {
  const { section = 0, subsection = 0, changeView, viewState } = props
  console.info(viewState)

  const nextPage = () => {
    if (section === 0) {
      console.info('left loader page')
    } else if (subsection === 0) {
      console.info(`starting section ${subsection + 1}`)
    }
    changeView({ section, subsection })
  }

  if (section === 0) {
    return <Loader onClick={nextPage} />
  } else if (subsection === 0) {
    return <Intro section={1} />
  }
  return (
    <div>
      <Progress section={section} totalSections={4} />
      <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default View
