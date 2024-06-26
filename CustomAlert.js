import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { FontFamily } from "./GlobalStyles";
import { Button } from "react-native-paper";

const CustomAlert = ({ isVisible, onClose, title, message, onConfirm }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => {
              onConfirm();
              onClose();
            }}
          >
            <Text style={styles.buttonText}>OK</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: FontFamily.soraMedium,
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: FontFamily.soraRegular,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#4D869C",
    borderRadius: 5,
    width: 80,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: FontFamily.soraRegular,
    textAlign: "center",
  },
});

export default CustomAlert;
