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
    username: "",
    email: "",
    password: "",
    contact: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { width, height } = useWindowDimensions();

  const validateName = (text) => {
    console.log("Validating Username:", text);
    setFormData((prev) => ({ ...prev, username: text }));
    setErrors((prev) => ({
      ...prev,
      username: text.length >= 4 ? "" : "Username must be at least 4 characters long",
    }));
    console.log("Username Validation Errors:", errors.username);
  };

  const validateEmail = (text) => {
    console.log("Validating Email:", text);
    setFormData((prev) => ({ ...prev, email: text }));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prev) => ({
      ...prev,
      email: emailRegex.test(text) ? "" : "Invalid email format",
    }));
    console.log("Email Validation Errors:", errors.email);
  };

  const validatePassword = (text) => {
    console.log("Validating Password:", text);
    setFormData((prev) => ({ ...prev, password: text }));
    setErrors((prev) => ({
      ...prev,
      password: text.length >= 8 ? "" : "Password must be at least 8 characters long",
    }));
    console.log("Password Validation Errors:", errors.password);
  };

  const validateContact = (text) => {
    console.log("Validating Contact:", text);
    setFormData((prev) => ({ ...prev, contact: text }));
    const contactRegex = /^\d{10}$/;
    setErrors((prev) => ({
      ...prev,
      contact: contactRegex.test(text) ? "" : "Contact must be a 10-digit number",
    }));
    console.log("Contact Validation Errors:", errors.contact);
  };

  const handleSignup = async () => {
    console.log("Attempting Signup with Form Data:", formData);

    if (
      !errors.username &&
      !errors.email &&
      !errors.password &&
      !errors.contact &&
      formData.username &&
      formData.email &&
      formData.password &&
      formData.contact
    ) {
      try {
        console.log("Sending POST request to backend...");
        const response = await fetch(`${BASE_URL}/user/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        console.log("Response Status:", response.status);

        let responseData;
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          responseData = await response.json();
        } else {
          responseData = await response.text();
        }

        console.log("Backend Response Data:", responseData);

        if (response.ok) {
          navigation.navigate("otp");
        } else {
          const errorMessage =
            typeof responseData === "object"
              ? responseData.message || "Signup failed"
              : responseData || "Signup failed";
          alert(errorMessage);
        }
      } catch (error) {
        console.error("Network Error:", error);
        alert("Network error. Please try again.");
      }
    } else {
      console.log("Validation Errors Preventing Signup:", errors);
      alert("Please fill the details before signing up.");
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

        {/* Username Input */}
        <Text
          style={{
            marginLeft: 15,
            color: "#000",
            marginBottom: 5,
            fontFamily: "Inconsolata_400Regular",
          }}
        >
          Username
        </Text>
        <TextInput
          value={formData.username}
          onChangeText={validateName}
          placeholder="Enter your username"
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
        {errors.username ? (
          <Text style={{ color: "red", marginLeft: 15, marginTop: 5 }}>
            {errors.username}
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
            secureTextEntry={!isPasswordVisible}
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
            onPress={() => setIsPasswordVisible((prev) => !prev)}
            style={{
              position: "absolute",
              right: 15,
              padding: 10,
            }}
          >
            <Icon
              name={isPasswordVisible ? "eye-off" : "eye"}
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
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
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
    </SafeAreaView>
  );
};

export default SignupScreen;
