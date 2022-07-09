import { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SideMenu from "./SideMenu";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const canShowNavbar= () => {
    return currentRoute === "/" || currentRoute === "/cart" || currentRoute === "/checkout";
  }

  const location = useLocation();
  const currentRoute = location.pathname;
  const showNavbar = canShowNavbar();
  const [ showFilterMenu, setShowFilterMenu ] = useState(false);

  return (
    <NavigationBar showNavbar={ showNavbar }>
      <GiHamburgerMenu onClick={ () => setShowFilterMenu(true) } style={{ color:"#FFFFFF", fontSize: "40px" }} />
      <h1>DRIVEN <span>Instrumental</span></h1>
      <BsCart2 style={{ color:"#FFFFFF", fontSize: "40px" }} />
      {
        showFilterMenu ? <SideMenu setShowFilterMenu={ setShowFilterMenu } /> : <></>
      }
    </NavigationBar>
  );
}

const NavigationBar = styled.nav`
  display: ${({ showNavbar }) => showNavbar ? "flex": "none" };
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 15vh;
  padding: 14px 12px;
  background-color: #10454F;
  z-index: 5;
  
  h1 {
    width: 100px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 30px;
    text-align: center;
    color: #FFFFFF;
  }

  span {
    font-size: 14px;
  }
`;

export default Navbar;