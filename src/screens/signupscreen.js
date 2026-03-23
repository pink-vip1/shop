// File: src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }) {
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2909/2909808.png' }} style={styles.logo} />
        </View>

        {/* Tiêu đề "Sing up" */}
        <Text style={styles.title}>Sing up</Text>
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>

        {/* Form nhập liệu */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="Afsar Hossen Shuvo" placeholderTextColor="#1A1A1A" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="imshuvo97@gmail.com" placeholderTextColor="#1A1A1A" keyboardType="email-address" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputRow}>
            <TextInput style={[styles.input, { flex: 1, borderBottomWidth: 0 }]} placeholder="********" placeholderTextColor="#1A1A1A" secureTextEntry={secureText} />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Ionicons name={secureText ? "eye-off-outline" : "eye-outline"} size={20} color="#7C7C7C" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Đoạn text Điều khoản */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By continuing you agree to our </Text>
          <Text style={styles.termsLink}>Terms of Service</Text>
          <Text style={styles.termsText}> and </Text>
          <Text style={styles.termsLink}>Privacy Policy.</Text>
        </View>

        {/* Nút "Sing Up" màu xanh lá */}
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupBtnText}>Sing Up</Text>
        </TouchableOpacity>

        {/* Chữ "Singin" ở cuối */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Singin</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { paddingHorizontal: 25, paddingTop: 30 },
  logoContainer: { alignItems: 'center', marginBottom: 50 },
  logo: { width: 50, height: 50 },
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