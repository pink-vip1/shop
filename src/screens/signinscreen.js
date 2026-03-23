import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function SignInScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/anh2.jpg')} style={styles.image} resizeMode="cover" />
      
      <View style={styles.content}>
        <Text style={styles.title}>Get your groceries{'\n'}with nectar</Text>

        <TouchableOpacity style={styles.phoneInput} onPress={() => navigation.navigate('Number')}>
          <Text style={styles.flag}>🇧🇩 +880</Text>
          <Text style={styles.placeholder}>Enter your mobile number</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <Text style={styles.orText}>Or connect with social media</Text>
        </View>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#5383EC' }]}>
          <FontAwesome name="google" size={24} color="#FFF" style={styles.icon} />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#4A66AC' }]}>
          <FontAwesome name="facebook" size={24} color="#FFF" style={styles.icon} />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCFCFC' },
  image: { width: '100%', height: '40%' },
  content: { flex: 1, paddingHorizontal: 25, paddingTop: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 30, lineHeight: 35 },
  phoneInput: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10, marginBottom: 35 },
  flag: { fontSize: 18, marginRight: 15 },
  placeholder: { fontSize: 16, color: '#A0A0A0' },
  dividerContainer: { alignItems: 'center', marginBottom: 35 },
  orText: { color: '#7C7C7C', fontSize: 14, fontWeight: '500' },
  socialBtn: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderRadius: 15, marginBottom: 20, paddingHorizontal: 30 },
  icon: { marginRight: 20, width: 25, textAlign: 'center' },
  socialText: { color: '#FFF', fontSize: 18, fontWeight: '600', flex: 1, textAlign: 'center', paddingRight: 45 }
});