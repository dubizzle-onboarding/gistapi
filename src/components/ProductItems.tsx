import React, { memo, useCallback } from 'react';

const ProductItem = ({ category, products }) => {
  const renderProducts = useCallback(() => {
    return products.map(product => (
      <div>{product.name}</div>
    ));
  }, [products]);

  return (
    <div>
      <h2>{category} Products</h2>
      {renderProducts()}
    </div>
  );
};

export default ProductItem;