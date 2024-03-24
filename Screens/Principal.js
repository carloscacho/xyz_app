import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
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
  const { materiais, loadMaterias, showDialog, setNav } = React.useContext(MaterialContextGlobal)

  React.useEffect(() => {
    setNav(props.nav)
    loadMaterias()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={materiais}
        renderItem={ItemMaterial}
        keyExtractor={(item) => item.id}
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
      description={item.iduser}
      right={() => <LeftButtons />}
    />
  )
}

function LeftButtons() {

  return (
    <View style={{ flexDirection: 'row' }}>
      <IconButton icon="pencil-outline" iconColor='#ffbc22' />
      <IconButton onPress={() => openTelaCadMaterial()} icon="delete-outline" iconColor='#ff2244' />
    </View>
  )
}

function openTelaCadMaterial() {
  const { nav } = React.useContext(MaterialContextGlobal)



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