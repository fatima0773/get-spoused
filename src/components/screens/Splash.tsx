import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Image } from "react-native";
import { AppColors } from "../../utility/AppColors";
import { AppImages } from "../../utility/AppImages";

const Splash = (props: any) => {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      props.navigation.navigate("GetStarted");
    });
  }, []);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      backgroundColor: AppColors.appThemeColor,
      alignItems: "center",
      justifyContent: "center",
    },
    logoStyle: {
      height: 140,
    },
    progressBar: {
      width: "80%",
      height: 10,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      marginTop: 20,
      borderRadius: 5,
      position: "absolute",
      bottom: 30,
    },
    progressFill: {
      height: "100%",
      backgroundColor: AppColors.whiteColor,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={AppImages.LOGO_STACKED}
        resizeMode="contain"
      />
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Splash;
