import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import BeerCard from "../Component/JustIn";
import SelectedItem from "../Component/cart/SelectedItem";
import RouteNames from "./routerNames";

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path={RouteNames.HOME} element={<BeerCard/>} ></Route>
            <Route path={`${RouteNames.SELECTED_ITEMS}/:id`} element={<SelectedItem/>} ></Route>
        </Routes>
        </BrowserRouter>
    );
}