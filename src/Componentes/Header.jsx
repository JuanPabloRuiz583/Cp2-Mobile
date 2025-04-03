import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Header({ onLoginPress, onRegisterPress }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Combate a fome</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "black",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerButtons: {
    flexDirection: "row",
  },
  button: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#03dac6",
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: "#ff0266",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});