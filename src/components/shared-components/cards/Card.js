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
