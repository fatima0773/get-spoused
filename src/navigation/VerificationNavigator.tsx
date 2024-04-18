import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/screens/home/Home";
import Notifications from "../components/screens/notifications/Notifications";
import Filters from "../components/screens/notifications/Filters";
import UserDetail from "../components/screens/home/UserDetail";
import Profile from "../components/screens/profile/Profile";
import ConfirmID from "../components/screens/idVerification/ConfirmID";
import ConfirmIdentity from "../components/screens/idVerification/ConfirmIdentity";
import FrameFace from "../components/screens/idVerification/FrameFace";
import IDVerification from "../components/screens/idVerification/IDVerification";
import UnderReview from "../components/screens/idVerification/UnderReview";
import UploadID from "../components/screens/idVerification/UploadID";
import ScanID from "../components/screens/idVerification/ScanID";
const Stack = createStackNavigator();

const VerificationNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="IDVerification">
      <Stack.Screen
        name="IDVerification"
        component={IDVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmID"
        component={ConfirmID}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmIdentity"
        component={ConfirmIdentity}
        options={{ headerShown: false }}
        initialParams={{ stepCompleted: 0 }}
      />
      <Stack.Screen
        name="FrameFace"
        component={FrameFace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UnderReview"
        component={UnderReview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadID"
        component={UploadID}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScanID"
        component={ScanID}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default VerificationNavigator;
