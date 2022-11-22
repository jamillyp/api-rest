import { useState, useEffect } from 'react';
import { Nav } from '../../components/Nav';
import shoppingCart from '../../assets/women-shopping-cart.svg';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import img from '../../assets/viuva-negra.svg';
import DeleteIcon from '@mui/icons-material/Delete';

import {
    Container,
    Content
} from "./styles";

import { useLocation, useNavigate } from 'react-router-dom';
export interface ShoppingCartProps {
    data?: any;
}

export function ShoppingCart({ data }: ShoppingCartProps) {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [contador, setContador] = useState(0);

    const navigateState = state;

    const quantity = navigateState;
    data = quantity.data;

    useEffect(() => {
        // console.log({ quantity });

    }, []);

    useEffect(() => {
        // console.log(data[0]);
    }, [])

    function handleAddProduct() {
        contador <= 0 ? setContador(0) : setContador(contador - 1);
    }

    return (
        <>
            <Nav />
            <Container>
                {
                    quantity.quantity > 0 ?
                        <Content>

                            <div id='title'>
                                <h3>PRODUTO</h3>
                                <h3 style={{ marginLeft: '110px'}}>QTD</h3>
                                <h3 style={{ marginLeft: '20px'}}>SUBTOTAL</h3>
                                <div id='' />
                            </div>

                            <div id='title'>

                                <div id='subtitle'>
                                    <img src={img} alt='image' />

                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <strong>Título</strong>
                                        <span>R$29,99</span>
                                    </div>

                                </div>

                                <div style={{
                                     display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <RemoveCircleOutlineIcon sx={{ color: '#009EDD', cursor: 'pointer' }} onClick={handleAddProduct} />
                                    <span style={{ padding: '4px', border: '1px solid #D9D9D9', width: '70px', margin: '4px', borderRadius: '5px', height: '30px' }}> {contador} </span>

                                    <AddCircleOutlineIcon sx={{ color: '#009EDD', cursor: 'pointer' }} onClick={() => setContador(contador + 1)} />
                                </div>

                                <div>
                                    <strong>R$ 29,99</strong>
                                </div>

                                <div>
                                    <DeleteIcon sx={{ color: '#009EDD', cursor: 'pointer' }} />
                                </div>
                            </div>

                            <div id='tr' />

                            <div id='title-finalize'>
                                <Button 
                                onClick={() => navigate('/compra-finalizada')}
                                sx={{
                                    borderRadius: '4px',
                                    width: '180px',
                                    margin: '30px 0px 20px 0px',
                                    background: '#009EDD',
                                    color: '#f1f1f1'
                                }}>FINALIZAR PEDIDO</Button>

                                <div id='subtitle-finalize'>
                                    <h4>TOTAL: </h4>
                                    <h1>R$29,99</h1>
                                </div>


                            </div>

                        </Content> :
                        <Content>
                            <h3>Parece que não há nada por aqui {')'}:</h3>
                            <img src={shoppingCart} alt='shopping-cart-women' />
                            <br />

                            <Button
                                onClick={() => navigate(-1)}
                                sx={
                                    {
                                        borderRadius: '4px',
                                        width: '180px',
                                        margin: '30px 0px 20px 0px',
                                        background: '#009EDD'
                                    }
                                }
                                variant="contained"
                            >
                                VOLTAR
                            </Button>
                        </Content>
                }

            </Container>
        </>

    );
}