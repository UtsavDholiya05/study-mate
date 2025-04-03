import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BASE_URL = "https://studymate-cirr.onrender.com"; // Updated backend URL

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });

  const [errors, setErrors] = useState({ email: "", password: "" });
  const { width, height } = useWindowDimensions();

  const validateEmail = (text) => {
    setFormData((prev) => ({ ...prev, email: text }));
    if (text === "") {
      setErrors((prev) => ({ ...prev, email: "" }));
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(text) ? "" : "Invalid email format",
      }));
    }
  };

  const validatePassword = (text) => {
    setFormData((prev) => ({ ...prev, password: text }));
    setErrors((prev) => ({
      ...prev,
      password:
        text.length >= 5 ? "" : "Password must be at least 5 characters long",
    }));
  };

  const validateAndLogin = async () => {
    if (
      !errors.email &&
      !errors.password &&
      formData.email &&
      formData.password
    ) {
      try {
        const response = await fetch(`${BASE_URL}/user/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          navigation.navigate("Homescreen");
        } else {
          alert(data.message || "Login failed");
        }
      } catch (error) {
        alert("Network error. Please try again.");
      }
    } else {
      alert("Please fix the errors before logging in.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFF1" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: width * 0.05,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: height * 0.08,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: "600",
                color: "#000",
                textAlign: "center",
                fontFamily: "PlayfairDisplay_400Regular",
              }}
            >
              StudySmart
            </Text>
          </View>
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
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
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
              Let's get started
            </Text>

            {/* Email Input */}
            <Text
              style={{
                marginLeft: 15,
                color: "#000",
                marginBottom: 5,
                fontFamily: "Inconsolata_400Regular",
              }}
            >
              Email
            </Text>
            <TextInput
              value={formData.email}
              onChangeText={validateEmail}
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
                fontFamily: "Inconsolata_400Regular",
              }}
            />
            {errors.email ? (
              <Text style={{ color: "red", marginLeft: 15, marginTop: 5 }}>
                {errors.email}
              </Text>
            ) : null}

            {/* Password Input */}
            <Text
              style={{
                marginLeft: 15,
                color: "#000",
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "Inconsolata_400Regular",
              }}
            >
              Password
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#000",
                borderRadius: 40,
                backgroundColor: "white",
                paddingRight: 15,
                width: "100%",
              }}
            >
              <TextInput
                value={formData.password}
                onChangeText={validatePassword}
                placeholder="Enter your password"
                placeholderTextColor="#666"
                secureTextEntry={formData.secureTextEntry}
                style={{
                  flex: 1,
                  padding: 15,
                  fontSize: 16,
                  fontFamily: "Inconsolata_400Regular",
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  setFormData((prev) => ({
                    ...prev,
                    secureTextEntry: !prev.secureTextEntry,
                  }))
                }
              >
                <Ionicons
                  name={formData.secureTextEntry ? "eye-off" : "eye"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            {errors.password ? (
              <Text style={{ color: "red", marginLeft: 15, marginTop: 5 }}>
                {errors.password}
              </Text>
            ) : null}

            {/* Forgot Password */}
            <TouchableOpacity
              style={{ alignSelf: "flex-end", marginVertical: 10 }}
              onPress={() => navigation.navigate("Forgotpass")}
            >
              <Text
                style={{
                  color: "#566D67",
                  textDecorationLine: "underline",
                  fontFamily: "Inconsolata_400Regular",
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              onPress={validateAndLogin}
              style={{
                backgroundColor: "#000",
                padding: 15,
                borderRadius: 40,
                alignItems: "center",
                width: "100%",
                marginVertical: 10,
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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
