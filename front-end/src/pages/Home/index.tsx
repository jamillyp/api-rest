import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Nav } from "../../components/Nav";
import api from "../../services/api";

import {
    Container,
    Content
} from "./styles";

interface Product {
    product_id?: number;
    product_title?: string;
    product_price?: string;
    product_image?: string;
}

export function Home() {
    const [products, setProducts] = useState([]);
    const [qtd, setQtd] = useState(0);
    const [loading, setLoading] = useState(true);

    async function loadProducts() {
        await api.get('products')
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            }).catch((err) =>
                console.log("Erro ao carregar dados na rota GET /products: " + err.message)
            );
    }

    function handleClick(count: number, id: number) {
        setQtd((prevState: any) => prevState + count);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    useEffect(() => {
        // console.log({ products });
    }, [])

    return (
        <>
            <Nav quantity={qtd} data={products} />
            <Container>
                {
                    loading ? <div id='loading'>
                        <CircularProgress sx={{ color: '#fff', marginTop: '150px' }} />
                    </div> : <Content>
                        {
                            products.map((product: any) =>
                                <Card
                                    key={product.id}
                                    _id={product.id}
                                    title={product.title}
                                    price={
                                        new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(product.price)
                                    }
                                    srcImg={product.image}
                                    count={handleClick}
                                />
                            )}
                    </Content>
                }
            </Container>
        </>

    );
}