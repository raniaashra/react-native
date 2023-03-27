import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <View style={styles.log}>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.loginText}>SIGN-UP</Text> 
      </TouchableOpacity> 
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 40,
    },
    // inputView: {
    //   backgroundColor: "#D8D8D8",
    //   borderRadius: 30,
    //   width: "30%",
    //   height: 45,
    //   marginBottom: 20,
    //   alignItems: "flex-start",
    // },
    TextInput: {
        backgroundColor: "#D8D8D8",
      height: 50,
      width:"75%",
      marginBottom:10,
      padding: 5,
      marginLeft: 10,
      borderRadius:10
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
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
      marginTop: 40,
      backgroundColor: "#0E8388",
    },
    signupBtn:{
        width: "150%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#0E8388",
    },
}
);