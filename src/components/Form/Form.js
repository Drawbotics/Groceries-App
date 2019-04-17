import React from 'react';
import styles from './Form.module.scss';

const Form = () => (
	<div className={styles.wrapper}>
		<form className={styles.form}>
			<div className={styles.itemWrapper}>
				<label>Item name</label>
				<input className={styles.input}></input>
			</div>
			<div className={styles.itemWrapper}>
				<label>Quantity</label>
				<input className={styles.input}></input>
			</div>
		</form>
	</div>

);

export default Form;