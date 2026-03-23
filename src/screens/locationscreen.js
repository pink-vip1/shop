import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function SelectLocationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#1A1A1A" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/854/854878.png' }} 
          style={styles.mapImage} 
        />
        
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>Swithch on your location to stay in tune with what's happening in your area</Text>

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Your Zone</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} value="Banasree" editable={false} />
            <Ionicons name="chevron-down" size={20} color="#7C7C7C" />
          </View>
        </View>

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Your Area</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Types of your area" placeholderTextColor="#B1B1B1" editable={false} />
            <Ionicons name="chevron-down" size={20} color="#7C7C7C" />
          </View>
        </View>

        <TouchableOpacity 
          style={styles.submitBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCFCFC' },
  backBtn: { padding: 20 },
  content: { paddingHorizontal: 25, alignItems: 'center' },
  mapImage: { width: 150, height: 150, marginBottom: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 15 },
  subtitle: { fontSize: 16, color: '#7C7C7C', textAlign: 'center', lineHeight: 22, marginBottom: 40 },
  dropdownContainer: { width: '100%', marginBottom: 25 },
  label: { fontSize: 16, color: '#7C7C7C', marginBottom: 10, fontWeight: '500' },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10 },
  input: { flex: 1, fontSize: 18, color: '#1A1A1A' },
  submitBtn: { backgroundColor: '#53B175', width: '100%', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginTop: 30 },
  submitBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});