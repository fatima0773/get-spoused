import { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
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
import OptionSelect from "../../common/OptionSelect";
import RangeSlider from "react-native-range-slider-expo";
import HeightInput from "./components/HeightInput";

const CompleteProfile = (props: any) => {
  useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  const [disableButton, setDisableButton] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
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
  const [showDatingPreferences, setShowDatingPreferences] = useState(false);

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
            setSelected={setSelectProfession}
            heading="What Is Your Profession?"
            subheading="Select your profession"
            addSearch={true}
            placeholder={"Search Profession"}
          >
            <OptionSelect
              options={profession}
              setSelected={(value: string) => console.log(value)}
            />
          </Question>
        )}

        {/* ethnic group */}
        {currentStep === 2 && (
          <Question
            setSelected={setSelectEthnicity}
            heading="Which Of These Best Describes You?"
            subheading=" Select your ethnicity"
            addSearch={true}
            placeholder={"Search Ethnicity"}
          >
            <OptionSelect
              options={ethnicity}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
        )}

        {/* education */}
        {currentStep === 3 && (
          <Question
            setSelected={setSelectEducation}
            heading="What Is Your Highest Degree?"
            subheading="Select your education level"
            addSearch={false}
          >
            <OptionSelect
              options={education}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
        )}

        {/* ethnic origin */}
        {currentStep === 4 && (
          <Question
            data={ethnicOrigin}
            setSelected={setSelectEthinicOrigin}
            heading="Where Are You From?"
            subheading="Select Your Home Country"
            addSearch={true}
            placeholder="Search Country"
          >
            <OptionSelect
              options={ethnicOrigin}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
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
              How Tall Are You?
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 12,
                color: AppColors.secondaryText,
                marginVertical: 10,
              }}
            >
              Select Your Height
            </Text>
            <HeightInput />
          </View>
        )}

        {/* marital status */}
        {currentStep === 6 && (
          <Question
            setSelected={setSelectMaritalStatus}
            heading="What Is Your Marital Status"
            subheading="Select Your Marital Status."
            addSearch={false}
          >
            <OptionSelect
              options={maritalStatus}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
        )}

        {/* dating preference */}
        {currentStep === 7 && (
          <Question
            setSelected={setSelectedGender}
            heading="What Kind Of Partner Do You Prefer?"
            subheading="When You Are Getting Married?"
            addSearch={false}
          >
            <OptionSelect
              options={["Male", "Female", "Transgender"]}
              setSelected={(value: string) => {
                setShowDatingPreferences(true);
              }}
            />
            {showDatingPreferences && (
              <View>
                <View>
                  <View style={[styles.rowContainer, { marginTop: 35 }]}>
                    <Text
                      style={[
                        styles.standardText,
                        { fontFamily: "Poppins_700Bold" },
                      ]}
                    >
                      Age
                    </Text>
                    <Text
                      style={[
                        styles.standardText,
                        { fontFamily: "Poppins_400Regular" },
                      ]}
                    >
                      Any Age
                    </Text>
                  </View>
                  <RangeSlider
                    toKnobColor={AppColors.appThemeColor}
                    fromKnobColor={AppColors.appThemeColor}
                    min={18}
                    max={85}
                    fromValueOnChange={(value) => console.log(value)}
                    toValueOnChange={(value) => console.log(value)}
                    initialFromValue={11}
                    barHeight={4}
                    showValueLabels={false}
                  />
                </View>
                <Question
                  setSelected={setSelectEthnicity}
                  heading="Ethnicity"
                  subheading="Select Your Ethnicity"
                  addSearch={true}
                  placeholder={"Search Ethnic Group"}
                >
                  <OptionSelect
                    options={ethnicity}
                    setSelected={(value: string) => {
                      console.log(value);
                    }}
                  />
                </Question>
              </View>
            )}
          </Question>
        )}

        {/* smoker */}
        {currentStep === 8 && (
          <Question
            setSelected={setSelectedSmoker}
            heading="Do You Smoke?"
            subheading="Select The Option That Describes You Well"
            addSearch={false}
          >
            <OptionSelect
              options={["Yes", "No"]}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
        )}

        {/* children */}
        {currentStep === 9 && (
          <Question
            setSelected={setSelectedChildren}
            heading="Do You Like To Have Children"
            subheading="Select One Of The Following Options"
            addSearch={false}
          >
            <OptionSelect
              options={["Yes", "No", "Maybe"]}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
        )}

        {/* relationship goals */}
        {currentStep === 10 && (
          <Question
            setSelected={setSelectedRelationGoal}
            heading="What Are You Hoping To Find?"
            subheading="Tell Us Your Relationship Goals"
            addSearch={false}
          >
            <OptionSelect
              options={["Marriage", "Long term relationship", "Others"]}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
        )}

        {/* religion */}
        {currentStep === 11 && (
          <Question
            setSelected={setSelectedReligion}
            heading="Your Religion?"
            subheading="Select The Religion That Describes You Well"
            addSearch={false}
          >
            <OptionSelect
              options={religion}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
        )}

        {/* drink */}
        {currentStep === 12 && (
          <Question
            setSelected={setSelectedDrink}
            heading="Do You Drink?"
            subheading="Select The Option That Describes You Well"
            addSearch={false}
          >
            <OptionSelect
              options={["Yes", "No"]}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
        )}

        {/* star */}
        {currentStep === 13 && (
          <Question
            setSelected={setSelectedStar}
            heading="What’s Your Star Sign?"
            subheading="Select The Option That Describes You Well"
            addSearch={false}
          >
            <OptionSelect
              options={star}
              setSelected={(value: string) => {
                console.log(value);
              }}
            />
          </Question>
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  standardText: {
    color: AppColors.blackColor,
    fontSize: 14,
  },
});

export default CompleteProfile;
