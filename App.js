import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaHome from "./src/Telas/TelaHome";
import TelaCadastro from "./src/Telas/TelaCadastro";
import TelaLogin from "./src/Telas/TelaLogin";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaHome">
        <Stack.Screen
          name="TelaHome"
          component={TelaHome}
          options={{ headerShown: false }} // Oculta o cabeçalho padrão
        />
        <Stack.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{ title: "Cadastro" }} // Define o título da tela
        />
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ title: "Login" }} // Define o título da tela
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}