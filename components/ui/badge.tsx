import React from "react"
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"

import { layout } from "../../globalCSS/dimensions"
import { colors } from "../../globalCSS/globalcss"

export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"

interface BadgeProps {
  children?: React.ReactNode
  variant?: BadgeVariant
  style?: ViewStyle
  textStyle?: TextStyle
}

const variantStyles: Record<
  BadgeVariant,
  { container: ViewStyle; text: TextStyle }
> = {
  default: {
    container: {
      backgroundColor: colors.primary,
      borderColor: "transparent",
    },
    text: {
      color: colors.background,
    },
  },
  secondary: {
    container: {
      backgroundColor: colors.secondarySoft,
      borderColor: "transparent",
    },
    text: {
      color: colors.background,
    },
  },
  destructive: {
    container: {
      backgroundColor: colors.destructive,
      borderColor: "transparent",
    },
    text: {
      color: colors.background,
    },
  },
  outline: {
    container: {
      backgroundColor: "transparent",
      borderColor: colors.border,
    },
    text: {
      color: colors.textPrimary,
    },
  },
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  style,
  textStyle,
}) => {
  if (!children) return null

  const variantStyle = variantStyles[variant]

  return (
    <View style={[styles.container, variantStyle.container, style]}>
      <Text style={[styles.text, variantStyle.text, textStyle]}>
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: layout.radius.full,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
})
