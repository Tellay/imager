import React, { useRef } from 'react';

import { Container, BoxContainer, Title, LinkContainer, Button } from './styles';

import ClipboardButton from 'react-copy-to-clipboard';

function Modal({ showState, setShowState, generatedId }) {

  const modalWrapperRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    if(e.target === modalWrapperRef.current || buttonRef.current) {
      setShowState(false);
    }
  }
  
  const handleButtonClick = (e) => {
    e.preventDefault();
  }

  return showState && (
    <Container 
      ref={modalWrapperRef} 
      onClick={(e) => handleClick(e)} 
    >
      <BoxContainer>
        <Title>Success, your link here...</Title>
        <LinkContainer>{`http://localhost:3000/${generatedId}`}</LinkContainer>
        <ClipboardButton 
          text={`http://localhost:3000/${generatedId}`}
          onClick={(e) => handleButtonClick(e)}
        >
          <Button
            ref={buttonRef}
            onClick={(e) => handleClick(e)}
          >
            Click here to copy...
          </Button>
        </ClipboardButton>
      </BoxContainer>
    </Container>
  )
}

export default Modal;