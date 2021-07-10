import React from 'react';
import {
  Card,
  CardImage,
  CardText
} from './StyledComponents';

const Cards = ({ launches }) => {
  return (
    <>
    {
      launches.map(({ id, mission_name, links }) => (
        <Card key={id}>
          <CardImage 
            src={links.flickr_images} 
            alt={mission_name}
          />
          <CardText>
            <strong>{mission_name}</strong>
          </CardText>
        </Card>
      ))
    }
    </>
  )
}

export default Cards;