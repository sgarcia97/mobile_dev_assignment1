import { Text, View, Image, Linking, TouchableOpacity } from "react-native";
import styles from "../../components/styles";
import Template from "../../components/Template";

const Home = () => {
  const openCityPage = () => {
    Linking.openURL("https://www.calgary.ca/home.html");
  };

  return (
    <Template>
      <Text style={styles.welcometitle}>Calgary</Text>

      <Image
        source={require("../../assets/calgary.png")}
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
          "\n🌆 Calgary is known for its famous Calgary Stampede, often called 'The Greatest Outdoor Show on Earth.'"
        }
        {
          "\n🏔️ It's also close to the stunning Rocky Mountains, making it a great spot for outdoor adventures."
        }
        {
          "\n🌍 Calgary has one of the highest livability rankings in the world and a thriving tech industry!"
        }
      </Text>
    </Template>
  );
};

export default Home;
