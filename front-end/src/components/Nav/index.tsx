import { useNavigate } from 'react-router-dom';
import shoppingCart from '../../assets/shopping-cart.svg';

import {
    Container,
    Content,
    ContentShoppingCart,
} from "./styles";

interface NavProps{
    quantity?: number;
}

export function Nav({ quantity } : NavProps) {
    const navigate = useNavigate();

    return (
        <Container>
            <Content>
                <h3 onClick={() => navigate('/')}>WeMovies</h3>
            </Content>
            <ContentShoppingCart>
                <div id="shopping-cart">
                    <h4 onClick={() => navigate('/carrinho')}>Meu carrinho</h4>
                    <span>{quantity} itens</span>
                </div>

                <div>
                    <img src={shoppingCart} alt="shopping-cart" onClick={() => navigate('/carrinho')} />
                </div>
            </ContentShoppingCart>
        </Container>
    );
}