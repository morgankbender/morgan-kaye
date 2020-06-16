// External imports
import styled from 'styled-components';
// Local imports
import {
  FadeInDownFixCenter,
  FadeInRightFixCenter,
  FadeInStatic,
} from '../../shared-styles/Animations';

// *****************************************************************************
// Styled header controls styles that affect the entire header.
// These styles include positioning, size, and background. It
// also has a pseudo element, after, which is a slightly
// transparent version of the background, allowing for elements
// to be "sandwiched" between these two layers
export const StyledHeader = styled.header`
  background: ${(props) => (props.theme.accentPrimary)};
  background: linear-gradient(180deg, 
    rgba(222,99,112,1) 0%,
    rgba(234,155,164,1) 70%,
    rgba(250,237,229,1) 100%);
  position: relative;
  height: 100vh;
  overflow: hidden;
  
  /* ********** AFTER ********* */
  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(180deg, 
    rgba(222,99,112,0.8) 0%,
    rgba(234,155,164,0.8) 70%,
    rgba(250,237,229,0.8) 100%);
  }
`;

// *****************************************************************************
// This CSS allows an absolutely positioned image to be
// featured on the right side of the header. This image
// is masked to match the header's gradient
export const FeatImg = styled.img`
  position: absolute;
  width: 45vw;
  right: 0;
  bottom: 50%;
  transform: translate(0, 50%);
  mask-image: linear-gradient(to bottom, 
  rgba(250,237,229,1) 0%, 
  rgba(234,155,164,0.8) 70%,
  rgba(250,237,229,0) 100%);
  animation: ${FadeInRightFixCenter} 3s ease-in;
  
  /* ********* MOBILE ********** */
  /* Note: on smaller screens, feature image will be
  centered and fade in in place to avoid a messy
  looking design */
  @media screen and (max-width: 900px) {
    /* Override */
    width: 100vw;
    bottom: 0;
    transform: translate(0, 0);
    animation: ${FadeInStatic} 3s ease-in;
  }
`;

// *****************************************************************************
// Logo takes an image (preferably PNG) and centers it in the header
export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 100vh;
  z-index: 10;
  animation: ${FadeInDownFixCenter} 2s linear;
  
  /* ********* MOBILE ********** */
  @media screen and (max-width: 900px) {
    /* Override */
    height: auto;
    /* New / mobile specific */
    width: 100vw;
  }
`;
