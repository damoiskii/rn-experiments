import { Text } from "react-native";
import Animated, { Easing, FadeInDown } from "react-native-reanimated";

const FadeInFromBottom = () => {
  return (
    <Animated.View
      entering={FadeInDown.duration(1000).easing(Easing.ease)}
      className='w-30 h-10 bg-primary rounded-lg items-center justify-center'
    >
      <Text>In From Bottom</Text>
    </Animated.View>
  );
};

export default FadeInFromBottom;
