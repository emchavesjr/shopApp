import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

export default function ProductsOverviewScreen(props) {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      date={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
}

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
};
