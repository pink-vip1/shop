import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Dữ liệu mẫu ban đầu cho Giỏ hàng
const initialCart = [
  { id: '1', name: 'Bell Pepper Red', desc: '1kg, Price', price: 4.99, qty: 1, image: 'https://cdn-icons-png.flaticon.com/512/883/883736.png' },
  { id: '2', name: 'Egg Chicken Red', desc: '4pcs, Price', price: 1.99, qty: 1, image: 'https://cdn-icons-png.flaticon.com/512/837/837560.png' },
  { id: '3', name: 'Organic Bananas', desc: '12kg, Price', price: 3.00, qty: 1, image: 'https://cdn-icons-png.flaticon.com/512/2909/2909761.png' },
  { id: '4', name: 'Ginger', desc: '250gm, Price', price: 2.99, qty: 1, image: 'https://cdn-icons-png.flaticon.com/512/1542/1542099.png' },
];

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState(initialCart);

  // Hàm tăng số lượng
  const increaseQty = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
    );
  };

  // Hàm giảm số lượng (không cho giảm dưới 1)
  const decreaseQty = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item)
    );
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Tính tổng tiền tự động
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0).toFixed(2);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="contain" />
      
      <View style={styles.itemDetails}>
        <View style={styles.titleRow}>
          <Text style={styles.itemName}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Ionicons name="close" size={24} color="#7C7C7C" />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemDesc}>{item.desc}</Text>
        
        <View style={styles.priceRow}>
          <View style={styles.qtyContainer}>
            <TouchableOpacity onPress={() => decreaseQty(item.id)} style={styles.qtyBtn}>
              <Ionicons name="remove" size={24} color="#B3B3B3" />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{item.qty}</Text>
            <TouchableOpacity onPress={() => increaseQty(item.id)} style={styles.qtyBtn}>
              <Ionicons name="add" size={24} color="#53B175" />
            </TouchableOpacity>
          </View>
          <Text style={styles.itemPrice}>${(item.price * item.qty).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Tiêu đề trang */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList 
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />

      {/* Nút Thanh toán ở đáy */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.totalPriceBadge}>
            <Text style={styles.totalPriceText}>${totalPrice}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { alignItems: 'center', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181B19' },
  listContainer: { paddingHorizontal: 25, paddingBottom: 100 },
  cartItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 20 },
  itemImage: { width: 70, height: 70, marginRight: 20 },
  itemDetails: { flex: 1 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#181B19', flex: 1 },
  itemDesc: { fontSize: 14, color: '#7C7C7C', marginTop: 5, marginBottom: 15 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  qtyContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 40, height: 40, borderRadius: 15, borderWidth: 1, borderColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center' },
  qtyText: { fontSize: 16, fontWeight: 'bold', color: '#181B19', marginHorizontal: 15 },
  itemPrice: { fontSize: 18, fontWeight: 'bold', color: '#181B19' },
  divider: { height: 1, backgroundColor: '#E2E2E2' },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFF', paddingHorizontal: 25, paddingTop: 10, paddingBottom: 30 },
  checkoutBtn: { backgroundColor: '#53B175', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 18, borderRadius: 15 },
  checkoutText: { color: '#FFF', fontSize: 18, fontWeight: 'bold', flex: 1, textAlign: 'center', paddingLeft: 40 },
  totalPriceBadge: { backgroundColor: '#489E67', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 8, marginRight: 15 },
  totalPriceText: { color: '#FFF', fontSize: 14, fontWeight: 'bold' }
});