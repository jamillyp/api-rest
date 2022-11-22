import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import shoppingCart from '../../assets/shopping-cart.svg';

import {
    Container,
    Content,
    ContentShoppingCart,
} from "./styles";

interface NavProps {
    quantity?: number;
    data?: any;
}

export function Nav({ quantity, data }: NavProps) {
    const navigate = useNavigate();
    const [qtd, setQtd] = useState(0);

    return (
        <Container>
            <Content>
                <h3 onClick={() => navigate('/')}>WeMovies</h3>
            </Content>
            <ContentShoppingCart>
                <div id="shopping-cart">
                    <h4 onClick={() => navigate('/carrinho', {
                        state: { quantity, data },
                    })}>Meu carrinho</h4>
                    <span>{quantity ? quantity: qtd} itens</span>
                </div>

                <div>
                    <img src={shoppingCart} alt="shopping-cart" onClick={() => navigate('/carrinho', {
                        state: { quantity, data },
                    })}
                    />
                </div>
            </ContentShoppingCart>
        </Container>
    );
}