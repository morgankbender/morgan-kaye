import styled from 'styled-components';

// *****************************************************************************
// Header 2 - generally used as a section header
export const H2 = styled.h2`
  color: ${(props) => (props.theme.accentPrimary)};
  font-weight: bold;
  font-size: 25px;
  margin: 0 0 2em 0;
`;

// *****************************************************************************
// Default paragraph styles
export const Par = styled.p`
  font-size: 18px;
`;
