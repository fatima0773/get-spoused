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
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../common/Header";
import PlanSelect from "./components/PlanSelect";

const PremiumPlan = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const premiumFeatures = [
    "Unlimited Swipes",
    "Travel Mode (Passport Location)",
    "Filter By Preferences",
    "Rematch",
    "Rewind",
    "2 Boost",
    "Message Before Matching",
  ];
  const [selectedPlan, setSelectedPlan] = useState("");
  const [plans, setPlans] = useState([
    {
      id: 1,
      price: 45,
      duration: "01",
    },
    {
      id: 2,
      price: 120,
      duration: "03",
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 15 }}>
        <Header
          title={"Premium Plan"}
          backHandler={() => props.navigation.navigate("Profile")}
        />
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 24,
            color: AppColors.blackColor,
            marginVertical: 20,
          }}
        >
          Our Premium Feature will include:
        </Text>
        {premiumFeatures.map((item, index) => (
          <View style={styles.rowContainer} key={index}>
            <Image source={AppImages.CHECK} style={{ width: 26, height: 23 }} />
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                color: AppColors.blackColor,
                marginLeft: 10,
              }}
            >
              {item}
            </Text>
          </View>
        ))}

        {/* plans */}
        <View
          style={{
            backgroundColor: AppColors.appThemeColor,
            padding: 10,
            borderRadius: 20,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 28,
              color: AppColors.blackColor,
            }}
          >
            Our Premium Plan:
          </Text>
          <PlanSelect options={plans} setSelected={setSelectedPlan} />
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Profile")}
            style={{
              backgroundColor: AppColors.whiteColor,
              borderRadius: 220,
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 16,
                color: AppColors.blackColor,
              }}
            >
              Subscribe
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
    backgroundColor: AppColors.whiteColor,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default PremiumPlan;
