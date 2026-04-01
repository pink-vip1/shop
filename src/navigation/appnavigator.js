import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import luồng Khởi động & Xác thực
import WelcomeScreen from '../screens/welcomescreen';
import SignInScreen from '../screens/signinscreen';
import NumberScreen from '../screens/numberscreen';
import VerificationScreen from '../screens/verificationscreen';
import LocationScreen from '../screens/locationscreen';
import LoginScreen from '../screens/loginscreen';
import SignUpScreen from '../screens/signupscreen'; // Luồng đăng ký phụ

// Import Main App & Các màn hình chi tiết
import BottomTabNavigator from './bottomtabnavigator';
import ProductDetailScreen from '../screens/productdetailscreen';
import BeveragesScreen from '../screens/beveragesscreen';
import FilterScreen from '../screens/filterscreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        
        {/* --- LUỒNG XÁC THỰC CHÍNH --- */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* --- LUỒNG ĐĂNG KÝ PHỤ --- */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        {/* --- APP CHÍNH (Sau khi Login thành công) --- */}
        {/* MainApp chính là thanh Tab chứa Home, Explore, Cart... */}
        <Stack.Screen name="MainApp" component={BottomTabNavigator} />

        {/* --- CÁC MÀN HÌNH CHI TIẾT SẢN PHẨM --- */}
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} options={{ presentation: 'modal' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}