import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import NotFound from "../compenents/NotFound";
import Home from "./Home";
import Product from "./Product";
import RouteIndex from "./RouteIndex";
import SignUp from "../Form-validation/SignUp";
import MyWishlist from "./MyWishlist";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NavBar />}>
            <Route index element={<RouteIndex />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newProduct" element={<Product />} />
            <Route path="/myOrders" element={<MyWishlist />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
