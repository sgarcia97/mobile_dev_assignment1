import {Tabs} from 'expo-router'

const TabLayout = () => {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{
                title:'Welcome'
            }}/>
            <Tabs.Screen name="calgary" options={{
                title:'Calgary'
            }}/>
            <Tabs.Screen name="edmonton" options={{
                title:'Edmonton'
            }}/>
        </Tabs>
    )
}

export default TabLayout;