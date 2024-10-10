import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Contact'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',  
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C3E50',  
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#2980B9',  
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
