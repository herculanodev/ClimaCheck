import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AlterarSenhaScreen({ navigation }) {
  return (
    <></>
);
}

function CadastroCidadeScreen({ navigation }) {
  return (
     <></>
    // Componente da tela CadastroCidade
  );
}

function CityListScreen({ navigation }) {
  return (
     <></>
    // Componente da tela CityListScreen
  );
}

function ConfigScreen({ navigation }) {
  return (
     <></>
    // Componente da tela Config
  );
}

function ForgotPasswordScreen({ navigation }) {
  return (
     <></>
    // Componente da tela ForgotPassword
  );
}

function HomeScreen({ navigation }) {
  return (
     <></>
    // Componente da tela Home
  );
}

function LoginScreen({ navigation }) {
  return (
     <></>
    // Componente da tela Login
  );
}

function PesquisarCidadeScreen({ navigation }) {
  return (
     <></>
    // Componente da tela PesquisarCidade
  );
}

function PrevisaoSemanalScreen({ navigation }) {
  return (
     <></>
    // Componente da tela PrevisaoSemanal
  );
}

function PrevisaoDiariaScreen({ navigation }) {
  return (
     <></>
    // Componente da tela PrevisaoDiaria
  );
}

function RedefinirEmailScreen({ navigation }) {
  return (
     <></>
    // Componente da tela RedefinirEmail
  );
}

function RedefinirSenhaScreen({ navigation }) {
  return (
     <></>
    // Componente da tela RedefinirSenha
  );
}

function RedefinirTelefoneScreen({ navigation }) {
  return (
     <></>
    // Componente da tela RedefinirTelefone
  );
}

function RegistrarScreen({ navigation }) {
  return (
     <></>
    // Componente da tela Registrar
  );
}

function RemoverCidadeScreen({ navigation }) {
  return (
     <></>
    // Componente da tela RemoverCidade
  );
}

function SairScreen({ navigation }) {
  return (
     <></>
    // Componente da tela Sair
  );
}

function SuporteScreen({ navigation }) {
  return (
     <></>
    // Componente da tela Suporte
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="AlterarSenha" component={AlterarSenhaScreen} />
        <Stack.Screen name="CadastroCidade" component={CadastroCidadeScreen} />
        <Stack.Screen name="CityList" component={CityListScreen} />
        <Stack.Screen name="Config" component={ConfigScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PesquisarCidade" component={PesquisarCidadeScreen} />
        <Stack.Screen name="PrevisaoSemanal" component={PrevisaoSemanalScreen} />
        <Stack.Screen name="PrevisaoDiaria" component={PrevisaoDiariaScreen} />
        <Stack.Screen name="RedefinirEmail" component={RedefinirEmailScreen} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenhaScreen} />
        <Stack.Screen name="RedefinirTelefone" component={RedefinirTelefoneScreen} />
        <Stack.Screen name="Registrar" component={RegistrarScreen} />
        <Stack.Screen name="RemoverCidade" component={RemoverCidadeScreen} />
        <Stack.Screen name="Sair" component={SairScreen} />
        <Stack.Screen name="Suporte" component={SuporteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}