import { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const BounceIn = () => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(1, {
      damping: 5,
      stiffness: 100,
    });
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [ { scale: scale.value } ],
  }));

  return (
    <Animated.View style={style} className='w-20 h-10 bg-primary rounded-lg items-center justify-center'>
      <Text>BounceIn</Text>
    </Animated.View>
  );
};

export default BounceIn;
