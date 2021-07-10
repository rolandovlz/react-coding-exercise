import React from 'react';
import { 
  LaunchesWrapper,
  Title,
  Container,
} from './StyledComponents';
import Cards from './Cards';

const Launches = ({ launches, darkMode }) => {
  return (
    <LaunchesWrapper>
      <Title darkMode={darkMode}>
        SpaceX Launches <span role="img" aria-label="rocket">🚀</span>
      </Title>
      <Container darkMode={darkMode}>
        <Cards launches={launches} darkMode={darkMode} />
      </Container>
    </LaunchesWrapper>
  )
}

export default Launches;

