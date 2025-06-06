import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import { Inconsolata_400Regular } from "@expo-google-fonts/inconsolata";
import LoginScreen from "./screens/loginscreen";
import SignupScreen from "./screens/signupscreen";
import ForgotPass from "./screens/forgotpass";
import OtpScreen from "./screens/otpscreen";
import Homepage from "./screens/Homepage"; // Ensure this is correctly imported
import profilepage from "./screens/profilepage";
import mygroups from "./screens/mygroups";
import EditProfilePage from "./screens/EditProfilePage"; // Ensure this is correctly imported
import notificationpage from "./screens/notificationpage";
import { PlayfairDisplay_400Regular } from "@expo-google-fonts/playfair-display";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import MeetingScreen from "./screens/Meeting/MeetingScreen";
import bottomtab from "./screens/bottomtab";
import studymaterial from "./screens/studygroup";
import CustomDrawer from "./screens/customDrawer";
import studymaterialpage from "./screens/studymaterialpage";
import Edushorts from "./screens/Edushorts"; 
import ToDoList from "./screens/ToDoList";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="homepage">
      <Stack.Screen name="loginscreen" component={LoginScreen} />
      <Stack.Screen name="homepage" component={Homepage} />
      <Stack.Screen name ="otpscreen" component={OtpScreen} />
      <Stack.Screen name="profilepage" component={profilepage} />
      <Stack.Screen name="mygroups" component={mygroups} />
      <Stack.Screen name="notificationpage" component={notificationpage} />
      <Stack.Screen name="editprofilepage" component={EditProfilePage} />
      <Stack.Screen name="meetingscreen" component={MeetingScreen} />
      <Stack.Screen name="bottomtab" component={bottomtab} />
      <Stack.Screen name="studymaterial" component={studymaterial} />
      <Stack.Screen name="notes" component={require("./screens/notesScreen").default} />
      <Stack.Screen name="studymaterialpage" component={studymaterialpage} />
      <Stack.Screen name="Edushorts" component={Edushorts} />
      <Stack.Screen name="ToDoList" component={ToDoList} />
    </Stack.Navigator>
  );
}

const App = () => {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Inconsolata_400Regular,
    PlayfairDisplay_400Regular,
    Inter_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // You can replace this with a loading indicator
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: "100%",
            backgroundColor: "#111",
          },
          overlayColor: "rgba(0,0,0,0.3)",
        }}
        initialRouteName="MainStack"
      >
        <Drawer.Screen name="MainStack" component={MainStack} />
        <Drawer.Screen name="login" component={LoginScreen} />
        <Drawer.Screen name="signup" component={SignupScreen} />
        <Drawer.Screen name="forgotpass" component={ForgotPass} />
        <Drawer.Screen name="otpscreen" component={OtpScreen} />  
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
