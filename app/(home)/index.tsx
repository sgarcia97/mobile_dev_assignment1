
import { StyleSheet, Text, View} from 'react-native';

import styles from "../../components/styles"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Template from "../../components/Template"

const Home = () => {
  return (
    <Template>
      <Text style={styles.welcometitle}>Welcome</Text>
    </Template>
  );
}

export default Home;


