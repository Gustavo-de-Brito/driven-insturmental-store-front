import styled from "styled-components";
import ProductsList from "./ProductsList";
import logo from "../../assets/images/logo-instrumental.png";

function HomeView() {
  return (
    <ViewContainer>
      <BrandLogo />
      <ProductsContainer>
        <h2>Produtos</h2>
        <ProductsList />
      </ProductsContainer>
    </ViewContainer>
  );
}

const BrandLogo = styled.div`
    width: 100vw;
    height: 36vh;
    margin-top: 80px;
    border: 1px solid #000;
    background-position: center;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 50px;
  background-color: #CACACA;
`;

const BrandLsogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-height: 300px;
  overflow: hidden;
  `;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  
  h2 {
    font-size: 30px;
    font-weight: bold;
  }
  `;

export default HomeView;