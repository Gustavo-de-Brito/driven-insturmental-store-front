import styled from "styled-components";
import { useState, useContext } from "react";
import ProductsList from "./ProductsList";
import FilterContext from "../Contexts/FilterContext";
import logo from "../../assets/images/logo-instrumental.png";
import Pagination from "./Pagination";

function HomeView() {
  const [ currentPage, setCurrentPage ] = useState(1);
  const { productsFilter } = useContext(FilterContext);

  return (
    <ViewContainer>
      <BrandLogo />
      <ProductsContainer>
        <h2>{ productsFilter }</h2>
        <ProductsList currentPage={ currentPage } />
        <Pagination currentPage={ currentPage } setCurrentPage={ setCurrentPage } />
      </ProductsContainer>
    </ViewContainer>
  );
}

const BrandLogo = styled.div`
    width: 100vw;
    height: 36vh;
    margin-top: 10px;
    border: 1px solid #000;
    background-position: center;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 50px;
  background-color: #CACACA;
  color: #000000;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  
  h2 {
    font-size: 30px;
    font-weight: bold;
  }
  `;

export default HomeView;