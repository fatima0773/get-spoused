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
import { FULL_WIDTH } from "../../../../utility/Constant";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Ionicons } from "@expo/vector-icons";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
  useFonts,
} from "@expo-google-fonts/poppins";

const Interests = () => {
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  const interests = [
    {
      title: "Sports",
      interest: [
        "Basketball",
        "Soccer",
        "Tennis",
        "Running",
        "Swimming",
        "Yoga",
        "Cycling",
        "Golf",
        "Cricket",
        "Snowboarding",
        "Surfing",
        "Volleyball",
      ],
    },
    {
      title: "Food & Drinks",
      interest: [
        "Baking",
        "Bubble Tea",
        "Cooking",
        "Caking Decoration",
        "Coffee",
        "Pizza",
        "Junk Food",
        "Sushi",
        "Vegan",
        "Vegetarian",
        "Meat Lover",
        "Fish",
        "Chips",
        "Healthy Eating",
        "Eating out",
        "Chocolate",
      ],
    },
    {
      title: "Title 3",
      interest: [
        "Baking",
        "Bubble Tea",
        "Cooking",
        "Caking Decoration",
        "Coffee",
        "Pizza",
        "Junk Food",
        "Sushi",
        "Vegan",
        "Vegetarian",
        "Meat Lover",
        "Fish",
        "Chips",
        "Healthy Eating",
        "Eating out",
        "Chocolate",
      ],
    },
    {
      title: "Title 4",
      interest: [
        "Baking",
        "Bubble Tea",
        "Cooking",
        "Caking Decoration",
        "Coffee",
        "Pizza",
        "Junk Food",
        "Sushi",
        "Vegan",
        "Vegetarian",
        "Meat Lover",
        "Fish",
        "Chips",
        "Healthy Eating",
        "Eating out",
        "Chocolate",
      ],
    },
  ];
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const handleAllergyPress = (allergy: any) => {
    const isSelected = selectedInterests.includes(allergy);

    setSelectedInterests((prevState) => {
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
    const isSelected = selectedInterests.includes(item);

    return (
      <TouchableOpacity
        key={item}
        style={[
          {
            backgroundColor: AppColors.greyFill,
            padding: 10,
            paddingHorizontal: 10,
            margin: 5,
            borderRadius: 90,
            borderWidth: 1,
            borderColor: AppColors.greyOutline,
          },
          isSelected && {
            backgroundColor: AppColors.appThemeColor,
            borderColor: AppColors.whiteColor,
          },
        ]}
        onPress={() => handleAllergyPress(item)}
      >
        <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const swiperRef = useRef<SwiperFlatList | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const renderInterestContainer = ({ item }: any) => {
    return (
      <View
        style={{
          width: FULL_WIDTH - 20,
          marginBottom: 45,
        }}
      >
        <View style={styles.buttonsContainer}>
          <Ionicons
            name="chevron-back-circle"
            size={35}
            color={AppColors.appThemeColor}
            disabled={activeIndex === 0}
            onPress={() => {
              swiperRef.current?.scrollToIndex({ index: activeIndex - 1 });
            }}
          />
          <Text style={{ fontSize: 18, fontFamily: "Poppins_500Medium" }}>
            {item.title.toUpperCase()}
          </Text>
          <Ionicons
            disabled={activeIndex === 3}
            name="chevron-forward-circle"
            size={35}
            color={AppColors.appThemeColor}
            onPress={() => {
              swiperRef.current?.scrollToIndex({ index: activeIndex + 1 });
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Poppins_500Medium",
            color: AppColors.secondaryText,
            marginVertical: 10,
          }}
        >
          Selected:{" "}
          <Text
            style={{
              color: AppColors.blackColor,
            }}
          >
            {selectedInterests.length} of 15
          </Text>
        </Text>
        <FlatList
          key={selectedInterests.length}
          data={item.interest}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          numColumns={3}
        />
      </View>
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
        What Are Your Interest?
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_400Regular",
          fontSize: 12,
          color: AppColors.secondaryText,
          marginVertical: 10,
        }}
      >
        Select Your Interests That Describes You Well
      </Text>
      <SwiperFlatList
        ref={swiperRef}
        onChangeIndex={(i) => setActiveIndex(i.index)}
        showPagination
        data={interests}
        renderItem={renderInterestContainer}
        paginationDefaultColor="rgba(193, 193, 193, 1)"
        paginationActiveColor={AppColors.appThemeColor}
      />
    </View>
  );
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
});

export default Interests;
