import { Appearance, Pressable, Text, useColorScheme, View } from "react-native";

const ThemeToggleScreen = () => {
  const colorScheme = useColorScheme();

  const toggleTheme = () => {
    Appearance.setColorScheme(
      Appearance.getColorScheme() === "dark" ? "light" : "dark",
    );
  };

  return (
    <View className='flex-1 w-full items-center justify-center dark:bg-gray-900'>
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
    </View>
  );
};

export default ThemeToggleScreen;
