import { Topic } from "../../types/topic";
import { Wind, EyeDashed, Waypoints, Hand } from "lucide-react-native";

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
    },
    {
        id: 'animated',
        title: 'Animated',
        subtitle: 'Learn how to use Animated',
        link: '/animated',
        bgColor: 'bg-blue-200',
        icon: Waypoints
    },
    {
        id: 'gestures',
        title: 'Gestures',
        subtitle: 'Learn how to use Gestures',
        link: '/gestures',
        bgColor: 'bg-green-200',
        icon: Hand
    }
];