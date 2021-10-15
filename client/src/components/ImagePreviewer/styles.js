import styled from 'styled-components';

import { ImageAdd as ImageIcon } from 'styled-icons/remix-fill';
import { Delete as DeleteImageIcon } from 'styled-icons/material-rounded';

export const Container = styled.div`
  position: relative;
`;

export const ImageAddIcon = styled(ImageIcon)`
  width: 100px;
  height: 100px;
  fill: var(--icon);

  border-radius: 5px;
  padding: 2rem;
  border: 1px dashed var(--icon);
`;

export const ImagePreview = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-image: ${props => `url(${props.src})`};
  border-radius: 5px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: filter 250ms ease-in-out;

  &:hover {
    filter: brightness(50%);
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 75%;
  left: 75%;
  background: var(--red);
  border-radius: 50%;
`;

export const DeleteIcon = styled(DeleteImageIcon)`
  width: 40px;
  height: 40px;
  padding: .5rem;
  fill: var(--white);
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--background--shadow);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.5rem;
`;

export const LargeImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: ${props => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: .15rem;
`;