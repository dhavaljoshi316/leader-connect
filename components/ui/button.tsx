import React from "react"
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native"
import * as Haptics from "expo-haptics"
import { colors } from "../../globalCSS/globalcss"
import { layout } from "../../globalCSS/dimensions"

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"

type ButtonSize = "default" | "sm" | "lg" | "icon"

type HapticType =
  | "light"
  | "medium"
  | "heavy"
  | "success"
  | "warning"
  | "error"

interface ButtonProps {
  title?: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  haptic?: boolean
  hapticType?: HapticType
  onPress?: (event: GestureResponderEvent) => void
  style?: ViewStyle
  textStyle?: TextStyle
  children?: React.ReactNode
}

const variantStyles: Record<
  ButtonVariant,
  { container: ViewStyle; text: TextStyle }
> = {
  default: {
    container: { backgroundColor: colors.primary },
    text: { color: colors.background },
  },
  destructive: {
    container: { backgroundColor: colors.destructive },
    text: { color: colors.background },
  },
  outline: {
    container: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: colors.border,
    },
    text: { color: colors.textPrimary },
  },
  secondary: {
    container: { backgroundColor: colors.secondary },
    text: { color: colors.background },
  },
  ghost: {
    container: { backgroundColor: "transparent" },
    text: { color: colors.textPrimary },
  },
  link: {
    container: { backgroundColor: "transparent" },
    text: {
      color: colors.primary,
      textDecorationLine: "underline",
    },
  },
}

const sizeStyles: Record<ButtonSize, ViewStyle> = {
  default: {
    height: 40,
    paddingHorizontal: 16,
  },
  sm: {
    height: 36,
    paddingHorizontal: 12,
  },
  lg: {
    height: 44,
    paddingHorizontal: 24,
  },
  icon: {
    width: 40,
    height: 40,
    paddingHorizontal: 0,
  },
}

const triggerHaptic = async (type: HapticType) => {
  switch (type) {
    case "light":
      return Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    case "medium":
      return Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    case "heavy":
      return Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    case "success":
      return Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    case "warning":
      return Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
    case "error":
      return Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
  }
}

export const Button: React.FC<ButtonProps> = ({
  title,
  children,
  variant = "default",
  size = "default",
  disabled = false,
  haptic = true,
  hapticType = "light",
  onPress,
  style,
  textStyle,
}) => {
  const variantStyle = variantStyles[variant]

  const handlePress = async (e: GestureResponderEvent) => {
    if (haptic && !disabled) {
      await triggerHaptic(hapticType)
    }
    onPress?.(e)
  }

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        sizeStyles[size],
        variantStyle.container,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.text, variantStyle.text, textStyle]}>
          {title}
        </Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  base: {
    borderRadius: layout.radius.md,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.9,
  },
  disabled: {
    opacity: 0.5,
  },
})
