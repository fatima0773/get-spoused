import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import BlackHeader from "../../common/BlackHeader";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AppColors } from "../../../utility/AppColors";
import { OtpInput } from "react-native-otp-entry";
import CommonButton from "../../common/CommonButton";
const VerificationCode = (props: any) => {
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const [otp, setOtp] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <BlackHeader
        backHandler={() => props.navigation.navigate("GetStarted")}
      />
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
          Enter the OTP sent to{" "}
          <Text
            style={{
              color: AppColors.appThemeColor,
              fontFamily: "Poppins_600SemiBold",
              fontSize: 12,
              marginVertical: 10,
              marginBottom: 40,
            }}
          ></Text>
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
          Did not get the OTP?
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
          RESEND OTP
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
    borderColor: AppColors.appThemeColor,
    marginVertical: 10,
  },
  pinCodeText: { color: AppColors.appThemeColor },
});

export default VerificationCode;
