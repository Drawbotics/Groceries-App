import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = () => (
	<div className={styles.wrapper}>
		<h2 className={styles.header}>ADD NEW ITEM</h2>
		<Form />
	</div>
);

export default Modal;