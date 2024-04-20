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
import { AppColors } from "../../../utility/AppColors";
import { Ionicons } from "@expo/vector-icons";
import CommonButton from "../../common/CommonButton";
const ScanID = (props: any) => {
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
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <Ionicons
          name="chevron-back"
          size={30}
          onPress={() => props.navigation.navigate("UploadID")}
          color="black"
          style={{ position: "absolute", left: 0 }}
        />
        <Text
          style={[
            styles.heading,
            {
              fontFamily: "Poppins_700Bold",
              textAlign: "center",
            },
          ]}
        >
          Scan your ID (Front)
        </Text>
      </View>
      <View style={{ padding: 15, flex: 1 }}>
        <View
          style={{
            backgroundColor: AppColors.greyFill,
            height: 200,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.05)",
            marginTop: 30,
          }}
        />
        <Text
          style={[
            styles.lightText,
            {
              fontFamily: "Poppins_500Medium",
              marginVertical: 20,
            },
          ]}
        >
          Scan your front page of ID Document
        </Text>
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <CommonButton
          title="Submit"
          pressHandler={() =>
            props.navigation.navigate("ConfirmIdentity", { stepCompleted: 1 })
          }
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
    fontSize: 16,
    color: AppColors.blackColor,
  },
  lightText: {
    color: AppColors.secondaryText,
    fontSize: 14,
  },
});
export default ScanID;
