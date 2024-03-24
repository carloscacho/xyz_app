import React from 'react';
import qs from 'qs';
import API from '../config';

export const MaterialContextGlobal = React.createContext({});

export default function MaterialContext(props) {
  const [title, setTitle] = React.useState('');
  const [quant, setQuant] = React.useState('');
  const [idUser, setIdUser] = React.useState('');
  const [nav, setNav] = React.useState(null)
  const [update, setUpdate] = React.useState(false);
  const [matCad, setMatCad] = React.useState(false)


  const [materiais, setMateriais] = React.useState([])

  const toggleUp = () => { setUpdate(!update) }

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
    setQuant("")
  }

  async function cadastrar(iduser){
    const dados = qs.stringify({
      'action': 'create',
      'table': 'material',
      'data[titulo]': title,
      'data[quantidade]': quant,
      'data[iduser]': iduser,
    })
    let resp = await API.post('/', dados);
    console.log(resp.data);
      const {success}  = resp.data;
      if(success){
        setMatCad(!matCad)
      }

  }


  async function delMaterial(id) {
    let dados = {
      action: 'delete',
      table: 'material',
      id: id
    }

    let resp = await API.post("/", new URLSearchParams(dados).toString())
    console.log(resp.data);
    loadMaterias()
    
  }

  return (
    <MaterialContextGlobal.Provider
      value={{
        title,
        setTitle,
        idUser,
        limparStates,
        materiais,
        loadMaterias,
        quant,
        setQuant,
        nav,
        setNav,
        delMaterial,
        update,
        toggleUp,
        cadastrar,
        matCad
      }}>
      {props.children}
    </MaterialContextGlobal.Provider>
  );
}