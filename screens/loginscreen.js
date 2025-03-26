import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFF1",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      {/* App Name */}
      <View style={{ position: "absolute", top: 60, right: 10 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "semibold",
            color: "#000000",
            fontFamily: "PlayfairDisplay_400Regular",
          }}
        >
          StudySmart
        </Text>
      </View>

      {/* White Box Container */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
          elevation: 5, // Shadow for Android
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              marginBottom: 5,
              fontFamily: "PlayfairDisplay_400Regular",
            }}
          >
            Welcome Back!
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: "#666",
              textAlign: "center",
              marginBottom: 20,
              fontFamily: "Inconsolata_400Regular",
            }}
          >
            let's get started
          </Text>
        </View>

        {/* Email Input Field */}
        <View style={{ width: "100%", marginBottom: 10 }}>
          <Text
            style={{
              marginLeft: 15,
              color: "#000000",
              fontFamily: "Inconsolata_400Regular",
              marginBottom: 5,
            }}
          >
            Email
          </Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#666" // ✅ Native placeholder text
            style={{
              width: "100%",
              padding: 15,
              borderWidth: 1,
              borderColor: "#000000",
              borderRadius: 40,
              backgroundColor: "white",
              fontSize: 16,
              fontFamily: "Inconsolata_400Regular",
              color: "#000",
            }}
          />
        </View>

        {/* Password Input Field */}
        <View style={{ width: "100%", marginBottom: 5 }}>
          <Text
            style={{
              marginLeft: 15,
              color: "#000000",
              fontFamily: "Inconsolata_400Regular",
              marginBottom: 5,
            }}
          >
            Password
          </Text>

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
              borderColor: "#000000",
              borderRadius: 40,
              backgroundColor: "white",
              fontSize: 16,
              fontFamily: "Inconsolata_400Regular",
              color: "#000",
            }}
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginBottom: 20 }}
          onPress={() => navigation.navigate("Forgotpass")}
        >
          <Text
            style={{ color: "#566D67", fontFamily: "Inconsolata_400Regular",  textDecorationLine: "underline" }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <View style={{ paddingHorizontal: 80, width: "100%" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#000000",
              padding: 15,
              borderRadius: 40,
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "Inconsolata_400Regular",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Signup Link */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#555", fontFamily: "Inconsolata_400Regular" }}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                color: "#566D67",
                fontWeight: "bold",
                fontFamily: "Inconsolata_400Regular",
                textDecorationLine: "underline",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
