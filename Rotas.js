import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// telas
import Login from './Screens/Login';
import Principal from './Screens/Principal';
import UserCadastro from './Screens/UserCadastro';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#141e28',
  },
};

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName='main' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="main" component={Principal} />
        <Stack.Screen name="cadastro" component={UserCadastro} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}