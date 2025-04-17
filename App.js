import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import { Inconsolata_400Regular } from "@expo-google-fonts/inconsolata";
import LoginScreen from "./screens/loginscreen";
import SignupScreen from "./screens/signupscreen";
import ForgotPass from "./screens/forgotpass";
import OtpScreen from "./screens/otpscreen";
import homepage from "./screens/homepage";
import profilepage from "./screens/profilepage"
import mygroups from "./screens/mygroups"
import EditProfilePage from "./screens/editprofilepage";
import notificationpage from "./screens/notificationpage"
import { PlayfairDisplay_400Regular } from "@expo-google-fonts/playfair-display";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import MeetingScreen from "./screens/Meeting/MeetingScreen";


const Stack = createStackNavigator();

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({ Kanit_400Regular, Inconsolata_400Regular, PlayfairDisplay_400Regular, Inter_400Regular});

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
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="profilepage">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="forgotpass" component={ForgotPass} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="homepage" component={homepage} />
        <Stack.Screen name="profilepage" component={profilepage} />
        <Stack.Screen name="mygroups" component={mygroups} />
        <Stack.Screen name="notificationpage" component={notificationpage} />
        <Stack.Screen name="editprofilepage" component={EditProfilePage} />
        <Stack.Screen name="meetingscreen" component={MeetingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
