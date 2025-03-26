import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>StudySmart</Text>
        <View style={styles.headerIcons}>
          <View style={styles.blueSquare} />
          <View style={styles.lightningIcon} />
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
          <Text style={styles.welcomeText}>Your desk is all set{"\n"}Let's get stuff done</Text>
        </View>

        {/* Menu Grid */}
        <View style={styles.menuGrid}>
          <View style={styles.menuRow}>
            <View style={[styles.menuItem1, styles.meet]}>
              <Text style={styles.menuItemTitle}>Join a meeting</Text>
              <TouchableOpacity style={styles.getStartedButton}>
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.menuItem, styles.edushortsItem]}>
              <Text style={styles.menuItemTitle}>EduShorts</Text>
              <TouchableOpacity style={styles.getStartedButton}>
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.menuRow}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemTitle}>Study Groups</Text>
              <TouchableOpacity style={styles.getStartedButton}>
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.menuItem, styles.notes]}>
              <Text style={styles.menuItemTitle}>Notes</Text>
              <TouchableOpacity style={styles.getStartedButton}>
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.menuRow1}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemTitle}>Join a meeting</Text>
              <TouchableOpacity style={styles.getStartedButton}>
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.emptyItem} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF1",
  },
  header: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
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
    borderColor:"black",
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
    paddingTop: 90
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
    // marginBottom: 15,
    height: 190,
    borderWidth: 2,
    borderColor:"black",
    borderRadius: 2,
  },  
  menuRow1: {
    flexDirection: "row",
    // marginBottom: 15,
    height: 169,
    borderWidth: 2,
    borderColor:"black",
    borderRadius: 2,
  },
  menuItem: {
    flex: 1,
    backgroundColor: "#fff",
    // borderRadius: 0,
    padding: 20,
    // marginHorizontal: 5,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItem1: {
    flex: 1,
    backgroundColor: "#9CA37C",
    // borderRadius: 0,
    padding: 20,
    // marginHorizontal: 5,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
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
    borderColor:"black",
    borderLeftWidth: 3,
    // borderRadius: 2
  },
  notes: {
    borderColor:"black",
    borderLeftWidth: 4,
  },
  meet:{
    color:"#9CA37C"
  }
})

