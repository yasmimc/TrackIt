import logo from "../Login/logo.jpg"
import {
    Screen,
    Logo,
    SubmitBtn,
    Redirect
} from "./style";

export default function Login(){
    return(
        <Screen>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <input placeholder="email"/>
            <input placeholder="senha"/>
            <SubmitBtn>
                Entrar
            </SubmitBtn>
            <Redirect>
                Não tem uma conta? Cadastre-se!
            </Redirect>
        </Screen>
    );
}
