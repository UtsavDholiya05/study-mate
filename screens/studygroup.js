import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const cardHeight = 70;

export default function App() {
  const materials = [
    { label: '+ new', color: '#D3D3D3' },
    { label: 'Group1 material', color: '#F5F5DC' },
    { label: 'Group2 material', color: '#A9A9A9' },
    { label: 'Group3 material', color: '#80866E' },
    { label: 'Group4 material', color: '#D3D3C3' },
  ];

  const MaterialCard = ({ label, color }) => {
    const handlePress = () => {
      if (label === '+ new') {
        Alert.alert('Create New Group');
      } else {
        Alert.alert(label, `Open details for ${label}`);
      }
    };

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={handlePress} style={[styles.card, { backgroundColor: color }]}>
        <View style={styles.cardContent}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.cardLabel}>{label}</Text>
        </View>
        {/* Curved edge on the right */}
        <View style={styles.cardCurve} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={width * 0.09}
            color="#9CA37C"
            style={{ alignSelf: "center", transform: [{ translateY: width * 0.06 }] }}
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

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Find Group"
        placeholderTextColor="#888"
      />

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Study Materials</Text>
        <Text style={styles.subtitle}>everything you need</Text>
      </View>

      {/* Cards */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {materials.map((item, index) => (
          <MaterialCard key={index} label={item.label} color={item.color} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },

  // Header
  header: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    marginRight: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Search Input
  searchInput: {
    marginHorizontal: 15,
    marginTop: 15,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#333',
  },

  // Title
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    marginLeft: 10,
    marginTop: 5,
    color: '#888',
  },

  // Scroll Container
  scrollContainer: {
    padding: 15,
    paddingBottom: 50,
  },

  // Card
  card: {
    height: cardHeight,
    width: screenWidth - 30,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    fontSize: 20,
    marginRight: 12,
    color: '#000',
  },
  cardLabel: {
    fontSize: 18,
    color: '#000',
  },

  // Curved Edge
  cardCurve: {
    position: 'absolute',
    top: 0,
    right: -20,
    bottom: 0,
    width: 20,
    overflow: 'hidden',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'linear-gradient(to right, transparent, #fff)',
  },
});