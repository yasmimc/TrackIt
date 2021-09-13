import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

import { getHabits } from "../../services/trackit";
import { defaultWeekDays } from "../../services/habits";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Habit from "./Habit";
import NewHabitForm from "./NewHabitForm";

import Container from "../shared/Container";
import Button from "../shared/Button";
import { useHistory } from "react-router";

export default function Habits() {
	const { loggedUser } = useContext(UserContext);	

	const [creatingHabit, setCreatingHabit] = useState(false);

	function newHabitBtn() {
		setCreatingHabit(true)
	}

	const [habits, setHabits] = useState([]);

	useEffect(() => {
		if(loggedUser){
		updateHabits();
		}

	}, []);

	function updateHabits() {
		
			getHabits(loggedUser.token)
			.then((resp) => {
				setHabits(resp.data)
			})
			.catch(() => updateHabits());
	}
	

	return (
		<Container>
			<Header></Header>
			<Title>
				<h1>Meus hábitos</h1>
				<Button width={40} height={35} onClick={newHabitBtn}>
					+
				</Button>
			</Title>

			<NewHabitForm
				creatingHabit={creatingHabit}
				loggedUser={loggedUser}
				setCreatingHabit={setCreatingHabit}
				updateHabits={updateHabits}
			/>

			<HabitsList>
				{habits.length > 0 ? habits.map((habit) => (
					<Habit habit={habit} defaultWeekDays={defaultWeekDays} setHabits={setHabits} />
				)) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}

			</HabitsList>

			<Footer></Footer>
		</Container>
	);
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HabitsList = styled.div`
`