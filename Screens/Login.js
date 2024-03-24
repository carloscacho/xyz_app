import React from 'react';
import { View, StyleSheet, Alert, Image, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const {width, height} = Dimensions.get("window")
// compoente
import BaseCard from '../components/BaseCard';

// context
import { UserContextGlobal } from '../context/UserContext';

export default function Login({ navigation }) {
  const { setErroMsg, email, setEmail, senha, setSenha, logado, loginApp, erroMsg } =
    React.useContext(UserContextGlobal);

  React.useEffect(() => {
    if (logado)
      navigation.navigate("main")
    if (erroMsg !== "")
      Alert.alert("Erro no Login", erroMsg, [
        {text: 'OK', onPress: () => setErroMsg("")}
    ])
  }, [logado, erroMsg])

  return (
    <View style={estilos.container}>
      <Image style={estilos.img} source={require("../assets/icon.png")} />
      <BaseCard title="Login do APP" sub="xyz">
        <TextInput
          label="E-mail"
          value={email}
          autoCapitalize="none"
          inputMode='email'
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
        <TextInput
          label="Senha"
          value={senha}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => setSenha(text)}
          mode="outlined"
        />
        <Button style={estilos.btn} mode="contained" onPress={() => loginApp()}>Entrar</Button>
        <Button style={estilos.btn} mode="outlined" onPress={() => { navigation.navigate("cadastro") }}>Cadastrar</Button>
      </BaseCard>
    </View>
  );
}


const estilos = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 50,
  },
  img: {
    alignSelf: 'center',
    width: width /2,
    height: height /5
  },
  btn: {
    marginTop: 10
  }

})