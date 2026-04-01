import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'; // Đã xóa Image
import { SafeAreaView } from 'react-native-safe-area-context';
// Thêm FontAwesome5 vào dòng import để sử dụng icon củ cà rốt
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

export default function SignUpScreen({ navigation }) {
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* --- KHỐI LOGO --- */}
        <View style={styles.logoContainer}>
          {/* SỬA ĐỔI: Thay Image bằng Icon FontAwesome5 củ cà rốt màu cam */}
          <FontAwesome5 
            name="carrot" 
            size={55}          // Kích thước tương đương ảnh cũ
            color="#F3603F"   // Màu cam của cà rốt
          />
        </View>

        {/* Sửa typo: Sing up -> Sign up */}
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Afsar Hossen Shuvo" 
            placeholderTextColor="#1A1A1A" 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputRow}>
            <TextInput 
              style={[styles.input, { flex: 1, borderBottomWidth: 0, paddingBottom: 0 }]} 
              placeholder="imshuvo97@gmail.com" 
              placeholderTextColor="#1A1A1A" 
              keyboardType="email-address" 
            />
            <Ionicons name="checkmark" size={24} color="#53B175" />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputRow}>
            <TextInput 
              style={[styles.input, { flex: 1, borderBottomWidth: 0, paddingBottom: 0 }]} 
              placeholder="********" 
              placeholderTextColor="#1A1A1A" 
              secureTextEntry={secureText} 
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Ionicons 
                name={secureText ? "eye-off-outline" : "eye-outline"} 
                size={20} 
                color="#7C7C7C" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By continuing you agree to our </Text>
          <Text style={styles.termsLink}>Terms of Service</Text>
          <Text style={styles.termsText}> and </Text>
          <Text style={styles.termsLink}>Privacy Policy.</Text>
        </View>

        <TouchableOpacity style={styles.signupBtn}>
          {/* Sửa typo: Sing Up -> Sign Up */}
          <Text style={styles.signupBtnText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            {/* Sửa typo: Singin -> Sign in */}
            <Text style={styles.loginLink}>Sign in</Text>
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
  // Đã xóa styles.logo vì size của icon được quản lý ở prop trực tiếp
  title: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#7C7C7C', marginBottom: 40 },
  inputContainer: { marginBottom: 30 },
  label: { fontSize: 16, color: '#7C7C7C', marginBottom: 10, fontWeight: '500' },
  input: { fontSize: 18, color: '#1A1A1A', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10 },
  inputRow: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10 },
  termsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 30 },
  termsText: { fontSize: 14, color: '#7C7C7C', lineHeight: 22 },
  termsLink: { fontSize: 14, color: '#53B175', fontWeight: '500', lineHeight: 22 },
  signupBtn: { backgroundColor: '#53B175', width: '100%', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginBottom: 20 },
  signupBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  loginRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },
  loginText: { fontSize: 14, color: '#1A1A1A', fontWeight: '500' },
  loginLink: { fontSize: 14, color: '#53B175', fontWeight: 'bold' }
});