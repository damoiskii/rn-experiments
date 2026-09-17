import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

const SpinBox = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }} className='w-80 h-20 items-center justify-center bg-primary rounded-lg'>
      <Text>Spin Box</Text>
    </Animated.View>
  );
};

export default SpinBox;
