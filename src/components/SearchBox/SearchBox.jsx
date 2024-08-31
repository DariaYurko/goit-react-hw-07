import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  // const filtredContactValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    // console.log(value);
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
        // value={filtredContactValue}
      />
    </div>
  );
};

export default SearchBox;
