import React, { useState } from 'react';

import { Container, ImageAddIcon, ImagePreview, Overlay, LargeImage, RemoveButton, DeleteIcon } from './styles';

function ImageVisualizer(props) {

  const [isPreviewed, setPreviewed] = useState(false);
  const imagePreviewSource = props.src;
  const resetUsingFile = props.resetUsingFile;

  const handleClick = (e) => {
    setPreviewed(true);
  }

  const handleCloseClick = (e) => {
    setPreviewed(false);
  }

  const handleDeleteClick = (e) => {
    resetUsingFile();
  }

  return (
    <Container>
      { !imagePreviewSource ? (
        <ImageAddIcon/>
      ) : (
        <>
          <ImagePreview 
            src={imagePreviewSource}
            onClick={(e) => handleClick(e)}
          />

          <RemoveButton>
            <DeleteIcon
              onClick={(e) => handleDeleteClick(e)}
            />
          </RemoveButton>
        </>
      )}

      { isPreviewed && (
        <Overlay onClick={(e) => handleCloseClick(e)}>
          <LargeImage 
            src={imagePreviewSource}
          />
        </Overlay>
      )}
    </Container>
  );
}

export default ImageVisualizer;