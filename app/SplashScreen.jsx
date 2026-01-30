import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "expo-router"
import { useEffect } from "react"
import { Dimensions, Text, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { demoLeader } from "../data/demoData"
import { colors } from "../globalCSS/GlobalCss"

const { height } = Dimensions.get("window")

const splashConfig = {
  timings: {
    scaleStart: 100,
    fadeStart: 2500,
    fadeDuration: 500,
  },
  layout: {
    imageHeight: height * 0.7,
    infoHeight: height * 0.3,
  },
}

const leaderData = {...demoLeader};

export default function SplashScreen({}) {
  const navigation = useNavigation()
  const opacity = useSharedValue(1)
  const scale = useSharedValue(1.1)
  const contentOpacity = useSharedValue(0)
  const contentTranslate = useSharedValue(10)

  useEffect(() => {
    setTimeout(() => {
      scale.value = withTiming(1, { duration: 1000 })
      contentOpacity.value = withTiming(1, { duration: 700 })
      contentTranslate.value = withTiming(0, { duration: 700 })
    }, splashConfig.timings.scaleStart)

    setTimeout(() => {
      opacity.value = withTiming(0, { duration: splashConfig.timings.fadeDuration })
      setTimeout(() => navigation.replace("Home"), splashConfig.timings.fadeDuration)
    }, splashConfig.timings.fadeStart)
  }, [])

  const containerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: opacity.value === 1 ? 1 : 1.05 }],
  }))

  const imageStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  const contentStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
    transform: [{ translateY: contentTranslate.value }],
  }))

  return (
    <Animated.View style={[{ flex: 1 }, containerStyle]}>
      <LinearGradient colors={[colors?.secondary, colors?.secondary]} style={{ flex: 1 }}>
        <View style={{ height: splashConfig.layout.imageHeight }}>
          <Animated.Image
            source={{ uri: leaderData?.photoUrl }}
            resizeMode="cover"
            style={[{ width: "100%", height: "100%" }, imageStyle]}
          />
          <LinearGradient
            colors={["transparent", colors?.secondarySoft]}
            style={{ position: "absolute", inset: 0 }}
          />
        </View>

        <View
          style={{
            height: splashConfig.layout.infoHeight,
            alignItems: "center",
            paddingVertical: 24,
          }}
        >
          <Animated.View style={contentStyle}>
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                backgroundColor: colors?.background,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700", color: colors?.textPrimary }}>
                {leaderData?.partyAbbreviation}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 22,
                fontWeight: "700",
                color: colors?.background,
                textAlign: "center",
              }}
            >
              {leaderData?.name}
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: colors?.background,
                opacity: 0.8,
                marginTop: 4,
              }}
            >
              {leaderData?.designation}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: colors?.background,
                opacity: 0.6,
                marginTop: 2,
              }}
            >
              {leaderData?.party}
            </Text>
          </Animated.View>

          <Animated.View style={[{ flexDirection: "row", marginTop: 24 }, contentStyle]}>
            {[0, 150, 300].map(delay => (
              <Animated.View
                key={delay}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: colors?.background,
                  marginHorizontal: 4,
                  opacity: contentOpacity.value,
                }}
              />
            ))}
          </Animated.View>
        </View>
      </LinearGradient>
    </Animated.View>
  )
}
