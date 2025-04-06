import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFF1" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
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
            {/* App Name */}
            <Text
              style={{
                fontSize: 32,
                fontWeight: "600",
                color: "#000",
                alignSelf: "flex-end",
                marginBottom: height * 0.15,
                fontFamily: "PlayfairDisplay_400Regular",
              }}
            >
              StudySmart
            </Text>

            {/* White Box */}
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
                let's get started
              </Text>

              {/* Email Field */}
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
                value={email}
                onChangeText={setEmail}
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

              {/* Password Field */}
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
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="#666"
                secureTextEntry
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
                onPress={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    navigation.navigate("homepage");
                  }, 2000); // Simulated delay
                }}
                style={{
                  backgroundColor: "#000",
                  padding: 15,
                  borderRadius: 40,
                  alignItems: "center",
                  width: "100%",
                  marginVertical: 10,
                  opacity: loading ? 0.6 : 1,
                }}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontFamily: "Inconsolata_400Regular",
                    }}
                  >
                    Login
                  </Text>
                )}
              </TouchableOpacity>

              {/* Signup Prompt */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: "#555",
                    fontFamily: "Inconsolata_400Regular",
                  }}
                >
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                  <Text
                    style={{
                      color: "#566D67",
                      fontWeight: "bold",
                      textDecorationLine: "underline",
                      fontFamily: "Inconsolata_400Regular",
                    }}
                  >
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
<<<<<<< HEAD
          </ScrollView>
        </TouchableWithoutFeedback>
=======
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
            <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#555", fontFamily: "Inconsolata_400Regular" }}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text
              style={{
                color: "#566D67",
                fontWeight: "bold",
                fontFamily: "Inconsolata_400Regular",
                textDecorationLine: "underline",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
          </View>
          
        </ScrollView>
>>>>>>> d7c097eb3bbf78b10b2529312a41fff333f0ce8a
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
