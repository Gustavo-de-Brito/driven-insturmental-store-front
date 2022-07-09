import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CartContext from "../Contexts/CartContext";
//import UserContext from "../contexts/UserContext";


export default function Cart(){

    const products = [
        {
            _id: 1,
            name: "Violão Folk Strinberg SD200C Elétrico Cordas de Aço com Afinador",
            imageUrl: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/07/1107112_violao-folk-strinberg-sd200c-eletrico-cordas-de-aco-com-afinador-ms_z6_637394988356130006.jpg",
            price: "829,71",
            category: "cordas"
          },
        {
            _id: 2,
            name: "Baixo 4 Cordas Passivo SX American Alder",
            imageUrl: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/69/1169944_baixo-4-cordas-passivo-sx-american-alder-ms_z2_637822484498786404.jpg",
            price: "2.159,01",
            category: "cordas"
        },
        {
            _id: 3,
            name: "Guitarra Stratocaster Strinberg STS-10",
            imageUrl: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/10/87/1087243_guitarra-stratocaster-strinberg-sts-100-ms_z45_637528955199479254.jpg",
            price: "699,21",
            category: "cordas"
        },
        {
            _id: 4,
            name: "Violão Folk Strinberg SD200C Elétrico Cordas de Aço com Afinador",
            imageUrl: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/07/1107112_violao-folk-strinberg-sd200c-eletrico-cordas-de-aco-com-afinador-ms_z6_637394988356130006.jpg",
            price: "829,71",
            category: "cordas"
          },
        {
            _id: 5,
            name: "Baixo 4 Cordas Passivo SX American Alder",
            imageUrl: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/69/1169944_baixo-4-cordas-passivo-sx-american-alder-ms_z2_637822484498786404.jpg",
            price: "2.159,01",
            category: "cordas"
        },
        {
            _id: 6,
            name: "Guitarra Stratocaster Strinberg STS-10",
            imageUrl: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/10/87/1087243_guitarra-stratocaster-strinberg-sts-100-ms_z45_637528955199479254.jpg",
            price: "699,21",
            category: "cordas"
        }
    ]

    const cart = {
            _id: 1,
            userId: 113,
            products: [ 2, 3 ]
        }
    
    const navigate = useNavigate();
    const [listProducts, setListProducts] = useState([]);
    const { productsSelected, setProductsSelected, total, setTotal } = useContext(CartContext);
    //const [total, setTotal] = useState(0);
    //const [productsSelected, setProductsSelected] = useState([]);
    //const { userData, userName } = useContext(UserContext);
    const userData = "asdasdasdasdsa";


    useEffect(() => {
        //if(!userData) navigate("/");
        //getCartProducts();
        setProductsSelected([]);
        setTotal(0);
    }, []);



    const config = {
        headers: {
            "Authorization": `Bearer ${userData}`
        }
    }

    async function getCartProducts(){
        let sum = 0;

        const cart = await axios.get(`https://driven-instrumental.herokuapp.com/carts`, config);

        if(!cart){
            console.log("Problema ao obter cart");
            setTimeout(() => navigate("/"), 3000);
            return;
        }

        
        console.log("resposta carts: " );
        console.log(cart);
        
        const cartProducts = await axios.get(`http://localhost:5000/getProducts`, cart.products, config);

        if (!cartProducts) {
            console.log("Problema ao obter produtos do carrinho");
            return;
          }

        setListProducts(...cartProducts);

        // for(let i=0; i<cartProducts; i++){
        //     sum = sum + Number(cartProducts[i].price);
        // }
        // setTotal(sum);
    }


    function selectProduct(index){
        
        const addSelectedProduct = products[index];
        const productExistsInCart = productsSelected.some(product => product._id === addSelectedProduct._id);

        console.log(productExistsInCart);

        if (!productExistsInCart) {
            setProductsSelected([...productsSelected, addSelectedProduct]);
            setTotal(total + Number(addSelectedProduct.price.replace(".","").replace(",", ".")));
        }
        else {
            const arrayRemoveProduct = productsSelected.filter(product => product._id !== addSelectedProduct._id);
            setProductsSelected([...arrayRemoveProduct]);
            setTotal(total - Number(addSelectedProduct.price.replace(".","").replace(",", ".")));
        }

    }


    


    return(
    <CartScreen>
        <ListProducts>
            {products.map((product, index) => 
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