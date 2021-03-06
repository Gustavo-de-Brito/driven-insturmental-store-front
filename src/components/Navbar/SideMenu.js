import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FilterContext from "../Contexts/FilterContext";
import { IoCloseCircleOutline } from "react-icons/io5";

function SideMenu({ setShowFilterMenu, getProductsData, showFilterMenu }) {
  const iconStyle = { color: "#FFFFFF", fontSize: "40px", alignSelf: "flex-end", margin: "12px 4px" };

  const { setProductsFilter, setCurrentPage } = useContext(FilterContext);
  const navigate = useNavigate();
  
  function selectCategory(e) {
    let filter;

    if(e.target.innerText === "Todos os produtos") {
      filter = "Produtos";
    } else {
      filter = e.target.innerText;
    }

    setProductsFilter(filter);
    getProductsData(filter);
    setCurrentPage(1);
    setShowFilterMenu(false);
    navigate("/");
  }

  return (
    <DarkBackground showFilterMenu={ showFilterMenu }>
      <FilterContainer>
        <IoCloseCircleOutline onClick={ () => setShowFilterMenu(false) } style={ iconStyle } />
        <CategoryOptions>
          <CategoryOption onClick={ selectCategory }>Todos os produtos</CategoryOption>
          <CategoryOption onClick={ selectCategory }>Cordas</CategoryOption>
          <CategoryOption onClick={ selectCategory }>Teclas</CategoryOption>
          <CategoryOption onClick={ selectCategory }>Sopros</CategoryOption>
          <CategoryOption onClick={ selectCategory }>Baterias</CategoryOption>
          <CategoryOption onClick={ selectCategory }>Percursão</CategoryOption>
        </CategoryOptions>
      </FilterContainer>
    </DarkBackground>
  );
}

const DarkBackground = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100vh;
  background-color: #10454F;
`;

const CategoryOptions = styled.ul`
  width: 100%;
  margin-top: 10px;
`;

const CategoryOption = styled.li`
  width: 100%;
  padding: 22px 30px;
  color: #FFFFFF;
  font-size: 24px;
  border: 1px #FFFFFF;
  border-style: solid none none none;
`;

export default SideMenu;