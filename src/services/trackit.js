import axios from 'axios';

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postNewUser(user) {
    console.log("postando")
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, user);
    return promise;
}

export { postNewUser }