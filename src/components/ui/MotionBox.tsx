import { useEffect, useRef } from "react";
import { Animated } from "react-native";

const MotionBox = () => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const withTiming = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(scale, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const withSpring = () => {
    Animated.spring(progress, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
    Animated.spring(scale, {
      toValue: 2,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const withSequence = () => {
    Animated.sequence([
      Animated.timing(progress, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(progress, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.sequence([
      Animated.timing(scale, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const withParallel = () => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(progress, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),

      Animated.sequence([
        Animated.timing(scale, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const withStagger = () => {
    Animated.stagger(500, [
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(progress, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),

      Animated.sequence([
        Animated.timing(scale, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const withLoop = () => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(progress, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(progress, {
            toValue: 0.5,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),

        Animated.sequence([
          Animated.timing(scale, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ]),
      { iterations: 3 }
    ).start();
  };

  useEffect(() => {
    // With timing
    // withTiming();

    // With spring
    // withSpring();

    // With sequence
    // withSequence();

    // With parallel
    // withParallel();

    // With stagger
    // withStagger();

    // With loop
    withLoop();
  }, []);

  const borderRadius = progress.interpolate({
    inputRange: [0.5, 1],
    outputRange: [5, 1],
  });

  const rotate = progress.interpolate({
    inputRange: [0.5, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      className='w-5 h-5 items-center justify-center bg-amber-600'
      style={{
        opacity: progress,
        transform: [{ scale }, { rotate }],
        borderRadius,
      }}
    >
      {/* <Text>Motion Box</Text> */}
    </Animated.View>
  );
};

export default MotionBox;
