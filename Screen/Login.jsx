import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

const Login = ({navigation}) => {
   
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handlesubmit =(e)=>{
        console.log(email,password)
      
        setEmail ('')
        setPassword('')

        Alert.alert('Login Successfully..😊')
        navigation.replace('MainTabs'); 

    }

    const handleNavigation = ()=>{
        navigation.navigate('Signup')

    }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={email} onChangeText={(e)=>setEmail(e)} placeholder='Email' placeholderTextColor="#aaa" />
        <TextInput style={styles.input} secureTextEntry value={password} onChangeText={(e)=>setPassword(e)} placeholder='Password' placeholderTextColor="#aaa" />
        <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlesubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text style={styles.signupLink} onPress={handleNavigation} >Signup</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 15,
    width: '100%',
  },

  forgotPasswordText: {
    textAlign: 'right',
    color: '#007BFF',
    fontSize: 14,
    marginRight: 10,
    textDecorationLine: 'underline',
  },

  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },

  button: {
    backgroundColor: '#6A11CB',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
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

  signupText: {
    fontSize: 16,
    color: '#555',
  },

  signupLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
