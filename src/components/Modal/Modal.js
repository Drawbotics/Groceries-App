import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';


const Modal = ({ handleCloseModal, handleAddItem }) => (
	<div className={styles.wrapper}>
		<button
			onClick={handleCloseModal}
			className={styles.closeButton}
		>x</button>
		<Form handleAddItem={handleAddItem} />
	</div>
);

export default Modal;