import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/CalcButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>This is the homepage</Text>
      <Button title="Button" color="#ddd" />
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
