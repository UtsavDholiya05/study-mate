import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/loginscreen";
import SignupScreen from "./screens/signupscreen";
import homepage from"./screens/homepage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} /> */}
        <Stack.Screen name="Home" component={homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
