import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const OTP = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        You only have to enter an OTP code we sent via SMS to your registered phone number +6388802350231
      </Text>
      <View style={styles.otpLabelContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Datos')}>
          <Text style={styles.otpLabel}>
            OTP<Text style={styles.redText}>*</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otpContainer}>
        {[...Array(5)].map((_, index) => (
          <TextInput key={index} style={styles.otpInput} maxLength={1} />
        ))}
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../imagenes/Starbucks_Logo.svg.webp')}
          style={[styles.logo, { opacity: 0.5, marginTop: 40 }]} 
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Datos')} style={styles.arrowContainer}>
          <Text style={styles.arrow}>➜</Text>
        </TouchableOpacity>
      </View>
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
  otpLabelContainer: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  otpLabel: {
    fontSize: 18,
    color: '#007C41', 
  },
  redText: {
    color: 'red',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '18%',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  logoContainer: {
    alignSelf: 'flex-end',
    marginTop: 90, 
    position: 'relative',
    marginLeft: 200, 
    marginRight: 100,
  },
  logo: {
    width: 300,
    height: 300,
  },
  arrowContainer: {
    position: 'absolute',
    top: 20,
    right: -80,
    backgroundColor: '#004F27', 
    padding: 10,
    borderRadius: 50,
  },
  arrow: {
    fontSize: 30,
    color: 'white',
  },
});


export default OTP;
