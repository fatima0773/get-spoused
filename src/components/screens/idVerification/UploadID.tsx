import { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
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
import { Ionicons } from "@expo/vector-icons";
import { FULL_HEIGHT } from "../../../utility/Constant";
import CommonButton from "../../common/CommonButton";
import { IssueCountry } from "./components/IssueCountry";
import UploadOption from "./components/UploadOption";
import React from "react";
import globalStyles from "../../../styles/globalStyles";

const UploadID = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  const breakOptions = [
    "Met my partner on Spoused",
    "Met my partner elsewhere",
    "Taking a break",
    "Didn’t like Spoused",
    "Other",
  ];
  const [openModal, setOpenModal] = useState(false);

  return (
    <SafeAreaView style={[styles.container, globalStyles.androidSafeArea]}>
      <View style={{ padding: 15, flex: 1 }}>
        {/* header */}
        <Ionicons
          name="chevron-back"
          size={34}
          onPress={() => props.navigation.navigate("ConfirmIdentity")}
          color="black"
          style={{ position: "absolute", left: 0 }}
        />

        <Text
          style={[
            {
              fontFamily: "Poppins_700Bold",
            },
            styles.heading,
          ]}
        >
          Upload ID
        </Text>
        <Text
          style={[
            {
              fontFamily: "Poppins_500Medium",
            },
            styles.lightText,
          ]}
        >
          Select which type of ID you want to add
        </Text>
        <IssueCountry />
        <UploadOption
          content="Driving Licence"
          pressHandler={() => props.navigation.navigate("ScanID")}
        />
        <UploadOption
          content="National ID"
          pressHandler={() => props.navigation.navigate("ScanID")}
        />
        <UploadOption
          content="Passport"
          pressHandler={() => props.navigation.navigate("ScanID")}
        />
        <Text
          style={[
            styles.lightText,
            {
              fontFamily: "Poppins_500Medium",
              textAlign: "center",
              marginVertical: 20,
            },
          ]}
        >
          OR
        </Text>
        <UploadOption content="I don’t have any of these documents" />
      </View>
      <View style={{ padding: 15 }}>
        <Text
          onPress={() => {
            setOpenModal(true);
          }}
          style={[
            styles.lightText,
            {
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              textAlign: "center",
            },
          ]}
        >
          More about verification
        </Text>
        <CommonButton
          title="Upload ID"
          pressHandler={() => props.navigation.navigate("ScanID")}
        />
      </View>
      <Modal visible={openModal} transparent={true}>
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
              we can’t approve your {"\n"}identity without your ID
            </Text>
            <Text
              onPress={() => {}}
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: AppColors.secondaryText,
                marginVertical: 10,
                lineHeight: 25,
                textAlign: "center",
              }}
            >
              please exit and contact the organization that{"\n"} asked you to
              confirm your identity
            </Text>
            <CommonButton
              title={"Exit"}
              pressHandler={() => {
                setOpenModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },

  heading: {
    fontSize: 24,
    color: AppColors.blackColor,
    marginVertical: 10,
    marginTop: 60,
  },
  lightText: {
    color: AppColors.secondaryText,
    fontSize: 14,
  },
  overlay: {
    margin: 0,
    backgroundColor: AppColors.transparentBlack,
    width: "100%",
    height: FULL_HEIGHT,
  },
});
export default UploadID;
