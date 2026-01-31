import React from "react"
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "expo-router"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BottomNav from "../bottomnav"

import { demoLeader } from "@/data/demoData"
import { layout } from "@/globalCSS/dimensions"
import { colors } from "@/globalCSS/globalcss"

export default function LeaderProfileScreen(): JSX.Element {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={20} color={colors.background} />
        </Pressable>
        <Text style={styles.headerTitle}>About</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* HERO */}
        <View>
          <Image
            source={{ uri: demoLeader?.photoUrl }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />

          <View style={styles.heroContent}>
            <Badge variant="secondary" style={styles.partyBadge}>
              {demoLeader?.partyAbbreviation}
            </Badge>

            <Text style={styles.heroName}>{demoLeader?.name}</Text>
            <Text style={styles.heroDesignation}>
              {demoLeader?.designation}
            </Text>
          </View>
        </View>

        {/* BIO */}
        <Section title="Biography">
          <Text style={styles.bodyText}>{demoLeader?.bio}</Text>
        </Section>

        {/* ACHIEVEMENTS */}
        <Section
          title="Key Achievements"
          icon="trophy"
        >
          {demoLeader?.achievements?.map((item, index) => (
            <View key={index} style={styles.achievementRow}>
              <View style={styles.achievementIndex}>
                <Text style={styles.achievementIndexText}>
                  {index + 1}
                </Text>
              </View>
              <Text style={styles.achievementText}>{item}</Text>
            </View>
          ))}
        </Section>

        {/* TIMELINE */}
        <Section title="Political Journey" icon="time">
          <View style={styles.timeline}>
            {demoLeader?.timeline?.map((item, index) => (
              <View key={index} style={styles.timelineRow}>
                <View style={styles.timelineDot}>
                  <Text style={styles.timelineYearShort}>
                    {item.year.slice(2)}
                  </Text>
                </View>

                <View style={styles.timelineContent}>
                  <Badge variant="outline" style={styles.timelineYear}>
                    {item.year}
                  </Badge>
                  <Text style={styles.timelineTitle}>{item.title}</Text>
                  <Text style={styles.timelineDesc}>
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </Section>

        {/* VISION */}
        <Section title="Vision" icon="chatbubble-ellipses">
          <Card style={styles.visionCard}>
            <CardContent>
              <Ionicons
                name="quote"
                size={28}
                color="rgba(255,255,255,0.3)"
              />
              <Text style={styles.visionText}>
                {demoLeader?.vision}
              </Text>
            </CardContent>
          </Card>
        </Section>
      </ScrollView>

      <BottomNav />
    </View>
  )
}

/* ---------- SECTION WRAPPER ---------- */

const Section = ({
  title,
  icon,
  children,
}: {
  title: string
  icon?: keyof typeof Ionicons.glyphMap
  children: React.ReactNode
}) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      {icon && (
        <Ionicons name={icon} size={18} color={colors.primary} />
      )}
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>

    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  </View>
)

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
    paddingBottom: layout.spacing.xl,
  },

  heroImage: {
    width: "100%",
    height: 280,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  heroContent: {
    position: "absolute",
    bottom: 24,
    left: 16,
    right: 16,
  },
  heroName: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.background,
  },
  heroDesignation: {
    fontSize: 14,
    color: colors.background,
    opacity: 0.8,
  },
  partyBadge: {
    marginBottom: 8,
  },

  section: {
    paddingHorizontal: layout.spacing.md,
    marginTop: layout.spacing.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: layout.spacing.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  bodyText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  achievementRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  },
  achievementIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  achievementIndexText: {
    color: colors.background,
    fontWeight: "700",
    fontSize: 12,
  },
  achievementText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
  },

  timeline: {
    gap: 16,
  },
  timelineRow: {
    flexDirection: "row",
    gap: 12,
  },
  timelineDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  timelineYearShort: {
    color: colors.background,
    fontWeight: "700",
    fontSize: 12,
  },
  timelineContent: {
    flex: 1,
  },
  timelineYear: {
    marginBottom: 4,
  },
  timelineTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  timelineDesc: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },

  visionCard: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  visionText: {
    marginTop: 8,
    fontSize: 14,
    color: colors.background,
    fontStyle: "italic",
    lineHeight: 20,
  },
})
