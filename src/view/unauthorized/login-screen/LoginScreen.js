import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Styles from './LoginScreen.styles';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(email, password);
    setEmail(email);
    setPassword(password);
  }, [email, password]);

  return (
    <View styles={Styles.container}>
      <TextInput onChange={event => setPassword(event.target.value)} />
      <TextInput onChange={event => setEmail(event.target.value)} />
      <Button
        title="Button"
        onPress={() => {
          props.navigation.navigate('App');
        }}
      />
      <Text>{(email, password)}</Text>
    </View>
  );
};

export default LoginScreen;
