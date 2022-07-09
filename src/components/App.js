import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FilterContext from "./Contexts/FilterContext";
import HomeView from "./Home/HomeView";
import GlobalStyle from "./theme/globalStyle";
import Navbar from "./Navbar/Navbar";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

function App() {
  const [ productsFilter, setProductsFilter ] = useState("Produtos");

  return (
    <FilterContext.Provider value={ { productsFilter, setProductsFilter } } >
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomeView /> } /> 
          <Route path="/cart" element={ <Cart/> } /> 
          <Route path="/checkout" element={ <Checkout/> } /> 
        </Routes>
      </BrowserRouter>
    </FilterContext.Provider>
  );
}

export default App;