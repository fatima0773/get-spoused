import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SearchBar } from "../../../common/SearchBar";
import OptionSelect from "../../../common/OptionSelect";
import { AppColors } from "../../../../utility/AppColors";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function Question(props: any) {
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const [selectedProfession, setSelectProfession] = useState("");
  const profession = [
    "Lead Infrastructure Analyst",
    "Investor Applications Architect",
    "District Configuration Technician",
    "Product Operations Strategist",
    "Direct Usability Facilitator",
    "Central Solutions Manager",
    "Internal Integration Designer",
  ];
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
      {props.addSearch ? <SearchBar placeholder="Search" /> : null}

      <OptionSelect options={props.data} setSelected={props.setSelected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  contentWrapper: {
    padding: 15,
    marginTop: 30,
  },
});
