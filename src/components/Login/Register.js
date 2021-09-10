import logo from "../../assets/images/logo.jpg"
import {
    Screen,
    Logo,
    SubmitBtn,
    Redirect
} from "../shared/LoginForms";
import Input from "../shared/Input";

export default function Register() {
    return (
        <Screen>
         <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <Input placeholder="email"/>
            <Input placeholder="senha"/>
            <Input placeholder="nome"/>
            <Input placeholder="foto"/>
            <SubmitBtn>
                Cadastrar
            </SubmitBtn>
            <Redirect>
                Já tem uma conta? Faça login!
            </Redirect>
        </Screen>
    );
}