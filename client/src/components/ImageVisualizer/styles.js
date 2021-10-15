import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    text-align: center;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 90vh;
    border-radius: .15rem;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    font-family: 'Russo One', sans-serif;
    color: var(--white);
`

export const Description = styled.p`
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    color: var(--subtitle);
`

export const Button = styled.a`
    width: 100%;
    text-align: center;
    padding: .5rem 0;
    margin-top: 1.5rem;
    border-radius: .125rem;
    text-decoration: none;
    color: var(--button--copy);
    border: 1px solid var(--button--copy);
    transition: all 250ms ease-in-out;
    font-weight: 600;

    &:hover {
        color: var(--button--copy--text--color);
        background: var(--button--copy);
    }

    &:focus {
        box-shadow: 0 0 0 3px var(--button--copy--boxshadow);
    }
`;