import {View, ScrollView, StatusBar} from "react-native"
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from "./styles"
type TemplateProps = {
    children:any;
}

const Template = ({children, ...props}:TemplateProps) => {
    return(
      
        <>
            <ScrollView style={styles.scrView}>
                <View >{children}</View>
            </ScrollView>
          </>
    )
}

export default Template;