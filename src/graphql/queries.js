import { gql } from '@apollo/client';

const ALL_LAUNCHES_PAST = gql`
  {
    launchesPast(limit: 30) {
      id
      mission_name
      links {
        flickr_images
        article_link
        video_link
      }
    } 
  }
`;

export { 
  ALL_LAUNCHES_PAST 
}