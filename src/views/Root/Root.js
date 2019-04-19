import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../context';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import GroceryListView from '../GroceryListView/GroceryListView';
import RecipesListView from '../RecipesListView/RecipesListView';
import StatisticsView from '../StatisticsView/StatisticsView';
import Form from '../../components/Form/Form';
import FormTypes from '../../components/Form/FormTypes';

class Root extends Component {
	state = {
		isModalOpen: false,
		formType: FormTypes.addItem,
		grocery: [],
		searchQuery: '',
		groceryCompleted: [],
		currentItemName: ''
	}

	closeModal = () => {
		this.setState({
			isModalOpen: false
		})
	};

	openAddItemModal = () => {
		this.setState({
			isModalOpen: true,
			formType: FormTypes.addItem
		});
	};

	addItem = (event, newItem) => {
		event.preventDefault();

		this.setState(prevState => ({
			[newItem.type]: [...prevState[newItem.type], newItem],
		}));

		this.closeModal();
	};

	deleteItem = (name) => {
		let { grocery } = this.state;
		grocery = grocery.filter(g => g.name !== name);
		this.setState({
			grocery: grocery
		});
	}

	updateItem = (event, item) => {
		event.preventDefault();
		const { grocery, groceryCompleted } = this.state;
		const groceryItem = grocery.find(g => g.name === item.name);
		groceryItem.price = item.price;
		groceryItem.buyer = item.buyer;
		groceryItem.isBought = true;

		this.setState({
			grocery: [...grocery.filter(g => g.name !== item.name)],
			groceryCompleted: [...groceryCompleted, groceryItem],
			name: null
		});
		this.closeModal();
	};

	handleSearchInput = event => {
		const searchQuery = event.target.value;
		this.setState({
			searchQuery: searchQuery
		})
	};

	markAsCompleted = (name) => {

		this.setState({
			isModalOpen: true,
			formType: FormTypes.addPrice,
			name: name
		});
	}

	render() {
		const { isModalOpen, formType, name } = this.state;
		const contextElements = {
			addItem: this.addItem,
			updateItem: this.updateItem,
			deleteItem: this.deleteItem,
			handleSearchInput: this.handleSearchInput,
			markAsCompleted: this.markAsCompleted,
			openAddItemModal: this.openAddItemModal,
			...this.state
		}

		return (
			<BrowserRouter>
				<AppContext.Provider value={contextElements}>
					<Header />
					<main className="container">
						<Switch>
							<Route exact path="/" component={GroceryListView}></Route>
							<Route path="/recipes" component={RecipesListView}></Route>
							<Route path="/stats" component={StatisticsView}></Route>
						</Switch>
					</main>
					{isModalOpen && <Modal handleCloseModal={this.closeModal}>
						<Form formType={formType} name={name} />
					</Modal>}
				</AppContext.Provider>
			</BrowserRouter>
		);
	}
}

export default Root;
