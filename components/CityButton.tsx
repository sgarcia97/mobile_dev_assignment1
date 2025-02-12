import {TouchableHighlight, Linking, Text } from "react-native"
import styles from "./styles"
import Link from "expo-router"
import {View} from "react-native"

type CityButtonProps = {
  color:string;
  text:string;
  link:string;
}
const CityButton = (props:CityButtonProps) => {
const openCityPage = () => {
    Linking.openURL(props.link);
  };
  return (
      <TouchableHighlight style={[
          {
            backgroundColor:props.color
          }, styles.cityButton
        ]
      }
        onPress={openCityPage}>
          <Text style={styles.buttontext}>{props.text}</Text>
        </TouchableHighlight>
      )
}

export default CityButton;