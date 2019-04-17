import React from 'react';
import styles from './Header.module.scss';
import { FaList } from 'react-icons/fa';

const Header = () => (
	<header className={styles.wrapper}>
		<h1 className={styles.title}>Groceries App</h1>
		<div className={styles.iconWrapper}>
			<span className={styles.icon}>
				<FaList /> List
			</span>
		</div>
	</header>
);

export default Header;