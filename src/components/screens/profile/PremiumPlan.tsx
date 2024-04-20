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
import { Ionicons } from "@expo/vector-icons";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
    "Travel Mode",
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
    {
      id: 3,
      price: 120,
      duration: "03",
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 15 }}>
        <View style={styles.headerContainer}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={AppColors.blackColor}
              onPress={() => props.navigation.navigate("Profile")}
            />
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                marginHorizontal: 10,
                color: AppColors.blackColor,
              }}
            >
              Premium Plan
            </Text>
          </View>

          <MaterialCommunityIcons name="help-circle" size={24} color="black" />
        </View>
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
              {item}{" "}
              {item === "Travel Mode" && (
                <Text
                  style={{
                    color: AppColors.appThemeColor,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  {" "}
                  (Passport Location)
                </Text>
              )}
            </Text>
          </View>
        ))}

        {/* plans */}
        <View
          style={{
            backgroundColor: AppColors.appThemeColor,
            padding: 10,
            paddingRight: 0,
            borderRadius: 20,
            marginTop: 50,
            flex: 1,
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
          {/* <View> */}
          <PlanSelect options={plans} setSelected={setSelectedPlan} />
          {/* </View> */}
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default PremiumPlan;
