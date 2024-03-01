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

  const renderButtons = (filter) => {
    const buttons = [];
    const buttonValues = ['create', 'delete', 'update'];
    const handleClick = (value) => {
      handleCategoryChange(value);
    };

    for (let i = 0; i < buttonValues.length; i++) {
      buttons.push(
        <button key={i} onClick={() => handleClick(filter.name, buttonValues[i])}>
          Increment by {buttonValues[i]}
        </button>
      );
    }

    return buttons;
  };


  return (
    <div>
      {sortedFilters.map(filter => (
        <form>
          <label>Show {filter.name}</label>
          {renderButtons(filter)}
        </form>
      ))}
    </div>
  );
};

export default memo(ProductFilters);