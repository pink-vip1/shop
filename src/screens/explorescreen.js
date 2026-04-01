import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const categories = [
  { id: '1', name: 'Fresh Fruits\n& Vegetable', image: require('../assets/anh1.png'), bgColor: 'rgba(83, 177, 117, 0.1)', borderColor: 'rgba(83, 177, 117, 0.4)' },
  { id: '2', name: 'Cooking Oil\n& Ghee', image: require('../assets/anh2.png'), bgColor: 'rgba(248, 164, 76, 0.1)', borderColor: 'rgba(248, 164, 76, 0.4)' },
  { id: '3', name: 'Meat & Fish', image: require('../assets/anh3.png'), bgColor: 'rgba(247, 165, 147, 0.1)', borderColor: 'rgba(247, 165, 147, 0.4)' },
  { id: '4', name: 'Bakery & Snacks', image: require('../assets/anh4.png'), bgColor: 'rgba(211, 176, 224, 0.1)', borderColor: 'rgba(211, 176, 224, 0.4)' },
  { id: '5', name: 'Dairy & Eggs', image: require('../assets/anh5.png'), bgColor: 'rgba(253, 229, 152, 0.1)', borderColor: 'rgba(253, 229, 152, 0.4)' },
  { id: '6', name: 'Beverages', image: require('../assets/anh6.png'), bgColor: 'rgba(183, 223, 245, 0.1)', borderColor: 'rgba(183, 223, 245, 0.4)' },
];

// CẬP NHẬT: Dữ liệu mô phỏng cho thanh tìm kiếm đồng bộ với toàn app
const allProducts = [
  { id: 'p1', name: 'Diet Coke', desc: '355ml', price: '$1.99', image: require('../assets/anh7.png') },
  { id: 'p2', name: 'Sprite Can', desc: '325ml', price: '$1.50', image: require('../assets/anh8.png') },
  { id: 'p3', name: 'Apple & Grape Juice', desc: '2L', price: '$15.99', image: require('../assets/anh9.png') },
  { id: 'p4', name: 'Coca Cola Can', desc: '325ml', price: '$4.99', image: require('../assets/anh11.png') },
  { id: 'p5', name: 'Pepsi Can', desc: '330ml', price: '$4.99', image: require('../assets/anh12.png') },
  { id: 'p6', name: 'Organic Bananas', desc: '7pcs', price: '$4.99', image: require('../assets/anh13.png') },
  { id: 'p7', name: 'Red Apple', desc: '1kg', price: '$4.99', image: require('../assets/tao.png') },
  { id: 'p8', name: 'Bell Pepper Red', desc: '1kg', price: '$4.99', image: require('../assets/anh15.png') },
  { id: 'p9', name: 'Ginger', desc: '250gm', price: '$2.99', image: require('../assets/anh16.png') },
  { id: 'p10', name: 'Beef Bone', desc: '1kg', price: '$4.99', image: require('../assets/anh19.png') },
  { id: 'p11', name: 'Broiler Chicken', desc: '1kg', price: '$4.99', image: require('../assets/anh20.png') },
];

export default function ExploreScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  
  // Logic tìm kiếm sản phẩm theo tên
  const searchResults = allProducts.filter(item => 
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCategoryPress = (categoryName) => {
    if (categoryName === 'Beverages') {
      navigation.navigate('Beverages'); 
    } else {
      console.log(`Chưa có màn hình cho: ${categoryName}`);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.headerTitle}>Find Products</Text>
        
        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="#181B19" />
            <TextInput 
              style={styles.searchInput} 
              placeholder="Search Store" 
              placeholderTextColor="#7C7C7C"
              value={searchText} 
              onChangeText={setSearchText} 
            />
          </View>
        </View>

        {searchText.length > 0 ? (
          <FlatList
            data={searchResults}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail')}>
                {/* SỬA LỖI: Dùng source={item.image} cho ảnh require cục bộ */}
                <Image source={item.image} style={styles.productImg} resizeMode="contain" />
                <Text style={styles.productName}>{item.name}</Text>
                
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                  <Text style={{ fontSize: 14, color: '#7C7C7C', marginBottom: 10 }}>{item.desc}</Text>
                  <View style={styles.priceRow}>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('Cart')}>
                      <Ionicons name="add" size={24} color="#FFF" />
                    </TouchableOpacity>
                  </View>
                </View>

              </TouchableOpacity>
            )}
          />
        ) : (
          <FlatList
            data={categories}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={[styles.catCard, { backgroundColor: item.bgColor, borderColor: item.borderColor }]} 
                onPress={() => handleCategoryPress(item.name)}
              >
                <Image source={item.image} style={styles.catImage} resizeMode="contain" />
                <Text style={styles.catText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 10, 
    marginBottom: 20,
    color: '#181B19'
  },
  searchRow: { 
    flexDirection: 'row', 
    paddingHorizontal: 25, 
    marginBottom: 20 
  },
  searchContainer: { 
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F2F3F2', 
    borderRadius: 15, 
    paddingHorizontal: 15, 
    height: 50 
  },
  searchInput: { 
    flex: 1, 
    fontSize: 15, 
    marginLeft: 10,
    color: '#181B19',
    fontWeight: '600'
  },
  listContainer: { 
    paddingHorizontal: 25, 
    paddingBottom: 30 
  },
  row: { 
    justifyContent: 'space-between', 
    marginBottom: 15 
  },
  catCard: { 
    width: (width - 65) / 2, 
    height: 190, 
    borderRadius: 18, 
    borderWidth: 1, 
    padding: 15, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  catImage: { 
    width: 90, 
    height: 70, 
    marginBottom: 20 
  },
  catText: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    textAlign: 'center',
    color: '#181B19',
    lineHeight: 22
  },
  productCard: { 
    width: (width - 65) / 2, 
    padding: 15, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    borderRadius: 18 
  },
  productImg: { 
    width: '100%', 
    height: 80, 
    marginBottom: 15 
  },
  productName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 5,
    color: '#181B19'
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
    width: 40, 
    height: 40, 
    backgroundColor: '#53B175', 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});