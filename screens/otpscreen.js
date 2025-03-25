import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) text = text[text.length - 1]; // Only take last digit
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

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
      {/* Header Container for Back Arrow */}
      <View
        style={{
          position: "absolute",
          top: 60,
          left: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <Text style={{ fontSize: 16, color: "black" }}>Back</Text>
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
          <Text style={{ fontSize: 32, fontWeight: "300", color: "#333", textAlign: "center", marginBottom: 5 }}>
            Enter OTP
          </Text>
          <Text style={{ fontSize: 14, color: "#666", textAlign: "center", marginBottom: 20 }}>
            We sent a 6-digit verification code to your phone number
          </Text>
        </View>

        {/* OTP Input Fields */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={{
                width: 40,
                height: 50,
                borderWidth: 1,
                borderColor: "#000000",
                borderRadius: 40,
                textAlign: "center",
                fontSize: 24,
                backgroundColor: "#FFF",
                marginHorizontal: 5,
              }}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
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
            <Text style={{ color: "white", fontSize: 18 }}>Verify</Text>
          </TouchableOpacity>
        </View>

        {/* Resend OTP */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
          <Text style={{ color: "#555" }}>Didn’t receive code? </Text>
          <TouchableOpacity>
            <Text style={{ color: "#566D67", fontWeight: "bold" }}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
