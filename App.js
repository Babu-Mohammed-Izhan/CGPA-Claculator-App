import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/CalcButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>This is the homepage</Text>
      <Text>
        GPA Claculator, calculates your GPA for each semester as well as CGPA
        for all the semesters combined. (Made for GPAs that are out of 10).
      </Text>
      <Text>No. of Semesters</Text>
      <Button title="1 Semester" color="#ddd" />
      <Button title="2 Semester" color="#ddd" />
      <Button title="3 Semester" color="#ddd" />
      <Button title="4 Semester" color="#ddd" />
      <Button title="5 Semester" color="#ddd" />
      <Button title="6 Semester" color="#ddd" />
      <Button title="7 Semester" color="#ddd" />
      <Button title="8 Semester" color="#ddd" />
      <Button title="9 Semester" color="#ddd" />
      <Button title="10 Semester" color="#ddd" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
