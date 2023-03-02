import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';

export const ContactList = ({ contacts, onClickDelete, filter }) => (
  <ul className={css.contactList}>
    {contacts[0] ? (
      <ContactItem contacts={contacts} onClickDelete={onClickDelete} />
    ) : (
      <div className={css.errorMessage}>
        {filter ? (
          <span>I don't find it! Please repeat search!</span>
        ) : (
          <span>Contacts is empty!</span>
        )}
      </div>
    )}
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
  filter: PropTypes.string.isRequired,
};
