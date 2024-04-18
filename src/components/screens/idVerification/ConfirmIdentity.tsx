import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
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
import { AppColors } from "../../../utility/AppColors";
import { Ionicons } from "@expo/vector-icons";
import CommonButton from "../../common/CommonButton";
import VerificationSteps from "./components/VerificationSteps";
import { RouteProp, useRoute } from "@react-navigation/native";
interface RouteParams {
  stepCompleted: number;
}
const ConfirmIdentity = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { stepCompleted } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 15, flex: 1 }}>
        {/* header */}
        <Ionicons
          name="chevron-back"
          size={34}
          onPress={() => props.navigation.navigate("Settings")}
          color="black"
          style={{ position: "absolute", left: 0 }}
        />

        <Text
          style={[
            {
              fontFamily: "Poppins_700Bold",
            },
            styles.heading,
          ]}
        >
          Confirm your Identity
        </Text>
        <Text
          style={[
            {
              fontFamily: "Poppins_500Medium",
            },
            styles.lightText,
          ]}
        >
          Please follow steps to get verified
        </Text>
        <VerificationSteps step={stepCompleted} />
      </View>
      {/* steps */}
      <View style={{ padding: 15 }}>
        <CommonButton
          title={
            stepCompleted === 0
              ? "Upload ID"
              : stepCompleted === 1
              ? "Scan your Face"
              : "Got it"
          }
          pressHandler={() => {
            if (stepCompleted === 0) {
              props.navigation.navigate("UploadID");
            } else if (stepCompleted === 1) {
              props.navigation.navigate("ConfirmID");
            } else if (stepCompleted === 2) {
              props.navigation.navigate("UnderReview");
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },

  heading: {
    fontSize: 24,
    color: AppColors.blackColor,
    marginVertical: 10,
    marginTop: 60,
  },
  lightText: {
    color: AppColors.secondaryText,
    fontSize: 14,
  },
});
export default ConfirmIdentity;
