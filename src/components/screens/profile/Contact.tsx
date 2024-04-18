import React, { useState } from "react";
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
import { ScrollView } from "react-native-virtualized-view";
import { AppColors } from "../../../utility/AppColors";
import { Ionicons } from "@expo/vector-icons";
import { FULL_HEIGHT } from "../../../utility/Constant";
import { InputField } from "../../common/InputField";
import CommonButton from "../../common/CommonButton";

const Contact = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AppColors.whiteColor,
    },
    input: {
      color: AppColors.primaryText,
      borderColor: isFocused ? AppColors.appThemeColor : AppColors.greyOutline,
      borderWidth: 1,
      borderRadius: 10,
      height: 400,
      width: "100%",
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: AppColors.greyFill,
      padding: 15,
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
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 15 }}>
        {/* header */}
        <Ionicons
          name="chevron-back"
          size={34}
          onPress={() => props.navigation.navigate("Profile")}
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
          Contact Us
        </Text>
        <Text
          style={[
            {
              fontFamily: "Poppins_500Medium",
            },
            styles.lightText,
          ]}
        >
          laboriosam-dolorem-consequatur
        </Text>
        <InputField
          text={subject}
          onChangeText={setSubject}
          label="Subject"
          placeholder="Enter subject"
        />
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: AppColors.blackColor,
          }}
        >
          Message
        </Text>
        <TextInput
          style={[styles.input, { fontFamily: "Poppins_500Medium" }]}
          placeholder={"Enter your message"}
          placeholderTextColor={AppColors.greyOutline}
          defaultValue={message}
          onChangeText={setMessage}
          onFocus={() => setIsFocused(true)}
          multiline
        />
        <CommonButton
          title="Submit"
          pressHandler={() => props.navigation.navigate("Profile")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Contact;
