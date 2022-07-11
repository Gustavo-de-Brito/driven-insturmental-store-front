import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from 'react'
import { render } from 'react-dom'
import { ThreeDots } from 'react-loader-spinner'

export default function RegisterProduct () {
    const [url, setUrl] = useState("");
  	const [categoria, setCategoria] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function fazerCadastro () {
      setLoading(true);

      const requisicao = axios.post("https://driven-instrumental.herokuapp.com/products", {
          name: nome,
          imageUrl: url,
          price: preco,
          category: categoria
      });

      requisicao.then((response) => {
          navigate("/register-product");
          setLoading(false);
          cleanInputs();
        });
        
        requisicao.catch((err) => {
          console.log(err);
          setLoading(false);
          cleanInputs();
      });
    }

    function validateImage(e) {
      e.preventDefault();
      const image = new Image();

      if(!url.includes("https")) {
        return alert("A URL da imagem não está no formato HTTPS");
      }

      image.src = url;
      image.onerror = () => alert("A URL da imagem é inválida");

      image.onload = fazerCadastro;
    }

    function cleanInputs() {
      setUrl("");
      setCategoria("");
      setNome("");
      setPreco("");
    }

    return (
        <>
        <Logo>
        <h1>DRIVEN <br></br> INSTRUMENTAL</h1>
        </Logo>
        
            <Form>
                <form onSubmit={ validateImage }>
                    <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required disabled={loading}/>
                    <input type="url" placeholder="URL da imagem" value={url} onChange={e => setUrl(e.target.value)} required disabled={loading}/>
                    <input type="text" placeholder="Categoria" value={categoria} onChange={e => setCategoria(e.target.value)} required disabled={loading}/>
                    <input type="number" placeholder="Preco" value={preco} onChange={e => setPreco(e.target.value)} required disabled={loading}/>
                    {loading ? <button disabled><ThreeDots color="#fff" height={'1.8rem'} width={'100%'} /></button> : <button type="submit">Cadastrar novo produto</button>}
                </form>
            </Form>
        </>
    );
}

const Logo = styled.div`
    margin-top: 134px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const RedirectLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a:link {
        text-decoration: none;
        text-decoration: black;
    }

    h1 {
        color: white;
        text-decoration: underline;
    }
`;

const Form = styled.div`
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    input {
        border-width: 1px;
        border-color: #D4D4D4;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        width: 80vw;
        height: 52px;
        margin-bottom: 24px;
    }

    input:disabled{
        background: grey;
        color: darkgray;
        opacity: 0.2;
        cursor: progress;
    }

    button:disabled{
        background: grey;
        color: darkgray;
        opacity: 0.2;
        cursor: progress;
    }

    input::placeholder {
        padding-left: 11px;
        font-size: 14px;
        color: #7E7E7E;
    }

    button {
        border-style: none;
        border-radius: 5px;
        margin-bottom: 20px;
        width: 80vw;
        height: 45px;
        background-color: #10454F;
        color: white;
        font-size: 21px;
    }
`;