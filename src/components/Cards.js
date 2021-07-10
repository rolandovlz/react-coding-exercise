import React from 'react';
import {
  Card,
  CardImage,
  CardText,
  Link
} from './StyledComponents';

const Cards = ({ launches, darkMode }) => {
  return (
    <>
    {
      launches.map(({ id, mission_name, links }) => (
        <Card key={id} darkMode={darkMode}>
          <Link 
            href={links.video_link} 
            target="_blank"
          >
            <CardImage 
              src={links.flickr_images} 
              alt={mission_name}
            />
          </Link>
          <CardText darkMode={darkMode}>
            <Link 
              href={links.article_link} 
              target="_blank"
              darkMode={darkMode}
            >
              <strong>{mission_name}</strong>
            </Link>
          </CardText>
        </Card>
      ))
    }
    </>
  )
}

export default Cards;