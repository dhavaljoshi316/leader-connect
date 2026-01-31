import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "expo-router"
import moment from "moment"
import React, { useCallback, useState } from "react"
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import BottomNav from "../bottomnav"
import PullToRefresh from "./../components/pulltorefresh"

import {
  EventsCarouselSkeleton,
  GalleryCarouselSkeleton,
  HeroSkeleton,
  SocialCarouselSkeleton,
} from "@/components/skeleton/homeskeleton"

import {
  demoEvents,
  demoGalleryImages,
  demoLeader,
  demoNotifications,
  demoSocialPosts,
} from "@/data/demoData"

import { layout } from "@/globalCSS/dimensions"
import { colors } from "@/globalCSS/globalcss"

export default function HomeScreen(): JSX.Element {
  const navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false)

  const unreadCount =
    demoNotifications?.filter(n => !n?.read)?.length ?? 0

  const handleRefresh = useCallback(async () => {
    setRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setRefreshing(false)
  }, [])

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.push("/profile/leader")}
          style={styles.avatarWrapper}
        >
          <Image
            source={{ uri: demoLeader?.photoUrl }}
            style={styles.avatar}
          />
        </Pressable>

        <View style={styles.headerText}>
          <Text style={styles.headerSubtitle}>Welcome to</Text>
          <Text style={styles.headerTitle}>LeaderConnect</Text>
        </View>

        <Pressable
          onPress={() => navigation.push("notifications")}
          style={styles.bell}
        >
          <Ionicons
            name="notifications"
            size={20}
            color={colors.background}
          />
          {unreadCount > 0 && (
            <Badge variant="destructive" style={styles.notificationBadge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </Badge>
          )}
        </Pressable>
      </View>

      <PullToRefresh onRefresh={handleRefresh}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* COVER + HERO */}
          <View>
            <Image
              source={{ uri: demoLeader?.coverPhotoUrl }}
              style={styles.cover}
            />

            {refreshing ? (
              <HeroSkeleton />
            ) : (
              demoLeader && (
                <View style={styles.heroWrapper}>
                  <Card>
                    <CardContent>
                      <View style={styles.heroRow}>
                        <Pressable onPress={() => navigation.push('about')}>
                          <Image
                          source={{ uri: demoLeader.photoUrl }}
                          style={styles.heroImage}
                          
                        />
                        </Pressable>

                        <View style={styles.heroText}>
                          <Text style={styles.heroName}>
                            {demoLeader.name}
                          </Text>

                          <Text style={styles.heroDesignation}>
                            {demoLeader.designation}
                          </Text>

                          <Badge variant="secondary" style={styles.partyBadge}>
                            {demoLeader.partyAbbreviation}
                          </Badge>
                        </View>
                      </View>
                    </CardContent>
                  </Card>
                </View>
              )
            )}
          </View>

          {/* GALLERY */}
          <SectionHeader
            title="Gallery"
            onPress={() => navigation.push("gallery")}
          />

          {refreshing ? (
            <GalleryCarouselSkeleton />
          ) : (
            demoGalleryImages?.length > 0 && (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.carousel}>
                  {demoGalleryImages.map(item => (
                    <Card key={item?.id} style={styles.galleryCard}>
                      <Image
                        source={{ uri: item?.imageUrl }}
                        style={styles.galleryImage}
                      />
                      <CardContent>
                        <Text numberOfLines={1} style={styles.cardTitle}>
                          {item?.title}
                        </Text>
                      </CardContent>
                    </Card>
                  ))}
                </View>
              </ScrollView>
            )
          )}

          {/* EVENTS */}
          <SectionHeader
            title="Upcoming Events"
            onPress={() => navigation.push("events")}
          />

          {refreshing ? (
            <EventsCarouselSkeleton />
          ) : (
            demoEvents?.length > 0 && (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.carousel}>
                  {demoEvents.slice(0, 4).map(event => (
                    <Card key={event?.id} style={styles.eventCard}>
                      <Image
                        source={{ uri: event?.posterUrl }}
                        style={styles.eventImage}
                      />
                      <CardContent>
                        <Text numberOfLines={1} style={styles.cardTitle}>
                          {event?.title}
                        </Text>
                        <Text style={styles.cardMeta}>
                          {moment(event?.date).format("MMM D, YYYY")}
                        </Text>
                      </CardContent>
                    </Card>
                  ))}
                </View>
              </ScrollView>
            )
          )}

          {/* SOCIAL */}
          <SectionHeader
            title="Social Wall"
            onPress={() => navigation.push("social")}
          />

          {refreshing ? (
            <SocialCarouselSkeleton />
          ) : (
            demoSocialPosts?.length > 0 && (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.carousel}>
                  {demoSocialPosts.slice(0, 4).map(post => (
                    <Card key={post?.id} style={styles.socialCard}>
                      <Image
                        source={{ uri: post?.imageUrl }}
                        style={styles.socialImage}
                      />
                      <CardContent>
                        <Text numberOfLines={2} style={styles.cardTitle}>
                          {post?.title}
                        </Text>
                      </CardContent>
                    </Card>
                  ))}
                </View>
              </ScrollView>
            )
          )}

          <Text style={styles.refreshHint}>Pull down to refresh</Text>
        </ScrollView>
      </PullToRefresh>

      <BottomNav />
    </View>
  )
}

/* ---------- SECTION HEADER ---------- */

const SectionHeader = ({
  title,
  onPress,
}: {
  title: string
  onPress: () => void
}) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Button variant="ghost" size="icon" onClick={onPress}>
      <Ionicons name="chevron-forward" size={18} color={colors.primary} />
    </Button>
  </View>
)

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: layout.spacing.md,
    backgroundColor: colors.primary,
  },

  avatarWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: "hidden",
  },
  avatar: { width: "100%", height: "100%" },

  headerText: { flex: 1, marginLeft: 12 },
  headerSubtitle: { color: colors.background, opacity: 0.7, fontSize: 12 },
  headerTitle: { color: colors.background, fontWeight: "700", fontSize: 16 },

  bell: { padding: 8 },
  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: { color: "#fff", fontSize: 10, fontWeight: "700" },

  scroll: { paddingBottom: layout.spacing.xl },

  cover: { width: "100%", height: 180 },

  heroWrapper: {
    paddingHorizontal: layout.spacing.md,
    marginTop: -64,
  },
  heroRow: { flexDirection: "row", gap: 12 },
  heroImage: {
    width: 80,
    height: 96,
    borderRadius: layout.radius.lg,
  },
  heroText: { flex: 1, justifyContent: "center" },
  heroName: { fontSize: 18, fontWeight: "700" },
  heroDesignation: { fontSize: 14, color: colors.textSecondary },
  partyBadge: { marginTop: 6 },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: layout.spacing.md,
    marginTop: layout.spacing.lg,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700" },

  carousel: {
    flexDirection: "row",
    gap: layout.spacing.sm,
    paddingHorizontal: layout.spacing.md,
    paddingVertical: layout.spacing.md,
  },

  galleryCard: { width: 176 },
  galleryImage: { width: "100%", height: 120 },

  eventCard: { width: 240 },
  eventImage: { width: "100%", height: 140 },

  socialCard: { width: 208 },
  socialImage: { width: "100%", height: 160 },

  cardTitle: { fontSize: 14, fontWeight: "600" },
  cardMeta: { fontSize: 12, color: colors.textSecondary },

  refreshHint: {
    textAlign: "center",
    fontSize: 12,
    color: colors.textSecondary,
    opacity: 0.6,
    marginVertical: layout.spacing.lg,
  },
})
