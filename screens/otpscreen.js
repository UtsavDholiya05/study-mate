import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";

const BASE_URL = "https://studymate-cirr.onrender.com";

const Otpscreen = ({ navigation, route }) => {
  const { email, authToken } = route.params;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (email && authToken) {
      sendOtp();
    } else {
      Alert.alert("Error", "Missing email or auth token.");
      navigation.goBack();
    }
  }, []);

  const sendOtp = async () => {
    try {
      await axios.get(`${BASE_URL}/user/auth/sendOtp?email=${email}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log("OTP sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      Alert.alert("Error", "Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      Alert.alert("Incomplete", "Please enter the full 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/user/auth/verifyOtp`,
        {
          email,
          otp: enteredOtp,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      Alert.alert("Success", "OTP verified!");
      navigation.navigate("homepage");
    } catch (error) {
      console.error("OTP Verification failed:", error);
      Alert.alert("Error", "Invalid OTP.");
    }
  };

  const handleChange = (text, index) => {
    if (text.length > 1) text = text[text.length - 1];
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFF1" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: height * 0.06, marginLeft: width * 0.04 }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            <Text style={{ fontSize: 16, color: "black" }}>Back</Text>
          </TouchableOpacity>
        </View>

        {/* OTP Card */}
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              width: "92%",
              maxWidth: 420,
              backgroundColor: "#fff",
              borderRadius: 28,
              paddingVertical: 44,
              paddingHorizontal: 28,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.13,
              shadowRadius: 16,
              elevation: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 12 }}>Enter OTP</Text>
            <Text style={{ fontSize: 15, color: "#666", textAlign: "center", marginBottom: 36 }}>
              We sent a 6-digit verification code to your email
            </Text>

            {/* OTP Boxes */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 40,
                marginTop: 10,
                width: 240,
                alignSelf: "center",
              }}
            >
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputs.current[index] = ref)}
                  style={{
                    width: 36,
                    height: 48,
                    borderWidth: 2,
                    borderColor: inputs.current[index]?.isFocused() ? "#566D67" : "#222",
                    borderRadius: 12,
                    textAlign: "center",
                    fontSize: 24,
                    backgroundColor: "#FAFAFA",
                    color: "#000",
                    fontWeight: "bold",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.08,
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onFocus={() => {
                    // Force re-render to update border color
                    setOtp([...otp]);
                  }}
                  onBlur={() => {
                    setOtp([...otp]);
                  }}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === "Backspace") {
                      handleBackspace(digit, index);
                    }
                  }}
                />
              ))}
            </View>

            {/* Verify Button */}
            <TouchableOpacity
              onPress={verifyOtp}
              style={{
                backgroundColor: "#000",
                paddingVertical: 18,
                borderRadius: 40,
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Verify</Text>
            </TouchableOpacity>

            {/* Resend */}
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
              <Text style={{ color: "#555" }}>Didn’t receive code? </Text>
              <TouchableOpacity onPress={sendOtp}>
                <Text style={{ color: "#566D67", fontWeight: "bold", textDecorationLine: "underline" }}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Otpscreen;
