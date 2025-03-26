import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ForgotPass = ({ navigation }) => {
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
      {/* Header Container for Back Arrow and App Name */}
      <View
        style={{
          position: "absolute",
          top: 60,
          left: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Back Arrow */}
        <TouchableOpacity
          onPress={() => navigation.goBack()} // Navigates back to Login Screen
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontFamily: "Inconsolata_400Regular",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
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
            Forgot Password?
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
            We got you!
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
            placeholder="Enter your email"
            placeholderTextColor="#666"
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

        {/* Send Code Button */}
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
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPass;
