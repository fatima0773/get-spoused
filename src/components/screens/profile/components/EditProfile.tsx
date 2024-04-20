import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
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
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { AppColors } from "../../../../utility/AppColors";
import { FontAwesome5 } from "@expo/vector-icons";
import Filter from "../../notifications/components/Filter";
// import { Switch } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { FULL_WIDTH } from "../../../../utility/Constant";
import { Entypo } from "@expo/vector-icons";
import SwitchSetting from "./SwitchSetting";
const EditProfile = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [goldMember, setGoldMember] = useState(false);
  const [selectedImages, setSelectedImages] = useState<any>([0, 1, 2, 3, 4, 5]);

  const pickImage = async (indexToAddTo: number) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      // allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const newSelectedImages = [...selectedImages]; // Copy the existing array
      newSelectedImages.splice(indexToAddTo, 0, result.assets[0]); // Insert the new image at the specified index
      setSelectedImages(newSelectedImages);
      console.log(selectedImages); // Update the state
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          fontSize: 20,
          color: AppColors.blackColor,
          marginVertical: 10,
        }}
      >
        Edit Profile
      </Text>
      <View style={{ flexDirection: "row" }}>
        {selectedImages && selectedImages[0].uri ? (
          <View>
            <Image
              source={{ uri: selectedImages[0].uri }}
              style={styles.imageTile}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.cameraTile}
            onPress={() => pickImage(0)}
          >
            <Entypo name="camera" size={24} color="black" />
          </TouchableOpacity>
        )}

        {selectedImages && selectedImages[1].uri ? (
          <View>
            <Image
              source={{ uri: selectedImages[1].uri }}
              style={styles.imageTile}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.cameraTile}
            onPress={() => pickImage(1)}
          >
            <Entypo name="camera" size={24} color="black" />
          </TouchableOpacity>
        )}

        {selectedImages && selectedImages[2].uri ? (
          <View>
            <Image
              source={{ uri: selectedImages[2].uri }}
              style={styles.imageTile}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.cameraTile}
            onPress={() => pickImage(2)}
          >
            <Entypo name="camera" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>

      <View style={{ flexDirection: "row" }}>
        {selectedImages && selectedImages[3].uri ? (
          <View>
            <Image
              source={{ uri: selectedImages[3].uri }}
              style={styles.imageTile}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.cameraTile}
            onPress={() => pickImage(3)}
          >
            <Entypo name="camera" size={24} color="black" />
          </TouchableOpacity>
        )}

        {selectedImages && selectedImages[4].uri ? (
          <View>
            <Image
              source={{ uri: selectedImages[4].uri }}
              style={styles.imageTile}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.cameraTile}
            onPress={() => pickImage(4)}
          >
            <Entypo name="camera" size={24} color="black" />
          </TouchableOpacity>
        )}

        {selectedImages && selectedImages[5].uri ? (
          <View>
            <Image
              source={{ uri: selectedImages[5].uri }}
              style={styles.imageTile}
            />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.cameraTile}
            onPress={() => pickImage(5)}
          >
            <Entypo name="camera" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>

      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        Video
      </Text>
      <TouchableOpacity style={styles.contentContainer}>
        <Text style={[styles.title, { fontFamily: "Poppins_700Bold" }]}>
          Add A Video
        </Text>
        <FontAwesome name="video-camera" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        Intro
      </Text>
      <TouchableOpacity style={styles.contentContainer}>
        <Text style={[styles.title, { fontFamily: "Poppins_700Bold" }]}>
          Record Your Intro
        </Text>
        <FontAwesome name="microphone" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        Profile Features
      </Text>
      <SwitchSetting
        toggle={goldMember}
        setToggle={setGoldMember}
        title="Gold Member Badge"
        content="Show Gold Member Badge on Profile"
      />
      <TouchableOpacity style={styles.contentContainer}>
        <View>
          <Text style={[styles.title, { fontFamily: "Poppins_700Bold" }]}>
            ID Verified Badge
          </Text>
          <Text
            style={[
              styles.description,
              { fontFamily: "Poppins_500Medium", marginVertical: 5 },
            ]}
          >
            Verify Your ID To Get More Likes And Matches
          </Text>
          <Text
            style={[
              styles.description,
              {
                fontFamily: "Poppins_700Bold",
                color: AppColors.appThemeColor,
                marginTop: 10,
              },
            ]}
          >
            Complete Profile
          </Text>
        </View>
        <FontAwesome5 name="caret-right" size={34} color="black" />
      </TouchableOpacity>

      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        Location
      </Text>
      <Filter
        title={"Current Location"}
        content={"00114 Shields Falls"}
        pressHandler={() =>
          props.navigation.navigate("CurrentLocation", { back: 0 })
        }
      />
      <Filter
        title={"Travel Mode"}
        content={"Change your location to be found abroad"}
      />

      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        About Me
      </Text>
      <Filter
        title={"Name"}
        content={"Larry Smith"}
        pressHandler={() => props.navigation.navigate("Name", { back: 0 })}
      />
      <Filter
        title={"Gender"}
        content={"Female"}
        pressHandler={() => props.navigation.navigate("Gender", { back: 0 })}
      />
      <Filter
        title={"Date of Birth"}
        content={"18 Oct, 2000"}
        pressHandler={() =>
          props.navigation.navigate("DateOfBirth", { back: 0 })
        }
      />
      <Filter
        title={"Height"}
        content={"163cm (5’4’’)"}
        pressHandler={() => props.navigation.navigate("Height", { back: 0 })}
      />
      <Filter
        title={"Marital Status"}
        content={"Never Married"}
        pressHandler={() =>
          props.navigation.navigate("MaritalStatus", { back: 0 })
        }
      />
      <Filter
        title={"Children"}
        content={"Doesn’t have children"}
        pressHandler={() => props.navigation.navigate("Children", { back: 0 })}
      />
      <Filter
        title={"Bio"}
        incomplete
        pressHandler={() => props.navigation.navigate("Bio", { back: 0 })}
      />
      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        Religiosity
      </Text>
      <Filter
        title={"Religion"}
        content={"Islam"}
        pressHandler={() => props.navigation.navigate("Religion", { back: 0 })}
      />
      <Filter
        title={"Do You Smoke?"}
        content={"No"}
        pressHandler={() => props.navigation.navigate("Smoke", { back: 0 })}
      />
      <Filter
        title={"Do You Drink?"}
        content={"No"}
        pressHandler={() => props.navigation.navigate("Drink", { back: 0 })}
      />
      <Filter
        title={"Star Sign"}
        content={"Aries"}
        pressHandler={() => props.navigation.navigate("StarSign", { back: 0 })}
      />

      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        Preferences
      </Text>
      <Filter
        title={"Who would you like to date?"}
        content={"Male"}
        pressHandler={() =>
          props.navigation.navigate("DatingPreference", { back: 0 })
        }
      />
      <Filter
        title={"Age Preferences"}
        content={"Any age"}
        pressHandler={() =>
          props.navigation.navigate("AgePreference", { back: 0 })
        }
      />
      <Filter
        title={"Ethnicity"}
        content={"Singapore"}
        pressHandler={() => props.navigation.navigate("Ethnicity", { back: 0 })}
      />

      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        Interests & Personality
      </Text>
      <Filter
        title={"Interests"}
        content={"Art, Designing and 5 more"}
        pressHandler={() => props.navigation.navigate("Interests", { back: 0 })}
      />
      <Filter
        title={"Personality"}
        content={"Active Listener, Adventure and 10 more"}
        pressHandler={() =>
          props.navigation.navigate("PersonalityTraits", { back: 0 })
        }
      />
      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        Education & Career
      </Text>
      <Filter
        title={"Education"}
        content={"No Preference"}
        pressHandler={() => props.navigation.navigate("Education", { back: 0 })}
      />
      <Filter
        title={"Profession"}
        content={"No Preference"}
        pressHandler={() =>
          props.navigation.navigate("Profession", { back: 0 })
        }
      />
      <Filter
        title={"Job Title"}
        incomplete
        pressHandler={() => props.navigation.navigate("JobTitle", { back: 0 })}
      />
      <Filter
        title={"Employer"}
        incomplete
        pressHandler={() =>
          props.navigation.navigate(
            "Employer",

            { back: 0 }
          )
        }
      />
      <Text
        style={[
          {
            fontFamily: "Poppins_700Bold",
          },
          styles.heading,
        ]}
      >
        Language & Ethnicity
      </Text>
      <Filter
        title={"Ethnic Origin"}
        content={"Pakistan"}
        pressHandler={() =>
          props.navigation.navigate("EthnicGroup", { back: 0 })
        }
      />
      <Filter
        title={"Languages"}
        incomplete
        pressHandler={() => props.navigation.navigate("Language", { back: 0 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  iconContainer: {
    backgroundColor: AppColors.whiteColor,
    width: 45,
    height: 45,
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  heading: {
    fontSize: 20,
    color: AppColors.blackColor,
    marginVertical: 10,
    marginTop: 40,
  },
  boost: {
    backgroundColor: AppColors.whiteColor,
    borderRadius: 300,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 320,
    borderWidth: 3,
    borderColor: AppColors.whiteColor,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(245, 245, 245, 1)",
    padding: 20,
    borderRadius: 10,
    paddingLeft: 20,
    flexDirection: "row",
    marginVertical: 10,
  },
  title: {
    color: AppColors.blackColor,
    fontSize: 14,
  },
  description: {
    color: AppColors.secondaryText,
    fontSize: 12,
  },
  cameraTile: {
    width: (FULL_WIDTH - 80) / 3,
    height: (FULL_WIDTH - 80) / 3,
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 245, 1)",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  imageTile: {
    width: (FULL_WIDTH - 80) / 3,
    height: (FULL_WIDTH - 80) / 3,
    borderRadius: 10,
    margin: 10,
  },
});

export default EditProfile;
