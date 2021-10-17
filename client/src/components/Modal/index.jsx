import React, { useRef } from 'react';

import { Container, BoxContainer, Title, LinkContainer, Button } from './styles';

import ClipboardButton from 'react-copy-to-clipboard';

function Modal({ showState, setShowState, generatedId }) {

  const modalWrapperRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    if(e.target === modalWrapperRef.current || buttonRef.current) {
      setShowState(false);
    }
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
        >
          <Button
            ref={buttonRef}
          >
            Click here to copy...
          </Button>
        </ClipboardButton>

        <Button
          href={`http://localhost:3000/${generatedId}`}
          target="_blank"
          ref={buttonRef}
        >
          Click here to open image...
        </Button>
      </BoxContainer>
    </Container>
  )
}

export default Modal;