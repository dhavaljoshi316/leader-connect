import { StyleSheet, View } from "react-native"
import { layout } from "../../globalCSS/dimensions"
import { Card } from "../ui/card"
import Skeleton from "../ui/skeleton"

function EventCardSkeleton() {
  return (
    <Card>
      <View style={styles.row}>
        <Skeleton width={112} height={112} radius={0} />

        <View style={styles.content}>
          <Skeleton width={64} height={20} radius={999} />
          <Skeleton width="100%" height={16} radius={6} />
          <Skeleton width="75%" height={16} radius={6} />

          <View style={styles.meta}>
            <Skeleton width={96} height={12} radius={6} />
            <Skeleton width={64} height={12} radius={6} />
          </View>
        </View>
      </View>
    </Card>
  )
}

export function EventCardSkeletonList({ count = 3 }) {
  return (
    <View style={styles.list}>
      {Array.from({ length: count }).map((_, index) => (
        <EventCardSkeleton key={index} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  content: {
    flex: 1,
    padding: layout.spacing.sm,
    justifyContent: "center",
    gap: 8,
  },
  meta: {
    marginTop: 8,
    gap: 4,
  },
  list: {
    gap: layout.spacing.md,
  },
})


export default EventCardSkeleton
