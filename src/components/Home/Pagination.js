import { useContext } from "react";
import styled from "styled-components";
import ListProductsContext from "../Contexts/ListProductsContext";
import FilterContext from "../Contexts/FilterContext";
import { IoArrowBackCircleSharp, IoArrowForwardCircle } from "react-icons/io5";
import DefaultButton from "../shared/DefaultButtonStyle";

function Pagination() {
  const { products } = useContext(ListProductsContext);
  const { currentPage, setCurrentPage } = useContext(FilterContext);

  const qtdPages = products.length;
  
  const navigateButtonStyle = { color: "#10454F", fontSize: "40px"};

  return (
    <PaginationContainer>
      {
        qtdPages > 0
        ?
        <>
          <IoArrowBackCircleSharp
            style={
              currentPage === 1 
              ? 
              {...navigateButtonStyle, display: "none"}
              : 
              navigateButtonStyle
            }
            onClick={ () => {
              setCurrentPage( currentPage - 1 );
              window.scroll({top: 0, behavior: "smooth"});
            }}
          />
          {
            qtdPages === 1
            ?
            <></>
            :
            <DefaultButton>{ currentPage }</DefaultButton>
          }
          <IoArrowForwardCircle
            style={ 
              qtdPages === currentPage 
              ? 
              {...navigateButtonStyle, display: "none"}
              : 
              navigateButtonStyle
              }
              onClick={ () => {
                setCurrentPage( currentPage + 1 );
                window.scroll({top: 0, behavior: "smooth"});
              }}
          />
        </>
        :
        <></>
      }
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin-top: 26px;
  overflow-x: hidden;

  button {
    width: auto;
    margin: 0 20px
  }
`;

export default Pagination;