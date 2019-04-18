import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';
import Input from '../../components/Input/Input';
import styles from './GroceryListView.module.scss';


const GroceryListView = () => (
	<AppContext.Consumer>
		{(context) => (
			<div className={styles.wrapper}>
				<Input
					placeholder=" "
					type="text"
					onChange={context.handleSearchInput}
					name="searchQuery"
					label="Search by item name"
					value={context.searchQuery}
					tag="searchInput"
				/>
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
			</div>
		)}
	</AppContext.Consumer>
);

export default GroceryListView;