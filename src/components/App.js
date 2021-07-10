import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Wrapper } from './StyledComponents';
import Header from './Header';
import Launches from './Launches';
import { ALL_LAUNCHES_PAST } from '../graphql/queries';

const App = () => {
  const [launches, setLaunches] = useState([]);
  const { data, error, loading } = useQuery(ALL_LAUNCHES_PAST);

  useEffect(() => {
    if (data) {
      setLaunches(
        data.launchesPast
        .filter(launch => 
          launch.links.flickr_images.length > 0 &&
          launch.links.article_link != null &&
          launch.links.video_link != null
        )
      );
    }
  }, [data]);

  if (loading) return 'loading';
  if (error) return `Error: ${error}`;

  return (
    <Wrapper>
      <Header />
      <Launches launches={launches} />
    </Wrapper>
  )
}

export default App;

