import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AccountScreen({ navigation }) {
  // Giao diện cho từng mục trong danh sách (Orders, My Details...)
  const MenuItem = ({ icon, title }) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={24} color="#181B19" style={styles.menuIcon} />
        <Text style={styles.menuTitle}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#181B19" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Phần thông tin User */}
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
            style={styles.avatar} 
          />
          <View style={styles.info}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>Afsar Hossen</Text>
              <Ionicons name="pencil" size={16} color="#53B175" style={{ marginLeft: 10 }} />
            </View>
            <Text style={styles.email}>Imshuvo97@gmail.com</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Danh sách chức năng */}
        <MenuItem icon="bag-outline" title="Orders" />
        <View style={styles.divider} />
        <MenuItem icon="person-outline" title="My Details" />
        <View style={styles.divider} />
        <MenuItem icon="location-outline" title="Delivery Address" />
        <View style={styles.divider} />
        <MenuItem icon="card-outline" title="Payment Methods" />
        <View style={styles.divider} />
        <MenuItem icon="pricetag-outline" title="Promo Cord" />
        <View style={styles.divider} />
        <MenuItem icon="notifications-outline" title="Notifications" />
        <View style={styles.divider} />
        <MenuItem icon="help-circle-outline" title="Help" />
        <View style={styles.divider} />
        <MenuItem icon="alert-circle-outline" title="About" />
        <View style={styles.divider} />

        {/* Nút Đăng xuất */}
        <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Welcome')}>
          <Ionicons name="log-out-outline" size={24} color="#53B175" style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  profileSection: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, paddingTop: 20, paddingBottom: 20 },
  avatar: { width: 65, height: 65, borderRadius: 32.5, marginRight: 20 },
  info: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  name: { fontSize: 20, fontWeight: 'bold', color: '#181B19' },
  email: { fontSize: 16, color: '#7C7C7C' },
  divider: { height: 1, backgroundColor: '#E2E2E2', marginHorizontal: 25 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, paddingHorizontal: 25 },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { marginRight: 20 },
  menuTitle: { fontSize: 18, fontWeight: '600', color: '#181B19' },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F3F2', marginHorizontal: 25, marginTop: 40, marginBottom: 40, paddingVertical: 18, borderRadius: 15 },
  logoutIcon: { position: 'absolute', left: 25 },
  logoutText: { color: '#53B175', fontSize: 18, fontWeight: 'bold' }
});