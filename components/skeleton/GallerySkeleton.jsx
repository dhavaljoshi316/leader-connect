import { View } from "react-native"
import { layout } from "../../globalCSS/dimensions"
import { Card, CardContent } from "../ui/card"
import Skeleton from "../ui/skeleton"

export function PhotoCarouselSkeleton() {
  return (
    <Card>
      <Skeleton width="100%" height={240} radius={0} />
      <CardContent>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 1 }}>
            <Skeleton width="75%" height={20} radius={6} />
            <View style={{ marginTop: layout.spacing.sm }}>
              <Skeleton width="100%" height={16} radius={6} />
            </View>
          </View>
          <Skeleton width={40} height={40} radius={8} />
        </View>
      </CardContent>
    </Card>
  )
}

export function VideoCardSkeleton() {
  return (
    <Card>
      <Skeleton width="100%" height={200} radius={0} />
      <CardContent>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Skeleton width="75%" height={20} radius={6} />
          <Skeleton width={40} height={40} radius={8} />
        </View>
      </CardContent>
    </Card>
  )
}

export default function GallerySkeletonList() {
  return (
    <View style={{ gap: layout.spacing.xl }}>
      <View style={{ paddingHorizontal: layout.spacing.md }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: layout.spacing.sm,
            marginBottom: layout.spacing.md,
          }}
        >
          <Skeleton width={20} height={20} radius={4} />
          <Skeleton width={120} height={20} radius={6} />
        </View>
        <PhotoCarouselSkeleton />
      </View>

      <View style={{ paddingHorizontal: layout.spacing.md }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: layout.spacing.sm,
            marginBottom: layout.spacing.md,
          }}
        >
          <Skeleton width={20} height={20} radius={4} />
          <Skeleton width={80} height={20} radius={6} />
        </View>

        <View style={{ gap: layout.spacing.md }}>
          {[0, 1].map(i => (
            <VideoCardSkeleton key={i} />
          ))}
        </View>
      </View>
    </View>
  )
}
