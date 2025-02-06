
import { StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"
import Button from "../components/Button"
import Input from "../components/Input"
import Template from "../components/Template"

const Signin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcometitle}>Welcome to Explore Canada</Text>
      <Input place="Username" label="Username"/>
      <Button title="Welcome"/>
    </View>
  );
}

export default Signin;


