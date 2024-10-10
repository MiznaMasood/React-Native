import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = () => {
    // Signup logic
    navigation.replace('MainTabs'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput 
        style={styles.input}
        placeholder='Name' 
        value={name} 
        onChangeText={(text) => setName(text)} 
        placeholderTextColor="#aaa"
      />

      <TextInput 
        style={styles.input}
        placeholder='Email' 
        value={email} 
        onChangeText={(text) => setEmail(text)} 
        placeholderTextColor="#aaa"
      />

      <TextInput 
        style={styles.input}
        placeholder='Password' 
        value={password} 
        secureTextEntry 
        onChangeText={(text) => setPassword(text)} 
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#6A11CB',
  },
  input: {
    borderWidth: 2,
    borderColor: '#6A11CB',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: '#6A11CB',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 16,
    color: '#555',
  },
  loginLink: {
    color: '#6A11CB',
    fontWeight: 'bold',
  },
});
