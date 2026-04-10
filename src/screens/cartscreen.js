import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Dữ liệu ban đầu
const initialCartData = [
  { id: '1', name: 'Bell Pepper Red', desc: '1kg, Price', price: 4.99, qty: 1, image: require('../assets/anh15.png') },
  { id: '2', name: 'Organic Bananas', desc: '7pcs, Price', price: 4.99, qty: 1, image: require('../assets/anh13.png') },
  { id: '3', name: 'Ginger', desc: '250gm, Price', price: 4.99, qty: 1, image: require('../assets/anh16.png') },
  { id: '4', name: 'Diet Coke', desc: '355ml, Price', price: 1.99, qty: 1, image: require('../assets/anh7.png') }
];

export default function CartScreen({ navigation }) {
  // --- 1. STATE QUẢN LÝ GIỎ HÀNG ---
  const [cartItems, setCartItems] = useState(initialCartData);

  // --- 2. STATE QUẢN LÝ MODAL THANH TOÁN ---
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'success', 'error'

  // --- CÁC HÀM XỬ LÝ GIỎ HÀNG ---
  const increaseQty = (id) => {
    setCartItems(prevItems => prevItems.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCartItems(prevItems => prevItems.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item));
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    return total.toFixed(2);
  };

  // --- HÀM XỬ LÝ THANH TOÁN (MÔ PHỎNG API) ---
  const handlePlaceOrder = () => {
    setCheckoutVisible(false); // Đóng bảng checkout
    
    // Giả lập xử lý thanh toán 0.5 giây
    setTimeout(() => {
      const isSuccess = Math.random() >= 0.5; // Tỷ lệ 50/50
      if (isSuccess) {
        setPaymentStatus('success');
      } else {
        setPaymentStatus('error');
      }
    }, 500);
  };

  // --- COMPONENT RENDER ITEM CHO FLATLIST ---
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Image source={item.image} style={styles.img} resizeMode="contain" />
      <View style={styles.itemContent}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeBtn}>
            <Ionicons name="close" size={20} color="#7C7C7C" />
          </TouchableOpacity>
        </View>
        <Text style={styles.desc}>{item.desc}</Text>
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
          <Text style={styles.itemTotalPrice}>${(item.price * item.qty).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );

  // --- COMPONENT RENDER TỪNG DÒNG TRONG CHECKOUT ---
  const CheckoutRow = ({ title, value, icon, showArrow = true }) => (
    <View style={styles.checkoutRow}>
      <Text style={styles.rowTitle}>{title}</Text>
      <View style={styles.rowRight}>
        {icon && <Ionicons name={icon} size={20} color="#FF8C00" style={{ marginRight: 5 }} />}
        <Text style={styles.rowValue}>{value}</Text>
        {showArrow && <Ionicons name="chevron-forward" size={20} color="#181725" style={{ marginLeft: 10 }} />}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {/* DANH SÁCH SẢN PHẨM */}
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      {/* NÚT MỞ BẢNG CHECKOUT */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.checkoutBtn} onPress={() => setCheckoutVisible(true)}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>${calculateTotal()}</Text>
          </View>
        </TouchableOpacity>
      </View>


      {/* ================= 1. MODAL CHECKOUT (Bottom Sheet) ================= */}
      <Modal visible={isCheckoutVisible} animationType="slide" transparent={true}>
        <View style={styles.bottomSheetOverlay}>
          <View style={styles.bottomSheetContainer}>
            <View style={styles.bottomSheetHeader}>
              <Text style={styles.bottomSheetTitle}>Checkout</Text>
              <TouchableOpacity onPress={() => setCheckoutVisible(false)}>
                <Ionicons name="close" size={28} color="#181725" />
              </TouchableOpacity>
            </View>

            <CheckoutRow title="Delivery" value="Select Method" />
            <CheckoutRow title="Payment" value="**** 4242" icon="card-outline" />
            <CheckoutRow title="Promo Code" value="Pick discount" />
            <CheckoutRow title="Total Cost" value={`$${calculateTotal()}`} showArrow={false} />

            <Text style={styles.termsText}>
              By placing an order you agree to our <Text style={{ fontWeight: 'bold' }}>Terms And Conditions</Text>
            </Text>

            <TouchableOpacity style={styles.placeOrderBtn} onPress={handlePlaceOrder}>
              <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* ================= 2. MODAL KẾT QUẢ THANH TOÁN ================= */}
      <Modal visible={paymentStatus !== null} animationType="fade" transparent={true}>
        <View style={styles.resultOverlay}>
          <View style={styles.resultContent}>
            
            {/* THÀNH CÔNG */}
            {paymentStatus === 'success' ? (
              <>
                <Image source={require('../assets/tc.png')} style={styles.statusImage} resizeMode="contain" />
                <Text style={styles.statusTitle}>Your Order has been accepted</Text>
                <Text style={styles.statusMessage}>Your items has been placed and is on it's way to being processed</Text>
                
                <TouchableOpacity style={styles.successBtn} onPress={() => { setPaymentStatus(null); navigation.navigate('Cart'); }}>
                  <Text style={styles.btnTextWhite}>Track Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backHomeBtn} onPress={() => { setPaymentStatus(null); navigation.navigate('Shop'); }}>
                  <Text style={styles.btnTextBlack}>Back to home</Text>
                </TouchableOpacity>
              </>
            ) : (
            
            /* THẤT BẠI */
              <>
                <Image source={require('../assets/loi.png')} style={styles.statusImage} resizeMode="contain" />
                <Text style={styles.statusTitle}>Oops! Order Failed</Text>
                <Text style={styles.statusMessage}>Something went terribly wrong.</Text>
                
                <TouchableOpacity style={styles.errorBtn} onPress={() => setPaymentStatus(null)}>
                  <Text style={styles.btnTextWhite}>Please Try Again</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backHomeBtn} onPress={() => { setPaymentStatus(null); navigation.navigate('Shop'); }}>
                  <Text style={styles.btnTextBlack}>Back to home</Text>
                </TouchableOpacity>
              </>
            )}

          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

// ================= STYLES =================
const styles = StyleSheet.create({
  // Styles cũ của Giỏ hàng
  container: { flex: 1, backgroundColor: '#FFF' },
  headerContainer: { paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#E2E2E2', alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181B19' },
  listContainer: { paddingHorizontal: 25, paddingBottom: 20 },
  itemRow: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingVertical: 20 },
  img: { width: 70, height: 70, marginRight: 20 },
  itemContent: { flex: 1 },
  nameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#181B19', flex: 1, marginRight: 10 },
  removeBtn: { padding: 2 },
  desc: { fontSize: 14, color: '#7C7C7C', marginTop: 5, marginBottom: 15 },
  bottomContentRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  qtyContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 35, height: 35, borderRadius: 12, borderWidth: 1, borderColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' },
  qtyText: { fontSize: 16, fontWeight: '600', marginHorizontal: 15, color: '#181B19' },
  itemTotalPrice: { fontSize: 18, fontWeight: 'bold', color: '#181B19' },
  bottomBar: { paddingHorizontal: 25, paddingTop: 10, paddingBottom: 25, backgroundColor: '#FFF' },
  checkoutBtn: { flexDirection: 'row', backgroundColor: '#53B175', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 15, alignItems: 'center', justifyContent: 'center', position: 'relative' },
  checkoutText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  totalBadge: { position: 'absolute', right: 20, backgroundColor: 'rgba(0, 0, 0, 0.15)', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 },
  totalBadgeText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },

  // --- Styles mới cho Checkout Modal ---
  bottomSheetOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  bottomSheetContainer: { backgroundColor: '#F2F3F2', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25, paddingBottom: 40 },
  bottomSheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  bottomSheetTitle: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  checkoutRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 18, borderTopWidth: 1, borderColor: '#E2E2E2' },
  rowTitle: { fontSize: 18, color: '#7C7C7C', fontWeight: '600' },
  rowRight: { flexDirection: 'row', alignItems: 'center' },
  rowValue: { fontSize: 16, color: '#181725', fontWeight: 'bold' },
  termsText: { fontSize: 14, color: '#7C7C7C', marginTop: 15, marginBottom: 25, lineHeight: 22 },
  placeOrderBtn: { backgroundColor: '#53B175', borderRadius: 19, paddingVertical: 18, alignItems: 'center' },
  placeOrderText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },

  // --- Styles mới cho Result Modal ---
  resultOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  resultContent: { width: '85%', backgroundColor: '#FFF', borderRadius: 20, padding: 30, alignItems: 'center' },
  statusImage: { width: 180, height: 180, marginBottom: 20 },
  statusTitle: { fontSize: 24, fontWeight: 'bold', color: '#181725', textAlign: 'center', marginBottom: 15 },
  statusMessage: { fontSize: 16, color: '#7C7C7C', textAlign: 'center', marginBottom: 30, lineHeight: 22 },
  successBtn: { backgroundColor: '#53B175', width: '100%', paddingVertical: 18, borderRadius: 19, alignItems: 'center', marginBottom: 15 },
  errorBtn: { backgroundColor: '#181725', width: '100%', paddingVertical: 18, borderRadius: 19, alignItems: 'center', marginBottom: 15 },
  backHomeBtn: { paddingVertical: 15, width: '100%', alignItems: 'center' },
  btnTextWhite: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  btnTextBlack: { color: '#181725', fontSize: 18, fontWeight: 'bold' }
});