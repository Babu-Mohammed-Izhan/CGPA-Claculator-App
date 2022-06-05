import React from 'react';
import { View } from 'react-native';

const Homepage = () => {
  const data = [
    '1 Semester',
    '2 Semester',
    '3 Semester',
    '4 Semester',
    '5 Semester',
    '6 Semester',
    '7 Semester',
    '8 Semester',
    '9 Semester',
    '10 Semester',
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.description}>
          GPA Claculator, calculates your GPA for each semester as well as CGPA
          for all the semesters combined. (Made for GPAs that are out of 10).
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.header}>No. of Semesters</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <CalcButton title={item} color="#000" />}
          keyExtractor={(item) => item}
          numColumns="2"
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
  },
  description: {
    fontSize: '1.5rem',
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
    borderWidth: '3px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2rem',
  },
});

export default Homepage;
