import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import * as Sharing from "expo-sharing"
import { useCallback, useState } from "react"
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import BottomNav from "../BottomNav"
import PullToRefresh from "../components/PullToRefresh"
import GallerySkeletonList from "../components/skeleton/GallerySkeleton"
import { Card, CardContent } from "../components/ui/Card"
import { demoGalleryImages, demoGalleryVideos } from "../data/demoData"
import { layout } from "../globalCSS/Dimensions"
import { colors } from "../globalCSS/GlobalCss"

export default function GalleryScreen() {
    const navigation = useNavigation()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [refreshing, setRefreshing] = useState(false)

    const currentImage = demoGalleryImages?.[currentImageIndex]

    const handleShare = async (title, url) => {
        if (url) {
            await Sharing.shareAsync(url)
        }
    }

    const nextImage = () => {
        if (!demoGalleryImages?.length) return
        setCurrentImageIndex(prev =>
            prev === demoGalleryImages.length - 1 ? 0 : prev + 1
        )
    }

    const prevImage = () => {
        if (!demoGalleryImages?.length) return
        setCurrentImageIndex(prev =>
            prev === 0 ? demoGalleryImages.length - 1 : prev - 1
        )
    }

    const handleRefresh = useCallback(async () => {
        setRefreshing(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setRefreshing(false)
    }, [])

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={20} color={colors?.background} />
                </Pressable>

                <Text style={styles.headerTitle}>Gallery</Text>
            </View>

            <PullToRefresh onRefresh={handleRefresh}>
                {refreshing ? (
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <GallerySkeletonList />
                    </ScrollView>
                ) : (
                    <ScrollView contentContainerStyle={styles.scroll}>
                        {/* PHOTO GALLERY */}
                        {demoGalleryImages?.length > 0 && currentImage && (
                            <View style={styles.section}>
                                <View style={styles.sectionHeader}>
                                    <Ionicons name="sparkles" size={20} color={colors?.primary} />
                                    <Text style={styles.sectionTitle}>Photo Gallery</Text>
                                </View>

                                <Card>
                                    <View style={styles.imageWrapper}>
                                        <Image
                                            source={{ uri: currentImage?.imageUrl }}
                                            style={styles.mainImage}
                                            resizeMode="cover"
                                        />

                                        <Pressable onPress={prevImage} style={styles.navButtonLeft}>
                                            <Ionicons name="chevron-back" size={20} color={colors?.textPrimary} />
                                        </Pressable>

                                        <Pressable onPress={nextImage} style={styles.navButtonRight}>
                                            <Ionicons name="chevron-forward" size={20} color={colors?.textPrimary} />
                                        </Pressable>

                                        <View style={styles.dotsContainer}>
                                            {demoGalleryImages?.map((_, index) => (
                                                <Pressable
                                                    key={index}
                                                    onPress={() => setCurrentImageIndex(index)}
                                                    style={[
                                                        styles.dot,
                                                        index === currentImageIndex && styles.activeDot,
                                                    ]}
                                                />
                                            ))}
                                        </View>
                                    </View>

                                    <CardContent>
                                        <View style={styles.cardRow}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.cardTitle}>{currentImage?.title}</Text>
                                                <Text style={styles.cardDescription}>{currentImage?.description}</Text>
                                            </View>

                                            <Pressable onPress={() => handleShare(currentImage?.title)}>
                                                <Ionicons name="share-social" size={20} color={colors?.primary} />
                                            </Pressable>
                                        </View>
                                    </CardContent>
                                </Card>
                            </View>
                        )}

                        {/* VIDEOS */} 
                        {demoGalleryVideos?.length > 0 && (
                            <View style={styles.section}>
                                <View style={styles.sectionHeader}>
                                    <Ionicons name="play" size={20} color={colors?.primary} />
                                    <Text style={styles.sectionTitle}>Videos</Text>
                                </View>

                                {demoGalleryVideos?.map(video => (
                                    <Card key={video?.id} style={styles.videoCard}>
                                        {/* <Pressable onPress={() => handleShare(video?.title, video?.videoUrl)}> */}
                                        <Pressable onPress={() => { }}>
                                            <Image
                                                source={{ uri: video?.thumbnailUrl }}
                                                style={styles.videoImage}
                                                resizeMode="cover"
                                            />

                                            <View style={styles.videoOverlay}>
                                                <View style={styles.playButton}>
                                                    <Ionicons name="play" size={26} color={colors?.background} />
                                                </View>
                                            </View>

                                            <View style={styles.duration}>
                                                <Text style={styles.durationText}>{video?.duration}</Text>
                                            </View>
                                        </Pressable>

                                        <CardContent>
                                            <View style={styles.cardRow}>
                                                <Text style={styles.cardTitle}>{video?.title}</Text>
                                                <Ionicons name="share-social" size={20} color={colors?.primary} />
                                            </View>
                                        </CardContent>
                                    </Card>
                                ))}
                            </View>
                        )}

                        <Text style={styles.refreshHint}>Pull down to refresh</Text>
                    </ScrollView>
                )}
            </PullToRefresh>

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
        paddingBottom: layout?.spacing?.xl,
    },
    section: {
        paddingHorizontal: layout?.spacing?.md,
        paddingTop: layout?.spacing?.lg,
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: layout?.spacing?.sm,
        marginBottom: layout?.spacing?.md,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: colors?.textPrimary,
    },
    imageWrapper: {
        position: "relative",
    },
    mainImage: {
        width: "100%",
        height: 260,
    },
    navButtonLeft: {
        position: "absolute",
        left: 12,
        top: "50%",
        transform: [{ translateY: -20 }],
        width: 40,
        height: 40,
        borderRadius: layout?.radius?.full,
        backgroundColor: "rgba(255,255,255,0.9)",
        alignItems: "center",
        justifyContent: "center",
    },
    navButtonRight: {
        position: "absolute",
        right: 12,
        top: "50%",
        transform: [{ translateY: -20 }],
        width: 40,
        height: 40,
        borderRadius: layout?.radius?.full,
        backgroundColor: "rgba(255,255,255,0.9)",
        alignItems: "center",
        justifyContent: "center",
    },
    dotsContainer: {
        position: "absolute",
        bottom: 12,
        left: "50%",
        transform: [{ translateX: -40 }],
        flexDirection: "row",
        gap: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: layout?.radius?.full,
        backgroundColor: "rgba(0,0,0,0.25)",
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: layout?.radius?.full,
        backgroundColor: "rgba(255,255,255,0.6)",
    },
    activeDot: {
        width: 20,
        backgroundColor: colors?.primary,
    },
    cardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: colors?.textPrimary,
    },
    cardDescription: {
        fontSize: 14,
        color: colors?.textSecondary,
        marginTop: 4,
    },
    videoCard: {
        marginBottom: layout?.spacing?.md,
    },
    videoImage: {
        width: "100%",
        height: 200,
    },
    videoOverlay: {
        position: "absolute",
        inset: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.35)",
    },
    playButton: {
        width: 56,
        height: 56,
        borderRadius: layout?.radius?.full,
        backgroundColor: colors?.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    duration: {
        position: "absolute",
        bottom: 8,
        right: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: layout?.radius?.sm,
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    durationText: {
        fontSize: 12,
        color: colors?.background,
    },
    refreshHint: {
        textAlign: "center",
        fontSize: 12,
        color: colors?.textSecondary,
        opacity: 0.6,
        marginVertical: layout?.spacing?.lg,
    },
})
