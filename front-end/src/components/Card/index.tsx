import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

import shoppingCartIcon from '../../assets/shopping-cart-icon.svg';

import {
    Container
} from "./styles";

interface CardProps {
    _id?: string;
    title?: string;
    price?: any;
    srcImg?: string;
    count?: any;
}

export function Card({ title, price, srcImg, count, _id }: CardProps) {
    const [quantity, setQuantity] = useState(0);

    function handleClick() {
        setQuantity(quantity + 1);
        count(quantity + 1);
    }

    return (
        <Container key={_id}>
            <img src={srcImg} alt={title} />
            <h4>{title}</h4>

            <span>
                {price}
            </span>

            <br />
            <Button
                onClick={handleClick}
                sx={
                    {
                        borderRadius: '5px',
                        width: '287.33px',
                        marginTop: '10px'
                    }
                }
                variant="contained"
            >
                <img src={shoppingCartIcon} alt="shopping-cart-icon" />

                <strong style={{
                    padding: '0px 10px 0px 10px'
                }}>
                    {quantity}
                </strong>

                ADICIONAR AO CARRINHO
            </Button>
        </Container>
    );
}