import { useEffect, useRef } from "react";
import { Animated, Easing, Text } from "react-native";

const FadeInBox = () => {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 2000,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View
      style={{ opacity: fade }}
      className='w-80 h-20 items-center justify-center bg-primary rounded-lg'
    >
      <Text>Fade In Box</Text>
    </Animated.View>
  );
};

export default FadeInBox;
