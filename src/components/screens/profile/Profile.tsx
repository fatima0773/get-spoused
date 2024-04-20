import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AppColors } from "../../../utility/AppColors";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import ProfileHeader from "./components/ProfileHeader";
import PremiumOverview from "./components/PremiumOverview";
import PlanOverview from "./components/PlanOverview";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfileHeader
          filterHandler={() => props.navigation.navigate("Filters")}
          viewProfileHandler={() => props.navigation.navigate("ViewProfile")}
          boostingHandler={() => props.navigation.navigate("Boosting")}
        />
        <PremiumOverview
          manageSubscription={() =>
            props.navigation.navigate("ManageSubscription")
          }
        />
        <PlanOverview />
        {/* settings */}
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => props.navigation.navigate("Settings")}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="settings" size={24} color="black" />
          </View>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              color: AppColors.blackColor,
              fontSize: 14,
              flex: 1,
              marginHorizontal: 10,
            }}
          >
            Settings
          </Text>
          <Ionicons name="caret-forward" size={24} color="black" />
        </TouchableOpacity>
        {/* ID Verification */}
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => props.navigation.navigate("Verification")}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="verified" size={24} color="black" />
          </View>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              color: AppColors.blackColor,
              fontSize: 14,
              flex: 1,
              marginHorizontal: 10,
            }}
          >
            ID Verifcation
          </Text>
          <Ionicons name="caret-forward" size={24} color="black" />
        </TouchableOpacity>
        {/* Contact Us */}
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => props.navigation.navigate("Contact")}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="quick-contacts-mail" size={24} color="black" />
          </View>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              color: AppColors.blackColor,
              fontSize: 14,
              flex: 1,
              marginHorizontal: 10,
            }}
          >
            Contact Us
          </Text>
          <Ionicons name="caret-forward" size={24} color="black" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 15,
    justifyContent: "space-between",
  },
  iconContainer: {
    backgroundColor: AppColors.appThemeColor,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
