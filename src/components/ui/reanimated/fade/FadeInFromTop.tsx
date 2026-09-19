import { Text } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const FadeInFromTop = () => {
  return (
    <Animated.View
      entering={FadeInUp.duration(1000)}
      className='w-30 h-10 bg-primary rounded-lg items-center justify-center'
    >
      <Text>In From Up</Text>
    </Animated.View>
  );
};

export default FadeInFromTop;
