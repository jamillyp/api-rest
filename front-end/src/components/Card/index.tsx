import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

import shoppingCartIcon from '../../assets/shopping-cart-icon.svg';

import {
    Container
} from "./styles";

interface CardProps {
    _id?: any;
    title?: string;
    price?: any;
    srcImg?: string;
    count?: any;
}


export function Card({ title, price, srcImg, count, _id }: CardProps) {
    const [quantity, setQuantity] = useState(0);
    const [actived, setActived] = useState(false);
    const [data, setData] = useState([{}]);
    const [backgroundColor, setBackgroundColor] = useState('#009EDD');

    function handleClick(e: any, _id: any ) {
        const value = Number(e.target.innerText.substr(0, e.target.innerText.indexOf('\n')));

        //const arrayItens = 
        if(data.filter((el:any) => el.id === _id).length > 0){
            const index = data.indexOf(data.filter((el:any) => el.id === _id)[0])
            data[index] = {id: _id, counter: value + 1}
            setData(data)
        }
        else{
            const data2 = {id: _id, counter: value}
            data.push(data2)
            //setData(data)
        }
        // console.log(data)
        
        
        // const data1 = data;
        // data1.push()

        setActived(true);
        
        if(actived) {
            setBackgroundColor('#039B00')
        }else {
            setBackgroundColor('#009EDD')
        }

        setQuantity(quantity + 1);
        count(1);
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
                onClick={(e) => handleClick(e, _id)}
                sx={
                    {
                        borderRadius: '5px',
                        width: '287.33px',
                        marginTop: '10px',
                        background: backgroundColor
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