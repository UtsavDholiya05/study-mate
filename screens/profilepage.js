import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const ProfileScreen = () => {
  const renderInfoRow = (label, value) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: height * 0.015,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      }}
    >
      <Text style={{ color: "#666", fontSize: width * 0.04 }}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: width * 0.04, marginRight: width * 0.02 }}>
          {label === "Change password" ? "••••••••" : value}
        </Text>
        <TouchableOpacity>
          <Feather name="edit-2" size={width * 0.04} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#000",
          paddingVertical: height * 0.02,
          paddingHorizontal: width * 0.05,
        }}
      >
        <TouchableOpacity style={{ padding: width * 0.02 }}>
          <Feather name="menu" size={width * 0.06} color="white" />
        </TouchableOpacity>
        <Text
          style={{ color: "white", fontSize: width * 0.05, fontWeight: "500" }}
        >
          StudySmart
        </Text>
        <View style={{ width: width * 0.06 }} />
      </View>

      <View
        style={{
          height: height * 0.15,
          backgroundColor: "#b5b88f",
          width: "100%",
          borderColor: "black",
          borderWidth: width * 0.008,
          borderRadius: width * 0.02,
        }}
      />

      {/* Profile Card */}
      <View>
        <View
          style={{
            height: height * 0.85,
            backgroundColor: "#fff",
            borderRadius: width * 0.02,
            padding: width * 0.05,
            paddingTop: height * 0.12,
            borderWidth: width * 0.008,
            borderRadius: width * 0.02,
          }}
        >
          {/* Profile Image */}
          <View
            style={{
              position: "absolute",
              top: -height * 0.045,
              left: width * 0.09,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              style={{
                width: width * 0.21,
                height: width * 0.21,
                borderRadius: width * 0.21,
              }}
            />
            <TouchableOpacity
              style={{
                marginLeft: -width * 0.06,
                backgroundColor: "white",
                width: width * 0.08,
                height: width * 0.08,
                borderRadius: width * 0.04,
                alignItems: "center",
                justifyContent: "center",
              
                transform: [{ translateY: width * 0.05 }], // Lowering the + sign
              }}
            >
              <Feather name="plus" size={width * 0.07} color="black" />
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <Text
            style={{
              fontSize: width * 0.06,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: height * 0.02,
            }}
          >
            Sarah Smiths
          </Text>
          <Text
            style={{
              fontSize: width * 0.05,
              fontWeight: "500",
              marginBottom: height * 0.02,
            }}
          >
            Basic info
          </Text>

          {renderInfoRow("Name", "Sarah Smiths")}
          {renderInfoRow("Date of Birth", "December 24th")}
          {renderInfoRow("Gender", "Female")}
          {renderInfoRow("Email", "sarahsmiths@gmail.com")}
          {renderInfoRow("Change password", "")}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;