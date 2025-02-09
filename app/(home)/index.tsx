import { Text, View, Image } from "react-native";
import styles from "../../components/styles";
import Template from "../../components/Template";

const Home = () => {
  return (
    <Template>
      <View style={{ flex: 1, justifyContent: "center", marginTop: "20%" }}>
        {/* Logo */}
        <Image
          source={require("../../assets/CliMap1.png")}
          style={{
            width: 255,
            height: 255,
            alignSelf: "center",
            marginBottom: 2, // Reduced space between logo and title
          }}
        />

        {/* App Title */}
        <Text style={[styles.welcometitle, { marginTop: 5 }]}>
          Welcome to CliMap!
        </Text>

        {/* Description */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 5, // Reduced space between title and description
            paddingHorizontal: 20,
            lineHeight: 22,
          }}
        >
          Stay updated with local weather and explore key facts about major
          cities in Canada.
        </Text>
      </View>
    </Template>
  );
};

export default Home;
