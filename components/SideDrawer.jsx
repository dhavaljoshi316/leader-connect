import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.75;

export default function SideDrawer({ open, onClose }) {
    const navigation = useNavigation();
    const translateX = useSharedValue(-DRAWER_WIDTH);

    useEffect(() => {
        translateX.value = withTiming(open ? 0 : -DRAWER_WIDTH, {
            duration: 280,
        });
    }, [open]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const go = (screen) => {
        onClose();
        setTimeout(() => navigation.navigate(screen), 180);
    };

    return (
        <>
            {open && (
                <Pressable style={styles.overlay} onPress={onClose} />
            )}

            <Animated.View style={[styles.drawer, animatedStyle]}>
                <Pressable onPress={onClose} style={styles.close}>
                    <Text style={styles.closeText}>✕</Text>
                </Pressable>

                <Text style={styles.title}>Menu</Text>

                <Pressable onPress={() => go('Home')}>
                    <Text style={styles.item}>Home</Text>
                </Pressable>

                <Pressable onPress={() => go('About')}>
                    <Text style={styles.item}>About</Text>
                </Pressable>
            </Animated.View>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)',
        zIndex: 1,
    },
    drawer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: DRAWER_WIDTH,
        backgroundColor: '#121212',
        paddingTop: 60,
        paddingHorizontal: 20,
        zIndex: 2,
    },
    close: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    closeText: {
        color: '#fff',
        fontSize: 22,
    },
    title: {
        color: '#aaa',
        fontSize: 14,
        marginBottom: 20,
    },
    item: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 14,
    },
});
