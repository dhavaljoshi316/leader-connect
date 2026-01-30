import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated"
import { colors } from "../../globalCSS/GlobalCss"

export default function Skeleton({ width, height, radius = 8 }) {
  const opacity = useSharedValue(0.4)

  opacity.value = withRepeat(
    withTiming(1, { duration: 800 }),
    -1,
    true
  )

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  return (
    <Animated.View
      style={[
        {
          width,
          height,
          borderRadius: radius,
          backgroundColor: colors.border || "#e5e7eb",
        },
        animatedStyle,
      ]}
    />
  )
}
