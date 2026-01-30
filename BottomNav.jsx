import { Ionicons } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import * as Haptics from "expo-haptics"
import { Pressable, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "./globalCSS/GlobalCss"

const navConfig = [
  { key: "Home", label: "Home", icon: "home-outline", activeIcon: "home" },
  { key: "Gallery", label: "Gallery", icon: "image-outline", activeIcon: "image" },
  { key: "Events", label: "Events", icon: "calendar-outline", activeIcon: "calendar" },
  { key: "Social", label: "Social", icon: "people-outline", activeIcon: "people" },
  { key: "Connect", label: "Connect", icon: "call-outline", activeIcon: "call" },
]

export default function BottomNav() {
  const navigation = useNavigation()
  const route = useRoute()
  const insets = useSafeAreaInsets()

  const handlePress = screen => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    navigation.navigate(screen)
  }

  return (
    <View
      style={{
        paddingBottom: insets.bottom,
        backgroundColor: colors.card,
        borderTopWidth: 1,
        borderColor: colors.border,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 8,
        }}
      >
        {navConfig.map(item => {
          const active = route.name === item.key
          const iconName = active ? item.activeIcon : item.icon

          return (
            <Pressable
              key={item.key}
              onPress={() => handlePress(item.key)}
              style={{
                alignItems: "center",
                paddingVertical: 6,
                paddingHorizontal: 14,
                borderRadius: 14,
                backgroundColor: active ? colors.primarySoft : "transparent",
              }}
            >
              <View
                style={{
                  transform: [{ scale: active ? 1.1 : 1 }],
                }}
              >
                <Ionicons
                  name={iconName}
                  size={20}
                  color={active ? colors.primary : colors.textSecondary}
                />
                {active && (
                  <View
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: colors.primary,
                      alignSelf: "center",
                      marginTop: 2,
                    }}
                  />
                )}
              </View>

              <Text
                style={{
                  fontSize: 10,
                  marginTop: 6,
                  fontWeight: active ? "600" : "500",
                  color: active ? colors.primary : colors.textSecondary,
                }}
              >
                {item.label}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}
