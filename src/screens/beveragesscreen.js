import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Dữ liệu gốc
const beveragesData = [
  { id: '1', name: 'Diet Coke', desc: '355ml, Price', price: '$1.99', image: require('../assets/anh7.png') },
  { id: '2', name: 'Sprite Can', desc: '325ml, Price', price: '$1.50', image: require('../assets/anh8.png') },
  { id: '3', name: 'Apple & Grape\nJuice', desc: '2L, Price', price: '$15.99', image: require('../assets/anh9.png') },
  { id: '4', name: 'Orenge Juice', desc: '2L, Price', price: '$15.99', image: require('../assets/anh10.png') },
  { id: '5', name: 'Coca Cola Can', desc: '325ml, Price', price: '$4.99', image: require('../assets/anh11.png') },
  { id: '6', name: 'Pepsi Can', desc: '330ml, Price', price: '$4.99', image: require('../assets/anh12.png') },
];

export default function BeveragesScreen({ navigation, route }) {
  // State quản lý dữ liệu đang được hiển thị (mặc định là toàn bộ beveragesData)
  const [displayData, setDisplayData] = useState(beveragesData);

  // Lắng nghe dữ liệu trả về từ FilterScreen (nếu có)
  useEffect(() => {
    if (route.params?.filteredData) {
      // Nếu FilterScreen thực hiện lọc và gửi mảng kết quả về, ta cập nhật state
      setDisplayData(route.params.filteredData);
    }
    // Ghi chú: Nếu FilterScreen chỉ gửi về các tiêu chí (ví dụ: route.params?.sortByPrice) 
    // bạn có thể tự viết hàm sắp xếp/lọc biến beveragesData tại đây.
  }, [route.params]);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail')} 
    >
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      
      <View style={styles.textContainer}>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.productDesc}>{item.desc}</Text>
      </View>
      
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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={28} color="#181B19" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        
        {/* ĐÃ CẬP NHẬT: Thêm sự kiện chuyển hướng sang màn hình Filter */}
        <TouchableOpacity 
          style={styles.iconBtn} 
          onPress={() => navigation.navigate('Filter')}
        >
          <Ionicons name="options-outline" size={28} color="#181B19" />
        </TouchableOpacity>
      </View>

      {/* Grid Danh sách: Render biến displayData thay vì beveragesData cố định */}
      <FlatList
        data={displayData}
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
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingTop: 10, 
    paddingBottom: 20 
  },
  iconBtn: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181B19' },
  listContainer: { paddingHorizontal: 20, paddingBottom: 30 },
  row: { justifyContent: 'space-between', marginBottom: 15 },
  card: { 
    width: (width - 55) / 2, 
    padding: 15, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    borderRadius: 18, 
    backgroundColor: '#FFF',
    justifyContent: 'space-between'
  },
  productImage: { 
    width: '100%', 
    height: 90, 
    marginBottom: 15 
  },
  textContainer: {
    marginBottom: 10,
  },
  productName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#181B19', 
    marginBottom: 5,
    lineHeight: 22
  },
  productDesc: { 
    fontSize: 14, 
    color: '#7C7C7C', 
  },
  priceRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  price: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#181B19' 
  },
  addBtn: { 
    width: 45, 
    height: 45, 
    backgroundColor: '#53B175', 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});