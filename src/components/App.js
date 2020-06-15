// External imports
import React from 'react';
import { hot } from 'react-hot-loader';
import styled, { ThemeProvider } from 'styled-components';
// Local imports
import Routes from './Routes';
import './IconLibrary';

// **************************** Styles ***************************************
// Default theme colours
const theme = {
  bgPrimary: '#fcfbf5',
  bgContrast: '#cee5d0',
  accentPrimary: '#3fab9b',
  accentContrast: '#d8b384',
  txtPrimary: '#483539',
};

const StyledApp = styled.div`
  background: ${(props) => (props.theme.bgPrimary)};
  min-height: 100vh;
  font-size: 18px;
  line-height: 24px;
  font-family: Vollkorn, Bookman, Georgia, 'Times New Roman', serif;
  color: ${(props) => (props.theme.txtPrimary)};
`;

// **************************** Function ***************************************
/**
 * Wrap all routes with theme and export hot
 * @return {jsx}
 * @constructor
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
