import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
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
import RangeSlider from "react-native-range-slider-expo";
import Filter from "./components/Filter";
import { FULL_HEIGHT } from "../../../utility/Constant";

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
  const [openLimitLocation, setOpenLimitLocation] = useState(false);
  const [locationOptions, setLocationOptions] = useState([
    "No Limit",
    "Option 1",
    "Option 2",
  ]);

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
          <Filter
            title={"Limit Location by"}
            content={"No Limit"}
            pressHandler={() => setOpenLimitLocation(true)}
          />
          <Filter
            title={"Ethnicity"}
            content={"No Preferences"}
            pressHandler={() =>
              props.navigation.navigate("Ethnicity", { back: 2 })
            }
          />
          <Filter
            title={"Select Gender"}
            content={"No Preferences"}
            pressHandler={() =>
              props.navigation.navigate("DatingPreference", { back: 2 })
            }
          />
        </View>

        {/* advanced filters */}
        <View style={styles.advancedFilters}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              fontSize: 18,
              marginBottom: 43,
              marginTop: 20,
            }}
          >
            Advance Filters
          </Text>
          {/* <Text
            style={[
              styles.advanceFilterTitle,
              {
                fontFamily: "Poppins_700Bold",
              },
            ]}
          >
            Profile Preferences
          </Text>
          <Filter
            title={"Ethnic Origin"}
            content={"No Limit"}
            isWhite={true}
            pressHandler={() =>
              props.navigation.navigate("EthnicGroup", { back: 2 })
            }
          /> */}

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
          <Filter
            title={"Height"}
            content={"Any height"}
            isWhite={true}
            pressHandler={() =>
              props.navigation.navigate("Height", { back: 2 })
            }
          />
          <Filter
            title={"Marital Status"}
            content={"No Preference"}
            isWhite={true}
            pressHandler={() =>
              props.navigation.navigate("MaritalStatus", { back: 2 })
            }
          />
          <Filter
            title={"Children"}
            content={"No Preference"}
            isWhite={true}
            pressHandler={() =>
              props.navigation.navigate("Children", { back: 2 })
            }
          />

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
            pressHandler={() =>
              props.navigation.navigate("Education", { back: 2 })
            }
          />
          <Filter
            title={"Profession"}
            content={"No Preference"}
            isWhite={true}
            pressHandler={() =>
              props.navigation.navigate("Profession", { back: 2 })
            }
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
            pressHandler={() =>
              props.navigation.navigate("Language", { back: 2 })
            }
          />
          <Filter
            title={"Origin"}
            content={"No Preference"}
            isWhite={true}
            pressHandler={() =>
              props.navigation.navigate("EthnicGroup", { back: 2 })
            }
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
          <Filter
            title={"Religion"}
            content={"No Preference"}
            isWhite={true}
            pressHandler={() =>
              props.navigation.navigate("Religion", { back: 2 })
            }
          />
          <Filter
            title={"Do You Smoke?"}
            content={"No Preference"}
            isWhite={true}
            pressHandler={() => props.navigation.navigate("Smoke", { back: 2 })}
          />
          <Filter
            title={"Do You Drink?"}
            content={"No Preference"}
            isWhite={true}
            pressHandler={() => props.navigation.navigate("Drink", { back: 2 })}
          />
          <Filter
            title={"Star Sign"}
            content={"No Preference"}
            isWhite={true}
            pressHandler={() =>
              props.navigation.navigate("StarSign", { back: 2 })
            }
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
            pressHandler={() =>
              props.navigation.navigate("Interests", { back: 2 })
            }
          />
          <Filter
            title={"Personality Traits"}
            content={"No Preference"}
            isWhite={true}
            pressHandler={() =>
              props.navigation.navigate("PersonalityTraits", { back: 2 })
            }
          />
        </View>
      </ScrollView>
      <Modal visible={openLimitLocation} transparent={true}>
        <Pressable
          onPress={() => setOpenLimitLocation(false)}
          style={styles.overlay}
        >
          <View
            style={{
              backgroundColor: AppColors.whiteColor,
              padding: 15,
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingVertical: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 24,
                color: AppColors.blackColor,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Limit Location By
            </Text>

            {locationOptions.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setOpenLimitLocation(false);
                }}
                style={[
                  styles.menuOptionContainer,
                  {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    textAlign: "center",
                    fontSize: 16,
                    color: AppColors.blackColor,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}

            <Text
              onPress={() => setOpenLimitLocation(false)}
              style={{
                fontFamily: "Poppins_700Bold",
                textAlign: "center",
                fontSize: 16,
                color: AppColors.blackColor,
                marginVertical: 20,
              }}
            >
              Close
            </Text>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  overlay: {
    margin: 0,
    backgroundColor: AppColors.transparentBlack,
    width: "100%",
    height: FULL_HEIGHT,
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
  menuOptionContainer: {
    backgroundColor: AppColors.greyFill,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 7,
  },
});

export default Filters;
