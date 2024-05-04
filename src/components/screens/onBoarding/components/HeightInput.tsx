import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Text } from "react-native";
import { AppColors } from "../../../../utility/AppColors";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const HeightInput = () => {
  const [heightUnit, setHeightUnit] = useState("cm");
  const [scrollX, setScrollX] = useState(0);
  const [centerIndex, setCenterIndex] = useState(2);
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = 80;
  useFonts({ Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold });

  useEffect(() => {
    const index = Math.round(scrollX / ITEM_WIDTH);
    const centerOffset = Math.floor(SCREEN_WIDTH / 2 - ITEM_WIDTH / 2);
    setCenterIndex(index + centerOffset / ITEM_WIDTH);
  }, [scrollX]);

  const renderItem = ({ item }) => {
    const itemIndex = item - 120;
    const isCentered =
      itemIndex === Math.round(centerIndex - 1) &&
      centerIndex >= 0 &&
      centerIndex <= 30;

    return (
      <TouchableOpacity
        onPress={() => {
          // Scroll to the selected item
          flatListRef.current?.scrollToIndex({
            index: itemIndex,
            animated: true,
          });
        }}
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
          marginTop: 40,
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
              width: 2,
              height: 120,
              backgroundColor: AppColors.greyOutline,
              borderRadius: 30,
            }}
          />
        </View>
        <View
          style={{
            width: 2,
            height: 90,
            backgroundColor: AppColors.greyOutline,
            marginHorizontal: 10,
            borderRadius: 30,
          }}
        />
        <View
          style={{
            width: 2,
            height: 90,
            backgroundColor: AppColors.greyOutline,
            marginHorizontal: 10,
            borderRadius: 30,
          }}
        />
        <View
          style={{
            width: 2,
            height: 90,
            backgroundColor: AppColors.greyOutline,
            marginHorizontal: 10,
            borderRadius: 30,
          }}
        />
      </TouchableOpacity>
    );
  };

  const flatListRef = useRef<FlatList>(null);

  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
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
        ref={flatListRef}
        horizontal
        data={Array.from({ length: 30 }, (_, index) => index + 120)}
        renderItem={({ item }) => renderItem({ item })}
        keyExtractor={(item, index) => index.toString()}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
        scrollEventThrottle={160}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          width: 4,
          height: 120,
          backgroundColor: AppColors.appThemeColor,
          borderRadius: 30,
          position: "absolute",
          left: "50%",
          bottom: 0,
          marginLeft: -2,
        }}
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
