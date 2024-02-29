import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProductFilters = ({ handleCategoryChange }) => {
  const filters = useSelector(state => state.filters);
  const [sortedFilters, setSortedFilters] = useState(filters);

  useEffect(() => {
    const newFilters = [...filters];
    newFilters.sort((a,b) => a.name - b.name);
    setSortedFilters(newFilters);
  }, [filters]);

  return (
    <div>
      {sortedFilters.map(filter => <button onClick={() => handleCategoryChange(filter.name)}>Show {filter.name}</button>)}
    </div>
  );
};

export default memo(ProductFilters);