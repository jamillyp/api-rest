import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Nav } from "../../components/Nav";
import api from "../../services/api";

import {
    Container,
    Content
} from "./styles";

export function Home() {
    const [products, setProducts] = useState([]);
    const [qtd, setQtd] = useState(0);

    async function loadProducts() {
        await api.get('products')
            .then((res) => {
                setProducts(res.data);
            }).catch((err) =>
                alert(err.message)
            );
    }

    function handleClick(count: number) {
        setQtd((prevState: any) => prevState + count);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <>
            <Nav quantity={qtd} />
            <Container>
                <Content>
                    {
                        products && <>
                            {products.map((product: any) =>
                                <Card
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
                        </>
                    }
                </Content>
            </Container>
        </>

    );
}