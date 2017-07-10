// @flow
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  direction: 'string',
  linkTo: 'string'
}

const ScrollerLink = ({ direction, linkTo }: Props) =>
  <div>
    <Link to={`/${linkTo}`}>
      {direction} arrow
    </Link>
  </div>

export default ScrollerLink
