import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Welcome to My App</Text>
     
      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.buttonText}>Go to About Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEFF1', 
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
    backgroundColor: '#27AE60', 
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
