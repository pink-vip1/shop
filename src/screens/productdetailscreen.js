import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

// Thư viện Icon Star
const StarIcon = ({ filled }) => (
  <Ionicons name={filled ? "star" : "star-outline"} size={16} color={filled ? "#F3603F" : "#C4C4C4"} style={{ marginRight: 2 }} />
);

export default function ProductDetailScreen({ navigation }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Tạo mảng 5 sao để render
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} filled={i <= rating} />);
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      {/* Header với nút Back và Share nổi trên nền */}
      <SafeAreaView style={styles.headerAbsolute}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={28} color="#181B19" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="share-outline" size={28} color="#181B19" />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Phần nền ảnh sản phẩm với độ cong phía dưới */}
        <View style={styles.imageBg}>
          <Image 
            source={require('../assets/tao.png')} // Sử dụng ảnh local tao.png
            style={styles.img} 
            resizeMode="contain" 
          />
        </View>

        {/* Phần nội dung chi tiết sản phẩm */}
        <View style={styles.details}>
          {/* Hàng tên sản phẩm và nút thả tim */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>Naturel Red Apple</Text>
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              <Ionicons 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={28} 
                color={isFavorite ? "#FF6B6B" : "#7C7C7C"} // Màu xám chuẩn như ảnh
              />
            </TouchableOpacity>
          </View>
          
          {/* Trọng lượng/Mô tả phụ */}
          <Text style={styles.subtitle}>1kg, Price</Text>
          
          {/* Hàng hiển thị giá */}
          <View style={styles.priceRow}>
            <Text style={styles.price}>$4.99</Text>
          </View>
          
          {/* Mô tả sản phẩm tĩnh */}
          <Text style={styles.desc}>Apples are nutritious and good for your heart. Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.</Text>
          
          {/* Đường gạch ngang phân cách */}
          <View style={styles.divider} />
          
          {/* Mục "Product Detail" với Icon Chevron Down */}
          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <Ionicons name="chevron-down" size={24} color="#181B19" />
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          {/* Mục "Nutritions" với Badge trọng lượng và Icon Chevron Forward */}
          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Nutritions</Text>
            <View style={styles.accordionRightRow}>
              <View style={styles.nutritionBadge}><Text style={styles.nutritionBadgeText}>100gr</Text></View>
              <Ionicons name="chevron-forward" size={24} color="#181B19" />
            </View>
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          {/* Mục "Review" với Icon Sao đánh giá và Icon Chevron Forward */}
          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Review</Text>
            <View style={styles.accordionRightRow}>
              <View style={styles.starsContainer}>
                {renderStars(5)} {/* Render 5 sao đánh giá */}
              </View>
              <Ionicons name="chevron-forward" size={24} color="#181B19" />
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* Thanh Bottom Bar cố định phía dưới */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.addCartBtn} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.addCartText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  headerAbsolute: { 
    position: 'absolute', 
    top: 10, 
    left: 20, 
    right: 20, 
    zIndex: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingTop: 5, // Điều chỉnh margin từ trên xuống
  },
  iconBtn: { padding: 5 },
  imageBg: { 
    backgroundColor: '#F2F3F2', 
    height: height * 0.4, 
    borderBottomLeftRadius: 40, // Bo cong góc dưới bên trái
    borderBottomRightRadius: 40, // Bo cong góc dưới bên phải
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 40 // Điều chỉnh khoảng cách cho header tuyệt đối
  },
  img: { width: 250, height: 250 },
  details: { paddingHorizontal: 25, paddingTop: 25, paddingBottom: 100 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#181B19', flex: 1, marginRight: 10 },
  subtitle: { fontSize: 16, color: '#7C7C7C', marginTop: 5, fontWeight: '600' },
  priceRow: { marginVertical: 30 },
  price: { fontSize: 24, fontWeight: 'bold', color: '#181B19' },
  desc: { fontSize: 14, color: '#7C7C7C', lineHeight: 22, marginBottom: 20 },
  divider: { height: 1, backgroundColor: '#E2E2E2', marginVertical: 15 },
  accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 },
  accordionTitle: { fontSize: 16, fontWeight: '600', color: '#181B19' },
  accordionRightRow: { flexDirection: 'row', alignItems: 'center' },
  nutritionBadge: { backgroundColor: '#EBEBEB', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 8, marginRight: 15 },
  nutritionBadgeText: { color: '#7C7C7C', fontSize: 12, fontWeight: '600' },
  starsContainer: { flexDirection: 'row', marginRight: 15 },
  bottomBar: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: '#FFF', 
    paddingHorizontal: 25, 
    paddingTop: 10, 
    paddingBottom: 30, // Điều chỉnh margin cho fixed bottom
  },
  addCartBtn: { backgroundColor: '#53B175', padding: 18, borderRadius: 15, alignItems: 'center' },
  addCartText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});