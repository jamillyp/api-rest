import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-width: 1200px;
    justify-content: space-around;
    color: var(--white);
    padding: 30px;

    @media(max-width: 300px) {
        display: block;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 20px;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
`;