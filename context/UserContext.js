import React from 'react';
import qs from 'qs';
import API from '../config';

export const UserContextGlobal = React.createContext({});

export default function UserContext(props) {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [erroMsg, setErroMsg] = React.useState('')
  const [userData, setUserData] = React.useState(null)

  const [logado, setLogado] = React.useState(false);
  const [cadastrado, setCadastrado] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const loginApp = async () => {
    if (validarDadosLogin()) {

      const dados = {
        action: 'login',
        table: 'user',
        email: email,
        senha: senha,
      };
      try {
        let resp = await API.post('/', new URLSearchParams(dados).toString());
        console.log(resp.data);
        const { success, user } = resp.data
        if (success) {
          setLogado(true)
          setUserData(user)
        }
        else
          setErroMsg(resp.data.mensagem)
        // return user;
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
        // Trate o erro conforme necessário
      }
      limparStates()
    }
  };

  function limparStates() {
    setNome("")
    setEmail("")
    setSenha("")
  }


  const cadastroApp = async () => {
    if (validarDadosCadastro()) {
      const dados = qs.stringify({
        'action': 'create',
        'table': 'user',
        'data[nome]': nome,
        'data[email]': email,
        'data[senha]': senha,
        'data[admin]': 0,
      })
      try {
        let resp = await API.post('/', dados);
        console.log(resp.data);
        const { success } = resp.data;

        if (success)
          setCadastrado(true)
        else
          setErroMsg(resp.data.mensagem)
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
        // Trate o erro conforme necessário
      }
    }
  };

  function validarDadosCadastro() {
    if (nome == "") {
      setErroMsg("O nome está vazio")
    } else if (email.length < 5 || email.match("@")) {
      setErroMsg("Email invalido, no minimo deve ter um @")
    } else if (senha.length < 6) {
      setErroMsg("Senha menor que minimo requisitado")
    } else {
      return true
    }
    return false
  }

  function validarDadosLogin() {
    if (email.length < 5 || email.match("@") == null) {
      setErroMsg("Email invalido, no minimo deve ter um @")
    } else if (senha.length < 6) {
      setErroMsg("Senha menor que minimo requisitado")
    } else {
      return true
    }
    return false;
  }


  return (
    <UserContextGlobal.Provider
      value={{
        nome,
        setNome,
        email,
        setEmail,
        senha,
        setSenha,
        logado,
        showModal,
        hideModal,
        visible,
        loginApp,
        cadastroApp,
        erroMsg,
        cadastrado,
        setErroMsg,
        userData
      }}>
      {props.children}
    </UserContextGlobal.Provider>
  );
}
