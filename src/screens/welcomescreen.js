import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'; // Đã xóa Image
import { FontAwesome5 } from '@expo/vector-icons'; // Thêm import FontAwesome5

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../assets/anh1.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Thay thế thẻ Image bằng Icon FontAwesome5 */}
        <FontAwesome5 name="carrot" size={48} color="#d96a10" style={styles.carrotIcon} />  
        
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

        <TouchableOpacity 
          style={styles.button}
          // ĐÃ FIX: Chuyển sang 'Login' thay vì 'SignIn'
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.4)', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    paddingHorizontal: 30, 
    paddingBottom: 60 
  },
  // Đổi tên style thành carrotIcon và chỉ giữ lại marginBottom (size và màu đã được quản lý ở prop)
  carrotIcon: { 
    marginBottom: 15 
  },
  title: { 
    fontSize: 42, 
    fontWeight: 'bold', 
    color: '#FFF', 
    textAlign: 'center', 
    lineHeight: 48 
  },
  subtitle: { 
    fontSize: 16, 
    color: 'rgba(255,255,255,0.85)', 
    textAlign: 'center', 
    marginTop: 15, 
    marginBottom: 40 
  },
  button: { 
    backgroundColor: '#53B175', 
    width: '100%', 
    paddingVertical: 18, 
    borderRadius: 15, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  }
});