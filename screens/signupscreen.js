import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const SignupScreen = ({ navigation }) => {
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
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "300",
              color: "#000000",
            }}
          >
            StudySmart
          </Text>
        </View>
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
              fontWeight: "300", // Use "300" instead of "thin"
              color: "#333",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Create your account
          </Text>

          <Text
            style={{
              fontSize: 14, // Smaller text
              color: "#666",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            lets get started
          </Text>
        </View>

        <View style={{ width: "100%", marginBottom: 10 }}>
          <View style={{ width: "100%", marginBottom: 5 }}>
            <Text style={{ marginLeft: 15, color: "#000000" }}>Name</Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#666"
              style={{
                width: "100%",
                padding: 15,
                borderWidth: 1,
                borderColor: "#000000",
                borderRadius: 40,
                backgroundColor: "white",
                marginBottom: 10,
              }}
            />
          </View>
          <View style={{ width: "100%", marginBottom: 5 }}>
            <Text style={{ marginLeft: 15, color: "#000000" }}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#666"
              style={{
                width: "100%",
                padding: 15,
                borderWidth: 1,
                borderColor: "#000000",
                borderRadius: 40,
                backgroundColor: "white",
                marginBottom: 10,
              }}
            />
          </View>

          <View style={{ width: "100%", marginBottom: 5 }}>
            <Text style={{ marginLeft: 15, color: "#000000" }}>Password</Text>
            <TextInput
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
                marginBottom: 10,
              }}
            />
          </View>

          <View style={{ width: "100%", marginBottom: 5 }}>
            <Text style={{ marginLeft: 15, color: "#000000" }}>
              Contact no.
            </Text>
            <TextInput
              placeholder="Enter your contact"
              placeholderTextColor="#666"
              keyboardType="phone-pad" // Numeric Keyboard
              maxLength={10} // Restrict to 10 digits (optional)
              style={{
                width: "100%",
                padding: 15,
                borderWidth: 1,
                borderColor: "#000000",
                borderRadius: 40,
                backgroundColor: "white",
                marginBottom: 10,
              }}
            />
          </View>
        </View>

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
            onPress={() => navigation.navigate("Otp")}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#555" }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#566D67", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
