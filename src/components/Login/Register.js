import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import logo from "../../assets/images/logo.jpg"
import {
    Screen,
    Logo,
    SubmitBtn,
    Redirect
} from "../shared/LoginForms";
import Input from "../shared/Input";

import { postNewUser } from '../../services/trackit';

export default function Register() {
    const { user, setUser } = useContext(UserContext);

    function register(){
        if (!user.email || !user.password || !user.name || !user.image) return;
        postNewUser(user)
            .then((resp)=>console.log(resp))
            .catch((err)=>console.log(err.response))
    }

    return (
        <Screen>
         <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <Input placeholder="email" onChange={(e)=> setUser({...user, email: e.target.value})}/>
            <Input placeholder="senha" onChange={(e)=> setUser({...user, password: e.target.value})}/>
            <Input placeholder="nome" onChange={(e)=> setUser({...user, name: e.target.value})}/>
            <Input placeholder="foto" onChange={(e)=> setUser({...user, image: e.target.value})}/>
            <SubmitBtn onClick={register}>
                Cadastrar
            </SubmitBtn>
            <Redirect>
                Já tem uma conta? Faça login!
            </Redirect>
        </Screen>
    );
}