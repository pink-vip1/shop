import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Dữ liệu mẫu cho sản phẩm
const exclusiveOffers = [
  { id: '1', name: 'Organic Bananas', desc: '7pcs, Priceg', price: '$4.99', image: 'https://cdn-icons-png.flaticon.com/512/2909/2909761.png' },
  { id: '2', name: 'Red Apple', desc: '1kg, Priceg', price: '$4.99', image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' }, // Cà rốt tạm thay cho táo
];

export default function HomeScreen({ navigation }) {
  // Giao diện cho từng thẻ sản phẩm
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDesc}>{item.desc}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header: Logo củ cà rốt và vị trí */}
        <View style={styles.header}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' }} style={styles.headerLogo} />
          <View style={styles.locationRow}>
            <Ionicons name="location-sharp" size={20} color="#4C4F4D" />
            <Text style={styles.locationText}>Dhaka, Banassre</Text>
          </View>
        </View>

        {/* Thanh tìm kiếm */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="#181B19" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search Store" placeholderTextColor="#7C7C7C" />
        </View>

        {/* Banner (Dùng view màu xanh nhạt tạm thời) */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Fresh Vegetables</Text>
          <Text style={styles.bannerSubText}>Get Up To 40% OFF</Text>
        </View>

        {/* Danh sách sản phẩm lướt ngang (Exclusive Offer) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <FlatList 
          data={exclusiveOffers}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

        {/* Danh sách sản phẩm lướt ngang (Best Selling) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <FlatList 
          data={exclusiveOffers}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { paddingBottom: 30 },
  header: { alignItems: 'center', marginTop: 10, marginBottom: 20 },
  headerLogo: { width: 35, height: 35, marginBottom: 10 },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationText: { fontSize: 18, color: '#4C4F4D', fontWeight: '600', marginLeft: 5 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F3F2', borderRadius: 15, paddingHorizontal: 15, marginHorizontal: 25, height: 50, marginBottom: 20 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: '#181B19', fontWeight: '600' },
  banner: { marginHorizontal: 25, backgroundColor: 'rgba(83, 177, 117, 0.2)', borderRadius: 15, padding: 20, marginBottom: 30, alignItems: 'center' },
  bannerText: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
  bannerSubText: { fontSize: 16, color: '#53B175', marginTop: 5, fontWeight: '600' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 25, marginBottom: 15 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#181B19' },
  seeAll: { fontSize: 16, color: '#53B175', fontWeight: '600' },
  listContainer: { paddingLeft: 25, paddingRight: 10, marginBottom: 30 },
  card: { width: 170, padding: 15, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 18, marginRight: 15 },
  productImage: { width: '100%', height: 80, marginBottom: 15 },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#181B19', marginBottom: 5 },
  productDesc: { fontSize: 14, color: '#7C7C7C', marginBottom: 20 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 18, fontWeight: 'bold', color: '#181B19' },
  addBtn: { width: 45, height: 45, backgroundColor: '#53B175', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }
});