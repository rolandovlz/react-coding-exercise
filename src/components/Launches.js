import React from 'react';
import { 
  LaunchesWrapper,
  Title,
  Container,
} from './StyledComponents';
import Cards from './Cards';

const Launches = ({ launches }) => {
  return (
    <LaunchesWrapper>
      <Title>
        SpaceX Launches <span role="img" aria-label="rocket">🚀</span>
      </Title>
      <Container>
        <Cards launches={launches} />
      </Container>
    </LaunchesWrapper>
  )
}

export default Launches;

