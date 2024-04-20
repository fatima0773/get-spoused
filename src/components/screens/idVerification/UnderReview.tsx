import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { AppColors } from "../../../utility/AppColors";
import { AppImages } from "../../../utility/AppImages";
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
import { MaterialIcons } from "@expo/vector-icons";

const UnderReview = (props: any) => {
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
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 15,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <MaterialIcons
          onPress={() => props.navigation.navigate("Home")}
          name="cancel"
          size={34}
          color="white"
          style={{ margin: 5, position: "absolute", left: 15, top: 20 }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 24,
              color: AppColors.blackColor,
              textAlign: "center",
            }}
          >
            Reviewing Your{"\n"}Documents
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 14,
              color: AppColors.secondaryText,
              marginVertical: 20,
            }}
          >
            This May Take A Few Seconds...
          </Text>
          <Image
            source={AppImages.DOCUMENT_REVIEW}
            style={{ height: 281, width: 281 }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={{ padding: 15 }}>
        <Text style={[{ fontFamily: "Poppins_400Regular" }, styles.lightText]}>
          Feel Free To Close This Screen To Get Back To{"\n"}Your Matches. We
          Will Notify You Once You’ve{"\n"}Been Verified
        </Text>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={{
            backgroundColor: AppColors.blackColor,
            padding: 15,
            borderRadius: 220,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 16,
              color: AppColors.whiteColor,
            }}
          >
            Okay
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.appThemeColor,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "space-between",
    paddingBottom: 15,
  },
  lightText: {
    color: AppColors.secondaryText,
    textAlign: "center",
    marginVertical: 10,
  },
  contentContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 12,
    paddingHorizontal: 25,
    borderRadius: 100,
    marginVertical: 5,
  },
});

export default UnderReview;
