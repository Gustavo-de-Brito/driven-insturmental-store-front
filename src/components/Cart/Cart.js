import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CartContext from "../Contexts/CartContext";
import UserContext from "../Contexts/UserContext";
import LoginWarning from "../shared/LoginWarning";


export default function Cart(){

    const navigate = useNavigate();
    const [listProducts, setListProducts] = useState([]);
    const { productsSelected, setProductsSelected, total, setTotal } = useContext(CartContext);
    const { userData, isUserLogged, setIsUserLogged } = useContext(UserContext);



    useEffect(() => {
        //if(!userData) navigate("/");
        //if(!userData) console.log(userData);
        getCartProducts();
        setProductsSelected([]);
        setTotal(0);
    }, []);



    const config = {
        headers: {
            "Authorization": `Bearer ${userData}`
        }
    }

    async function getCartProducts(){
        //const cart = await axios.get(`https://driven-instrumental.herokuapp.com/carts`, config);

        try{
            const cart = await axios.get(`https://driven-instrumental.herokuapp.com/carts`, config);

            if(!cart){
                console.log("Problema ao obter cart");
                setTimeout(() => navigate("/"), 3000);
                return;
            }        
            // console.log("resposta carts: " );
            // console.log(cart.data.products);
    
            const cartProducts = await axios.post(`https://driven-instrumental.herokuapp.com/cartProducts`, {cartProducts: cart.data.products}, config);
            //cart.data.products
            if (!cartProducts) {
                console.log("Problema ao obter produtos do carrinho");
                return;
              }
    
            // console.log("resposta cartProducts: " );
            // console.log(cartProducts.data);

            setListProducts([...cartProducts.data]);
        }catch(error){
            if(error.response.status === 401){
                console.log(error);
                setIsUserLogged(false);
            }
        }

    }


    function selectProduct(index){
        
        const addSelectedProduct = listProducts[index];
        const productExistsInCart = productsSelected.some(product => product._id === addSelectedProduct._id);

        if (!productExistsInCart) {
            setProductsSelected([...productsSelected, addSelectedProduct]);
            setTotal(total + Number(addSelectedProduct.price.replace(",", ".")));
        }
        else {
            const arrayRemoveProduct = productsSelected.filter(product => product._id !== addSelectedProduct._id);
            setProductsSelected([...arrayRemoveProduct]);
            setTotal(total - Number(addSelectedProduct.price.replace(",", ".")));
        }

    }


    


    return(
    <CartScreen>
        {!isUserLogged ? <LoginWarning /> :

        <>
                    <ListProducts>
            {listProducts.map((product, index) => 
                            <Product>
                            <Left>
                                <ImageProductPreview>
                                    <img src={product.imageUrl} alt={product.name} />
                                </ImageProductPreview>
                            </Left>
                            <Rigth>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductPrice>R$ {product.price}</ProductPrice>
                                <input type="checkbox" onClick={() => selectProduct(index)}></input>
                            </Rigth>
                        </Product>)}
                        
               
        </ListProducts>
        
        <Footer>
        <TotalPrice>
            <h3>Total</h3>
            <h2>R$ {total.toFixed(2)}</h2>
            {productsSelected.id}
        </TotalPrice>
        <StartOrderButton onClick={() => productsSelected.length > 0 ? navigate("/checkout") : alert("Selecione pelo menos um produto!") }><h4>Iniciar pedido</h4></StartOrderButton>
        </Footer>
        </>

        }
    </CartScreen>);
}

const CartScreen = styled.div`
    width: 100%;
    height: 85vh;
    background-color: #E5E5E5;
    padding: 3% 3%;
`
const ListProducts = styled.div`
    width:100%;
    height: 100%;
    padding-bottom: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
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

    input{
        position: absolute;
        right: 0;
        bottom: 0;
    }
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

const Space = styled.div`
    width: 100%;
    height: 20vh;
    padding: 3% 3%;
    margin-top: 5%;
    margin-bottom: 15%;
    background-color: #E5E5E5;
    display: flex;
`