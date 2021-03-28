import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, id, deleteOnClick }) => {
  return (
    <li className={styles.item}>
      <div className={styles.contact}>
        <span>{name}</span>
        <span>{number}</span>
      </div>

      <button className={styles.button} id={id} onClick={deleteOnClick}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteOnClick: PropTypes.func.isRequired,
};

export default ContactItem;
