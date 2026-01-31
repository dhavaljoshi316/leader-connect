import { Ionicons } from "@expo/vector-icons"
import * as Haptics from "expo-haptics"
import { useState } from "react"
import { RefreshControl, ScrollView, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { colors } from "../globalCSS/globalcss"

export default function PullToRefresh({ onRefresh, children }) {
  const [refreshing, setRefreshing] = useState(false)
  const rotation = useSharedValue(0)

  const handleRefresh = async () => {
    setRefreshing(true)
    rotation.value = withTiming(360)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)

    try {
      await onRefresh()
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    } finally {
      rotation.value = withTiming(0)
      setRefreshing(false)
    }
  }

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }))

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          tintColor={colors.primary}
          colors={[colors.primary]}
        />
      }
    >
      <View style={{ alignItems: "center", paddingVertical: 12 }}>
        <Animated.View style={iconStyle}>
          <Ionicons
            name="refresh"
            size={20}
            color={colors.primary}
          />
        </Animated.View>
      </View>

      {children}
    </ScrollView>
  )
}
