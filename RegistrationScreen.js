import React, { useState } from 'react';
import { View, Text, TextInput, Button, CheckBox, StyleSheet } from 'react-native';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleRegistration = () => {
    if (!agreedToTerms) {
      alert('Você deve concordar com os termos para se registrar.');
      return;
    }

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone);
    console.log('Cidade:', city);
    console.log('Senha:', password);
    console.log('Confirmação de Senha:', confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registre-se</Text> {/* Título "Registre-s" */}//titulo
      <Text>Nome:</Text> //nome
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text>Telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu telefone"
        value={phone}
        onChangeText={text => setPhone(text)}
      />

      <Text>Cidade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua cidade"
        value={city}
        onChangeText={text => setCity(text)}
      />

      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Text>Confirmação de Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />

      <CheckBox
        value={agreedToTerms}
        onValueChange={value => setAgreedToTerms(value)}
      />
      <Text style={styles.checkBoxText}>Li e concordo com os termos de uso</Text> 
      <CheckBox
        value={agreedToTerms}
        onValueChange={value => setAgreedToTerms(value)}
      />
      <Text style={styles.checkBoxText}>Permitir acesso à sua localização durante o uso do app</Text> 

      <Button
        title="Cadastrar"
        onPress={handleRegistration}
        style={styles.registerButton} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'orange', // Título em laranja
    marginBottom: 20, // Espaçamento inferior
    textAlign: 'center', // Centraliza o texto horizontalmente
  },
  input: {
    backgroundColor: '#FDBF75',
    marginBottom: 10,
    padding: 10,
  },
  checkBoxText: {
    color: 'white', 
  },
 registerButton: {
    borderRadius: 25,
    backgroundColor: '#759EFF',
    marginTop: 20,
    padding: 10,
    width: 150,
    alignItems: 'center',
  },
});

export default RegistrationScreen;
