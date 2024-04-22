import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { AppColors } from "../../../utility/AppColors";
import React, { useEffect, useState } from "react";

import ChatHeader from "./components/ChatHeader";
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
import ChatStarter from "./components/ChatStarter";
import ChatSender from "./components/ChatSender";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FULL_HEIGHT } from "../../../utility/Constant";
import CommonButton from "../../common/CommonButton";
import OptionSelect from "../../common/OptionSelect";
const ChatScreen = (props: any) => {
  useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  const [openMenu, setOpenMenu] = useState(false);
  const [openBlockMenu, setOpenBlockMenu] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [openUnmatch, setOpenUnmatch] = useState(false);
  const [inputText, setInputText] = useState("");
  const unmatchOption = [
    "They Were Unresponsive",
    "They Were Not Serious",
    "They Were Not Polite",
    "We Met In Person",
  ];
  const [unmatchReason, setUnmatchReason] = useState("");
  const [isUnmatched, setIsUnmatched] = useState(true);

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, thanks for accompanying me today. really enjoyed today i like it",
      sender: "user",
    },
    {
      id: 2,
      text: "Oh it's okay i like it too babe",
      sender: "reciever",
    },

    {
      id: 3,
      text: "Next time, we will meet again",
      sender: "user",
    },
  ]);
  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      id: messages.length,
      text: inputText.trim(),
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  const renderItem = (item: any, index: any) => (
    <View>
      <View
        style={[
          styles.messageContainer,
          item.sender === "user" ? styles.userMessage : styles.recieverMessage,
        ]}
      >
        <Text
          style={[styles.messageText, { fontFamily: "Poppins_400Regular" }]}
        >
          {item.text} {index} {messages.length}
        </Text>
      </View>
      {item.sender === "user" &&
        (index === messages.length - 1 || index === messages.length - 2) && (
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              color: AppColors.secondaryText,
              fontSize: 12,
              textAlign: "right",
            }}
          >
            seen
          </Text>
        )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader
        goBack={() => props.navigation.navigate("Tab")}
        menuHandler={() => setOpenMenu(true)}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
      >
        <View style={styles.contentContainer}>
          <ChatStarter />
          <View>
            <FlatList
              data={messages}
              renderItem={({ item, index }: any) => renderItem(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <ChatSender
            isUnmatched={isUnmatched}
            inputText={inputText}
            setInputText={setInputText}
            sendMessage={sendMessage}
            setIsUnmatched={setIsUnmatched}
          />
        </View>
      </KeyboardAvoidingView>

      {/* main menu */}
      <Modal visible={openMenu} transparent={true}>
        <Pressable onPress={() => setOpenMenu(false)} style={styles.overlay}>
          <View
            style={{
              backgroundColor: AppColors.whiteColor,
              padding: 15,
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingVertical: 30,
            }}
          >
            {/* voice call */}
            <TouchableOpacity style={styles.menuOptionContainer}>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  textAlign: "center",
                  fontSize: 16,
                  color: AppColors.blackColor,
                }}
              >
                Voice Call
              </Text>
            </TouchableOpacity>
            {/* Unmatch */}
            <TouchableOpacity
              style={styles.menuOptionContainer}
              onPress={() => {
                setOpenMenu(false); // Close main menu
                setOpenUnmatch(true); // Open block menu
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  textAlign: "center",
                  fontSize: 16,
                  color: AppColors.blackColor,
                }}
              >
                Unmatch
              </Text>
            </TouchableOpacity>
            {/* Block & Report */}
            <TouchableOpacity
              style={styles.menuOptionContainer}
              onPress={() => {
                setOpenMenu(false); // Close main menu
                setOpenBlockMenu(true); // Open block menu
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  textAlign: "center",
                  fontSize: 16,
                  color: AppColors.blackColor,
                }}
              >
                Block & Report
              </Text>
            </TouchableOpacity>

            <Text
              onPress={() => setOpenMenu(false)}
              style={{
                fontFamily: "Poppins_700Bold",
                textAlign: "center",
                fontSize: 16,
                color: AppColors.blackColor,
                marginVertical: 20,
              }}
            >
              Close
            </Text>
          </View>
        </Pressable>
      </Modal>

      {/* block and report menu */}
      <Modal visible={openBlockMenu} transparent={true}>
        <Pressable
          onPress={() => setOpenBlockMenu(false)}
          style={styles.overlay}
        >
          <View
            style={{
              backgroundColor: AppColors.whiteColor,
              padding: 15,
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingVertical: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 24,
                color: AppColors.blackColor,
                marginTop: 20,
              }}
            >
              Block & Report
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: AppColors.secondaryText,
                marginVertical: 10,
              }}
            >
              Are you sure you wanna do this?
            </Text>
            {/* Block Sabrina */}
            <TouchableOpacity
              style={[
                styles.menuOptionContainer,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  textAlign: "center",
                  fontSize: 16,
                  color: AppColors.blackColor,
                }}
              >
                Block Sabrina
              </Text>
              <Entypo name="block" size={24} color="black" />
            </TouchableOpacity>
            {/* Report Sabrina */}
            <TouchableOpacity
              onPress={() => {
                setOpenBlockMenu(false);
                setOpenReport(true);
              }}
              style={[
                styles.menuOptionContainer,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  textAlign: "center",
                  fontSize: 16,
                  color: AppColors.blackColor,
                }}
              >
                Report Sabrina
              </Text>
              <MaterialIcons name="flag" size={24} color="black" />
            </TouchableOpacity>

            <Text
              onPress={() => setOpenBlockMenu(false)}
              style={{
                fontFamily: "Poppins_700Bold",
                textAlign: "center",
                fontSize: 16,
                color: AppColors.blackColor,
                marginVertical: 20,
              }}
            >
              Close
            </Text>
          </View>
        </Pressable>
      </Modal>

      {/* report modal */}
      <Modal visible={openReport} transparent={true}>
        <Pressable onPress={() => setOpenReport(false)} style={styles.overlay}>
          <View
            style={{
              backgroundColor: AppColors.whiteColor,
              padding: 15,
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingVertical: 30,
            }}
          >
            <Text
              onPress={() => setOpenBlockMenu(false)}
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 24,
                color: AppColors.blackColor,
                marginTop: 20,
              }}
            >
              Reason of Report
            </Text>
            <Text
              onPress={() => setOpenBlockMenu(false)}
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: AppColors.secondaryText,
                marginVertical: 10,
                lineHeight: 25,
              }}
            >
              We’re really sorry!{"\n"}Please let us know the reason.
            </Text>
            <TextInput
              placeholder="State your reason"
              multiline
              style={{
                backgroundColor: AppColors.greyFill,
                borderWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.05)",
                height: 153,
                borderRadius: 10,
                padding: 10,
                fontFamily: "Poppins_500Medium",
                marginVertical: 10,
                paddingTop: 10,
                paddingLeft: 10,
              }}
            />

            <Text
              onPress={() => setOpenReport(false)}
              style={{
                fontFamily: "Poppins_700Bold",
                textAlign: "center",
                fontSize: 16,
                color: AppColors.blackColor,
                marginVertical: 20,
              }}
            >
              Send
            </Text>
          </View>
        </Pressable>
      </Modal>

      {/* unmatch menu */}
      <Modal visible={openUnmatch} transparent={true}>
        <Pressable onPress={() => setOpenUnmatch(false)} style={styles.overlay}>
          <View
            style={{
              backgroundColor: AppColors.whiteColor,
              padding: 15,
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingVertical: 30,
            }}
          >
            <Text
              onPress={() => setOpenBlockMenu(false)}
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 24,
                color: AppColors.blackColor,
                marginTop: 20,
              }}
            >
              Unmatch
            </Text>
            <Text
              onPress={() => setOpenBlockMenu(false)}
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: AppColors.secondaryText,
                marginVertical: 10,
                lineHeight: 25,
              }}
            >
              Check Each Statement That Applies
            </Text>
            <OptionSelect
              options={unmatchOption}
              setSelected={setUnmatchReason}
            />
            <CommonButton
              title={"Continue"}
              pressHandler={() => {
                setIsUnmatched(false);
                setOpenUnmatch(false);
              }}
            />

            <Text
              onPress={() => setOpenUnmatch(false)}
              style={{
                fontFamily: "Poppins_700Bold",
                textAlign: "center",
                fontSize: 16,
                color: AppColors.blackColor,
                marginBottom: 30,
              }}
            >
              Close{" "}
            </Text>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
    // padding: 15,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
  },
  messageContainer: {
    maxWidth: "80%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4,
    borderRadius: 20,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: AppColors.appThemeColor,
    borderTopRightRadius: 0,
  },
  recieverMessage: {
    alignSelf: "flex-start",
    backgroundColor: AppColors.greyFill,
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
  },
  menuOptionContainer: {
    backgroundColor: AppColors.greyFill,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 7,
  },
  overlay: {
    margin: 0,
    backgroundColor: AppColors.transparentBlack,
    width: "100%",
    height: FULL_HEIGHT,
  },
});

export default ChatScreen;
