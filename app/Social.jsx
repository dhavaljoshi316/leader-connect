import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import moment from "moment"
import { useCallback, useState } from "react"
import { Image, Pressable, ScrollView, Text, View } from "react-native"
import BottomNav from "../bottomnav"
import PullToRefresh from "../components/pulltorefresh"
import { SocialPostSkeletonList } from "../components/skeleton/socialpostskeleton"
import { Card, CardContent } from "../components/ui/card"
import { demoLeader, demoSocialPosts } from "../data/demoData"
import { layout } from "../globalCSS/dimensions"
import { colors } from "../globalCSS/globalcss"

const platformConfig = {
  facebook: { icon: "logo-facebook", color: colors.platforms.facebook },
  instagram: { icon: "logo-instagram", color: colors.platforms.instagram },
  youtube: { icon: "logo-youtube", color: colors.platforms.youtube },
  twitter: { icon: "logo-twitter", color: colors.platforms.twitter },
}

export default function Social() {
  const navigation = useNavigation()
  const [posts, setPosts] = useState(demoSocialPosts)
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = useCallback(async () => {
    setRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setPosts([...demoSocialPosts])
    setRefreshing(false)
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: layout.spacing.md,
          paddingVertical: layout.spacing.sm,
          backgroundColor: colors.primary,
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            padding: layout.spacing.sm,
            borderRadius: layout.radius.full,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
        >
          <Ionicons name="arrow-back" size={20} color={colors.background} />
        </Pressable>

        <Text
          style={{
            color: colors.background,
            fontSize: 18,
            fontWeight: "700",
            marginLeft: layout.spacing.sm,
          }}
        >
          Social Wall
        </Text>
      </View>

      <PullToRefresh onRefresh={handleRefresh}>
        {refreshing ? (
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: layout.spacing.md,
              paddingVertical: layout.spacing.md,
              gap: layout.spacing.md,
            }}
          >
            <SocialPostSkeletonList count={3} />
          </ScrollView>
        ) : (
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: layout.spacing.md,
              paddingVertical: layout.spacing.md,
              gap: layout.spacing.md,
            }}
          >
            {posts.map(post => {
              const platform = platformConfig[post.platform]

              return (
                <Card key={post.id}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: layout.spacing.md,
                      backgroundColor: platform.color,
                    }}
                  >
                    <View
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: layout.radius.full,
                        backgroundColor: "rgba(255,255,255,0.2)",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons name={platform.icon} size={16} color={colors.background} />
                    </View>

                    <View style={{ flex: 1, marginLeft: layout.spacing.sm }}>
                      <Text style={{ color: colors.background, fontWeight: "700", fontSize: 14 }}>
                        {post.platform}
                      </Text>
                      <Text style={{ color: colors.background, opacity: 0.8, fontSize: 12 }}>
                        {moment(post.date).format("MMM D, YYYY")}
                      </Text>
                    </View>

                    <Image
                      source={{ uri: demoLeader.photoUrl }}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: layout.radius.full,
                        borderWidth: 2,
                        borderColor: "rgba(255,255,255,0.3)",
                      }}
                    />
                  </View>

                  {post.imageUrl && (
                    <Image
                      source={{ uri: post.imageUrl }}
                      style={{
                        width: "100%",
                        height: 200,
                      }}
                      resizeMode="cover"
                    />
                  )}

                  <CardContent>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: colors.textPrimary,
                        marginBottom: layout.spacing.xs,
                      }}
                    >
                      {post.title}
                    </Text>

                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.textSecondary,
                        lineHeight: 20,
                      }}
                    >
                      {post.description}
                    </Text>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: layout.spacing.md,
                        paddingTop: layout.spacing.md,
                        borderTopWidth: 1,
                        borderColor: colors.border,
                      }}
                    >
                      {["heart", "chatbubble", "share-social"].map(icon => (
                        <View
                          key={icon}
                          style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                        >
                          <Ionicons name={icon} size={18} color={colors.textSecondary} />
                          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                            {icon === "heart"
                              ? "Like"
                              : icon === "chatbubble"
                              ? "Comment"
                              : "Share"}
                          </Text>
                        </View>
                      ))}
                    </View>

                    <Pressable
                      onPress={() => {}}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 6,
                        marginTop: layout.spacing.md,
                      }}
                    >
                      <Text style={{ color: colors.primary, fontWeight: "600", fontSize: 14 }}>
                        View on {post.platform}
                      </Text>
                      <Ionicons name="open-outline" size={16} color={colors.primary} />
                    </Pressable>
                  </CardContent>
                </Card>
              )
            })}

            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: colors.textSecondary,
                opacity: 0.6,
                marginVertical: layout.spacing.lg,
              }}
            >
              Pull down to refresh
            </Text>
          </ScrollView>
        )}
      </PullToRefresh>

      <BottomNav />
    </View>
  )
}
