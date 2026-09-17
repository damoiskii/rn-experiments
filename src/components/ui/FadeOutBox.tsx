import { useEffect, useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";

const FadeOutBox = () => {
  const fade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fade, {
        toValue: 0,
        duration: 2000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View style={{ opacity: fade }} className='w-80 h-20 items-center justify-center bg-primary rounded-lg'>
      <Text>Fade Out Box</Text>
    </Animated.View>
  );
};

export default FadeOutBox;
