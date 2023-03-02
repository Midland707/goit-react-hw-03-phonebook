import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ contacts, onClickDelete }) =>
  contacts.map(item => (
    <li key={item.id} className={css.contactItem}>
      {item.name}: {item.number}
      <button id={item.id} className={css.deleteButton} onClick={onClickDelete}>
        {' '}
        Delete
      </button>
    </li>
  ));

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
