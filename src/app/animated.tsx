import AnimatedScreen from "@/screens/AnimatedScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const animated = () => {
  return (
    <SafeAreaView
      className='flex-1 items-center justify-center'
      edges={["top", "left", "right"]}
    >
      <AnimatedScreen />
    </SafeAreaView>
  );
};

export default animated;
