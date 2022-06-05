import { StyleSheet, Button, View } from 'react-native';

const CalcButton = (props) => {
  return (
    <View style={styles.buttonwrapper}>
      <Button {...props} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: '10px',
    width: '100%',
    borderRadius: '10px',
  },
  buttonwrapper: {
    margin: 3,
    width: '100px',
  },
});

export default CalcButton;
