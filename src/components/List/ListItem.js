import React from 'react';
import styles from './ListItem.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import AppContext from '../../context';
import { MdClear } from 'react-icons/md';

const ListItem = ({ name, quantity, isBought }) => (
	<AppContext.Consumer>
		{(context) => (
			<li className={styles.wrapper}>
				<div className={styles.subWrapper}>
					<div className={styles.infoWrapper}>
						<div className={styles.info}>
							<h3>Name:</h3>
							{/* <h3 className={styles.itemName}>{name}</h3> */}
							<h3>{name}</h3>
						</div>
						<div className={styles.info}>
							<h3>Quantity:</h3>
							{/* <p className={styles.itemQuantity}>{quantity}</p> */}
							<h3>{quantity}</h3>
						</div>
					</div>
					<div className={styles.checkbox}>
						<Checkbox name="completed"
							checked={isBought ? true : false}
							onChange={() => context.markAsCompleted(name)} />
					</div>
					<div className={styles.remove}>
						<MdClear onClick={() => context.deleteItem(name)} />
					</div>
				</div>
			</li>
		)}

	</AppContext.Consumer>
);

export default ListItem;