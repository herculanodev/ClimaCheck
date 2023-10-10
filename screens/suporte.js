import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import VoltarBtn from '../components/VoltarBtn';

function SupportScreen({ navigation }) {
  const [suggestion, setSuggestion] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSendSuggestion = () => {
    if (suggestion.trim() !== '') {
      const newSuggestion = {
        text: suggestion,
        timestamp: new Date().toISOString(),
      };

      setSuggestions([...suggestions, newSuggestion]);
      setSuggestion('');
    }
  };

  const handleRemoveSuggestion = (index) => {
    const updatedSuggestions = [...suggestions];
    updatedSuggestions.splice(index, 1);
    setSuggestions(updatedSuggestions);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <VoltarBtn navigation={navigation} />
        <Appbar.Content title="Suporte" style={styles.appbarContent} />
      </Appbar.Header>

      <Text style={styles.label}>Digite no quadro abaixo sua sugestão:</Text>

      <TextInput
        placeholder="Sua sugestão..."
        onChangeText={(text) => setSuggestion(text)}
        value={suggestion}
        multiline
        style={styles.input}
      />

      <TouchableOpacity
        title="Enviar"
        onPress={handleSendSuggestion}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <ScrollView style={styles.suggestionList}>
        {suggestions.map((item, index) => (
          <View key={index} style={styles.suggestionItem}>
            <Text>{item.text}</Text>
            <Text style={styles.timestamp}>{formatTimestamp(item.timestamp)}</Text>
            <TouchableOpacity
              onPress={() => handleRemoveSuggestion(index)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76C7FF',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    backgroundColor: 'orange',
  },
  appbarContent: {
    backgroundColor: '#FCA43A',
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
    borderRadius: 8,
    height: 120,
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#759EFF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  suggestionList: {
    marginTop: 20,
    maxHeight: 200,
  },
  suggestionItem: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row', // Alinhe os elementos horizontalmente
    justifyContent: 'space-between', // Espaçamento entre os elementos
    alignItems: 'center', // Alinhe os itens verticalmente
  },
  timestamp: {
    color: 'gray',
    fontSize: 12,
    marginTop: 4,
  },
  removeButton: {
    backgroundColor: 'red', // Cor de fundo do botão de exclusão
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  removeButtonText: {
    color: 'white',
  },
});

export default SupportScreen;
