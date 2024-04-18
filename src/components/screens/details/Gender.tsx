import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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
import { ScrollView } from "react-native-virtualized-view";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import CommonButton from "../../common/CommonButton";
import OptionSelect from "../../common/OptionSelect";
interface RouteParams {
  back: number;
}
const Gender = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [gender, setGender] = useState("");
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { back } = route.params;

  const backHandler = () => {
    if (back === 0) {
      props.navigation.navigate("ViewProfile");
    } else if (back === 1) {
      props.navigation.navigate("Setting");
    } else if (back === 2) {
      props.navigation.navigate("Filters");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 15 }}>
        <Ionicons
          Gender="chevron-back"
          size={34}
          onPress={backHandler}
          color="black"
          style={{ position: "absolute", left: 0 }}
        />
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 24,
            color: AppColors.blackColor,
          }}
        >
          Gender
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 12,
            color: AppColors.secondaryText,
            marginVertical: 10,
          }}
        >
          Enter your full Gender.
        </Text>
        <OptionSelect
          options={["Male", "Female", "Transgender"]}
          setSelected={setGender}
        />
      </ScrollView>
      <View style={{ padding: 15 }}>
        <CommonButton title={"Done"} pressHandler={backHandler} />
      </View>
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
  contentWrapper: {
    padding: 15,
    marginTop: 60,
  },
});

export default Gender;
