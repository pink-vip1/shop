import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Cập nhật dữ liệu sử dụng ảnh cục bộ (require) giống màn hình Beverages
const favoriteItems = [
  { id: '1', name: 'Sprite Can', desc: '325ml, Price', price: '$1.50', image: require('../assets/anh8.png') },
  { id: '2', name: 'Diet Coke', desc: '355ml, Price', price: '$1.99', image: require('../assets/anh7.png') },
  { id: '3', name: 'Apple & Grape Juice', desc: '2L, Price', price: '$15.50', image: require('../assets/anh9.png') },
  { id: '4', name: 'Coca Cola Can', desc: '325ml, Price', price: '$4.99', image: require('../assets/anh11.png') },
  { id: '5', name: 'Pepsi Can', desc: '330ml, Price', price: '$4.99', image: require('../assets/anh12.png') },
];

export default function FavoriteScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* Sử dụng source={item.image} thay cho uri */}
      <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
      </View>
      
      <View style={styles.priceRow}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Ionicons name="chevron-forward" size={24} color="#181B19" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourite</Text>
      </View>

      {/* Danh sách yêu thích */}
      <FlatList 
        data={favoriteItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        showsVerticalScrollIndicator={false}
      />

      {/* Thanh Bottom chứa nút Add All To Cart */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.addAllBtn}>
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  header: { 
    alignItems: 'center', 
    paddingVertical: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2' 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#181B19' 
  },
  listContainer: { 
    paddingHorizontal: 25, 
    paddingBottom: 20 
  },
  itemContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 20 
  },
  itemImage: { 
    width: 60, 
    height: 60, 
    marginRight: 20 
  },
  itemDetails: { 
    flex: 1, 
    justifyContent: 'center',
    marginRight: 10
  },
  itemName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#181B19', 
    marginBottom: 5 
  },
  itemDesc: { 
    fontSize: 14, 
    color: '#7C7C7C' 
  },
  priceRow: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  itemPrice: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#181B19', 
    marginRight: 15 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#E2E2E2' 
  },
  bottomBar: { 
    paddingHorizontal: 25, 
    paddingTop: 10, 
    paddingBottom: 25, // Tạo khoảng cách để không bị che bởi Bottom Tab Navigation
    backgroundColor: '#FFF' 
  },
  addAllBtn: { 
    backgroundColor: '#53B175', 
    paddingVertical: 18, 
    borderRadius: 15, 
    alignItems: 'center' 
  },
  addAllText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  }
});