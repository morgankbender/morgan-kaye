// External imports
import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

// **************************** Styles *****************************************
const StyledCard = styled.div`
  background: ${(props) => (props.theme.accentPrimary)};
  //display: grid;
  //grid-template-areas: 'CardImg' 'Info';
`;

const CardImg = styled.img`
  
`;

/**
 * This component generates main site navigation, fixed to
 * the top of the screen.
 */
class Card extends Component {
  /*
   * **************************** Setup ****************************************
   */
  static propTypes = {
    img: PropTypes.object,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string,
    linkText: PropTypes.string,
  };

  static defaultProps = {
    img: null,
    link: null,
    linkText: null,
  };

  /**
   * When a nav item is clicked, scroll to element
   * should be activated, AND mobile menu should be forced
   * closed (though, it may already be closed if the user
   * is on a desktop)
   * @param idTag - id of element the app should scroll
   * to (include # in param)
   */
  handleItemClick(idTag) {
    scrollToElement(idTag, { align: 'middle' });
    this.setState({
      mobileOpen: false,
    });
  }

  /**
   * Called on click event. Toggle state of mobile nav.
   */
  toggleMobileNav() {
    const { mobileOpen } = this.state;

    this.setState({
      mobileOpen: !mobileOpen,
    });
  }

  /**
   * *********************** Visual component **********************************
   * @return {jsx}
   */
  render() {
    const { scrollY, mobileOpen } = this.state;

    return (
      <div></div>
    );
  }
}

export default Card;
