import HomeScreen from "@/screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      className='flex-1 items-center justify-center bg-white'
      edges={["top", "left", "right"]}
    >
      <HomeScreen />
    </SafeAreaView>
  );
}
