import {Text, View, TextInput} from "react-native"
import styles from "./styles"
type InputProp = {
    label:string;
    place:string;
    value?:any
}
const Input = (props:InputProp) => {
    return(
     
            <View style={styles.inputWrapper} >
                <Text style={styles.label}>{props.label}</Text>
                <TextInput placeholder={props.place} value={props.value} style={styles.input}/>
            </View>
    )
}

export default Input
