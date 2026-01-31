import React from "react"
import {
    ScrollView,
    ScrollViewProps,
    StyleSheet,
    ViewStyle,
} from "react-native"

interface ScrollAreaProps extends ScrollViewProps {
  horizontal?: boolean
  contentContainerStyle?: ViewStyle
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 0,
  },
})


export const ScrollArea = React.forwardRef<ScrollView, ScrollAreaProps>(
  (
    {
      horizontal = false,
      showsVerticalScrollIndicator = true,
      showsHorizontalScrollIndicator = true,
      style,
      contentContainerStyle,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <ScrollView
        ref={ref}
        horizontal={horizontal}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        style={[styles.root, style]}
        contentContainerStyle={contentContainerStyle}
        {...props}
      >
        {children}
      </ScrollView>
    )
  }
)

ScrollArea.displayName = "ScrollArea"
