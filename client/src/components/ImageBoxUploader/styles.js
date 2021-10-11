import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10rem 20rem;
`;

export const BoxContainer = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--box);
  border-radius: 10px;
  padding: 10rem 5rem;
  cursor: pointer;
  border: ${(props) => props.showBorder ? '3px dashed var(--border)' : ''};
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: var(--title);
`;

export const FileInputter = styled.input`
  display: none;
`;