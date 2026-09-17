import "../../global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName='animated'>
      <Stack.Screen name='index' />
      <Stack.Screen name='nativewind' />
      <Stack.Screen name='blurs' />
      <Stack.Screen name='animated' />
    </Stack>
  );
}
