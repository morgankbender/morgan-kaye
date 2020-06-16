// External imports
import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
// Local imports
import {
  StyledNavBar,
  NavList,
  NavItem,
  MobileNavBtn,
} from './NavStyles';

/**
 * This component generates main site navigation, fixed to
 * the top of the screen.
 */
class Nav extends Component {
  /*
   * **************************** Setup ****************************************
   */
  state = {
    scrollY: 0,
    mobileOpen: false,
  };

  /*
   * ************************** Life cycle *************************************
   */
  /**
   * When component mounts, get current Y position.
   * Then, create an event listener to continually update this Y
   */
  componentDidMount() {
    this.setState({
      scrollY: window.scrollY,
    });

    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  /**
   * Before unmounting component, remove event listener
   * created when component mounted
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  /*
   * ************************** Event handlers *********************************
   */
  /**
   * Called by scroll event listener. Update state to
   * user's current Y position
   */
  handleScroll() {
    this.setState({
      scrollY: window.scrollY,
    });
  }

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
      <StyledNavBar scrollY={scrollY}>

        {/* Mobile hamburger / close button */}
        <MobileNavBtn
          icon={mobileOpen ? 'times' : 'bars'}
          onClick={() => this.toggleMobileNav()}
          color={scrollY < window.innerHeight * 0.7 ? 'light' : 'dark'}
        />

        {/* BEGIN NAV- LIST */}
        <NavList
          scrollY={scrollY}
          mobileOpen={mobileOpen}
        >
          <NavItem
            onClick={() => { this.handleItemClick('#about'); }}
          >
            About
          </NavItem>
          <NavItem
            onClick={() => { this.handleItemClick('#portfolio'); }}
          >
            Portfolio
          </NavItem>
          <NavItem
            onClick={() => { this.handleItemClick('#resume'); }}
          >
            Resume
          </NavItem>
          <NavItem
            onClick={() => { this.handleItemClick('#videos'); }}
          >
            Videos
          </NavItem>
          <NavItem
            onClick={() => { this.handleItemClick('#contact'); }}
          >
            Contact
          </NavItem>
        </NavList>
        {/* END NAV- LIST */}

      </StyledNavBar>
    );
  }
}

export default Nav;
