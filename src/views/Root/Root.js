import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

class Root extends Component {
	state = {
		isModalOpen: false,
	}

	closeModal = () => {
		this.setState({
			isModalOpen: false
		})
	};

	openModal = () => {
		this.setState({
			isModalOpen: true
		})
	};

	render() {
		const { isModalOpen } = this.state;
		return (
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={List}></Route>
				<Button handleOpenModal={this.openModal}></Button>
				{isModalOpen && <Modal handleCloseModal={this.closeModal} />}
			</BrowserRouter>


		);
	}
}

export default Root;
