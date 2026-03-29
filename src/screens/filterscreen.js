import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function FilterScreen({ navigation }) {
  // State quản lý các mục đang được chọn (chọn nhiều)
  const [selectedCategories, setSelectedCategories] = useState(['Eggs', 'Noodles & Pasta']);
  const [selectedBrands, setSelectedBrands] = useState(['Individual Collection']);

  // Hàm mô phỏng checkbox
  const toggleCategory = (item) => {
    setSelectedCategories(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };
  const toggleBrand = (item) => {
    setSelectedBrands(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const CheckboxItem = ({ label, isSelected, onPress }) => (
    <TouchableOpacity style={styles.checkboxRow} onPress={onPress}>
      <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
        {isSelected && <Ionicons name="checkmark" size={18} color="#FFF" />}
      </View>
      <Text style={[styles.checkboxLabel, isSelected && styles.checkboxLabelSelected]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header có nút X để đóng */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
          <Ionicons name="close" size={28} color="#181B19" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 28 }} /> 
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Section: Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        {['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'].map(item => (
          <CheckboxItem 
            key={item} 
            label={item} 
            isSelected={selectedCategories.includes(item)} 
            onPress={() => toggleCategory(item)} 
          />
        ))}

        {/* Section: Brand */}
        <Text style={styles.sectionTitle}>Brand</Text>
        {['Individual Collection', 'Cocacola', 'Ifad', 'Kazi Farmas'].map(item => (
          <CheckboxItem 
            key={item} 
            label={item} 
            isSelected={selectedBrands.includes(item)} 
            onPress={() => toggleBrand(item)} 
          />
        ))}
      </ScrollView>

      {/* Nút Apply */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.applyBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.applyText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  closeBtn: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181B19' },
  content: { paddingHorizontal: 25, paddingTop: 30, paddingBottom: 100, backgroundColor: '#F2F3F2', flexGrow: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#181B19', marginBottom: 20, marginTop: 10 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkbox: { width: 24, height: 24, borderRadius: 8, borderWidth: 1.5, borderColor: '#B1B1B1', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  checkboxSelected: { backgroundColor: '#53B175', borderColor: '#53B175' },
  checkboxLabel: { fontSize: 16, color: '#181B19' },
  checkboxLabelSelected: { color: '#53B175', fontWeight: 'bold' },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#F2F3F2', paddingHorizontal: 25, paddingTop: 10, paddingBottom: 30 },
  applyBtn: { backgroundColor: '#53B175', paddingVertical: 18, borderRadius: 15, alignItems: 'center' },
  applyText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});