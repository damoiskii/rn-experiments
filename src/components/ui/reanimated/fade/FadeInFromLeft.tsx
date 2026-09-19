import { Text } from "react-native";
import Animated, { FadeInLeft } from "react-native-reanimated";

const FadeInFromLeft = () => {
  return (
    <Animated.View
      entering={FadeInLeft.duration(1000)}
      className='w-30 h-10 bg-primary rounded-lg items-center justify-center'
    >
      <Text>In From Left</Text>
    </Animated.View>
  );
};

export default FadeInFromLeft;
