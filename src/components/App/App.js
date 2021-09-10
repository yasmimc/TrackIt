import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Habits from "../Habits/Habits";
import Today from "../Today/Today";
import History from "../History/History";

import "../App/App.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Login></Login>
				</Route>
				<Route path ="/cadastro" exact>
					<Register></Register>
				</Route>
				<Route path ="/habitos" exact>
					<Habits></Habits>
				</Route>
				<Route path ="/hoje" exact>
					<Today></Today>
				</Route>
				<Route path ="/historico" exact>
					<History></History>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
