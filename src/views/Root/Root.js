import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

class Root extends Component {
	state = {
		isModalOpen: true,
	}

	closeModal = () => {
		this.setState({
			isModalOpen: false
		})
	};

	render() {
		const { isModalOpen } = this.state;
		return (
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={List}></Route>
				<Button>Add new item</Button>
				{isModalOpen && <Modal handleModal={this.closeModal} />}
			</BrowserRouter>


		);
	}
}

export default Root;
