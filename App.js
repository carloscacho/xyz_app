import React from 'react';
import { View, Text } from 'react-native';

import UserContext from './context/UserContext';
import MaterialContext from './context/MaterialContext';
// importar telas
import Rotas from './Rotas';

export default function App() {
  return (
    <UserContext>
      <View style={{ flex: 1, backgroundColor: "#33ff22" }}>
        <Rotas />
      </View>
    </UserContext>
  );
}

// function ChangeScreens() {
//   const { logado } = React.useContext(UserContextGlobal)
//   return (
//     <>
//       {!logado ? <Login /> : <Principal />}
//     </>

//   )
// }
