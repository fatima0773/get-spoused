import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text, Image } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AppColors } from "../../../utility/AppColors";
import { OtpInput } from "react-native-otp-entry";
import CommonButton from "../../common/CommonButton";
import { Ionicons } from "@expo/vector-icons";
import { AppImages } from "../../../utility/AppImages";
const VerificationCode = (props: any) => {
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const [otp, setOtp] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Ionicons
          style={{ position: "absolute", left: 15 }}
          name="chevron-back"
          size={24}
          color={AppColors.blackColor}
          onPress={() => props.navigation.navigate("SignUp")}
        />
        <Image
          source={AppImages.LOGO_BLACK}
          resizeMode="contain"
          style={{ width: 75 }}
        />
      </View>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            color: AppColors.blackColor,
            fontFamily: "Poppins_700Bold",
            fontSize: 24,
          }}
        >
          Authentication Code
        </Text>
        <Text
          style={{
            color: AppColors.secondaryText,
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            marginVertical: 10,
            marginBottom: 40,
          }}
        >
          Enter the one-time code sent to{" "}
          <Text
            style={{
              color: AppColors.appThemeColor,
              fontFamily: "Poppins_600SemiBold",
              fontSize: 12,
              marginVertical: 10,
              marginBottom: 40,
            }}
          >
            Hello@gmail.com
          </Text>
        </Text>
        <OtpInput
          numberOfDigits={5}
          focusColor={AppColors.appThemeColor}
          focusStickBlinkingDuration={500}
          onFilled={(val) => {
            setOtp(val);
          }}
          theme={{
            pinCodeContainerStyle: styles.otpContainerStyle,
            pinCodeTextStyle: styles.pinCodeText,
            filledPinCodeContainerStyle: {
              backgroundColor: AppColors.appThemeColor,
            },
          }}
        />

        <CommonButton
          title={"Confirm"}
          pressHandler={() => props.navigation.navigate("OnboardingNavigator")}
        />
        <Text
          style={{
            color: AppColors.secondaryText,
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
            marginVertical: 10,
            textAlign: "center",
          }}
        >
          Didn’t receive an authentication code?
        </Text>
        <Text
          onPress={() => {}}
          style={{
            color: AppColors.appThemeColor,
            fontFamily: "Poppins_600SemiBold",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          RESEND CODE
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 30,
  },
  checkbox: {
    borderRadius: 5,
  },
  otpContainerStyle: {
    width: "18%",
    borderColor: "rgba(0, 0, 0, 0.05)",
    marginVertical: 10,
    backgroundColor: "rgba(250, 250, 250, 1)",
  },
  pinCodeText: { color: AppColors.blackColor },
});

export default VerificationCode;
