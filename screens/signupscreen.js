import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

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
            Create Your Account
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
            Let's get started
          </Text>
        </View>

        {/* Name Input Field */}
        <View style={{ width: "100%", marginBottom: 10 }}>
          <Text
            style={{
              marginLeft: 15,
              color: "#000000",
              fontFamily: "Inconsolata_400Regular",
              marginBottom: 5,
            }}
          >
            Name
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#666"
            style={{
              width: "100%",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: "#000000",
              borderRadius: 40,
              backgroundColor: "white",
              fontSize: 16,
              fontFamily: "Inconsolata_400Regular",
              color: "#000",
              textAlignVertical: "center",
            }}
          />
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
            placeholderTextColor="#666"
            style={{
              width: "100%",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: "#000000",
              borderRadius: 40,
              backgroundColor: "white",
              fontSize: 16,
              fontFamily: "Inconsolata_400Regular",
              color: "#000",
              textAlignVertical: "center",
            }}
          />
        </View>

        {/* Password Input Field */}
        <View style={{ width: "100%", marginBottom: 10 }}>
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
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: "#000000",
              borderRadius: 40,
              backgroundColor: "white",
              fontSize: 16,
              fontFamily: "Inconsolata_400Regular",
              color: "#000",
              textAlignVertical: "center",
            }}
          />
        </View>

        {/* Contact Input Field */}
        <View style={{ width: "100%", marginBottom: 10 }}>
          <Text
            style={{
              marginLeft: 15,
              color: "#000000",
              fontFamily: "Inconsolata_400Regular",
              marginBottom: 5,
            }}
          >
            Contact No.
          </Text>
          <TextInput
            value={contact}
            onChangeText={setContact}
            placeholder="Enter your contact"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            maxLength={10}
            style={{
              width: "100%",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: "#000000",
              borderRadius: 40,
              backgroundColor: "white",
              fontSize: 16,
              fontFamily: "Inconsolata_400Regular",
              color: "#000",
              textAlignVertical: "center",
            }}
          />
        </View>

        {/* Signup Button */}
        <View style={{ paddingHorizontal: 80, width: "100%" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#000000",
              padding: 15,
              borderRadius: 40,
              alignItems: "center",
              width: "100%",
            }}
            onPress={() => navigation.navigate("Otp")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "Inconsolata_400Regular",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login Link */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#555", fontFamily: "Inconsolata_400Regular" }}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#566D67",
                fontWeight: "bold",
                fontFamily: "Inconsolata_400Regular",
                textDecorationLine: "underline",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
