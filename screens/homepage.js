import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>StudySmart</Text>
        <View style={styles.headerIcons}>
          <Image
            source={require("../assets/account_circle (3).jpg")}
            style={styles.icon}
          />
          <Text style={styles.username}>hello, nya</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* Home Title Section */}
        <View style={styles.homeSection}>
          <View style={styles.homeTitleContainer}>
            <Text style={styles.homeTitle}>HOME</Text>
            <View style={styles.speechBubble}>
              <Text style={styles.speechText}>info</Text>
            </View>
          </View>
          <Text style={styles.welcomeText}>
            Your desk is all set{"\n"}Let's get stuff done
          </Text>
        </View>

        {/* Menu Grid */}
        <View style={styles.menuGrid}>
          <View style={styles.menuRow}>
            <View style={styles.card1}>
              <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText}>get started</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Join a meeting</Text>
              <View style={styles.dot} />
            </View>

            <View style={styles.card}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>get started</Text>
              </TouchableOpacity>
              <Text style={styles.title}>EduShorts</Text>
              <View style={styles.dot} />
            </View>
          </View>

          <View style={styles.menuRow}>
            <View style={styles.card}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>get started</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Study Groups</Text>
              <View style={styles.dot} />
            </View>

            <View style={styles.card}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>get started</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Notes</Text>
              <View style={styles.dot} />
            </View>
          </View>

          <View style={styles.menuRow}>
            <View style={styles.card5}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>get started</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Study Material </Text>
              <View style={styles.dot} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF1",
  },
  header: {
    backgroundColor: "#000",
    backgroundColor: "#000",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    alignItems: "center", 
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  blueSquare: {
    width: 16,
    height: 16,
    backgroundColor: "#3b5fe2",
    marginRight: 15,
  },
  lightningIcon: {
    width: 16,
    height: 20,
    backgroundColor: "transparent",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#3b5fe2",
    transform: [{ rotate: "20deg" }],
  },
  content: {
    flex: 1,
    // paddingHorizontal: 15,
    // paddingTop: 10,
  },
  homeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    // marginBottom: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 2,
    height: 160,
    // width: 309
  },
  homeTitleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  homeTitle: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#000",
    paddingTop: 90,
  },
  speechBubble: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 8,
    marginTop: 100,
    borderWidth: 1,
    borderColor: "#000",
  },
  speechText: {
    fontSize: 12,
    color: "#000",
  },
  welcomeText: {
    fontSize: 14,
    // textAlign: "right",
    paddingRight: 5,
    color: "#555",
    marginTop: 110,
    // maxWidth: "50%",
  },
  menuGrid: {
    flex: 1,
    // width: 153
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 190,
    // borderWidth: 1,
    // borderColor: "black",
    // borderRadius: 2,
  },
  menuItem: {
    flex: 1, // Ensures equal width for all items
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 2, // Ensures a uniform border
    borderColor: "blue",
    borderRadius: 10, // Optional: rounded corners for a smoother look
  },
  menuRow1: {
    flexDirection: "row",
    // marginBottom: 15,
    height: 169,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 2,
  },
  // menuItem: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   // borderRadius: 0,
  //   padding: 20,
  //   // marginHorizontal: 5,
  //   justifyContent: "space-between",
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 2,
  //   elevation: 2,
  // },
  // menuItem1: {
  //   flex: 1,
  //   backgroundColor: "#9CA37C",
  //   // borderRadius: 0,
  //   padding: 20,
  //   // marginHorizontal: 5,
  //   justifyContent: "space-between",
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 2,
  //   elevation: 2,
  // },
  emptyItem: {
    backgroundColor: "transparent",
    shadowOpacity: 0,
    elevation: 0,
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  menuItemTitle1: {
    fontSize: 18,
    fontWeight: "500",
    color: "#9CA37C",
  },
  getStartedButton: {
    backgroundColor: "#a3b18a",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 15,
    // marginBottom: 0,
    borderRadius: 20,
  },
  getStartedText: {
    color: "#fff",
    fontSize: 14,
  },
  edushortsItem: {
    borderColor: "black",
    borderLeftWidth: 3,
    // borderRadius: 2
  },
  notes: {
    borderColor: "black",
    borderLeftWidth: 4,
  },
  meet: {
    color: "#9CA37C",
  },
  card: {
    width: 180,
    height: "auto",
    backgroundColor: "#FFFFF1",
    borderRadius: 5,
    padding: 10,
    borderWidth: 3,
    borderColor: "black",
    position: "relative",
  },
  card1: {
    width: 180,
    height: "auto",
    backgroundColor: "#9CA37C",
    borderRadius: 5,
    padding: 10,
    borderWidth: 3,
    borderColor: "black",
    position: "relative",
  },
  card5: {
    width: "100%",
    height: "auto",
    backgroundColor: "#FFFFF1",
    borderRadius: 5,
    padding: 10,
    borderWidth: 3,
    borderColor: "black",
    position: "relative",
  },
  button: {
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 10,
    alignSelf: "flex-start",
    borderWidth: 1,
  },
  button1: {
    backgroundColor: "#9CA37C",
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 10,
    alignSelf: "flex-start",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 10,
    color: "#000",
  },
  buttonText1: {
    fontSize: 10,
    color: "#9CA37C",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#000",
    borderRadius: 4,
    position: "absolute",
    top: 8,
    right: 8,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 2,
    tintColor: "white",
    borderWidth: 2,
    borderColor: "white",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
