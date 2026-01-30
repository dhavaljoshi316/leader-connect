import { View } from "react-native"
import { layout } from "../../globalCSS/Dimensions"
import { Card, CardContent } from "../ui/Card"
import Skeleton from "../ui/Skeleton"

function SocialPostSkeleton() {
  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: layout.spacing.md,
          paddingVertical: layout.spacing.sm,
        }}
      >
        <Skeleton width={32} height={32} radius={16} />

        <View style={{ flex: 1, marginLeft: layout.spacing.sm }}>
          <Skeleton width={80} height={16} radius={6} />
          <View style={{ marginTop: 4 }}>
            <Skeleton width={64} height={12} radius={6} />
          </View>
        </View>

        <Skeleton width={32} height={32} radius={16} />
      </View>

      <Skeleton width="100%" height={200} radius={0} />

      <CardContent>
        <Skeleton width="75%" height={20} radius={6} />
        <View style={{ marginTop: 8 }}>
          <Skeleton width="100%" height={16} radius={6} />
        </View>
        <View style={{ marginTop: 6 }}>
          <Skeleton width="85%" height={16} radius={6} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: layout.spacing.md,
            paddingTop: layout.spacing.md,
          }}
        >
          <Skeleton width={48} height={16} radius={6} />
          <Skeleton width={64} height={16} radius={6} />
          <Skeleton width={48} height={16} radius={6} />
        </View>

        <View style={{ marginTop: layout.spacing.sm }}>
          <Skeleton width={128} height={16} radius={6} />
        </View>
      </CardContent>
    </Card>
  )
}

export function SocialPostSkeletonList({ count = 3 }) {
  return (
    <View style={{ gap: layout.spacing.md }}>
      {Array.from({ length: count }).map((_, index) => (
        <SocialPostSkeleton key={index} />
      ))}
    </View>
  )
}

export default SocialPostSkeleton
