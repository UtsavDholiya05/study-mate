import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("window");

const MeetingScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [scheduleModalVisible, setScheduleModalVisible] = useState(false);
  const [renameModalVisible, setRenameModalVisible] = useState(false);
  const [meetingId, setMeetingId] = useState("");
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Scheduled calls state
  const [scheduledCalls, setScheduledCalls] = useState([]);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [selectedCallId, setSelectedCallId] = useState(null);

  // Load scheduled calls from AsyncStorage on mount
  useEffect(() => {
    const loadScheduledCalls = async () => {
      const stored = await AsyncStorage.getItem("scheduledCalls");
      if (stored) setScheduledCalls(JSON.parse(stored));
      else setScheduledCalls([
        { id: 1, title: "AI Study Group Call", date: "2025-06-06 10:00 AM" },
        { id: 2, title: "Web Dev Team Sync", date: "2025-06-07 3:00 PM" },
      ]);
    };
    loadScheduledCalls();
  }, []);

  // Save scheduled calls to AsyncStorage whenever they change
  useEffect(() => {
    AsyncStorage.setItem("scheduledCalls", JSON.stringify(scheduledCalls));
  }, [scheduledCalls]);

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

  // Add a new scheduled call
  const scheduleMeeting = () => {
    if (!meetingTitle.trim()) {
      alert("Please enter a meeting name.");
      return;
    }
    setScheduledCalls([
      ...scheduledCalls,
      {
        id: Date.now(),
        title: meetingTitle,
        date: format(date, "dd MMM yyyy • hh:mm a"),
      },
    ]);
    setScheduleModalVisible(false);
    setMeetingTitle("");
    setDate(new Date());
  };

  // Rename a scheduled call
  const renameScheduledCall = () => {
    if (!meetingTitle.trim()) {
      alert("Please enter a meeting name.");
      return;
    }
    setScheduledCalls(
      scheduledCalls.map((call) =>
        call.id === selectedCallId ? { ...call, title: meetingTitle } : call
      )
    );
    setRenameModalVisible(false);
    setMeetingTitle("");
    setSelectedCallId(null);
  };

  // Delete a scheduled call
  const deleteScheduledCall = (id) => {
    setScheduledCalls(scheduledCalls.filter((call) => call.id !== id));
  };

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
            style={{ transform: [{ translateY: width * 0.06 }] }}
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
        activeOpacity={1}
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
              transform: [
                { translateX: -width * 0.15 },
                { translateY: -width * 0.01 },
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
            maxHeight: height * 0.35, // Make the section bigger and scrollable
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Inter_400Regular",
                letterSpacing: -2,
              }}
            >
              Scheduled Calls
            </Text>
            <TouchableOpacity
              onPress={() => setScheduleModalVisible(true)}
              style={{
                backgroundColor: "#9CA37C",
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>+ Schedule</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1.5,
              backgroundColor: "#000",
              marginTop: height * 0.002,
              width: "100%",
              marginBottom: 10,
            }}
          />
          {/* Scrollable scheduled calls */}
          <ScrollView>
            {scheduledCalls.length === 0 ? (
              <Text style={{ color: "#888" }}>No scheduled calls.</Text>
            ) : (
              scheduledCalls.map((call) => (
                <View
                  key={call.id}
                  style={{
                    backgroundColor: "#e7e7d9",
                    padding: width * 0.035,
                    borderRadius: width * 0.02,
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: width * 0.045, fontWeight: "500" }}
                  >
                    {call.title}
                  </Text>
                  <Text style={{ fontSize: width * 0.035, color: "#555" }}>
                    {call.date}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setRenameModalVisible(true);
                        setSelectedCallId(call.id);
                        setMeetingTitle(call.title);
                      }}
                      style={{
                        backgroundColor: "#9CA37C",
                        paddingVertical: 6,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={{ color: "#fff", fontWeight: "bold" }}>
                        Rename
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteScheduledCall(call.id)}
                      style={{
                        backgroundColor: "#FF6B6B",
                        paddingVertical: 6,
                        paddingHorizontal: 16,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={{ color: "#fff", fontWeight: "bold" }}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </ScrollView>
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
                paddingHorizontal: 10,
              }}
            >
              {/* Join Button */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  backgroundColor: "#9CA37C", // Green color used for Rename button
                  borderRadius: 10,
                  width: width * 0.25,
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
                  Join
                </Text>
              </TouchableOpacity>

              {/* Cancel Button */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
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
              placeholder="Meeting name"
              placeholderTextColor="#999"
              value={meetingTitle}
              onChangeText={setMeetingTitle}
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
              <MaterialCommunityIcons name="calendar" size={20} color="#444" />
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
                onPress={scheduleMeeting}
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

      {/* Rename Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={renameModalVisible}
        onRequestClose={() => setRenameModalVisible(false)}
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
              Rename Call
            </Text>

            <TextInput
              placeholder="Meeting name"
              placeholderTextColor="#999"
              value={meetingTitle}
              onChangeText={setMeetingTitle}
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 12,
                padding: 12,
                marginBottom: 20,
                fontFamily: "Inconsolata_400Regular",
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity
                onPress={renameScheduledCall}
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
                  Rename
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setRenameModalVisible(false)}
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
