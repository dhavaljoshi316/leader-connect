import { forwardRef } from "react"
import { Text, View } from "react-native"
import { layout } from "../../globalCSS/dimensions"
import { colors } from "../../globalCSS/globalcss"

const Card = forwardRef(({ style, ...props }, ref) => (
  <View
    ref={ref}
    style={[
      {
        borderRadius: layout.radius.md,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
      },
      style,
    ]}
    {...props}
  />
))

const CardHeader = forwardRef(({ style, ...props }, ref) => (
  <View
    ref={ref}
    style={[
      {
        padding: layout.spacing.lg,
      },
      style,
    ]}
    {...props}
  />
))

const CardTitle = forwardRef(({ style, ...props }, ref) => (
  <Text
    ref={ref}
    style={[
      {
        fontSize: 20,
        fontWeight: "600",
        color: colors.textPrimary,
      },
      style,
    ]}
    {...props}
  />
))

const CardDescription = forwardRef(({ style, ...props }, ref) => (
  <Text
    ref={ref}
    style={[
      {
        fontSize: 14,
        color: colors.textSecondary,
        marginTop: layout.spacing.xs,
      },
      style,
    ]}
    {...props}
  />
))

const CardContent = forwardRef(({ style, ...props }, ref) => (
  <View
    ref={ref}
    style={[
      {
        paddingHorizontal: layout.spacing.lg,
        paddingVertical: layout.spacing.md,
      },
      style,
    ]}
    {...props}
  />
))

const CardFooter = forwardRef(({ style, ...props }, ref) => (
  <View
    ref={ref}
    style={[
      {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: layout.spacing.lg,
        paddingBottom: layout.spacing.lg,
      },
      style,
    ]}
    {...props}
  />
))

export {
  Card, CardContent, CardDescription, CardFooter, CardHeader,
  CardTitle
}

