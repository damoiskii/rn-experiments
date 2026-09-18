import { Text } from "react-native";

import Animated, { FadeIn } from "react-native-reanimated";

const RFadeIn = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(1000)}
      // exiting={FadeIn.duration(1000)}
      className='w-20 h-10 bg-primary rounded-lg items-center justify-center'
    >
      <Text>Fade In</Text>
    </Animated.View>
  );
};

export default RFadeIn;
