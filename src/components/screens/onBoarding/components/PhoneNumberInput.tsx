import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { AppColors } from "../../../../utility/AppColors";
import { s } from "react-native-size-matters";
import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";

const PhoneNumberInput = (props: any) => {
  const [showCountryCode, setShowCountryCode] = useState(false);
  const [countryCode, setCountryCode] = useState("+358");
  useFonts({
    Poppins_500Medium,
  });
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => setShowCountryCode(true)}
        style={{
          flex: 1,
          borderColor: AppColors.greyOutline,
          borderWidth: 1,
          paddingLeft: 10,
          borderRadius: 10,
          height: 50,
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: AppColors.greyFill,
          marginHorizontal: s(5),
          paddingHorizontal: s(5),
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 14,
            fontFamily: "Poppins_500Medium",
          }}
        >
          {countryCode}
        </Text>
      </TouchableOpacity>
      <CountryPicker
        style={{
          modal: {
            height: 500,
            backgroundColor: AppColors.whiteColor,
          },
          backdrop: {
            backgroundColor: AppColors.transparentBlack,
          },
          textInput: {
            height: 70,
            borderRadius: 10,
            paddingLeft: 20,
          },
          countryButtonStyles: {
            height: 70,
          },
          searchMessageText: {
            fontFamily: "Poppins_500Medium",
          },
          dialCode: {
            fontFamily: "Poppins_500Medium",
          },
          countryName: {
            fontFamily: "Poppins_500Medium",
          },
        }}
        show={showCountryCode}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          console.log(item.dial_code);
          setShowCountryCode(false);
        }}
        lang={""}
        inputPlaceholder={"Country code"}
      />
      <View
        style={{
          borderColor: AppColors.greyOutline,
          borderWidth: 1,
          paddingLeft: 10,
          borderRadius: 10,
          height: 50,
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: AppColors.greyFill,
        }}
      >
        <TextInput
          style={{
            fontFamily: "Poppins_500Medium",
            paddingHorizontal: s(5),
            width: "80%",
          }}
          placeholder={"Your Phone Number"}
          placeholderTextColor={AppColors.greyOutline}
          defaultValue={props.text}
          onChangeText={props.onChangeText}
        />
      </View>
    </SafeAreaView>
  );
};
export default PhoneNumberInput;
