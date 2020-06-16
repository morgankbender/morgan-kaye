import { keyframes } from 'styled-components';

// *****************************************************************************
// Fade in with no position change
export const FadeInStatic = keyframes`
  0% {
    opacity:0;
}
  100% {
    opacity:1;
  }
`;

// *****************************************************************************
// Fade in with motion: start slightly above ending position. Maintain
// horizontal centering
export const FadeInDownFixCenter = keyframes`
  0% {
    transform: translate(-50%, -5vh);
    opacity: 0;
  }

  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`;

// *****************************************************************************
// Fade in with motion: start slightly to left of ending position. Maintain
// vertical centering
export const FadeInRightFixCenter = keyframes`
  0% {
    transform: translate(-5vw, 50%);
    opacity: 0;
  }

  100% {
    transform: translate(0, 50%);
    opacity: 1;
  }
`;
