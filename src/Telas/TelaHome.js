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
        <Text style={styles.title}>Alimento para Todos</Text>
        <Text style={styles.subtitle}>
          Conectando doadores e comunidades para combater a fome com amor e solidariedade.
        </Text>

        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("TelaLogin")}>
          <Text style={styles.buttonText}>Já tenho conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("TelaCadastro")}>
          <Text style={styles.buttonTextRegister}>Quero me cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1E0C6", // Bege Claro
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#555555", // Cinza escuro
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555555",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 30,
  },
  buttonLogin: {
    backgroundColor: "#FFB74D", // Laranja Claro
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonRegister: {
    borderWidth: 2,
    borderColor: "#A9B77D", // Verde Oliva
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonTextRegister: {
    color: "#A9B77D",
    fontWeight: "bold",
  },
});
