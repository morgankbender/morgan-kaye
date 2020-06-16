// External imports
import React from 'react';
import { hot } from 'react-hot-loader';
import styled, { ThemeProvider } from 'styled-components';
// Local imports
import Routes from './Routes';
import './IconLibrary';
import './reset.css';

// **************************** Styles ***************************************
// Default theme colours
const theme = {
  bgPrimary: '#faede5',
  bgContrast: '#f3d7c4',
  accentPrimary: '#de6370',
  accentContrast: '#ea9ba4',
  txtPrimary: '#360c10',
};

// Default app styles (which can be safely applied
// after the reset import above)
const StyledApp = styled.div`
  background: ${(props) => (props.theme.bgPrimary)};
  min-height: 100vh;
  font-size: 18px;
  line-height: 24px;
  font-family: Montserrat, Bookman, Georgia, 'Times New Roman', serif;
  color: ${(props) => (props.theme.txtPrimary)};
`;

// **************************** Function ***************************************
/**
 * Wrap all routes with theme and export hot
 * @return {jsx}
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Routes />
      </StyledApp>
    </ThemeProvider>
  );
}

export default hot(module)(App);
