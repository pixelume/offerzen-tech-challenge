import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from "../images/logo.svg";
import Box from '../styles/shared/Box';

const StyledLogo = styled(Logo)`
  margin-left: 10vw;
`;

const HeaderComponent = () => {

  return (
    <Box>
      <StyledLogo />
    </Box>
  );
}

export default HeaderComponent;