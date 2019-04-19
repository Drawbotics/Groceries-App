import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

const Checkbox = ({ type = 'checkbox', name, checked = false, disabled = false, onChange }) => (
	<label className={styles.container}>
		<input
			type={type}
			name={name}
			checked={checked}
			onChange={onChange}
			disabled={checked}
		/>
		<span className={styles.checkmark}></span>
	</label>
);

Checkbox.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
}

export default Checkbox;