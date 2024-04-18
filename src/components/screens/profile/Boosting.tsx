import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AppColors } from "../../../utility/AppColors";
import { AppImages } from "../../../utility/AppImages";
import Swiper from "react-native-deck-swiper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
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
import ProfileHeader from "./components/ProfileHeader";
import PremiumOverview from "./components/PremiumOverview";
import PlanOverview from "./components/PlanOverview";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../common/Header";

const Boosting = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [boostEnd, setBoostEnd] = useState({
    hours: "23",
    minutes: "45",
    seconds: "01",
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 15 }}>
        <MaterialIcons
          onPress={() => props.navigation.navigate("Profile")}
          name="cancel"
          size={34}
          color="white"
          style={{ margin: 15 }}
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
            }}
          >
            We are boosting you!
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 14,
              color: AppColors.secondaryText,
              marginVertical: 20,
            }}
          >
            You will be seen by 30x people
          </Text>
          <Image source={AppImages.BOOSTING} style={{ marginTop: 20 }} />
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 14,
              color: AppColors.blackColor,
              marginVertical: 20,
            }}
          >
            Your boost will end in
          </Text>
          {/* times */}
          <View style={styles.rowContainer}>
            <View
              style={{
                backgroundColor: AppColors.blackColor,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_800ExtraBold",
                  fontSize: 16,
                  color: AppColors.whiteColor,
                  margin: 10,
                }}
              >
                {boostEnd.hours}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins_800ExtraBold",
                fontSize: 16,
                color: AppColors.whiteColor,
                margin: 10,
              }}
            >
              :
            </Text>
            <View
              style={{
                backgroundColor: AppColors.blackColor,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_800ExtraBold",
                  fontSize: 16,
                  color: AppColors.whiteColor,
                  margin: 10,
                }}
              >
                {boostEnd.minutes}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins_800ExtraBold",
                fontSize: 16,
                color: AppColors.whiteColor,
                margin: 10,
              }}
            >
              :
            </Text>
            <View
              style={{
                backgroundColor: AppColors.blackColor,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_800ExtraBold",
                  fontSize: 16,
                  color: AppColors.whiteColor,
                  margin: 10,
                }}
              >
                {boostEnd.seconds}
              </Text>
            </View>
          </View>

          {/* boost left */}
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 100,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                color: AppColors.blackColor,
              }}
            >
              You have{" "}
              <Text
                style={{
                  fontFamily: "Poppins_700Bold",
                }}
              >
                01 more
              </Text>{" "}
              left
            </Text>
          </View>

          {/* get more boosts */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate("PremiumPlan")}
            style={{
              backgroundColor: AppColors.blackColor,
              padding: 15,
              borderRadius: 220,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
              marginTop: 50,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 16,
                color: AppColors.whiteColor,
              }}
            >
              Get More Boosts
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
});

export default Boosting;
