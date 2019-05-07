import React from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';
import Button from '../Button/Button';
import Input from '../Input/Input';
import FormTypes from './FormTypes';
import CategoryDropdown from '../Dropdown/Dropdown';

const AddGroceryItemForm = ({ context, handleInputChange, handleDropdownChange, state }) => (
	<div className={styles.wrapper}>
		<h2 className={styles.header}>ADD NEW ITEM</h2>
		<form
			className={styles.form}
			onSubmit={(event) => context.addItem(event, state)}
		>
			<Input
				onChange={handleInputChange}
				value={state.name}
				type="text"
				name="name"
				label="Add item"
				required
			/>
			<Input
				onChange={handleInputChange}
				value={state.quantity}
				type="number"
				name="quantity"
				label="Quantity"
				required
			/>
			<CategoryDropdown onChange={handleDropdownChange} />
			<Button secondary>Save</Button>
		</form>
	</div>
);

const AddPriceItemForm = ({ context, handleInputChange, state }) => (
	<div className={styles.wrapper}>
		<h2 className={styles.header}>ADD PRICE OF ONE ITEM</h2>
		<form
			className={styles.form}
			onSubmit={(event) => context.updateItem(event, state)}
		>
			<Input
				onChange={handleInputChange}
				value={state.price}
				type="number"
				name="price"
				label="3€"
				required
			/>
			<Input
				onChange={handleInputChange}
				value={state.buyer}
				type="text"
				name="buyer"
				label="Who"
				required
			/>
			<Button secondary>Save</Button>
		</form>
	</div>
);
class Form extends React.Component {

	state = {
		type: 'grocery',
		name: this.props.name || '',
		quantity: '',
		price: '',
		buyer: '',
		category: ''
	};

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleDropdownChange = (value) => {
		this.setState({
			category: value
		});
	};

	render() {
		const { formType } = this.props;

		return (
			<AppContext.Consumer>
				{(context) => (
					formType === FormTypes.addItem ? (
						<AddGroceryItemForm context={context}
							handleInputChange={this.handleInputChange}
							handleDropdownChange={this.handleDropdownChange}
							state={this.state} />
					) : (
							<AddPriceItemForm context={context} handleInputChange={this.handleInputChange}
								state={this.state} />
						)
				)}

			</AppContext.Consumer>
		)
	}
};

export default Form;