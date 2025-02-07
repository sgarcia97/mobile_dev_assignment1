import {Text, View, TouchableHighlight} from "react-native"
import styles from "./styles"
type ButtonProp = {
    title:string;
    setAlert:()=>void;
}
    const handleClick = () => {

    }

const Button = ({setAlert, ...props}:ButtonProp) => {
    return(
        <TouchableHighlight onPress={setAlert}>
            <View style={styles.button} >
                <Text style={styles.buttontext}>{props.title}</Text>
            </View>
        </TouchableHighlight>

    
    )
}

export default Button
