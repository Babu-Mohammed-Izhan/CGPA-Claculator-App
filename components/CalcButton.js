import { Button, View } from 'react-native';

const CalcButton = (props) => {
  return (
    <View>
      <Button {...props} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: '5px',
  },
});

export default CalcButton;
