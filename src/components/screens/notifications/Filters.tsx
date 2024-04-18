import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
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
import { AppColors } from "../../../utility/AppColors";
import { Entypo } from "@expo/vector-icons";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import Filter from "./components/Filter";

const Filters = (props: any) => {
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
      <ScrollView>
        <View style={[styles.rowContainer, { padding: 15 }]}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.iconContainer}
          >
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
          <Text style={[styles.titleText, { fontFamily: "Poppins_700Bold" }]}>
            Filters
          </Text>
          <Text style={[styles.lightText, { fontFamily: "Poppins_500Medium" }]}>
            Clear all
          </Text>
        </View>
        {/* age */}
        <View style={{ padding: 15 }}>
          <View style={[styles.rowContainer, { marginTop: 35 }]}>
            <Text
              style={[styles.standardText, { fontFamily: "Poppins_700Bold" }]}
            >
              Age
            </Text>
            <Text
              style={[
                styles.standardText,
                { fontFamily: "Poppins_400Regular" },
              ]}
            >
              Any Age
            </Text>
          </View>
          <RangeSlider
            toKnobColor={AppColors.appThemeColor}
            fromKnobColor={AppColors.appThemeColor}
            min={18}
            max={85}
            fromValueOnChange={(value) => console.log(value)}
            toValueOnChange={(value) => console.log(value)}
            initialFromValue={11}
            barHeight={4}
            showValueLabels={false}
          />
          {/* filters */}
          <Filter title={"Limit Location by"} content={"No Limit"} />
          <Filter title={"Ethnicity"} content={"No Limit"} />
          <Filter title={"Select Gender"} content={"No Limit"} />
        </View>

        {/* advanced filters */}
        <View style={styles.advancedFilters}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              fontSize: 18,
            }}
          >
            Advance Filters
          </Text>
          <Text
            style={[
              styles.advanceFilterTitle,
              {
                fontFamily: "Poppins_700Bold",
              },
            ]}
          >
            Profile Preferences
          </Text>
          <Filter title={"Ethnic Origin"} content={"No Limit"} isWhite={true} />

          <Text
            style={[
              styles.advanceFilterTitle,
              {
                fontFamily: "Poppins_700Bold",
              },
            ]}
          >
            Basic Information
          </Text>
          <Filter title={"Height"} content={"Any height"} isWhite={true} />
          <Filter
            title={"Marital Status"}
            content={"No Preference"}
            isWhite={true}
          />
          <Filter title={"Children"} content={"No Preference"} isWhite={true} />

          <Text
            style={[
              styles.advanceFilterTitle,
              {
                fontFamily: "Poppins_700Bold",
              },
            ]}
          >
            Education & Career
          </Text>
          <Filter
            title={"Education"}
            content={"No Preference"}
            isWhite={true}
          />
          <Filter
            title={"Profession"}
            content={"No Preference"}
            isWhite={true}
          />

          <Text
            style={[
              styles.advanceFilterTitle,
              {
                fontFamily: "Poppins_700Bold",
              },
            ]}
          >
            Languages & Ethnicity
          </Text>
          <Filter
            title={"Languages"}
            content={"No Preference"}
            isWhite={true}
          />
          <Filter
            title={"Ethnic Origin"}
            content={"No Preference"}
            isWhite={true}
          />

          <Text
            style={[
              styles.advanceFilterTitle,
              {
                fontFamily: "Poppins_700Bold",
              },
            ]}
          >
            Religiosity
          </Text>
          <Filter title={"Religion"} content={"No Preference"} isWhite={true} />
          <Filter
            title={"Do You Smoke?"}
            content={"No Preference"}
            isWhite={true}
          />
          <Filter
            title={"Do You Drink?"}
            content={"No Preference"}
            isWhite={true}
          />
          <Filter
            title={"Star Sign"}
            content={"No Preference"}
            isWhite={true}
          />

          <Text
            style={[
              styles.advanceFilterTitle,
              {
                fontFamily: "Poppins_700Bold",
              },
            ]}
          >
            Interests & Personality
          </Text>
          <Filter
            title={"Interests"}
            content={"No Preference"}
            isWhite={true}
          />
          <Filter
            title={"Personality Traits"}
            content={"No Preference"}
            isWhite={true}
          />
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

export default Filters;
