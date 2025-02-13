import { Text, View, Image, Linking, TouchableOpacity } from "react-native";
import styles from "../../components/styles";
import Template from "../../components/Template";
import CityButton from "../../components/CityButton";
import CityDescriptions from "../../components/CityDescriptions";

const Home = () => {
  return (
    <Template>
      <Image
        source={require("../../assets/edmonton.jpg")}
        style={styles.pageImage}
      />
      <Text style={styles.welcometitle}>Welcome to Edmonton</Text>
      <CityButton color="#005087" link="https://www.edmonton.ca/" text="Go to City page"/>
      <CityDescriptions city="Edmonton"/>
    </Template>
  );
};

export default Home;
