import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Modal,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CalendarIcon, ClockIcon } from "lucide-react-native";
import { format } from "date-fns";

const { height, width } = Dimensions.get("window");

const MeetingScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [scheduleModalVisible, setScheduleModalVisible] = useState(false);
  const [meetingId, setMeetingId] = useState("");
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const cardData = [
    {
      title: "New Meeting",
      icon: (
        <Ionicons
          name="videocam"
          size={width * 0.1}
          color="#000"
          style={{ alignSelf: "center" }}
        />
      ),
      backgroundColor: "#9CA37C",
    },
    {
      title: "Join Meeting",
      icon: (
        <AntDesign
          name="plussquare"
          size={width * 0.1}
          color="black"
          style={{ alignSelf: "center" }}
        />
      ),
      backgroundColor: "#FFFFF1",
    },
    {
      title: "Schedule",
      icon: (
        <MaterialIcons
          name="schedule"
          size={width * 0.1}
          color="#000"
          style={{ alignSelf: "center" }}
        />
      ),
      backgroundColor: "#FFFFF1",
    },
    {
      title: "Share Screen",
      icon: (
        <FontAwesome6
          name="arrow-up"
          size={width * 0.1}
          color="#000"
          style={{ alignSelf: "center" }}
        />
      ),
      backgroundColor: "#FFFFF1",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

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
        <TouchableOpacity>
          <Ionicons
            style={{ transform: [{ translateY: width*0.06 }] }}
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
            StudyMate
          </Text>
        </View>
      </View>

      {/* Title Banner */}
      <TouchableOpacity
        style={{
          backgroundColor: "#FFFFF1",
          marginHorizontal: width * 0.02,
          marginTop: 10,
          padding: 20,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          position: "relative",
          height: height * 0.18,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            alignSelf: "flex-start",
            position: "absolute",
            paddingLeft: width * 0.03,
            paddingTop: height * 0.02,
          }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={width * 0.07}
            color="black"
          />
        </TouchableOpacity>

        <View style={{ flex: 0, alignSelf: "flex-end" }}>
          <Text
            style={{
              color: "#000",
              fontSize: width * 0.15,
              fontWeight: "bold",
              fontFamily: "PlayfairDisplay_400Regular",
              transform: [
                { translateY: width * 0.03 },
                { translateX: -width * 0.02 },
              ],
              letterSpacing: -2,
            }}
          >
            Meetings
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text
            style={{
              color: "#000",
              fontSize: width * 0.03,
              transform: [{ translateX: -width * 0.15 },
                { translateY: -width * 0.01 }
              ],
            }}
          >
            {"meet up,\nget going"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Cards Grid */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: width * 0.02,
        }}
      >
        {cardData.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: card.backgroundColor,
              width: "48.5%",
              marginVertical: width * 0.02,
              padding: 20,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
              height: height * 0.13,
              justifyContent: "space-between",
            }}
            onPress={() => {
              if (card.title === "Join Meeting") {
                setModalVisible(true);
              } else if (card.title === "Schedule") {
                setScheduleModalVisible(true);
              }
            }}
          >
            {card.icon}
            <Text
              style={{
                color: "#000",
                fontSize: width * 0.05,
                fontWeight: "bold",
                fontFamily: "Inter_400Regular",
                alignSelf: "center",
              }}
            >
              {card.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scheduled Calls Section */}
      <View style={{ marginVertical: -width * 0.02, padding: width * 0.02 }}>
        <View
          style={{
            backgroundColor: "#FFFFF1",
            width: "100%",
            padding: height * 0.01,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Inter_400Regular",
                letterSpacing: -2,
              }}
            >
              Scheduled Calls
            </Text>
          </View>
          <View
            style={{
              height: 1.5,
              backgroundColor: "#000",
              marginTop: height * 0.002,
              width: "100%",
            }}
          />
        </View>
      </View>

      {/* Join Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 20,
              width: "70%",
              shadowColor: "#000",
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 10,
              height: "35%",
            }}
          >
            <Text
              style={{
                fontSize: 28,
                marginBottom: height * 0.04,
                fontFamily: "Inter_400Regular",
              }}
            >
              Join a Meeting
            </Text>

            <TextInput
              placeholder="Meeting ID"
              placeholderTextColor="#666"
              value={meetingId}
              onChangeText={setMeetingId}
              style={{
                borderWidth: 1,
                borderColor: "#000",
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
                fontFamily: "Inconsolata_400Regular",
              }}
            />

            <TextInput
              placeholder="Name"
              placeholderTextColor="#666"
              value={userName}
              onChangeText={setUserName}
              style={{
                borderWidth: 1,
                borderColor: "#000",
                borderRadius: 10,
                padding: 10,
                marginBottom: 20,
                fontFamily: "Inconsolata_400Regular",
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: "#9CA37C",
                  borderRadius: 10,
                  width: width * 0.2,
                }}
              >
                <Button
                  title="Join"
                  color="#fff"
                  onPress={() => setModalVisible(false)}
                />
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  width: width * 0.2,
                  borderColor: "#666",
                  borderWidth: 1,
                }}
              >
                <Button
                  title="Cancel"
                  color="#666"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Schedule Modal */}
      {/* Schedule Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={scheduleModalVisible}
        onRequestClose={() => setScheduleModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 16,
              padding: 24,
              width: "85%",
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 6,
              elevation: 12,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                marginBottom: height * 0.02,
                fontFamily: "Inter_400Regular",
              }}
            >
              Schedule
            </Text>

            <TextInput
              placeholder="Study Group"
              placeholderTextColor="#999"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 12,
                padding: 12,
                marginBottom: 12,
                fontFamily: "Inconsolata_400Regular",
              }}
            />

            <TextInput
              placeholder="Meeting name"
              placeholderTextColor="#999"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 12,
                padding: 12,
                marginBottom: 12,
                fontFamily: "Inconsolata_400Regular",
              }}
            />

            {/* Modern Styled Date & Time Picker */}
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 12,
                padding: 12,
                marginBottom: 20,
                backgroundColor: "#F8F8F8",
                gap: 8,
              }}
            >
              <CalendarIcon size={20} color="#444" />
              <Text
                style={{
                  fontFamily: "Inconsolata_400Regular",
                  color: "#222",
                  fontSize: 16,
                }}
              >
                {format(date, "dd MMM yyyy")} • {format(date, "hh:mm a")}
              </Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="datetime"
                is24Hour={false}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) setDate(selectedDate);
                }}
              />
            )}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => setScheduleModalVisible(false)}
                style={{
                  backgroundColor: "#9CA37C",
                  borderRadius: 12,
                  width: width * 0.25,
                  borderColor: "#666",
                  borderWidth: 1,
                  alignItems: "center",
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Inter_400Regular",
                    fontSize: 16,
                  }}
                >
                  Schedule
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setScheduleModalVisible(false)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  width: width * 0.25,
                  borderColor: "#666",
                  borderWidth: 1,
                  alignItems: "center",
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    color: "#000",
                    fontFamily: "Inter_400Regular",
                    fontSize: 16,
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MeetingScreen;
