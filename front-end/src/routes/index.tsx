import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import { Home } from "../pages/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route element={<Home />} path='/' />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
