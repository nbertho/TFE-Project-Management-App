import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './containers/Home/Home';
import LoginPage from './components/Auth/Login';
import RegisterPage from './components/Auth/Register';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,	
		}
	}

	render() {

		let appContent = 
			<Router>
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route exact path="/">
						<LoginPage />
					</Route>
					<Route path="/register">
						<RegisterPage />
					</Route>
				</Switch>
			</Router>;

		return (
			<div className="AppWrapper">
				{appContent}
			</div>
		);
	}

}

export default App;
