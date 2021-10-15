import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { Container, Image, Title, Description, Button } from './styles';

import axios from "axios";

function ImageVisualizer() {
  
  const [imageSource, setImageSource] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/${id}`)
    .then((result) => {
      setImageSource(result.data.result.imageSrc);
    });
  }, []);

  return (
    imageSource ? (
      <Container>
        <Image src={imageSource} />
      </Container>
    ) : (
      <Container>
        <Title>Nothing was found!</Title>
        <Description>Something wrong happened... Try again!</Description>
        <Button href="http://localhost:3000">Go back...</Button>
      </Container>
    )
  )
}

export default ImageVisualizer;