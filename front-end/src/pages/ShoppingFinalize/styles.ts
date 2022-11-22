import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-width: 1124px;
    justify-content: space-evenly;
    margin-top: 50px;

    @media(max-width: 300px) {
        display: block;
    }
`;

export const Content = styled.div`
    width: 87%;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    border-radius: 4px;
    padding: 10px 50px;
    background-color: var(--white);

    h4 {
        padding: 40px;
        font-size: 20px;
        font-weight: 700;
        color: #2F2E41;
    }

    img {
        width: 20%;
        padding-bottom: 35px;
    }

`;