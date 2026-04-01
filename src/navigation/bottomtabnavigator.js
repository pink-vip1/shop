import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/homescreen';
import ExploreScreen from '../screens/explorescreen';
import FavoriteScreen from '../screens/favoritescreen';
import CartScreen from '../screens/cartscreen'; 
import AccountScreen from '../screens/accountscreen'; // Đã thêm AccountScreen

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#53B175', // Màu xanh lá khi active
        tabBarInactiveTintColor: '#181B19', // Màu đen khi không active
        tabBarStyle: { 
          height: 70, 
          paddingBottom: 15, 
          paddingTop: 10, 
          borderTopLeftRadius: 20,  // Bo góc trái
          borderTopRightRadius: 20, // Bo góc phải
          backgroundColor: '#FFF', 
          position: 'absolute',     // Absolute giúp bo góc nổi lên trên nền
          borderTopWidth: 0,
          elevation: 15,            // Đổ bóng cho Android
          shadowColor: '#000',      // Đổ bóng cho iOS
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600', marginTop: -5 },
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Shop') iconName = 'storefront-outline';
          else if (route.name === 'Explore') iconName = 'search-outline';
          else if (route.name === 'Cart') iconName = 'cart-outline';
          else if (route.name === 'Favourite') iconName = 'heart-outline';
          else if (route.name === 'Account') iconName = 'person-outline';
          
          return <Ionicons name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      {/* Đổi tên thành Favourite để giống với ảnh thiết kế */}
      <Tab.Screen name="Favourite" component={FavoriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}