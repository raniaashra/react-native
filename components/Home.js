
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
export default function Home({ navigation }) {
    return (
        
        <View style={styles.container}>
        <ImageBackground
            source={require('../assets/pexels-louis-2101187.jpg')}
            style={styles.image}
            resizeMode="contain"
            
          >
          </ImageBackground>
          <View style={styles.log}>
        <TouchableOpacity style={styles.loginBtn} onPress ={() => navigation.navigate("Login")}>
          <Text style={styles.loginText} >LOGIN</Text> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.signupBtn} onPress ={() => navigation.navigate("Register")}>
          <Text style={styles.loginText} >SIGN-UP</Text> 
        </TouchableOpacity> 
        </View>
        </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "70%",
        resizeMode: 'cover',
    },
    log: {
        flexDirection:'row',
        justifyContent:'space-around',
    },
    loginBtn: {
      width: "150%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#0E8388",
      marginRight:10,
    },
    signupBtn: {
       width: "150%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#0E8388",
    },
  }
  );