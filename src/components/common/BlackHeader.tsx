import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AppImages } from "../../utility/AppImages";
import { AppColors } from "../../utility/AppColors";
const BlackHeader = (props: any) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back"
        size={24}
        color={AppColors.blackColor}
        onPress={props.backHandler}
      />
      <Image
        source={AppImages.LOGO_BLACK}
        resizeMode="contain"
        style={{ width: 75 }}
      />
      <AntDesign
        name="questioncircle"
        size={24}
        color={AppColors.blackColor}
        onPress={props.questionHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});

export default BlackHeader;
