import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Calculator from '../components/Calculator';

const CalculatorPage = ({ semno }) => {
  return (
    <FlatList
      data={semno}
      renderItem={({ item }) => <Calculator semno={item} />}
      keyExtractor={(item) => item}
      numColumns="1"
      style={styles.box}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: 'black',
    borderWidth: '4px',
  },
});

export default CalculatorPage;
