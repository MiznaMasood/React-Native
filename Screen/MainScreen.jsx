import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
const navigation = useNavigation()
  const handleLogin = ()=>{
    navigation.navigate('Login')

  }

  const handleSignup = ()=>{
    navigation.navigate('Signup')
  }
  return (
    <LinearGradient 
      colors={['#6A11CB', '#2575FC']} 
      style={styles.container}
    >
      <View>
        <Image style={styles.image} source={require('../Assets/download-removebg-preview.png')} />
      </View>
      
      <View>
        <Text style={styles.text}>
          The easiest way to start with your amazing Application
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  image: {
    width: 300,
    height: 250,
    marginBottom: 40,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10, // For Android shadow
  },

  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 30,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    padding: 10,
    borderRadius: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonText: {
    color: '#6A11CB', 
    fontWeight: 'bold',
    fontSize: 18,
  },
});
