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
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // For secure token storage
import { Ionicons } from "@expo/vector-icons";

const BASE_URL = "https://studymate-cirr.onrender.com"; // Backend URL

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Email Validation
  const validateEmail = (text) => {
    console.log("Validating Email:", text); // Log the input for debugging
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
    console.log("Email Validation Errors:", errors.email); // Log validation result
  };

  // Password Validation
  const validatePassword = (text) => {
    console.log("Validating Password:", text); // Log the input for debugging
    setFormData((prev) => ({ ...prev, password: text }));
    setErrors((prev) => ({
      ...prev,
      password:
        text.length >= 8 ? "" : "Password must be at least 8 characters long",
    }));
    console.log("Password Validation Errors:", errors.password); // Log validation result
  };

  // Handle Login
  const validateAndLogin = async () => {
    console.log("Attempting Login with Form Data:", formData); // Log form data before submission
    if (
      !errors.email &&
      !errors.password &&
      formData.email &&
      formData.password
    ) {
      try {
        console.log("Sending POST request to backend..."); // Log start of API call
        const response = await fetch(`${BASE_URL}/user/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        console.log("Response Status:", response.status); // Log HTTP status code
        let responseData;

        if (response.headers.get("content-type")?.includes("application/json")) {
          responseData = await response.json();
        } else {
          responseData = await response.text();
        }

        console.log("Backend Response Data:", responseData);

        if (response.ok) {
          // Ensure the backend returns a token
          const { token } = responseData; // Assuming the backend returns a token
          if (!token) {
            throw new Error("No token received from the server.");
          }

          // Store the token securely in AsyncStorage
          await AsyncStorage.setItem("token", token);

          // Navigate to the homepage
          navigation.navigate("homepage");
        } else {
          // Display error message from backend or fallback message
          const errorMessage =
            typeof responseData === "object"
              ? responseData.message || "Login failed"
              : responseData || "Login failed";
          Alert.alert("Error", errorMessage);
        }
      } catch (error) {
        console.error("Network Error:", error); // Log network error details
        Alert.alert("Error", error.message || "An unexpected error occurred.");
      }
    } else {
      console.log("Validation Errors Preventing Login:", errors); // Log validation errors
      Alert.alert("Error", "Please fix the errors before logging in.");
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
            paddingHorizontal: 20,
          }}
        >
          {/* Header */}
          <View
            style={{
              position: "absolute",
              top: 50,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: "600",
                color: "#000",
                textAlign: "center",
              }}
            >
              StudySmart
            </Text>
          </View>

          {/* Login Form */}
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
                }}
              >
                Login
              </Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "#555" }}>Don't have an account?{" "}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                <Text
                  style={{
                    color: "#566D67",
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;