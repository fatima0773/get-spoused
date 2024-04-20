import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SearchBar } from "../../../common/SearchBar";
import { AppColors } from "../../../../utility/AppColors";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { s } from "react-native-size-matters";

export default function Question(props: any) {
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const styles = StyleSheet.create({
    inputContainer: {
      color: AppColors.primaryText,
      borderColor: AppColors.greyOutline,
      borderWidth: 1,
      paddingLeft: 10,
      borderRadius: 10,
      height: 55,
      width: "100%",
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: AppColors.greyFill,
      padding: 10,
    },
    input: {
      paddingHorizontal: s(5),
      width: "80%",
    },
    checkbox: {
      borderRadius: 500,
    },
    selectedOption: {
      borderColor: AppColors.appThemeColor,
    },
    container: {
      flex: 1,
      backgroundColor: AppColors.whiteColor,
    },
    contentWrapper: {
      padding: 15,
      marginTop: 30,
    },
  });
  return (
    <View style={styles.contentWrapper}>
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          fontSize: 24,
          color: AppColors.blackColor,
        }}
      >
        {props.heading}
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_400Regular",
          fontSize: 12,
          color: AppColors.secondaryText,
          marginVertical: 10,
        }}
      >
        {props.subheading}
      </Text>
      {props.addSearch ? <SearchBar placeholder={props.placeholder} /> : null}
      {props.children}
    </View>
  );
}
