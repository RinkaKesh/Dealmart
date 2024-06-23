import React from 'react';
import style from './Sorting.module.css';

const Sorting = ({ sortByPrice, filterByCategory, categories }) => {
  return (
    <div className={style.sorting_container}>
      <h2>Sort By</h2>
      <button onClick={() => sortByPrice('asc')}>Price: Low to High</button>
      <button onClick={() => sortByPrice('desc')}>Price: High to Low</button>
      
      <h2>Filter By Category</h2>
      <select onChange={e => filterByCategory(e.target.value)}>
        <option value="">All</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
