import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";

import "../App/App.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<SignIn></SignIn>
				</Route>
				<Route path ="/cadastro" exact>
					<SignUp></SignUp>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
