import React from 'react';
import styles from './Form.module.scss';
class Form extends React.Component {
	state = {
		name: '',
		quantity: ''
	};

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	addItem = (event, newItem) => {
		event.preventDefault();

		this.setState(prevState => ({
			[newItem.type]: [...prevState[newItem.type], newItem],
		}));

		this.closeModal();
	};

	render() {
		return (
			<div className={styles.wrapper}>
				<h2 className={styles.header}>ADD NEW ITEM</h2>
				<form
					className={styles.form}
					onSubmit={(event) => this.addItem(event, this.state)}
				>
					<div className={styles.itemWrapper}>
						<input
							className={styles.input}
							onChange={this.handleInputChange}
							value={this.state.name}
							type="text"
							placeholder=" "
							name="name"
							required
						/>
						<label>Item name</label>
					</div>
					<div className={styles.itemWrapper}>
						<input
							className={styles.input}
							onChange={this.handleInputChange}
							value={this.state.quantity}
							type="text"
							placeholder=" "
							name="quantity"
							required
						/>
						<label>Quantity</label>
					</div>
				</form>
			</div>
		)
	}
};

export default Form;