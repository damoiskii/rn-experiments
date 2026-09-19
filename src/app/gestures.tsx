import GestureHandlerScreen from "@/screens/GestureHandlerScreen";
import { SafeAreaView } from "react-native-safe-area-context";
const gestures = () => {
  return (
    <SafeAreaView
      className='items-center justify-center'
      edges={["top", "left", "right"]}
      style={{ flex: 1 }}
    >
      <GestureHandlerScreen />
    </SafeAreaView>
  );
};

export default gestures;
