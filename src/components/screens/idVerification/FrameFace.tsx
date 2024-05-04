import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  Image,
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
import { AppImages } from "../../../utility/AppImages";
import globalStyles from "../../../styles/globalStyles";

const FrameFace = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  return (
    <SafeAreaView style={[styles.container, globalStyles.androidSafeArea]}>
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
          Frame your face
        </Text>
      </View>
      <View
        style={{ padding: 15, flex: 1, alignItems: "center", marginTop: 40 }}
      >
        <Image
          source={AppImages.FRAME_YOUR_FACE}
          style={{ width: 340, height: 450 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <CommonButton
          title="Submit"
          pressHandler={() =>
            props.navigation.navigate("ConfirmIdentity", { stepCompleted: 2 })
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
export default FrameFace;
