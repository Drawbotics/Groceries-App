import React, { Component } from 'react';
import './index.css';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

class Root extends Component {
	state = {
		isModalOpen: true
	}

	closeModal = () => {
		this.setState({
			isModalOpen: false
		})
	};

	render() {
		const { isModalOpen } = this.state;
		return (
			<>
				<Header />
				<Button>Add new item</Button>
				<List />
				{isModalOpen && <Modal handleModal={this.closeModal} />}
			</>


		);
	}
}

export default Root;
