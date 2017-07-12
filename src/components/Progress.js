// @flow
import React from 'react'

type Props = {
  currentSection: number,
  totalSections: number,
  currentSubsection: number,
  totalSubsections: number
}
const Progress = ({
  currentSection,
  totalSections,
  currentSubsection,
  totalSubsections
}: Props) =>
  <div>
    {currentSection} / {totalSections}
    {currentSubsection} / {totalSubsections}
  </div>

export default Progress
