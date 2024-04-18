import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { AppColors } from "../../../../utility/AppColors";
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
export default function Header(props: any) {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const stepHandler = () => {
    if (props.currentStep > 1) {
      props.setCurrentStep(props.currentStep - 1);
    }
  };
  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back"
        size={24}
        color={AppColors.blackColor}
        onPress={stepHandler}
      />
      <Text
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: 14,
          marginHorizontal: 10,
          color: AppColors.blackColor,
        }}
      >
        Complete your Profile
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          fontSize: 14,
          marginHorizontal: 10,
          flex: 1,
          textAlign: "right",
          color: AppColors.appThemeColor,
        }}
      >
        {((props.currentStep / 16) * 100).toFixed(0)}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  headerContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  contentWrapper: {
    padding: 15,
    marginTop: 30,
  },
  buttonContainer: {
    // position: "absolute",
    // bottom: 20,
    width: "100%",
    paddingHorizontal: 15,
  },
  blurPhotoContainer: {
    width: "100%",
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
