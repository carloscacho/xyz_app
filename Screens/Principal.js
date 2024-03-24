import React from 'react'
import { View, FlatList, StyleSheet, Alert } from 'react-native'
import { List, FAB, IconButton, Text, TextInput, Button } from 'react-native-paper'

import Header from '../components/Header'
import MaterialContext, { MaterialContextGlobal } from '../context/MaterialContext'


export default function Principal({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <MaterialContext>
        <Header title=" Materias " />
        <ListaMaterias nav={navigation} />
      </MaterialContext>
    </View>
  )
}

function ListaMaterias(props) {
  const { materiais, loadMaterias, setNav, update, matCad, toggleUp, aviso } = React.useContext(MaterialContextGlobal)

  React.useEffect(() => {
    setNav(props.nav)
    loadMaterias()
    toggleUp()
  }, [matCad])

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={materiais}
        renderItem={ItemMaterial}
        keyExtractor={(item) => item.idmaterial}
        extraData={update}
      />

      <FAB style={estilo.fab} icon="plus" onPress={() => props.nav.navigate("addMaterial")} />

    </View>

  )
}


function ItemMaterial({ item }) {
  return (
    <List.Item
      style={estilo.item}
      title={item.titulo}
      description={item.quantidade}
      right={() => <LeftButtons id={item.idmaterial} />}
    />
  )
}

function LeftButtons(props) {
  const { delMaterial, toggleUp } = React.useContext(MaterialContextGlobal)
  return (
    <View style={{ flexDirection: 'row' }}>
      <IconButton onPress={() => editarMaterial()} icon="pencil-outline" iconColor='#ffbc22' />
      <IconButton onPress={() => deleteMaterial(props.id, delMaterial, toggleUp)} icon="delete-outline" iconColor='#ff2244' />
    </View>
  )
}

function deleteMaterial(id, delMaterial, toggleUp) {
  
  return(
    Alert.alert("Delete Material", "Você tem certeza que deseja remover o Material", [
      { text: 'cancelar', onPress: () => console.log("canelado"), style: 'cancel' },
      { text: 'deletar', style: 'destructive', onPress: () => { delMaterial(id); toggleUp() } }
    ])
  )
  
}

function editarMaterial(){
  Alert.alert("O editar não feito", "Acabei deixando por ultimo")
}

const estilo = StyleSheet.create({
  item: {
    backgroundColor: '#fafafa',
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24
  }
})