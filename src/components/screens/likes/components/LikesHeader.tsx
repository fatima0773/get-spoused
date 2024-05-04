import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
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
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "../../../../utility/AppColors";
import { AppImages } from "../../../../utility/AppImages";

const LikesHeader = (props: any) => {
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
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={props.filterHandler}
      >
        <Image
          style={{ width: 17, height: 14 }}
          source={AppImages.FILTER_ICON}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          fontSize: 16,
          color: AppColors.blackColor,
        }}
      >
        Liked You
      </Text>
      <View style={styles.likeCountContainer}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
            color: AppColors.blackColor,
          }}
        >
          {props.likeCount}+
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  iconContainer: {
    backgroundColor: AppColors.appThemeColor,
    width: 45,
    height: 45,
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    position: "absolute",
    left: 0,
  },
  likeCountContainer: {
    backgroundColor: AppColors.appThemeColor,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 100,
    marginHorizontal: 5,
  },
});

export default LikesHeader;
