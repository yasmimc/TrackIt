import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';

import logo from "../../assets/images/logo.jpg"
import {
    Screen,
    Logo,
    SubmitBtn,
    Redirect
} from "../shared/LoginForms";
import Input from "../shared/Input";
import Button from '../shared/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { signIn } from "../../services/trackit";

export default function Login(){
    const { user, setUser } = useContext(UserContext);
    const [ loading, setLoading ] = useState(false);

    console.log(!!loading);
    function login(){
        if (!user) return;
        if (!user.email || !user.password) return;
        setLoading(true)
        signIn(user)
            .then((resp)=>{
                console.log(resp)
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err.response)
                setLoading(false)
            })
    }
    return(
        <Screen>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <Input disabled={loading} placeholder="email" onChange={(e)=>setUser({...user, email: e.target.value})}/>
            <Input disabled={loading} placeholder="senha" onChange={(e)=>setUser({...user, password: e.target.value})}/>
            <Button disabled={loading} onClick={login} width={303} height={45}>
                {loading ? 
                <Loader
                    type="ThreeDots"
                    color="#FFFFFF"
                    width= {45}
                    height= {45}
                    timeout={3000} 
                /> : "Entrar"}
            </Button>
            <Redirect>
                Não tem uma conta? Cadastre-se!
            </Redirect>
        </Screen>
    );
}
