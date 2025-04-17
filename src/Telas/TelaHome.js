import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Header from "../Componentes/Header";

export default function TelaHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        onLoginPress={() => navigation.navigate("TelaLogin")}
        onRegisterPress={() => navigation.navigate("TelaCadastro")}
      />

      <View style={styles.content}>
      <Image
      source={require("../assets/comida-solidaria.png")}
      style={styles.logo}/>
        <Text style={styles.subtitle}>
          Conectando doadores e comunidades para combater a fome com amor e solidariedade.
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1E0C6", // Bege Claro
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 160,
    height: 160,
    marginBottom: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#555555", // Cinza Escuro
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555555",
    textAlign: "center",
    lineHeight: 26,
    maxWidth: 300,
  },
  buttonLogin: {
    backgroundColor: "#FFB74D", // Laranja Claro
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonRegister: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#A9B77D", // Verde Oliva
    width: "100%",
    alignItems: "center",
  },
  buttonTextRegister: {
    color: "#A9B77D",
    fontWeight: "600",
    fontSize: 16,
  },
  logo: {
    width: 500,
    height: 500,
    resizeMode: "contain",
    marginBottom: 16,
  },
});
