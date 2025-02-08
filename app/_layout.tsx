import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack  
    screenOptions={{
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#505050',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="index" options={{ headerShown: false}} />
      <Stack.Screen name="home" options={{ title:'Explore Canada'}} />
    </Stack>
  );
}

export default RootLayout;
