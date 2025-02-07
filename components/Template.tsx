import {View, ScrollView, SafeAreaView} from "react-native"
type TemplateProps = {
    children:any;
}

const Template = ({children, ...props}:TemplateProps) => {
    return(
        <SafeAreaView>
            <ScrollView>
                <View>{children}</View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Template;