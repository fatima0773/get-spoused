import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";
import { s } from "react-native-size-matters";
import Checkbox from "expo-checkbox";
import { AppColors } from "../../../../utility/AppColors";

const PlanSelect = ({ options, setSelected }: any) => {
  const [selectedOption, setSelectedOption] = useState(1);
  useFonts({
    Poppins_500Medium,
  });

  const styles = StyleSheet.create({
    inputContainer: {
      color: AppColors.primaryText,
      borderColor: AppColors.greyOutline,
      paddingLeft: 10,
      borderRadius: 10,
      width: "90%",
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      padding: 10,
      paddingVertical: 20,
    },
    input: {
      paddingHorizontal: s(5),
      width: "100%",
    },
    checkbox: {
      borderRadius: 500,
    },
    selectedOption: {
      borderColor: AppColors.appThemeColor,
      backgroundColor: AppColors.whiteColor,
    },
  });

  const handleOptionChange = (option: any) => {
    setSelectedOption(option.id);
    setSelected(option.id);
  };

  const renderOptions = (option: any, index: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleOptionChange(option)}
        key={index}
        style={[
          styles.inputContainer,
          selectedOption === option.id && styles.selectedOption,
        ]}
      >
        <View>
          <Text
            style={{
              color: AppColors.blackColor,
              fontFamily: "Poppins_600SemiBold",
              fontSize: 24,
              marginHorizontal: 10,
            }}
          >
            ${option.price}
          </Text>
          <Text
            style={{
              color: AppColors.blackColor,
              fontFamily: "Poppins_500Medium",
              fontSize: 14,
              marginHorizontal: 10,
            }}
          >
            {option.duration} Month
          </Text>
        </View>
        <Checkbox
          style={styles.checkbox}
          value={selectedOption === option.id}
          color={
            selectedOption === option.id
              ? AppColors.appThemeColor
              : AppColors.greyOutline
          }
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        marginVertical: 10,
        flex: 1,
        width: "100%",
      }}
    >
      <FlatList
        data={options}
        renderItem={({ item, index }: any) => renderOptions(item, index)}
        horizontal
      />
    </View>
  );
};

export default PlanSelect;
