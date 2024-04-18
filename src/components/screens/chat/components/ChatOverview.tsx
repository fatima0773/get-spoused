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
import { AppColors } from "../../../../utility/AppColors";

const ChatOverview = (props: any) => {
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
    <TouchableOpacity
      style={styles.container}
      key={props.index}
      onPress={props.pressHandler}
    >
      <Image style={styles.profilePicture} source={props.user.userImage} />
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            color: AppColors.blackColor,
            fontSize: 14,
          }}
        >
          {props.user.name}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: props.user.lastMessage.isOpened
              ? AppColors.blackColor
              : AppColors.secondaryText,
            fontSize: 12,
          }}
        >
          {props.user.lastMessage.content}
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {props.user.lastMessage.isOpened && (
          <View
            style={{
              backgroundColor: AppColors.appThemeColor,
              width: 20,
              height: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 200,
              marginVertical: 5,
            }}
          >
            <Text>{props.user.newMessageCount}</Text>
          </View>
        )}
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: props.user.lastMessage.isOpened
              ? AppColors.blackColor
              : AppColors.secondaryText,
            fontSize: 12,
          }}
        >
          {props.user.lastMessage.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginVertical: 15,
  },
  profilePicture: {
    height: 52,
    width: 52,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: AppColors.appThemeColor,
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

export default ChatOverview;
