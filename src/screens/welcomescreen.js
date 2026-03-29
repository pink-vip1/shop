import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../../assets/anh1.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        
        <Image 
          source={require('../../assets/crot.png') } 
          style={styles.carrot} 
        />  
        
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')} 
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { 
    flex: 1 
  },
  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.4)', // Phủ lớp đen mờ 40%
    justifyContent: 'flex-end', 
    alignItems: 'center',
    paddingHorizontal: 30, 
    paddingBottom: 60 
  },
  carrot: { 
    width: 48, 
    height: 48, 
    marginBottom: 15, 
    tintColor: '#FFF' // Ép icon thành màu trắng tinh
  },
  title: { 
    fontSize: 42, 
    fontWeight: 'bold', 
    color: '#FFF', 
    textAlign: 'center',
    lineHeight: 48 
  },
  subtitle: { 
    fontSize: 16, 
    color: 'rgba(255,255,255,0.85)', 
    textAlign: 'center', 
    marginTop: 15, 
    marginBottom: 40 
  },
  button: { 
    backgroundColor: '#53B175', 
    width: '100%', 
    paddingVertical: 18, 
    borderRadius: 15, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  }
});