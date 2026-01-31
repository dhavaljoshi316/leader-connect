import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import BottomNav from "../bottomnav"
import { Card, CardContent } from "../components/ui/card"
import { demoLeader } from "../data/demoData"
import { layout } from "../globalCSS/dimensions"
import { colors } from "../globalCSS/globalcss"
import { platformConfig } from "../globalCSS/platformconfig"

export default function Connect() {
  const navigation = useNavigation()
  const contact = demoLeader?.contact
  const socialLinks = demoLeader?.socialLinks

  const actions = [
    contact?.phone && {
      key: "call",
      label: "Call",
      icon: "call",
      onPress: () => Linking.openURL(`tel:${contact.phone}`),
      bg: colors?.primary,
    },
    contact?.whatsapp && {
      key: "whatsapp",
      label: "WhatsApp",
      icon: "chatbubble",
      onPress: () =>
        Linking.openURL(
          `https://wa.me/${contact.whatsapp.replace("+", "")}?text=Namaste!%20I%20would%20like%20to%20connect%20with%20you.`
        ),
      bg: "#22C55E",
    },
    contact?.email && {
      key: "email",
      label: "Email",
      icon: "mail",
      onPress: () => Linking.openURL(`mailto:${contact.email}`),
      bg: colors?.secondarySoft,
    },
  ].filter(Boolean)

  const socialButtons =
    socialLinks &&
    Object.keys(socialLinks)
      .map(key => ({
        key,
        icon: platformConfig?.[key]?.icon,
        url: socialLinks?.[key],
        color: colors?.platforms?.[key],
        label: key.charAt(0).toUpperCase() + key.slice(1),
      }))
      .filter(item => item?.url && item?.icon)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color={colors?.background} />
        </Pressable>

        <Text style={styles.headerTitle}>Connect</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {actions?.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Get in Touch</Text>

            <View style={styles.actionsRow}>
              {actions.map(item => (
                <Pressable key={item.key} onPress={item.onPress} style={[styles.actionCard, { backgroundColor: item.bg }]}>
                  <View style={styles.actionIcon}>
                    <Ionicons name={item.icon} size={22} color={colors?.background} />
                  </View>
                  <Text style={styles.actionLabel}>{item.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {(contact?.officeAddress || contact?.officeHours) && (
          <View>
            <Text style={styles.sectionTitle}>Office Information</Text>

            <Card>
              <CardContent>
                {contact?.officeAddress && contact?.mapUrl && (
                  <Pressable onPress={() => Linking.openURL(contact.mapUrl)} style={styles.officeRow}>
                    <View style={styles.officeIcon}>
                      <Ionicons name="location" size={22} color={colors?.primary} />
                    </View>

                    <View style={{ flex: 1 }}>
                      <Text style={styles.officeTitle}>Office Address</Text>
                      <Text style={styles.officeText}>{contact?.officeAddress}</Text>
                      <Text style={styles.officeLink}>View on Map</Text>
                    </View>
                  </Pressable>
                )}

                {contact?.officeHours && (
                  <View style={styles.officeHours}>
                    <View style={styles.officeIcon}>
                      <Ionicons name="time" size={22} color={colors?.primary} />
                    </View>

                    <View>
                      <Text style={styles.officeTitle}>Office Hours</Text>
                      <Text style={styles.officeText}>{contact?.officeHours}</Text>
                    </View>
                  </View>
                )}
              </CardContent>
            </Card>
          </View>
        )}

        {socialButtons?.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Follow on Social Media</Text>

            <View style={styles.socialGrid}>
              {socialButtons.map(item => (
                <Pressable
                  key={item.key}
                  onPress={() => Linking.openURL(item.url)}
                  style={[styles.socialButton, { backgroundColor: item.color }]}
                >
                  <View style={styles.socialIcon}>
                    <Ionicons name={item.icon} size={20} color={colors?.background} />
                  </View>

                  <Text style={styles.socialLabel}>{item.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      <BottomNav />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: layout?.spacing?.md,
    paddingVertical: layout?.spacing?.sm,
    backgroundColor: colors?.primary,
  },
  backButton: {
    padding: layout?.spacing?.sm,
    borderRadius: layout?.radius?.full,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  headerTitle: {
    color: colors?.background,
    fontSize: 18,
    fontWeight: "700",
    marginLeft: layout?.spacing?.sm,
  },
  scroll: {
    paddingHorizontal: layout?.spacing?.md,
    paddingVertical: layout?.spacing?.lg,
    gap: layout?.spacing?.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: layout?.spacing?.md,
  },
  actionsRow: {
    flexDirection: "row",
    gap: layout?.spacing?.sm,
  },
  actionCard: {
    flex: 1,
    alignItems: "center",
    paddingVertical: layout?.spacing?.lg,
    borderRadius: layout?.radius?.lg,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: layout?.radius?.md,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: layout?.spacing?.sm,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: colors?.background,
  },
  officeRow: {
    flexDirection: "row",
    gap: layout?.spacing?.md,
    alignItems: "center",
  },
  officeIcon: {
    width: 48,
    height: 48,
    borderRadius: layout?.radius?.md,
    backgroundColor: colors?.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  officeTitle: {
    fontWeight: "700",
  },
  officeText: {
    color: colors?.textSecondary,
    marginTop: 4,
  },
  officeLink: {
    color: colors?.primary,
    marginTop: 6,
    fontWeight: "600",
  },
  officeHours: {
    flexDirection: "row",
    gap: layout?.spacing?.md,
    marginTop: layout?.spacing?.lg,
    paddingTop: layout?.spacing?.lg,
    borderTopWidth: 1,
    borderColor: colors?.border,
  },
  socialGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: layout?.spacing?.sm,
  },
  socialButton: {
    flexBasis: "48%",
    padding: layout?.spacing?.md,
    borderRadius: layout?.radius?.lg,
    flexDirection: "row",
    alignItems: "center",
    gap: layout?.spacing?.sm,
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: layout?.radius?.full,
    backgroundColor: colors?.overlayLight,
    alignItems: "center",
    justifyContent: "center",
  },
  socialLabel: {
    color: colors?.background,
    fontWeight: "700",
    fontSize: 13,
  },
})
