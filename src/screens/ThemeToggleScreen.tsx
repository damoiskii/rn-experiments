import { ThemeProvider } from "@/components/ThemeProvider";
import {
    Appearance,
    Pressable,
    Text,
    useColorScheme,
    View,
} from "react-native";

const ThemeToggleScreen = () => {
  const colorScheme = useColorScheme();

  const toggleTheme = () => {
    Appearance.setColorScheme(
      Appearance.getColorScheme() === "dark" ? "light" : "dark",
    );
  };

  return (
    <ThemeProvider>
      <View className='flex-1 w-full items-center justify-center bg-background'>
        <View className='absolute top-0 right-[-100] w-80 h-80 bg-purple-200 dark:bg-cyan-200 rounded-full opacity-20' />

        <Text className='text-lg font-bold mb-4 dark:text-white'>
          Theme Toggle Screen
        </Text>

        <Pressable
          onPress={toggleTheme}
          className='p-4 bg-gray-200 dark:bg-gray-800 rounded-lg'
        >
          <Text className='text-black dark:text-white'>Toggle Theme</Text>
        </Pressable>

        <Text className='mt-4 dark:text-white'>
          Current Theme: {colorScheme || "unspecified"}
        </Text>

        <View className='absolute bottom-0 left-[-100] w-50 h-50 bg-cyan-200 dark:bg-purple-200 rounded-full opacity-20' />
      </View>
    </ThemeProvider>
  );
};

export default ThemeToggleScreen;
