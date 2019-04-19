import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';
import Input from '../../components/Input/Input';
import styles from './GroceryListView.module.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import RadioButton from '../../components/RadioButton/RadioButton';

const SearchInput = ({ context }) => (
	<Input
		placeholder=" "
		type="text"
		onChange={context.handleSearchInput}
		name="searchQuery"
		label={context.isNameSearch ? 'Search by name' : 'Search by category'}
		value={context.searchQuery}
		tag="searchInput"
	/>
)

const GroceryListView = () => (
	<AppContext.Consumer>
		{(context) => (
			<div className={styles.wrapper}>
				<div>
					<RadioButton
						switchFn={context.switchSearch}
						checked={context.isNameSearch}>
						Name
					</RadioButton>
					<RadioButton
						switchFn={context.switchSearch}
						checked={!context.isNameSearch}>
						Category
					</RadioButton>
				</div>

				<SearchInput context={context} />

				<Button onClick={context.openAddItemModal}>Add item</Button>
				<div>
					{context.searchQuery ? (
						<List items={context.grocery.filter(g => {
							const searchQuery = context.searchQuery.toLowerCase();
							if (context.isNameSearch) {
								return g.name.toLowerCase().includes(searchQuery);
							}

							return g.category.toLowerCase().includes(searchQuery);
						})} />
					) : (
							<List items={context.grocery} />
						)}
				</div>
				<div>
					<label
						onClick={context.toggleShowCompleted}
						className={styles.label}
					>Completed</label>
					{
						context.showCompleted ? (<FaAngleDown />) : (<FaAngleUp />)
					}
				</div>

				{context.showCompleted ? (
					<div>
						{context.groceryCompleted.length ? (
							<>
								{
									context.searchQuery ? (
										<List items={context.groceryCompleted.filter(g => {
											const searchQuery = context.searchQuery.toLowerCase();
											if (context.isNameSearch) {
												return g.name.toLowerCase().includes(searchQuery);
											}

											return g.category.toLowerCase().includes(searchQuery);
										})} />
									) : (
											<List items={context.groceryCompleted} />
										)
								}
							</>
						) : (
								null
							)}
					</div>) : (null)
				}
			</div>
		)}
	</AppContext.Consumer>
);

export default GroceryListView;