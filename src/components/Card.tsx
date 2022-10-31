import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
`

const StyledCardImage = styled.img`
`

const StyledCardHeader = styled.h2`
`

const StyledCardParagraph = styled.p`
`

export const Card: React.FC = () => {
  return (
    <StyledCard>
      <StyledCardImage />
      <StyledCardHeader>Fun Fact!</StyledCardHeader>
      <StyledCardParagraph>1 in 3 men wait until Christmas Eve to do their shopping.</StyledCardParagraph>
    </StyledCard>
  )
}

export default Card;
