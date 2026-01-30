import { useEffect } from "react"
import { Pressable, Text, View } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { layout } from "./../globalCSS/Dimensions"
import { colors } from "./../globalCSS/GlobalCss"

export default function NotFound() {
  const navigation = useNavigation()
  const route = useRoute()

  const screenText = {
    code: "404",
    title: "Oops! Page not found",
    action: "Return to Home",
  }

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", route.name)
  }, [route.name])

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        padding: layout.spacing.lg,
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          color: colors.textPrimary,
          marginBottom: layout.spacing.md,
        }}
      >
        {screenText.code}
      </Text>

      <Text
        style={{
          fontSize: 18,
          color: colors.textSecondary,
          marginBottom: layout.spacing.lg,
          textAlign: "center",
        }}
      >
        {screenText.title}
      </Text>

      <Pressable
        onPress={() => navigation.replace("Home")}
        style={{
          paddingVertical: layout.spacing.sm,
          paddingHorizontal: layout.spacing.lg,
          borderRadius: layout.radius.md,
          backgroundColor: colors.primarySoft,
        }}
      >
        <Text
          style={{
            color: colors.primary,
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          {screenText.action}
        </Text>
      </Pressable>
    </View>
  )
}
