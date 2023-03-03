import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';

export const ContactList = ({ contacts, onClickDelete }) => (
  <ul className={css.contactList}>
    <ContactItem contacts={contacts} onClickDelete={onClickDelete} />
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
