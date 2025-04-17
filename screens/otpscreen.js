import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from "react-native";

const BASE_URL = "https://studymate-cirr.onrender.com"; // Backend URL

const OtpScreen = ({ route, navigation }) => {
  const { email } = route.params; // ✅ safely extract email
  const [otp, setOtp] = useState("");

  const verifyOtp = async () => {
    try {
      const response = await fetch(`${BASE_URL}/user/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Account verified successfully!");
        navigation.navigate("login");
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Network error. Please try again.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>Enter OTP sent to {email}</Text>
      <TextInput
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: "#000", padding: 15, borderRadius: 8, marginBottom: 20 }}
      />
      <TouchableOpacity onPress={verifyOtp} style={{ backgroundColor: "#000", padding: 15, borderRadius: 8, alignItems: "center" }}>
        <Text style={{ color: "#FFF", fontSize: 16 }}>Verify OTP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OtpScreen;
