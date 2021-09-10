import logo from "../../assets/images/logo.jpg"
import {
    Screen,
    Logo,
    SubmitBtn,
    Redirect
} from "../shared/LoginForms";
import Input from "../shared/Input";

export default function Login(){
    return(
        <Screen>
            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <Input placeholder="email"/>
            <Input placeholder="senha"/>
            <SubmitBtn>
                Entrar
            </SubmitBtn>
            <Redirect>
                Não tem uma conta? Cadastre-se!
            </Redirect>
        </Screen>
    );
}
