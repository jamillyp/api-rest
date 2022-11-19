import { useNavigate } from 'react-router-dom';
import shoppingCart from '../../assets/shopping-cart.svg';

import {
    Container,
    Content,
    ContentShoppingCart,
} from "./styles";

export function Nav() {
    const navigate = useNavigate();

    return (
        <Container>
            <Content>
                <h3>WeMovies</h3>
            </Content>
            <ContentShoppingCart>
                <div id="shopping-cart">
                    <h4>Meu carrinho</h4>
                    <span>0 itens</span>
                </div>

                <div>
                    <img src={shoppingCart} alt="shopping-cart" />
                </div>
            </ContentShoppingCart>
        </Container>
    );
}