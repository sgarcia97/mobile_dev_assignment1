import {Tabs} from 'expo-router'

const TabLayout = () => {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{
                title:"Home"
            }}/>
            <Tabs.Screen name="calgary" options={{

            }}/>
            <Tabs.Screen name="edmonton" options={{

            }}/>
        </Tabs>
    )
}

export default TabLayout;