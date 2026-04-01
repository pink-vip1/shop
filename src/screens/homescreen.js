import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// 1. Dữ liệu Exclusive Offer (anh13, anh14)
const exclusiveProducts = [
  { id: '1', name: 'Organic Bananas', desc: '7pcs, Priceg', price: '$4.99', image: require('../assets/anh13.png') },
  { id: '2', name: 'Red Apple', desc: '1kg, Priceg', price: '$4.99', image: require('../assets/tao.png') },
];

// 2. Dữ liệu Best Selling (anh15, anh16)
const bestSellingProducts = [
  { id: '3', name: 'Bell Pepper Red', desc: '1kg, Priceg', price: '$4.99', image: require('../assets/anh15.png') },
  { id: '4', name: 'Ginger', desc: '250gm, Priceg', price: '$4.99', image: require('../assets/anh16.png') },
];

// 3. Dữ liệu Danh mục Groceries (anh17, anh18)
const groceriesCategories = [
  { id: '5', name: 'Pulses', image: require('../assets/anh17.png'), bgColor: 'rgba(248, 164, 76, 0.15)' },
  { id: '6', name: 'Rice', image: require('../assets/anh18.png'), bgColor: 'rgba(83, 177, 117, 0.15)' },
];

// 4. Dữ liệu Sản phẩm Groceries (anh19, anh20)
const groceriesProducts = [
  { id: '7', name: 'Beef Bone', desc: '1kg, Priceg', price: '$4.99', image: require('../assets/anh19.png') },
  { id: '8', name: 'Broiler Chicken', desc: '1kg, Priceg', price: '$4.99', image: require('../assets/anh20.png') },
];

export default function HomeScreen({ navigation }) {

  // Component render thẻ Sản phẩm chung
  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail')}>
      <Image source={item.image} style={styles.productImg} resizeMode="contain" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDesc}>{item.desc}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('ProductDetail')}>
          <Ionicons name="add" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // Component render thẻ Danh mục Groceries (Ngang)
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={[styles.categoryCard, { backgroundColor: item.bgColor }]}>
      <Image source={item.image} style={styles.categoryImg} resizeMode="contain" />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Component hiển thị Tiêu đề Section & Nút See All
  const SectionHeader = ({ title }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>See all</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header Logo & Location */}
        <View style={styles.headerTop}>
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/FF9D00/carrot.png' }} style={styles.logo} />
          <View style={styles.locationRow}>
            <Ionicons name="location-sharp" size={20} color="#4C4F4D" />
            <Text style={styles.locationText}>Hanoi, Vietnam</Text>
          </View>
        </View>

        {/* Thanh Tìm Kiếm */}
        <TouchableOpacity style={styles.searchBox} onPress={() => navigation.navigate('Explore')}>
          <Ionicons name="search" size={24} color="#181B19" style={{ marginRight: 10 }} />
          <Text style={{ color: '#7C7C7C', fontSize: 16 }}>Search Store</Text>
        </TouchableOpacity>

        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
          <Text style={styles.bannerSub}>Get Up To 40% OFF</Text>
        </View>

        {/* --- Mục Exclusive Offer --- */}
        <SectionHeader title="Exclusive Offer" />
        <FlatList
          data={exclusiveProducts}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          horizontal // Đổi thành danh sách cuộn ngang
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        {/* --- Mục Best Selling --- */}
        <SectionHeader title="Best Selling" />
        <FlatList
          data={bestSellingProducts}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        {/* --- Mục Groceries --- */}
        <SectionHeader title="Groceries" />
        
        {/* Groceries - Categories (Pulses, Rice...) */}
        <FlatList
          data={groceriesCategories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          style={{ marginBottom: 15 }} // Khoảng cách giữa danh mục và sản phẩm
        />

        {/* Groceries - Products (Beef Bone, Chicken...) */}
        <FlatList
          data={groceriesProducts}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { paddingBottom: 100 }, // Đệm đáy để không cấn thanh menu dưới cùng
  headerTop: { alignItems: 'center', marginTop: 10, marginBottom: 15 },
  logo: { width: 35, height: 35, marginBottom: 5, tintColor: '#F3603F' }, // Đổi màu logo cà rốt
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationText: { fontSize: 18, color: '#4C4F4D', fontWeight: 'bold', marginLeft: 5 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F3F2', borderRadius: 15, paddingHorizontal: 15, marginHorizontal: 25, height: 50, marginBottom: 20 },
  banner: { backgroundColor: 'rgba(83, 177, 117, 0.2)', borderRadius: 15, padding: 20, alignItems: 'center', marginHorizontal: 25, marginBottom: 20 },
  bannerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
  bannerSub: { fontSize: 16, color: '#53B175', marginTop: 5, fontWeight: 'bold' },
  
  // Styles cho tiêu đề Section
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 25, marginBottom: 15, marginTop: 10 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#181B19' },
  seeAllText: { fontSize: 16, color: '#53B175', fontWeight: '600' },
  
  // Định dạng khoảng cách khi cuộn ngang
  horizontalList: { paddingLeft: 25, paddingRight: 10 },

  // Styles cho Thẻ Sản Phẩm
  productCard: { width: 160, padding: 15, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 18, marginRight: 15, backgroundColor: '#FFF' },
  productImg: { width: '100%', height: 80, marginBottom: 15 },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#181B19' },
  productDesc: { fontSize: 14, color: '#7C7C7C', marginBottom: 15, marginTop: 5 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 18, fontWeight: 'bold', color: '#181B19' },
  addBtn: { width: 45, height: 45, backgroundColor: '#53B175', borderRadius: 15, justifyContent: 'center', alignItems: 'center' },

  // Styles cho Thẻ Danh Mục Groceries (Ngang)
  categoryCard: { flexDirection: 'row', alignItems: 'center', width: 240, height: 100, borderRadius: 18, paddingHorizontal: 15, marginRight: 15 },
  categoryImg: { width: 70, height: 70, marginRight: 15 },
  categoryName: { fontSize: 20, fontWeight: 'bold', color: '#3E423F' },
});