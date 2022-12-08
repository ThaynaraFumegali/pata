import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const YellowButtonComponent = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77477e',
  },
  button: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffee4a',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#77477e',
  },
});

export default YellowButtonComponent;
