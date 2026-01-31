import { useColorScheme } from "@/hooks/use-color-scheme"
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import "react-native-reanimated"
import { SafeAreaProvider } from "react-native-safe-area-context"
import AppSafeArea from "../components/appsafearea"

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <AppSafeArea>
          <Stack
            initialRouteName="splashscreen"
            screenOptions={{
              headerShown: false,
            }}
          />
        </AppSafeArea>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
