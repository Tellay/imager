import styled from 'styled-components';

export const Container = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  background: ${(props) => props.actived ? 'var(--button)' : 'var(--button--blocked)'};
  border-radius: 3px;
  text-decoration: none;
  padding: .95rem 0;
  color: var(--white);
  font-size: 20px;
  transition: all 250ms ease-in-out;
  cursor: ${(props) => props.actived ? 'pointer' : 'not-allowed'};
  
  &:focus {
    box-shadow: ${(props) => props.actived ? '0 0 0 0.25rem var(--button--focus)' : ''};
  }

  &:hover {
    background: ${(props) => props.actived ? 'var(--button--hover)' : ''};
  }
`;