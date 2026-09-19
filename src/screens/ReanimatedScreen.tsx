import BounceIn from "@/components/ui/reanimated/BounceIn";
import BounceOut from "@/components/ui/reanimated/BounceOut";
import FadeInFromBottom from "@/components/ui/reanimated/fade/FadeInFromBottom";
import FadeInFromLeft from "@/components/ui/reanimated/fade/FadeInFromLeft";
import FadeInFromRight from "@/components/ui/reanimated/fade/FadeInFromRight";
import FadeInFromTop from "@/components/ui/reanimated/fade/FadeInFromTop";
import FadeInBox from "@/components/ui/reanimated/FadeInBox";
import FadeOutBox from "@/components/ui/reanimated/FadeOutBox";
import RFadeIn from "@/components/ui/reanimated/RFadeIn";
import { ScrollView, Text, View } from "react-native";

const ReanimatedScreen = () => {
  return (
    <ScrollView
      className='p-4'
      contentContainerStyle={{
        // gap: 20,
        alignItems: "center",
        justifyContent: "flex-start",
        // flex: 1
      }}
      //   style={{ flex: 1, width: "100%" }}
      showsHorizontalScrollIndicator={false}
    >
      <Text className='text-2xl font-bold mb-5 text-center'>
        Reanimated Animations
      </Text>
      <Text className='text-lg text-center mb-5'>
        Explore different reanimated animation techniques in React Native
      </Text>
      <View className='flex-1 w-full items-center justify-center gap-3 mt-5 mb-5'>
        <Text className='text-xl font-bold'>Fades (With Timing)</Text>
        <View className='flex-row w-full items-center justify-center gap-3 mb-5 flex-wrap'>
          <FadeInBox />
          <FadeOutBox />
          <RFadeIn />
          <FadeInFromLeft />
          <FadeInFromRight />
          <FadeInFromTop />
          <FadeInFromBottom />
        </View>

        <Text className='text-xl font-bold'>Bounces (With Spring)</Text>
        <View className='flex-row w-full items-center justify-center gap-3 mb-5'>
          <BounceIn />
          <BounceOut />
        </View>
      </View>
    </ScrollView>
  );
};

export default ReanimatedScreen;
