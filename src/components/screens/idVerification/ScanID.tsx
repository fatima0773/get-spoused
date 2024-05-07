import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  Image,
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
import { Ionicons } from "@expo/vector-icons";
import CommonButton from "../../common/CommonButton";
import { FULL_WIDTH } from "../../../utility/Constant";
import globalStyles from "../../../styles/globalStyles";
import { Button } from "react-native";
import { Camera, CameraType } from "expo-camera";
const ScanID = (props: any) => {
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
  const [selectedOption, setSelectedOption] = useState("");
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // if (!permission) {
  //   // Camera permissions are still loading
  //   return <View />;
  // }

  // if (!permission.granted) {
  //   // Camera permissions are not granted yet
  //   return (
  //     <View style={{ marginTop: 300 }}>
  //       <Text style={{ textAlign: "center" }}>
  //         We need your permission to show the camera
  //       </Text>
  //       <Button onPress={requestPermission} title="grant permission" />
  //     </View>
  //   );
  // }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  return (
    <SafeAreaView style={[styles.container, globalStyles.androidSafeArea]}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <Ionicons
          name="chevron-back"
          size={30}
          onPress={() => props.navigation.navigate("UploadID")}
          color="black"
          style={{ position: "absolute", left: 0 }}
        />
        <Text
          style={[
            styles.heading,
            {
              fontFamily: "Poppins_700Bold",
              textAlign: "center",
            },
          ]}
        >
          Scan your ID (Front)
        </Text>
      </View>
      <View style={{ padding: 15, flex: 1 }}>
        <View
          style={{
            backgroundColor: AppColors.greyFill,
            height: 240,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.05)",
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Image
            source={require("../../../assets/images/scan_id.png")}
            style={{ width: FULL_WIDTH - 70 }}
            resizeMode="contain"
          /> */}
          <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}
              >
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
        <Text
          style={[
            styles.lightText,
            {
              fontFamily: "Poppins_500Medium",
              marginVertical: 20,
            },
          ]}
        >
          Scan Your Front Page Of ID Document
        </Text>
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <CommonButton
          title="Submit"
          pressHandler={() =>
            props.navigation.navigate("ConfirmIdentity", { stepCompleted: 1 })
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },

  heading: {
    fontSize: 16,
    color: AppColors.blackColor,
  },
  lightText: {
    color: AppColors.secondaryText,
    fontSize: 14,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
    height: 240,
    // width: "100%",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
export default ScanID;
