// External imports
import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

// **************************** Styles *****************************************
const StyledSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 8vw 15vw;
  text-align: center;
  
  /* ******** CHILDREN ********* */
  /* Adjust background colour away from default for every
  even instance of Section */
  :nth-child(even) {
    background: ${(props) => (props.theme.bgContrast)};
  }
  
  /* ********* MOBILE ********** */
  @media screen and (max-width: 900px) {
    text-align: left;
  }
`;

// **************************** Function ***************************************
/**
 * This component displays children in a default fashion
 */
function Section(props) {
  const { children, divID } = props;

  return (
    <StyledSection id={divID}>
      {children}
    </StyledSection>
  );
}

// ************ PROPS ****************
Section.propTypes = {
  children: PropTypes.node.isRequired,
  divID: PropTypes.string.isRequired,
};

export default Section;
