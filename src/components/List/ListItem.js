import React from 'react';
import styles from './ListItem.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import AppContext from '../../context';

const ListItem = ({ name, quantity, isBought }) => (
	<AppContext.Consumer>
		{(context) => (
			<li className={styles.wrapper}>
				<div className={styles.subWrapper}>
					<div className={styles.info}>
						<h4>Name:</h4>
						<h2 className={styles.itemName}>{name}</h2>
					</div>
					<div className={styles.info}>
						<h4>Quantity:</h4>
						<p className={styles.itemQuantity}>{quantity}</p>
					</div>
					<div className={styles.checkbox}>
						<Checkbox name="completed"
							checked={isBought ? true : false}
							onChange={() => context.markAsCompleted(name)} />
					</div>
				</div>

			</li>
		)}

	</AppContext.Consumer >
);

export default ListItem;