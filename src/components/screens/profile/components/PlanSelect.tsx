import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";
import { TextInput } from "react-native";
import { s } from "react-native-size-matters";
// import { CheckBox } from "@rneui/themed";
import Checkbox from "expo-checkbox";
import { AppColors } from "../../../../utility/AppColors";

const PlanSelect = ({ options, setSelected }: any) => {
  const [selectedOption, setSelectedOption] = useState(null);
  useFonts({
    Poppins_500Medium,
  });

  const styles = StyleSheet.create({
    inputContainer: {
      color: AppColors.primaryText,
      borderColor: AppColors.greyOutline,
      borderWidth: 1,
      paddingLeft: 10,
      borderRadius: 10,
      width: "100%",
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: AppColors.greyFill,
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
    },
  });

  const handleOptionChange = (option: any) => {
    setSelectedOption(option.id);
    setSelected(option.id);
  };

  const renderOptions = (option: any, index: any) => {
    return (
      <View
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
          onValueChange={() => handleOptionChange(option)}
          color={
            selectedOption === option.id
              ? AppColors.appThemeColor
              : AppColors.greyOutline
          }
        />
      </View>
    );
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <FlatList
        data={options}
        renderItem={({ item, index }: any) => renderOptions(item, index)}
        horizontal
      />
    </View>
  );
};

export default PlanSelect;
