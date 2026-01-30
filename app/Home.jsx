import { StyleSheet, View } from 'react-native';
import BottomNav from '../BottomNav';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  menuBtn: { marginTop: 50, marginLeft: 20 },
  menu: { fontSize: 28 },
  text: { marginTop: 100, textAlign: 'center', fontSize: 22 },
});
