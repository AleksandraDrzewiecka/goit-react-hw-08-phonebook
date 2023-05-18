import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = filterValue => dispatch(setFilter(filterValue));
  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filter}
        onChange={evt => handleFilterChange(evt.currentTarget.value.trim())}
      />
    </label>
  );
};

export default Filter;