import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        <View style={styles.logoContainer}>
            <Image 
               source={require('../../assets/crot.png') } 
              style={styles.carrot} 
              resizeMode="contain" 
            />  
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
              style={[styles.input, { flex: 1 }]} 
              placeholder="********"
              placeholderTextColor="#1A1A1A"
              secureTextEntry={secureText}
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <Ionicons name={secureText ? "eye-off-outline" : "eye-outline"} size={20} color="#7C7C7C" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
        </TouchableOpacity>

       <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Home')} 
        >
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an account? </Text>
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
  content: { paddingHorizontal: 25, paddingTop: 30 },
  logoContainer: { alignItems: 'center', marginBottom: 50 },
  logo: { width: 55, height: 55 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#7C7C7C', marginBottom: 40 },
  inputContainer: { marginBottom: 30 },
  label: { fontSize: 16, color: '#7C7C7C', marginBottom: 10, fontWeight: '500' },
  input: { fontSize: 18, color: '#1A1A1A', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10 },
  passwordRow: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10 },
  forgotPass: { alignItems: 'flex-end', marginBottom: 30 },
  forgotPassText: { color: '#1A1A1A', fontSize: 14, fontWeight: '500' },
  loginBtn: { backgroundColor: '#53B175', width: '100%', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginBottom: 20 },
  loginBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  signupRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },
  signupText: { fontSize: 14, color: '#1A1A1A', fontWeight: '500' },
  signupLink: { fontSize: 14, color: '#53B175', fontWeight: 'bold' }
});