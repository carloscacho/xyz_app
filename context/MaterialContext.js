import React from 'react';
import qs from 'qs';
import API from '../config';

export const MaterialContextGlobal = React.createContext({});

export default function MaterialContext(props) {
  const [title, setTitle] = React.useState('');
  const [quant, setQuant] = React.useState('');
  const [idUser, setIdUser] = React.useState('');
  const [nav, setNav] = React.useState(null)


  const [materiais, setMateriais] = React.useState([])

  const [matCadastrado, setMatCadastrado] = React.useState(false);
  
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
        quant,
        setQuant,
        nav,
        setNav

      }}>
      {props.children}
    </MaterialContextGlobal.Provider>
  );
}