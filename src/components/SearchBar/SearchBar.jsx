import css from './SearchBar.module.css';

export const SearchBar = ({ filter, onFilterChange }) => {
  return (
    <div className={css.formLabel}>
      <label htmlFor="searchField">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        id="searchField"
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </div>
  );
};