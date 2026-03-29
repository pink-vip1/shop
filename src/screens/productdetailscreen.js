import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

export default function ProductDetailScreen({ navigation }) {
  // State để quản lý số lượng và trạng thái yêu thích (thả tim)
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Hàm tăng giảm số lượng
  const decreaseQuantity = () => { if (quantity > 1) setQuantity(quantity - 1); };
  const increaseQuantity = () => { setQuantity(quantity + 1); };

  return (
    <View style={styles.container}>
      {/* Nút Back và Share nổi trên ảnh */}
      <SafeAreaView style={styles.headerAbsolute}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={28} color="#181B19" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="share-outline" size={28} color="#181B19" />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* Phần background ảnh sản phẩm */}
        <View style={styles.imageBackground}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' }} // Đang dùng ảnh táo đỏ/cà rốt tạm
            style={styles.productImage} 
            resizeMode="contain" 
          />
        </View>

        {/* Nội dung chi tiết */}
        <View style={styles.detailsContainer}>
          {/* Tên và Nút thả tim */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>Naturel Red Apple</Text>
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              <Ionicons 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={28} 
                color={isFavorite ? "#FF6B6B" : "#7C7C7C"} 
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>1kg, Price</Text>

          {/* Hàng chọn số lượng & Giá tiền */}
          <View style={styles.priceRow}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity}>
                <Ionicons name="remove" size={28} color="#B3B3B3" />
              </TouchableOpacity>
              <View style={styles.quantityBox}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={increaseQuantity}>
                <Ionicons name="add" size={28} color="#53B175" />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>$4.99</Text>
          </View>

          {/* Dòng phân cách */}
          <View style={styles.divider} />

          {/* Phần Product Detail */}
          <View style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <Ionicons name="chevron-down" size={24} color="#181B19" />
          </View>
          <Text style={styles.productDescription}>
            Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.
          </Text>

          <View style={styles.divider} />

          {/* Phần Nutritions */}
          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Nutritions</Text>
            <View style={styles.badgeRow}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>100gr</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#181B19" />
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Phần Review */}
          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Review</Text>
            <View style={styles.badgeRow}>
              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Ionicons key={star} name="star" size={18} color="#F3603F" style={{ marginLeft: 2 }} />
                ))}
              </View>
              <Ionicons name="chevron-forward" size={24} color="#181B19" />
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* Nút Thêm vào giỏ hàng dính ở đáy */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.addCartBtn}>
          <Text style={styles.addCartText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  headerAbsolute: { 
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, 
    flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10 
  },
  iconBtn: { padding: 5 },
  imageBackground: { 
    backgroundColor: '#F2F3F2', 
    height: height * 0.4, 
    borderBottomLeftRadius: 40, 
    borderBottomRightRadius: 40,
    justifyContent: 'center', alignItems: 'center',
    paddingTop: 40
  },
  productImage: { width: 250, height: 250 },
  detailsContainer: { paddingHorizontal: 25, paddingTop: 25, paddingBottom: 100 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#181B19', flex: 1, marginRight: 10 },
  subtitle: { fontSize: 16, color: '#7C7C7C', marginTop: 5, fontWeight: '600' },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginBottom: 20 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  quantityBox: { width: 45, height: 45, borderRadius: 15, borderWidth: 1, borderColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center', marginHorizontal: 15 },
  quantityText: { fontSize: 18, fontWeight: '600', color: '#181B19' },
  price: { fontSize: 24, fontWeight: 'bold', color: '#181B19' },
  divider: { height: 1, backgroundColor: '#E2E2E2', marginVertical: 15 },
  accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 },
  accordionTitle: { fontSize: 16, fontWeight: '600', color: '#181B19' },
  productDescription: { fontSize: 14, color: '#7C7C7C', lineHeight: 22, marginTop: 10 },
  badgeRow: { flexDirection: 'row', alignItems: 'center' },
  badge: { backgroundColor: '#EBEBEB', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 8, marginRight: 15 },
  badgeText: { color: '#7C7C7C', fontSize: 12, fontWeight: '600' },
  starsRow: { flexDirection: 'row', marginRight: 15 },
  bottomBar: { 
    position: 'absolute', bottom: 0, left: 0, right: 0, 
    backgroundColor: '#FFF', paddingHorizontal: 25, paddingTop: 10, paddingBottom: 30 
  },
  addCartBtn: { backgroundColor: '#53B175', paddingVertical: 18, borderRadius: 15, alignItems: 'center' },
  addCartText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});