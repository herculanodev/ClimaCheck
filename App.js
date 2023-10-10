import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AlterarSenha from './screens/AlterarSenha';
import CadastrarCidade from './screens/CaadastrarCidade';
import CityListScreen from './screens/CityListScreen';
import Config from './screens/Config';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import Login from './screens/Login';
import PesquisarCidade from './screens/PesquisarCidade';
import PrevisaoSemanal from './screens/PrevisaoSemanal';
import PrevisaoDiaria from './screens/PrevisaodDiaria';
import RedefinirEmail from './screens/RedefinirEmail';
import RedefinirSenha from './screens/RedefinirSenha';
import RedefinirTelefone from './screens/RedefinirTelefone';
import Registrar from './screens/Registrar';
import RemoverCidade from './screens/removerCidade';
import Sair from './screens/sair';
import Suporte from './screens/suporte';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AlterarSenha" component={AlterarSenha} />
        <Stack.Screen name="CadastrarCidade" component={CadastrarCidade} />
        <Stack.Screen name="CityList" component={CityListScreen} />
        <Stack.Screen name="Config" component={Config} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PesquisarCidade" component={PesquisarCidade} />
        <Stack.Screen name="PrevisaoSemanal" component={PrevisaoSemanal} />
        <Stack.Screen name="PrevisaoDiaria" component={PrevisaoDiaria} />
        <Stack.Screen name="RedefinirEmail" component={RedefinirEmail} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
        <Stack.Screen name="RedefinirTelefone" component={RedefinirTelefone} />
        <Stack.Screen name="Registrar" component={Registrar} />
        <Stack.Screen name="RemoverCidade" component={RemoverCidade} />
        <Stack.Screen name="Sair" component={Sair} />
        <Stack.Screen name="Suporte" component={Suporte} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
