import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function NumberScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#1A1A1A" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your mobile number</Text>
        
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputContainer}>
          {/* Thay bằng icon cờ hoặc text */}
          <Text style={styles.countryCode}>🇧🇩 +880</Text>
          <TextInput 
            style={styles.input} 
            placeholder="" 
            keyboardType="phone-pad"
            autoFocus={true}
          />
        </View>

        {/* Nút FAB màu xanh góc phải */}
        <View style={styles.fabContainer}>
          <TouchableOpacity 
            style={styles.fab}
            onPress={() => navigation.navigate('Verification')}
          >
            <Ionicons name="chevron-forward" size={28} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCFCFC' },
  backBtn: { padding: 20 },
  content: { paddingHorizontal: 25, paddingTop: 20, flex: 1 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 30 },
  label: { fontSize: 16, color: '#7C7C7C', marginBottom: 10 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10, marginBottom: 40 },
  countryCode: { fontSize: 18, color: '#1A1A1A', marginRight: 10 },
  input: { flex: 1, fontSize: 18, color: '#1A1A1A' },
  fabContainer: { alignItems: 'flex-end', marginTop: 20 },
  fab: { width: 65, height: 65, backgroundColor: '#53B175', borderRadius: 32.5, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 }
});