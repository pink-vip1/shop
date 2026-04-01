import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Dữ liệu được lấy từ Home (anh13, anh15, anh16) và Explore (anh7)
const initialCartData = [
  { id: '1', name: 'Bell Pepper Red', desc: '1kg, Price', price: 4.99, qty: 1, image: require('../assets/anh15.png') },
  { id: '2', name: 'Organic Bananas', desc: '7pcs, Price', price: 4.99, qty: 1, image: require('../assets/anh13.png') },
  { id: '3', name: 'Ginger', desc: '250gm, Price', price: 4.99, qty: 1, image: require('../assets/anh16.png') },
  { id: '4', name: 'Diet Coke', desc: '355ml, Price', price: 1.99, qty: 1, image: require('../assets/anh7.png') }
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(initialCartData);

  // Hàm tăng số lượng
  const increaseQty = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Hàm giảm số lượng (tối thiểu là 1)
  const decreaseQty = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // Hàm xóa sản phẩm khỏi giỏ
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Tính tổng tiền
  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    return total.toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      {/* Đã sửa source={{ uri: item.image }} thành source={item.image} để dùng ảnh require */}
      <Image source={item.image} style={styles.img} resizeMode="contain" />
      
      <View style={styles.itemContent}>
        {/* Hàng chứa Tên và Nút Xóa */}
        <View style={styles.nameRow}>
          <Text style={styles.name}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeBtn}>
            <Ionicons name="close" size={20} color="#7C7C7C" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.desc}>{item.desc}</Text>

        {/* Hàng chứa Nút Số Lượng và Giá Tiền */}
        <View style={styles.bottomContentRow}>
          <View style={styles.qtyContainer}>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => decreaseQty(item.id)}>
              <Ionicons name="remove" size={20} color="#B3B3B3" />
            </TouchableOpacity>
            
            <Text style={styles.qtyText}>{item.qty}</Text>
            
            <TouchableOpacity style={styles.qtyBtn} onPress={() => increaseQty(item.id)}>
              <Ionicons name="add" size={20} color="#53B175" />
            </TouchableOpacity>
          </View>

          {/* Hiển thị giá tiền của mục đó (đơn giá * số lượng) */}
          <Text style={styles.itemTotalPrice}>${(item.price * item.qty).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      {/* Thanh Bottom chứa nút Checkout */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>${calculateTotal()}</Text>
          </View>
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
  headerContainer: { 
    paddingVertical: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2',
    alignItems: 'center'
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
  itemRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingVertical: 20 
  },
  img: { 
    width: 70, 
    height: 70, 
    marginRight: 20 
  },
  itemContent: { 
    flex: 1 
  },
  nameRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start' 
  },
  name: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#181B19',
    flex: 1,
    marginRight: 10
  },
  removeBtn: {
    padding: 2
  },
  desc: { 
    fontSize: 14, 
    color: '#7C7C7C', 
    marginTop: 5, 
    marginBottom: 15 
  },
  bottomContentRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  qtyContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  qtyBtn: { 
    width: 35, 
    height: 35, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  qtyText: { 
    fontSize: 16, 
    fontWeight: '600', 
    marginHorizontal: 15,
    color: '#181B19'
  },
  itemTotalPrice: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#181B19' 
  },
  bottomBar: { 
    paddingHorizontal: 25, 
    paddingTop: 10,
    paddingBottom: 25,
    backgroundColor: '#FFF' 
  },
  checkoutBtn: { 
    flexDirection: 'row',
    backgroundColor: '#53B175', 
    paddingVertical: 18,
    paddingHorizontal: 20, 
    borderRadius: 15, 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  checkoutText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  totalBadge: {
    position: 'absolute',
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6
  },
  totalBadgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold'
  }
});