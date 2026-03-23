import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Dùng icon của Expo vector-icons
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'; 

export default function SignInScreen() {
  // State để ẩn/hiện mật khẩu
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* 1. Ảnh minh họa Sign In */}
        <Image 
          source={require('../../assets/anh2.png')} 
          style={styles.image}
          resizeMode="contain"
        />

        {/* 2. Tiêu đề - Canh trái giống thiết kế */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>SIGN IN</Text>
        </View>

        {/* 3. Các ô nhập liệu (Input Fields) */}
        <View style={styles.form}>
          {/* Ô Email - Có icon thư */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="mail-outline" size={24} color="#A0A0A0" style={styles.inputIcon} />
            <TextInput 
              placeholder="Email" 
              placeholderTextColor="#A0A0A0" 
              style={styles.input}
              keyboardType="email-address"
            />
          </View>

          {/* Ô Password - Có icon khóa và icon mắt ẩn/hiện */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="#A0A0A0" style={styles.inputIcon} />
            <TextInput 
              placeholder="Password" 
              placeholderTextColor="#A0A0A0" 
              style={styles.input}
              secureTextEntry={secureText} // Trạng thái ẩn/hiện
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Ionicons name={secureText ? "eye-outline" : "eye-off-outline"} size={24} color="#A0A0A0" />
            </TouchableOpacity>
          </View>

          {/* Quên mật khẩu - Canh phải */}
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* 4. Nút Sign In và các lựa chọn khác */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Or sign in with</Text>

          {/* Các nút mạng xã hội - Bo tròn màu xanh giống thiết kế */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="google" size={24} color="#4285F4" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={24} color="#3B5998" />
            </TouchableOpacity>
          </View>

          {/* Dòng chữ Đăng ký ở cuối */}
          <View style={styles.signUpContainer}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { paddingBottom: 30 },
  image: { width: '100%', height: 220, marginTop: 20, marginBottom: 30 },
  headerContainer: { paddingHorizontal: 30, alignItems: 'flex-start', marginBottom: 30 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1A1A1A' },
  form: { paddingHorizontal: 30, marginBottom: 30 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 15, paddingHorizontal: 20, paddingVertical: 18, marginBottom: 20 },
  inputIcon: { marginRight: 15 },
  input: { flex: 1, fontSize: 16, color: '#1A1A1A' },
  forgotPassword: { alignItems: 'flex-end', marginTop: 5 },
  forgotText: { fontSize: 14, color: '#A0A0A0', fontWeight: '500' },
  actionContainer: { paddingHorizontal: 30, alignItems: 'center' },
  signInButton: { backgroundColor: '#FF6B6B', width: '100%', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginBottom: 25 },
  signInText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  orText: { fontSize: 14, color: '#A0A0A0', marginBottom: 20 },
  socialContainer: { flexDirection: 'row', marginBottom: 30 },
  socialButton: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', marginHorizontal: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  signUpContainer: { flexDirection: 'row', alignItems: 'center' },
  noAccountText: { fontSize: 15, color: '#666' },
  signUpText: { fontSize: 15, color: '#FF6B6B', fontWeight: 'bold' }
});