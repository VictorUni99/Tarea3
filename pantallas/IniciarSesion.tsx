import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';

const IniciarSesion = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../imagenes/Starbucks_Logo.svg.webp')}
        style={styles.logo}
      />
      <Text style={styles.brand}>STARBUCKS</Text>
      <Text style={styles.title}>Log in with Email</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.greenText}>Log in with Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.greenText}>Password</Text>
        <TextInput secureTextEntry={!showPassword} style={styles.input} />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.greenText}>Show Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('OTP')} style={[styles.button, styles.signInButton]}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
        <Text style={styles.greenText}>Forgot?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  brand: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 20,
    color: '#007C41',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    borderColor: '#007C41',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  label: {
    marginTop: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,
  },
  button: {
    paddingVertical: 15,
    marginTop: 15,
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgot: {
    marginTop: 15,
  },
  greenText: {
    color: '#007C41', 
  },
  signInButton: {
    width: '80%',
    backgroundColor: '#004F27',
  },
});

export default IniciarSesion;
