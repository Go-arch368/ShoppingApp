
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

import 'react-native-reanimated';
import "./globals.css"
import { StatusBar } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
   
    <>
    <StatusBar hidden={true}/>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
      </Stack>
      
    </>
    
  );
}
