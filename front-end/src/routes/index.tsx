import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShoppingCart } from "../pages/ShoppingCart";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route element={<Home />} path='/' />
                <Route element={<ShoppingCart />} path='/carrinho' />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
