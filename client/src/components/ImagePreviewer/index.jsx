import React, { useState } from 'react';

import { Container, ImageAddIcon, ImagePreview, Overlay, LargeImage, RemoveButton, DeleteIcon } from './styles';

function ImageVisualizer({ imagePreviewSrc, resetUsingFile }) {

  const [isPreviewed, setPreviewed] = useState(false);

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
      { !imagePreviewSrc ? (
        <ImageAddIcon/>
      ) : (
        <>
          <ImagePreview 
            src={imagePreviewSrc}
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
            src={imagePreviewSrc}
          />
        </Overlay>
      )}
    </Container>
  );
}

export default ImageVisualizer;