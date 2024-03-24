import React from 'react';
import qs from 'qs';
import API from '../config';

export const MaterialContextGlobal = React.createContext({});

export default function MaterialContext(props) {
  const [title, setTitle] = React.useState('');
  const [quant, setQuant] = React.useState('');
  const [idUser, setIdUser] = React.useState('');
  const [visible, setVisible] = React.useState(false);


  const [materiais, setMateriais] = React.useState([])

  const [matCadastrado, setMatCadastrado] = React.useState(false);
  
  
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  async function loadMaterias() {
    let dados = {
      action: 'read',
      table: 'material'
    }
    let resp = await API.post("/", new URLSearchParams(dados).toString())
    console.log(resp.data);
    setMateriais(resp.data)
  }

  function limparStates() {
    setTitle("")
    setIdUser("")
  }

  return (
    <MaterialContextGlobal.Provider
      value={{
        title,
        setTitle,
        idUser,
        matCadastrado,
        limparStates,
        materiais,
        loadMaterias,
        showDialog,
        hideDialog,
        visible,
        quant,
        setQuant

      }}>
      {props.children}
    </MaterialContextGlobal.Provider>
  );
}