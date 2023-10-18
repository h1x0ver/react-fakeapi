import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Header from "./components/Header/Header";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product-detail/:id" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
