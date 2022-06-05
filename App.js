import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import CalcButton from './components/CalcButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './pages/Homepage';
import CalculatorPage from './pages/CalculatorPage';

const Stack = createNativeStackNavigator();

export default function App() {
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <Homepage {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Calculator">
          {(props) => <CalculatorPage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
