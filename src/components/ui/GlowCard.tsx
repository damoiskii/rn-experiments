import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const GlowCard = () => {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fade, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fade, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fade]);

  return (
    <AnimatedLinearGradient
      colors={["blue", "lightblue", "skyblue"]}
      style={{ opacity: fade }}
      className='w-80 h-20 rounded-lg items-center justify-center'
      start={{ x: 0, y: 10 }}
      end={{ x: 10, y: 0 }}
      locations={[0, 0.5, 0]}
      dither={false}
    >
      <Text>Glow Card</Text>
    </AnimatedLinearGradient>
  );
};

export default GlowCard;
