import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, ScrollView, Text } from "react-native";
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
import Header from "../../common/Header";
import Notification from "./components/notification";

const Notifications = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [notifications, setNotifications] = useState([
    {
      title: "Notification Title",
      content: "Kumaha cenah eh di read hungkul hm ah slek we",
      time: "2:24 PM",
    },
    {
      title: "Notification Title",
      content: "Kumaha cenah eh di read hungkul hm ah slek we",
      time: "2:24 PM",
    },
    {
      title: "Notification Title",
      content: "Kumaha cenah eh di read hungkul hm ah slek we",
      time: "2:24 PM",
    },
    {
      title: "Notification Title",
      content: "Kumaha cenah eh di read hungkul hm ah slek we",
      time: "2:24 PM",
    },
    {
      title: "Notification Title",
      content: "Kumaha cenah eh di read hungkul hm ah slek we",
      time: "2:24 PM",
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header
          title={"Notifications"}
          backHandler={() => props.navigation.navigate("Home")}
        />
        <View style={{ padding: 15 }}>
          <Text
            style={[
              styles.titleText,
              {
                fontFamily: "Poppins_500Medium",
              },
            ]}
          >
            Today
          </Text>
          {notifications.map((item, index) => (
            <Notification index={index} notification={item} />
          ))}
          <Text
            style={[
              styles.titleText,
              {
                fontFamily: "Poppins_500Medium",
              },
            ]}
          >
            13 Jan, 2024
          </Text>
          {notifications.map((item, index) => (
            <Notification index={index} notification={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  titleText: {
    color: AppColors.blackColor,
    fontSize: 14,
    marginTop: 40,
  },
});

export default Notifications;
