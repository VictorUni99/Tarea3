import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Principal = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.upperHalf}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>STARBUCKS</Text>
          </View>
          <View style={[styles.imageContainer, { marginLeft: 22 }]}>
            <Image
              source={require('../imagenes/more.png')}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.imageBackground}>
          <Image
            source={require('../imagenes/Starbucks_Logo.svg.webp')}
            style={styles.srImage}
          />
        </View>
        <View style={styles.lowerHalf}>
          <View style={styles.box}>
            <Text style={styles.cardBalance}>Card Balance</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.rpText}>RP</Text>
            <Text style={styles.rpTextWhite}> 593,000</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHalf: {
    flex: 0.5,
    backgroundColor: '#004F27',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: '#004F27',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerHalf: {
    flex: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 20,
    marginLeft: 22,
    width: 50,
    height: 50,
  },
  logo: {
    width: '70%',
    height: '70%',
    marginTop: -20, 
    tintColor: 'white', 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 20,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: '#E9F8F4',
    padding: 10,
    marginBottom: 10,
  },
  cardBalance: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004F27',
  },
  rpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004F27',
  },
  rpTextWhite: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004F27',
  },
  srImage: {
    width: 250, 
    height: 250, 
    marginTop: -100, 

  },
});

export default Principal;
