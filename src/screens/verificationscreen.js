import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function VerificationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#1A1A1A" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your 4-digit code</Text>
        
        <Text style={styles.label}>Code</Text>
        <TextInput 
          style={styles.input} 
          placeholder="- - - -" 
          placeholderTextColor="#7C7C7C"
          keyboardType="number-pad"
          maxLength={4}
          autoFocus={true}
        />

        <View style={styles.bottomRow}>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.fab}
            onPress={() => navigation.navigate('Location')}
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
  input: { fontSize: 24, color: '#1A1A1A', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10, letterSpacing: 5, marginBottom: 40 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  resendText: { fontSize: 18, color: '#53B175', fontWeight: '500' },
  fab: { width: 65, height: 65, backgroundColor: '#53B175', borderRadius: 32.5, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 }
});