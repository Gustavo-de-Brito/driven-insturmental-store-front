import { useContext } from "react";
import styled from "styled-components";
import FilterContext from "../Contexts/FilterContext";
import ListProductsContext from "../Contexts/ListProductsContext";
import Product from "./Product";

function ProductsList() {
  const { currentPage } = useContext(FilterContext);
  const { products } = useContext(ListProductsContext);

  return (
    <ProductsUl>
        {
          products.length > 0
          ?
          products[currentPage - 1].map((product, index) => {
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