import { useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import FilterContext from "../Contexts/FilterContext";
import ListProductsContext from "../Contexts/ListProductsContext";
import Product from "./Product";

function ProductsList({ currentPage }) {
  const filterByCategory = category => {
    return category === productsFilter || productsFilter === "Produtos";
  }

  const { productsFilter } = useContext(FilterContext);
  const { products, setProducts } = useContext(ListProductsContext);
  
  function filterProductsByPage() {
    const QTD_PRODUCTS_FOR_PAGE = 10;
    const productsInitialPosition = (currentPage - 1) * QTD_PRODUCTS_FOR_PAGE;
    const productsFinalPosition = currentPage * QTD_PRODUCTS_FOR_PAGE;

    const categoryProducts = products.filter(({ category }) => filterByCategory(category));

    if(productsFinalPosition > categoryProducts.length) {
      return categoryProducts.slice(productsInitialPosition);
    } else {
      return categoryProducts.slice(productsInitialPosition, productsFinalPosition);
    }
  }

  const showProducts = filterProductsByPage();

  useEffect(() => {
    async function getProductsData() {
      try{
        const response = await axios.get("http://localhost:5000/products");

        setProducts(response.data);
      } catch(err) {
        console.log(err.response.data);
        alert("Ocorreu um erro ao tentar exibir os produtos");
      }
    }

    getProductsData();
  }, [setProducts]);

  return (
    <ProductsUl>
        {
          products.length > 0
          ?
          showProducts.map((product, index) => {
            return (
              <Product key={ index } product={ product } />
            );
          })
          :
          <></>
        }
    </ProductsUl>
  );
}

const ProductsUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 0 10px;
`;

export default ProductsList;