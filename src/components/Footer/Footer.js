import { Link } from "react-router-dom";
import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HabitsContext from "../../contexts/HabitsContext";
import { useContext } from "react";

export default function Footer() {

	const { habitCompletionProgress } = useContext(HabitsContext);
	// console.log(habitCompletionProgress)

	return (
		<Container>
			<ul>
				<li>
					<Link to="/habitos">
						Hábitos
					</Link>
				</li>

				<Today>
					<Link to="/hoje">
						<CircularProgressbar
							value={habitCompletionProgress}
							text="Hoje"
							styles={buildStyles({
								textColor: '#FFFFFF',
								trailColor: 'none',
								pathColor: '#FFFFFF'

							})}
						/>
					</Link>
				</Today>
				<li>
					<Link to="historico">
						Histórico
					</Link>
				</li>
			</ul>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 70px;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1;
	background-color: #FFFFFF;
	padding: 0 36px;

	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
		color: #52B6FF;
	}
`
const Today = styled.li`
	background-color: #52B6FF;
	width: 91px;
	height: 91px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	position: absolute;
	bottom: 10px;
	left: calc((100vw - 91px)/2);
	padding: 5px;
`