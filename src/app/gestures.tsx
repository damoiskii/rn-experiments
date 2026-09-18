import GestureHandlerScreen from "@/screens/GestureHandlerScreen";
import { SafeAreaView } from "react-native-safe-area-context";
const gestures = () => {
  return (
    <SafeAreaView
      className='flex-1 items-center justify-center'
      edges={["top", "left", "right"]}
    >
      <GestureHandlerScreen />
    </SafeAreaView>
  );
};

export default gestures;
