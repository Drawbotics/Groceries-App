import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({  name, type, label, ...props }) => (
	<div className={styles.formItem}>
		<input
			className={styles.input}
			type={type}
			name={name}
			id={name}
			placeholder=" "
			{...props}
		/>
		<label className={styles.label} htmlFor={name}>
			{label}
		</label>
		<div className={styles.formItemBar}></div>
	</div>
);

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};

export default Input;