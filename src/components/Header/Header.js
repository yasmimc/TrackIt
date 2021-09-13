import styled from "styled-components";
import header_logo from "../../assets/images/header_logo.png";

import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Header() {

	const { loggedUser } = useContext(UserContext);
	return (
		<Container>
			<img src={header_logo} alt="header-logo"/>
			<Profile>
				<img src={loggedUser.image} alt="profileImg"/>
			</Profile>
		</Container>
	);
}

const Container = styled.div`
	background-color: black;
	position: fixed;
	z-index: 1;
	width: 100vw;
	height: 70px;
	left: 0px;
	top: 0px;

	background: #126BA5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 18px;

	img {
		height: 38px;
	}
`
const Profile = styled.div`
	width: 51px;
	height: 51px;

	background-color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		border-radius: 50%;
		width: 51px;
		height: 51px;
	}
`