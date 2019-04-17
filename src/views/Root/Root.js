import React, { Component } from 'react';
import './index.css';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';

class Root extends Component {
	state = {
		isModalOpen: true
	}

	render() {
		const { isModalOpen } = this.state;
		return (
			<>
				<List />
				{isModalOpen && <Modal />}
			</>


		);
	}
}

export default Root;
