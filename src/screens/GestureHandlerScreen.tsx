import { Dimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    type SharedValue,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

interface AnimatedPosition {
  x: SharedValue<number>;
  y: SharedValue<number>;
}

const useFollowAnimatedPosition = ({ x, y }: AnimatedPosition) => {
  // const followX = useDerivedValue(() => {
  //   return x.value;
  // });

  // const followY = useDerivedValue(() => {
  //   return y.value;
  // });

  const followX = useDerivedValue(() => {
    return withSpring(x.value);
  });

  const followY = useDerivedValue(() => {
    return withSpring(y.value);
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: followX.value }, { translateY: followY.value }],
    };
  });

  return { followX, followY, animatedStyle };
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const GestureHandlerScreen = () => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  // To remember the last position of the gesture, we can use a shared value to store the context of the gesture. This allows us to accumulate the translation values across multiple gestures, so that when the user lifts their finger and starts a new gesture, the object will continue moving from its last position rather than snapping back to its original position.
  const context = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onStart((event) => {
      context.value = { x: translationX.value, y: translationY.value };
    })
    .onUpdate((event) => {
      translationX.value = event.translationX + context.value.x;
      translationY.value = event.translationY + context.value.y;
    })
    .onEnd((event) => {
      // Optionally, you can add some logic here to handle what happens when the gesture ends.
      // For example, you could snap the object back to its original position or apply some inertia.

      if(translationX.value > SCREEN_WIDTH / 2) {
        translationX.value = withSpring(SCREEN_WIDTH / 2);
      } else if(translationX.value < -SCREEN_WIDTH / 2) {
        translationX.value = withSpring(-SCREEN_WIDTH / 2);
      }

      if(translationY.value > SCREEN_HEIGHT / 2) {
        translationY.value = withSpring(SCREEN_HEIGHT / 2);
      } else if(translationY.value < -SCREEN_HEIGHT / 2) {
        translationY.value = withSpring(-SCREEN_HEIGHT / 2);
      }
    });

  const {
    animatedStyle: blueAnimatedStyle,
    followX: blueFollowX,
    followY: blueFollowY,
  } = useFollowAnimatedPosition({
    x: translationX,
    y: translationY,
  });

  const {
    animatedStyle: redAnimatedStyle,
    followX: redFollowX,
    followY: redFollowY,
  } = useFollowAnimatedPosition({
    x: blueFollowX,
    y: blueFollowY,
  });

  const {
    animatedStyle: greenAnimatedStyle,
    // followX: greenFollowX,
    // followY: greenFollowY,
  } = useFollowAnimatedPosition({
    x: redFollowX,
    y: redFollowY,
  });

  return (
    <View className='flex-1 w-full h-full items-center justify-center p-5 mt-10'>
      <Animated.View
        className='w-20 h-20 bg-red-500 rounded-full opacity-80 absolute'
        style={redAnimatedStyle}
      />

      <Animated.View
        className='w-20 h-20 bg-green-500 rounded-full opacity-80 absolute'
        style={greenAnimatedStyle}
      />
      <GestureDetector gesture={gesture}>
        <Animated.View
          className='w-20 h-20 bg-blue-500 rounded-full opacity-80 absolute'
          style={blueAnimatedStyle}
        />
      </GestureDetector>
    </View>
  );
};

export default GestureHandlerScreen;
