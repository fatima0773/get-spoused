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
import Interests from "../onBoarding/components/Interests";
import CommonButton from "../../common/CommonButton";
import globalStyles from "../../../styles/globalStyles";
interface RouteParams {
  back: number;
}
const Interest = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [selectedEthnicOrigin, setSelectEthinicOrigin] = useState("");
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { back } = route.params;

  const backHandler = () => {
    if (back === 0) {
      props.navigation.navigate("ViewProfile");
    } else if (back === 1) {
      props.navigation.navigate("Settings");
    } else if (back === 2) {
      props.navigation.navigate("Tab", { screen: "Filters" });
    }
  };

  return (
    <SafeAreaView style={[styles.container, globalStyles.androidSafeArea]}>
      <ScrollView>
        <Ionicons
          name="chevron-back"
          size={34}
          onPress={backHandler}
          color="black"
          style={{ position: "absolute", left: 0 }}
        />
        <Interests />
      </ScrollView>
      <View style={{ padding: 5 }}>
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
});

export default Interest;
