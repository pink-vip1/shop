import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Dữ liệu mẫu các sản phẩm đã thả tim
const favoriteItems = [
  { id: '1', name: 'Sprite Can', desc: '325ml, Price', price: '$1.50', image: 'https://cdn-icons-png.flaticon.com/512/2405/2405479.png' },
  { id: '2', name: 'Diet Coke', desc: '355ml, Price', price: '$1.99', image: 'https://cdn-icons-png.flaticon.com/512/2405/2405479.png' },
  { id: '3', name: 'Apple & Grape Juice', desc: '2L, Price', price: '$5.99', image: 'https://cdn-icons-png.flaticon.com/512/3050/3050116.png' },
  { id: '4', name: 'Coca Cola Can', desc: '325ml, Price', price: '$4.99', image: 'https://cdn-icons-png.flaticon.com/512/2405/2405479.png' },
];

export default function FavoriteScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="contain" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.arrowBtn}>
          <Ionicons name="chevron-forward" size={24} color="#181B19" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorited</Text>
      </View>

      <FlatList 
        data={favoriteItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.addAllBtn}>
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { alignItems: 'center', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181B19' },
  listContainer: { paddingHorizontal: 25, paddingBottom: 100 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 20 },
  itemImage: { width: 60, height: 60, marginRight: 20 },
  itemDetails: { flex: 1, justifyContent: 'center' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#181B19', marginBottom: 5 },
  itemDesc: { fontSize: 14, color: '#7C7C7C' },
  priceRow: { flexDirection: 'row', alignItems: 'center' },
  itemPrice: { fontSize: 18, fontWeight: 'bold', color: '#181B19', marginRight: 15 },
  arrowBtn: { padding: 5 },
  divider: { height: 1, backgroundColor: '#E2E2E2' },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFF', paddingHorizontal: 25, paddingTop: 10, paddingBottom: 30 },
  addAllBtn: { backgroundColor: '#53B175', paddingVertical: 18, borderRadius: 15, alignItems: 'center' },
  addAllText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});