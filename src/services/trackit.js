import axios from 'axios';

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function signUp(user) {
    console.log("postando")
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, user);
    return promise;
}

function signIn(user) {
    console.log("postando")
    const promise = axios.post(`${BASE_URL}/auth/login`, user);
    return promise;
}

export { signUp, signIn }