import {Text, View, TextInput} from "react-native"
import styles from "./styles"
type InputProp = {
    haveLabel:boolean;
    label?:string;
    setVal: (value:any) => void;
    options?:any;
}

const Input = ({options, setVal,...props}:InputProp) => {
   const handleChange = (text:any) => {
    setVal(text)
   }
    return(
            <View style={styles.inputWrapper} >
                { props.haveLabel && <Text style={styles.label}>{props.label}</Text>}
                <TextInput {...options} style={styles.input} onChangeText={text => handleChange(text)}/>
            </View>
    )
}

export default Input
