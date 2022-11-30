import "./styles.css";

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
