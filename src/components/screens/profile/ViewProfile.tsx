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
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AppImages } from "../../../utility/AppImages";
import { FULL_HEIGHT, FULL_WIDTH } from "../../../utility/Constant";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import UserAction from "../home/components/UserAction";
import { Ionicons } from "@expo/vector-icons";
import ProfileDetails from "./components/ProfileDetails";
import EditProfile from "./components/EditProfile";

const ViewProfile = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({
    name: "Marcelina",
    age: 23,
    profession: "UI/UX Designer",
    education: "Secondary School",
    image: AppImages.USER_LARRY,
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
        {/* header */}
        <View style={[styles.rowContainer, { paddingHorizontal: 15 }]}>
          <Ionicons
            name="chevron-back"
            size={34}
            onPress={() => props.navigation.navigate("Profile")}
            color="black"
          />
          <TouchableOpacity
            style={[
              styles.iconContainer,
              { backgroundColor: AppColors.appThemeColor },
            ]}
          >
            <AntDesign name="upload" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => setIsEdit(false)}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 16,
                color: isEdit ? AppColors.secondaryText : AppColors.blackColor,
              }}
            >
              Preview
            </Text>
            <View
              style={{
                borderBottomWidth: 3,
                borderBottomColor: !isEdit
                  ? AppColors.appThemeColor
                  : AppColors.whiteColor,
                width: "100%",
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsEdit(true)}
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 16,
                color: !isEdit ? AppColors.secondaryText : AppColors.blackColor,
              }}
            >
              Edit
            </Text>
            <View
              style={{
                borderBottomWidth: 3,
                borderBottomColor: isEdit
                  ? AppColors.appThemeColor
                  : AppColors.whiteColor,
                width: "100%",
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        {isEdit ? (
          <EditProfile navigation={props.navigation} />
        ) : (
          <ProfileDetails />
        )}
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
    marginHorizontal: 10,
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

export default ViewProfile;
