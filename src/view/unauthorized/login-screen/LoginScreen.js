import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from './LoginScreen.styles';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail(email);
    setPassword(password);
  }, [email, password]);

  return (
    <View style={Styles.container}>
      <View style={Styles.card}>
        <Text style={Styles.cardHeader}>Login</Text>
        <TextInput
          placeholder="Email"
          style={Styles.input}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={Styles.input}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={Styles.button}
          onPress={() => {
            props.navigation.navigate('App');
          }}>
          <Text style={Styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.registerButton}
          onPress={() => {
            props.navigation.push('Register');
          }}>
          <Text style={Styles.registerTextButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = {
  header: null,
};

export default LoginScreen;
