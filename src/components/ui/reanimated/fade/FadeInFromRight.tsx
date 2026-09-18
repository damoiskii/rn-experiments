import { Text } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";

const FadeInFromRight = () => {
  return (
    <Animated.View
      entering={FadeInRight.duration(1000)}
      className='w-30 h-10 bg-primary rounded-lg items-center justify-center'
    >
      <Text>In From Right</Text>
    </Animated.View>
  );
};

export default FadeInFromRight;
