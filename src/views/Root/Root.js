import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AppContext from '../../context';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import GroceryListView from '../GroceryListView/GroceryListView';

class Root extends Component {
	state = {
		isModalOpen: false,
		grocery: [],
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

	addItem = (event, newItem) => {
		event.preventDefault();

		this.setState(prevState => ({
			[newItem.type]: [...prevState[newItem.type], newItem],
		}));

		this.closeModal();
	};

	render() {
		const { isModalOpen } = this.state;
		const contextElements = {
			addItem: this.addItem,
			...this.state
		}

		return (
			<BrowserRouter>
				<AppContext.Provider value={contextElements}>
					<Header />
					<Route exact path="/" component={GroceryListView}></Route>
					<Button onClick={this.openModal}>Add item</Button>
					{isModalOpen && <Modal handleCloseModal={this.closeModal} />}
				</AppContext.Provider>
			</BrowserRouter>


		);
	}
}

export default Root;
