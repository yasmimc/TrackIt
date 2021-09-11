import axios from 'axios';

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function signUp(user) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, user);
    return promise;
}

function signIn(user) {
    const promise = axios.post(`${BASE_URL}/auth/login`, user);
    return promise;
}

function getHabits(token){
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

function createNewHabit(token, habit) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/habits`, habit, config);
    promise.then((resp)=>(console.log(resp)))
    return promise;
}

export { 
    signUp, signIn,
    getHabits, createNewHabit,
}