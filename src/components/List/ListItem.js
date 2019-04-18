import React from 'react';
import styles from './ListItem.module.scss';
import Checkbox from '../Checkbox/Checkbox';

const ListItem = ({ name, quantity }) => (
	<li className={styles.wrapper}>
		<div className={styles.subWrapper}>
			<h2 className={styles.itemName}>{name}</h2>
			<p className={styles.itemQuantity}>{quantity}</p>
			{/* <Checkbox /> */}

		</div>
	</li>
);

export default ListItem;