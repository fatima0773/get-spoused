import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AppColors } from "../../../utility/AppColors";
import HomeHeader from "./components/HomeHeader";
import { AppImages } from "../../../utility/AppImages";
import Swiper from "react-native-deck-swiper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
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
import { FULL_HEIGHT } from "../../../utility/Constant";
import globalStyles from "../../../styles/globalStyles";

const Home = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [users, setUsers] = useState([
    {
      name: "Marcelina",
      age: 23,
      profession: "Designer",
      country: "Indian",
      image: AppImages.USER_MARCELINA,
    },
    {
      name: "Marcelina",
      age: 23,
      profession: "Designer",
      country: "Indian",
      image: AppImages.USER_MARCELINA,
    },
    {
      name: "Marcelina",
      age: 23,
      profession: "Designer",
      country: "Indian",
      image: AppImages.USER_MARCELINA,
    },
    {
      name: "Marcelina",
      age: 23,
      profession: "Designer",
      country: "Indian",
      image: AppImages.USER_MARCELINA,
    },
    {
      name: "Marcelina",
      age: 23,
      profession: "Designer",
      country: "Indian",
      image: AppImages.USER_MARCELINA,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeRight = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleSwipeLeft = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <SafeAreaView style={[styles.container, globalStyles.androidSafeArea]}>
      <ScrollView>
        <HomeHeader
          showNotification={true}
          backButtonDisabled={true}
          notificationHandler={() => props.navigation.navigate("Notifications")}
          filterHandler={() => props.navigation.navigate("Filters")}
        />
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            // backgroundColor: AppColors.whiteColor,
            // backgroundColor: "pink",
            padding: FULL_HEIGHT,
            backgroundColor: "transparent",
          }}
        >
          <Swiper
            onTapCard={() => props.navigation.navigate("UserDetail")}
            cards={users}
            backgroundColor="transparent"
            renderCard={(user, index) => (
              <ImageBackground
                imageStyle={{
                  borderRadius: 20,

                  // height: 594,
                  // overflow: "hidden",
                  // height: FULL_HEIGHT - 50,
                  // width: FULL_WIDTH - 40,
                }}
                source={user.image}
                key={index}
                style={styles.card}
                resizeMode="contain"
              >
                <View style={styles.contentContainer}>
                  <View>
                    <Text
                      style={{
                        fontFamily: "Poppins_500Medium",
                        color: AppColors.whiteColor,
                        fontSize: 23,
                      }}
                    >
                      {user.name}, {user.age}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins_500Medium",
                        color: AppColors.whiteColor,
                        fontSize: 14,
                      }}
                    >
                      {user.profession} | {user.country}
                    </Text>
                    <View style={styles.rowContainer}>
                      <Image
                        source={AppImages.COUNTRY_CODE}
                        style={{ height: 23, width: 23, borderRadius: 200 }}
                      />
                      <Text
                        style={{
                          fontFamily: "Poppins_500Medium",
                          color: AppColors.whiteColor,
                          fontSize: 14,
                          marginHorizontal: 10,
                        }}
                      >
                        600 miles away, USA
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => props.navigation.navigate("ChatScreen")}
                  >
                    <MaterialCommunityIcons
                      name="message-text"
                      size={24}
                      color={AppColors.whiteColor}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            )}
            onSwipedLeft={handleSwipeLeft}
            onSwipedRight={handleSwipeRight}
            cardIndex={currentIndex}
            stackSize={2}
            // stackScale={0.8}
            stackSeparation={15}
            showSecondCard={true}
            verticalSwipe={false}
            animateCardOpacity={true}
            animateOverlayLabelsOpacity
            overlayLabels={{
              left: {
                element: (
                  <View style={styles.swipeIconContainer}>
                    <Entypo
                      name="cross"
                      size={105}
                      color={AppColors.appThemeColor}
                    />
                  </View>
                ),
                style: {
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    marginTop: -60,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                element: (
                  <View style={styles.swipeIconContainer}>
                    <Entypo
                      name="heart"
                      size={105}
                      color={AppColors.appThemeColor}
                    />
                  </View>
                ),
                style: {
                  label: {
                    backgroundColor: "green",
                    borderColor: "green",
                    color: "white",
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    marginTop: -60,
                    marginLeft: 30,
                  },
                },
              },
            }}
          />
          <Text>djjskj</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: AppColors.whiteColor,
    // backgroundColor: "red",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    height: "90%",
    // height: 594,
    // width: "90%",
    // overflow: "hidden",
    // height: FULL_HEIGHT - 50,
    // width: FULL_WIDTH - 40,
    // backgroundColor: "white",
    backgroundColor: "transparent",
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: "white",
  },
  iconContainer: {
    borderRadius: 1000,
    backgroundColor: "rgba(62, 127, 255, 1)",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 25,
  },
  contentContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 10,
    justifyContent: "space-between",
    alignSelf: "flex-end",
    zIndex: 1000,
    height: "78%",
    paddingBottom: 30,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  swipeIconContainer: {
    backgroundColor: AppColors.blackColor,
    padding: 10,
    borderRadius: 300,
  },
});

export default Home;
