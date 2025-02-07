import {Text, View, TouchableHighlight} from "react-native"
import styles from "./styles"
type ButtonProp = {
    title:string;
    onPress: () => void;
}
const CustomButton = (props:ButtonProp) => {
    return(
        <TouchableHighlight onPress={props.onPress}>
            <View style={styles.button} >
                <Text style={styles.buttontext}>{props.title}</Text>
            </View>
        </TouchableHighlight>

    
    )
}

export default CustomButton;
