import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import "../App/App.css";

function App() {
  return (
    <BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Login></Login>
				</Route>
			</Switch>
		</BrowserRouter>
  );
}

export default App;
