import React, { useRef, useEffect } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import Calculator from '../components/Calculator';

const CalculatorPage = ({ semno }) => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, semno.length);
  }, [semno]);

  const handleCalculation = () => {
    itemsRef.current.map((func) => {
      func.handleFunction(10);
    });
  };

  return (
    <>
      <FlatList
        data={semno}
        renderItem={({ item, index }) => (
          <Calculator
            key={item}
            ref={(el) => (itemsRef.current[index] = el)}
            semno={item}
          />
        )}
        keyExtractor={(item) => item}
        numColumns="1"
        style={styles.box}
      />
      <Button
        title="Calculate"
        color="#000"
        onPress={() => handleCalculation()}
        style={styles.button}
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: 'black',
    borderWidth: '4px',
  },
  button: {
    height: '50px',
  },
});

export default CalculatorPage;
