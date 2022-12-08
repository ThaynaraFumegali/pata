import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const InputFieldComponent = ({
  label,
  placeHolder,
  value,
  onChange,
  isPassword = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.text}>{label}</Text>
      </View>
      <View style={styles.containerTextInput}>
        <TextInput
          placeholder={placeHolder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={isPassword}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    margin: 5,
  },
  containerText: {
    height: 20,
    width: '100%',
  },
  text: {
    fontSize: 14,
    color: '#ffee4a',
  },
  containerTextInput: {
    marginTop: 5,
    height: 40,
    width: '100%',
    backgroundColor: '#eeeeee',
    borderRadius: 5,
  },
});

export default InputFieldComponent;
