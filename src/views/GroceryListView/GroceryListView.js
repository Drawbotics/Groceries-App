import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';
import Input from '../../components/Input/Input';


const GroceryListView = () => (
	<AppContext.Consumer>
	
		{(context) => (
			<>
				<Input 
					placeholder=" " 
					type="text"
					onChange={context.handleSearchInput}
					name="searchQuery"
					label="Search by item name"
					value={context.searchQuery}
					/>
				{context.searchQuery.lenght ? (
					context.grocery.filter(g => g.name.includes(context.searchQuery)).map(g => (
						<div>{g}</div>
					))
				) : (
					<List items={context.grocery} />
				)}
			</>
		)}
	</AppContext.Consumer>
);

export default GroceryListView;