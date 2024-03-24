import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// telas
import Login from './Screens/Login';
import Principal from './Screens/Principal';
import UserCadastro from './Screens/UserCadastro';
import AddMaterial from './Screens/AddMaterial';

// context
import MaterialContext from './context/MaterialContext';

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
      <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="main" component={Principal} />
        <Stack.Screen name="cadastro" component={UserCadastro} />
        <Stack.Screen name="addMaterial" component={AddMaterial} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}