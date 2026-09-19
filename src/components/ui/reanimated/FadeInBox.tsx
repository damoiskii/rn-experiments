import { useEffect } from "react";
import { Text } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const FadeInBox = () => {
  const fade = useSharedValue(0);

  useEffect(() => {
    fade.value = withTiming(1, {
      duration: 2000,
      easing: Easing.out(Easing.ease),
    });
  }, []);

  const style = useAnimatedStyle(() => ({
    opacity: fade.value,
  }));

  return (
    <Animated.View
      style={style}
      className='w-20 h-10 bg-primary rounded-lg items-center justify-center'
    >
      <Text>Fade In</Text>
    </Animated.View>
  );
};

export default FadeInBox;
