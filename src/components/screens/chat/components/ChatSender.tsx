import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { AppColors } from "../../../../utility/AppColors";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CommonButton from "../../../common/CommonButton";

const ChatSender = (props: any) => {
  return (
    <View>
      {props.isUnmatched ? (
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput
              style={{
                flex: 1,
                backgroundColor: AppColors.greyFill,
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 15,
                width: "100%",
              }}
              value={props.inputText}
              onChangeText={props.setInputText}
              placeholder="Message Sabrina"
              onSubmitEditing={props.sendMessage}
            />
            <Entypo
              onPress={() => {}}
              name="attachment"
              size={20}
              color={AppColors.greyOutline}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MaterialIcons
              name="gif"
              size={34}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <Entypo
              name="camera"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <Entypo
              name="mic"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              textAlign: "center",
              fontSize: 16,
              color: AppColors.blackColor,
            }}
          >
            You unmatched with{" "}
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                textAlign: "center",
                fontSize: 16,
                color: AppColors.secondaryText,
              }}
            >
              Sabrina
            </Text>
          </Text>
          <CommonButton
            title="Rematch"
            pressHandler={() => props.setIsUnmatched(true)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sendButton: {
    backgroundColor: "#007BFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    backgroundColor: AppColors.greyFill,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
export default ChatSender;
