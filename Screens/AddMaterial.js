import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'

import Header from '../components/Header'
import BaseCard from '../components/BaseCard'
import { MaterialContextGlobal } from '../context/MaterialContext'

export default function AddMaterial() {
  const { title, setTitle, quant, setQuant, cadastrar } = React.useContext(MaterialContextGlobal)
  return (
    <View>
      <Header title="Adicionar Material" />
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
          <Button style={estilos.btn} mode="contained" onPress={cadastrar}>Cadastrar Material</Button>
          <Button style={estilos.btn} mode="outlined">Voltar</Button>
        </BaseCard>
      </View>



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