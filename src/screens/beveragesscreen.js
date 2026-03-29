import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Dữ liệu mẫu cho các loại đồ uống
const beveragesData = [
  { id: '1', name: 'Diet Coke', desc: '355ml, Price', price: '$1.99', image: 'https://cdn-icons-png.flaticon.com/512/2405/2405479.png' },
  { id: '2', name: 'Sprite Can', desc: '325ml, Price', price: '$1.50', image: 'https://cdn-icons-png.flaticon.com/512/2405/2405479.png' },
  { id: '3', name: 'Apple & Grape Juice', desc: '2L, Price', price: '$5.99', image: 'https://cdn-icons-png.flaticon.com/512/3050/3050116.png' },
  { id: '4', name: 'Orenge Juice', desc: '2L, Price', price: '$5.99', image: 'https://cdn-icons-png.flaticon.com/512/3050/3050116.png' },
  { id: '5', name: 'Coca Cola Can', desc: '325ml, Price', price: '$4.99', image: 'https://cdn-icons-png.flaticon.com/512/2405/2405479.png' },
  { id: '6', name: 'Pepsi Can', desc: '330ml, Price', price: '$4.99', image: 'https://cdn-icons-png.flaticon.com/512/2405/2405479.png' },
];

export default function BeveragesScreen({ navigation }) {
  // Giao diện cho từng thẻ sản phẩm đồ uống
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail')} // Bấm vào để xem chi tiết
    >
      <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDesc}>{item.desc}</Text>
      
      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header: Nút Back, Tiêu đề và Nút Lọc (Filter) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={28} color="#181B19" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="options-outline" size={28} color="#181B19" />
        </TouchableOpacity>
      </View>

      {/* Lưới danh sách sản phẩm (2 cột) */}
      <FlatList
        data={beveragesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 
  },
  iconBtn: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181B19' },
  listContainer: { paddingHorizontal: 25, paddingBottom: 30 },
  row: { justifyContent: 'space-between', marginBottom: 15 },
  card: { 
    width: (width - 65) / 2, // Tính chiều rộng thẻ vừa đúng 2 cột
    padding: 15, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    borderRadius: 18, 
    backgroundColor: '#FFF' 
  },
  productImage: { width: '100%', height: 90, marginBottom: 15 },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#181B19', marginBottom: 5 },
  productDesc: { fontSize: 14, color: '#7C7C7C', marginBottom: 20 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 18, fontWeight: 'bold', color: '#181B19' },
  addBtn: { width: 45, height: 45, backgroundColor: '#53B175', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }
});