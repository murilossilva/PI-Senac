import GlobalStyle from './styles/global';
import Intro from './components/intro';
import PreLogin from './components/pre-login'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ClienteLogin from './components/cliente-login';
import { useEffect } from 'react';
import RecuperarSenha from './components/recuperar-senha';
import ConfirmaRecuperarSenha from './components/confirma-recuperar-senha';
import CadastroCliente from './components/cadastro-cliente';
import CadastroClienteSucesso from './components/cadastro-cliente-sucesso';
import HomeUsuarioCliente from './components/home-usuario-cliente';
import FazerReserva from './components/fazer-reserva';
import ReservaSucesso from './components/reserva-sucesso';

const Container = styled.div`
  background-color: #fdddb1;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

function App() {

  useEffect(() => {
  })

  return (
    <>
      <Container>
        <Switch>
          <Route exact path='/' component={Intro}/>
          <Route path='/pre-login' component={PreLogin}/>
          <Route path='/cliente-login' component={ClienteLogin}/>
          <Route path='/recuperar-senha' component={RecuperarSenha}/>
          <Route path='/confirma-recuperar-senha' component={ConfirmaRecuperarSenha}/>
          <Route path='/cadastro-cliente' component={CadastroCliente}/>
          <Route path='/cadastro-cliente-sucesso' component={CadastroClienteSucesso}/>
          <Route path='/home-usuario-cliente' component={HomeUsuarioCliente}/>
          <Route path='/fazer-reserva' component={FazerReserva}/>
          <Route path='/reserva-sucesso' component={ReservaSucesso}/>

        </Switch>
      </Container>
      <ToastContainer autoClose={3000} position={ toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
