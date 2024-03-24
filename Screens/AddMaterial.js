import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'

import Header from '../components/Header'
import BaseCard from '../components/BaseCard'
import MaterialContext, { MaterialContextGlobal } from '../context/MaterialContext'
import { UserContextGlobal } from '../context/UserContext'

export default function AddMaterial({navigation}) {
  
  return (
    <View>
      <Header title="Adicionar Material" />
      <MaterialContext>
        <CardAddMaterial nav={navigation} />
      </MaterialContext>
    </View>

  )
}

function CardAddMaterial(props){
  const { title, setTitle, quant, setQuant, cadastrar } = React.useContext(MaterialContextGlobal)
  const { userData } = React.useContext(UserContextGlobal)
  return(
    <View style={estilos.container}>
    <BaseCard>
      <Text variant="displaySmall">Cadastrar novo material</Text>
      <TextInput
        label="Nome do Material"
        value={title}
        onChangeText={(text) => setTitle(text)}
        mode="outlined"
      />
      <TextInput
        label="Quantidade"
        value={quant}
        keyboardType='number-pad'
        onChangeText={(text) => setQuant(text)}
        mode="outlined"
      />
      <Button style={estilos.btn} mode="contained" onPress={() => {cadastrar(userData.id); props.nav.goBack()}}>Cadastrar Material</Button>
      <Button style={estilos.btn} mode="outlined" onPress={() => props.nav.goBack()} >Voltar</Button>
    </BaseCard>
  </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 50,
  },
  btn: {
    marginTop: 10,
    marginVertical: 'auto'
  }
})