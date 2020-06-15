// External imports
import React from 'react';
import * as PropTypes from 'prop-types';

/**
 * This component contains all other components that comprise the landing page
 */
function Nav(props) {
  const { children } = props;

  return (
    <div>
      <h1>Nav</h1>
      {children}
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
