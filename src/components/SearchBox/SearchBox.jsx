import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    // 1. Створення команди
    // 2. Доставка команди в Store
    const action = changeFilter(value);
    dispatch(action);
  };

  return (
    <div className={css.filterField}>
      <h3 className="filterFieldTitle">Find contact by name</h3>
      <input
        className={css.filterFieldInput}
        onChange={handleChange}
        type="text"
        placeholder="Enter name"
      />
    </div>
  );
};

export default SearchBox;
