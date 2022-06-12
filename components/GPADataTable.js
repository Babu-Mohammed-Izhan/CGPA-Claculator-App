import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

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

  return (
    <View className="gpa-data-wrapper">
      <View className="container gpa-data-table">
        <Text className="cgpa">CGPA : {Cgpa}</Text>
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

export default GpaDataTable;
