import { FlatList } from 'react-native';
import { products } from '../../mocks/products';
import { Text } from '../Text';
import { useState } from 'react';

import { Product, Icon } from './styles';

export function Products() {
  const [selectedService, setSelectedService] = useState('');

  function handleSelectServices(productId: string) {
    setSelectedService(productId);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={products}
      contentContainerStyle={{ padding: 16 }}
      keyExtractor={product => product._id}
      renderItem={({ item: product }) => {
        const isSelected = selectedService === product._id;

        return (
          <Product onPress={() => handleSelectServices(product._id)}>
            <Icon>
              <Text size={25} background={isSelected ? '#e1b12c' : '#f8f8f8'}>
                {product.imagePath}
              </Text>
            </Icon>

            <Text size={14}>{product.name}</Text>

            <Text size={12} color="#E1B12C">{product.description}</Text>
          </Product>
        );
      }}
    />
  );
}
