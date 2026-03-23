import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Phần ảnh lớn trên đỉnh - Giống y hệt thiết kế */}
      <Image 
        source={require('../../assets/anh1.png')} 
        style={styles.image}
        resizeMode="cover"
      />

      {/* 2. Phần nội dung chữ và dấu chấm */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>WELCOME TO EDUCATION</Text>
        <Text style={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit.
        </Text>
        
        {/* Các dấu chấm phân trang (Dots) - Dấu thứ 1 đang active */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* 3. Nút Get Started màu cam nổi bật ở dưới đáy */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')} // Bấm để sang màn hình Sign In
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  image: { width: width, height: width * 1.1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  contentContainer: { flex: 1, alignItems: 'center', paddingHorizontal: 30, paddingTop: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 15, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 22 },
  dotsContainer: { flexDirection: 'row', marginTop: 25 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E0E0E0', marginHorizontal: 4 },
  activeDot: { width: 20, backgroundColor: '#FF6B6B' }, // Màu cam/coral của thiết kế
  buttonContainer: { paddingHorizontal: 30, paddingBottom: 30 },
  button: { backgroundColor: '#FF6B6B', paddingVertical: 18, borderRadius: 15, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});