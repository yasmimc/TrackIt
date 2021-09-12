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
	// promise.then((resp)=>(console.log(resp)))
	return promise;
}

function deleteHabit(token, habitId) {
	const config = {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	}
	const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, config);
	// promise.then((resp)=>(console.log(resp)))
	return promise;
}

function getTodayHabits(token) {
	const config = {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	}
	const promise = axios.get(`${BASE_URL}/habits/today`, config);
	// promise.then((resp)=>console.log(resp.data))
	return promise;
}

function markHabitAsDone(token, habitId) {
	// console.log(habitId)
	const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
	const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, "", config);
	// promise.then((resp)=>console.log(resp))
	// promise.catch((err)=>console.log(err.response))
	return promise;
}

function markHabitAsUndone(token, habitId) {
	// console.log(habitId)
	const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
	const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`, "", config);
	// promise.then((resp)=>console.log(resp))
	// promise.catch((err)=>console.log(err.response))
	return promise;
}
export { 
	signUp, signIn,
	getHabits, createNewHabit, deleteHabit,
	getTodayHabits, markHabitAsDone, markHabitAsUndone
}