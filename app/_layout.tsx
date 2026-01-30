import { useColorScheme } from "@/hooks/use-color-scheme"
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import AppSafeArea from "../components/AppSafeArea"
import "react-native-reanimated"

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <AppSafeArea>
          <Stack
            initialRouteName="SplashScreen"
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
