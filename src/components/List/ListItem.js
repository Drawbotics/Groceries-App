import React from 'react';
import styles from './ListItem.module.scss';

const ListItem = ({ name, quantity }) => (
	<li className={styles.wrapper}>
		<div>
			<h1>{name}</h1>
			<p>{quantity}</p>
		</div>
	</li>
);

export default ListItem;