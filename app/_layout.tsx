import { Stack } from 'expo-router';

const Layout = () => {
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
      <Stack.Screen name="index" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}

export default Layout;