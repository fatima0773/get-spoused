import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
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
import { ScrollView } from "react-native-virtualized-view";
import { SearchBar } from "../../common/SearchBar";
import { AppImages } from "../../../utility/AppImages";
import ChatOverview from "./components/ChatOverview";
import globalStyles from "../../../styles/globalStyles";

const Likes = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  const [chats, setChats] = useState([
    {
      name: "Sabrina Wah",
      userImage: AppImages.USER_CHRISTY,
      lastMessage: {
        content: "Hai, whats’up bro. hayu atuh hangout dei jang Sabrina",
        time: "2:30 PM",
        isOpened: true,
      },
      newMessageCount: 1,
    },
    {
      name: "Nenek Gahol",
      userImage: AppImages.USER_LARRY,
      lastMessage: {
        content: "Cu, nenek masakin lepeut buat cucu tersayang uhuyy",
        time: "2:29 PM",
        isOpened: true,
      },
      newMessageCount: 2,
    },
    {
      name: "Suami Orangs",
      userImage: AppImages.USER_CHRISTY,
      lastMessage: {
        content: "Skuy atuh rada nonton ayena ka moviplek wkwk :)",
        time: "2:29 PM",
        isOpened: false,
      },
      newMessageCount: 3,
    },
    {
      name: "Komandan Asep",
      userImage: AppImages.USER_LARRY,
      lastMessage: {
        content: "Kumaha cenah eh di read hungkul hm ah slek we",
        time: "2:29 PM",
        isOpened: false,
      },
      newMessageCount: 1,
    },
    {
      name: "Jesicca Rubi",
      userImage: AppImages.USER_LARRY,
      lastMessage: {
        content: "Hai, bestie kapan nikah atuh sama si banbang tea hihi",
        time: "1:20 PM",
        isOpened: false,
      },
      newMessageCount: 5,
    },
  ]);

  return (
    <SafeAreaView style={[styles.container, globalStyles.androidSafeArea]}>
      <ScrollView style={{ padding: 15 }}>
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            color: AppColors.blackColor,
            fontSize: 24,
          }}
        >
          Your Chats Messages
        </Text>
        <SearchBar placeholder="Search Messages..." />
        {chats.map((item, index) => (
          <ChatOverview
            user={item}
            key={index}
            pressHandler={() => props.navigation.navigate("ChatScreen")}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: AppColors.appThemeColor,
    width: 45,
    height: 45,
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  titleText: {
    color: AppColors.blackColor,
    fontSize: 16,
  },
  lightText: {
    color: AppColors.secondaryText,
    fontSize: 14,
  },
  standardText: {
    color: AppColors.blackColor,
    fontSize: 14,
  },
  advancedFilters: {
    backgroundColor: "rgba(161, 121, 0, 0.1)",
    padding: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  advanceFilterTitle: {
    color: "rgba(161, 121, 0, 1)",
    marginVertical: 10,
    fontSize: 14,
  },
});

export default Likes;
