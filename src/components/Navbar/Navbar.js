import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <NavigationBar>
      <GiHamburgerMenu style={{ color:"#FFFFFF", fontSize: "40px" }} />
      <h1>DRIVEN <span>Instrumental</span></h1>
      <BsCart2 style={{ color:"#FFFFFF", fontSize: "40px" }} />
    </NavigationBar>
  );
}

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 70px;
  padding: 14px 12px;
  background-color: #10454F;
  
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