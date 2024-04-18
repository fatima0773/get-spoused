import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  // ScrollView,
  FlatList,
} from "react-native";
import { AppColors } from "../../../utility/AppColors";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import CommonButton from "../../common/CommonButton";
import Question from "./components/Question";
import {
  education,
  ethnicOrigin,
  ethnicity,
  maritalStatus,
  profession,
  religion,
  star,
} from "../../../data/ProfileQuestions";
import ProgressStatus from "./components/ProgressStatus";
import Header from "./components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native-virtualized-view";
import Interests from "./components/Interests";
import Personality from "./components/Personality";
import Biography from "./components/Biography";
import React from "react";

const CompleteProfile = (props: any) => {
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  const [disableButton, setDisableButton] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const handleNextStep = () => {
    if (currentStep <= 15) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 16) {
      props.navigation.navigate("ProfileCreationSuccess");
    }
  };

  // questions
  const [selectedProfession, setSelectProfession] = useState("");
  const [selectedEthnicity, setSelectEthnicity] = useState("");
  const [selectedEducation, setSelectEducation] = useState("");
  const [selectedEthnicOrigin, setSelectEthinicOrigin] = useState("");
  const [selectedMaritalStatus, setSelectMaritalStatus] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSmoker, setSelectedSmoker] = useState("");
  const [selectedChildren, setSelectedChildren] = useState("");
  const [selectedReligion, setSelectedReligion] = useState("");
  const [selectedRelationGoal, setSelectedRelationGoal] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedStar, setSelectedStar] = useState("");

  const allergyOptions = [
    "Peanuts",
    "Fish",
    "Soy",
    "Dairy",
    "Eggs",
    "Mustard",
    "Wheat",
    "Gluten",
    "Shellfish",
  ];
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const handleAllergyPress = (allergy: any) => {
    const isSelected = selectedAllergies.includes(allergy);

    setSelectedAllergies((prevState) => {
      const updatedSelection = [...prevState]; // Create a copy to avoid mutation
      if (isSelected) {
        updatedSelection.splice(updatedSelection.indexOf(allergy), 1);
      } else {
        updatedSelection.push(allergy);
      }
      return updatedSelection;
    });
  };

  // useEffect(() => {
  //   if (currentStep === 1) {
  //     if (selectedProfession === "") {
  //       setDisableButton(true);
  //     } else if (selectedProfession !== "") {
  //       setDisableButton(false);
  //     }
  //   } else if (currentStep === 2) {
  //     if (selectedEthnicity === "") {
  //       setDisableButton(true);
  //     } else if (selectedEthnicity !== "") {
  //       setDisableButton(false);
  //     }
  //   } else if (currentStep === 3) {
  //     if (selectedEducation === "") {
  //       setDisableButton(true);
  //     } else if (selectedEducation !== "") {
  //       setDisableButton(false);
  //     }
  //   } else if (currentStep === 4) {
  //     if (selectedEthnicOrigin === "") {
  //       setDisableButton(true);
  //     } else if (selectedEthnicOrigin !== "") {
  //       setDisableButton(false);
  //     }
  //   }
  // }, [
  //   selectedProfession,
  //   selectedEthnicity,
  //   currentStep,
  //   selectedEducation,
  //   selectedEthnicOrigin,
  // ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <ProgressStatus currentStep={currentStep} />
        {/* profession */}
        {currentStep === 1 && (
          <Question
            data={profession}
            setSelected={setSelectProfession}
            heading="Tell us your Profession"
            subheading="Select your profession"
            addSearch={true}
          />
        )}

        {/* ethnic group */}
        {currentStep === 2 && (
          <Question
            data={ethnicity}
            setSelected={setSelectEthnicity}
            heading="What’s your Ethnic Group"
            subheading=" Select your ethnicity"
            addSearch={true}
          />
        )}

        {/* education */}
        {currentStep === 3 && (
          <Question
            data={education}
            setSelected={setSelectEducation}
            heading="What’s your Education"
            subheading="Select your education level"
            addSearch={false}
          />
        )}

        {/* ethnic origin */}
        {currentStep === 4 && (
          <Question
            data={ethnicOrigin}
            setSelected={setSelectEthinicOrigin}
            heading="What’s your Ethnic Origin"
            subheading="Select your ethnic Origin"
            addSearch={true}
          />
        )}

        {/* height */}
        {currentStep === 5 && (
          <View style={styles.contentWrapper}>
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 24,
                color: AppColors.blackColor,
              }}
            >
              What’s your Height
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 12,
                color: AppColors.secondaryText,
                marginVertical: 10,
              }}
            >
              Select your height
            </Text>
          </View>
        )}

        {/* marital status */}
        {currentStep === 6 && (
          <Question
            data={maritalStatus}
            setSelected={setSelectMaritalStatus}
            heading="Your Marital Status"
            subheading="Select your marital status."
            addSearch={false}
          />
        )}

        {/* dating preference */}
        {currentStep === 7 && (
          <Question
            data={["Male", "Female", "Transgender"]}
            setSelected={setSelectedGender}
            heading="Who do you like to date?"
            subheading="When you are getting married?"
            addSearch={false}
          />
        )}

        {/* smoker */}
        {currentStep === 8 && (
          <Question
            data={["Yes", "No"]}
            setSelected={setSelectedSmoker}
            heading="Do you smoke?"
            subheading="Select the option that describes you well"
            addSearch={false}
          />
        )}

        {/* children */}
        {currentStep === 9 && (
          <Question
            data={["Yes", "No", "Maybe"]}
            setSelected={setSelectedChildren}
            heading="Do you like to have children"
            subheading=" Select one of the following options"
            addSearch={false}
          />
        )}

        {/* relationship goals */}
        {currentStep === 10 && (
          <Question
            data={["Marriage", "Long term relationship", "Others"]}
            setSelected={setSelectedRelationGoal}
            heading="What are you hoping to find?"
            subheading="Tell us your relationship goals"
            addSearch={false}
          />
        )}

        {/* religion */}
        {currentStep === 11 && (
          <Question
            data={religion}
            setSelected={setSelectedReligion}
            heading="Your Religion?"
            subheading="Select the religion that describes you well"
            addSearch={false}
          />
        )}

        {/* drink */}
        {currentStep === 12 && (
          <Question
            data={["Yes", "No"]}
            setSelected={setSelectedDrink}
            heading="Do you Drink?"
            subheading="Select the option that describes you well"
            addSearch={false}
          />
        )}

        {/* star */}
        {currentStep === 13 && (
          <Question
            data={star}
            setSelected={setSelectedStar}
            heading="What’s your star sign?"
            subheading="Select the option that describes you well"
            addSearch={false}
          />
        )}

        {/* interests */}
        {currentStep === 14 && <Interests />}

        {/* personality */}
        {currentStep === 15 && <Personality />}

        {/* biography */}
        {currentStep === 16 && <Biography />}
      </ScrollView>
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
    // position: "absolute",
    // bottom: 20,
    width: "100%",
    paddingHorizontal: 15,
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

export default CompleteProfile;
