import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons ,Feather} from "@expo/vector-icons";


const { height, width } = Dimensions.get("window");

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View
        style={{
          backgroundColor: "#000",
          paddingVertical: width * 0.09,
          paddingHorizontal: width * 0.05,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 0.5,
          borderBottomColor: "#fff",
        }}
      >
        <TouchableOpacity onPress={() => console.log("Menu Clicked")}>
          <Ionicons
            style={{ transform: [{ translateY: 23 }] }}
            name="menu"
            size={width * 0.11}
            color="#9CA37C"
          />
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            left: "50%",
            transform: [{ translateX: -width * 0.13 }, { translateY: 20 }],
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "PlayfairDisplay_400Regular",
              fontSize: width * 0.08,
              fontWeight: "500",
            }}
          >
            StudySmart
          </Text>
        </View>
      </View>

      {/* Banner */}
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

      {/* Profile Section */}
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
        {/* Profile Picture */}
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

        {/* User Name */}
        <Text
          style={{
            fontSize: width * 0.06,
            fontWeight: "bold",
            marginTop: height * 0.03,
            top: -height * 0.089,
          }}
        >
          Sarah Smiths
        </Text>

        {/* My Groups Section */}
        <View style={{ marginTop: height * 0.02, top: -height * 0.065, flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: width * 0.05, fontWeight: "500" }}>
              My group
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: width * 0.045, color: "#007bff" }}>
                + new group
              </Text>
            </TouchableOpacity>
          </View>

          {/* Group List */}
          <ScrollView style={{ marginTop: height * 0.02 }}>
            {[1, 2, 3, 4,5].map((item) => (
              <View
                key={item}
                style={{
                  backgroundColor: "#d1d1c0",
                  padding: width * 0.04,
                  borderRadius: width * 0.02,
                  marginVertical: height * 0.008,
                }}
              >
                <Text style={{ fontSize: width * 0.045, fontWeight: "500" }}>
                  Group name
                </Text>
                <Text style={{ fontSize: width * 0.035, color: "#555" }}>
                  group owner
                </Text>
                <TouchableOpacity
                  style={{
                    alignSelf: "flex-end",
                    backgroundColor: "#fff",
                    paddingVertical: height * 0.005,
                    paddingHorizontal: width * 0.03,
                    borderRadius: width * 0.02,
                    marginTop: height * 0.008,
                    borderWidth: 1,
                    borderColor: "#aaa",
                  }}
                >
                  <Text style={{ fontSize: width * 0.035, color: "#333" }}>
                    go to course
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
