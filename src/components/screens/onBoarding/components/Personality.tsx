import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AppColors } from "../../../../utility/AppColors";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
  useFonts,
} from "@expo-google-fonts/poppins";

const Personality = () => {
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  const personality = [
    "Analytical",
    "Thoughtful",
    "Playful",
    "Introverted",
    "Outgoing",
    "Nurturing",
    "Spontaneous",
    "Romantic",
    "Funny",
    "Optimistic",
    "Intellectual",
    "Creative",
    "Empathetic",
    "Ambitious",
    "Adventurous",
    "Active Listner",
    "Animal Lover",
    "Brunch Lover",
    "Carefree",
    "Cultural",
    "Creative",
    "Empathetic",
    "Extrovert",
    "Introvert",
    "Family Loving",
  ];
  const [selected, setSelected] = useState<string[]>([]);
  const handleAllergyPress = (allergy: any) => {
    const isSelected = selected.includes(allergy);

    setSelected((prevState) => {
      const updatedSelection = [...prevState];
      if (isSelected) {
        updatedSelection.splice(updatedSelection.indexOf(allergy), 1);
      } else {
        updatedSelection.push(allergy);
      }
      return updatedSelection;
    });
  };

  const renderItem = ({ item }: any) => {
    const isSelected = selected.includes(item);

    return (
      <TouchableOpacity
        key={item}
        style={[
          {
            backgroundColor: "#FAFAFA",
            padding: 10,
            paddingHorizontal: 20,
            marginBottom: 12,
            marginRight: 12,
            borderRadius: 90,
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.05)",
          },
          isSelected && {
            backgroundColor: AppColors.appThemeColor,
            borderColor: AppColors.whiteColor,
          },
        ]}
        onPress={() => handleAllergyPress(item)}
      >
        <Text style={{ fontSize: 12, fontFamily: "Poppins_600SemiBold" }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.contentWrapper}>
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          fontSize: 24,
          color: AppColors.blackColor,
        }}
      >
        Describe Your{"\n"}Personality
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_400Regular",
          fontSize: 12,
          color: AppColors.secondaryText,
          marginVertical: 10,
        }}
      >
        Select 5 Options That Best Describe You
      </Text>
      <FlatList
        key={selected.length}
        data={personality}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    padding: 15,
    marginTop: 15,
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
});

export default Personality;
