import { useState, useContext } from "react";
import styled from "styled-components";
import FilterContext from "../Contexts/FilterContext";
import DefaultButton from "../shared/DefaultButtonStyle";

function ProductsList() {
  const filterByCategory = category => {
    return category === productsFilter || productsFilter !== "Produtos";
  }

  const [ products, setProducts ] = useState([]);
  const showProducts = products.filter(({ category }) => filterByCategory(category));

  const { productsFilter } = useContext(FilterContext);

  return (
    <ProductsUl>
        {
          products.length > 0
          ?
          showProducts.map(({ name, imageUrl, price }, index) => {
            return (
              <Product key={index} >
                <img src={ imageUrl } alt={ name }  />
                <h3>{ name }</h3>
                <p>R$ { price }</p>
                <DefaultButton>Adicionar ao carrinho</DefaultButton>
              </Product>
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

const Product = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10%;
  background-color: #D9D9D9;
  border-radius: 8px;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  h3 {
    width: 90%;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;



export default ProductsList;