import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GpaDataTable = ({ gpaData, noOfSemesters }) => {
  const [Cgpa, setCgpa] = useState(0);
  useEffect(() => {
    console.log(noOfSemesters.length);
    if (noOfSemesters.length === 1) {
      setCgpa(gpaData['1 Semester'].gpa);
    }
    if (noOfSemesters.length > 1) {
      const numerator = Object.values(gpaData).reduce(
        (a, b) => a.numerator + b.numerator
      );
      const denominator = Object.values(gpaData).reduce(
        (a, b) => a.denominator + b.denominator
      );
      const total = numerator / denominator;
      setCgpa(total);
    }
  }, [gpaData, noOfSemesters]);

  console.log(gpaData);

  return (
    <View style={styles.tablewrapper}>
      <View style={styles.table}>
        <Text style={styles.cgpa}>CGPA : {Cgpa}</Text>
        <View>
          {gpaData &&
            Object.keys(gpaData).map(([key, value]) => {
              console.log(key);
              return (
                <View key={key} className="gpa">
                  <Text>
                    Semester {key} GPA : {gpaData[`${key} Semester`].gpa}
                  </Text>
                </View>
              );
            })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tablewrapper: {},
  table: {},
  cgpa: {},
});

export default GpaDataTable;
