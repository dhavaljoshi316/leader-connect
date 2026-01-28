import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import SideDrawer from '../components/SideDrawer';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <SideDrawer open={open} onClose={() => setOpen(false)} />

      <Pressable onPress={() => setOpen(true)} style={styles.menuBtn}>
        <Text style={styles.menu}>☰</Text>
      </Pressable>

      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  menuBtn: { marginTop: 50, marginLeft: 20 },
  menu: { fontSize: 28 },
  text: { marginTop: 100, textAlign: 'center', fontSize: 22 },
});
