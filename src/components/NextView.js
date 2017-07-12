import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  fill: ${props => props.fillColor};
  width: 45px;

  circle:nth-of-type(1) {
    animation: pulse 1s infinite alternate;
    animation-delay: 0;
    animation-timing-function: ease-out;
  }

  circle:nth-of-type(2) {
    animation: pulse 1s infinite alternate;
    animation-delay: 2;
    animation-timing-function: ease-out;
  }

  @keyframes pulse {
    from {
      fill: transparent;
    }
    to {
      fill: ${props => props.fillColor};
    }
  }
`

const NextView = () =>
  <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 83">
    <g>
      <circle cx="41.2" cy="41.2" r="41.2" fill="#fff" opacity="0.2" />
      <circle cx="41.2" cy="40.73" r="33.27" fill="#fff" opacity="0.5" />
      <path
        d={`M69.36,40.05A28.16,28.16,0,1,1,41.2,11.89,28.16,28.16,0,0,1,69.36,
        40.05ZM57.09,32.39,41.7,45.28,26.3,32.39l-1.5,1.5,13.9,13.89h0L40.91,
        50h1.58l2.21-2.21,13.9-13.9Z`}
        fill="#fff"
      />
    </g>
  </Wrapper>

export default NextView
