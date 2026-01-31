import { StyleSheet, View } from "react-native"
import { layout } from "../../globalCSS/dimensions"
import { colors } from "../../globalCSS/globalcss"
import { Card, CardContent } from "../ui/card"
import Skeleton from "../ui/skeleton"

export const HeroSkeleton: React.FC = () => {
  return (
    <View style={styles.heroWrapper}>
      <Card style={styles.card}>
        <CardContent>
          <View style={styles.heroRow}>
            <Skeleton style={styles.heroImage} />
            <View style={styles.heroText}>
              <Skeleton style={styles.lineLg} />
              <Skeleton style={styles.lineMd} />
              <Skeleton style={styles.badge} />
            </View>
          </View>
        </CardContent>
      </Card>
    </View>
  )
}

export const GalleryCarouselSkeleton: React.FC = () => {
  return (
    <View style={styles.carousel}>
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} style={styles.galleryCard}>
          <Skeleton style={styles.galleryImage} />
          <CardContent>
            <Skeleton style={styles.lineMd} />
          </CardContent>
        </Card>
      ))}
    </View>
  )
}

export const EventsCarouselSkeleton: React.FC = () => {
  return (
    <View style={styles.carousel}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i} style={styles.eventCard}>
          <Skeleton style={styles.eventImage} />
        </Card>
      ))}
    </View>
  )
}

export const SocialCarouselSkeleton: React.FC = () => {
  return (
    <View style={styles.carousel}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i} style={styles.socialCard}>
          <Skeleton style={styles.socialHeader} />
          <Skeleton style={styles.socialImage} />
          <CardContent style={styles.socialContent}>
            <Skeleton style={styles.lineMd} />
            <Skeleton style={styles.lineSm} />
            <Skeleton style={styles.lineXs} />
          </CardContent>
        </Card>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  heroWrapper: {
    paddingHorizontal: layout.spacing.md,
    marginTop: -64,
    zIndex: 10,
  },
  card: {
    borderWidth: 0,
    backgroundColor: colors.card,
  },
  heroRow: {
    flexDirection: "row",
    gap: layout.spacing.md,
  },
  heroImage: {
    width: 80,
    height: 96,
    borderRadius: layout.radius.lg,
  },
  heroText: {
    flex: 1,
    justifyContent: "center",
    gap: 8,
  },
  badge: {
    width: 64,
    height: 24,
    borderRadius: layout.radius.full,
  },
  carousel: {
    flexDirection: "row",
    gap: layout.spacing.sm,
    paddingHorizontal: layout.spacing.md,
    paddingBottom: layout.spacing.md,
  },
  galleryCard: {
    width: 176,
    borderWidth: 0,
  },
  galleryImage: {
    width: "100%",
    height: 132,
  },
  eventCard: {
    width: 240,
    borderWidth: 0,
  },
  eventImage: {
    width: "100%",
    height: 150,
  },
  socialCard: {
    width: 208,
    borderWidth: 0,
  },
  socialHeader: {
    height: 32,
    width: "100%",
  },
  socialImage: {
    width: "100%",
    height: 180,
  },
  socialContent: {
    gap: 8,
  },
  lineLg: {
    height: 20,
    width: "75%",
  },
  lineMd: {
    height: 16,
    width: "60%",
  },
  lineSm: {
    height: 14,
    width: "70%",
  },
  lineXs: {
    height: 12,
    width: 80,
  },
});
