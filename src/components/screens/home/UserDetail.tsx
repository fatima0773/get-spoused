import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
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
import HomeHeader from "./components/HomeHeader";
import { AppImages } from "../../../utility/AppImages";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import { FontAwesome5 } from "@expo/vector-icons";
import UserAction from "./components/UserAction";
import { FontAwesome } from "@expo/vector-icons";
import { FULL_WIDTH } from "../../../utility/Constant";

const UserDetail = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [user, setUser] = useState({
    name: "Marcelina",
    age: 23,
    profession: "UI/UX Designer",
    education: "Secondary School",
    image: AppImages.USER_CHRISTY,
    interests: ["Basketball", "Surfing", "Baking", "Junk Food", "Meat Lover"],
    aboutMe: ["Secondary School", "Arries", "Single"],
    bio: "Qui id non deleniti ipsa rem praesentium quaerat. Minus sit id vitae in et maiores quisquam consectetur. Quia aliquid quibusdam impedit laudantium. Sint porro dolorum ea qui enim id quia praesentium dolor. Quo voluptatibus corrupti voluptatem aut at molestiae facilis temporibus dignissimos. Dolores ad libero fugit voluptates.",
    photos: [
      AppImages.USER_PHOTOS,
      AppImages.USER_PHOTOS,
      AppImages.USER_PHOTOS,
      AppImages.USER_PHOTOS,
    ],
    country: "Pakistan",
    away: "3.2 Km",
    height: "5.5’",
  });

  const renderAboutMe = ({ item }: any) => {
    return (
      <View style={styles.roundContainer}>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: AppColors.blackColor,
            fontSize: 12,
          }}
        >
          {item}
        </Text>
      </View>
    );
  };

  const renderInterests = ({ item }: any) => {
    return (
      <View
        style={[
          styles.roundContainer,
          { backgroundColor: AppColors.appThemeColor },
        ]}
      >
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            color: AppColors.blackColor,
            fontSize: 12,
          }}
        >
          {item}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader activeFilter={true} />
        <ImageBackground
          source={user.image}
          resizeMode="cover"
          style={{
            width: FULL_WIDTH,
            marginTop: 20,
            height: 530,
          }}
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
                  marginVertical: 10,
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
        <View style={{ padding: 15 }}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              fontSize: 20,
            }}
          >
            About me
          </Text>
          <FlatList
            data={user.aboutMe}
            renderItem={renderAboutMe}
            keyExtractor={(item) => item}
            numColumns={3}
          />

          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Biography
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              color: AppColors.secondaryText,
              fontSize: 12,
              marginVertical: 15,
            }}
          >
            {user.bio}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              fontSize: 20,
            }}
          >
            Interests
          </Text>
          <FlatList
            data={user.interests}
            renderItem={renderInterests}
            keyExtractor={(item) => item}
            numColumns={3}
          />

          <FlatList
            data={user.photos}
            renderItem={({ item, index }: any) => (
              <Image
                style={styles.userImage}
                source={item}
                key={index}
                resizeMode="cover"
              />
            )}
            horizontal
          />

          {/* location */}
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Location
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              color: AppColors.secondaryText,
              fontSize: 14,
              marginTop: 10,
            }}
          >
            23854 Schiller Lakes
          </Text>
          <View
            style={[
              styles.rowContainer,
              { justifyContent: "flex-start", marginVertical: 10 },
            ]}
          >
            <View style={styles.roundContainer}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: AppColors.blackColor,
                  fontSize: 14,
                }}
              >
                <FontAwesome5 name="location-arrow" size={14} color="black" />{" "}
                {user.away} away
              </Text>
            </View>
            <View style={styles.roundContainer}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: AppColors.blackColor,
                  fontSize: 14,
                }}
              >
                {user.country}
              </Text>
            </View>
          </View>

          {/* height and age */}
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Height & Age
          </Text>
          <View
            style={[
              styles.rowContainer,
              { justifyContent: "flex-start", marginVertical: 10 },
            ]}
          >
            <View style={styles.roundContainer}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: AppColors.blackColor,
                  fontSize: 14,
                }}
              >
                {user.height}
              </Text>
            </View>
            <View style={styles.roundContainer}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: AppColors.blackColor,
                  fontSize: 14,
                }}
              >
                {user.age} years old
              </Text>
            </View>
          </View>

          {/* profession and education */}
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: AppColors.blackColor,
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Profession & Education
          </Text>
          <View
            style={[
              styles.rowContainer,
              { justifyContent: "flex-start", marginVertical: 10 },
            ]}
          >
            <View style={styles.roundContainer}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: AppColors.blackColor,
                  fontSize: 14,
                }}
              >
                {user.profession}
              </Text>
            </View>
            <View style={styles.roundContainer}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: AppColors.blackColor,
                  fontSize: 14,
                }}
              >
                {user.education}
              </Text>
            </View>
          </View>

          {/* action */}
          <UserAction matchHandler={() => props.navigation.navigate("Match")} />
          <View
            style={[styles.rowContainer, { width: "80%", alignSelf: "center" }]}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: AppColors.blackColor,
                fontSize: 16,
                marginHorizontal: 10,
              }}
            >
              Report
            </Text>
            <FontAwesome name="circle" size={10} color="black" />
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: AppColors.blackColor,
                fontSize: 16,
                marginHorizontal: 10,
              }}
            >
              Recommend
            </Text>
            <FontAwesome name="circle" size={10} color="black" />
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: AppColors.blackColor,
                fontSize: 16,
                marginHorizontal: 10,
              }}
            >
              Block
            </Text>
          </View>
        </View>
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
    borderRadius: 1000,
    backgroundColor: "rgba(62, 127, 255, 1)",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
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
  contentContainer: {
    padding: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 10,
    justifyContent: "space-between",
    alignSelf: "flex-end",
    zIndex: 1000,
    height: "95%",
  },
  roundContainer: {
    borderRadius: 120,
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: AppColors.greyFill,
    marginRight: 8,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    borderRadius: 20,
    width: 300,
    height: 400,
    margin: 10,
  },
});

export default UserDetail;
