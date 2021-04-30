import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductOverviewScreen = (props) => {
  const ProductRender = (itemdata) => {
    return <Text>{itemdata.item.title}</Text>;
  };
  const products = useSelector((state) => state.products.availableProducts);

  return <FlatList data={products} renderItem={ProductRender(itemdata)} />;
};
