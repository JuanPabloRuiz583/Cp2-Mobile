import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

export default function TelaFormulario({ navigation }) {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    emNomeDe: "",
    organizacao: "",
    comentario: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    // Aqui você pode tratar o envio do formulário
    console.log("Dados enviados:", form);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulário de Doação</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome:"
        placeholderTextColor="#888"
        value={form.nome}
        onChangeText={(text) => handleChange("nome", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome:"
        placeholderTextColor="#888"
        value={form.sobrenome}
        onChangeText={(text) => handleChange("sobrenome", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail:"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estou doando em nome de:"
        placeholderTextColor="#888"
        value={form.emNomeDe}
        onChangeText={(text) => handleChange("emNomeDe", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Organização:"
        placeholderTextColor="#888"
        value={form.organizacao}
        onChangeText={(text) => handleChange("organizacao", text)}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Deixe um comentário"
        placeholderTextColor="#888"
        value={form.comentario}
        onChangeText={(text) => handleChange("comentario", text)}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#FFB74D",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
