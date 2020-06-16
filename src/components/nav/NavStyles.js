import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// *****************************************************************************
// Nav bar controls position on screen and background colour
export const StyledNavBar = styled.nav`
  background-color: ${(props) => (
    props.scrollY ? props.theme.accentPrimary : 'transparent'
  )};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  transition: background-color 1s;
  
  /* ********* MOBILE ********** */
  @media screen and (max-width: 900px) {
    /* Override */
    background-color: transparent;
  }
`;

// *****************************************************************************
// Nav list controls the layout, font size, and colour
// of elements in the nav. In mobile, it also controls
// a background, in order to give a tiered effect
export const NavList = styled.ul`
  margin: ${(props) => (props.scrollY ? '0.5em' : '1em')};
  font-size: ${(props) => (props.scrollY ? '18px' : '20px')};
  display: flex;
  justify-content: flex-end;
  transition: margin 1s, font-size 1s;
  
  /* ********* MOBILE ********** */
  @media screen and (max-width: 900px) {
    /* Override */
    font-size: 20px;
    display: grid;
    transition: visibility 1s 0s, opacity 1s;
    /* New / mobile specific */
    visibility: ${(props) => (props.mobileOpen ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.mobileOpen ? 1 : 0)};
    grid-template-columns: 1fr;
    justify-items: center;
    background: linear-gradient(180deg, 
    rgba(222,99,112,1),
    rgba(234,155,164,1));
    transform: translate(0, 2.5em);
  }
`;

// *****************************************************************************
// Nav item controls padding and margins around individual items in the nav.
// It also controls their hover effects
export const NavItem = styled.li`
  color: ${(props) => (props.theme.bgPrimary)};
  padding: 0.5em 1em;
  
  /* ****** HOVER & FOCUS ****** */
  &:hover,
  &:focus {
    /* Override */
    color: ${(props) => (props.theme.accentContrast)};
    /* New / hover specific */
    cursor: pointer;
    text-shadow: 1px 1px 3px ${(props) => (props.theme.txtPrimary)};
  }
  
  /* ********* MOBILE ********** */
  @media screen and (max-width: 900px) {
    /* New / mobile specific */
    margin: 0.5em;
  }
`;

// *****************************************************************************
// Mobile nav button is a styled Font Awesome Icon used in the mobile
// version of the site only. It is fixed to the top right corner.
export const MobileNavBtn = styled(FontAwesomeIcon)`
  display: none;
  position: fixed;
  top: 1em;
  right: 1em;
  font-size: 28px;
  color: ${(props) => (
    props.color === 'light' ? props.theme.bgPrimary : props.theme.accentPrimary
  )};
  
  /* ********* MOBILE ********** */
  @media screen and (max-width: 900px) {
    /* Override */
    display: block;
  }
`;
