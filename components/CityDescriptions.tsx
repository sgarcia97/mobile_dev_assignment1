
import {desc} from "./desc"
import {Text, View} from "react-native"
import styles from "./styles"

type CityDescProps = {
    city:string;
}
const CityDescriptions = ({city}:CityDescProps) => {
    return(
        <View style={styles.cityDescription}>
            {
                desc.map((item,i) => {
                       if(item.city == city){
                        return <Text style={styles.cdText} key={i}>{item.text}</Text>
                    }
                    })
            }
        </View>
        )
}

export default CityDescriptions