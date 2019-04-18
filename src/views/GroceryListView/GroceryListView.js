import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';


const GroceryListView = () => (
	<AppContext.Consumer>
	
		{(context) => (
			<>
				<input 
					className="searchInput" 
					placeholder="Search by item name" 
					type="text"
					onChange={context.handleSearchInput}
					name="searchQuery"
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