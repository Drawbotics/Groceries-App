import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import AppContext from '../../context';
import { FaTrash } from 'react-icons/fa';

const ItemInfo = ({ isBought, label, value }) => (
	<div className={styles.info}>
		{
			!isBought ? (
				<>
					<h3 className={styles.item}>{label}: </h3>
					<h3 className={styles.item} >{value}</h3>
				</>
			) : (
					<>
						<h3 className={styles.itemBought}>{label}: </h3>
						<h3 className={styles.itemBought}>{value}</h3>
					</>
				)
		}
	</div>
);

const ListItem = ({ name, quantity, isBought }) => {
	const subWrapperClass = !isBought ? styles.subWrapper : styles.subWrapperCompleted;
	return (
		<AppContext.Consumer>
			{(context) => (
				<li className={styles.wrapper}>
					<div className={subWrapperClass}>
						<div className={styles.infoWrapper}>
							<ItemInfo isBought={isBought} label="Name" value={name} />
							<ItemInfo isBought={isBought} label="Quantity" value={quantity} />
						</div>
						<div className={styles.checkbox}>
							<Checkbox
								name="completed"
								checked={isBought ? true : false}
								onChange={() => context.markAsCompleted(name)} />
						</div>
						<div className={styles.remove}>
							{!isBought ? (
								<FaTrash onClick={() => context.deleteItem(name)} />
							) : (
									null
								)}

						</div>
					</div>
				</li>
			)}

		</AppContext.Consumer>
	);
};

ListItem.propTypes = {
	name: PropTypes.string.isRequired,
	quantity: PropTypes.string.isRequired,
	isBought: PropTypes.bool,
};

export default ListItem;