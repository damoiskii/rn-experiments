import FadeInBox from "@/components/ui/FadeInBox";
import FadeInView from "@/components/ui/FadeInView";
import FadeOutBox from "@/components/ui/FadeOutBox";
import GlowCard from "@/components/ui/GlowCard";
import SequenceMotions from "@/components/ui/SequenceMotions";
import SpinBox from "@/components/ui/SpinBox";
import SpringInBox from "@/components/ui/SpringInBox";
import { ScrollView, Text, View } from "react-native";

const AnimatedScreen = () => {
  return (
    <ScrollView
      className='p-4'
      contentContainerStyle={{
        // gap: 20,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Text className='text-2xl font-bold mb-5 text-center'>Animations</Text>
      <Text className='text-lg text-center mb-5'>
        Explore different animation techniques in React Native
      </Text>
      <View className='flex-column w-full items-center justify-start gap-3 mt-5 mb-5'>
        <Text className='text-xl font-bold'>Fade (Opacity | Timing)</Text>
        <FadeInBox />
        <FadeOutBox />
        <GlowCard />
        <FadeInView className='w-80 h-20 items-center justify-center bg-primary rounded-lg'>
          <Text>Fade In View</Text>
        </FadeInView>
      </View>

      <View className='flex-column w-full items-center justify-start gap-3 mt-5 mb-5'>
        <Text className='text-xl font-bold'>Motion (Spring)</Text>
        <SpringInBox />
        <SpinBox />

        <SequenceMotions />
      </View>

      {/* <Pressable className='pill bg-primary'>
        <Text className='text-white'>Home</Text>
      </Pressable> */}
    </ScrollView>
  );
};

export default AnimatedScreen;
