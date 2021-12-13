import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Services from './Components/Services'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/services" component={Services} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Redirect to="/" />
		</Switch>
    </>
  )
}

export default App
