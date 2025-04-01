import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFF1",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: width * 0.05,
      }}
    >
      {/* App Name */}
      <View style={{ position: "absolute", top: height * 0.08, right: width * 0.05 }}>
        <Text style={{ fontSize: 32, fontWeight: "600", color: "#000", fontFamily:"PlayfairDisplay_400Regular" }}>
          StudySmart
        </Text>
      </View>

      {/* White Box Container */}
      <View
        style={{
          width: "90%",
          maxWidth: 400,
          backgroundColor: "#FFF",
          borderRadius: 20,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center", marginBottom: 5, fontFamily:"PlayfairDisplay_400Regular" }}>
          Welcome Back!
        </Text>
        <Text style={{ fontSize: 14, color: "#666", textAlign: "center", marginBottom: 20, fontFamily:"Inconsolata_400Regular" }}>
          let's get started
        </Text>

        {/* Email Input Field */}
        <Text style={{ marginLeft: 15, color: "#000", marginBottom: 5, fontFamily:"Inconsolata_400Regular" }}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#666"
          style={{
            width: "100%",
            padding: 15,
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 40,
            backgroundColor: "white",
            fontSize: 16,
            fontFamily:"Inconsolata_400Regular",
          }}
        />

        {/* Password Input Field */}
        <Text style={{ marginLeft: 15, color: "#000", marginBottom: 5, marginTop: 10, fontFamily:"Inconsolata_400Regular" }}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#666"
          secureTextEntry
          style={{
            width: "100%",
            padding: 15,
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 40,
            backgroundColor: "white",
            fontSize: 16,
            fontFamily:"Inconsolata_400Regular"
          }}
        />

        {/* Forgot Password */}
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginVertical: 10 }}
          onPress={() => navigation.navigate("Forgotpass")}
        >
          <Text style={{ color: "#566D67", textDecorationLine: "underline", fontFamily:"Inconsolata_400Regular" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Homescreen")}
          style={{
            backgroundColor: "#000",
            padding: 15,
            borderRadius: 40,
            alignItems: "center",
            width: "100%",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontFamily:"Inconsolata_400Regular" }}>Login</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
          <Text style={{ color: "#555", fontFamily:"Inconsolata_400Regular" }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ color: "#566D67", fontWeight: "bold", textDecorationLine: "underline", fontFamily:"Inconsolata_400Regular" }}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;