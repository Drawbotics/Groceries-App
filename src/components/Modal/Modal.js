import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ handleCloseModal, children }) => (
	<div className={styles.wrapper}>
		<button
			onClick={handleCloseModal}
			className={styles.closeButton}
		>x</button>
		{children}
	</div>
);

export default Modal;