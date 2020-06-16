// External imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as PropTypes from 'prop-types';

/**
 * This class scrolls to top of page (or to previously set location)
 * on route change
 */
class ScrollHandler extends Component {
  // **************************** Setup ****************************************
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  /*
   * ************************** Life cycle *************************************
   */
  /** On component update, check if location is what triggered the update
   * If location has changed, scroll to top
   * @param prevProps
   */
  componentDidUpdate = (prevProps) => {
    const { props } = this;

    // Get current and previous location
    const currLoc = props.location.pathname;
    const prevLoc = prevProps.location.pathname;

    // Check if location has changed
    if (currLoc !== prevLoc) {
      window.scrollTo(0, 0);
    }
  };

  /**
   * *********************** Visual component **********************************
   * @return {jsx}
   */
  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default withRouter(ScrollHandler);
