import {
    Text
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView
      className='flex-1 items-center justify-center'
      edges={["top", "left", "right"]}
    >
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
