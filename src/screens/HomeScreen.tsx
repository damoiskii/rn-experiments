import HomeTopicCard from "@/components/HomeTopicCard";
import { TOPICS } from "@/constants/topics";
import { FlatList, Text, View } from "react-native";
import { Topic } from "../../types/topic";

const HomeScreen = () => {
  const renderItem = ({ item }: { item: Topic }) => (
    <HomeTopicCard
      title={item.title}
      subtitle={item.subtitle}
      link={item.link}
      bgColor={item.bgColor}
      icon={item.icon}
    />
  );

  return (
    <View className='items-center justify-center space-y-5 p-5'>
      <Text className='text-4xl font-bold'>Explore RN Experiments</Text>
      <Text className='text-lg text-gray-500 mb-5'>
        Tap on a topic to get started
      </Text>

      <FlatList
        data={TOPICS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around", gap: 20 }}
      />
    </View>
  );
};

export default HomeScreen;
