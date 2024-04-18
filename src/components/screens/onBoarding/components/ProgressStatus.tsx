import React from "react";
import { View } from "react-native";
import { AppColors } from "../../../../utility/AppColors";

export default function ProgressStatus(props: any) {
  return (
    <View
      style={{
        marginVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16].map(
        (item, index) => (
          <View
            key={index}
            style={{
              height: 4,
              backgroundColor:
                item <= props.currentStep
                  ? AppColors.appThemeColor
                  : AppColors.greyOutline,
              borderRadius: 10,
              margin: 2,
              flex: 1,
            }}
          />
        )
      )}
    </View>
  );
}
