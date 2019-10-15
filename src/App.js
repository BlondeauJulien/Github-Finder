import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import Alert from './Components/Layout/Alert';
import About from './Components/pages/About';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState'

const App = () => {

	return (
		<GithubState>
			<AlertState>
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Alert />
						<Switch>
							<Route
								exact
								path="/"
								render={() => (
									<Fragment>
										<Search	/>
										<Users />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route exact path="/user/:login" component={User} />
						</Switch>
					</div>
				</div>
			</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
