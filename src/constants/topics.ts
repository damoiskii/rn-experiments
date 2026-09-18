import { Topic } from "../../types/topic";
import { Wind, EyeDashed } from "lucide-react-native";

export const TOPICS: Topic[] = [
    {
        id: 'nativewind',
        title: 'NativeWind & Dark Mode',
        subtitle: 'Learn how to use NativeWind',
        link: '/nativewind',
        bgColor: 'bg-orange-200',
        icon: Wind
    },
    {
        id: 'blurs',
        title: 'Blurs',
        subtitle: 'Learn how to use Blurs',
        link: '/blurs',
        bgColor: 'bg-purple-200',
        icon: EyeDashed
    }
];