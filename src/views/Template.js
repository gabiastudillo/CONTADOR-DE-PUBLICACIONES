import React, { Component } from 'react';
import Principal from './Principal'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Navbar from 'react-bootstrap/Navbar';

import {
	Route,
	BrowserRouter
} from "react-router-dom";



class Template extends Component {

	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
					<Navbar.Brand href="/">Estadísticas de Redes Sociales</Navbar.Brand>
				</Navbar>
				<BrowserRouter>
					<Route path="/" component={Principal} />
				</BrowserRouter>
			</div>
		);
	}
}

export default Template;