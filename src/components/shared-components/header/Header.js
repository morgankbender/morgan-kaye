// External imports
import React from 'react';
// Local imports
import ftrImg from '../../../../assets/hdr_ftr.png';
import hdrLogo from '../../../../assets/hdr_logo.png';
import {
  FeatImg,
  Logo,
  StyledHeader,
} from './HeaderStyles';

/**
 * This function compiles all information to be displayed in the header
 */
function Header() {
  return (
    <StyledHeader>
      <Logo src={hdrLogo} alt="Morgan Kaye" />
      <FeatImg src={ftrImg} alt="Morgan" />
    </StyledHeader>
  );
}

export default Header;
