import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const BASE_URL = "https://studymate-cirr.onrender.com";

const SignupScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { width, height } = useWindowDimensions();

  const validateName = (text) => {
    setFormData((prev) => ({ ...prev, name: text }));
    setErrors((prev) => ({
      ...prev,
      name: text.length >= 3 ? "" : "Name must be at least 3 characters",
    }));
  };

  const validateEmail = (text) => {
    setFormData((prev) => ({ ...prev, email: text }));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prev) => ({
      ...prev,
      email: emailRegex.test(text) ? "" : "Invalid email format",
    }));
  };

  const validatePassword = (text) => {
    setFormData((prev) => ({ ...prev, password: text }));
    setErrors((prev) => ({
      ...prev,
      password: text.length >= 8 ? "" : "Password must be at least 8 characters",
    }));
  };

  const validateContact = (text) => {
    setFormData((prev) => ({ ...prev, contact: text }));
    const contactRegex = /^\d{10}$/;
    setErrors((prev) => ({
      ...prev,
      contact: contactRegex.test(text)
        ? ""
        : "Contact must be a 10-digit number",
    }));
  };

  const handleSignup = async () => {
    const { name, email, password, contact } = formData;
    if (
      name &&
      email &&
      password &&
      contact &&
      !errors.name &&
      !errors.email &&
      !errors.password &&
      !errors.contact
    ) {
      try {
        const response = await fetch(`${BASE_URL}/user/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const responseData = await response.json();
        if (response.ok) {
          navigation.navigate("otp");
        } else {
          alert(responseData.message || "Signup failed");
        }
      } catch (error) {
        alert("Network error. Please try again.");
      }
    } else {
      alert("Please fill all fields correctly");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFF1" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: width * 0.05,
              paddingTop: height * 0.03,
              paddingBottom: 40,
              alignItems: "center",
            }}
            keyboardShouldPersistTaps="handled"
          >
            {/* App Title */}
            <Text
              style={{
                fontSize: 32,
                fontWeight: "600",
                color: "#000",
                alignSelf: "flex-end",
                marginBottom: height * 0.09,
                fontFamily: "PlayfairDisplay_400Regular",
              }}
            >
              StudySmart
            </Text>

            {/* Form Container */}
            <View
              style={{
                width: "95%",
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
                  fontSize: 28,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 10,
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

              {/* Name */}
              <Text style={{ marginLeft: 15 }}>Name</Text>
              <TextInput
                value={formData.name}
                onChangeText={validateName}
                placeholder="Enter your name"
                style={inputStyle}
              />
              {errors.name ? <Text style={errorStyle}>{errors.name}</Text> : null}

              {/* Email */}
              <Text style={{ marginLeft: 15, marginTop: 10 }}>Email</Text>
              <TextInput
                value={formData.email}
                onChangeText={validateEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                style={inputStyle}
              />
              {errors.email ? <Text style={errorStyle}>{errors.email}</Text> : null}

              {/* Password */}
              <Text style={{ marginLeft: 15, marginTop: 10 }}>Password</Text>
              <View style={{ position: "relative" }}>
                <TextInput
                  value={formData.password}
                  onChangeText={validatePassword}
                  placeholder="Enter your password"
                  secureTextEntry={!isPasswordVisible}
                  style={inputStyle}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  style={{ position: "absolute", right: 20, top: 15 }}
                >
                  <Icon
                    name={isPasswordVisible ? "eye-off" : "eye"}
                    size={20}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
              {errors.password ? (
                <Text style={errorStyle}>{errors.password}</Text>
              ) : null}

              {/* Contact */}
              <Text style={{ marginLeft: 15, marginTop: 10 }}>Contact No.</Text>
              <TextInput
                value={formData.contact}
                onChangeText={validateContact}
                placeholder="Enter your contact number"
                keyboardType="phone-pad"
                maxLength={10}
                style={inputStyle}
              />
              {errors.contact ? (
                <Text style={errorStyle}>{errors.contact}</Text>
              ) : null}

              {/* Sign Up Button */}
              <TouchableOpacity
                onPress={handleSignup}
                style={{
                  backgroundColor: "#000",
                  padding: 15,
                  borderRadius: 40,
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 16,
                    fontFamily: "Inconsolata_400Regular",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const inputStyle = {
  width: "100%",
  padding: 15,
  borderWidth: 1,
  borderColor: "#000",
  borderRadius: 40,
  backgroundColor: "#FFF",
  fontSize: 16,
  fontFamily: "Inconsolata_400Regular",
  marginTop: 5,
};

const errorStyle = {
  color: "red",
  marginLeft: 15,
  marginTop: 5,
  fontSize: 13,
};

export default SignupScreen;
