import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';


const GroceryListView = () => (
	<AppContext.Consumer>
		{(context) => (
			<List items={context.grocery} />
		)}
	</AppContext.Consumer>
);

export default GroceryListView;