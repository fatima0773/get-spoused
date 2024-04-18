import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Modal,
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
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
import { AppColors } from "../../../../utility/AppColors";
import { AppImages } from "../../../../utility/AppImages";
import { MaterialIcons } from "@expo/vector-icons";
const PlanOverview = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [isPremium, setIsPremium] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            color: AppColors.blackColor,
            fontSize: 24,
          }}
        >
          15
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: AppColors.blackColor,
            fontSize: 14,
            marginVertical: 10,
          }}
        >
          Likes Remaining
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: AppColors.secondaryText,
            fontSize: 14,
          }}
        >
          Get Unlimited with Premium
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              color: AppColors.whiteColor,
              fontSize: 14,
            }}
          >
            Upgrade
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            color: AppColors.blackColor,
            fontSize: 24,
          }}
        >
          05
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: AppColors.blackColor,
            fontSize: 14,
            marginVertical: 10,
          }}
        >
          Instant Chats
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: AppColors.secondaryText,
            fontSize: 14,
          }}
        >
          Get limitless with premium
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: AppColors.blackColor }]}
        >
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              color: AppColors.whiteColor,
              fontSize: 14,
            }}
          >
            Upgrade
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    backgroundColor: AppColors.greyFill,
    flex: 1,
    padding: 15,
    margin: 3,
    borderRadius: 10,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#A17900",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 10,
  },
});

export default PlanOverview;
