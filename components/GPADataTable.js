import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GpaDataTable = ({ gpaData, noOfSemesters }) => {
  const [Cgpa, setCgpa] = useState(0);
  useEffect(() => {
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

  return (
    <View style={styles.tablewrapper}>
      <View style={styles.table}>
        <Text style={styles.cgpa}>CGPA : {Cgpa}</Text>
        <View>
          {gpaData &&
            Object.keys(gpaData).map(([key, value]) => {
              return (
                <View key={key} style={styles.semesters}>
                  <Text style={styles.semestergpa}>Semester {key} GPA :</Text>
                  <Text style={styles.semestergpa}>
                    {gpaData[`${key} Semester`].gpa}
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
  tablewrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  table: {
    borderColor: 'black',
    borderWidth: '4px',
    width: '80%',
    marginTop: '4rem',
    boxShadow: '10px 10px 0px -1px rgba(0,0,0,1)',
  },
  cgpa: {
    textAlign: 'center',
    paddingVertical: '0.8rem',
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  semesters: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: '0.5rem',
    fontSize: '1.5rem',
    width: '100%',
    borderColor: 'black',
    borderTopWidth: '4px',
    paddingRight: '10px',
  },
  semestergpa: {
    fontSize: '1.5rem',
    paddingRight: '10px',
    fontWeight: '700',
  },
});

export default GpaDataTable;
