import { BlurView } from "expo-blur";
import { Pressable, Text, View } from "react-native";

const Circles = () => {
  const circleSize = { width: 80, height: 80 };

  return (
    <>
      <View
        className={`absolute top-0 left-0 w-${circleSize.width} h-${circleSize.height} bg-green-500 rounded-full items-center justify-center`}
      />

      <View
        className={`absolute bottom-0 left-0 w-${circleSize.width} h-${circleSize.height} bg-purple-500 rounded-full items-center justify-center`}
      />

      <View
        className={`absolute top-0 right-0 w-${circleSize.width} h-${circleSize.height} bg-orange-500 rounded-full items-center justify-center`}
      />
    </>
  );
};

const BlurScreen = () => {
  const handlePress = (type: string) => {
    console.log("Button Pressed");
  };

  return (
    <View className='flex w-full h-full items-center justify-start'>
      <Text className='text-lg font-bold mb-5'>Blur Screen</Text>
      <View className='flex-row items-start justify-start gap-2'>
        <Pressable
          className='text-lg font-bold mb-4 bg-blue-200 p-3 rounded-lg border border-blue-700'
          onPress={() => handlePress("nativewind")}
        >
          <Text className='text-base font-bold'>Using NativeWind</Text>
        </Pressable>

        <Pressable
          className='text-lg font-bold mb-4 bg-orange-200 p-3 rounded-lg border border-orange-700'
          onPress={() => handlePress("expo")}
        >
          <Text className='text-base font-bold'>Using Expo Blur</Text>
        </Pressable>
      </View>

      <View className='flex-1 w-full items-start justify-start p-5 gap-1'>
        <View className='w-full h-90 bg-gray-500 rounded-lg items-center justify-center blur-3xl'>
          <Circles />
        </View>

        <BlurView
          className='w-full h-90 bg-black rounded-lg items-center justify-center gap-2'
          intensity={100}
          tint='dark'
          //   style={{ borderRadius: 10, zIndex: 1 }}
        >
          <Circles />
        </BlurView>
      </View>
    </View>
  );
};

export default BlurScreen;
