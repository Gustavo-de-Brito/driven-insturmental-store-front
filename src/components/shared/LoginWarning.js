import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import DefaultButton from "./DefaultButtonStyle";

function LoginWarning() {
  const { setIsUserLogged } = useContext(UserContext);
  const navigate = useNavigate();

  function loginUser() {
    setIsUserLogged(true);
    navigate("/login")
  }

  function keepNavigating() {
    setIsUserLogged(true);
    navigate("/");
  }

  return (
    <Background>
      <p>Para usar os recursos do carrinho é necessário estar logado</p>
      <DefaultButton onClick={ loginUser }>Fazer Login</DefaultButton>
      <KeepNavigatingButton onClick={ keepNavigating }>Continuar navegando sem login</KeepNavigatingButton>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: rgba(202, 202, 202, 0.22);
  color: #000000;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  p {
    font-size: 26px;
    margin-bottom: 60px;
  }
`;

const KeepNavigatingButton = styled.div`
  padding: 12px 14px;
  font-size: 24px;
  font-weight: bold;
  color: #10454F;
  background-color: transparent;
  border: none;
`;

export default LoginWarning;