import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../Componentes/Header"; // Importa o componente Header

export default function TelaHome({ navigation }) {
    return (
      <View style={{ flex: 1 }}>
        <Header
           onLoginPress={() => navigation.navigate("TelaLogin")}
          onRegisterPress={() => navigation.navigate("TelaCadastro")}
        />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Bem-vindo à Tela Home!</Text>
        </View>
      </View>
    );
  }
