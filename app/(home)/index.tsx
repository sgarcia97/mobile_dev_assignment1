import { Text, View, Image } from "react-native";
import styles from "../../components/styles";
import Template from "../../components/Template";
import CityButton from "../../components/CityButton";

const Home = () => {
  return (
    <Template>
        <Text style={[styles.welcometitle, { marginTop: 5 }]}>
          Welcome to Explore Alberta
        </Text>
        <Text style={{textAlign:"center"}}>Welcome to our app. Select your city to get started</Text>
    </Template>
  );
};

export default Home;
