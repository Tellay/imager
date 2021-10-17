import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  padding: 10rem 20rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background--shadow);
`;

export const BoxContainer = styled.div`
  padding: 5rem;
  min-height: 20rem;
  background: var(--box);
  border-radius: .15rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: var(--title);
  margin-bottom: .5rem;
`;

export const LinkContainer = styled.div`
  width: 100%;
  background: var(--button--blocked);
  color: var(--white);
  padding: .325rem;
  border-radius: .15rem;
  margin-top: .325rem;
`;

export const Button = styled.a`
  width: 100%;
  color: var(--white);
  background: var(--button);
  padding: .5rem;
  margin-top: 1rem;
  text-decoration: none;
  border-radius: .15rem;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background 250ms ease-in-out;

  &:hover {
    background: var(--button--hover);
  }

  &:focus {
    box-shadow: 0 0 0 0.25rem var(--button--focus);
  }
`;