import DayInput from "../shared/DayInput";
import styled from "styled-components";

import { BsTrash } from "react-icons/bs";

import { deleteHabit, getHabits } from "../../services/trackit";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Habit({ habit, defaultWeekDays, setHabits }) {

	const { loggedUser } = useContext(UserContext);

	function deleteThisHabit() {
		const confirmed = window.confirm("Tem certeza de que quer deletar este hábito?");
		if (confirmed) {
			deleteHabit(loggedUser.token, habit.id).then(() => {
				//criar uma func só pra atualizar os dados da lista
				getHabits(loggedUser.token).then((resp) => {
					setHabits(resp.data)
				})
			}
			)
		}
	}

	return (
		<Container>
			<HabitName>
				{habit.name}
				<BsTrash onClick={deleteThisHabit} />
			</HabitName>
			<div>
				{defaultWeekDays.map((day, index) => {
					return (
						<DayInput type="button" value={day.value} selected={habit.days.includes(index)}
						/>
					)
				})}

			</div>
		</Container>
	);
}

const Container = styled.div`
	background-color: #FFFFFF;
	border-radius: 5px;
	padding: 18px;
	position: relative;
	display: flex;
	flex-direction: column;
	margin-top: 5px;

	button {
		margin-top: 29px;
		margin-right: 4px;
		font-size: 16px;
	}
`

const HabitName = styled.div`
	display: flex;
	justify-content: space-between;
`