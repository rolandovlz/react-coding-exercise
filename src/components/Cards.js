import React from 'react';
import {
  Card,
  CardImage,
  CardText
} from './StyledComponents';

const Cards = ({ launches, darkMode }) => {
  return (
    <>
    {
      launches.map(({ id, mission_name, links }) => (
        <Card key={id} darkMode={darkMode}>
          <CardImage 
            src={links.flickr_images} 
            alt={mission_name}
          />
          <CardText darkMode={darkMode}>
            <strong>{mission_name}</strong>
          </CardText>
        </Card>
      ))
    }
    </>
  )
}

export default Cards;