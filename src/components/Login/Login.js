import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';

import logo from "../../assets/images/logo.jpg"
import {
    Form,
    Logo,
    Redirect
} from "../shared/LoginForms";
import Input from "../shared/Input";
import Button from '../shared/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { signIn } from "../../services/trackit";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState(null);
    const { loggedUser, setLoggedUser } = useContext(UserContext);
    const [isLoading, setLoading] = useState(false);

    // console.log(loggedUser)

    const history = useHistory();

    function login(event) {
        event.preventDefault();
        setLoading(true)
        signIn(user)
            .then((resp) => {
                // console.log(resp.data)
                setLoggedUser({
                    name: resp.data.name,
                    image: resp.data.image,
                    token: resp.data.token
                })
                // console.log(loggedUser)
                setLoading(false)
                history.push("/hoje");
            })
            .catch((err) => {
                // console.log(err.response)
                setLoading(false)
                alert("Erro: por favor, verifique se seu email e senha estão corretos.")
            })
    }
    return (
        <Form onSubmit={login}>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>

            <Input disabled={isLoading} placeholder="email" required
                onChange={(e) => setUser({ ...user, email: e.target.value })} />

            <Input disabled={isLoading} placeholder="senha" type="password" required
                onChange={(e) => setUser({ ...user, password: e.target.value })} />

            <Button disabled={isLoading} type="submit"
                width={303} height={45}>
                {isLoading ?
                    <Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        width={45}
                        height={45}
                        timeout={3000}
                    /> : "Entrar"}
            </Button>

            <Redirect>
                <Link to="/cadastro">
                    Não tem uma conta? Cadastre-se!
                </Link>
            </Redirect>
        </Form>
    );
}
