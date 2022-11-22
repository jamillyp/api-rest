import { Button } from '@mui/material';
import { Nav } from '../../components/Nav';

import {
    Container,
    Content
} from "./styles";

import shoppingFinalize from '../../assets/shopping-finalize.svg';
import { useNavigate } from 'react-router-dom';

export function ShoppingFinalize() {
    const navigate = useNavigate();
    
    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <h4>Compra realizada com sucesso!</h4>
                    <img src={shoppingFinalize} alt='shopping-finalize' />
                    <br />

                    <Button
                        onClick={() => navigate(-1)}
                        sx={
                            {
                                borderRadius: '4px',
                                width: '180px',
                                marginBottom: '40px',
                                background: '#009EDD'
                            }
                        }
                        variant="contained"
                    >
                        VOLTAR
                    </Button>
                </Content>

            </Container>
        </>

    );
}