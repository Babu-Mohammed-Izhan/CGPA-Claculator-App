import React from 'react';
import { View, FlatList } from 'react-native';
import Calculator from '../components/Calculator';

const CalculatorPage = ({ semno }) => {
  return (
    <FlatList
      data={semno}
      renderItem={({ item }) => <Calculator semno={item} />}
      keyExtractor={(item) => item}
      numColumns="1"
    />
  );
};

export default CalculatorPage;
