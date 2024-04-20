import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
} from "react-native";
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
import { ScrollView } from "react-native-virtualized-view";
import { AppColors } from "../../../utility/AppColors";
import { Ionicons } from "@expo/vector-icons";
import { FULL_HEIGHT } from "../../../utility/Constant";
import { InputField } from "../../common/InputField";
import CommonButton from "../../common/CommonButton";
import BreakOptions from "./components/BreakOptions";

const Break = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  const breakOptions = [
    "Met my partner on Spoused",
    "Met my partner elsewhere",
    "Taking a break",
    "Didn’t like Spoused",
    "Other",
  ];
  const [selectedOption, setSelectedOption] = useState("");

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
          Take a Break
        </Text>
        <Text
          style={[
            {
              fontFamily: "Poppins_500Medium",
            },
            styles.lightText,
          ]}
        >
          Need To Take A Break From Spoused? Don’t Worry. We’ve Got You Covered
        </Text>

        <BreakOptions options={breakOptions} setSelected={setSelectedOption} />
      </View>
      <View style={{ padding: 15 }}>
        <CommonButton
          title="Submit"
          pressHandler={() => props.navigation.navigate("GetStarted")}
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
export default Break;
