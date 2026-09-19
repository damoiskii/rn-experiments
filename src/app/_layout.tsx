import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} initialRouteName='gestures'>
        <Stack.Screen name='index' />
        <Stack.Screen name='nativewind' />
        <Stack.Screen name='blurs' />
        <Stack.Screen name='animated' />
        <Stack.Screen name='gestures' />
        <Stack.Screen name='reanimated' />
      </Stack>
    </GestureHandlerRootView>
  );
}
