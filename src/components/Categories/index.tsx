import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';

import { Product, Icon } from './styles';

export function Categories() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ padding: 16 }}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => (
        <Product>
          <Icon>
            <Text size={25}>{category.icon}</Text>
          </Icon>

          <Text size={14} color="#222D5B">{category.name}</Text>
        </Product>
      )}
    />
  );
}
