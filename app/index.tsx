
import { Text, View, Alert } from 'react-native';
import styles from "../components/styles";
import CustomButton from "../components/Button";
import CustomInput from "../components/Input";
import React, {useState} from 'react';

// login data
import logins from '../credentials.json';

const Landing= (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // validation functions
  const validateLength = (username: string): boolean => {
    return username.length >= 5;
  }

  // password complexity
  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // match password and username
  const validateCredentials = (username: string, password: string): boolean => {
    const user = logins.users.find(user => user.username === username);
    return user ? user.password === password : false;
  }

  const handleSignIn = (): void => {
    if (!validateLength(username)) {
      Alert.alert('Error', 'Username must be at least 5 characters long.');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Error', 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
    Alert.alert('Success', 'Sign-in successful!');

    if (validateCredentials(username, password)) {
      Alert.alert('Success', 'Sign-in successful!'); // router to home
      // empty username and passwor input
      setUsername('');
      setPassword('');
    } else {
      Alert.alert('Error', 'Invalid username or password.');
    }
  };

  // main component
  return (
    <View style={styles.container}>
      <Text style={styles.welcometitle}>Welcome to Explore Canada</Text>
      <CustomInput place="Username" label="Username" value={username} onChangeText={setUsername}/>
      <CustomInput place="Password" label="Password" secure={true} value={password} onChangeText={setPassword}/>
      <CustomButton title="Welcome" />
    </View>
  );
}

export default Landing;


