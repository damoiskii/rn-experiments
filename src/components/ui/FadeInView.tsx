import React, { useEffect, useRef } from "react";
import { Animated, ViewProps } from "react-native";

interface FadeInViewProps extends ViewProps {
  children: React.ReactNode;
  duration?: number;
}

const FadeInView = ({
  children,
  duration = 3000,
  ...rest
}: FadeInViewProps) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();

    return () => {
      opacity.stopAnimation(); // Stop the animation when the component unmounts
    };
  }, [duration]);

  return (
    <Animated.View style={{ opacity }} {...rest}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
