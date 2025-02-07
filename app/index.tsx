
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react"
import styles from "../components/styles"
import Button from "../components/Button"
import Input from "../components/Input"
import Template from "../components/Template"

const Signin = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
  const handleSubmit = () => {
    alert(username + " " + password)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcometitle}>Sign in</Text>
      <Input haveLabel={false} options={{placeholder:"Username"}} setVal={setUsername} />
      <Input haveLabel={false} options={{placeholder:"Password",secureTextEntry:true,}} setVal={setPassword}/>
      <Button title="Sign in" setAlert={handleSubmit}/>
    </View>
  );
}

export default Signin;


