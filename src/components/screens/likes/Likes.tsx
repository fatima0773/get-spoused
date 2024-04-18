import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
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
import { Entypo } from "@expo/vector-icons";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { TapGestureHandler } from "react-native-gesture-handler";
import LikesHeader from "./components/LikesHeader";
import { profession } from "../../../data/ProfileQuestions";
import { AppImages } from "../../../utility/AppImages";
import { ScrollView } from "react-native-virtualized-view";
import { FULL_HEIGHT, FULL_WIDTH } from "../../../utility/Constant";

const Likes = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [likes, setLikes] = useState([
    {
      name: "Larry",
      age: 23,
      country: "Indian",
      time: "4 Hours ago",
      profession: "Designer",
      justJoined: false,
      image: AppImages.USER_LARRY,
    },
    {
      name: "Larry",
      age: 23,
      country: "Indian",
      time: "4 Hours ago",
      profession: "Designer",
      justJoined: true,
      image: AppImages.USER_LARRY,
    },
    {
      name: "Larry",
      age: 23,
      country: "Indian",
      time: "4 Hours ago",
      profession: "Designer",
      justJoined: true,
      image: AppImages.USER_LARRY,
    },
    {
      name: "Larry",
      age: 23,
      country: "Indian",
      time: "4 Hours ago",
      profession: "Designer",
      justJoined: false,
      image: AppImages.USER_LARRY,
    },
  ]);

  const renderLikedUser = ({ item }: any) => {
    return (
      <ImageBackground
        // tintColor="rgba(0, 0, 0, 0.1)"
        resizeMode="cover"
        imageStyle={{
          borderRadius: 10,
          // tintColor: "rgba(0, 0, 0, 0.1)",
        }}
        source={item.image}
        style={{
          width: (FULL_WIDTH - 80) / 2,
          height: (FULL_HEIGHT - 350) / 2,
          margin: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: "100%",
            width: "100%",
            borderRadius: 10,
          }}
        >
          <View
            style={[styles.rowContainer, { margin: 5, marginVertical: 10 }]}
          >
            {item.justJoined && (
              <View
                style={{
                  backgroundColor: AppColors.appThemeColor,
                  padding: 5,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontSize: 14,
                    color: AppColors.blackColor,
                  }}
                >
                  Just Joined
                </Text>
              </View>
            )}
            <Image
              source={AppImages.COUNTRY_CODE}
              style={{
                height: 20,
                width: 20,
                position: "absolute",
                right: 10,
                top: 5,
              }}
            />
          </View>
          <View style={{ position: "absolute", bottom: 10, left: 10 }}>
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 16,
                color: AppColors.whiteColor,
              }}
            >
              {item.name}, {item.age}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                color: AppColors.whiteColor,
                marginVertical: 5,
              }}
            >
              {item.profession}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                color: AppColors.whiteColor,
              }}
            >
              {item.country}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                color: AppColors.whiteColor,
              }}
            >
              {item.time}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 15 }}>
        <LikesHeader likeCount={"99"} />
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
            color: AppColors.secondaryText,
            marginVertical: 30,
          }}
        >
          Those people are willing to chat you. Like them to start conversation.
        </Text>
        <FlatList data={likes} renderItem={renderLikedUser} numColumns={2} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: AppColors.appThemeColor,
    width: 45,
    height: 45,
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  titleText: {
    color: AppColors.blackColor,
    fontSize: 16,
  },
  lightText: {
    color: AppColors.secondaryText,
    fontSize: 14,
  },
  standardText: {
    color: AppColors.blackColor,
    fontSize: 14,
  },
  advancedFilters: {
    backgroundColor: "rgba(161, 121, 0, 0.1)",
    padding: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  advanceFilterTitle: {
    color: "rgba(161, 121, 0, 1)",
    marginVertical: 10,
    fontSize: 14,
  },
});

export default Likes;
