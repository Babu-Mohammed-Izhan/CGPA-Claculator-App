import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList } from 'react-native';
import CalcButton from '../components/CalcButton';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Homepage = ({ navigation, setNoOfSemesters }) => {
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

  let [fontsLoaded] = useFonts({ Inter_900Black });

  return (
    <View style={styles.containerwrapper}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View>
          <Text style={styles.description}>
            GPA Claculator, calculates your GPA for each semester as well as
            CGPA for all the semesters combined. (Made for GPAs that are out of
            10).
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.header}>No. of Semesters</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CalcButton
                title={item}
                onPress={() => {
                  navigation.navigate('Calculator');
                  data.splice(data.indexOf(item) + 1);
                  setNoOfSemesters(data);
                }}
                color="#000"
              />
            )}
            keyExtractor={(item) => item}
            numColumns="2"
          />
        </View>
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
  containerwrapper: {
    height: '100%',
    backgroundColor: '#fff',
    fontFamily: 'Inter_900Black',
  },
  description: {
    fontSize: '1.5rem',
    fontWeight: '800',
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
});

export default Homepage;
