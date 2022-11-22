import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShoppingCart } from "../pages/ShoppingCart";
import { ShoppingFinalize } from "../pages/ShoppingFinalize";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route element={<Home />} path='/' />
                <Route element={<ShoppingCart />} path='/carrinho' />
                <Route element={<ShoppingFinalize />} path='/compra-finalizada' />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
