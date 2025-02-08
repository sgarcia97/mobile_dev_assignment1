import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Foundation';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const TabLayout = () => {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerShown:false,
                title:"Home",
                tabBarIcon:({focused, color}) => {
                    return <Ionicons name="home" size={24} color={color} />
                }
                }}/>
            <Tabs.Screen name="calgary" options={{
                headerShown:false,
                title:"Calgary",
                tabBarIcon:({focused, color}) => {
                    return <FontAwesome6 name="mountain-city" size={18} color={color} />
                }
            }}/>
            <Tabs.Screen name="edmonton" options={{
                headerShown:false,
                title:"Edmonton",
                tabBarIcon:({focused, color}) => {
                    return <FontAwesome6 name="tree-city" size={18} color={color} />
                }
            }}/>
        </Tabs>
    )
}

export default TabLayout;