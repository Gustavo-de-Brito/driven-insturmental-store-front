import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ListProductsContext from "../Contexts/ListProductsContext";
import FilterContext from "../Contexts/FilterContext";
import SideMenu from "./SideMenu";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const canShowNavbar= () => {
    return currentRoute === "/" || currentRoute === "/cart" || currentRoute === "/checkout";
  }
  const navigate = useNavigate();

  const location = useLocation();
  const currentRoute = location.pathname;
  const showNavbar = canShowNavbar();
  const [ showFilterMenu, setShowFilterMenu ] = useState(false);

  const { setProducts } = useContext(ListProductsContext);
  const { productsFilter } = useContext(FilterContext);

  function filterProductsByPage(allProducts, filter) {
    const filterByCategory = category => {
      return category === filter || filter === "Produtos";
    }

    const QTD_PRODUCTS_FOR_PAGE = 10;
    const categoryProducts = allProducts.filter(({ category }) => filterByCategory(category));
    const qtdPages = Math.ceil(categoryProducts.length / 10);

    const filteredProducts = [];

    for(let i = 1; i <= qtdPages; i++) {
      const productsInitialPosition = (i - 1) * QTD_PRODUCTS_FOR_PAGE;
      const productsFinalPosition = i * QTD_PRODUCTS_FOR_PAGE;

      if(productsFinalPosition > categoryProducts.length) {
        filteredProducts.push(categoryProducts.slice(productsInitialPosition));
      } else {
        filteredProducts.push(categoryProducts.slice(productsInitialPosition, productsFinalPosition));
      }
    }

    setProducts(filteredProducts);
  }

  async function getProductsData(filter) {
    try{
      const response = await axios.get("http://localhost:5000/products");

      filterProductsByPage(response.data, filter);
    } catch(err) {
      console.log(err.response.data);
      alert("Ocorreu um erro ao tentar exibir os produtos");
    }
  }

  useEffect(() => {
    getProductsData(productsFilter);
  }, []);

  return (
    <NavigationBar showNavbar={ showNavbar }>
      <GiHamburgerMenu onClick={ () => setShowFilterMenu(true) } style={{ color:"#FFFFFF", fontSize: "40px" }} />
      <h1>DRIVEN <span>Instrumental</span></h1>
      <BsCart2 onClick={() => navigate("/cart")} style={{ color:"#FFFFFF", fontSize: "40px" }} />
      {
        showFilterMenu
        ?
        <SideMenu setShowFilterMenu={ setShowFilterMenu } getProductsData={ getProductsData } />
        :
        <></>
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