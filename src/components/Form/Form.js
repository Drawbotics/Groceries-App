import React from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';
import Button from '../Button/Button';

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
		const { } = this.state;

		return (
			<AppContext.Consumer>
				{(context) => (
					<div className={styles.wrapper}>
						<h2 className={styles.header}>ADD NEW ITEM</h2>
						<form
							className={styles.form}
							onSubmit={(event) => context.addItem(event, this.state)}
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
							<Button>Save</Button>
						</form>
					</div>
				)}
			</AppContext.Consumer>
		)
	}
};

export default Form;