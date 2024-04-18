import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
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
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AppImages } from "../../../../utility/AppImages";

const ChatHeader = (props: any) => {
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
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Ionicons
          name="chevron-back"
          size={30}
          style={{ marginRight: 15 }}
          color="black"
          onPress={props.goBack}
        />
        <Image style={styles.profilePicture} source={AppImages.USER_CHRISTY} />
        <View style={{ marginLeft: 10, justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              fontSize: 14,
            }}
          >
            Sabrina Wah
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              color: AppColors.secondaryText,
              fontSize: 12,
            }}
          >
            Online
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <MaterialIcons
          style={{ marginRight: 20 }}
          name="wifi-calling-3"
          size={30}
          color={AppColors.appThemeColor}
        />
        <FontAwesome
          style={{ marginRight: 20 }}
          name="video-camera"
          size={30}
          color={AppColors.appThemeColor}
        />
        <Entypo
          style={{ marginRight: 20 }}
          name="dots-three-vertical"
          size={30}
          color={AppColors.appThemeColor}
          onPress={props.menuHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    margin: 10,
    width: "100%",
    paddingHorizontal: 15,
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
  profilePicture: {
    height: 37,
    width: 37,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: AppColors.appThemeColor,
  },
});

export default ChatHeader;
