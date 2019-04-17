import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem';

const List = () => (
	<ul className={styles.wrapper}>
		<ListItem />
	</ul>
);

export default List;