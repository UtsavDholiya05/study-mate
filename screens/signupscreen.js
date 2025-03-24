import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SignupScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#ff7e5f", "#feb47b"]} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 36, fontWeight: "bold", color: "white", marginBottom: 30 }}>📝 Sign Up</Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#bbb"
          style={{ width: "100%", padding: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, backgroundColor: "white", marginBottom: 10 }}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#bbb"
          style={{ width: "100%", padding: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, backgroundColor: "white", marginBottom: 10 }}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#bbb"
          secureTextEntry
          style={{ width: "100%", padding: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, backgroundColor: "white", marginBottom: 10 }}
        />

        <TouchableOpacity
          style={{ backgroundColor: "#ff4d4d", padding: 15, borderRadius: 10, alignItems: "center" }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
          <Text style={{ color: "white" }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#ffcccb", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignupScreen;
