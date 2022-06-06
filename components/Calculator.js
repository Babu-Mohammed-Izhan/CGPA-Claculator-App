import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
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
    <View>
      <View>
        <Text>Semester {semno}</Text>
        <Text>No.of Subjects:{subjects.length}</Text>
        <Text>Grade Points </Text>
        <Text>Credits</Text>
        {subjects.map((n, i) => {
          return (
            <>
              <TextInput
                onChange={(e) => {
                  insertValues(e.target, i + 1, 'point');
                }}
              />
              <TextInput
                onChange={(e) => {
                  if (e.target.value > 4) {
                    console.log(
                      'This is the incorrect value, credit must be 4 or lower'
                    );
                  } else {
                    insertValues(e.target, i + 1, 'credit');
                  }
                }}
              />
            </>
          );
        })}
        <CalcButton onPress={handleSubmit} title="Calculate" />
      </View>
    </View>
  );
};

export default Calculator;
