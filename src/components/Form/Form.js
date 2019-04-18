import React from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';
import Button from '../Button/Button';
import Input from '../Input/Input';

class Form extends React.Component {
	state = {
		name: '',
		quantity: '',
		type: 'grocery'
	};

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<AppContext.Consumer>
				{(context) => (
					<div className={styles.wrapper}>
						<h2 className={styles.header}>ADD NEW ITEM</h2>
						<form
							className={styles.form}
							onSubmit={(event) => context.addItem(event, this.state)}
						>
							<Input
								onChange={this.handleInputChange}
								value={this.state.name}
								type="text"
								name="name"
								label="Add item"
								required
							/>
							<Input
								className={styles.input}
								onChange={this.handleInputChange}
								value={this.state.quantity}
								type="number"
								name="quantity"
								label="quantity"
								required
							/>
							<Button>Save</Button>
						</form>
					</div>
				)}
			</AppContext.Consumer>
		)
	}
};

export default Form;