import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';
import Input from '../../components/Input/Input';
import styles from './GroceryListView.module.scss';

const SearchInput = ({ context }) => (
	<Input
		placeholder=" "
		type="text"
		onChange={context.handleSearchInput}
		name="searchQuery"
		label="Search by item name"
		value={context.searchQuery}
		tag="searchInput"
	/>
)

const GroceryListView = () => (
	<AppContext.Consumer>
		{(context) => (
			<div className={styles.wrapper}>
				<SearchInput context={context} />
				<div>
					{context.searchQuery ? (
						<List items={context.grocery.filter(g => {
							const shouldFilter = g.name.toLowerCase().includes(context.searchQuery.toLowerCase());
							return shouldFilter;
						})} />
					) : (
							<List items={context.grocery} />
						)}
				</div>
				<label>Completed</label>
				<div>
					{context.groceryCompleted.length ? (
						<List items={context.groceryCompleted} />
					) : (
							null
						)}
				</div>
			</div>
		)}
	</AppContext.Consumer>
);

export default GroceryListView;