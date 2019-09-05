import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity>
        <Text style={styles.buttonText}>MyRepo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    backgroundColor: '#1D4155',
    height: 50,
    padding: 10,
    marginTop: '15%',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2
    },
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
    borderRadius: 4
  },
  buttonText: {
    padding: 5,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Button;
