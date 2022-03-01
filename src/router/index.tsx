import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectedItem from "../Component/cart/SelectedItem";
import RouteNames from "./routerNames";
import Login from "../Component/logIn";
import Signup from "../Component/signUp"
import BeerCard from "../Component/Justin";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteNames.HOME} element={<BeerCard />} ></Route>
                <Route path={RouteNames.LOGIN} element={<Login />} ></Route>
                <Route path={RouteNames.SIGNUP} element={<Signup />} ></Route>
                <Route path={`${RouteNames.SELECTED_ITEMS}/:id`} element={<SelectedItem />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}