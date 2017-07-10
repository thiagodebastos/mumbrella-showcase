// @flow
import React from 'react'

type Props = {
  section: number,
  totalSections: number
}
const Progress = ({ section, totalSections }: Props) =>
  <div>
    {section} / {totalSections}
  </div>

export default Progress
