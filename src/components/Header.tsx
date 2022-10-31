import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledHeader = styled.h1`
`

export const Header: React.FC<Props> = ({children}) => {
  return (
    <StyledHeader>{children}</StyledHeader>
  )
}

export default Header;
