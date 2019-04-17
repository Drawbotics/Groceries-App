import React from 'react';
import styles from './HeaderNav.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => (
	<nav>
		<ul className={styles.wrapper}>
			<li className={styles.navItem}>
				<NavLink
					exact
					className={styles.navItemLink}
					activeClassName={styles.navItemLinkActive}
					to="/">grocery
				</NavLink>
			</li>
		</ul>
	</nav >
);

export default HeaderNav;