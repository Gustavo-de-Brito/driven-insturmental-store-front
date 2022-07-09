import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FilterContext from "./Contexts/FilterContext";
import ListProductsContext from "./Contexts/ListProductsContext";
import HomeView from "./Home/HomeView";
import GlobalStyle from "./theme/globalStyle";
import Navbar from "./Navbar/Navbar";

function App() {
  const [ productsFilter, setProductsFilter ] = useState("Produtos");
  const [ products, setProducts ] = useState([]);

  return (
    <FilterContext.Provider value={ { productsFilter, setProductsFilter } } >
      <ListProductsContext.Provider value={ { products, setProducts } } >
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={ <HomeView /> } /> 
          </Routes>
        </BrowserRouter>
      </ListProductsContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;