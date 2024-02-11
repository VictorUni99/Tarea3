import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Datos = ({ navigation }) => {
  const clearField = (field) => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        Please fill in a few details below
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full name<Text style={styles.redText}>*</Text></Text>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} />
          <TouchableOpacity onPress={() => clearField('fullName')} style={styles.clearButton}>
            <Text style={styles.clearText}>x</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email<Text style={styles.redText}>*</Text></Text>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} />
          <TouchableOpacity onPress={() => clearField('email')} style={styles.clearButton}>
            <Text style={styles.clearText}>x</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number<Text style={styles.redText}>*</Text></Text>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} />
          <TouchableOpacity onPress={() => clearField('phoneNumber')} style={styles.clearButton}>
            <Text style={styles.clearText}>x</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Principal')} style={styles.arrowContainer}>
        <Text style={styles.arrow}>➜</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#007C41', 
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    color: '#007C41', 
    fontSize: 16,
    marginBottom: 5,
  },
  redText: {
    color: 'red',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 5,
    flex: 1,
  },
  clearButton: {
    backgroundColor: 'lightgray',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  clearText: {
    color: 'red',
    fontWeight: 'bold',
  },
  arrowContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#007C41', 
    padding: 10,
    borderRadius: 50, 
  },
  arrow: {
    fontSize: 30,
    color: 'white', 
  },
});

export default Datos;
