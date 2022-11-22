import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-width: 1124px;
    justify-content: space-between;
    color: var(--white);
    /* margin: 40px; */

    @media(max-width: 300px) {
        display: block;
    }
`;

export const Content = styled.div`
    width: 80%;
    margin: 50px 0px 0px 85px;
    
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
    justify-content: end;
    cursor: pointer;
    width: 100%;

    margin: 50px 85px 0px 0px;
    
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