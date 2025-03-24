import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 36, fontWeight: "bold", color: "white", marginBottom: 30 }}>📚 StudyMate</Text>

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

        <TouchableOpacity>
          <Text style={{ color: "white", textAlign: "right", marginBottom: 15 }}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
              backgroundColor: "#2563eb",
              padding: 15,
              borderRadius: 10,
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
          <Text style={{ color: "white" }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "#93c5fd", fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
