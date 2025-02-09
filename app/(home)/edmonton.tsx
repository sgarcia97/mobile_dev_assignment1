import { Text, View, Image, Linking, TouchableOpacity } from "react-native";
import styles from "../../components/styles";
import Template from "../../components/Template";

const Home = () => {
  const openCityPage = () => {
    Linking.openURL("https://www.edmonton.ca/");
  };

  return (
    <Template>
      <Text style={styles.welcometitle}>Edmonton</Text>

      <Image
        source={require("../../assets/edmonton.jpg")}
        style={{
          width: "100%",
          height: 250,
          resizeMode: "cover",
          marginVertical: 10,
        }}
      />

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: "#3A2E6E",
            paddingVertical: 10,
            width: "80%",
            alignSelf: "center",
          },
        ]}
        onPress={openCityPage}
      >
        <Text style={styles.buttontext}>Go to City Page</Text>
      </TouchableOpacity>

      <Text
        style={{
          textAlign: "left",
          fontSize: 16,
          marginTop: 10,
          paddingHorizontal: 25,
          lineHeight: 24,
        }}
      >
        {
          "\n🌉 Edmonton is home to North America’s largest mall, the West Edmonton Mall!"
        }
        {
          "\n🏒 The city is known for its passionate hockey culture and the legendary Edmonton Oilers."
        }
        {
          "\n🎭 It’s also called 'Festival City' because of its year-round arts, music, and cultural events."
        }
      </Text>
    </Template>
  );
};

export default Home;
