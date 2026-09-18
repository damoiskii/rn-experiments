import ReanimatedScreen from "@/screens/ReanimatedScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const reanimated = () => {
  return (
    <SafeAreaView
      className='flex-1 items-center justify-center'
      edges={["top", "left", "right"]}
    >
      <ReanimatedScreen />
    </SafeAreaView>
  );
};

export default reanimated;
