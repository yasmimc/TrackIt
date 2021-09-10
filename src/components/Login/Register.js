import React, { useState } from 'react';

import logo from "../../assets/images/logo.jpg"
import {
    Screen,
    Logo,
    Redirect
} from "../shared/LoginForms";
import Input from "../shared/Input";

import { signUp } from '../../services/trackit';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Button from '../shared/Button';

export default function Register() {
    const [ user, setUser ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);

    function register(){
        if (!user) return;
        if (!user.email || !user.password || !user.name || !user.image) return;
        setLoading(true);
        signUp(user)
            .then((resp)=>{
                setLoading(false);
                console.log(resp)
            })
            .catch((err)=>{
                setLoading(false);
                // console.log(err.response)
                alert("Erro: por favor, verifique se seus dados de resgistro estão corretos.")
            })
    }

    return (
        <Screen>
         <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <Input disabled={isLoading} placeholder="email" onChange={(e)=> setUser({...user, email: e.target.value})}/>
            <Input disabled={isLoading} placeholder="senha" onChange={(e)=> setUser({...user, password: e.target.value})}/>
            <Input disabled={isLoading} placeholder="nome" onChange={(e)=> setUser({...user, name: e.target.value})}/>
            <Input disabled={isLoading} placeholder="foto" onChange={(e)=> setUser({...user, image: e.target.value})}/>
            <Button disabled={isLoading} onClick={register} width={303} height={45}>
                {isLoading ? <Loader
                    type="ThreeDots"
                    color="#FFFFFF"
                    width= {45}
                    height= {45}
                    timeout={3000} 
                /> : "Cadastrar"}
            </Button>
            <Redirect>
                Já tem uma conta? Faça login!
            </Redirect>
        </Screen>
    );
}