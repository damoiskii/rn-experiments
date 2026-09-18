import { router, type Href } from "expo-router";
import { Pressable, Text, View, StyleSheet } from "react-native";

interface HomeTopicCardProps {
  title: string;
  subtitle: string;
  link: string;
  bgColor?: string;
  icon: React.ComponentType<any>;
}

const HomeTopicCard = ({
  title,
  subtitle,
  link,
  bgColor,
  icon,
}: HomeTopicCardProps) => {
  const IconComponent = icon;

  const handlePress = () => {
    router.push({ pathname: link } as Href);
  };

  return (
    <Pressable
      onPress={handlePress}
      className={`w-45 h-50 rounded-lg p-5 ${bgColor || "bg-blue-500"} flex-column items-center justify-center border border-gray-500`}
    >
      <IconComponent size={50} color='black' />
      <View className='mt-5 flex-column items-center justify-center'>
        <Text className='text-lg font-bold text-center'>{title}</Text>
        <Text className='text-sm text-center'>{subtitle}</Text>
      </View>
    </Pressable>
  );
};

export default HomeTopicCard;