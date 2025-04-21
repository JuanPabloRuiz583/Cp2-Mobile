import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import axios from "axios";

export default function TelaCadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);

  const handleRegister = () => {
    if (!name || !email || !password || !cep) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    alert(`Usuário ${name} cadastrado com sucesso!`);
    navigation.goBack(); // Volta para a tela anterior (TelaHome)
  };

  const fetchAddress = async () => {
    if (cep.length !== 8) {
      Alert.alert("Erro", "Por favor, insira um CEP válido com 8 dígitos.");
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        Alert.alert("Erro", "CEP não encontrado.");
      } else {
        setAddress(response.data);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o endereço.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />
      <TouchableOpacity style={styles.button} onPress={fetchAddress}>
        <Text style={styles.buttonText}>Buscar Endereço</Text>
      </TouchableOpacity>

      {address && (
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>Bairro: {address.bairro}</Text>
          <Text style={styles.addressText}>Cidade: {address.localidade}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    padding: 15,
    backgroundColor: "#FFB74D",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  addressContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  addressText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
});