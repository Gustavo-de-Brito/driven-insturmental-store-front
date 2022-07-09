import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../UserContext";
import LoginWarning from "../shared/LoginWarning";
import DefaultButton from "../shared/DefaultButtonStyle";

function Product({ product }) {
  const { userData, isUserLogged, setIsUserLogged } = useContext(UserContext);

  async function addToCart() {
    const config = {
      headers: {
        Authorization: `Bearer ${ userData }`
      }
    };

    const body = {
      product
    };

    try {
      await axios.post("http://localhost:5000/carts", body, config);

      alert("Produto adicionado ao carrinho com sucesso");
    } catch(err) {
      if(err.response.status === 409) {
        alert("Esse produto já está no carrinho");
      } else if(err.response.status === 401) {
        setIsUserLogged(false);
      }
      console.log(err);
    }
  }

  return(
    <ProductContainer >
      <img src={ product.imageUrl } alt={ product.name }  />
      <h3>{ product.name }</h3>
      <p>R$ { product.price }</p>
      <DefaultButton onClick={ () => addToCart(product) }>Adicionar ao carrinho</DefaultButton>
      {
        !isUserLogged
        ?
        <LoginWarning />
        :
        <></>
      }
    </ProductContainer>
  )
}

const ProductContainer = styled.li`
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

export default Product;