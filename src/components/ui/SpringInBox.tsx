import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

const SpringInBox = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View style={{ transform: [{ scale: animation }] }} className='w-80 h-20 items-center justify-center bg-primary rounded-lg'>
      <Text>Spring In Box</Text>
    </Animated.View>
  );
};

export default SpringInBox;
