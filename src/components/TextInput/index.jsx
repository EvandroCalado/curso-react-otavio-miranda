import './styles.css';
import P from 'prop-types';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      placeholder="Search..."
      value={searchValue}
      onChange={handleChange}
      type="search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
