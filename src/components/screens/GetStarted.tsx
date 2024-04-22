import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { AppColors } from "../../utility/AppColors";
import { AppImages } from "../../utility/AppImages";
import { FULL_WIDTH } from "../../utility/Constant";
import { AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { EvilIcons } from "@expo/vector-icons";

const GetStarted = (props: any) => {
  useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={AppImages.GET_STARTED_HEADER}
        style={styles.headerImage}
        resizeMode="contain"
      />
      <Image source={AppImages.LOGO} resizeMode="contain" style={styles.logo} />
      <Text
        style={{
          color: AppColors.blackColor,
          fontFamily: "Poppins_300Light",
          fontSize: 30,
          marginBottom: 30,
          marginTop: 30,
        }}
      >
        Date With Purpose!
      </Text>
      {/* Continue with Apple */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: AppColors.blackColor }]}
      >
        <AntDesign name="apple1" size={20} color={AppColors.whiteColor} />
        <Text
          style={{
            color: AppColors.whiteColor,
            fontFamily: "Poppins_500Medium",
            fontSize: 14,
            marginHorizontal: 10,
          }}
        >
          Continue with Apple
        </Text>
      </TouchableOpacity>
      {/* Continue with Google */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: AppColors.whiteColor }]}
      >
        <Image style={styles.googleIcon} source={AppImages.GOOGLE_ICON} />
        <Text
          style={{
            color: AppColors.blackColor,
            fontFamily: "Poppins_500Medium",
            fontSize: 14,
            marginHorizontal: 10,
          }}
        >
          Continue with Google
        </Text>
      </TouchableOpacity>

      {/* continue with facebook */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "rgba(22, 126, 230, 1)" }]}
      >
        <EvilIcons name="sc-facebook" size={24} color="white" />
        <Text
          style={{
            color: AppColors.whiteColor,
            fontFamily: "Poppins_500Medium",
            fontSize: 14,
            marginHorizontal: 10,
          }}
        >
          Continue with Facebook
        </Text>
      </TouchableOpacity>

      {/* continue with email */}
      <Text
        onPress={() => {
          props.navigation.navigate("SignIn");
        }}
        style={{
          color: AppColors.blackColor,
          fontFamily: "Poppins_600SemiBold",
          fontSize: 14,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Continue with Email
      </Text>

      {/* Create an account */}
      <View style={{ position: "absolute", bottom: 40 }}>
        <Text
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
          style={{
            color: AppColors.blackColor,
            fontFamily: "Poppins_600SemiBold",
            fontSize: 14,
            textDecorationLine: "underline",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Create an account
        </Text>

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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.appThemeColor,
  },
  headerImage: {
    position: "absolute",
    top: -250,
    width: FULL_WIDTH,
  },
  logo: {
    width: 250,
    marginTop: 50,
  },
  button: {
    width: "80%",
    borderRadius: 100,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  googleIcon: {
    height: 24,
    width: 24,
  },
});

export default GetStarted;
