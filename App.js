import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './pages/Homepage';
import CalculatorPage from './pages/CalculatorPage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [noOfSemesters, setNoOfSemesters] = useState(0);
  const [gpaData, setGpaData] = useState({});
  const [ShowGpaData, setShowGpaData] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <Homepage
              {...props}
              setNoOfSemesters={setNoOfSemesters}
              noOfSemesters={noOfSemesters}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Calculator">
          {(props) => (
            <CalculatorPage
              {...props}
              key={noOfSemesters}
              semno={noOfSemesters}
              setGpaData={setGpaData}
              gpaData={gpaData}
              setShowGpaData={setShowGpaData}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
