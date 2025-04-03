import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Importing Ionicons for eye icons

const BASE_URL = "https://studymate-cirr.onrender.com"; // Updated backend URL

const SignupScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // New state for password visibility
  const { width, height } = useWindowDimensions();

  const validateName = (text) => {
    setFormData((prev) => ({ ...prev, name: text }));
    setErrors((prev) => ({
      ...prev,
      name: text.length >= 3 ? "" : "Name must be at least 3 characters long",
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
      password:
        text.length >= 5 ? "" : "Password must be at least 5 characters long",
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
    if (
      !errors.name &&
      !errors.email &&
      !errors.password &&
      !errors.contact &&
      formData.name &&
      formData.email &&
      formData.password &&
      formData.contact
    ) {
      try {
        const response = await fetch(`${BASE_URL}/user/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          navigation.navigate("Otp");
        } else {
          alert(data.message || "Signup failed");
        }
      } catch (error) {
        alert("Network error. Please try again.");
      }
    } else {
      alert("Please fix the errors before signing up.");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFF1",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: width * 0.05,
      }}
    >
      {/* App Name */}
      <View
        style={{
          position: "absolute",
          top: height * 0.08,
          right: width * 0.05,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "600",
            color: "#000",
            fontFamily: "PlayfairDisplay_400Regular",
          }}
        >
          StudySmart
        </Text>
      </View>

      {/* White Box Container */}
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
          let's get started
        </Text>

        {/* Name Input */}
        <Text
          style={{
            marginLeft: 15,
            color: "#000",
            marginBottom: 5,
            fontFamily: "Inconsolata_400Regular",
          }}
        >
          Name
        </Text>
        <TextInput
          value={formData.name}
          onChangeText={validateName}
          placeholder="Enter your name"
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
        {errors.name ? (
          <Text style={{ color: "red", marginLeft: 15, marginTop: 5 }}>
            {errors.name}
          </Text>
        ) : null}

        {/* Email Input */}
        <Text
          style={{
            marginLeft: 15,
            color: "#000",
            marginBottom: 5,
            marginTop: 10,
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
            width: "100%",
            position: "relative",
          }}
        >
          <TextInput
            value={formData.password}
            onChangeText={validatePassword}
            placeholder="Enter your password"
            placeholderTextColor="#666"
            secureTextEntry={!isPasswordVisible} // Toggle secureTextEntry based on state
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
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)} // Toggle password visibility
            style={{
              position: "absolute",
              right: 15,
              padding: 10,
            }}
          >
            <Icon
              name={isPasswordVisible ? "eye-off" : "eye"} // Toggle between eye and eye-off icons
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        {errors.password ? (
          <Text style={{ color: "red", marginLeft: 15, marginTop: 5 }}>
            {errors.password}
          </Text>
        ) : null}

        {/* Contact Input */}
        <Text
          style={{
            marginLeft: 15,
            color: "#000",
            marginBottom: 5,
            marginTop: 10,
            fontFamily: "Inconsolata_400Regular",
          }}
        >
          Contact No.
        </Text>
        <TextInput
          value={formData.contact}
          onChangeText={validateContact}
          placeholder="Enter your contact"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
          maxLength={10}
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
        {errors.contact ? (
          <Text style={{ color: "red", marginLeft: 15, marginTop: 5 }}>
            {errors.contact}
          </Text>
        ) : null}

        <TouchableOpacity
          onPress={handleSignup}
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
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;