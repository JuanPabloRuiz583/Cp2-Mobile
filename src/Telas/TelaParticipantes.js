import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function TelaParticipantes({ navigation }) {
  const participantes = [
    {
      nome: "Natasha",
      rm: "RM554816",
      foto: require("../assets/natasha.png"), 
    },
    {
      nome: "Bárbara",
      rm: "RM556974",
      foto: "https://via.placeholder.com/150", 
    },
    {
      nome: "Juan",
      rm: "RM557727",
      foto: "https://via.placeholder.com/150", 
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Participantes do Projeto</Text>
      <ScrollView contentContainerStyle={styles.participantsContainer}>
        {participantes.map((participante, index) => (
          <View key={index} style={styles.card}>
            <Image source={ participante.foto} style={styles.avatar} />
            <Text style={styles.name}>{participante.nome}</Text>
            <Text style={styles.rm}>RM: {participante.rm}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#333",
  },
  participantsContainer: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    width: 250,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    color: "#444",
    marginBottom: 5,
  },
  rm: {
    fontSize: 16,
    color: "#777",
  },
});
