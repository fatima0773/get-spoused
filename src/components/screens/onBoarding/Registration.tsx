import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StepProgress from "../../common/StepProgress";
import React, { useEffect, useState } from "react";
import { AppColors } from "../../../utility/AppColors";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "@rneui/themed";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { InputField } from "../../common/InputField";
import CommonButton from "../../common/CommonButton";
import * as ImagePicker from "expo-image-picker";
import { FULL_WIDTH } from "../../../utility/Constant";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import PhoneNumberInput from "./components/PhoneNumberInput";
import OptionSelect from "../../common/OptionSelect";
const Registration = (props: any) => {
  // fonts
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  // screen states
  const [currentStep, setCurrentStep] = useState(1);
  const [disableButton, setDisableButton] = useState(true);
  // full name
  const [fullName, setFullName] = useState("");
  // photos
  const [toggleBlurPhoto, setToggleBlurPhoto] = useState(false);
  const [selectedImages, setSelectedImages] = useState<any>([]);
  // gender
  const [selectedGender, setSelectedGender] = useState("");
  // phone
  const [phone, setPhone] = useState("");

  // birthday
  const [date, setDate] = useState(new Date());

  const stepHandler = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  const flatListData = [
    { type: "addButton", key: "addButton" },
    ...selectedImages.map((image: any, index: any) => ({
      type: "image",
      image,
      key: index.toString(),
    })),
  ];
  const pickImage = async (props: any) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setSelectedImages(result.assets);
    }
  };

  useEffect(() => {
    if (currentStep === 1) {
      if (fullName.length === 0) {
        setDisableButton(true);
      } else {
        setDisableButton(false);
      }
    }
  }, [fullName, currentStep, disableButton]);

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setCurrentStep(5);
    } else if (currentStep === 5) {
      props.navigation.navigate("PhoneVerification", {
        phone: "+1 213 33294 2332 444",
      });
    }
  };

  const renderImages = (item: any, index: any) => {
    if (item.type === "addButton") {
      return (
        <TouchableOpacity
          style={{
            width: (FULL_WIDTH - 80) / 2,
            height: (FULL_WIDTH - 80) / 2,
            borderRadius: 10,
            backgroundColor: "rgba(245, 245, 245, 1)",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
          onPress={pickImage}
        >
          <View
            style={{
              width: 65,
              height: 65,
              backgroundColor: AppColors.appThemeColor,
              borderRadius: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="plus" size={30} color="black" />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <View>
          {item.image.uri && (
            <Image
              source={{ uri: item.image.uri }}
              style={{
                width: (FULL_WIDTH - 80) / 2,
                height: (FULL_WIDTH - 80) / 2,
                borderRadius: 10,
                margin: 10,
              }}
            />
          )}

          <TouchableOpacity
            onPress={() => {
              const updatedImages = selectedImages.filter(
                (img: any, idx: number) => idx !== index
              );
              setSelectedImages(updatedImages);
            }}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              position: "absolute",
              top: (FULL_WIDTH - 120) / 4,
              left: (FULL_WIDTH - 120) / 4,
              padding: 10,
              borderRadius: 200,
            }}
          >
            <Ionicons name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back"
          size={24}
          color={AppColors.blackColor}
          onPress={stepHandler}
        />
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 14,
            marginHorizontal: 10,
          }}
        >
          General Information
        </Text>
      </View>
      <StepProgress currentStep={currentStep} />
      {/* full name */}
      {currentStep === 1 && (
        <View style={styles.contentWrapper}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 24,
              color: AppColors.blackColor,
            }}
          >
            What Is Your Name?
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: AppColors.secondaryText,
              marginVertical: 10,
            }}
          >
            Please enter your full name.
          </Text>
          <InputField
            placeholder="Write here"
            text={fullName}
            onChangeText={setFullName}
          />
        </View>
      )}

      {/* Add your Photos */}
      {currentStep === 2 && (
        <View style={styles.contentWrapper}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 24,
              color: AppColors.blackColor,
            }}
          >
            Add your Photos
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: AppColors.secondaryText,
              marginVertical: 10,
            }}
          >
            Add at least two photos
          </Text>
          {/* blur photos */}
          <View style={styles.blurPhotoContainer}>
            <View>
              <Text
                style={{
                  fontFamily: "Poppins_700Bold",
                  fontSize: 14,
                  color: AppColors.blackColor,
                  marginBottom: 5,
                }}
              >
                Blur Photos
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 12,
                  color: AppColors.blackColor,
                }}
              >
                Blur your photos from others
              </Text>
            </View>
            <Switch
              value={toggleBlurPhoto}
              onValueChange={(value) => setToggleBlurPhoto(value)}
              color={AppColors.appThemeColor}
            />
          </View>
          <FlatList
            data={flatListData}
            keyExtractor={(item) => item.key}
            renderItem={({ item, index }: any) => renderImages(item, index)}
            numColumns={2}
          />
        </View>
      )}

      {/* birthday */}
      {currentStep === 3 && (
        <View style={styles.contentWrapper}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 24,
              color: AppColors.blackColor,
            }}
          >
            Tell us your Birthday
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: AppColors.secondaryText,
              marginVertical: 10,
            }}
          >
            You must be 18+ to continue
          </Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        </View>
      )}

      {/* gender */}
      {currentStep === 4 && (
        <View style={styles.contentWrapper}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 24,
              color: AppColors.blackColor,
            }}
          >
            What Is Your Gender?
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: AppColors.secondaryText,
              marginVertical: 10,
            }}
          >
            Please Select Your Gender
          </Text>
          <OptionSelect
            options={["Male", "Female", "Transgender"]}
            setSelected={setSelectedGender}
          />
        </View>
      )}

      {/* phone number */}
      {currentStep === 5 && (
        <View style={styles.contentWrapper}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 24,
              color: AppColors.blackColor,
            }}
          >
            What Is Your Phone Number?
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: AppColors.secondaryText,
              marginVertical: 10,
            }}
          >
            Please Enter Your Phone Number
          </Text>
          <PhoneNumberInput onChangeText={setPhone} text={phone} />
        </View>
      )}

      <View style={styles.buttonContainer}>
        <CommonButton
          title={"Next"}
          pressHandler={handleNextStep}
          disable={disableButton}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
  },
  headerContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  contentWrapper: {
    padding: 15,
    marginTop: 30,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    padding: 15,
  },
  blurPhotoContainer: {
    width: "100%",
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});

export default Registration;
