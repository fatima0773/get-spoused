import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native";
import { AppColors } from "../../../../utility/AppColors";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { FULL_WIDTH } from "../../../../utility/Constant";

const HeightInput = () => {
  const [heightUnit, setHeightUnit] = useState("cm");
  const [scrollX, setScrollX] = useState(0);
  const [centerIndex, setCenterIndex] = useState(2);
  const ITEM_WIDTH = 80;
  useFonts({ Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold });

  useEffect(() => {
    const index = Math.round(scrollX / ITEM_WIDTH);
    const centerOffset = Math.floor(FULL_WIDTH / (2 * ITEM_WIDTH));
    setCenterIndex(index + centerOffset);
  }, [scrollX]);

  const renderItem = ({ item, index }: any) => {
    const isCentered = index === centerIndex;

    return (
      <View
        key={item}
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: isCentered ? "Poppins_700Bold" : "Poppins_500Medium",
              fontSize: isCentered ? 24 : 14,
              color: AppColors.blackColor,
              marginVertical: 10,
            }}
          >
            {item}
          </Text>
          <View
            style={{
              width: isCentered ? 4 : 1,
              height: isCentered ? 180 : 120,
              backgroundColor: isCentered
                ? AppColors.appThemeColor
                : AppColors.greyOutline,
              borderRadius: 30,
            }}
          />
        </View>
        <View
          style={{
            width: 1,
            height: isCentered ? 100 : 90,
            backgroundColor: AppColors.greyOutline,
            marginHorizontal: 10,
            borderRadius: 30,
          }}
        />
        <View
          style={{
            width: 1,
            height: isCentered ? 100 : 90,
            backgroundColor: AppColors.greyOutline,
            marginHorizontal: 10,
            borderRadius: 30,
          }}
        />
        <View
          style={{
            width: 1,
            height: isCentered ? 100 : 90,
            backgroundColor: AppColors.greyOutline,
            marginHorizontal: 10,
            borderRadius: 30,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
          padding: 5,
          backgroundColor: AppColors.greyFill,
          borderRadius: 200,
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => setHeightUnit("cm")}
          style={[styles.option, heightUnit === "cm" && styles.selectedOption]}
        >
          <Text
            style={[
              {
                fontFamily: "Poppins_500Medium",
                color: AppColors.secondaryText,
              },
              heightUnit === "cm" && {
                color: AppColors.blackColor,
                fontFamily: "Poppins_600SemiBold",
              },
            ]}
          >
            Centimeters
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setHeightUnit("in")}
          style={[styles.option, heightUnit === "in" && styles.selectedOption]}
        >
          <Text
            style={[
              {
                fontFamily: "Poppins_500Medium",
                color: AppColors.secondaryText,
              },
              heightUnit === "in" && {
                color: AppColors.blackColor,
                fontFamily: "Poppins_600SemiBold",
              },
            ]}
          >
            Inches
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={Array.from({ length: 30 }, (_, index) => index + 120)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
        scrollEventThrottle={160}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  option: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
    margin: 5,
    padding: 12,
  },
  selectedOption: {
    backgroundColor: AppColors.appThemeColor,
  },
});
export default HeightInput;
