import styled from "styled-components";
import logo from "../Login/logo.jpg"
import {
    Screen,
    Logo,
    SubmitBtn,
    Redirect
} from "./style";

export default function Register() {
    return (
        <Screen>
         <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <input placeholder="email"/>
            <input placeholder="senha"/>
            <input placeholder="nome"/>
            <input placeholder="foto"/>
            <SubmitBtn>
                Cadastrar
            </SubmitBtn>
            <Redirect>
                Já tem uma conta? Faça login!
            </Redirect>
        </Screen>
    );
}