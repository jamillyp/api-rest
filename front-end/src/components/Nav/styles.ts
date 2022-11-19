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
    h3 {
        cursor: pointer;
    }
    span {
        font-size: small;
        text-align: left;
    }
    p {
        font-size: small;
        width: 200px;
        text-align: end;
    }

    @media(max-width: 300px) {
        display: block;
    }
`;

export const ContentShoppingCart = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    
    h4, img {
        cursor: pointer;
    }

    #shopping-cart {
        margin-right: 20px;
    }

    span {
        font-size: small;
        text-align: left;
        margin-left: 60%;
    }
    p {
        font-size: small;
        width: 200px;
        text-align: end;
    }

    @media(max-width: 300px) {
        display: block;
    }
`;