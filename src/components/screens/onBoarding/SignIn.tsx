import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import BlackHeader from "../../common/BlackHeader";
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
import { InputField } from "../../common/InputField";
import Checkbox from "expo-checkbox";
import CommonButton from "../../common/CommonButton";
const SignIn = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
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
          Continue With Email
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
          Enter Your Email
        </Text>
        <InputField
          label={"Email"}
          text={email}
          onChangeText={setEmail}
          placeholder="Enter Email"
        />
        <InputField
          label={"Password"}
          text={password}
          onChangeText={setPassword}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        {/* terms and conditions */}
        <View style={styles.checkBoxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? AppColors.appThemeColor : AppColors.blackColor}
          />
          <Text
            style={{
              color: AppColors.secondaryText,
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              marginHorizontal: 10,
            }}
          >
            I agree to the{" "}
            <Text
              style={{
                color: AppColors.blackColor,
                fontFamily: "Poppins_400Regular",
                fontSize: 12,
                marginHorizontal: 10,
              }}
            >
              Terms And Conditions
            </Text>
          </Text>
        </View>

        <CommonButton
          title={"Continue"}
          pressHandler={() => {
            props.navigation.navigate("Tab");
          }}
        />
      </View>
      {/* terms and conditions */}
      <View style={{ position: "absolute", bottom: 40, width: "100%" }}>
        <Text
          style={{
            color: AppColors.secondaryText,
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          By continuing you agree to our
        </Text>
        <Text
          onPress={() => {}}
          style={{
            color: AppColors.blackColor,
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          TERMS & PRIVACY POLICY
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
    marginBottom: 40,
  },
  checkbox: {
    borderRadius: 5,
  },
});

export default SignIn;
