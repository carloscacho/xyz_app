import React from "react";
import { Alert, StyleSheet, View, Dimensions, Image } from 'react-native'
import { TextInput, Button } from "react-native-paper";

import BaseCard from "../components/BaseCard";

import { UserContextGlobal } from "../context/UserContext";

const { width, height } = Dimensions.get("window")

export default function UserCadastro({ navigation }) {
  const { setErroMsg, cadastrado, email, setEmail, senha, setSenha, nome, setNome, erroMsg, cadastroApp } =
    React.useContext(UserContextGlobal);

  React.useEffect(() => {
    if (cadastrado)
      navigation.navigate("login")
    if (erroMsg !== "")
      Alert.alert("Erro no Login", erroMsg, [
        { text: 'OK', onPress: () => setErroMsg("") }
      ])
  }, [cadastrado, erroMsg])

  return (
    <View style={estilos.container}>
      <Image style={estilos.img} source={require("../assets/icon.png")} />
      <BaseCard title="Cadastrar Usuario" sub="xyz">

        <TextInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          mode="outlined"
        />
        <TextInput
          label="E-mail"
          autoCapitalize="none"
          inputMode='email'
          keyboardType='email-address'
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
        <TextInput
          label="Senha"
          value={senha}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
          mode="outlined"
        />
        <Button style={estilos.btn} onPress={() => cadastroApp()} mode="contained">Cadastrar</Button>
        <Button style={estilos.btn} onPress={() => { navigation.goBack() }}>Cancelar</Button>
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
    width: width / 2,
    height: height / 5
  },
  btn: {
    marginTop: 10
  }

})