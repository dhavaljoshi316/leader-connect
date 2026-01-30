import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import moment from "moment"
import { useCallback, useState } from "react"
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native"

import BottomNav from "../BottomNav"
import PullToRefresh from "../components/PullToRefresh"
import { EventCardSkeletonList } from "../components/skeleton/EventSkeleton"
import { Card, CardContent } from "../components/ui/Card"
import { demoEvents } from "../data/demoData"
import { layout } from "../globalCSS/Dimensions"
import { colors } from "../globalCSS/GlobalCss"

export default function EventsScreen() {
  const navigation = useNavigation()
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  const events = demoEvents ?? []

  const filterEvents = type => {
    if (!events?.length) return []

    if (type === "week") {
      return events.filter(e =>
        moment(e?.date).isBetween(
          moment(),
          moment().add(7, "days"),
          undefined,
          "[]"
        )
      )
    }

    if (type === "month") {
      return events.filter(e =>
        moment(e?.date).isBetween(
          moment(),
          moment().add(1, "month"),
          undefined,
          "[]"
        )
      )
    }

    return events
  }

  const handleRefresh = useCallback(async () => {
    setRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setRefreshing(false)
  }, [])

  const EventCard = ({ event }) => {
    if (!event) return null

    const expanded = selectedEvent === event?.id

    return (
      <Card style={[styles.card, expanded && styles.activeCard]}>
        <Pressable onPress={() => setSelectedEvent(expanded ? null : event?.id)}>
          <View style={styles.row}>
            {event?.posterUrl ? (
              <Image
                source={{ uri: event.posterUrl }}
                style={styles.poster}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.poster} />
            )}

            <CardContent style={styles.content}>
              <Text style={styles.title} numberOfLines={2}>
                {event?.title}
              </Text>

              <View style={styles.meta}>
                <View style={styles.metaRow}>
                  <Ionicons name="calendar" size={14} color={colors.primary} />
                  <Text style={styles.metaText}>
                    {event?.date
                      ? moment(event.date).format("MMM D, YYYY")
                      : ""}
                  </Text>
                </View>

                <View style={styles.metaRow}>
                  <Ionicons name="time" size={14} color={colors.primary} />
                  <Text style={styles.metaText}>{event?.time}</Text>
                </View>
              </View>
            </CardContent>
          </View>
        </Pressable>

        {expanded && (
          <View style={styles.expand}>
            <View style={styles.locationRow}>
              <Ionicons name="location" size={16} color={colors.primary} />
              <Text style={styles.locationText}>{event?.location}</Text>
            </View>

            <Text style={styles.description}>{event?.description}</Text>
          </View>
        )}
      </Card>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={20} color={colors.background} />
        </Pressable>
        <Text style={styles.headerTitle}>Events</Text>
      </View>

      <PullToRefresh onRefresh={handleRefresh}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {refreshing ? (
            <EventCardSkeletonList count={4} />
          ) : filterEvents("all")?.length > 0 ? (
            filterEvents("all").map(event => (
              <EventCard key={event?.id} event={event} />
            ))
          ) : (
            <Text style={styles.empty}>No events available</Text>
          )}

          <Text style={styles.refreshHint}>Pull down to refresh</Text>
        </ScrollView>
      </PullToRefresh>

      <BottomNav />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: layout.spacing.md,
    paddingVertical: layout.spacing.sm,
    backgroundColor: colors.primary,
  },
  backBtn: {
    padding: layout.spacing.sm,
    borderRadius: layout.radius.full,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  headerTitle: {
    color: colors.background,
    fontSize: 18,
    fontWeight: "700",
    marginLeft: layout.spacing.sm,
  },
  scroll: {
    padding: layout.spacing.md,
    gap: layout.spacing.md,
    paddingBottom: layout.spacing.xl,
  },
  card: {
    borderWidth: 0,
  },
  activeCard: {
    borderColor: colors.primary,
    borderWidth: 2,
    overflow: 'hidden'
  },
  row: {
    flexDirection: "row",
  },
  poster: {
    width: 112,
    height: 112,
    backgroundColor: colors.border,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  meta: {
    marginTop: 6,
    gap: 4,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  expand: {
    padding: layout.spacing.md,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  locationText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  description: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  empty: {
    textAlign: "center",
    color: colors.textSecondary,
    marginTop: layout.spacing.xl,
  },
  refreshHint: {
    textAlign: "center",
    fontSize: 12,
    color: colors.textSecondary,
    opacity: 0.6,
    marginVertical: layout.spacing.lg,
  },
})
