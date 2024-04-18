import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, Modal } from "react-native";
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
import { ScrollView } from "react-native-virtualized-view";
import { AppColors } from "../../../utility/AppColors";
import { Ionicons } from "@expo/vector-icons";
import Filter from "../notifications/components/Filter";
import SwitchSetting from "./components/SwitchSetting";
import CommonButton from "../../common/CommonButton";
import { FULL_HEIGHT } from "../../../utility/Constant";

const Settings = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [toggleNotifications, setToggleNotifications] = useState(false);
  const [toggleProfileSharing, setToggleProfileSharing] = useState(true);
  const [toggleBlurPhotos, setToggleBlurPhotos] = useState(false);
  const [toggleHideProfile, setToggleHideProfile] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 15 }}>
        {/* header */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Ionicons
            name="chevron-back"
            size={34}
            onPress={() => props.navigation.navigate("Profile")}
            color="black"
            style={{ position: "absolute", left: 0 }}
          />
          <Text
            style={[{ fontFamily: "Poppins_600SemiBold" }, styles.titleText]}
          >
            Settings
          </Text>
        </View>

        {/* Personal Information */}
        <Text
          style={[
            {
              fontFamily: "Poppins_700Bold",
            },
            styles.heading,
          ]}
        >
          Personal Information
        </Text>
        <Filter
          title={"Full Name"}
          content={"Smith"}
          pressHandler={() =>
            props.navigation.navigate(
              "Details",
              { screen: "Name" },
              { back: 1 }
            )
          }
        />
        <Filter
          title={"Date of Birth"}
          content={"18 Oct, 2000"}
          pressHandler={() =>
            props.navigation.navigate(
              "Details",
              { screen: "DateOfBirth" },
              { back: 1 }
            )
          }
        />
        <Filter
          title={"Gender"}
          content={"Female"}
          pressHandler={() =>
            props.navigation.navigate(
              "Details",
              { screen: "Gender" },
              { back: 0 }
            )
          }
        />
        <Filter
          title={"Email"}
          content={"larry233@gmail.com"}
          pressHandler={() =>
            props.navigation.navigate(
              "Details",
              { screen: "Email" },
              { back: 0 }
            )
          }
        />
        <Filter
          title={"Phone Number"}
          content={"+92 3167473036"}
          pressHandler={() =>
            props.navigation.navigate(
              "Details",
              { screen: "PhoneNumber" },
              { back: 0 }
            )
          }
        />

        {/* notifications */}
        <Text
          style={[
            {
              fontFamily: "Poppins_700Bold",
            },
            styles.heading,
          ]}
        >
          Notification
        </Text>
        <SwitchSetting
          toggle={toggleNotifications}
          setToggle={setToggleNotifications}
          title="Notification"
          content="Enable notification to stay up-to-date"
        />

        {/* account */}
        <Text
          style={[
            {
              fontFamily: "Poppins_700Bold",
            },
            styles.heading,
          ]}
        >
          Account
        </Text>
        <Filter
          title={"Language"}
          content={"English"}
          pressHandler={() =>
            props.navigation.navigate(
              "Details",
              { screen: "Language" },
              { back: 1 }
            )
          }
        />
        <Filter
          title={"Restore Purchases"}
          content={"Restore your subscription"}
        />

        {/* privacy */}
        <Text
          style={[
            {
              fontFamily: "Poppins_700Bold",
            },
            styles.heading,
          ]}
        >
          Privacy
        </Text>
        <SwitchSetting
          toggle={toggleProfileSharing}
          setToggle={setToggleProfileSharing}
          title="Profile Sharing"
          content="Allow your profile to be shared"
        />
        <SwitchSetting
          toggle={toggleBlurPhotos}
          setToggle={setToggleBlurPhotos}
          title="Blur Photo"
          content="You can blur your photos"
        />

        {/* break */}
        <Text
          style={[
            {
              fontFamily: "Poppins_700Bold",
            },
            styles.heading,
          ]}
        >
          Take a Break
        </Text>
        <SwitchSetting
          toggle={toggleHideProfile}
          setToggle={setToggleHideProfile}
          title="Hide my profile"
          content="hiding your profile means we won’t show it to new people. you can still chat with your current matches"
        />
        <Filter
          pressHandler={() => setIsLogout(true)}
          title={"Logout"}
          content={"Logging out doesn’t hide your profile"}
        />
        <Filter
          title={"Delete Account"}
          content={"This will delete your account completely"}
          pressHandler={() => props.navigation.navigate("Break")}
        />
        {/* unmatch menu */}
        <Modal visible={isLogout} transparent={true}>
          <View style={styles.overlay}>
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
                  textAlign: "center",
                }}
              >
                Log Out
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 14,
                  color: AppColors.secondaryText,
                  marginVertical: 10,
                  lineHeight: 25,
                  textAlign: "center",
                }}
              >
                Are you sure you want to logout?
              </Text>
              <CommonButton
                title={"Log Out"}
                pressHandler={() => {
                  setIsLogout(false);
                }}
              />

              <Text
                onPress={() => setIsLogout(false)}
                style={{
                  fontFamily: "Poppins_700Bold",
                  textAlign: "center",
                  fontSize: 16,
                  color: AppColors.blackColor,
                  marginBottom: 30,
                }}
              >
                Cancel
              </Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  heading: {
    fontSize: 20,
    color: AppColors.blackColor,
    marginVertical: 10,
    marginTop: 40,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  description: {
    color: AppColors.secondaryText,
    fontSize: 12,
  },
  title: {
    color: AppColors.blackColor,
    fontSize: 14,
  },
  overlay: {
    margin: 0,
    backgroundColor: AppColors.transparentBlack,
    width: "100%",
    height: FULL_HEIGHT,
  },
});

export default Settings;
