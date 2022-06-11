import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import CalcButton from './CalcButton';

const Calculator = ({ semno, setGpaData, gpaData, setShowGpaData }) => {
  const [subjects, setSubjects] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [credits, setCredits] = useState({});
  const [points, setPoints] = useState({});

  const calculateGpa = () => {
    let tempArray = [];
    subjects.forEach((subno, i) => {
      tempArray.push(credits[i + 1] * points[i + 1]);
    });
    const numerator = tempArray.reduce((a, b) => a + b);
    const denominator = Object.values(credits).reduce(
      (a, b) => parseInt(a) + parseInt(b)
    );
    const gpa = numerator / denominator;
    setGpaData({
      ...gpaData,
      [semno]: {
        gpa,
        numerator,
        denominator,
      },
    });
  };

  const insertValues = (value, place, type) => {
    switch (type) {
      case 'point':
        setPoints({ ...points, [place]: parseInt(value) });
        break;
      case 'credit':
        setCredits({ ...credits, [place]: parseInt(value) });
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateGpa();
    setShowGpaData(true);
  };

  return (
    <View style={styles.containerwrapper}>
      <View style={styles.container}>
        <Text style={styles.semester}>Semester {semno[0]}</Text>
        <Text style={styles.subjects}>No.of Subjects:{subjects.length}</Text>
        <View style={styles.heading}>
          <Text style={styles.heading}>Grade Points </Text>
          <Text style={styles.heading}>Credits</Text>
        </View>
        {subjects.map((n, i) => {
          return (
            <View style={styles.inputs}>
              <TextInput
                style={styles.input}
                onChange={(e) => {
                  insertValues(e.target, i + 1, 'point');
                }}
              />
              <TextInput
                style={styles.input}
                onChange={(e) => {
                  if (e.target > 4) {
                    console.log(
                      'This is the incorrect value, credit must be 4 or lower'
                    );
                  } else {
                    insertValues(e.target, i + 1, 'credit');
                  }
                }}
              />
            </View>
          );
        })}
        <CalcButton
          style={styles.button}
          onPress={handleSubmit}
          title="Calculate"
          color="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    width: '80%',
    borderColor: 'black',
    borderWidth: '4px',
    marginVertical: '20px',
    boxShadow: '10px 10px 0px -1px rgba(0,0,0,1)',
  },
  containerwrapper: {
    margin: '20px',
    height: '100%',
    backgroundColor: '#fff',
    fontFamily: 'Inter_900Black',
  },
  semester: {
    fontWeight: '700',
  },
  subjects: {
    fontWeight: '700',
  },
  description: {
    fontSize: '1.5rem',
    fontWeight: '800',
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: '100px',
    borderColor: 'black',
    borderWidth: '4px',
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    fontWeight: '700',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '2rem',
    fontWeight: 700,
  },
  box: {
    width: '100%',
    padding: '2rem',
    borderColor: 'black',
    borderWidth: '4px',
    boxShadow: '10px 10px 0px -1px rgba(0,0,0,1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5rem',
  },
  button: {
    marginTop: '20px',
  },
});

export default Calculator;
