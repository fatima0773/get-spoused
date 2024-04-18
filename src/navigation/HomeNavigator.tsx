import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/screens/home/Home";
import Notifications from "../components/screens/notifications/Notifications";
import Filters from "../components/screens/notifications/Filters";
import UserDetail from "../components/screens/home/UserDetail";
const Stack = createStackNavigator();

const HomeNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Registration">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Filters"
        component={Filters}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
