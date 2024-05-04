import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../components/screens/Splash";
import GetStarted from "../components/screens/GetStarted";
import SignUp from "../components/screens/onBoarding/SignUp";
import SignIn from "../components/screens/onBoarding/SignIn";
import VerificationCode from "../components/screens/onBoarding/VerificationCode";
import OnboardingNavigator from "./OnboardingNavigator";
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
import EthnicGroup from "../components/screens/details/EthnicGroup";
import StarSign from "../components/screens/details/StarSign";
import TravelMode from "../components/screens/details/TravelMode";
import Smoke from "../components/screens/details/Smoke";
import Religion from "../components/screens/details/Religion";
import PhoneNumber from "../components/screens/details/PhoneNumber";
import Profession from "../components/screens/details/Profession";
import PersonalityTraits from "../components/screens/details/PersonalityTraits";
import Name from "../components/screens/details/Name";
import MaritalStatus from "../components/screens/details/MaritalStatus";
import Language from "../components/screens/details/Language";
import JobTitle from "../components/screens/details/JobTitle";
import Height from "../components/screens/details/Height";
import Gender from "../components/screens/details/Gender";
import Ethnicity from "../components/screens/details/Ethnicity";
import Employer from "../components/screens/details/Employer";
import Email from "../components/screens/details/Email";
import Education from "../components/screens/details/Education";
import Drink from "../components/screens/details/Drink";
import DateOfBirth from "../components/screens/details/DateOfBirth";
import CurrentLocation from "../components/screens/details/CurrentLocation";
import Children from "../components/screens/details/Children";
import Bio from "../components/screens/details/Bio";
import AgePreference from "../components/screens/details/AgePreference";
import Interest from "../components/screens/details/Interests";
import DatingPreference from "../components/screens/details/DatingPreference";
import CompleteProfile from "../components/screens/onBoarding/CompleteProfile";

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
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfile}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
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
        {/* <Stack.Screen
          name="Details"
          component={DetailsNavigator}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="EthnicGroup"
          component={EthnicGroup}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="AgePreference"
          component={AgePreference}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="Bio"
          component={Bio}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="Children"
          component={Children}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="CurrentLocation"
          component={CurrentLocation}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="DateOfBirth"
          component={DateOfBirth}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="Drink"
          component={Drink}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="Education"
          component={Education}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="Email"
          component={Email}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="Employer"
          component={Employer}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="Ethnicity"
          component={Ethnicity}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="Height"
          component={Height}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="Interests"
          component={Interest}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="JobTitle"
          component={JobTitle}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="MaritalStatus"
          component={MaritalStatus}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="PersonalityTraits"
          component={PersonalityTraits}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="Profession"
          component={Profession}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumber}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="Religion"
          component={Religion}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="Smoke"
          component={Smoke}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="StarSign"
          component={StarSign}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />

        <Stack.Screen
          name="TravelMode"
          component={TravelMode}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
        <Stack.Screen
          name="DatingPreference"
          component={DatingPreference}
          options={{ headerShown: false }}
          initialParams={{ back: 0 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
