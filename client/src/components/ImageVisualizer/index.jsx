import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { Container, Image } from './styles';

import axios from "axios";

function ImageVisualizer() {
  
  const [imageSource, setImageSource] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/${id}`)
    .then((result) => {
      setImageSource(result.data.result.imageSrc);
      setLoading(false);
    });
  }, []);

  return (
    !loading && (
      <Container>
        <Image src={imageSource} />
      </Container>
    )
  )
}

export default ImageVisualizer;