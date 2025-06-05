import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const StudyMaterialPage = () => {
  const navigation = useNavigation();
  const [subjects, setSubjects] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const [renameSubjectId, setRenameSubjectId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadSubjects = async () => {
      const storedSubjects = await AsyncStorage.getItem("subjects");
      if (storedSubjects) setSubjects(JSON.parse(storedSubjects));
    };
    loadSubjects();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = () => {
    if (subjectName.trim()) {
      const newSubject = { id: Date.now(), name: subjectName.trim() };
      setSubjects([...subjects, newSubject]);
      setSubjectName("");
      setModalVisible(false);
    } else Alert.alert("Error", "Subject name cannot be empty.");
  };

  const renameSubject = () => {
    if (subjectName.trim()) {
      setSubjects(
        subjects.map((subject) =>
          subject.id === renameSubjectId
            ? { ...subject, name: subjectName.trim() }
            : subject
        )
      );
      setSubjectName("");
      setRenameSubjectId(null);
      setModalVisible(false);
    } else Alert.alert("Error", "Subject name cannot be empty.");
  };

  const deleteSubject = (id) => {
    Alert.alert("Delete Subject", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setSubjects(subjects.filter((subject) => subject.id !== id)),
      },
    ]);
  };

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SUBJECT_SIZE = (width - 2 * 20 - 2 * (width * 0.02) - 16) / 2; // fits inside container

  const renderSubject = ({ item }) => (
    <View
      style={{
        backgroundColor: "#FFD700",
        width: SUBJECT_SIZE,
        height: SUBJECT_SIZE,
        borderRadius: 15,
        margin: 5, // smaller margin
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        position: "relative",
      }}
    >
      <TouchableOpacity
        style={{ position: "absolute", top: 8, left: 8 }}
        onPress={() => {
          setModalVisible(true);
          setRenameSubjectId(item.id);
          setSubjectName(item.name);
        }}
      >
        <MaterialIcons name="edit" size={22} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ position: "absolute", top: 8, right: 8 }}
        onPress={() => deleteSubject(item.id)}
      >
        <MaterialIcons name="delete" size={22} color="red" />
      </TouchableOpacity>
      <MaterialIcons name="menu-book" size={SUBJECT_SIZE * 0.3} color="#000" />
      <Text
        style={{
          fontSize: SUBJECT_SIZE * 0.12,
          color: "#000",
          textAlign: "center",
          marginTop: 5,
        }}
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
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
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
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

      {/* Search & Title */}
      <View
        style={{
          backgroundColor: "#FFFFF1",
          marginHorizontal: width * 0.02,
          marginTop: 10,
          padding: 20,
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Search Subject"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 10,
            fontSize: width * 0.04,
            borderWidth: 1,
            borderColor: "#ccc",
            marginBottom: 15,
          }}
        />
        <Text
          style={{
            color: "#000",
            fontSize: width * 0.08,
            fontWeight: "bold",
            fontFamily: "PlayfairDisplay_400Regular",
            marginBottom: 5,
          }}
        >
          Subjects
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: width * 0.04,
            fontFamily: "Inter_400Regular",
          }}
        >
          Manage your study subjects
        </Text>
      </View>

      {/* Subject Grid */}
      <View
        style={{
          backgroundColor: "#FFFFF1",
          margin: width * 0.02,
          padding: 20,
          borderRadius: 10,
          flex: 1,
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: width * 0.05,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          All Subjects
        </Text>

        {/* Add Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#E0E0E0",
            padding: 12,
            borderRadius: 10,
            marginBottom: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
          onPress={() => {
            setModalVisible(true);
            setRenameSubjectId(null);
          }}
        >
          <MaterialIcons name="add" size={24} color="#000" />
          <Text style={{ fontSize: 16, color: "#000", marginLeft: 6 }}>
            Add Subject
          </Text>
        </TouchableOpacity>

        {/* Subject Grid */}
        <FlatList
          data={filteredSubjects}
          renderItem={renderSubject}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{
            paddingBottom: 30,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
        />
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
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
              padding: 20,
              borderRadius: 15,
              width: "80%",
            }}
          >
            <TextInput
              placeholder="Enter Subject Name"
              value={subjectName}
              onChangeText={setSubjectName}
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                padding: 10,
                marginBottom: 20,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#9CA37C",
                padding: 10,
                borderRadius: 10,
                alignItems: "center",
              }}
              onPress={renameSubjectId ? renameSubject : addSubject}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {renameSubjectId ? "Rename Subject" : "Add Subject"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 10, alignItems: "center" }}
              onPress={() => {
                setModalVisible(false);
                setSubjectName("");
                setRenameSubjectId(null);
              }}
            >
              <Text style={{ color: "red" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default StudyMaterialPage;
