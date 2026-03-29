import React, { useState } from 'react'; // BƯỚC 1: Import thêm useState
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const categories = [
  { id: '1', name: 'Fresh Fruits\n& Vegetable', image: 'https://cdn-icons-png.flaticon.com/512/3194/3194591.png', bgColor: 'rgba(83, 177, 117, 0.1)', borderColor: '#53B175' },
  { id: '2', name: 'Cooking Oil\n& Ghee', image: 'https://cdn-icons-png.flaticon.com/512/3348/3348085.png', bgColor: 'rgba(248, 164, 76, 0.1)', borderColor: '#F8A44C' },
  { id: '3', name: 'Meat & Fish', image: 'https://cdn-icons-png.flaticon.com/512/3143/3143645.png', bgColor: 'rgba(247, 165, 147, 0.1)', borderColor: '#F7A593' },
  { id: '4', name: 'Bakery & Snacks', image: 'https://cdn-icons-png.flaticon.com/512/3348/3348075.png', bgColor: 'rgba(211, 176, 224, 0.1)', borderColor: '#D3B0E0' },
  { id: '5', name: 'Dairy & Eggs', image: 'https://cdn-icons-png.flaticon.com/512/3050/3050148.png', bgColor: 'rgba(253, 229, 152, 0.1)', borderColor: '#FDE598' },
  { id: '6', name: 'Beverages', image: 'https://cdn-icons-png.flaticon.com/512/3050/3050116.png', bgColor: 'rgba(183, 223, 245, 0.1)', borderColor: '#B7DFF5' },
];

export default function ExploreScreen({ navigation }) {
  // BƯỚC 2: Tạo state để lưu trữ từ khóa mà người dùng gõ
  const [searchText, setSearchText] = useState('');

  // BƯỚC 3: Tạo một mảng mới chỉ chứa các danh mục khớp với từ khóa
  const filteredCategories = categories.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: item.bgColor, borderColor: item.borderColor }]}
      onPress={() => navigation.navigate('Beverages')}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Find Products</Text>

      {/* BƯỚC 4: Gắn state vào TextInput */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#181B19" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search Store" 
          placeholderTextColor="#7C7C7C"
          value={searchText} // Hiển thị từ khóa hiện tại
          onChangeText={(text) => setSearchText(text)} // Cập nhật từ khóa mỗi khi gõ phím
        />
        {/* Nút xóa nhanh từ khóa (dấu X nhỏ ở cuối thanh tìm kiếm) */}
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText('')}>
            <Ionicons name="close-circle" size={20} color="#7C7C7C" />
          </TouchableOpacity>
        )}
      </View>

      {/* BƯỚC 5: Hiển thị mảng đã được lọc (filteredCategories) thay vì mảng gốc */}
      <FlatList
        data={filteredCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        // Hiện thông báo nếu gõ linh tinh không tìm thấy gì
        ListEmptyComponent={<Text style={styles.emptyText}>No categories found</Text>} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181B19', textAlign: 'center', marginTop: 10, marginBottom: 20 },
  searchContainer: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F3F2', 
    borderRadius: 15, paddingHorizontal: 15, marginHorizontal: 25, height: 50, marginBottom: 20 
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: '#181B19', fontWeight: '600' },
  listContainer: { paddingHorizontal: 25, paddingBottom: 30 },
  row: { justifyContent: 'space-between', marginBottom: 15 },
  card: { 
    width: (width - 65) / 2, 
    height: 190, 
    borderRadius: 18, 
    borderWidth: 1, 
    padding: 15, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  cardImage: { width: 90, height: 90, marginBottom: 20 },
  cardText: { fontSize: 16, fontWeight: 'bold', color: '#181B19', textAlign: 'center', lineHeight: 22 },
  emptyText: { textAlign: 'center', color: '#7C7C7C', fontSize: 16, marginTop: 50 }
});