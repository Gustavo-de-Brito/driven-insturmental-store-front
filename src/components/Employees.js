import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import React from 'react'
import { render } from 'react-dom'
import { ThreeDots } from 'react-loader-spinner'

export default function Employees() {
	const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const password = 12345;

	function fazerLogin (event) {
		event.preventDefault();

        setLoading(true);
        if (senha == password) {
            navigate("/register-product");
        } else {
            alert("Senha incorreta!");
        }

	}

    return (
        <>
            <Logo>
            <h1>DRIVEN <br></br> INSTRUMENTAL</h1>
            </Logo>

            <Form>
                <form onSubmit={fazerLogin}>
                    <input type="password" placeholder="Senha de admin (é 12345 ;))" value={senha} onChange={e => setSenha(e.target.value)} required disabled={loading}/>
                    <br/>
                    {loading ? <button disabled><ThreeDots color="#fff" height={'1.8rem'} width={'100%'} /></button> : <button type="submit">Entrar</button>}
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

const Cadastro = styled.div`
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

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
        margin-bottom: 24px;
        width: 80vw;
        height: 45px;
        background-color: #10454F;
        color: white;
        font-size: 21px;
    }
`;