import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

const SequenceMotions = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const pulseAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = Animated.timing(animation, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  });

  const scaleUp = Animated.spring(animation, {
    toValue: 1,
    friction: 5,
    tension: 40,
    useNativeDriver: true,
  });

  const slideUp = Animated.timing(animation, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  });

  const slideIn = Animated.timing(animation, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  });

  const floating = Animated.loop(
    Animated.sequence([
      Animated.timing(pulseAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  );

  /* Not a good practice to have all these animations running at the same time on the same animation ref object */
  useEffect(() => {
    // Animated.sequence([fadeIn, scaleUp]).start(); // One after another
    Animated.parallel([fadeIn, scaleUp, slideUp, slideIn]).start(); // All at once
    floating.start(); // start the loop on its own
  }, []);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
  });

  const scale = pulseAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  return (
    <>
      <Text>Parallel Animation</Text>
      <View className='w-80 h-30 items-center justify-center bg-primary rounded-lg'>
        <Animated.Text style={{ transform: [{ scale: animation }] }}>
          Scale Up Box
        </Animated.Text>
        <Animated.Text style={{ opacity: animation }}>
          Fade In Box
        </Animated.Text>
        <Animated.Text style={{ transform: [{ translateY }] }}>
          Slide Up Box
        </Animated.Text>
        <Animated.Text style={{ transform: [{ translateX }] }}>
          Slide In Box
        </Animated.Text>
        <Animated.Text style={{ transform: [{ scale }] }}>
          Floating Box
        </Animated.Text>
      </View>
    </>
  );
};

export default SequenceMotions;
