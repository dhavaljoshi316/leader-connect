import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "expo-router"
import moment from "moment"
import React from "react"
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native"

import { Card, CardContent } from "@/components/ui/card"
import BottomNav from "../bottomnav"

import { demoNotifications } from "@/data/demoData"
import { layout } from "@/globalCSS/dimensions"
import { colors } from "@/globalCSS/globalcss"

type NotificationType = "general" | "event" | "announcement" | "birthday"

const iconMap: Record<NotificationType, keyof typeof Ionicons.glyphMap> = {
  general: "information-circle",
  event: "calendar",
  announcement: "megaphone",
  birthday: "gift",
}

export default function NotificationsScreen(): JSX.Element {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={20} color={colors.background} />
        </Pressable>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {demoNotifications?.length > 0 ? (
          demoNotifications.map(notification => {
            const type = notification?.type as NotificationType
            const isBirthday = type === "birthday"
            const isUnread = !notification?.read

            return (
              <Card
                key={notification?.id}
                style={[
                  styles.card,
                  isUnread && styles.unreadBorder,
                ]}
              >
                {isBirthday && <View style={styles.birthdayStrip} />}

                <CardContent>
                  <View style={styles.row}>
                    {/* LEFT ICON / IMAGE */}
                    {isBirthday && notification?.imageUrl ? (
                      <View style={styles.birthdayAvatarWrap}>
                        <Image
                          source={{ uri: notification.imageUrl }}
                          style={styles.birthdayAvatar}
                        />
                        <View style={styles.birthdayIcon}>
                          <Ionicons
                            name="gift"
                            size={14}
                            color={colors.textPrimary}
                          />
                        </View>
                      </View>
                    ) : (
                      <View
                        style={[
                          styles.iconBox,
                          styles[`icon_${type}`],
                        ]}
                      >
                        <Ionicons
                          name={iconMap[type]}
                          size={22}
                          color={colors.primary}
                        />
                      </View>
                    )}

                    {/* CONTENT */}
                    <View style={styles.content}>
                      <View style={styles.titleRow}>
                        <Text style={styles.title} numberOfLines={1}>
                          {notification?.title}
                        </Text>
                        <Text style={styles.date}>
                          {moment(notification?.date).format("MMM D")}
                        </Text>
                      </View>

                      <Text style={styles.message}>
                        {notification?.message}
                      </Text>

                      {isUnread && (
                        <View style={styles.newRow}>
                          <View style={styles.newDot} />
                          <Text style={styles.newText}>New</Text>
                        </View>
                      )}
                    </View>
                  </View>

                  {/* BIRTHDAY FOOTER */}
                  {isBirthday && (
                    <View style={styles.birthdayFooter}>
                      <Text style={styles.emoji}>🎉🎂🎊</Text>
                      <Text style={styles.birthdayText}>
                        Wishing a wonderful birthday!
                      </Text>
                    </View>
                  )}
                </CardContent>
              </Card>
            )
          })
        ) : (
          <View style={styles.empty}>
            <View style={styles.emptyIcon}>
              <Ionicons
                name="notifications"
                size={36}
                color={colors.textSecondary}
              />
            </View>
            <Text style={styles.emptyTitle}>No notifications yet</Text>
            <Text style={styles.emptySub}>
              We'll notify you when something arrives
            </Text>
          </View>
        )}
      </ScrollView>

      <BottomNav />
    </View>
  )
}

/* ---------- STYLES ---------- */

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
    paddingBottom: layout.spacing.xl,
    gap: layout.spacing.sm,
  },

  card: {
    borderWidth: 0,
  },
  unreadBorder: {
    borderWidth: 2,
    borderColor: colors.primary,
  },

  birthdayStrip: {
    height: 6,
    backgroundColor: colors.secondary,
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: layout.radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },

  icon_general: {
    backgroundColor: colors.border,
  },
  icon_event: {
    backgroundColor: colors.primarySoft,
  },
  icon_announcement: {
    backgroundColor: colors.secondarySoft,
  },
  icon_birthday: {
    backgroundColor: colors.warningSoft,
  },

  birthdayAvatarWrap: {
    position: "relative",
  },
  birthdayAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  birthdayIcon: {
    position: "absolute",
    bottom: -4,
    right: -4,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.warning,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    flex: 1,
  },
  date: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  message: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
    lineHeight: 18,
  },

  newRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
  },
  newDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  newText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "600",
  },

  birthdayFooter: {
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: layout.radius.lg,
    backgroundColor: colors.warningSoft,
    alignItems: "center",
  },
  emoji: {
    fontSize: 24,
  },
  birthdayText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },

  empty: {
    marginTop: 80,
    alignItems: "center",
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  emptySub: {
    fontSize: 12,
    color: colors.textSecondary,
    opacity: 0.7,
    marginTop: 4,
  },
})
