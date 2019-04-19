import React from 'react';
import styles from './ListItem.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import AppContext from '../../context';
import { FaTrash } from 'react-icons/fa';

const ListItem = ({ name, quantity, isBought }) => {
	const subWrapperClass = !isBought ? styles.subWrapper : styles.subWrapperCompleted;
	return (
		<AppContext.Consumer>
			{(context) => (
				<li className={styles.wrapper}>
					<div className={subWrapperClass}>
						<div className={styles.infoWrapper}>
							<div className={styles.info}>
								{!isBought ? (
									<>
										<h3>Name: </h3>
										<h3 className={styles.itemName}>{name}</h3>
									</>
								) : (
										<>
											<h3 className={styles.itemNameBought}>Name: </h3>
											<h3 className={styles.itemNameBought}>{name}</h3>
										</>
									)}

							</div>
							<div className={styles.info}>
								{!isBought ? (
									<>
										<h3>Quantity: </h3>
										<h3 className={styles.itemQuantity}>{quantity}</h3>
									</>
								) : (
										<>
											<h3 className={styles.itemQuantityBought}>Quantity: </h3>
											<h3 className={styles.itemQuantityBought}>{quantity}</h3>
										</>
									)}

							</div>
						</div>
						<div className={styles.checkbox}>
							<Checkbox
								name="completed"
								checked={isBought ? true : false}
								onChange={() => context.markAsCompleted(name)} />
						</div>
						<div className={styles.remove}>
							{!isBought ? (
								<FaTrash onClick={() => context.deleteItem(name)} />
							) : (
									null
								)}

						</div>
					</div>
				</li>
			)}

		</AppContext.Consumer>
	);
};

export default ListItem;