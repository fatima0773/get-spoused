import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../components/screens/Splash";
import GetStarted from "../components/screens/GetStarted";
import SignUp from "../components/screens/onBoarding/SignUp";
import SignIn from "../components/screens/onBoarding/SignIn";
import VerificationCode from "../components/screens/onBoarding/VerificationCode";
import Registration from "../components/screens/onBoarding/Registration";
import PhoneVerification from "../components/screens/onBoarding/PhoneVerification";
import OnboardingNavigator from "./OnboardingNavigator";
import CompleteProfile from "../components/screens/onBoarding/CompleteProfile";
import ProfileCreationSuccess from "../components/screens/onBoarding/ProfileCreationSuccess";
import TabNavigator from "./TabNavigator";
import Match from "../components/screens/home/Match";
import ChatScreen from "../components/screens/chat/ChatScreen";
import ManageSubscription from "../components/screens/profile/ManageSubscription";
import Boosting from "../components/screens/profile/Boosting";
import PremiumPlan from "../components/screens/profile/PremiumPlan";
import ViewProfile from "../components/screens/profile/ViewProfile";
import Settings from "../components/screens/profile/Settings";
import Contact from "../components/screens/profile/Contact";
import Break from "../components/screens/profile/Break";
import VerificationNavigator from "./VerificationNavigator";
import DetailsNavigator from "./DetailsNavigator";
import EthnicGroup from "../components/screens/details/EthnicGroup";

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingNavigator"
          component={OnboardingNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Match"
          component={Match}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageSubscription"
          component={ManageSubscription}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Boosting"
          component={Boosting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PremiumPlan"
          component={PremiumPlan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewProfile"
          component={ViewProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Break"
          component={Break}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Verification"
          component={VerificationNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
