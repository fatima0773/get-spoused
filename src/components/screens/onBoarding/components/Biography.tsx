import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { AppColors } from "../../../../utility/AppColors";
import { FULL_HEIGHT, FULL_WIDTH } from "../../../../utility/Constant";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Ionicons } from "@expo/vector-icons";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
  useFonts,
} from "@expo-google-fonts/poppins";
import { s } from "react-native-size-matters";

const Biography = (props: any) => {
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  const [isFocused, setIsFocused] = useState(false);
  const handleBlur = () => {
    setIsFocused(false);
  };

  const styles = StyleSheet.create({
    contentWrapper: {
      padding: 15,
      marginTop: 30,
    },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width: "90%",
      backgroundColor: "rgba(245, 245, 245, 1)",
      alignItems: "center",
      borderRadius: 3000,
      padding: 5,
      marginVertical: 20,
    },
    button: {
      backgroundColor: AppColors.appThemeColor,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    inputContainer: {
      color: AppColors.primaryText,
      borderColor: isFocused ? AppColors.appThemeColor : AppColors.greyOutline,
      borderWidth: 1,
      paddingLeft: 10,
      borderRadius: 10,
      height: FULL_HEIGHT / 2,
      width: "100%",
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: AppColors.greyFill,
      paddingTop: 20,
    },
    input: {
      paddingHorizontal: s(5),
      width: "100%",
      // height: FULL_HEIGHT / 2,
    },
  });

  return (
    <View style={styles.contentWrapper}>
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          fontSize: 24,
          color: AppColors.blackColor,
        }}
      >
        Describe your Biography
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_400Regular",
          fontSize: 12,
          color: AppColors.secondaryText,
          marginVertical: 10,
        }}
      >
        Select 5 options that describes you well
      </Text>
      <View style={{ marginVertical: 10 }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { fontFamily: "Poppins_500Medium" }]}
            placeholder={"Enter here..."}
            placeholderTextColor={AppColors.greyOutline}
            defaultValue={props.text}
            onChangeText={props.onChangeText}
            onFocus={() => setIsFocused(true)}
            multiline={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Biography;
