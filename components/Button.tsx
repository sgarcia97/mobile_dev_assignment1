import {Text, View, TouchableHighlight} from "react-native"
import styles from "./styles"
type ButtonProp = {
    title:string;
}
const Button = (props:ButtonProp) => {
    return(
        <TouchableHighlight>
            <View style={styles.button} >
                <Text style={styles.buttontext}>{props.title}</Text>
            </View>
        </TouchableHighlight>

    
    )
}

export default CustomButton;
