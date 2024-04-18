import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/screens/home/Home";
import Notifications from "../components/screens/notifications/Notifications";
import Filters from "../components/screens/notifications/Filters";
import UserDetail from "../components/screens/home/UserDetail";
import Profile from "../components/screens/profile/Profile";
const Stack = createStackNavigator();

const ProfileNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
