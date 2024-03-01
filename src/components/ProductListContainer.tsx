import React, { useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ProductFilters from './ProductFilters';
import ProductItems from './ProductItems';
import sendTracking from '../helpers/sendTracking';

const ProductListContainer = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(props.user.preferredCategory);

  const handleCategoryChange = (newCategory, action) => {
    setSelectedCategory(newCategory);
    sendTracking('category_changed', newCategory, action);
  };

  const { products, category } = useSelector(state => ({
    products: state.products[selectedCategory],
    category: state.categories[selectedCategory]
  }));

  return (
    <div>
      {ProductItems(category, products)}
      <ProductFilters handleCategoryChange={handleCategoryChange} />
    </div>
  );
};

export default ProductListContainer;