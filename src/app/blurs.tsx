import BlurScreen from '@/screens/BlurScreen';
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const blurs = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center' edges={['top', 'left', 'right']}>
      <BlurScreen />
    </SafeAreaView>
  );
};

export default blurs;
