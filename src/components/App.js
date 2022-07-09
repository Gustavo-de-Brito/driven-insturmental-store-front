import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FilterContext from "./Contexts/FilterContext";
import HomeView from "./Home/HomeView";
import GlobalStyle from "./theme/globalStyle";
import Navbar from "./Navbar/Navbar";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import CartContext from "./Contexts/CartContext"

function App() {
  const [ productsFilter, setProductsFilter ] = useState("Produtos");
  const [total, setTotal] = useState(0);
  const [productsSelected, setProductsSelected] = useState([]);
 
  return (
    <FilterContext.Provider value={ { productsFilter, setProductsFilter } } >
      <CartContext.Provider value={ {productsSelected, setProductsSelected, total, setTotal} } >
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomeView /> } /> 
          <Route path="/cart" element={ <Cart/> } /> 
          <Route path="/checkout" element={ <Checkout/> } /> 
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;