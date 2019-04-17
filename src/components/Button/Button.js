import React from 'react';
import styles from './Button.module.scss';

const Button = ({ handleOpenModal }) => (
	<>
		<button
			className={styles.button}
			onClick={handleOpenModal}>
			Add new item
			</button>
	</>
);

export default Button;