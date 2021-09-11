import React, { useState } from 'react';

import logo from "../../assets/images/logo.jpg"
import {
    Form,
    Logo,
    Redirect
} from "../shared/LoginForms";
import Input from "../shared/Input";

import { signUp } from '../../services/trackit';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Button from '../shared/Button';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function Register() {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const history = useHistory();

    function register(event) {
        event.preventDefault();
        if (!user) return;
        if (!user.email || !user.password || !user.name || !user.image) return;
        setLoading(true);
        signUp(user)
            .then((resp) => {
                setLoading(false);
                // console.log(resp)
                history.push("/");
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response)
                if (err.response.status === 409)
                    return alert("Usuário já cadastrado");
                alert("Erro: por favor, verifique se seus dados de resgistro estão corretos.")
            })
    }

    return (
        <Form onSubmit={register}>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>

            <Input disabled={isLoading} placeholder="email" required
                onChange={(e) => setUser({ ...user, email: e.target.value })} />

            <Input disabled={isLoading} placeholder="senha" type="password" required
                onChange={(e) => setUser({ ...user, password: e.target.value })} />

            <Input disabled={isLoading} placeholder="nome" required
                onChange={(e) => setUser({ ...user, name: e.target.value })} />

            <Input disabled={isLoading} placeholder="foto" required
                onChange={(e) => setUser({ ...user, image: e.target.value })} />

            <Button disabled={isLoading} type="submit"
                width={303} height={45}>
                {isLoading ? <Loader
                    type="ThreeDots"
                    color="#FFFFFF"
                    width={45}
                    height={45}
                    timeout={3000}
                /> : "Cadastrar"}
            </Button>

            <Redirect>
                <Link to="/">
                    Já tem uma conta? Faça login!
                </Link>
            </Redirect>
        </Form>
    );
}