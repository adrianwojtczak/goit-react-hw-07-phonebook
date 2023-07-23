import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={styles.label}>
      Filter contacts by name:
      <input type="text" value={filter} onChange={handleChangeFilter} />
    </label>
  );
};

export default Filter;
