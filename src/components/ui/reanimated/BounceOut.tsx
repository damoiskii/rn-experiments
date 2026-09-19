import { useEffect } from "react";
import { Text } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

const BounceOut = () => {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(0, {
      damping: 5,
      stiffness: 100,
    });
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={style}
      className='w-20 h-10 bg-primary rounded-lg items-center justify-center'
    >
      <Text>BounceOut</Text>
    </Animated.View>
  );
};

export default BounceOut;
