import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Header({ onLoginPress, onRegisterPress }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerButtons}>
        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={onRegisterPress}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 26,
    paddingTop: 60,
    width: "100%",

  },
  headerButtons: {
    flexDirection: "row",
  },
  button: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#FFB74D", // Laranja Claro
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: "#FF7043", // Laranja Escuro
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});