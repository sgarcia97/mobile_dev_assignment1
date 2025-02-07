import {Tabs} from 'expo-router'

const TabLayout = () => {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerShown:false,
                title:"Home"
            }}/>
            <Tabs.Screen name="calgary" options={{
                headerShown:false
            }}/>
            <Tabs.Screen name="edmonton" options={{
                headerShown:false
            }}/>
        </Tabs>
    )
}

export default TabLayout;