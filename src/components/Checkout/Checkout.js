import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import CartContext from "../Contexts/CartContext";
import UserContext from "../Contexts/UserContext";
import LoginWarning from "../shared/LoginWarning";

export default function Checkout(){

    const [nameCard, setNameCard] = useState("");
    const [numberCard, setNumberCard] = useState("");
    const [dateCard, setDateCard] = useState("");
    const [codCCV, setCodCCV] = useState("");

    const { productsSelected, total } = useContext(CartContext);
    const { userData, isUserLogged, setIsUserLogged } = useContext(UserContext);

    const navigate = useNavigate();

    function formatNumberCard(e) {
      const input = Number(e.target.value);

      if(isNaN(input)) {
        return;
      } else {
        setNumberCard(input);
      }
    }

    function formatCodCCV(e) {
      const input = Number(e.target.value);

      if(isNaN(input)) {
        return;
      } else {
        setCodCCV(input);
      }
    }

    async function sendPurchaseData(e) {
      e.preventDefault();

      const config = {
        headers: {
          Authorization: `Bearer ${ userData }`
        }
      }

      const body = {
        totalPrice: total,
        products: productsSelected,
        paymentMethod: "cartão de crédito"
      }

      try {
        await axios.post("https://driven-instrumental.herokuapp.com/purchases", body, config);

        alert("Compra realizada com sucesso");
        navigate("/");
      } catch(err) {
        if(err.response.status === 401) {
          setIsUserLogged(false);
        } else {
          alert("Ocorreu um erro ao tentar finalizar o pedido");
        }
      }
    }

    return(
        <CheckoutScreen>
            <form onSubmit={ sendPurchaseData }>
              <h1>Insira seus dados</h1>
              <select name="Pagamento" disabled>
                  <option value="1">Cartão de crédito</option>
              </select>
              <input type="text"
              inputMode="text" maxLength="20" value={nameCard} onChange={e => setNameCard(e.target.value.replace(/[^a-zA-Z'-'\s]*/gi, ''))} placeholder="Nome no cartão de crédito" />
              <input type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" maxLength="19" value={numberCard}  onChange={ formatNumberCard } placeholder="Número do cartão de crédito" />
              <span><label htmlFor="bdaymonth">Vencimento:</label>
              <input type="month" inputMode="numeric" maxLength="5" value={dateCard} onChange={e => setDateCard(e.target.value)} placeholder="Data de validade (MM/AA)" />
              </span>
              <input type="tel" inputMode="numeric" pattern="[0-9\s]{3,3}" maxLength="3" value={codCCV}  onChange={ formatCodCCV } placeholder="Código de segurança (CVV)" />

              <Footer>
                  <TotalPrice>
                      <h3>Total</h3>
                      <h2>R$ {total.toFixed(2)}</h2>
                  </TotalPrice>
                  <StartOrderButton type="submit"><h4>Finalizar pedido</h4></StartOrderButton>
              </Footer>
            </form>
            {
              !isUserLogged
              ?
              <LoginWarning />
              :
              <></>
            }
        </CheckoutScreen>
    );
}

const CheckoutScreen = styled.div`
    width: 100%;
    height: 85vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    padding: 5% 5%;
    color: white;
    
    form{
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: purple;
        
        span{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            

            label{
            width: 35%;
            color: white;
            }

            input{
                width: 50%;
            }
        }
    }

    select{
        width:85%;
        height: 8vh;
        margin-top: 1%;
        margin-bottom: 1%;
    }

    select:disabled {
      background-color: #FFFFFF;
      font-size: 20px;
      color: #000000;
      opacity: 1;
    }

    h1{
        font-family: 'Roboto';
        font-size: 28px;
        font-weight: 700;
        margin-top: 5vh;
        margin-bottom: 5vh; 
    }

    input{
        width:85%;
        height: 8vh;
        margin-top: 1%;
        margin-bottom: 1%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #000000;

        background: #FFFFFF;
        border: 1px solid #10454F;
        border-radius: 5px;
    }
`;


const Footer = styled.div`
    width: 100%;
    height: 15%;
    padding: 10px 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
`;

const TotalPrice = styled.div`
    width: 95%;
    height: 40%;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 5px;

    h3{
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 600;
        color: #10454F;
    }

    h2{
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: 700;
        color: black;  
    }
`;

const StartOrderButton = styled.button`
    width: 95%;
    height: 50%;
    background-color: #10454F;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    h4{
        font-family: 'Roboto';
        font-weight: 600;
        font-size: 20px;
        color: white;
    }

`;