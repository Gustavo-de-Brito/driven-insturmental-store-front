import styled from "styled-components";
import guitar from "../../assets/images/guitar.jpg"

export default function Cart(){


    return(
    <CartScreen>
        <ListProducts>
            <Product>
                <Left>
                    <ImageProductPreview>
                        <img src={guitar} alt="" />
                    </ImageProductPreview>
                </Left>
                <Rigth>
                    <ProductTitle>Guitarra Les Paul Gibson Special Tribute P90</ProductTitle>
                    <ProductPrice>R$ 14.041,71</ProductPrice>
                </Rigth>
            </Product>
            <Product>
                <Left>
                    <ImageProductPreview>
                        <img src={guitar} alt="" />
                    </ImageProductPreview>
                </Left>
                <Rigth>
                    <ProductTitle>Guitarra Les Paul Gibson Special Tribute P90</ProductTitle>
                    <ProductPrice>R$ 14.041,71</ProductPrice>
                </Rigth>
            </Product>
            <Product>
                <Left>
                    <ImageProductPreview>
                        <img src={guitar} alt="" />
                    </ImageProductPreview>
                </Left>
                <Rigth>
                    <ProductTitle>Guitarra Les Paul Gibson Special Tribute P90</ProductTitle>
                    <ProductPrice>R$ 14.041,71</ProductPrice>
                </Rigth>
            </Product>
            <Product>
                <Left>
                    <ImageProductPreview>
                        <img src={guitar} alt="" />
                    </ImageProductPreview>
                </Left>
                <Rigth>
                    <ProductTitle>Guitarra Les Paul Gibson Special Tribute P90</ProductTitle>
                    <ProductPrice>R$ 14.041,71</ProductPrice>
                </Rigth>
            </Product>
            <Product>
                <Left>
                    <ImageProductPreview>
                        <img src={guitar} alt="" />
                    </ImageProductPreview>
                </Left>
                <Rigth>
                    <ProductTitle>Guitarra Les Paul Gibson Special Tribute P90</ProductTitle>
                    <ProductPrice>R$ 14.041,71</ProductPrice>
                </Rigth>
            </Product>
            <Product>
                <Left>
                    <ImageProductPreview>
                        <img src={guitar} alt="" />
                    </ImageProductPreview>
                </Left>
                <Rigth>
                    <ProductTitle>Guitarra Les Paul Gibson Special Tribute P90</ProductTitle>
                    <ProductPrice>R$ 14.041,71</ProductPrice>
                </Rigth>
            </Product>
            <Product>
                <Left>
                    <ImageProductPreview>
                        <img src={guitar} alt="" />
                    </ImageProductPreview>
                </Left>
                <Rigth>
                    <ProductTitle>Guitarra Les Paul Gibson Special Tribute P90</ProductTitle>
                    <ProductPrice>R$ 14.041,71</ProductPrice>
                </Rigth>
            </Product>
        </ListProducts>
        
        <Footer>
        <TotalPrice>
            <h3>Total</h3>
            <h2>R$ 1899.98</h2>
        </TotalPrice>
        <StartOrderButton><h4>Iniciar pedido</h4></StartOrderButton>
        </Footer>
    </CartScreen>);
}

const CartScreen = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
    padding: 3% 3%;
`
const ListProducts = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    margin-bottom: 20vh;
`
const Product = styled.div`
    width: 100%;
    height: 20vh;
    padding: 3% 3%;
    margin-top: 5%;
    background-color: #D9D9D9;
    display: flex;
`
const Left = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImageProductPreview = styled.div`
    width: 100%;
    height: 85%;


    img{
        width:100%;
        height:100%;
        border-radius: 10px;
    }
`


const Rigth = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const ProductTitle = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #000000;
`
const ProductPrice = styled.div`
    width: 80%;
    height: 20%;
    bottom: 0;
    position: absolute;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #506266;

`

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
    
`

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
`

const StartOrderButton = styled.div`
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
`