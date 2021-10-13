import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
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