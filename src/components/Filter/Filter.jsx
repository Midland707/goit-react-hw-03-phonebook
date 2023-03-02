import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onFilterByName }) => (
  <label className={css.filterNameTitle}>
    Find contacts by name
    <input
      className={css.filterInput}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={onFilterByName}
    />
  </label>
);

Filter.propTypes = {
  onFilterByName: PropTypes.func.isRequired,
};
