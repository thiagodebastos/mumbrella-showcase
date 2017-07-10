import React from 'react'
import styled from 'styled-components'

const brandTeal = '#72c5c3'

const Wrapper = styled.svg`
  fill: ${brandTeal};
  width: 90px;

  circle:nth-of-type(1) {
    animation: pulse 1s infinite alternate;
    animation-delay: 0;
    animation-timing-function: ease-out;
  }

  ellipse {
    animation: pulse 1s infinite alternate;
    animation-delay: 2;
    animation-timing-function: ease-out;
  }

  @keyframes pulse {
    from {
      fill: transparent;
    }
    to {
      fill: ${brandTeal};
    }
  }
`

const Logo = () =>
  <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.78 74.83">
    <g id="Layer_1-2" data-name="Layer 1">
      <ellipse cx="38.39" cy="37.42" rx="38.39" ry="37.42" opacity="0.3" />
      <circle cx="37.87" cy="37.42" r="31.31" fill={brandTeal} opacity="0.5" />
      <circle cx="38.39" cy="37.78" r="24.8" fill="#fff" />
      <path
        d={`M42.64,23.6c0-6.91-2.06-8-4.61-8s-4.54.93-4.54,8,2.06,7.65,4.54,7.65,4.61-.74,4.61-7.65m-9.1,26.35A3.82,3.82,0,0,0,29.45,54c0,2.5,2.25,4.8,8.81,4.8,7.46,0,9.49-2.1,9.49-4.83,0-2.38-1.8-4-4.81-4Zm-6-35.39A25.24,25.24,0,0,0,20.1,55.23c0-.12,0-.25,0-.37,0-4.51,4.39-6.17,8.29-7h0c-3.71-.8-5.5-3.45-5.5-6.17,0-3.64,4.07-6.78,6-8.13l-.23-.13a10.84,10.84,0,0,1-5.75-9.87,10.62,10.62,0,0,1,4.61-9M63.31,37.5A25.25,25.25,0,0,0,48,14.31a10.58,10.58,0,0,1,5,8.81,5.4,5.4,0,0,1,.08.85c0,7.53-6.13,11.53-15,11.53a18.29,18.29,0,0,1-5.7-.68,3.42,3.42,0,0,0-1.55,2.53,2.36,2.36,0,0,0,2.48,2.23H45.66c7.68,0,11.45,3.14,11.45,9.92a12.74,12.74,0,0,1-1.38,6,25.17,25.17,0,0,0,7.59-18`}
        fill="#72c5c3"
      />
    </g>
  </Wrapper>

export default Logo
