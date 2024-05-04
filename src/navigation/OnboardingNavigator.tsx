import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Registration from "../components/screens/onBoarding/Registration";
import PhoneVerification from "../components/screens/onBoarding/PhoneVerification";
import ProfileCreationSuccess from "../components/screens/onBoarding/ProfileCreationSuccess";
import CompleteProfile from "../components/screens/onBoarding/CompleteProfile";
const Stack = createStackNavigator();

const OnboardingNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Registration">
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompleteProfile"
        component={CompleteProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PhoneVerification"
        component={PhoneVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileCreationSuccess"
        component={ProfileCreationSuccess}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
