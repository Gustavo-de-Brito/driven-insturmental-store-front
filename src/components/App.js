import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FilterContext from "./Contexts/FilterContext";
import HomeView from "./Home/HomeView";
import GlobalStyle from "./theme/globalStyle";

function App() {
  const [ productsFilter, setProductsFilter ] = useState("Produtos");

  return (
    <FilterContext.Provider value={ { productsFilter, setProductsFilter } } >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomeView /> } /> 
        </Routes>
      </BrowserRouter>
    </FilterContext.Provider>
  );
}

export default App;