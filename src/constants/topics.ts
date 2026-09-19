import {
    EyeDashed,
    Hand,
    Sparkles,
    Waypoints,
    Wind,
} from "lucide-react-native";
import { Topic } from "../../types/topic";

export const TOPICS: Topic[] = [
  {
    id: "nativewind",
    title: "NativeWind & Dark Mode",
    subtitle: "Learn how to use NativeWind",
    link: "/nativewind",
    bgColor: "bg-orange-200",
    icon: Wind,
  },
  {
    id: "blurs",
    title: "Blurs",
    subtitle: "Learn how to use Blurs",
    link: "/blurs",
    bgColor: "bg-purple-200",
    icon: EyeDashed,
  },
  {
    id: "animated",
    title: "Animated",
    subtitle: "Learn how to use Animated API",
    link: "/animated",
    bgColor: "bg-blue-200",
    icon: Waypoints,
  },
  {
    id: "gestures",
    title: "Gestures",
    subtitle: "Learn how to use Gestures",
    link: "/gestures",
    bgColor: "bg-green-200",
    icon: Hand,
  },
  {
    id: "reanimated",
    title: "Reanimated",
    subtitle: "Learn how to use Reanimated",
    link: "/reanimated",
    bgColor: "bg-red-200",
    icon: Sparkles,
  },
];
