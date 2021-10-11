import React, { useState } from 'react';

import { Container } from './styles';

import axios from 'axios';

import Modal from '../Modal';

function UploadButton({ actived, imageSource, resetUsingFile }) {

  const handleClick = (e) => {
    e.preventDefault();
    if(!actived) return;
    axios.post('http://localhost:3001/',
      {
        imageUrl: imageSource
      }
    )
    .then((result) => {
      setCopyLink(result.data.item);
    });
    resetUsingFile();
    setModalState(true);
  }

  const [modalState, setModalState] = useState(false);
  const [copyLink, setCopyLink] = useState(null);

  return (
    <>
      <Modal
        showState={modalState}
        setShowState={setModalState}
        generatedId={copyLink}
      />

      <Container 
        href="#"
        actived={actived}
        onClick={(e) => handleClick(e)}
      >
        Upload
      </Container>
    </>
  );
}

export default UploadButton;