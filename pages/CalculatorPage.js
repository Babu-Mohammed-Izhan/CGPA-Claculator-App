import React, { useRef, useEffect } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import Calculator from '../components/Calculator';

const CalculatorPage = ({ semno, setGpaData, gpaData, setShowGpaData }) => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, semno.length);
  }, [semno]);

  const handleCalculation = () => {
    itemsRef.current.map((func) => {
      func.handleFunction();
    });
  };

  return (
    <>
      <FlatList
        data={semno}
        renderItem={({ item, index }) => (
          <Calculator
            key={item}
            setGpaData={setGpaData}
            setShowGpaData={setShowGpaData}
            gpaData={gpaData}
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
