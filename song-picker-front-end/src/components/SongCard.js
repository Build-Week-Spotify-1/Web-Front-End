import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
  const SongCard = (props) => {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Title: {props.title}</CardTitle>
            <CardSubtitle>Artist: {props.artist}</CardSubtitle>
            <CardText>Album: {props.album}</CardText>
            <Button>Play</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default SongCard;