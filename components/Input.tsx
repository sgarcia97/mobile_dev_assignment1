import {Text, View, TextInput, TextInputProps } from "react-native"
import styles from "./styles"
type InputProp = {
    label:string;
    place:string;
    secure?:boolean;
    capitalize?: TextInputProps['autoCapitalize'];
    value?:any;
    onChangeText: (text: string) => void;
}
const CustomInput = ({ label, place, secure = false, capitalize="none", value, onChangeText }: InputProp) => { // destructured props + default secure value
    return(
        <View style={styles.inputWrapper} >
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                placeholder={place} 
                value={value} 
                style={styles.input} 
                secureTextEntry={secure} 
                autoCapitalize={capitalize} 
                onChangeText={onChangeText} />
        </View>
    )
}

export default CustomInput;
