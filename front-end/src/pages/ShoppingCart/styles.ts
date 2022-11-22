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
    padding: 20px;
    width: 87%;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    border-radius: 4px;
    padding: 10px 50px;

    font-size: 14px;
    
    background-color: var(--white);

    .css-1lnwnln-MuiButtonBase-root-MuiButton-root:hover {
        background: #039B00;
    }
    
    h3 {
        margin-top: 15px;
        margin-bottom: 30px;
    }

    #tr {
        margin-top: 20px;
        background-color: #999999;
        width: 100%;
        height: 1px;
    }

    #title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            color: #999999;
            font-size: 14px;
        }

        #title-left {
            padding-left: 350px;
        }

        #subtitle {
            display: flex;
            line-height: 30px;

            img {
                padding-right: 20px;
            }

            strong, span {
                text-align: left;
                font-weight: 700;
            }
        }
    }

    #title-finalize {
        margin: 0px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        #subtitle-finalize {
            display: flex;
            align-items: center;
            justify-content: center;

            h4 {
                color: #999999;
                padding-right: 10px;
            }

           
            h1 {

            }
        }
    }
`;