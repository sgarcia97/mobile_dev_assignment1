import { Text, View, Image, Linking, TouchableOpacity, Alert } from "react-native";
import styles from "../../components/styles";
import Template from "../../components/Template";
import CityButton from "../../components/CityButton";
import CityDescriptions from "../../components/CityDescriptions";

const Home = () => {
  Alert.alert("Welcome to Explore Alberta","Start exploring")
  return (
    <Template>
      <Image
        source={require("../../assets/calgary.png")}
        style={styles.pageImage}
      />
      <Text style={styles.welcometitle}>Welcome to Calgary</Text>
      <CityButton color="red" link="https://www.calgary.ca/home.html" text="Go to City page"/>
      <CityDescriptions city="Calgary"/>
    </Template>
  );
};

export default Home;
