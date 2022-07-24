import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "cornflowerblue",
    borderRadius: 8,
    alignItems: "center",
    // For android shadow
    elevation: 8,
    // For IOS
    shadowColor: "black",
    shadowOffset: { height: 4, width: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 60,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "darkmagenta",
    borderBottomWidth: 2,
    color: "darkmagenta",
    marginVertical: 8,
    fontWeight: "bold",
  },
});
