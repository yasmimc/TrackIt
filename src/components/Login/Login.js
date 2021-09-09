import styled from "styled-components";
import logo from "../Login/logo.jpg"

export default function Login(){
    return(
        <LoginScreen>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <input placeholder="email"/>
            <input placeholder="senha"/>
            <Enter>
                Entrar
            </Enter>
            <SignIn>
                Não tem uma conta? Cadastre-se!
            </SignIn>
        </LoginScreen>
    );
}

const LoginScreen = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 303px;
        height: 45px;
        font-size: 20px;
        margin-bottom: 6px;
        padding: 10px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    input::placeholder {
        color: #DBDBDB;
    }
`

const Logo = styled.div`
    img {
        width: 180px;
        margin-top: 68px;
        margin-bottom: 32px;
    }
`
const Enter = styled.button`
    width: 303px;
    height: 45px;
    font-size: 21px;
    color: #FFFFFF;

    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
`

const SignIn = styled.div`
    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
    margin-top: 25px;
`