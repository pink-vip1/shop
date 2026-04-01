import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        <View style={styles.logoContainer}>
          <FontAwesome5 name="carrot" size={55} color="#F3603F" />
        </View>
        
        <Text style={styles.title}>Loging</Text>
        <Text style={styles.subtitle}>Enter your emails and password</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            placeholder="imshuvo97@gmail.com" 
            placeholderTextColor="#1A1A1A" 
            keyboardType="email-address" 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordRow}>
            <TextInput 
              style={[styles.input, { flex: 1, borderBottomWidth: 0, paddingBottom: 0 }]} 
              placeholder="********" 
              secureTextEntry={secureText} 
              placeholderTextColor="#1A1A1A" 
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Ionicons name={secureText ? "eye-off-outline" : "eye-outline"} size={20} color="#7C7C7C" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Nút Forgot Password căn phải */}
        <TouchableOpacity style={styles.forgotPassBtn}>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Đăng nhập */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('MainApp')}>
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableOpacity>
        
        {/* Liên kết đến trang đăng ký */}
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          {/* Điều hướng đến màn hình SignUp */}
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupLink}>Singup</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { paddingHorizontal: 25, paddingTop: 30, paddingBottom: 30 },
  logoContainer: { alignItems: 'center', marginBottom: 50 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#7C7C7C', marginBottom: 40 },
  inputContainer: { marginBottom: 30 },
  label: { fontSize: 16, color: '#7C7C7C', marginBottom: 10, fontWeight: '500' },
  input: { fontSize: 18, color: '#1A1A1A', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10 },
  passwordRow: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10 },
  
  // Các style mới thêm vào
  forgotPassBtn: { alignSelf: 'flex-end', marginBottom: 20 },
  forgotPassText: { fontSize: 14, color: '#1A1A1A', fontWeight: '500' },
  
  loginBtn: { backgroundColor: '#53B175', width: '100%', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginBottom: 25 },
  loginBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  
  signupRow: { flexDirection: 'row', justifyContent: 'center' },
  signupText: { fontSize: 14, color: '#1A1A1A', fontWeight: '500' },
  signupLink: { fontSize: 14, color: '#53B175', fontWeight: 'bold' }
});