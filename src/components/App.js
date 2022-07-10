import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FilterContext from "./Contexts/FilterContext";
import ListProductsContext from "./Contexts/ListProductsContext";
import UserContext from "./UserContext";
import GlobalStyle from "./theme/globalStyle";
import HomeView from "./Home/HomeView";
import Login from "./Login";
import Cadastro from "./Cadastro";

import Employees from "./Employees";
import RegisterProduct from "./RegisterProduct";
import UserContext from "./UserContext";

import Navbar from "./Navbar/Navbar";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import CartContext from "./Contexts/CartContext"


function App() {
  const [ productsFilter, setProductsFilter ] = useState("Produtos");
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ products, setProducts ] = useState([]);
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const [ isUserLogged, setIsUserLogged ] = useState(true)
  const [total, setTotal] = useState(0);
  const [productsSelected, setProductsSelected] = useState([]);

  return (
    <FilterContext.Provider value={ { productsFilter, setProductsFilter, currentPage, setCurrentPage } } >
      <ListProductsContext.Provider value={ { products, setProducts } } >
        <UserContext.Provider value={{userData, setUserData, userName, setUserName, isUserLogged, setIsUserLogged}}>
        <CartContext.Provider value={ {productsSelected, setProductsSelected, total, setTotal} } >
          <GlobalStyle />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={ <HomeView /> } /> 
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/register-product" element={<RegisterProduct />} />
              <Route path="/cart" element={ <Cart/> } /> 
              <Route path="/checkout" element={ <Checkout/> } /> 
            </Routes>
          </BrowserRouter>
          </CartContext.Provider>
        </UserContext.Provider>
      </ListProductsContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;