import React, { useState, useRef } from 'react';

import { Container, BoxContainer, Title, FileInputter } from './styles';

import ImageVisualizer from '../ImagePreviewer';

import UploadButton from '../UploadButton';

function ImageBox() {

  const [showBorder, setShowBorder] = useState(false);
  const [imageSource, setImageSource] = useState(undefined);
  const fileInputterRef = useRef(null);

  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowBorder(true);
  }

  const handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowBorder(false);
  }
  
  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { files } = e.dataTransfer;
    const file = files.item(0);
    if(!file) return setShowBorder(false);
    setImageSource(URL.createObjectURL(file));
    setShowBorder(false);
  }
  
  const handleClick = (e) => {
    if(imageSource) return;
    fileInputterRef.current.click();
  }
  
  const handleChange = (e) => {
    const { files } = e.target;
    const file = files.item(0);
    if(!file) return;
    setImageSource(URL.createObjectURL(file));
  }

  const resetUsingFile = () => {
    setImageSource(undefined);
  }

  return (
    <Container>
      <BoxContainer
        showBorder={showBorder}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
        onClick={handleClick}
      >
        <Title>
          Drag your image<br/>
          or just click in the box...
        </Title>

        <FileInputter 
          type="file" 
          accept="image/jpg, image/jpeg, image/png"
          ref={fileInputterRef} 
          onChange={handleChange}
        />

        <ImageVisualizer 
          src={imageSource} 
          resetUsingFile={resetUsingFile}
        />
      </BoxContainer>

      { imageSource ? <UploadButton actived imageSource={imageSource} resetUsingFile={resetUsingFile}/> : <UploadButton />}
    </Container>
  );
}

export default ImageBox;