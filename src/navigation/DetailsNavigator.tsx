import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EthnicGroup from "../components/screens/details/EthnicGroup";
import AgePreference from "../components/screens/details/AgePreference";
import Bio from "../components/screens/details/Bio";
import Children from "../components/screens/details/Children";
import CurrentLocation from "../components/screens/details/CurrentLocation";
import DateOfBirth from "../components/screens/details/DateOfBirth";
import Drink from "../components/screens/details/Drink";
import Education from "../components/screens/details/Education";
import Email from "../components/screens/details/Email";
import Employer from "../components/screens/details/Employer";
import Ethnicity from "../components/screens/details/Ethnicity";
import Gender from "../components/screens/details/Gender";
import Height from "../components/screens/details/Height";
import Interests from "../components/screens/details/Interests";
import JobTitle from "../components/screens/details/JobTitle";
import Language from "../components/screens/details/Language";
import MaritalStatus from "../components/screens/details/MaritalStatus";
import Name from "../components/screens/details/Name";
import PersonalityTraits from "../components/screens/details/PersonalityTraits";
import PhoneNumber from "../components/screens/details/PhoneNumber";
import Profession from "../components/screens/details/Profession";
import Religion from "../components/screens/details/Religion";
import Smoke from "../components/screens/details/Smoke";
import StarSign from "../components/screens/details/StarSign";
import TravelMode from "../components/screens/details/TravelMode";
const Stack = createStackNavigator();

const DetailsNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
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
        component={Interests}
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
    </Stack.Navigator>
  );
};

export default DetailsNavigator;
