import {Tabs} from 'expo-router'
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {Text} from "react-native"
const TabLayout = () => {
    return(
        <Tabs> 
            <Tabs.Screen name="index" options={{
                headerShown:true,
                title:"Home",
                tabBarIcon:({focused, color}) => { 
                    let cityColor:string = focused ? "black" : color
                    return <Foundation name="home" size={25} color={cityColor} />
                },
                tabBarLabel:({focused,color,children}) => {
                    return focused ? <Text style={{color:"black", fontSize:10}}>{children}</Text> : <Text style={{color:color, fontSize:10}}>{children}</Text>
                  
                }
            }}/>
            <Tabs.Screen name="calgary" options={{
                headerShown:true,
                title:"Calgary",
                tabBarIcon:({focused, color}) => { 
                    let cityColor:string = focused ? "red" : color
                    return <FontAwesome6 name="mountain-city" size={18} color={cityColor} />
                },
                tabBarLabel:({focused,color,children}) => {
                    return focused ? <Text style={{color:"red", fontSize:10}}>{children}</Text> : <Text style={{color:color, fontSize:10}}>{children}</Text>
                  
                }
            }}/>
            <Tabs.Screen name="edmonton" options={{
                headerShown:true,
                title:"Edmonton",
                tabBarIcon:({focused, color}) => {
                    let cityColor:string = focused ? "#005087" : color
                    return <FontAwesome6 name="tree-city" size={18} color={cityColor} />
                },
                tabBarLabel:({focused,color,children}) => {
                    return focused ? <Text style={{color:"#005087", fontSize:10}}>{children}</Text> : <Text style={{color:color, fontSize:10}}>{children}</Text>
                  
                }
            }}/>
        </Tabs>
    )
}

export default TabLayout;