import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import 2 màn hình đầu tiên (Onboarding và Sign In)
import WelcomeScreen from '../screens/welcomescreen';
import SignInScreen from '../screens/signinscreen';
import HomeScreen from '../screens/homescreen';

// Import 5 màn hình tiếp theo
import NumberScreen from '../screens/numberscreen';
import VerificationScreen from '../screens/verificationscreen';
import SelectLocationScreen from '../screens/locationscreen';
import LoginScreen from '../screens/loginscreen';
import SignUpScreen from '../screens/signupscreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
      // initialRouteName quy định màn hình nào sẽ hiện lên đầu tiên khi mở App
      initialRouteName="Welcome" 
      screenOptions={{ headerShown: false }} // Ẩn thanh tiêu đề mặc định của Expo
    >
      {/* 2 màn hình đầu */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      
      {/* 5 màn hình sau */}
      <Stack.Screen name="Number" component={numberscreen} />
      <Stack.Screen name="Verification" component={verificationscreen} />
      <Stack.Screen name="SelectLocation" component={locationscreen} />
      <Stack.Screen name="Login" component={loginscreen} />
      <Stack.Screen name="SignUp" component={signupscreen} />
      <Stack.Screen name="Home" component={homescreen} />
    </Stack.Navigator>
  );
}